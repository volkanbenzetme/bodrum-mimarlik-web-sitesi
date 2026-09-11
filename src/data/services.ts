// KAIRO Studio — 4 kategorili hizmet taksonomisi.
// Kaynak: legacy-static/preview/hizmetler.html ve index.html (v2 redesign).

export interface ServiceCategory {
  number: string;
  title: string;
  items: string[];
}

export const services: ServiceCategory[] = [
  {
    number: "01",
    title: "Sıfırdan Tasarım",
    items: [
      "Mimari tasarım",
      "İç mimari tasarım",
      "Konsept geliştirme",
      "3D görselleştirme",
      "Uygulama projesi",
    ],
  },
  {
    number: "02",
    title: "Geniş Kapsamlı Tadilat",
    items: [
      "Konut renovasyonu",
      "Villa yenileme",
      "Mekânsal yeniden kurgulama",
      "Cephe ve çatı yenileme",
      "Anahtar teslim dönüşüm",
    ],
  },
  {
    number: "03",
    title: "Teknik ve Yapısal Uygulamalar",
    items: ["İzolasyon", "Tesisat", "Çelik imalat ve montaj", "Ahşap imalat uygulamaları", "İnce işler"],
  },
  {
    number: "04",
    title: "Özel Uygulama Alanları",
    items: [
      "Mutfak uygulamaları",
      "Peyzaj uygulamaları",
      "Havuz mekanik sistem uygulamaları",
      "Havuz izolasyonu",
      "Dış mekân yaşam alanları",
    ],
  },
];
