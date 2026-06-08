export type GalleryType = "engagement" | "battesimi" | "newborn" | "famiglia";

export type Story = {
  title: string;
  slug: string;
  location: string;
  image: string;
  alt: string;
  galleryImages?: readonly string[];
};

export type Review = {
  name: string;
  date: string;
  title: string;
  text: string;
};

export const contact = {
  email: "",
  phone: "",
  whatsappUrl:
    "https://wa.me/?text=Ciao%20Valentina%2C%20vorrei%20informazioni%20sul%20servizio%20fotografico%20per%20il%20mio%20matrimonio.",
  address: "Treviso (TV)",
  hours: "Risponde entro 24 ore",
  vat: "",
  instagram: "https://www.instagram.com/valentina_anzeliero_photografa/",
  instagramHandle: "@valentina_anzeliero_photografa",
  matrimonioUrl: "https://www.matrimonio.com/fotografo-matrimonio/valentina-anzeliero-photografa--e357350"
};

export const matrimonioProfileUrl = contact.matrimonioUrl;

export const reviewStats = [
  { value: "5.0", label: "valutazione" },
  { value: "35", label: "recensioni" },
  { value: "100%", label: "raccomandazione" }
];

export const reviews: Review[] = [
  {
    name: "Laura",
    date: "23 novembre 2025",
    title: "Valentina fotografa al top",
    text: "Valentina per noi non è stata una scoperta ma una conferma. Persona dal cuore grande, sempre attenta ai nostri desideri e artista che coglie non solo l'immagine, ma l'anima del momento. Che sia un sorriso o una lacrima, Valentina non scatta foto, ma emozioni tangibili."
  },
  {
    name: "Adrianna",
    date: "1 marzo 2026",
    title: "Un grande grazie da Ada e Giacomo",
    text: "Valentina e Luca sono stati il punto culminante del nostro matrimonio. Fin dal primo incontro abbiamo capito che era la scelta perfetta: fotografi non invadenti, foto naturali. Il servizio di fidanzamento ci ha messo a nostro agio per il grande giorno. Consigliatissimi."
  },
  {
    name: "Serena",
    date: "8 dicembre 2025",
    title: "L'artista a tutto tondo",
    text: "Valentina ha saputo catturare le emozioni più belle il giorno del nostro matrimonio. Ha rispettato il nostro desiderio di passare il più tempo possibile con i nostri invitati, guidandoci con vivacità e attenzione ai dettagli. Ogni scatto è un ricordo indelebile."
  },
  {
    name: "Nikol",
    date: "4 dicembre 2025",
    title: "Impeccabile",
    text: "Sceglierei Valentina altre 1000 volte. Servizio impeccabile e gran professionista. Volevamo qualcuno capace di cogliere non solo i momenti visibili, ma anche quelli che restano impressi nel cuore. Foto meravigliose per chi ama immagini romantiche e spontanee."
  },
  {
    name: "Laura",
    date: "22 ottobre 2025",
    title: "Qualità umane e degli scatti",
    text: "Ci ha seguiti fin dal primo incontro con attenzione ed esperienza. Oltre alla qualità degli scatti, ci hanno colpito umanità e simpatia. Tre qualità che la descrivono: sensibilità, romanticismo, passione."
  },
  {
    name: "Isabella",
    date: "4 luglio 2025",
    title: "Molto più di una semplice fotografa",
    text: "Valentina non è solo una fotografa, diventa un'amica e parte dell'organizzazione. Il prematrimoniale ci ha fatto entrare in sintonia da subito. Ha saputo cogliere sguardi e sorrisi spontanei, offrendoci scatti unici."
  }
];

export const instagramSection = {
  kicker: "Instagram",
  title: "Dietro le quinte e i matrimoni più recenti.",
  note: "Seguite il profilo per novità, lavori in corso e momenti dal team."
};

export const instagramFeedPhotos = [
  { src: "/photos/045.webp", alt: "Dettaglio sposa e bouquet" },
  { src: "/photos/120.webp", alt: "Momento di festa matrimonio" },
  { src: "/photos/160.webp", alt: "Ritratto spontaneo degli sposi" }
];

export const navGroups = [
  { label: "Matrimoni", href: "/storie/" },
  {
    label: "Servizi",
    href: "/servizi/",
    children: [
      { label: "Battesimi", href: "/battesimi/" },
      { label: "Newborn", href: "/newborn/" },
      { label: "Engagement", href: "/engagement/" },
      { label: "Famiglia", href: "/famiglia/" }
    ]
  },
  { label: "Chi sono", href: "/about-fotografo-matrimoni/" },
  { label: "Contatti", href: "/contatti/" }
];

