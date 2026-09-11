// KAIRO Studio — proje portfolyosu.
// Kaynak: agents/kairo-studio/site/legacy-static/preview/projeler/*.html (avan proje/tasarım/uygulama
// durumları), Main.dc.html (kısa özetler). Gerçek proje verisi — icat edilmiş içerik yok.

/**
 * "Tamamlandı" ibaresi kaynak sayfalarda hem "tasarım bitti" hem "inşaat bitti" anlamında
 * belirsizce kullanılıyordu (bkz. plan notu). Bu tip, her projenin durumunu tek anlamlı hale getirir.
 */
export type ProjectStatus =
  | "design_complete" // Tasarım ve görselleştirme bitti, saha uygulaması bu kapsamda yok/başlamadı.
  | "built" // Tasarım + saha uygulaması (inşaat) tamamlandı.
  | "preliminary_complete" // Avan proje (ön/şematik tasarım) tamamlandı, kesin proje/uygulama sonraki aşama.
  | "pre_construction"; // Tasarım tamamlandı, saha uygulamasına hazırlık aşamasında.

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
  design_complete: "Tasarım Tamamlandı",
  built: "Uygulama Tamamlandı",
  preliminary_complete: "Avan Proje Tamamlandı",
  pre_construction: "Uygulama Hazırlığında",
};

