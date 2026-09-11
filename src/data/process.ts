// KAIRO Studio — 8 adımlı "KAIRO Yöntemi" süreci.
// Kaynak: legacy-static/preview/surec.html (v2 redesign).

export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: "İlk Temas ve Ön Bilgi",
    description: "Talebiniz alınır, projeye dair ilk bilgiler ve beklentiler karşılıklı olarak netleştirilir.",
  },
  {
    title: "İhtiyaç ve Tasarım Görüşmesi",
    description: "Kullanım biçimi, önceliklendirmeler ve tasarım beklentileri detaylandırılır.",
  },
  {
    title: "Mekânı Tanıma",
    description: "Yerinde keşif, ölçüm ve mevcut yapı koşullarının incelenmesi yapılır.",
  },
  {
    title: "Kapsam ve Çalışma Çerçevesi",
    description: "Hizmet sınırları, ön bütçe ve çalışma çerçevesi birlikte belirlenir.",
  },
  {
    title: "Konsept ve Tasarım Kararları",
    description: "Tasarım yönü oluşturulur; alternatiflerin bütçe ve uygulamaya etkisi değerlendirilir.",
  },
  {
    title: "Proje, Malzeme ve İş Programı",
    description: "Teknik çizimler, malzeme seçimleri ve iş programı netleştirilir.",
  },
  {
    title: "Satın Alma, Uygulama ve Saha Kontrolü",
    description: "Tedarik süreci ve saha uygulaması, düzenli kontrol ve raporlamayla yürütülür.",
  },
  {
    title: "Eksiksiz Teslim ve Takip",
    description: "Son kontroller yapılır, teslim kayıtları hazırlanır ve süreç sonrası destek sağlanır.",
  },
];
