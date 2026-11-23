// JSON-LD (schema.org) for the KAIRO Studio business entity — rendered once, on the
// homepage's <Head>, so search engines can attach it to the site's primary entity.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "HomeAndConstructionBusiness"],
  name: "KAIRO Studio",
  image: "https://kairomimarlik.com/images/cta-band-entrance.jpg",
  url: "https://kairomimarlik.com/",
  telephone: "+905446355862",
  email: "info@kairomimarlik.com",
  description:
    "KAIRO Studio — Bodrum Yalıkavak merkezli mimari tasarım, iç mimarlık ve proje yönetimi/uygulama stüdyosu.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yalıkavak",
    addressRegion: "Bodrum, Muğla",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "City", name: "Bodrum" },
    { "@type": "Place", name: "Yalıkavak, Bodrum" },
    { "@type": "Place", name: "Yalıçiftlik, Bodrum" },
    { "@type": "Place", name: "Akyarlar, Bodrum" },
    { "@type": "Place", name: "Kızılağaç, Bodrum" },
  ],
  priceRange: "Keşif sonrası kapsama göre",
  knowsAbout: [
    "Mimari tasarım",
    "İç mekân tasarımı",
    "Konut ve villa tadilatı",
    "Villa renovasyonu",
    "Restorasyon",
    "3D görselleştirme",
    "Uygulama projesi",
    "İzolasyon ve tesisat",
    "Mutfak uygulamaları",
    "Havuz ve peyzaj uygulamaları",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hizmetler",
    itemListElement: [
      "https://kairomimarlik.com/bodrum-tadilat/",
      "https://kairomimarlik.com/bodrum-villa-renovasyon/",
      "https://kairomimarlik.com/bodrum-ic-mimarlik/",
      "https://kairomimarlik.com/bodrum-mimari-proje/",
    ].map((url) => ({ "@type": "Offer", url })),
  },
  founder: {
    "@type": "Person",
    name: "Volkan H. Benzetme",
  },
};