export interface Project {
  slug: string;
  name: string;
  location: string;
  year: number;
  /** "Alan" fact — kesin proje/uygulama alanı, kaynak metinden birebir. */
  area: string;
  /** "Kapsam" fact — projenin ne olduğu (uzun biçim, detay sayfası için). */
  scope: string;
  status: ProjectStatus;
  /** "KAIRO'nun Rolü" fact. */
  role: string;
  /** Sadece No 19 Dream Residence'ta var: dış tasarım iş birliği. */
  collaboration?: string;
  /** public/images altındaki görsel, kök-göreli yol. */
  image: string;
  imageAlt: string;
  /** Proje/kart ızgaralarında kullanılan kısa etiket, örn. "4.200 m² · 56 Rezidans". */
  cardTag: string;
  /** Detay sayfası açıklama paragrafları. */
  description: string[];
  /** Galeri görseli altındaki not. */
  galleryCaption: string;
  /** Sadece uygulaması tamamlanmış projelerde: referans/görüşme talebi notu. */
  referenceNote?: string;
  /** Ana sayfa hero carousel'inde gösterilecekse sıra (1'den başlar); yoksa carousel'de yer almaz. */
  heroOrder?: number;
  /** Hero carousel'in üstündeki kısa etiket. */
  heroTag?: string;
  /** Ana sayfanın "Tamamlanmış Uygulamalar" ızgarasında öne çıkarılsın mı. */
  homeFeatured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "no-19-dream-residence",
    name: "No 19 Dream Residence",
    location: "Yalıçiftlik, Bodrum",
    year: 2025,
    area: "4.200 m² kapalı alan",
    scope: "56 adet 1+1 rezidans, sosyal tesis, kapalı otopark",
    status: "design_complete",
    role: "Tasarım ve Görselleştirme",
    collaboration: "Mimar Hasan Huz",
    image: "/images/no19-dream-residence.jpg",
    imageAlt: "No 19 Dream Residence, olağan ağacı ve havuzuyla dış cephe görselleştirmesi",
    cardTag: "4.200 m² · 56 Rezidans",
    description: [
      "No 19 Dream Residence, Yalıçiftlik'te 56 adet 1+1 rezidans, sosyal tesis ve kapalı otoparktan oluşan 4.200 m² kapalı alanlı bir toplu konut projesidir. KAIRO bu projede tasarım ve görselleştirmeden sorumlu olmuş, Mimar Hasan Huz ile tasarım iş birliği içinde çalışmıştır. Proje henüz uygulama aşamasına geçmemiştir.",
    ],
    galleryCaption:
      "Tasarım görselleştirmesi. Uygulama sürecine ait görsel bulunmuyor — proje henüz bu aşamaya geçmedi.",
    heroOrder: 1,
    heroTag: "Yalıçiftlik, Bodrum · 56 Rezidans",
  },
  {
    slug: "gulumser-ailesi-konutu",
    name: "Gülümser Ailesi Konutu",
    location: "Akyarlar, Bodrum",
    year: 2026,
    area: "120 m²",
    scope: "Konut Renovasyonu",
    status: "built",
    role: "Tasarım, Görselleştirme ve Uygulama",
    image: "/images/gulumser-ailesi-konutu.jpg",
    imageAlt: "Gülümser Ailesi Konutu tamamlanmış hâli, görselleştirme",
    cardTag: "120 m² · Konut Renovasyonu",
    description: [
      "Gülümser Ailesi Konutu, Akyarlar'da mevcut bir 120 m² konutun tasarımdan uygulamaya kadar tek elden yürütülen bir renovasyon projesidir. KAIRO bu projede tasarım, görselleştirme ve saha uygulamasının tamamından sorumlu olmuştur.",
      "Proje, ailenin geçmişten taşıdığı anılarla birlikte uzun yıllar yaşanabilecek kalıcı bir aile mirasına dönüştürülmesi hedefiyle ele alınmıştır.",
    ],
    galleryCaption:
      "Tamamlanmış sonuç — 3D Görselleştirme. Mevcut durum ve uygulama sürecine ait fotoğraflar henüz arşivde yok.",
    referenceNote:
      "Referans/görüşme talebi için ilk keşif görüşmesi sonrasında iletişime geçilebilir.",
    heroOrder: 2,
    heroTag: "Akyarlar, Bodrum",
    homeFeatured: true,
  },
  {
    slug: "mercankoy-e4",
    name: "Mercanköy Sitesi E-4",
    location: "Yalıkavak, Bodrum — Mercanköy Sitesi",
    year: 2026,
    area: "180 m²",
    scope: "Villa Yenileme",
    status: "built",
    role: "Tasarım, Görselleştirme ve Uygulama",
    image: "/images/mercankoy-e4.jpg",
    imageAlt: "Mercanköy Sitesi E-4 tamamlanmış hâli, alacakaranlıkta görselleştirme",
    cardTag: "180 m² · Villa Renovasyonu",
    description: [
      "Mercanköy Sitesi E-4, Yalıkavak'ta 180 m²'lik bir villanın tasarımdan uygulamaya kadar yenilendiği bir projedir. KAIRO, tasarım ve görselleştirmenin yanı sıra sahadaki uygulama sürecinin tamamını yürütmüştür.",
    ],
    galleryCaption:
      "Tamamlanmış sonuç — 3D Görselleştirme. Mevcut durum ve uygulama sürecine ait fotoğraflar henüz arşivde yok.",
    referenceNote:
      "Referans/görüşme talebi için ilk keşif görüşmesi sonrasında iletişime geçilebilir.",
    heroOrder: 3,
    heroTag: "Yalıkavak, Bodrum",
    homeFeatured: true,
  },
  {
    slug: "d16-renovasyon",
    name: "D-16 Renovasyon",
    location: "Yalıkavak, Bodrum — Mercanköy Sitesi D-16",
    year: 2026,
    area: "160 m²",
    scope: "Konut Renovasyonu",
    status: "design_complete",
    role: "Tasarım ve Görselleştirme",
    image: "/images/d16-renovasyon.jpg",
    imageAlt: "D-16 Renovasyon, oturma alanı ve deniz manzarası görselleştirmesi",
    cardTag: "160 m² · Konut Renovasyonu",
    description: [
      "D-16 Renovasyon, Yalıkavak Mercanköy Sitesi'nde 160 m²'lik bir konut için geliştirilen bir renovasyon tasarımıdır. KAIRO bu projede tasarım ve görselleştirmeyi tamamlamıştır; saha uygulaması bu kapsamda yer almamaktadır.",
    ],
    galleryCaption: "Tasarım görselleştirmesi. Uygulama sürecine ait görsel bulunmuyor.",
  },
  {
    slug: "kadim-bey-mustemilat",
    name: "Kadim Bey Müştemilat",
    location: "Yalıkavak, Bodrum",
    year: 2024,
    area: "150 m²",
    scope: "Müştemilat Renovasyonu",
    status: "design_complete",
    role: "Tasarım ve Görselleştirme",
    image: "/images/kadim-bey-mustemilat.jpg",
    imageAlt: "Kadim Bey Müştemilat görselleştirmesi",
    cardTag: "150 m² · Müştemilat Renovasyonu",
    description: [
      "Kadim Bey Müştemilat, Yalıkavak'ta 150 m²'lik bir müştemilat yapısının renovasyon tasarımıdır. KAIRO bu projede tasarım ve görselleştirmeyi tamamlamış olup, saha uygulaması bu kapsamda yer almamaktadır.",
    ],
    galleryCaption: "Tasarım görselleştirmesi. Uygulama sürecine ait görsel bulunmuyor.",
  },
  {
    slug: "firat-bey-villa",
    name: "Fırat Bey Villa",
    location: "Yalıçiftlik, Bodrum",
    year: 2026,
    area: "200 m²",
    scope: "Villa Renovasyonu",
    status: "pre_construction",
    role: "Tasarım, Görselleştirme ve Uygulama",
    image: "/images/firat-bey-villa.jpg",
    imageAlt: "Fırat Bey Villa görselleştirmesi",
    cardTag: "200 m² · Villa Renovasyonu",
    description: [
      "Fırat Bey Villa, Yalıçiftlik'te 200 m²'lik bir villanın renovasyon projesidir. Tasarım ve görselleştirme tamamlanmış olup, proje şu an saha uygulamasına hazırlık aşamasındadır.",
    ],
    galleryCaption:
      "Tasarım görselleştirmesi. Uygulama henüz başlamadığı için sahaya ait görsel bulunmuyor.",
  },
  {
    slug: "gerenkuyu-rezidans",
    name: "Gerenkuyu Rezidans",
    location: "Kızılağaç, Bodrum",
    year: 2026,
    area: "9.000 m² toplam · 6.700 m² kapalı",
    scope: "100 adet 2+1 rezidans",
    status: "preliminary_complete",
    role: "Avan Proje ve Görselleştirme",
    image: "/images/gerenkuyu-rezidans.jpg",
    imageAlt: "Gerenkuyu Rezidans görselleştirmesi",
    cardTag: "9.000 m² · 100 Adet 2+1",
    description: [
      "Gerenkuyu Rezidans, Kızılağaç'ta 100 adet 2+1 rezidanstan oluşan, 9.000 m² toplam ve 6.700 m² kapalı alana sahip büyük ölçekli bir konut projesidir. KAIRO bu projede avan proje ve görselleştirme aşamasını tamamlamıştır; uygulama projesi ve inşaat bu kapsamda yer almamaktadır.",
    ],
    galleryCaption: "Avan proje görselleştirmesi. Uygulama sürecine ait görsel bulunmuyor.",
    heroOrder: 4,
    heroTag: "Kızılağaç, Bodrum · 100 Adet 2+1",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const heroProjects = projects
  .filter((p): p is Project & { heroOrder: number } => p.heroOrder != null)
  .sort((a, b) => a.heroOrder - b.heroOrder);

export const homeFeaturedProjects = projects.filter((p) => p.homeFeatured);
