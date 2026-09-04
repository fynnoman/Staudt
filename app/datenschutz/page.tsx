import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Fahrzeugtechnik Staudt · Die Meisterwerkstatt in Saarlouis."
};

const sections = [
  {
    n: "1",
    title: "Name und Kontaktdaten des Verantwortlichen",
    body: (
      <>
        <p>Verantwortlicher im Sinne der DSGVO ist:</p>
        <p className="mt-3">
          Fahrzeugtechnik Staudt · Die Meisterwerkstatt<br />
          Kohlbrunnenstraße 20<br />
          66740 Saarlouis<br />
          Tel: 06831 9618905<br />
          Fax: 06831 9618904<br />
          E-Mail:{" "}
          <a href="mailto:info@fzgtechstaudt.de" className="text-signal underline underline-offset-4">
            info@fzgtechstaudt.de
          </a>
        </p>
      </>
    )
  },
  {
    n: "2",
    title: "Erhebung und Speicherung personenbezogener Daten",
    body: (
      <>
        <p className="font-medium text-white/90">a) Beim Besuch der Website</p>
        <p className="mt-2">
          Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät
          eingesetzten Browser automatisch Informationen an den Server unserer
          Website gesendet und temporär in einem Logfile gespeichert. Dazu
          zählen unter anderem Name der aufgerufenen Datei, Datum und Uhrzeit
          des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen
          Abruf, Browsertyp nebst Version, das Betriebssystem, die Referrer
          URL sowie die IP-Adresse.
        </p>
        <p className="mt-3">
          Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser
          berechtigtes Interesse folgt aus dem Zweck des reibungslosen
          Verbindungsaufbaus sowie der Systemsicherheit und -stabilität.
        </p>
        <p className="mt-3 font-medium text-white/90">
          b) Bei Nutzung unseres Kontaktformulars
        </p>
        <p className="mt-2">
          Für Anfragen bieten wir ein Kontaktformular. Die Angabe einer
          gültigen E-Mail-Adresse ist erforderlich, damit wir Ihre Anfrage
          beantworten können. Weitere Angaben sind freiwillig. Die
          Verarbeitung erfolgt auf Basis Ihrer Einwilligung nach Art. 6 Abs.
          1 S. 1 lit. a DSGVO. Die Daten werden nach Erledigung Ihrer
          Anfrage automatisch gelöscht.
        </p>
        <p className="mt-3 font-medium text-white/90">c) Kontaktaufnahme</p>
        <p className="mt-2">
          Wenn Sie per Telefon, Fax oder E-Mail mit uns Kontakt aufnehmen,
          werden die mitgeteilten Daten zur Beantwortung Ihrer Anfrage
          gespeichert. Nach abschließender Klärung des Sachverhalts werden
          die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>
      </>
    )
  },
  {
    n: "3",
    title: "Weitergabe von Daten",
    body: (
      <p>
        Eine Übermittlung Ihrer personenbezogenen Daten an Dritte findet nur
        statt, soweit dies für die Erfüllung vertraglicher oder gesetzlicher
        Pflichten notwendig ist oder Sie ausdrücklich eingewilligt haben.
      </p>
    )
  },
  {
    n: "4",
    title: "Cookies",
    body: (
      <p>
        Wir setzen technisch notwendige Cookies zur Bereitstellung der
        Website ein. Diese enthalten keine personenbezogenen Daten. Weitere
        Cookies (z. B. Analyse-Cookies) werden ausschließlich auf Grundlage
        Ihrer Einwilligung nach Art. 6 Abs. 1 S. 1 lit. a DSGVO gesetzt.
      </p>
    )
  },
  {
    n: "5",
    title: "Einbindung von Diensten Dritter",
    body: (
      <p>
        Zur Darstellung unseres Standorts setzen wir Kartenmaterial von
        OpenStreetMap ein. Beim Laden der Karte kann die IP-Adresse an den
        Anbieter übertragen werden. Datenschutzhinweise:{" "}
        <a
          href="https://osmfoundation.org/wiki/Privacy_Policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-signal underline underline-offset-4"
        >
          OSM Privacy Policy
        </a>
        .
      </p>
    )
  },
  {
    n: "6",
    title: "Betroffenenrechte",
    body: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>Auskunft (Art. 15 DSGVO) über Ihre bei uns verarbeiteten Daten</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO) gespeicherter personenbezogener Daten</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
        <li>Beschwerde bei der zuständigen Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>
    )
  },
  {
    n: "7",
    title: "Widerspruchsrecht",
    body: (
      <p>
        Sofern Ihre Daten auf Grundlage berechtigter Interessen nach Art. 6
        Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht,
        aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen
        die Verarbeitung Widerspruch einzulegen. Möchten Sie hiervon
        Gebrauch machen, genügt eine E-Mail an{" "}
        <a href="mailto:info@fzgtechstaudt.de" className="text-signal underline underline-offset-4">
          info@fzgtechstaudt.de
        </a>
        .
      </p>
    )
  },
  {
    n: "8",
    title: "Datensicherheit",
    body: (
      <p>
        Wir setzen innerhalb des Website-Besuchs das SSL-Verfahren in
        Verbindung mit der jeweils höchsten Verschlüsselungsstufe ein, die
        von Ihrem Browser unterstützt wird. Ergänzend nutzen wir geeignete
        technische und organisatorische Maßnahmen, um Ihre Daten gegen
        Manipulation, Verlust oder unbefugten Zugriff zu schützen.
      </p>
    )
  },
  {
    n: "9",
    title: "Aktualität und Änderung",
    body: (
      <p>
        Diese Datenschutzerklärung hat den Stand September 2026. Durch die
        Weiterentwicklung der Website oder aufgrund geänderter gesetzlicher
        Vorgaben kann es notwendig werden, diese Erklärung anzupassen.
      </p>
    )
  }
];

export default function DatenschutzPage() {
  return (
    <section className="relative pt-28 md:pt-56">
      <div className="mx-auto max-w-3xl px-5 pb-16 md:px-8 md:pb-24">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          DSGVO
        </p>
        <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tightest">
          Datenschutzerklärung
        </h1>
        <p className="mt-6 text-[15.5px] leading-relaxed text-white/60">
          Wir freuen uns über Ihren Besuch. Der Schutz Ihrer personenbezogenen
          Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir
          Sie über den Umgang mit Ihren Daten.
        </p>

        <div className="mt-10 space-y-4">
          {sections.map((s) => (
            <div key={s.n} className="glass rounded-2xl p-5 md:p-7">
              <div className="mb-3 flex items-baseline gap-3">
                <span className="text-signal font-mono text-sm spec-num">
                  {s.n}
                </span>
                <h2 className="text-lg font-semibold text-white">{s.title}</h2>
              </div>
              <div className="space-y-2 text-[15px] leading-relaxed text-white/75">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