export const copy = {
  seoTitle: "Valentina Anzeliero | Fotografa matrimonio Treviso e Vicenza",
  seoDescription: "Fotografa di matrimonio a Treviso e Vicenza. Reportage romantico e spontaneo, engagement, battesimi, newborn e sessioni di famiglia.",
  heroEyebrow: "Fotografa matrimonio Treviso · Vicenza · Veneto",
  heroTitle: "LOVE IS EVERYTHING",
  heroSubtitle:
    "Prediligo parlare con voi, entrare nel vostro mondo e cogliere emozioni vere — senza mettervi in posa, con discrezione e romanticismo.",
  introPhrase: "Ogni scatto è una piccola narrazione: un momento vissuto, un'emozione richiamata.",
  intro: [
    "Ogni scatto è una piccola narrazione: un momento vissuto, un'emozione richiamata.",
    "Prediligo parlare con voi, entrare nel vostro mondo e cogliere emozioni vere — senza mettervi in posa, con discrezione e romanticismo."
  ],
  latestWork: "Matrimoni",
  storiesTitle: "Matrimoni recenti",
  storiesLead: "Luce naturale, spontaneità e dettagli emotivi nel Veneto.",
  bridgePhrase: "Luce, spontaneità e dettagli che raccontano il vostro giorno.",
  aboutTitle: "Fotografa di matrimonio a Treviso",
  aboutIntro: "Discreta, professionale, eternamente romantica: preferisco cogliere emozioni vere piuttosto che mettere in posa gli sposi.",
  contactTitle: "Contatti",
  contactIntro: "Risponde entro 24 ore",
  ctaStories: "Vedi tutti i matrimoni",
  ctaContact: "Contatti",
  readMore: "Scopri di più",
  storyGalleryEyebrow: "Gallery",
  relatedStoriesTitle: "Altri matrimoni",
  contactBandTitle: "Raccontatemi il vostro giorno",
  contactBandText: "Scrivetemi per verificare la disponibilità: data, location e come immaginate il vostro matrimonio.",
  footerText: "Fotografa di matrimonio per Treviso e Vicenza, disponibile in tutta Italia"
};

export const aboutBody = [
  "Sono una fotografa di matrimonio con base a Treviso, operativa anche a Vicenza e in tutto il Veneto. Il mio stile è spontaneo ed emozionale: prediligo parlare con la coppia ed entrare nel loro mondo.",
  "Non amo mettere in posa gli sposi — preferisco cogliere emozioni vere, con discrezione e professionalità.",
  "Oltre ai matrimoni realizzo servizi di engagement, battesimi, newborn e sessioni di famiglia — sempre con la stessa cura e lo stesso calore."
];

const storyGalleryPool = [
  "/photos/002.webp",
  "/photos/008.webp",
  "/photos/015.jpg",
  "/photos/022.webp",
  "/photos/033.webp",
  "/photos/041.webp",
  "/photos/055.webp",
  "/photos/068.webp",
  "/photos/077.webp",
  "/photos/090.webp",
  "/photos/105.webp",
  "/photos/118.webp"
] as const;

function storyGallery(offset: number) {
  return storyGalleryPool.slice(offset, offset + 6);
}

export const stories = [
  { title: "Matrimonio in Veneto", slug: "matrimonio-in-veneto-treviso", location: "Treviso", image: "/photos/001.jpg", galleryImages: storyGallery(0) },
  { title: "Celebrazione in villa", slug: "celebrazione-in-villa-veneto", location: "Veneto", image: "/photos/030.jpg", galleryImages: storyGallery(1) },
  { title: "Reportage romantico", slug: "reportage-romantico-vicenza", location: "Vicenza", image: "/photos/045.webp", galleryImages: storyGallery(2) },
  { title: "Tra natura e luce", slug: "matrimonio-natura-luce-veneto", location: "Provincia di Treviso", image: "/photos/080.webp", galleryImages: storyGallery(3) },
  { title: "Giorno speciale a Treviso", slug: "giorno-speciale-treviso", location: "Treviso", image: "/photos/120.webp", galleryImages: storyGallery(4) },
  { title: "Dettagli ed emozioni", slug: "dettagli-emozioni-matrimonio", location: "Veneto", image: "/photos/160.webp", galleryImages: storyGallery(5) },
  { title: "Ricevimento in giardino", slug: "ricevimento-giardino-veneto", location: "Veneto", image: "/photos/200.webp", galleryImages: storyGallery(0) },
  { title: "Storia d'amore in provincia", slug: "storia-damore-provincia-treviso", location: "Treviso e dintorni", image: "/photos/240.webp", galleryImages: storyGallery(1) }
].map((story) => ({ alt: story.title, ...story }));

export const homeMatrimoniPhotos = stories.slice(0, 6).map((s) => ({ src: s.image, alt: s.alt }));

