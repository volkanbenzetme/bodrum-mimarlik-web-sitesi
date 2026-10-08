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
  areaServed: "Bodrum, Muğla, Türkiye",
  founder: {
    "@type": "Person",
    name: "Volkan H. Benzetme",
  },
};
