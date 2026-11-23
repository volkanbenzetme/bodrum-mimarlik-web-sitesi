// Aranabilir hizmet sayfaları (SEO). Her kayıt /<slug> altında kendi sayfasına dönüşür.
// İçerik yalnızca services.ts / process.ts / organization.ts'deki gerçek kapsamdan türetilir;
// fiyat, süre, yıl veya referans sayısı gibi doğrulanmamış iddia YAZILMAZ.

export interface ServicePage {
  slug: string;
  /** <title> — hedef anahtar kelime başta. */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lede: string;
  /** Gövde paragrafları. */
  body: string[];
  /** "Kapsam" listesi. */
  scopeTitle: string;
  scope: string[];
  /** Kısa soru-cevap bölümü (rakam/söz içermez). */
  faq: { q: string; a: string }[];
  /** Schema.org Service adı. */
  serviceName: string;
  /** Bu hizmetle ilgili portfolyo projeleri (projects.ts slug'ları). */
  relatedProjects: string[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "bodrum-tadilat",
    metaTitle: "Bodrum Tadilat ve Renovasyon — KAIRO Studio, Yalıkavak",
    metaDescription:
      "Bodrum'da konut ve villa tadilatı: keşiften teslime planlı süreç, tasarım ve uygulama tek çatı altında. Yalıkavak merkezli KAIRO Studio'dan teklif alın.",
    eyebrow: "Bodrum Tadilat",
    h1: "Bodrum'da Tadilat ve Renovasyon",
    lede: "Mevcut yapıyı yerinde okuyup, tasarım ve uygulamayı birlikte yürüten; belirsizliği baştan azaltan bir tadilat süreci.",
    body: [
      "Tadilatta asıl risk belirsizliktir: kapsamı net olmayan bir iş, bütçeyi ve takvimi dağıtır. KAIRO Studio olarak Bodrum'daki konut ve villa tadilatlarında işe keşifle başlıyor, kapsamı yazılı hale getiriyor ve ancak ondan sonra uygulamaya geçiyoruz.",
      "Tasarım ve uygulama aynı ekipte olduğu için mekânın yeniden kurgusu, malzeme seçimi ve teknik detaylar birbirinden kopmadan ilerler. Bodrum'un iklimini, tuzlu havayı ve mevcut yapı koşullarını göz önünde bulundurarak çözüm geliştiriyoruz.",
      "Süreci keşiften teslime kadar adım adım takip ediyoruz; her aşamada ne yapıldığını ve sıradaki adımı bilirsiniz.",
      "Tadilatın kapsamı tek bir mekândan bütün eve kadar değişebilir: yalnızca mutfak veya banyo yenilemesi, mekânların yeniden kurgulanması ya da cephe, çatı, izolasyon ve tesisatı da içeren kapsamlı bir dönüşüm. Kapsam ne olursa olsun önce mevcut yapıyı okur, korunacak değerlerle yenilenecek bölümleri ayırırız.",
    ],
    scopeTitle: "Tadilat kapsamımız",
    scope: [
      "Konut renovasyonu",
      "Villa yenileme",
      "Mekânsal yeniden kurgulama",
      "Cephe ve çatı yenileme",
      "İzolasyon ve tesisat",
      "Anahtar teslim dönüşüm",
    ],
    faq: [
      {
        q: "Tadilata nasıl başlıyoruz?",
        a: "Önce ihtiyacınızı dinliyor, ardından yerinde keşif yapıyoruz. Keşiften sonra kapsam netleşir ve uygulama bu kapsam üzerinden yürür.",
      },
      {
        q: "Tasarım ve uygulama aynı ekipte mi?",
        a: "Evet. Mimari ve iç mimari tasarım ile saha uygulaması KAIRO Studio çatısı altında birlikte yönetilir.",
      },
      {
        q: "Fiyatı nasıl öğrenirim?",
        a: "Fiyat, keşif sonrası kapsama göre hazırlanır. Sitede sabit bir fiyat verilmez; iletişim formundan veya WhatsApp'tan bilgi paylaşırsanız size dönüş yaparız.",
      },
      {
        q: "Yalnızca mutfak veya banyo yenilemesi yapıyor musunuz?",
        a: "Evet. Tadilat kapsamı tek bir mekândan bütün eve kadar ihtiyaca göre belirlenir; mutfak ve banyo gibi tek mekân yenilemeleri de bu kapsamdadır.",
      },
      {
        q: "Bodrum'un iklimi tadilatı nasıl etkiler?",
        a: "Tuzlu hava, nem ve güçlü güneş malzemenin ömrünü doğrudan etkiler. İzolasyon, doğrama, dış mekân malzemeleri ve detayları bu koşullara göre seçeriz.",
      },
      {
        q: "Tadilat için izin veya ruhsat gerekir mi?",
        a: "Taşıyıcı sisteme, cepheye veya yapının dış görünüşüne dokunan işlerde izin gerekebilir. Hangi işin izne tabi olduğunu keşif ve kapsam aşamasında belirleriz.",
      },
    ],
    serviceName: "Bodrum tadilat ve renovasyon",
    relatedProjects: ["gulumser-ailesi-konutu", "d16-renovasyon", "kadim-bey-mustemilat"],
  },
  {
    slug: "bodrum-villa-renovasyon",
    metaTitle: "Bodrum Villa Renovasyonu ve Yenileme — KAIRO Studio",
    metaDescription:
      "Bodrum'da villa renovasyonu: cephe, çatı, havuz, peyzaj ve iç mekân yenileme. Tasarımdan anahtar teslime tek ekip. Yalıkavak, Bodrum.",
    eyebrow: "Villa Renovasyonu",
    h1: "Bodrum'da Villa Renovasyonu",
    lede: "Villanın karakterini koruyarak yaşam biçiminize göre yeniden kurguluyoruz: iç mekân, cephe, çatı, havuz ve dış alanlar birlikte ele alınır.",
    body: [
      "Bir villa renovasyonu tek bir işten oluşmaz; iç mekân, cephe, çatı, izolasyon, tesisat, havuz ve peyzaj birbirini etkiler. Bunları ayrı ayrı taşeronlara bölmek yerine tek bir plan altında topluyoruz.",
      "KAIRO Studio, Bodrum'da konut, villa ve renovasyon projeleri üzerinde çalışır. Projelerimizi portfolyo sayfamızda inceleyebilirsiniz; portfolyodaki görseller sitede de belirtildiği gibi tasarım görselleridir.",
      "Villanızın mevcut durumunu keşifle değerlendirir, neyin korunacağını, neyin değişeceğini birlikte netleştirir ve uygulamayı bu kararlar üzerinden yürütürüz.",
      "Bodrum'da yazlık olarak yapılmış pek çok villa bugün yıl boyu kullanılan evlere dönüşüyor. Bu dönüşümde izolasyon, tesisat ve doğramalar ile iç mekânın kullanım düzeni birlikte ele alınmalıdır. Renovasyonu bu bütünlük içinde planlıyoruz.",
    ],
    scopeTitle: "Villa renovasyonu kapsamı",
    scope: [
      "İç mekân yeniden kurgulama",
      "Cephe ve çatı yenileme",
      "Mutfak uygulamaları",
      "Havuz mekanik sistem ve izolasyon",
      "Peyzaj ve dış mekân yaşam alanları",
      "Çelik ve ahşap imalat uygulamaları",
    ],
    faq: [
      {
        q: "Villa renovasyonunda hangi işleri üstleniyorsunuz?",
        a: "İç mekân, cephe, çatı, izolasyon, tesisat, havuz sistemleri, peyzaj ve ince işler dahil olmak üzere kapsamı birlikte belirliyoruz.",
      },
      {
        q: "Projeleriniz Bodrum'un neresinde?",
        a: "Merkezimiz Yalıkavak'ta; projelerimizi Bodrum genelinde yürütüyoruz. Proje konumları portfolyo sayfasında yer alır.",
      },
      {
        q: "Havuz ve bahçeyi de yeniliyor musunuz?",
        a: "Evet. Havuz mekanik sistemleri, havuz izolasyonu, peyzaj ve dış mekân yaşam alanları hizmet kapsamımızdadır; iç mekân yenilemesiyle aynı plan içinde yürütülebilir.",
      },
      {
        q: "Bodrum dışındayken süreci takip edebilir miyim?",
        a: "Saha uygulaması düzenli kontrol ve raporlamayla yürütülür. İletişimi WhatsApp ve e-posta üzerinden sürdürürüz; her aşamada ne yapıldığını ve sıradaki adımı bilirsiniz.",
      },
    ],
    serviceName: "Bodrum villa renovasyonu",
    relatedProjects: ["mercankoy-e4", "firat-bey-villa"],
  },
  {
    slug: "bodrum-ic-mimarlik",
    metaTitle: "Bodrum İç Mimarlık ve İç Mekân Tasarımı — KAIRO Studio",
    metaDescription:
      "Bodrum'da iç mimarlık: konsept, 3D görselleştirme, uygulama projesi ve mutfak, ahşap, çelik imalat. Yalıkavak merkezli KAIRO Studio.",
    eyebrow: "İç Mimarlık",
    h1: "Bodrum'da İç Mimarlık ve İç Mekân Tasarımı",
    lede: "Konseptten uygulamaya: Bodrum'un ışığına, taşına ve yaşam kültürüne uygun iç mekânlar.",
    body: [
      "İç mimari tasarım, yalnızca görsel bir çalışma değil; mekânın nasıl kullanılacağı, hangi malzemenin nasıl yaşlanacağı ve detayın sahada nasıl yapılacağı sorusudur. Bu yüzden tasarım ve uygulama birlikte düşünülür.",
      "Konsept geliştirme ve 3D görselleştirme ile kararları uygulamadan önce görünür hale getiriyoruz. Ardından uygulama projesini hazırlıyor, mutfak, ahşap ve çelik imalat gibi özel işleri aynı disiplinle yürütüyoruz.",
      "Bodrum'un doğal dokusunu, taşın hafızasını ve köklü yaşam kültürünü tasarımın başlangıç noktası kabul ediyoruz.",
      "İç mekân kararları mimariden ayrı düşünülmez: duvarın yeri, pencerenin ışığı, tesisatın geçtiği yol ve dolabın ölçüsü birbirine bağlıdır. Konsept, plan, malzeme ve detay kararları mimar ve iç mimar tarafından birlikte geliştirilir.",
    ],
    scopeTitle: "İç mimarlık kapsamı",
    scope: [
      "İç mimari tasarım",
      "Konsept geliştirme",
      "3D görselleştirme",
      "Uygulama projesi",
      "Mutfak uygulamaları",
      "Ahşap imalat ve ince işler",
    ],
    faq: [
      {
        q: "Yalnızca tasarım hizmeti alabilir miyim?",
        a: "İhtiyaca göre sıfırdan tasarım, kapsamlı tadilat veya teknik uygulama gibi farklı kapsamlar mümkündür. Hangisinin size uygun olduğunu ilk görüşmede birlikte belirleriz.",
      },
      {
        q: "3D görselleştirme hizmetin içinde mi?",
        a: "Evet, konsept ve 3D görselleştirme tasarım sürecinin bir parçasıdır.",
      },
      {
        q: "Malzeme ve renk seçimleri nasıl yapılıyor?",
        a: "Konsept aşamasında tasarım yönü belirlenir; malzeme seçimleri teknik çizimler ve iş programıyla birlikte netleştirilir. Alternatiflerin bütçeye ve uygulamaya etkisini karar vermeden önce birlikte değerlendiririz.",
      },
      {
        q: "Mutfak ve dolapları da tasarlayıp uyguluyor musunuz?",
        a: "Evet. Mutfak uygulamaları, ahşap imalat ve ince işler hizmet kapsamımızdadır; tasarımdan sahadaki montaja kadar aynı ekip tarafından takip edilir.",
      },
    ],
    serviceName: "Bodrum iç mimarlık",
    relatedProjects: ["d16-renovasyon", "gulumser-ailesi-konutu", "mercankoy-e4"],
  },
  {
    slug: "bodrum-mimari-proje",
    metaTitle: "Bodrum Mimari Proje ve Tasarım — KAIRO Studio, Yalıkavak",
    metaDescription:
      "Bodrum'da mimari proje: konut, villa ve rezidans tasarımı, uygulama projesi ve proje yönetimi. Yalıkavak merkezli mimarlık stüdyosu KAIRO Studio.",
    eyebrow: "Mimari Proje",
    h1: "Bodrum'da Mimari Proje ve Tasarım",
    lede: "Konut, villa ve rezidans ölçeğinde mimari tasarım; avan projeden uygulama projesine ve sahadaki takibe kadar.",
    body: [
      "Mimari proje, arsanın ve çevrenin doğru okunmasıyla başlar. Bodrum'un topografyasını, iklimini ve yerel yapı kültürünü tasarımın girdisi olarak ele alıyoruz.",
      "KAIRO Studio, Yalıkavak merkezli bir mimarlık, iç mimarlık ve uygulama stüdyosudur. Konut ve rezidans projelerini portfolyomuzda görebilirsiniz.",
      "Projenin uygulama aşamasına geçmesi halinde aynı ekip sahada da süreci takip eder; böylece çizilen ile yapılan arasındaki kopukluk azalır.",
      "Tek bir konuttan çok birimli rezidans projelerine kadar farklı ölçeklerde çalışıyoruz. Portfolyomuzda Yalıçiftlik'te 56 rezidanslı bir toplu konut projesinin tasarım ve görselleştirmesi ile Kızılağaç'ta 100 rezidanslı bir projenin avan projesi yer alır.",
    ],
    scopeTitle: "Mimari proje kapsamı",
    scope: [
      "Mimari tasarım",
      "Konsept geliştirme",
      "3D görselleştirme",
      "Uygulama projesi",
      "Proje yönetimi ve uygulama takibi",
    ],
    faq: [
      {
        q: "Proje sürecinde hangi aşamalar var?",
        a: "Ön bilgi, ihtiyaç görüşmesi, keşif, kapsam, konsept, proje, uygulama ve teslim olmak üzere sekiz aşamalı KAIRO Yöntemi'ni izliyoruz. Ayrıntılar Süreç sayfasındadır.",
      },
      {
        q: "Görüşme için ne yapmalıyım?",
        a: "İletişim formunu doldurabilir veya WhatsApp'tan yazabilirsiniz; projeniz hakkındaki bilgilerle size dönüş yaparız.",
      },
      {
        q: "Rezidans ve toplu konut projesi yapıyor musunuz?",
        a: "Evet. Tek konutun yanı sıra çok birimli rezidans projelerinde de tasarım ve avan proje çalışmaları yürüttük; örnekleri Projeler sayfasındadır.",
      },
      {
        q: "Arsam için tasarıma nereden başlanır?",
        a: "Önce arsanın konumu, topografyası, çevresi ve yapılaşma koşulları ile sizin ihtiyaçlarınız birlikte okunur. Tasarım yönü bu verilerden çıkar; ardından avan projeye geçilir.",
      },
    ],
    serviceName: "Bodrum mimari proje ve tasarım",
    relatedProjects: ["no-19-dream-residence", "gerenkuyu-rezidans"],
  },
];

export const servicePageBySlug = (slug: string) => servicePages.find((s) => s.slug === slug);
