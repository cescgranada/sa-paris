// SA París — Tauler d'Itineraris
// ─────────────────────────────────────────────────────────────────────────────
// Per reutilitzar cada any: actualitza CONFIG i substitueix ITINERARIS_DATA.
// Guarda el fitxer de l'any anterior com a data-2026.js abans de fer canvis.
// ─────────────────────────────────────────────────────────────────────────────

const CONFIG = {
  any:    2026,
  escola: 'Escola Nou Patufet',
  viatge: 'Sempre ens quedarà París',
};

// ── DADES DELS ITINERARIS ────────────────────────────────────────────────────
// Itinerari completat:
//   { num, status:'done', color, titol, subtitol, arr, stops:[], route:[[lat,lng],...] }
// Itinerari pendent:
//   { num, status:'pending', titol, arr, center:[lat,lng], note }

const ITINERARIS_DATA = [
  // ── COMPLETATS ──────────────────────────────────────────────────────────────
  {num:3, status:'done', color:'#3B82F6',
   titol:'Odéon – Luxembourg',
   subtitol:'Del cafè més antic de París al Panthéon',
   arr:'5è / 6è',
   stops:['Place Saint-Michel','Le Procope (cafè 1686)','Théâtre de l\'Odéon','Église Saint-Sulpice','La Sorbona','Jardins de Luxembourg','Le Panthéon'],
   route:[[48.85339,2.34478],[48.85272,2.34013],[48.85170,2.33840],[48.85120,2.33347],[48.84959,2.34349],[48.84657,2.33695],[48.84582,2.34614]]},

  {num:4, status:'done', color:'#10B981',
   titol:'République – Canal de St Martin',
   subtitol:'D\'Amélie Poulain al mercat on Picasso feia la compra',
   arr:'3r / 10è',
   stops:['Marché des Enfants Rouges','Place de la République','Canal Saint-Martin','Hôtel du Nord','El spot d\'Amélie (ricochet)','Point Éphémère'],
   route:[[48.86275,2.36094],[48.86764,2.36361],[48.86927,2.36201],[48.87196,2.36398],[48.87359,2.36482],[48.87609,2.36672]]},

  {num:5, status:'done', color:'#8B5CF6',
   titol:'Passatges – Place Vendôme',
   subtitol:'Els passatges coberts i la columna de Napoleó',
   arr:'1r / 2n / 9è',
   stops:['Passage du Caire','Galerie Vivienne','Passage des Panoramas','Passage Jouffroy','Musée Grévin','Place Vendôme'],
   route:[[48.86441,2.35206],[48.86484,2.33763],[48.87196,2.34462],[48.87259,2.34445],[48.87278,2.34422],[48.86745,2.32964]]},

  {num:6, status:'done', color:'#EF4444',
   titol:'Centre – Île de la Cité',
   subtitol:'L\'illa on tot va començar',
   arr:'1r / 4t',
   stops:['Hôtel de Ville / Place de Grève','Point Zéro','Notre-Dame de París','Sainte-Chapelle','La Conciergerie','Pont Neuf'],
   route:[[48.85650,2.35240],[48.85320,2.34990],[48.85297,2.35010],[48.85540,2.34490],[48.85570,2.34630],[48.85740,2.34120]]},

  {num:8, status:'done', color:'#F59E0B',
   titol:'Sacré-Cœur – Montmartre',
   subtitol:'Del mur dels je t\'aime al celler dels artistes',
   arr:'18è',
   stops:['Mur des Je t\'aime','Bateau-Lavoir','Place du Tertre','Basilique du Sacré-Cœur','Esplanade (panorama)','Vignoble du Clos Montmartre'],
   route:[[48.88426,2.33844],[48.88310,2.33930],[48.88638,2.34068],[48.88670,2.34303],[48.88550,2.34303],[48.88658,2.33987]]},

  {num:9, status:'done', color:'#EC4899',
   titol:'Le Marais',
   subtitol:'Del Pompidou a la Maison Victor Hugo',
   arr:'3r / 4t',
   stops:['Centre Georges Pompidou','Fontaine Stravinsky','Rue des Rosiers','Synagogue Guimard','Place des Vosges','Maison de Victor Hugo'],
   route:[[48.86069,2.35220],[48.85954,2.35169],[48.85710,2.35460],[48.85640,2.35410],[48.85530,2.36549],[48.85450,2.36653]]},

  {num:10, status:'done', color:'#6366F1',
   titol:'Père Lachaise',
   subtitol:'El cementiri on moren els presidents i ressusciten els poetes',
   arr:'20è',
   stops:['Félix Faure','Jim Morrison','Héloïse & Abélard','Chopin','Allan Kardec · Molière','Oscar Wilde','Victor Noir','Édith Piaf · Maria Callas','Mur des Fédérés'],
   route:[[48.86170,2.39290],[48.86100,2.39330],[48.86070,2.39450],[48.86200,2.39500],[48.86280,2.39570],[48.86340,2.39680],[48.86260,2.39930],[48.86210,2.39970],[48.86010,2.39970]]},

  {num:11, status:'done', color:'#14B8A6',
   titol:'Barri Llatí',
   subtitol:'De les caixes verdes del Sena al soterrani del jazz secret',
   arr:'5è',
   stops:['Bouquinistes del Quai de Montebello','Square René Viviani (arbre 425 anys)','Shakespeare and Company','Église Saint-Séverin','Caveau de la Huchette','Musée de Cluny'],
   route:[[48.85230,2.35050],[48.85260,2.34780],[48.85250,2.34720],[48.85270,2.34480],[48.85300,2.34520],[48.85090,2.34410]]},

  {num:14, status:'done', color:'#F97316',
   titol:'Champs Élysées – Étoile',
   subtitol:'De l\'Arc de Triomphe a la Flamme de la Liberté',
   arr:'8è',
   stops:['Arc de Triomphe','Champs-Élysées','Fouquet\'s','Grand Palais','Petit Palais','Flamme de la Liberté'],
   route:[[48.87379,2.29505],[48.87060,2.30676],[48.87060,2.30676],[48.86617,2.31354],[48.86597,2.31314],[48.86282,2.30253]]},

  {num:17, status:'done', color:'#06B6D4',
   titol:'Le Monde dans un quartier',
   subtitol:'El barri que porta 2.000 anys construint-se sobre si mateix',
   arr:'5è',
   stops:['Arènes de Lutèce','Place de la Contrescarpe','Rue Mouffetard','Grande Mosquée de Paris','Jardin des Plantes','Institut du Monde Arabe'],
   route:[[48.84570,2.35270],[48.84430,2.35110],[48.84180,2.35120],[48.84520,2.35580],[48.84410,2.36010],[48.85080,2.35480]]},

  {num:18, status:'done', color:'#D946EF',
   titol:'Pigalle & Nouvelle Athènes',
   subtitol:'El barri que París amaga darrere de la seva pròpia reputació',
   arr:'9è',
   stops:['Moulin Rouge','Place Pigalle · Rue de Douai','Musée de la Vie Romantique','Square d\'Orléans','Musée Gustave Moreau','Notre-Dame-de-Lorette'],
   route:[[48.88410,2.33240],[48.88180,2.33740],[48.88000,2.33490],[48.87930,2.33770],[48.87830,2.33630],[48.87680,2.33980]]},

  // ── PENDENTS ────────────────────────────────────────────────────────────────
  {num:1,  status:'pending', titol:'Champs Élysées',                     arr:'8è',        center:[48.869,2.308],  note:'Referència: Base.docx'},
  {num:2,  status:'pending', titol:'Montparnasse',                       arr:'14è / 6è',  center:[48.842,2.324],  note:'Referència: Base.docx'},
  {num:7,  status:'pending', titol:'A la vora del riu',                  arr:'7è',        center:[48.861,2.302],  note:'Referència: Base.docx'},
  {num:12, status:'pending', titol:'La Coulée Verte',                    arr:'12è',       center:[48.849,2.378],  note:'Referència: Base.docx'},
  {num:13, status:'pending', titol:'Le nouveau boulevard du street art', arr:'20è / 11è', center:[48.865,2.385],  note:'Referència: Base.docx'},
  {num:15, status:'pending', titol:'BNF – Bercy Village',                arr:'12è / 13è', center:[48.834,2.377],  note:'Referència: Base.docx'},
  {num:16, status:'done', color:'#B91C1C',
   titol:'El Codi Da Vinci',
   subtitol:'El thriller que va fer dubtar el món — i que París desmenteix punt per punt',
   arr:'1r / 6è',
   stops:['Musée du Louvre — Pyramide','Pyramide Inversée (Carrousel du Louvre)','Jardin des Tuileries','Pont Royal — creuem el Sena','Eglíse Saint-Germain-des-Prés','Eglise Saint-Sulpice — La Rosa Línea'],
   route:[[48.8606,2.3376],[48.8637,2.3348],[48.8636,2.3244],[48.8601,2.3296],[48.8539,2.3329],[48.8512,2.3347]]},
];
