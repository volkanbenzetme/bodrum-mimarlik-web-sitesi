import { useRef, useState } from "react";

const IHTIYAC_OPTIONS = [
  "Mimari Tasarım",
  "İç Mimari",
  "Peyzaj Tasarımı",
  "Proje Yönetimi & Uygulama",
  "Restorasyon / Yeniden İşlevlendirme",
  "Teknik Uygulama (İzolasyon, Tesisat, İmalat)",
  "Danışmanlık / Henüz Emin Değilim",
];

type Status = "idle" | "sending" | "success" | "error";

// Production'ın tam 7 alanlı lead formu (name, phone, email, location, ihtiyaclar[], scope_budget,
// message) — Web3Forms'a doğrudan fetch() POST eder, honeypot ve access_key korunur.
// Bkz. AGENT.md: kurucunun e-postadan fiyat verebilmesi için bu alanların tamamı gerekli.
export default function LeadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const json = await res.json();
      if (json.success) {
        form.reset();
        setStatus("success");
      } else {
        throw new Error(json.message || "submit failed");
      }
    } catch {
      setStatus("error");
    }
  }

  const statusText =
    status === "success"
      ? "Teşekkürler! Talebiniz alındı, en kısa sürede size dönüş yapacağız."
      : status === "error"
        ? "Bir şeyler ters gitti, lütfen tekrar deneyin ya da doğrudan arayın."
        : "";
  const statusColor = status === "success" ? "var(--accent)" : status === "error" ? "#a33" : undefined;

  return (
    <form id="lead-form" ref={formRef} className="form-grid" autoComplete="on" onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value="479e6b7b-2e15-464d-a344-973a8feb3b8b" />
      <input type="hidden" name="subject" value="KAIRO Studio — Yeni Proje Talebi" />
      <input type="hidden" name="from_name" value="KAIRO Studio Web Sitesi" />
      <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="form-field">
        <label htmlFor="lf-name">Ad Soyad</label>
        <input id="lf-name" type="text" name="name" placeholder="Adınız Soyadınız" required />
      </div>
      <div className="form-field">
        <label htmlFor="lf-phone">Telefon</label>
        <input id="lf-phone" type="tel" name="phone" placeholder="+90 5xx xxx xx xx" required />
      </div>
      <div className="form-field full">
        <label htmlFor="lf-email">E-posta</label>
        <input id="lf-email" type="email" name="email" placeholder="ornek@eposta.com" required />
      </div>
      <div className="form-field full">
        <label htmlFor="lf-location">Proje Konumu</label>
        <input id="lf-location" type="text" name="location" placeholder="Örn. Yalıkavak, Akyarlar, Gölköy…" />
      </div>
      <div className="form-field full">
        <label>İhtiyacınız</label>
        <div className="checkbox-group">
          {IHTIYAC_OPTIONS.map((option) => (
            <label className="checkbox-item" key={option}>
              <input type="checkbox" name="ihtiyaclar[]" value={option} /> {option}
            </label>
          ))}
        </div>
      </div>
      <div className="form-field full">
        <label htmlFor="lf-scope-budget" style={{ textTransform: "none", letterSpacing: "0.02em" }}>
          Yaklaşık Büyüklük / Bütçe (opsiyonel)
        </label>
        <input
          id="lf-scope-budget"
          type="text"
          name="scope_budget"
          placeholder="Örn. ~350 m², bütçe henüz netleşmedi"
        />
      </div>
      <div className="form-field full">
        <label htmlFor="lf-message">Mesajınız</label>
        <textarea id="lf-message" name="message" placeholder="Projeniz hakkında bize kısaca bahsedin…" />
      </div>
      <div className="form-field full">
        <button type="submit" className="btn btn-primary form-submit" disabled={status === "sending"}>
          {status === "sending" ? "Gönderiliyor…" : "Gönder"}
        </button>
        <p style={{ marginTop: 14, fontSize: "0.86rem", minHeight: "1.2em", color: statusColor }}>{statusText}</p>
      </div>
    </form>
  );
}
