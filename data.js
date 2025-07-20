// Korfu Urlaubsplan Daten
// Strukturierte Daten aus Urlaubsplan.md für SPA

const urlaubsDaten = {
    // Basis-Informationen
    urlaubsInfo: {
        titel: "Der perfekte Korfu-Familienurlaub: 14-Tage-Plan",
        zeitraum: "27.07. - 10.08.2025",
        basislager: "Agios Georgios Pagi",
        beschreibung: "Agios Georgios Pagi ist das ideale Basislager für eine unvergessliche Familienerfahrung auf Korfu."
    },

    // Alle 15 Tage strukturiert
    tage: [
        {
            id: 1,
            datum: "Sonntag, 27.07.2025",
            titel: "Ankunft und Eingewöhnung",
            kurztitel: "Ankunft",
            wetter: "☀️ 30°C",
            typ: "ankunft",
            istBootstour: false,
            highlights: ["Erster Strandbesuch", "Grundeinkauf", "Orientierung"],
            locations: [
                {
                    name: "Korfu Flughafen",
                    lat: 39.6075,
                    lng: 19.9118,
                    typ: "ankunft",
                    beschreibung: "Landung 16:00, Mietwagen-Übernahme",
                    zeit: "16:00-17:00"
                },
                {
                    name: "Agios Georgios Pagi Zentrum",
                    lat: 39.7201,
                    lng: 19.6748,
                    typ: "unterkunft",
                    beschreibung: "Check-in Ferienwohnung",
                    zeit: "17:45-18:15"
                },
                {
                    name: "Agios Georgios beach",
                    lat: 39.7205,
                    lng: 19.6750,
                    typ: "strand",
                    beschreibung: "Erster kurzer Strandbesuch zum Ankommen",
                    zeit: "19:00-20:00"
                }
            ],
            aktivitaeten: [
                "16:00: Landung auf Korfu",
                "16:00-17:00: Mietwagen-Übernahme am Flughafen",
                "17:00-17:45: Fahrt nach Agios Georgios Pagi (ca. 35km, 45 Min.)",
                "17:45-18:15: Check-in Ferienwohnung, Koffer auspacken",
                "18:15-19:00: Grundeinkauf bei Tony's Supermarket",
                "19:00-20:00: Erster kurzer Strandbesuch",
                "20:00-21:00: Einfaches Abendessen kochen",
                "21:30: Kinder ins Bett"
            ],
            tipps: "Sonnencreme SPF 50+ nicht vergessen! Nur 200m zum Strand."
        },
        {
            id: 2,
            datum: "Montag, 28.07.2025",
            titel: "Erster Schnorcheltag",
            kurztitel: "Schnorcheltag",
            wetter: "☀️ 31°C",
            typ: "schnorcheln",
            istBootstour: false,
            highlights: ["Erste Schnorchelerfahrung", "Fische entdecken", "Delfini Restaurant"],
            locations: [
                {
                    name: "Agios Georgios beach",
                    lat: 39.7205,
                    lng: 19.6750,
                    typ: "schnorcheln",
                    beschreibung: "Schnorchel-Session am Hauptstrand, Wassertiefe 0,5-1,5m",
                    zeit: "9:00-11:30"
                },
                {
                    name: "Delfini Restaurant",
                    lat: 39.72071,
                    lng: 19.67517,
                    typ: "restaurant",
                    beschreibung: "Mittagessen - Griechischer Salat, gegrillter Fisch",
                    zeit: "12:00-14:00"
                }
            ],
            aktivitaeten: [
                "7:30-8:30: Frühstück auf der Terrasse",
                "8:30-9:00: Schnorchelausrüstung vorbereiten",
                "9:00-11:30: Schnorchel-Session am Hauptstrand",
                "11:30-12:00: Umziehen, kurze Pause",
                "12:00-14:00: Mittagessen im Delfini Restaurant",
                "14:00-16:30: Mittagsruhe im Apartment",
                "16:30-18:30: Zweite Strandrunde - Sandspiele",
                "19:30-20:30: Abendessen kochen"
            ],
            tipps: "Erste Fische: kleine Meeräschen, Grundeln. Brot für Fischfütterung mitnehmen!"
        },
        {
            id: 3,
            datum: "Dienstag, 29.07.2025",
            titel: "Afionas Village & Sunset",
            kurztitel: "Afionas Village",
            wetter: "☀️ 29°C",
            typ: "kulturell",
            istBootstour: false,
            highlights: ["Traditionelles Dorf", "Aussichtspunkt", "Sonnenuntergang"],
            locations: [
                {
                    name: "Afionas Dorfzentrum",
                    lat: 39.7219928,
                    lng: 19.6605235,
                    typ: "dorf",
                    beschreibung: "Spaziergang durch verwinkelte Gassen",
                    zeit: "15:15-17:00"
                },
                {
                    name: "Afionas Aussichtspunkt",
                    lat: 39.72439,
                    lng: 19.66052,
                    typ: "aussicht",
                    beschreibung: "Sonnenuntergang beobachten - einer der schönsten Spots",
                    zeit: "19:30-20:30"
                }
            ],
            aktivitaeten: [
                "8:00-9:00: Gemütliches Frühstück",
                "9:00-12:00: Strandzeit - anderen Strandabschnitt erkunden",
                "12:00-13:00: Leichtes Mittagessen zuhause",
                "15:00-15:15: Kurze Fahrt nach Afionas (nur 1km!)",
                "15:15-17:00: Afionas Dorf erkunden",
                "17:00-18:00: Wanderung zum Aussichtspunkt",
                "18:00-19:30: Abendessen in Taverne Afionas",
                "19:30-20:30: Sonnenuntergang beobachten"
            ],
            tipps: "Decke zum Sitzen mitnehmen. Fotos für die Großeltern!"
        },
        {
            id: 4,
            datum: "Mittwoch, 30.07.2025",
            titel: "Bootstour nach Porto Timoni",
            kurztitel: "Porto Timoni Bootstour",
            wetter: "☀️ 32°C",
            typ: "bootstour",
            istBootstour: true,
            highlights: ["Erste Bootstour", "Doppelbucht", "Wassertaxi"],
            locations: [
                {
                    name: "Hafen Agios Georgios",
                    lat: 39.7205,
                    lng: 19.6748,
                    typ: "hafen",
                    beschreibung: "Abfahrt mit Wassertaxi nach Porto Timoni",
                    zeit: "9:30-10:00"
                },
                {
                    name: "Porto Timoni Beach",
                    lat: 39.71503,
                    lng: 19.65748,
                    typ: "strand",
                    beschreibung: "Berühmte Doppelbucht - linke Bucht für Kinder",
                    zeit: "10:20-13:00"
                },
                {
                    name: "Ammos Seaside",
                    lat: 39.71906,
                    lng: 19.67743,
                    typ: "restaurant",
                    beschreibung: "Mittagessen mit Spielplatz",
                    zeit: "13:30-15:00"
                }
            ],
            bootsroute: [
                { lat: 39.7205, lng: 19.6748 },
                { lat: 39.71503, lng: 19.65748 }
            ],
            aktivitaeten: [
                "8:00-9:00: Frühstück, Proviant vorbereiten",
                "9:00-9:30: Fahrt zum Hafen",
                "9:30-10:00: Wassertaxi buchen (€10-15/Person)",
                "10:00-10:20: Bootsfahrt - erstes Abenteuer!",
                "10:20-13:00: Porto Timoni erkunden",
                "13:00-13:30: Rückfahrt mit Wassertaxi",
                "13:30-15:00: Mittagessen im Ammos Seaside",
                "16:30-18:00: Ruhiger Strandnachmittag"
            ],
            tipps: "Schwimmwesten werden gestellt. Nach Delfinen Ausschau halten!"
        },
        {
            id: 5,
            datum: "Donnerstag, 31.07.2025",
            titel: "Historischer Ausflug - Angelokastro",
            kurztitel: "Angelokastro",
            wetter: "☀️ 30°C",
            typ: "kulturell",
            istBootstour: false,
            highlights: ["Byzantinische Festung", "360° Panoramablick", "Lakones Dorf"],
            locations: [
                {
                    name: "Angelokastro Parkplatz",
                    lat: 39.6784,
                    lng: 19.6872,
                    typ: "parkplatz",
                    beschreibung: "Parken und Tickets kaufen",
                    zeit: "9:30-9:45"
                },
                {
                    name: "Angelokastro Eingang",
                    lat: 39.6784,
                    lng: 19.6872,
                    typ: "burg",
                    beschreibung: "Byzantinische Festung, 360° Panoramablick",
                    zeit: "10:00-11:30"
                },
                {
                    name: "Lakones Dorfplatz",
                    lat: 39.68133,
                    lng: 19.70748,
                    typ: "dorf",
                    beschreibung: "Kaffee und Postkarten kaufen",
                    zeit: "12:00-13:00"
                }
            ],
            aktivitaeten: [
                "7:30-8:30: Früh frühstücken",
                "8:30-9:00: Picknick einpacken",
                "9:00-9:30: Fahrt zum Angelokastro",
                "9:45-10:00: Aufstieg zur Burg (150 Stufen)",
                "10:00-11:30: Burgbesichtigung mit Picknick",
                "11:30-12:00: Abstieg",
                "12:00-13:00: Stopp in Lakones Dorf",
                "15:30-18:00: Strand mit Luftmatratze"
            ],
            tipps: "€3 Erwachsene, Kinder frei. Geschichten über Ritter erzählen!"
        },
        {
            id: 6,
            datum: "Freitag, 01.08.2025",
            titel: "Avlaki Beach Schnorcheln",
            kurztitel: "Avlaki Beach",
            wetter: "☀️ 31°C",
            typ: "schnorcheln",
            istBootstour: false,
            highlights: ["Schnorchel-Paradies", "Neue Fischarten", "Seegraswiesen"],
            locations: [
                {
                    name: "Avlaki Beach",
                    lat: 39.779,
                    lng: 19.941,
                    typ: "strand",
                    beschreibung: "Kieselstrand mit kristallklarem Wasser, Schnorchel-Paradies",
                    zeit: "9:30-12:30"
                },
                {
                    name: "Cavo Barbaro Taverne",
                    lat: 39.77848,
                    lng: 19.93886,
                    typ: "restaurant",
                    beschreibung: "Frischer Oktopus, hausgemachte Pommes",
                    zeit: "12:30-14:00"
                }
            ],
            aktivitaeten: [
                "8:00-9:00: Frühstück, Strandtasche packen",
                "9:00-9:30: Fahrt nach Avlaki Beach (25 Min.)",
                "9:30-12:30: Schnorchel-Paradies Avlaki",
                "12:30-14:00: Mittagessen in Cavo Barbaro Taverne",
                "14:00-14:30: Rückfahrt",
                "16:00-18:00: Heimatstrand - Sandburgen-Wettbewerb",
                "20:00-21:30: Filmabend: 'Findet Nemo'"
            ],
            tipps: "Neue Fischarten: Papageienfische, Brassen. Schaukeln für Kinder in der Taverne!"
        },
        {
            id: 7,
            datum: "Samstag, 02.08.2025",
            titel: "Bootverleih-Tag",
            kurztitel: "Bootverleih",
            wetter: "☀️ 33°C",
            typ: "bootstour",
            istBootstour: true,
            highlights: ["Eigenes Boot", "Coastal Route", "Käpt'n spielen"],
            locations: [
                {
                    name: "Bootsvermietung Agios Georgios",
                    lat: 39.7205,
                    lng: 19.6748,
                    typ: "bootsvermietung",
                    beschreibung: "30 PS Boot für 6 Personen, Einweisung",
                    zeit: "9:00-9:30"
                },
                {
                    name: "Arillas Beach",
                    lat: 39.743349,
                    lng: 19.64827,
                    typ: "strand",
                    beschreibung: "Erster Stopp der Coastal Route",
                    zeit: "10:00-11:00"
                },
                {
                    name: "Agios Stefanos",
                    lat: 39.76171,
                    lng: 19.64989,
                    typ: "hafen",
                    beschreibung: "Mittagspause, Boot vertäuen",
                    zeit: "12:00-13:30"
                },
                {
                    name: "Malibu Taverna",
                    lat: 39.72081,
                    lng: 19.67529,
                    typ: "restaurant",
                    beschreibung: "Abendessen mit Sonnenuntergang",
                    zeit: "18:00-20:00"
                }
            ],
            bootsroute: [
                { lat: 39.7205, lng: 19.6748 },
                { lat: 39.75273, lng: 19.65928 },
                { lat: 39.76171, lng: 19.64989 },
                { lat: 39.7205, lng: 19.6748 }
            ],
            aktivitaeten: [
                "7:00-8:00: Früh aufstehen, großes Frühstück",
                "8:00-8:30: Proviant und Ausrüstung vorbereiten",
                "9:00-9:30: Bootübernahme und Einweisung",
                "9:30-12:00: Erste Bootstour - Easy Coastal Route",
                "12:00-13:30: Mittagspause in Agios Stefanos",
                "13:30-15:30: Rückfahrt mit Badestopps",
                "18:00-20:00: Abendessen im Malibu Taverna",
                "20:30: Früh ins Bett nach aufregendem Tag"
            ],
            tipps: "30 PS Boot führerscheinfrei. Kinder dürfen 'Käpt'n' spielen!"
        },
        {
            id: 8,
            datum: "Sonntag, 03.08.2025",
            titel: "Naturerlebnis Nymfes Wasserfall",
            kurztitel: "Nymfes Wasserfall",
            wetter: "☀️ 28°C",
            typ: "natur",
            istBootstour: false,
            highlights: ["15m Wasserfall", "Waldwanderung", "Naturpool"],
            locations: [
                {
                    name: "Nymfes Dorf",
                    lat: 39.755833,
                    lng: 19.783056,
                    typ: "dorf",
                    beschreibung: "Parken im Dorf, Start der Wanderung",
                    zeit: "9:45-10:00"
                },
                {
                    name: "Nymfes Wasserfall",
                    lat: 39.754840,
                    lng: 19.793619,
                    typ: "wasserfall",
                    beschreibung: "15m hoher Wasserfall, Naturpool für mutige Schwimmer",
                    zeit: "10:00-11:30"
                }
            ],
            aktivitaeten: [
                "8:00-9:00: Gemütlicher Sonntagsbrunch",
                "9:00-9:45: Fahrt nach Nymfes (35 Min.)",
                "10:00-11:30: Wanderung zum Wasserfall",
                "11:30-12:00: Rückweg mit Naturentdeckungen",
                "12:00-13:30: Mittagessen im Dorf Nymfes",
                "14:15-16:00: Mittagsruhe",
                "16:00-18:00: Strand - freies Spielen",
                "20:00-21:00: Sterne beobachten"
            ],
            tipps: "Einfacher Waldweg (800m). Schatten durch Bäume. Felsen vorsichtig erklettern!"
        },
        {
            id: 9,
            datum: "Montag, 04.08.2025",
            titel: "Paleokastritsa Entdeckung",
            kurztitel: "Paleokastritsa",
            wetter: "☀️ 31°C",
            typ: "schnorcheln",
            istBootstour: false,
            highlights: ["Kloster besuchen", "Agios Spiridon Bay", "Meereshöhlen"],
            locations: [
                {
                    name: "Paleokastritsa Zentrum",
                    lat: 39.67472,
                    lng: 19.70918,
                    typ: "zentrum",
                    beschreibung: "Ankunft in Paleokastritsa",
                    zeit: "9:00-9:30"
                },
                {
                    name: "Kloster Paleokastritsa",
                    lat: 39.6695,
                    lng: 19.7015,
                    typ: "kloster",
                    beschreibung: "Kleines Museum mit Ikonen, Garten mit Aussicht",
                    zeit: "9:30-10:30"
                },
                {
                    name: "Agios Spiridon Bay",
                    lat: 39.672177,
                    lng: 19.702979,
                    typ: "bucht",
                    beschreibung: "Geschützte Bucht, viele bunte Fische",
                    zeit: "10:30-12:30"
                }
            ],
            aktivitaeten: [
                "8:00-9:00: Frühstück, Tagesrucksack packen",
                "9:00-9:30: Fahrt nach Paleokastritsa",
                "9:30-10:30: Kloster Paleokastritsa besichtigen",
                "10:30-12:30: Schnorcheln in Agios Spiridon Bay",
                "12:30-14:00: Mittagessen in Akron Taverna",
                "14:00-15:00: Bootsfahrt zu den Grotten (optional)",
                "17:00-18:30: Heimatstrand",
                "20:30-21:30: Gemeinsames Tagebuch führen"
            ],
            tipps: "Eintritt Kloster frei (Spende erwünscht). Bootsanleger zum Reinjumpen!"
        },
        {
            id: 10,
            datum: "Dienstag, 05.08.2025",
            titel: "Große Bootstour",
            kurztitel: "Große Bootstour",
            wetter: "☀️ 32°C",
            typ: "bootstour",
            istBootstour: true,
            highlights: ["10 Seemeilen", "La Grotta", "Rovinia Beach"],
            locations: [
                {
                    name: "Bootsvermietung Agios Georgios",
                    lat: 39.7205,
                    lng: 19.6748,
                    typ: "bootsvermietung",
                    beschreibung: "Boot abholen (gleiches wie Tag 7)",
                    zeit: "8:30-9:00"
                },
                {
                    name: "La Grotta",
                    lat: 39.67377,
                    lng: 19.7186,
                    typ: "höhle",
                    beschreibung: "Berühmte Meereshöhle, vom Boot fotografieren",
                    zeit: "11:00-12:00"
                },
                {
                    name: "Rovinia Beach",
                    lat: 39.670236,
                    lng: 19.727285,
                    typ: "strand",
                    beschreibung: "Traumhafte einsame Bucht, türkisblaues Wasser",
                    zeit: "12:00-14:00"
                }
            ],
            bootsroute: [
                { lat: 39.7205, lng: 19.6748 },
                { lat: 39.67377, lng: 19.7186 },
                { lat: 39.670236, lng: 19.727285 },
                { lat: 39.7205, lng: 19.6748 }
            ],
            aktivitaeten: [
                "7:00-8:00: Früh aufstehen, Power-Frühstück",
                "8:00-8:30: Umfangreiche Vorbereitung",
                "9:00-11:00: Fahrt nach Paleokastritsa (10 Seemeilen)",
                "11:00-12:00: La Grotta erkunden",
                "12:00-14:00: Rovinia Beach",
                "14:00-16:00: Rückfahrt mit Badestopps",
                "19:00-21:00: Abendessen bei Porto Timoni Taverne"
            ],
            tipps: "Doppelte Wassermenge mitnehmen! Delfine suchen während der Fahrt."
        },
        {
            id: 11,
            datum: "Mittwoch, 06.08.2025",
            titel: "Entspannter Strandtag & Canal d'Amour",
            kurztitel: "Entspannter Strandtag",
            wetter: "☀️ 30°C",
            typ: "strand",
            istBootstour: false,
            highlights: ["Strandtag deluxe", "Canal d'Amour", "Liebeskanal"],
            locations: [
                {
                    name: "Agios Georgios beach",
                    lat: 39.7205,
                    lng: 19.6750,
                    typ: "strand",
                    beschreibung: "Beste Liegen reservieren, Beachball und Frisbee",
                    zeit: "9:30-12:00"
                },
                {
                    name: "Canal d'Amour",
                    lat: 39.79595,
                    lng: 19.69951,
                    typ: "felsformation",
                    beschreibung: "Durch den 'Liebeskanal' schwimmen",
                    zeit: "14:30-16:30"
                },
                {
                    name: "The Family Greek Taverna",
                    lat: 39.792213,
                    lng: 19.706923,
                    typ: "restaurant",
                    beschreibung: "Frühe Abendessen, große Portionen",
                    zeit: "16:30-17:30"
                }
            ],
            aktivitaeten: [
                "8:30-9:30: Ausschlafen und spätes Frühstück",
                "9:30-12:00: Strandtag deluxe",
                "12:00-13:00: Leichtes Mittagessen am Strand",
                "14:00-14:30: Fahrt nach Sidari",
                "14:30-16:30: Canal d'Amour besuchen",
                "16:30-17:30: The Family Greek Taverna",
                "18:00-20:00: Strand - Abendlicht genießen"
            ],
            tipps: "Legende: Wer durch den Liebeskanal schwimmt, findet die große Liebe!"
        },
        {
            id: 12,
            datum: "Donnerstag, 07.08.2025",
            titel: "Fortgeschrittenes Schnorcheln - Nissaki",
            kurztitel: "Nissaki Schnorcheln",
            wetter: "☀️ 31°C",
            typ: "schnorcheln",
            istBootstour: false,
            highlights: ["Kristallklares Wasser", "20m Sicht", "Oktopusse"],
            locations: [
                {
                    name: "Nissaki Beach",
                    lat: 39.723663566035306,
                    lng: 19.896528083589967,
                    typ: "strand",
                    beschreibung: "Kristallklares Wasser (Sicht bis 20m!), Ostküste",
                    zeit: "10:00-13:00"
                }
            ],
            aktivitaeten: [
                "8:00-9:00: Frühstück, Ausrüstung checken",
                "9:00-9:45: Fahrt nach Nissaki (35-40 Min.)",
                "10:00-13:00: Schnorchel-Abenteuer Nissaki",
                "13:00-14:30: Mittagessen Taverna Nissaki",
                "14:30-15:15: Rückfahrt",
                "16:30-18:00: Heimatstrand - entspanntes Planschen",
                "18:00-20:00: Kochen - Pizza selbstgemacht",
                "20:00-21:30: Schnorchelfotos anschauen"
            ],
            tipps: "Fischvielfalt: Papageienfische, kleine Barrakudas, Oktopusse in Felsspalten, Seesterne!"
        },
        {
            id: 13,
            datum: "Freitag, 08.08.2025",
            titel: "Abenteuer-Schnorcheln Rovinia",
            kurztitel: "Abenteuer Rovinia",
            wetter: "☀️ 30°C",
            typ: "bootstour",
            istBootstour: true,
            highlights: ["Unberührte Unterwasserwelt", "Kleine Höhlen", "Nur per Boot erreichbar"],
            locations: [
                {
                    name: "Liapades Hafen",
                    lat: 39.6692,
                    lng: 19.74048,
                    typ: "hafen",
                    beschreibung: "Boot mieten für Rovinia (€50-70)",
                    zeit: "9:00-9:30"
                },
                {
                    name: "Rovinia Beach",
                    lat: 39.670236,
                    lng: 19.727285,
                    typ: "strand",
                    beschreibung: "Schnorchel-Höhepunkt, unberührte Unterwasserwelt",
                    zeit: "10:00-13:00"
                },
                {
                    name: "Taverna Nafsika",
                    lat: 39.72102,
                    lng: 19.67549,
                    typ: "restaurant",
                    beschreibung: "Abschlussessen, Meze-Platte, Baklava",
                    zeit: "18:30-20:30"
                }
            ],
            bootsroute: [
                { lat: 39.6692, lng: 19.74048 },
                { lat: 39.670236, lng: 19.727285 }
            ],
            aktivitaeten: [
                "7:30-8:30: Frühstück, mentale Vorbereitung",
                "8:30-9:00: Fahrt nach Liapades",
                "9:00-9:30: Boot mieten für Rovinia",
                "9:30-10:00: Bootsfahrt nach Rovinia Beach",
                "10:00-13:00: Rovinia Beach - Schnorchel-Höhepunkt",
                "13:00-13:30: Rückfahrt",
                "18:30-20:30: Abschlussessen Taverna Nafsika",
                "20:30-22:00: Koffer anfangen zu packen"
            ],
            tipps: "Highlights: kleine Unterwasserhöhlen, Fischschwärme, perfekte Sicht, Farbenpracht!"
        },
        {
            id: 14,
            datum: "Samstag, 09.08.2025",
            titel: "Letzter voller Tag",
            kurztitel: "Letzter Tag",
            wetter: "☀️ 29°C",
            typ: "abschied",
            istBootstour: false,
            highlights: ["Souvenirs kaufen", "Lieblingsstelle besuchen", "Abschiedsfotos"],
            locations: [
                {
                    name: "Agios Georgios beach",
                    lat: 39.7205,
                    lng: 19.6750,
                    typ: "strand",
                    beschreibung: "Lieblingsstelle nochmal besuchen, Muscheln sammeln",
                    zeit: "10:00-12:00"
                },
                {
                    name: "Delfini Restaurant",
                    lat: 39.7177,
                    lng: 19.6736,
                    typ: "restaurant",
                    beschreibung: "Abschiedsessen wo alles begann",
                    zeit: "13:00-15:00"
                },
                {
                    name: "Strandcafé-Stopp",
                    lat: 39.72062,
                    lng: 19.67508,
                    typ: "cafe",
                    beschreibung: "Letzter Strandspaziergang, Sonnenuntergang-Fotos",
                    zeit: "17:00-18:30"
                },
                {
                    name: "Malibu Taverna",
                    lat: 39.72081,
                    lng: 19.67529,
                    typ: "restaurant",
                    beschreibung: "Abendessen mit Meerblick, entspannter Ausklang",
                    zeit: "18:30-20:00"
                }
            ],
            aktivitaeten: [
                "8:00-9:00: Gemütliches Frühstück",
                "9:00-10:00: Koffer packen - Phase 1",
                "10:00-12:00: Letzter ausgiebiger Strandbesuch",
                "12:00-13:00: Souvenirs kaufen",
                "13:00-15:00: Abschiedsessen im Delfini",
                "15:00-17:00: Finales Packen",
                "17:00-18:30: Letzter Strandspaziergang",
                "18:30-20:00: Abendessen im Malibu Taverna"
            ],
            tipps: "Olivenöl im Handgepäck erlaubt bis 100ml. Kumquat-Marmelade als Souvenir!"
        },
        {
            id: 15,
            datum: "Sonntag, 10.08.2025",
            titel: "Abreise",
            kurztitel: "Abreise",
            wetter: "☀️ 28°C",
            typ: "abreise",
            istBootstour: false,
            highlights: ["Apartment-Übergabe", "Letzter Blick", "Auf Wiedersehen"],
            locations: [
                {
                    name: "Agios Georgios Pagi Zentrum",
                    lat: 39.7159356,
                    lng: 19.6822778,
                    typ: "unterkunft",
                    beschreibung: "Apartment-Übergabe, Schlüsselübergabe",
                    zeit: "9:30-10:00"
                },
                {
                    name: "Strandcafé-Stopp",
                    lat: 39.72062,
                    lng: 19.67508,
                    typ: "cafe",
                    beschreibung: "Letzter Strandbesuch, noch ein letztes Eis",
                    zeit: "10:00-12:00"
                },
                {
                    name: "Korfu Flughafen",
                    lat: 39.6075,
                    lng: 19.9118,
                    typ: "abreise",
                    beschreibung: "Mietwagen-Rückgabe, Check-in, Abflug 16:00",
                    zeit: "13:00-16:00"
                }
            ],
            aktivitaeten: [
                "7:00-8:00: Aufstehen, fertig machen",
                "8:00-8:30: Schnelles Frühstück",
                "8:30-9:30: Letztes Check & Reinigung",
                "9:30-10:00: Apartment-Übergabe",
                "10:00-12:00: Pufferzeit, letzter Strandbesuch",
                "12:00-13:00: Fahrt Richtung Flughafen",
                "13:00-14:00: Mietwagen-Rückgabe",
                "14:00-15:30: Check-in und Sicherheitskontrolle",
                "16:00: Abflug - Auf Wiedersehen Korfu!"
            ],
            tipps: "Καλές διακοπές! (Schöne Ferien!) - Ein unvergesslicher Familienurlaub geht zu Ende."
        }
    ],

    // Zusätzliche Informationen
    restaurants: [
        {
            name: "Delfini Restaurant",
            lat: 39.72071,
            lng: 19.67517,
            beschreibung: "Traditionell, familienfreundlich",
            telefon: "+30 26630 96222"
        },
        {
            name: "Malibu Taverna", 
            lat: 39.72081,
            lng: 19.67529,
            beschreibung: "Meerblick, Sonnenuntergang"
        },
        {
            name: "Ammos Seaside",
            lat: 39.72102,
            lng: 19.67549,
            beschreibung: "Strandlage, Spielplatz"
        },
        {
            name: "Taverna Nafsika",
            lat: 39.72102,
            lng: 19.67549,
            beschreibung: "Authentisch griechisch"
        }
    ],

    // Bootstouren-Definitionen
    bootstouren: [
        {
            tag: 4,
            name: "Porto Timoni Wassertaxi",
            typ: "wassertaxi",
            farbe: "#ff8c42"
        },
        {
            tag: 7,
            name: "Coastal Route",
            typ: "eigenes_boot",
            farbe: "#00b3b3"
        },
        {
            tag: 10,
            name: "Große Bootstour",
            typ: "eigenes_boot", 
            farbe: "#0066cc"
        },
        {
            tag: 13,
            name: "Rovinia Abenteuer",
            typ: "kleines_boot",
            farbe: "#ff6b6b"
        }
    ]
};

// Hilfsfunktionen
function getTagById(id) {
    return urlaubsDaten.tage.find(tag => tag.id === id);
}

function getLocationsByTag(tagId) {
    const tag = getTagById(tagId);
    return tag ? tag.locations : [];
}

function getAllLocations() {
    return urlaubsDaten.tage.flatMap(tag => 
        tag.locations.map(location => ({
            ...location,
            tagId: tag.id,
            tagTitel: tag.titel
        }))
    );
}

function getBootstourenTage() {
    return urlaubsDaten.tage.filter(tag => tag.istBootstour);
}

function getBootsroute(tagId) {
    const tag = getTagById(tagId);
    return tag && tag.bootsroute ? tag.bootsroute : [];
}
