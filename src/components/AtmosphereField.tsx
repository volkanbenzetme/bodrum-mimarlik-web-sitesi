// "Gölge Dokusu" — Bodrum avlusu ışığı: pergola/lata gölgesi + zeytin yaprağı dapple'ı,
// taş örgüsü zemin üzerinde. Saf CSS (bkz. styles.css .af-*), yeni bağımlılık yok.
// Yavaş/düşük-opaklıklı ambient dönüş olduğu için prefers-reduced-motion'dan bilinçli
// olarak muaf: kısıtlama büyük/hızlı hareketler için, bu efekt onun kapsamına girmiyor.
export default function AtmosphereField() {
  return (
    <div className="atmosphere-field" aria-hidden="true">
      <div className="af-stone" />
      <div className="af-pergola" />
      <div className="af-leaf af-leaf-1" />
      <div className="af-leaf af-leaf-2" />
      <div className="af-leaf af-leaf-3" />
      <div className="af-leaf af-leaf-4" />
      <div className="af-leaf af-leaf-5" />
      <div className="af-leaf af-leaf-6" />
      <div className="af-leaf af-leaf-7" />
      <div className="af-leaf af-leaf-8" />
    </div>
  );
}