export const homeScatterPhotos = [
  { src: "/photos/045.webp", alt: "Dettaglio bouquet matrimonio" },
  { src: "/photos/068.webp", alt: "Momento spontaneo tra gli sposi" },
  { src: "/photos/090.webp", alt: "Reportage matrimonio nel Veneto" },
  { src: "/photos/160.webp", alt: "Emozione del giorno del sì" }
];

export const homeBridgePhotos = [
  { src: "/photos/200.webp", alt: "Ricevimento in giardino nel Veneto" },
  { src: "/photos/077.webp", alt: "Dettaglio emotivo matrimonio" },
  { src: "/photos/105.webp", alt: "Celebrazione all'aperto" },
  { src: "/photos/240.webp", alt: "Momento tra gli sposi" },
  { src: "/photos/055.webp", alt: "Luce naturale sul matrimonio" }
];

export const serviceHubIntro =
  "Oltre ai matrimoni accompagno famiglie e coppie in momenti importanti: dal prematrimoniale al battesimo, dalla nascita alle sessioni di famiglia. Ogni servizio ha lo stesso approccio — luce naturale, discrezione e emozioni vere.";

export const serviceCards: { title: string; href: string; text: string; image: string }[] = [
  {
    title: "Engagement",
    href: "/engagement/",
    text: "Sessioni prematrimoniali per conoscervi prima del grande giorno e sentirvi a vostro agio davanti all'obiettivo.",
    image: "/photos/260.jpg"
  },
  {
    title: "Battesimi",
    href: "/battesimi/",
    text: "Il battesimo del vostro bambino raccontato con delicatezza: cerimonia, famiglia e dettagli del giorno.",
    image: "/photos/300.webp"
  },
  {
    title: "Newborn",
    href: "/newborn/",
    text: "Fotografie dei primi giorni di vita, a casa o in studio, con la stessa cura e calore dei matrimoni.",
    image: "/photos/350.webp"
  },
  {
    title: "Famiglia",
    href: "/famiglia/",
    text: "Ritratti di famiglia spontanei, in studio o all'aperto, per conservare un momento della vostra storia.",
    image: "/photos/400.webp"
  }
];

export const servicePhotos: Record<GalleryType, { title: string; photos: string[] }> = {
  engagement: {
    title: "Engagement",
    photos: ["/photos/260.jpg", "/photos/265.webp", "/photos/270.webp", "/photos/275.webp", "/photos/280.webp", "/photos/285.webp", "/photos/290.webp", "/photos/295.webp", "/photos/298.webp", "/photos/255.webp", "/photos/258.webp", "/photos/262.webp"]
  },
  battesimi: {
    title: "Battesimi",
    photos: ["/photos/300.webp", "/photos/305.webp", "/photos/310.webp", "/photos/315.webp", "/photos/320.webp", "/photos/325.webp", "/photos/328.webp", "/photos/330.webp", "/photos/332.webp", "/photos/335.webp", "/photos/338.webp", "/photos/340.webp"]
  },
  newborn: {
    title: "Newborn",
    photos: ["/photos/340.webp", "/photos/345.webp", "/photos/350.webp", "/photos/355.webp", "/photos/360.webp", "/photos/365.webp", "/photos/368.webp", "/photos/372.webp", "/photos/374.webp", "/photos/378.webp", "/photos/382.webp", "/photos/386.webp"]
  },
  famiglia: {
    title: "Famiglia",
    photos: ["/photos/380.webp", "/photos/385.webp", "/photos/390.webp", "/photos/395.webp", "/photos/400.webp", "/photos/405.webp", "/photos/410.webp", "/photos/415.webp", "/photos/420.webp", "/photos/425.webp", "/photos/430.webp", "/photos/432.webp"]
  }
};

export const aboutLinks = [
  { title: "Chi sono", href: "/about-fotografo-matrimoni/", text: "Il mio metodo e come lavoro con ogni coppia.", image: "/photos/050.webp" },
  { title: "Album", href: "/wedding-book-album-matrimoniale/", text: "Album, mini album e consegna digitale.", image: "/photos/070.webp" },
  { title: "Recensioni", href: "/testimonials/", text: "5.0 su Matrimonio.com — 35 recensioni.", image: "/photos/090.webp" }
];

export const weddingBookCopy = [
  "Oltre alle fotografie in alta risoluzione consegnate su supporto digitale, realizzo album e mini album pensati per conservare il vostro matrimonio nel tempo.",
  "La consegna del materiale elaborato avviene in circa quattro mesi, con editing professionale di tutte le immagini selezionate.",
  "Disponibili anche album digitali e chiavetta USB con il materiale, oltre alla condivisione online delle foto."
];

export const relatedStories = ["matrimonio-in-veneto-treviso", "celebrazione-in-villa-veneto", "reportage-romantico-vicenza"];

export function findStoryBySlug(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function allStoryParams() {
  return stories.map((story) => ({ slug: story.slug }));
}
