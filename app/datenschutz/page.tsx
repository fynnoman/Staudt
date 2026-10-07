import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Fahrzeugtechnik Staudt · Die Meisterwerkstatt in Saarlouis.",
  alternates: {
    canonical: "/datenschutz",
    languages: { "de-DE": "/datenschutz" }
  }
};

const sections = [
  {
    n: "1",
    title: "Verantwortlicher",
    body: (
      <>
        <p>
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und
          anderer nationaler Datenschutzgesetze ist:
        </p>
        <p className="mt-3">
          Fahrzeugtechnik Staudt · Die Meisterwerkstatt<br />
          Inhaber: Eric Staudt<br />
          Kohlbrunnenstraße 20<br />
          66740 Saarlouis<br />
          Telefon: 06831 9618905<br />
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
    title: "Allgemeines zur Datenverarbeitung",
    body: (
      <>
        <p>
          Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich
          nur, soweit dies zur Bereitstellung einer funktionsfähigen Website
          sowie unserer Inhalte und Leistungen erforderlich ist, oder wenn eine
          Einwilligung vorliegt.
        </p>
        <p className="mt-3">
          Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a DSGVO
          (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung
          beziehungsweise vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f
          DSGVO (berechtigtes Interesse).
        </p>
      </>
    )
  },
  {
    n: "3",
    title: "Hosting und Server-Logfiles",
    body: (
      <>
        <p>
          Diese Website wird bei der Vercel Inc. mit Sitz in den Vereinigten
          Staaten gehostet. Wir haben mit dem Anbieter einen Vertrag zur
          Auftragsverarbeitung geschlossen. Die Datenübermittlung in Drittländer
          erfolgt auf Grundlage der EU-Standardvertragsklauseln.
        </p>
        <p className="mt-3">
          Bei jedem Aufruf unserer Website werden durch den Hoster technische
          Zugriffsdaten in Server-Logfiles verarbeitet. Dazu zählen:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>die IP-Adresse des aufrufenden Endgeräts</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>aufgerufene URL und übertragene Datenmenge</li>
          <li>Browsertyp, Browserversion und Betriebssystem</li>
          <li>Referrer-URL (die zuvor besuchte Seite)</li>
        </ul>
        <p className="mt-3">
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
          Interesse liegt im sicheren und stabilen Betrieb der Website sowie in
          der Abwehr von Angriffen. Die Logdaten werden nach kurzer Zeit
          automatisiert gelöscht, soweit sie nicht zur Aufklärung konkreter
          Störungen oder Sicherheitsvorfälle benötigt werden.
        </p>
      </>
    )
  },
  {
    n: "4",
    title: "Cookies und lokale Speicherung",
    body: (
      <>
        <p>
          Diese Website setzt{" "}
          <span className="font-medium text-white/90">keine Cookies</span> ein.
          Es findet weder eine Reichweiten- oder Nutzungsanalyse statt noch
          werden Marketing- oder Tracking-Cookies gesetzt. Dienste wie Google
          Analytics, Google Tag Manager, Meta Pixel, Matomo oder vergleichbare
          Analyse- oder Werbenetzwerke werden nicht verwendet.
        </p>
        <p className="mt-3">
          Technisch verwenden wir ausschließlich den lokalen Speicher
          (Local Storage) Ihres Browsers, um zwei Einstellungen zu merken:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>
            dass der Datenschutzhinweis beim ersten Besuch von Ihnen zur
            Kenntnis genommen wurde
          </li>
          <li>
            Ihre Entscheidung, ob die eingebettete Karte geladen werden darf
            (siehe Abschnitt „Karte")
          </li>
        </ul>
        <p className="mt-3">
          Diese Einträge verbleiben in Ihrem Browser und werden nicht an uns
          oder Dritte übertragen. Sie können sie jederzeit über die
          Einstellungen Ihres Browsers löschen.
        </p>
      </>
    )
  },
  {
    n: "5",
    title: "Kontaktaufnahme per Telefon, Fax oder E-Mail",
    body: (
      <>
        <p>
          Wenn Sie uns per Telefon, Fax oder E-Mail kontaktieren, verarbeiten
          wir die von Ihnen mitgeteilten Daten zur Bearbeitung Ihrer Anfrage.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vertraglichen oder
          vorvertraglichen Anliegen, im Übrigen Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Beantwortung Ihres Anliegens).
        </p>
        <p className="mt-3">
          Nach abschließender Bearbeitung werden die Daten gelöscht, sofern
          keine gesetzlichen Aufbewahrungspflichten (insbesondere aus Handels-
          und Steuerrecht) entgegenstehen.
        </p>
      </>
    )
  },
  {
    n: "6",
    title: "Kontaktformular",
    body: (
      <>
        <p>
          Unser Kontaktformular speichert keine Daten auf unseren Servern. Beim
          Absenden werden Ihre Eingaben in Ihr lokal installiertes
          E-Mail-Programm übergeben (mailto-Verfahren). Der eigentliche Versand
          erfolgt anschließend durch Sie selbst aus Ihrem E-Mail-Programm an{" "}
          <a href="mailto:info@fzgtechstaudt.de" className="text-signal underline underline-offset-4">
            info@fzgtechstaudt.de
          </a>
          .
        </p>
        <p className="mt-3">
          Falls auf Ihrem Gerät kein E-Mail-Programm eingerichtet ist, kommt
          über das Formular keine Nachricht zustande. Die Verarbeitung Ihrer
          anschließenden E-Mail in unserem Postfach erfolgt auf Grundlage von
          Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
        </p>
      </>
    )
  },
  {
    n: "7",
    title: "Karte (OpenStreetMap)",
    body: (
      <>
        <p>
          Zur Darstellung unseres Standorts binden wir eine Karte der
          OpenStreetMap Foundation (St John's Innovation Centre, Cowley Road,
          Cambridge CB4 0WS, Vereinigtes Königreich) ein. Die Karte wird
          ausschließlich nach Ihrer ausdrücklichen Zustimmung geladen
          (Zwei-Klick-Lösung). Erst mit Klick auf „Karte laden" wird eine
          Verbindung zu den Servern von OpenStreetMap aufgebaut und Ihre
          IP-Adresse sowie technische Zugriffsdaten dorthin übertragen.
        </p>
        <p className="mt-3">
          Rechtsgrundlage für diese Verarbeitung ist Ihre Einwilligung nach
          Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Zustimmung jederzeit
          widerrufen, indem Sie den Local-Storage-Eintrag in Ihrem Browser
          löschen. Weitere Informationen finden Sie in der
          Datenschutzerklärung der OpenStreetMap Foundation:{" "}
          <a
            href="https://osmfoundation.org/wiki/Privacy_Policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal underline underline-offset-4"
          >
            osmfoundation.org/wiki/Privacy_Policy
          </a>
          .
        </p>
      </>
    )
  },
  {
    n: "8",
    title: "Schriftarten",
    body: (
      <p>
        Zur einheitlichen Darstellung von Texten verwenden wir die Schriftart
        „Inter". Die Schriftdateien werden beim Erstellen der Website in das
        Projekt übernommen und ausschließlich von unserem Server ausgeliefert.
        Beim Besuch der Website erfolgt kein Verbindungsaufbau zu Google
        Fonts oder anderen externen Schriftanbietern.
      </p>
    )
  },
  {
    n: "9",
    title: "Weitergabe von Daten",
    body: (
      <p>
        Eine Übermittlung Ihrer personenbezogenen Daten an Dritte erfolgt nur,
        soweit dies zur Erfüllung vertraglicher oder gesetzlicher Pflichten
        erforderlich ist, Sie ausdrücklich eingewilligt haben oder wir dazu
        gesetzlich verpflichtet sind. Dies kann insbesondere eingebundene
        Auftragsverarbeiter (Hoster) betreffen; mit diesen bestehen Verträge
        nach Art. 28 DSGVO.
      </p>
    )
  },
  {
    n: "10",
    title: "Ihre Rechte",
    body: (
      <>
        <p>
          Sie haben uns gegenüber folgende Rechte hinsichtlich der Sie
          betreffenden personenbezogenen Daten:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
        </ul>
        <p className="mt-3">
          Zur Geltendmachung genügt eine formlose Mitteilung an die oben
          genannten Kontaktdaten.
        </p>
      </>
    )
  },
  {
    n: "11",
    title: "Widerspruchsrecht",
    body: (
      <p>
        Soweit die Verarbeitung Ihrer personenbezogenen Daten auf Grundlage
        berechtigter Interessen nach Art. 6 Abs. 1 lit. f DSGVO erfolgt, haben
        Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
        ergeben, nach Art. 21 DSGVO Widerspruch gegen die Verarbeitung
        einzulegen. Senden Sie dazu eine formlose Nachricht an{" "}
        <a href="mailto:info@fzgtechstaudt.de" className="text-signal underline underline-offset-4">
          info@fzgtechstaudt.de
        </a>
        .
      </p>
    )
  },
  {
    n: "12",
    title: "Datensicherheit",
    body: (
      <p>
        Diese Website wird ausschließlich über eine verschlüsselte Verbindung
        (TLS/SSL) ausgeliefert. Zusätzlich treffen wir geeignete technische
        und organisatorische Maßnahmen, um Ihre Daten vor zufälligen oder
        vorsätzlichen Manipulationen, Verlust, Zerstörung oder dem Zugriff
        unberechtigter Personen zu schützen.
      </p>
    )
  },
  {
    n: "13",
    title: "Automatisierte Entscheidungsfindung",
    body: (
      <p>
        Eine automatisierte Entscheidungsfindung einschließlich Profiling nach
        Art. 22 DSGVO findet nicht statt.
      </p>
    )
  },
  {
    n: "14",
    title: "Zuständige Aufsichtsbehörde",
    body: (
      <>
        <p>
          Für uns als Verantwortlichen zuständig ist:
        </p>
        <p className="mt-3">
          Unabhängiges Datenschutzzentrum Saarland<br />
          Die Landesbeauftragte für Datenschutz und Informationsfreiheit<br />
          Fritz-Dobisch-Straße 12<br />
          66111 Saarbrücken<br />
          Telefon: 0681 94781-0<br />
          E-Mail:{" "}
          <a href="mailto:poststelle@datenschutz.saarland.de" className="text-signal underline underline-offset-4">
            poststelle@datenschutz.saarland.de
          </a>
        </p>
      </>
    )
  },
  {
    n: "15",
    title: "Aktualität und Änderungen",
    body: (
      <p>
        Diese Datenschutzerklärung hat den Stand Oktober 2026. Durch die
        Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
        oder behördlicher Vorgaben kann es erforderlich werden, diese
        Datenschutzerklärung anzupassen. Die jeweils aktuelle Fassung kann
        jederzeit auf dieser Seite abgerufen werden.
      </p>
    )
  }
];

export default function DatenschutzPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: "/" },
          { name: "Datenschutz", url: "/datenschutz" }
        ]}
      />
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
          Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend
          informieren wir Sie transparent darüber, welche Daten beim Besuch
          dieser Website verarbeitet werden, zu welchem Zweck und auf welcher
          Rechtsgrundlage.
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
    </>
  );
}
