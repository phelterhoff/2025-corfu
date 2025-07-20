// Korfu Urlaubsplan SPA - Haupt-JavaScript
// Single Page Application Logik mit Leaflet-Karte

class KorfuUrlaubsApp {
    constructor() {
        this.aktuellerTag = 1;
        this.karte = null;
        this.markerGroup = null;
        this.routenGroup = null;
        this.placesService = null;
        this.aktuelleAnsicht = 'map'; // 'map' oder 'details'
        this.alleMarkerSichtbar = false;
        
        this.init();
    }

    init() {
        this.initKarte();
        this.initEventListeners();
        this.ladeTag(this.aktuellerTag);
        this.aktualisiereURL();
        this.behandleURLHash();
    }

    // Karten-Initialisierung
    initKarte() {
        // Google Maps initialisieren
        this.karte = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 39.7205, lng: 19.6750 }, // Agios Georgios Pagi
            zoom: 13,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false
        });

        this.markerGroup = []; // Array für Google Maps Marker
        this.routenGroup = []; // Array für Google Maps Polylines
        this.placesService = new google.maps.places.PlacesService(this.karte);
    }

    // Event Listeners
    initEventListeners() {
        // Tag-Navigation
        document.getElementById('daySelector').addEventListener('change', (e) => {
            this.aktuellerTag = parseInt(e.target.value);
            this.ladeTag(this.aktuellerTag);
            this.aktualisiereURL();
        });

        document.getElementById('prevDay').addEventListener('click', () => {
            if (this.aktuellerTag > 1) {
                this.aktuellerTag--;
                this.ladeTag(this.aktuellerTag);
                this.aktualisiereURL();
            }
        });

        document.getElementById('nextDay').addEventListener('click', () => {
            if (this.aktuellerTag < 15) {
                this.aktuellerTag++;
                this.ladeTag(this.aktuellerTag);
                this.aktualisiereURL();
            }
        });

        // Ansicht umschalten
        document.getElementById('showMap').addEventListener('click', () => {
            this.setzeAnsicht('map');
        });

        document.getElementById('showDetails').addEventListener('click', () => {
            this.setzeAnsicht('details');
        });

        // Karten-Steuerung
        document.getElementById('showAllDays').addEventListener('click', () => {
            this.zeigeAlleTage();
        });

        document.getElementById('showBoatTours').addEventListener('click', () => {
            this.zeigeNurBootstouren();
        });

        // Browser-Navigation
        window.addEventListener('popstate', () => {
            this.behandleURLHash();
        });

        // Responsive Karten-Anpassung
        window.addEventListener('resize', () => {
            if (this.karte) {
                google.maps.event.trigger(this.karte, 'resize');
            }
        });
    }

    // Tag laden und anzeigen
    ladeTag(tagId) {
        const tag = getTagById(tagId);
        if (!tag) return;

        // Tag-Selektor aktualisieren
        document.getElementById('daySelector').value = tagId;

        // Navigation-Buttons aktualisieren
        document.getElementById('prevDay').disabled = (tagId === 1);
        document.getElementById('nextDay').disabled = (tagId === 15);

        // Titel aktualisieren
        document.getElementById('mapTitle').textContent = `Tag ${tagId} - ${tag.kurztitel}`;
        document.getElementById('dayTitle').textContent = `Tag ${tagId} - ${tag.titel}`;

        // Karte für diesen Tag laden
        this.ladeKarteFuerTag(tagId);

        // Locations laden
        this.ladeLocations(tag);

        // Details laden
        this.ladeDetails(tag);

        // Animation
        this.animiereInhalt();
    }

    // Karte für spezifischen Tag laden
    ladeKarteFuerTag(tagId) {
        // Vorherige Marker und Routen löschen
        this.markerGroup.forEach(marker => marker.setMap(null));
        this.markerGroup = [];
        this.routenGroup.forEach(route => route.setMap(null));
        this.routenGroup = [];

        const tag = getTagById(tagId);
        if (!tag || !tag.locations) return;

        const markers = [];

        // Marker für alle Locations des Tages
        tag.locations.forEach(location => {
            const marker = this.erstelleMarker(location, tag);
                    this.markerGroup.push(marker);
            markers.push([location.lat, location.lng]);
        });

        // Bootstour-Route zeichnen
        if (tag.istBootstour && tag.bootsroute) {
            this.zeichneBootsroute(tag.bootsroute, tag.id);
        }

        // Karte auf die Marker zentrieren
        if (markers.length > 0) {
            if (markers.length === 1) {
                this.karte.setCenter({ lat: markers[0][0], lng: markers[0][1] });
                this.karte.setZoom(14);
            } else {
                const bounds = new google.maps.LatLngBounds();
                markers.forEach(pos => bounds.extend({ lat: pos[0], lng: pos[1] }));
                this.karte.fitBounds(bounds);
            }
        }

        this.alleMarkerSichtbar = false;
    }

    // Marker erstellen
    erstelleMarker(location, tag) {
        

        let markerColor = this.getFarbeFuerTyp(location.typ, tag.istBootstour);

        const customIcon = {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: markerColor,
            fillOpacity: 1,
            strokeWeight: 3,
            strokeColor: 'white',
            scale: 12,
        };

        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: this.karte,
            icon: customIcon,
            title: location.name
        });

        // InfoWindow mit Details
        const infoWindowContent = `
            <div style="min-width: 200px;">
                <h4 style="margin-bottom: 8px; color: #0066cc;">${location.name}</h4>
                <p style="margin: 4px 0;"><strong>Tag ${tag.id}:</strong> ${tag.kurztitel}</p>
                ${location.zeit ? `<p style="margin: 4px 0;"><strong>Zeit:</strong> ${location.zeit}</p>` : ''}
                <p style="margin: 4px 0; line-height: 1.4;">${location.beschreibung}</p>
                <button onclick="app.ladeTag(${tag.id})" style="background: #0066cc; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; margin-top: 8px;">
                    Tag ${tag.id} anzeigen
                </button>
            </div>
        `;

        const infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });

        marker.addListener('click', () => {
            infoWindow.open(this.karte, marker);
        });
        
        return marker;
    }

    // Icon für Location-Typ
    getIconFuerTyp(typ) {
        const icons = {
            'ankunft': '✈️',
            'abreise': '✈️',
            'strand': '🏖️',
            'schnorcheln': '🤿',
            'restaurant': '🍽️',
            'cafe': '☕',
            'hafen': '⚓',
            'bootsvermietung': '🛥️',
            'unterkunft': '🏠',
            'dorf': '🏘️',
            'aussicht': '👁️',
            'burg': '🏰',
            'kloster': '⛪',
            'bucht': '🌊',
            'höhle': '🕳️',
            'wasserfall': '💧',
            'felsformation': '🗿',
            'zentrum': '📍',
            'parkplatz': '🅿️'
        };
        return icons[typ] || '📍';
    }

    // Farbe für Location-Typ
    getFarbeFuerTyp(typ, istBootstour) {
        if (istBootstour) return '#ff8c42'; // Orange für Bootstouren
        
        const farben = {
            'ankunft': '#666666',
            'abreise': '#666666',
            'strand': '#00b3b3',
            'schnorcheln': '#0066cc',
            'restaurant': '#2ecc71',
            'cafe': '#f39c12',
            'hafen': '#34495e',
            'bootsvermietung': '#e67e22',
            'unterkunft': '#9b59b6',
            'dorf': '#8e44ad',
            'aussicht': '#e74c3c',
            'burg': '#c0392b',
            'kloster': '#d35400',
            'bucht': '#3498db',
            'höhle': '#7f8c8d',
            'wasserfall': '#1abc9c',
            'felsformation': '#95a5a6',
            'zentrum': '#0066cc',
            'parkplatz': '#bdc3c7'
        };
        return farben[typ] || '#0066cc';
    }

    // Bootstour-Route zeichnen
    zeichneBootsroute(route, tagId) {
        if (!route || route.length < 2) return;

        // Farbe basierend auf Tag
        const bootstour = urlaubsDaten.bootstouren.find(bt => bt.tag === tagId);
        const farbe = bootstour ? bootstour.farbe : '#00b3b3';

        const polyline = new google.maps.Polyline({
            path: route.map(coords => ({ lat: coords[0], lng: coords[1] })),
            geodesic: true,
            strokeColor: farbe,
            strokeOpacity: 0.8,
            strokeWeight: 4,
            icons: [{
                icon: { path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW },
                offset: '100%'
            }],
            map: this.karte
        });

        this.routenGroup.push(polyline);

        // InfoWindow für Route
        const tag = getTagById(tagId);
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div>
                    <h4 style="color: ${farbe};">🛥️ ${bootstour ? bootstour.name : 'Bootstour'}</h4>
                    <p><strong>Tag ${tagId}:</strong> ${tag.kurztitel}</p>
                    <p>Bootsroute mit ${route.length} Stopps</p>
                </div>
            `
        });

        polyline.addListener('click', (event) => {
            infoWindow.setPosition(event.latLng);
            infoWindow.open(this.karte);
        });
    }

    // Alle Tage anzeigen
    zeigeAlleTage() {
        this.markerGroup.forEach(marker => marker.setMap(null));
        this.markerGroup = [];
        this.routenGroup.forEach(route => route.setMap(null));
        this.routenGroup = [];

        const alleTage = urlaubsDaten.tage;

        alleTage.forEach(tag => {
            // Marker für alle Locations
            if (tag.locations) {
                tag.locations.forEach(location => {
                    const marker = this.erstelleMarker(location, tag);
                    this.markerGroup.push(marker);
                });
            }

            // Bootsrouten
            if (tag.istBootstour && tag.bootsroute) {
                this.zeichneBootsroute(tag.bootsroute, tag.id);
            }
        });

        // Karte auf gesamte Korfu Insel zentrieren für Übersicht
        this.karte.setCenter({ lat: 39.6500, lng: 19.7500 });
        this.karte.setZoom(10);
        document.getElementById('mapTitle').textContent = 'Alle 15 Tage - Kompletter Urlaubsplan';
        this.alleMarkerSichtbar = true;
    }

    // Nur Bootstouren anzeigen
    zeigeNurBootstouren() {
        this.markerGroup.forEach(marker => marker.setMap(null));
        this.markerGroup = [];
        this.routenGroup.forEach(route => route.setMap(null));
        this.routenGroup = [];

        const bootstourenTage = getBootstourenTage();

        bootstourenTage.forEach(tag => {
            // Marker für Bootstour-Locations
            if (tag.locations) {
                tag.locations.forEach(location => {
                    const marker = this.erstelleMarker(location, tag);
                    this.markerGroup.push(marker);
                });
            }

            // Bootsrouten zeichnen
            if (tag.bootsroute) {
                this.zeichneBootsroute(tag.bootsroute, tag.id);
            }
        });

        this.karte.setCenter({ lat: 39.6800, lng: 19.7000 });
        this.karte.setZoom(11);
        document.getElementById('mapTitle').textContent = 'Bootstouren - Tag 4, 7, 10 & 13';
        this.alleMarkerSichtbar = false;
    }


    // Locations für Tag laden
    async ladeLocations(tag) {
        const locationsGrid = document.getElementById('locationsGrid');
        locationsGrid.innerHTML = '';

        if (!tag.locations || tag.locations.length === 0) {
            locationsGrid.innerHTML = '<p style="color: var(--text-light); text-align: center;">Keine spezifischen Orte für diesen Tag.</p>';
            return;
        }

        for (const location of tag.locations) {
            const locationCard = document.createElement('div');
            locationCard.className = 'location-card';

            // Click-Handler für Karte
            locationCard.addEventListener('click', () => {
                this.karte.setCenter({ lat: location.lat, lng: location.lng });
                this.karte.setZoom(16);
                // Scroll zur Karte
                document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
            });

            const imageUrl = await this.fetchLocationImage(location);

            locationCard.innerHTML = `
                <div class="location-image">
                    <img src="${imageUrl}" alt="${location.name}" class="location-img">
                </div>
                <div class="location-content">
                    <div class="location-title">${location.name}</div>
                    <div class="location-time">🕐 ${location.zeit || 'Ganztägig'}</div>
                    <div class="location-description">${location.beschreibung}</div>
                    <div class="location-coordinates">📍 ${location.lat.toFixed(4)}°N, ${location.lng.toFixed(4)}°E</div>
                    <div class="location-tag">${this.getLocationTypName(location.typ)}</div>
                </div>
            `;

            locationsGrid.appendChild(locationCard);
        }
    }

    // Funktion zum Abrufen von Bildern für Locations
    async fetchLocationImage(location) {
        const defaultPlaceholder = "https://via.placeholder.com/150";

        // 1. Try Google Places Photos API
        try {
            const request = {
                query: location.name,
                fields: ['place_id']
            };

            const findPlacePromise = new Promise((resolve, reject) => {
                this.placesService.findPlaceFromQuery(request, (results, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK && results && results.length > 0) {
                        resolve(results[0].place_id);
                    } else {
                        reject(new Error('Place not found or error: ' + status));
                    }
                });
            });

            const placeId = await findPlacePromise;

            const detailsRequest = {
                placeId: placeId,
                fields: ['photos']
            };

            const getDetailsPromise = new Promise((resolve, reject) => {
                this.placesService.getDetails(detailsRequest, (place, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK && place && place.photos && place.photos.length > 0) {
                        resolve(place.photos[0].photo_reference);
                    } else {
                        reject(new Error('No photos found or error: ' + status));
                    }
                });
            });

            const photoReference = await getDetailsPromise;
            return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${googleMapsApiKey}`;

        } catch (error) {
            console.error("Error fetching image from Google Places Photos:", error);
        }

        // 2. Try Wikipedia
        try {
            const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(location.name)}&prop=pageimages&format=json&pithumbsize=200&origin=*`;
            const response = await fetch(wikiUrl);
            const data = await response.json();

            const pages = data.query.pages;
            const pageId = Object.keys(pages)[0];
            const page = pages[pageId];

            if (page && page.thumbnail && page.thumbnail.source) {
                return page.thumbnail.source;
            }
        } catch (error) {
            console.error("Error fetching image from Wikipedia:", error);
        }

        return defaultPlaceholder;
    }

    // Name für Location-Typ
    getLocationTypName(typ) {
        const typNames = {
            'ankunft': 'Ankunft',
            'abreise': 'Abreise',
            'strand': 'Strand',
            'schnorcheln': 'Schnorcheln',
            'restaurant': 'Restaurant',
            'cafe': 'Café',
            'hafen': 'Hafen',
            'bootsvermietung': 'Bootsvermietung',
            'unterkunft': 'Unterkunft',
            'dorf': 'Dorf',
            'aussicht': 'Aussichtspunkt',
            'burg': 'Burg/Festung',
            'kloster': 'Kloster',
            'bucht': 'Bucht',
            'höhle': 'Höhle',
            'wasserfall': 'Wasserfall',
            'felsformation': 'Felsformation',
            'zentrum': 'Zentrum',
            'parkplatz': 'Parkplatz'
        };
        return typNames[typ] || typ;
    }

    // Emoji für Highlight ermitteln
    getHighlightEmoji(highlight, typ) {
        const highlightLower = highlight.toLowerCase();
        
        if (highlightLower.includes('schnorchel')) return '🤿';
        if (highlightLower.includes('boot')) return '⛵';
        if (highlightLower.includes('strand')) return '🏖️';
        if (highlightLower.includes('restaurant') || highlightLower.includes('essen')) return '🍽️';
        if (highlightLower.includes('dorf') || highlightLower.includes('village')) return '🏘️';
        if (highlightLower.includes('sonnenuntergang')) return '🌅';
        if (highlightLower.includes('burg') || highlightLower.includes('kastro')) return '🏰';
        if (highlightLower.includes('wasserfall')) return '💧';
        if (highlightLower.includes('kloster')) return '⛪';
        if (highlightLower.includes('höhle')) return '🕳️';
        if (highlightLower.includes('bucht')) return '🌊';
        if (highlightLower.includes('fische')) return '🐠';
        if (highlightLower.includes('unterwasser')) return '🐟';
        if (highlightLower.includes('ankunft')) return '✈️';
        if (highlightLower.includes('abschied')) return '👋';
        if (highlightLower.includes('entspann')) return '😌';
        
        // Basierend auf Tag-Typ
        if (typ === 'schnorcheln') return '🤿';
        if (typ === 'bootstour') return '⛵';
        if (typ === 'kulturell') return '🏛️';
        if (typ === 'strand') return '🏖️';
        if (typ === 'natur') return '🌿';
        
        return '✨';
    }

    // Beschreibung für Highlight generieren
    getHighlightBeschreibung(highlight, tag) {
        const highlightLower = highlight.toLowerCase();
        
        if (highlightLower.includes('schnorchel')) {
            return 'Kristallklares Wasser und bunte Fische entdecken - perfekt für die ganze Familie.';
        }
        if (highlightLower.includes('boot')) {
            return 'Aufregende Bootstour entlang der traumhaften Küste von Korfu.';
        }
        if (highlightLower.includes('restaurant') || highlightLower.includes('delfini')) {
            return 'Authentische griechische Küche mit frischen Meeresfrüchten genießen.';
        }
        if (highlightLower.includes('dorf') || highlightLower.includes('afionas')) {
            return 'Traditionelles griechisches Dorfleben und verwinkelte Gassen erkunden.';
        }
        if (highlightLower.includes('sonnenuntergang')) {
            return 'Spektakulärer Sonnenuntergang mit Panoramablick über die Ionischen Inseln.';
        }
        if (highlightLower.includes('burg') || highlightLower.includes('kastro')) {
            return 'Byzantinische Geschichte hautnah erleben mit 360°-Panoramablick.';
        }
        if (highlightLower.includes('wasserfall')) {
            return 'Naturerlebnis pur: 15m hoher Wasserfall in grüner Berglandschaft.';
        }
        if (highlightLower.includes('porto timoni')) {
            return 'Die berühmte Doppelbucht - ein wahres Naturparadies nur per Boot erreichbar.';
        }
        if (highlightLower.includes('unterwasser') || highlightLower.includes('höhlen')) {
            return 'Unberührte Unterwasserwelt mit kleinen Höhlen und Fischschwärmen.';
        }
        if (highlightLower.includes('entspann')) {
            return 'Perfekter Tag zum Relaxen am traumhaften Sandstrand.';
        }
        
        return `Ein besonderes Erlebnis an Tag ${tag.id} Ihres Korfu-Urlaubs.`;
    }


    // Details für Tag laden
    ladeDetails(tag) {
        const contentDiv = document.getElementById('dayContent');
        const summaryDiv = document.getElementById('daySummary');

        // Wetter anzeigen
        document.querySelector('.day-weather').textContent = tag.wetter;

        // Aktivitäten rendern
        let aktivitaetenHtml = '<h3>🗓️ Tagesablauf</h3><ul>';
        tag.aktivitaeten.forEach(aktivitaet => {
            aktivitaetenHtml += `<li>${aktivitaet}</li>`;
        });
        aktivitaetenHtml += '</ul>';

        // Highlights
        let highlightsHtml = '<h3>✨ Highlights</h3><ul>';
        tag.highlights.forEach(highlight => {
            highlightsHtml += `<li>${highlight}</li>`;
        });
        highlightsHtml += '</ul>';

        // Locations
        let locationsHtml = '<h3>📍 Locations</h3>';
        tag.locations.forEach(location => {
            const icon = this.getIconFuerTyp(location.typ);
            locationsHtml += `
                <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #0066cc;">
                    <h4>${icon} ${location.name}</h4>
                    <p><strong>Zeit:</strong> ${location.zeit || 'Ganztägig'}</p>
                    <p>${location.beschreibung}</p>
                    ${location.lat && location.lng ? `<small style="color: #666;">GPS: ${location.lat.toFixed(4)}°N, ${location.lng.toFixed(4)}°E</small>` : ''}
                </div>
            `;
        });

        contentDiv.innerHTML = aktivitaetenHtml + highlightsHtml + locationsHtml;

        // Zusammenfassung
        let summaryHtml = `
            <h4>📋 Tageszusammenfassung</h4>
            <p><strong>Typ:</strong> ${this.getTypBeschreibung(tag.typ)}</p>
            ${tag.istBootstour ? '<p><strong>🛥️ Bootstour-Tag</strong> - Besondere Vorbereitung nötig!</p>' : ''}
            ${tag.tipps ? `<p><strong>💡 Tipp:</strong> ${tag.tipps}</p>` : ''}
        `;
        summaryDiv.innerHTML = summaryHtml;
    }

    // Typ-Beschreibung
    getTypBeschreibung(typ) {
        const beschreibungen = {
            'ankunft': '🛬 Anreisetag',
            'abreise': '🛫 Abreisetag',
            'schnorcheln': '🤿 Schnorchel-Abenteuer',
            'bootstour': '⛵ Bootstour',
            'kulturell': '🏛️ Kultur & Sightseeing',
            'strand': '🏖️ Entspannter Strandtag',
            'natur': '🌿 Naturerlebnis',
            'abschied': '👋 Abschiedstag'
        };
        return beschreibungen[typ] || typ;
    }

    // Ansicht umschalten
    setzeAnsicht(ansicht) {
        this.aktuelleAnsicht = ansicht;

        const mapSection = document.getElementById('mapSection');
        const detailsSection = document.getElementById('detailsSection');
        const showMapBtn = document.getElementById('showMap');
        const showDetailsBtn = document.getElementById('showDetails');

        if (ansicht === 'map') {
            // Desktop: beide anzeigen, Mobile: nur Karte
            mapSection.classList.remove('hidden');
            showMapBtn.classList.add('active');
            showDetailsBtn.classList.remove('active');

            if (window.innerWidth <= 767) {
                detailsSection.classList.add('hidden');
            }

            // Karte neu laden nach Ansichtwechsel
            setTimeout(() => {
                google.maps.event.trigger(this.karte, 'resize');
            }, 100);
        } else {
            // Details-Ansicht
            detailsSection.classList.remove('hidden');
            showDetailsBtn.classList.add('active');
            showMapBtn.classList.remove('active');

            if (window.innerWidth <= 767) {
                mapSection.classList.add('hidden');
            }
        }
    }

    // Content-Animation
    animiereInhalt() {
        const contentElements = [
            document.getElementById('locationsGrid'),
            document.getElementById('dayContent'),
            document.getElementById('daySummary')
        ];

        contentElements.forEach(element => {
            element.classList.remove('fade-in');
            setTimeout(() => {
                element.classList.add('fade-in');
            }, 50);
        });
    }

    // URL-Hash-Management
    aktualisiereURL() {
        const newHash = `#tag-${this.aktuellerTag}`;
        if (window.location.hash !== newHash) {
            window.history.pushState({}, '', newHash);
        }
    }

    behandleURLHash() {
        const hash = window.location.hash;
        if (hash.startsWith('#tag-')) {
            const tagId = parseInt(hash.replace('#tag-', ''));
            if (tagId >= 1 && tagId <= 15) {
                this.aktuellerTag = tagId;
                this.ladeTag(tagId);
            }
        }
    }

    // Mobile-spezifische Funktionen
    isMobile() {
        return window.innerWidth <= 767;
    }

    // Responsive Layout-Anpassungen
    anpassenAnViewport() {
        if (this.isMobile()) {
            // Mobile: Standard auf Details-Ansicht
            if (this.aktuelleAnsicht === 'map') {
                document.getElementById('detailsSection').classList.add('hidden');
            } else {
                document.getElementById('mapSection').classList.add('hidden');
            }
        } else {
            // Desktop: beide Ansichten sichtbar
            document.getElementById('mapSection').classList.remove('hidden');
            document.getElementById('detailsSection').classList.remove('hidden');
        }
    }
}

window.initMap = () => {
    window.app = new KorfuUrlaubsApp();

    // Responsive Layout bei Resize
    window.addEventListener('resize', () => {
        app.anpassenAnViewport();
    });

    // Initial responsive Setup
    app.anpassenAnViewport();

    console.log('🏖️ Korfu Urlaubsplan SPA geladen!');
    console.log(`📅 ${urlaubsDaten.tage.length} Tage verfügbar`);
    console.log(`🗺️ ${getAllLocations().length} Locations auf der Karte`);
    console.log(`⛵ ${getBootstourenTage().length} Bootstouren geplant`);
};

// Globale Hilfsfunktionen für Popup-Callbacks
window.ladeTag = (tagId) => {
    if (window.app) {
        window.app.ladeTag(tagId);
    }
};

// Service Worker für Offline-Funktionalität (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service Worker könnte hier registriert werden
        console.log('🌐 App bereit für Offline-Nutzung');
    });
}