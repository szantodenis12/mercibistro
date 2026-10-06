import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Termeni și condiții",
  description: "Termeni și condiții și politica de prelucrare a datelor cu caracter personal pentru mercioradea.ro (ZIADOM S.R.L.).",
  path: "/termeni-si-conditii",
});

// Text preluat de pe site-ul actual. TODO_CLIENT: revizuire juridică — textul vechi citează Legea 677/2001 (abrogată de GDPR / Legea 190/2018).
export default function TermsPage() {
  return (
    <LegalPage eyebrow="Informații legale" title="Termeni și condiții">
      <h2>1. Normative legislative și scopul colectării datelor</h2>
      <p>
        ZIADOM S.R.L., în calitate de deținător și operator al site-ului www.mercioradea.ro, numit în continuare „PROPRIETAR”, se conformează normativelor
        Regulamentului General pentru Protecția Datelor (GDPR) în colectarea și procesarea datelor cu caracter personal de la vizitatorii site-ului, numiți în continuare
        „UTILIZATORI / UTILIZATOR”.
      </p>
      <p>
        Prin „regulament” se înțelege legea uniformă la nivel european la care se face referire, iar prin date se înțeleg datele personale ale utilizatorilor. GDPR trebuie
        respectat de orice persoană juridică ce comercializează produse sau servicii cetățenilor UE. Mai multe informații despre GDPR găsiți pe{" "}
        <a href="http://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">
          www.dataprotection.ro
        </a>
        .
      </p>
      <p>Colectarea și procesarea datelor cu caracter personal prin intermediul site-ului www.mercioradea.ro se realizează exclusiv în scopurile comerciale stabilite mai jos:</p>
      <ul>
        <li>în scopul stabilirii unei relații comerciale cu privire la serviciile prezentate pe site, către utilizatorii care au solicitat explicit informații comerciale prin intermediul formularelor sau datelor de contact prezente pe site;</li>
        <li>pentru trimiterea de informări sau oferte prin e-mail, cu acordul utilizatorului pentru această acțiune.</li>
      </ul>

      <h2>2. Date cu caracter personal, consimțământ, procesare</h2>
      <p>
        Datele considerate cu caracter personal colectate pe acest site sunt: nume și/sau prenume, număr de telefon, adresă poștală, adresă de e-mail, CNP (opțional), numele
        companiei pe care utilizatorul o reprezintă, adresă IP. Prin completarea datelor în formulare și bifarea explicită a căsuțelor de confirmare, utilizatorul își dă
        consimțământul liber exprimat, informat și direcționat către prezenta politică de confidențialitate. Atunci când este necesar acordul explicit, vă va fi prezentat un
        buton sau control care să vă ofere posibilitatea de a vă exprima acordul sau refuzul.
      </p>
      <p>Consimțământul nu este o precondiție pentru stabilirea unei relații comerciale și nu creează niciun fel de obligații contractuale.</p>

      <h2>3. Utilizarea datelor cu caracter personal, confidențialitate</h2>
      <p>
        Acest site este securizat HTTPS în transferul informației dintre server și utilizatori. Formularele incluse în acest site nu stochează datele cu caracter personal, ci le
        transmit prin intermediul serviciilor de e-mail către proprietar. Aceste date transmise prin e-mail pot fi stocate, conform legislației în vigoare, de terțe părți precum
        furnizorii de internet, rețele locale sau găzduire e-mail.
      </p>
      <p>
        Datele cu caracter personal colectate prin intermediul acestui site pot fi stocate în sisteme informatice interne deținute de proprietar, în vederea elaborării unei
        oferte comerciale sau pentru îndeplinirea unor obligații legale sau contractuale. Proprietarul se obligă să gestioneze datele stocate în condiții de siguranță și numai
        pentru scopurile comerciale specificate.
      </p>
      <p>
        ZIADOM S.R.L. poate furniza anumite date cu caracter personal colectate prin intermediul acestui site altor operatori (furnizori de servicii de curierat, de marketing,
        de plată/bancare) cu care se află în relații de parteneriat, numai în baza unui angajament de confidențialitate din partea acestora, numai în scopurile menționate și
        conform legislației în vigoare.
      </p>

      <h2>4. Ștergerea datelor cu caracter personal</h2>
      <p>
        Utilizatorul beneficiază de dreptul de acces, de intervenție asupra datelor și de dreptul de a solicita ștergerea tuturor datelor cu caracter personal din sistemele
        informatice interne deținute de proprietar. În acest sens, vă puteți adresa cu o cerere scrisă către ZIADOM S.R.L., la adresa de e-mail{" "}
        <a href="mailto:contact@mercioradea.ro">contact@mercioradea.ro</a>.
      </p>
      <p>
        Fiecare comunicare comercială de tip newsletter și/sau alertă periodică prin e-mail pentru care utilizatorul și-a exprimat în prealabil acordul este însoțită de
        posibilitatea explicită de dezabonare și de ștergere a datelor personale folosite în acest tip de comunicare.
      </p>

      <h2>5. Respectarea drepturilor</h2>
      <p>
        ZIADOM S.R.L. certifică faptul că va respecta drepturile conferite de legislația privind protecția persoanelor cu privire la prelucrarea datelor cu caracter personal și
        libera circulație a acestor date, precum și de Ordonanța nr. 130/2000 privind protecția consumatorilor la încheierea și executarea contractelor la distanță, cu
        modificările ulterioare. Printre aceste drepturi se numără (enumerarea nu are caracter limitativ):
      </p>
      <ul>
        <li>dreptul de a cere ZIADOM S.R.L. să vă confirme, în mod gratuit, dacă vă prelucrează sau nu datele personale;</li>
        <li>dreptul de a cere ZIADOM S.R.L. să rectifice, actualizeze, blocheze sau șteargă, în mod gratuit, datele a căror prelucrare nu este conformă legii;</li>
        <li>dreptul de a cere ZIADOM S.R.L. să înceteze, în mod gratuit, prelucrarea datelor dumneavoastră personale;</li>
        <li>dreptul de a cere ZIADOM S.R.L. să înceteze expedierea de mesaje promoționale.</li>
      </ul>
      <p>
        Orice astfel de cerere se va data, semna și trimite de către persoana înscrisă în baza de date prin e-mail, la adresa{" "}
        <a href="mailto:contact@mercioradea.ro">contact@mercioradea.ro</a>. ZIADOM S.R.L. folosește măsuri de securitate împotriva pierderii, alterării sau folosirii
        greșite a informațiilor aflate sub controlul său.
      </p>
      <p>
        ZIADOM S.R.L. nu poate fi făcută responsabilă pentru erorile survenite în urma neglijenței utilizatorului privind securitatea și confidențialitatea contului și a
        parolei sale și nu poate fi făcută răspunzătoare pentru pierderea sau alterarea datelor personale stocate de www.mercioradea.ro în scopul precizat în prezentul document.
      </p>
      <p>
        Orice accesare a bazei de date cu informații personale ale utilizatorilor, inclusiv orice încercare de acces neautorizat, va fi înregistrată. Orice încercare de a accesa
        datele personale ale altui utilizator, de a modifica conținutul site-ului sau de a afecta performanțele serverului va fi considerată o tentativă de fraudare a site-ului
        și va fi adusă la cunoștința organelor competente.
      </p>
      <p>
        ZIADOM S.R.L. poate modifica declarația și politicile de confidențialitate din când în când și încurajează utilizatorii să verifice periodic această pagină. Continuarea
        utilizării site-ului după orice modificare a politicii de confidențialitate reprezintă acceptul dumneavoastră tacit.
      </p>
    </LegalPage>
  );
}
