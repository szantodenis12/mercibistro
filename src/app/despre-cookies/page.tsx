import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Politica cookies",
  description: "Ce sunt modulele cookie, la ce le folosește mercioradea.ro și ce opțiuni ai în legătură cu ele.",
  path: "/despre-cookies",
});

// TODO_CLIENT: noul site nu folosește cookie-uri de analytics; folosește doar localStorage pentru coșul de cumpărături.
// Dacă se adaugă Google Analytics / Meta Pixel, trebuie adăugat și un banner de consimțământ.
export default function CookiesPage() {
  return (
    <LegalPage eyebrow="Informații legale" title="Politica cookies">
      <h2>1. Ce sunt modulele cookie?</h2>
      <p>
        Un modul cookie, cunoscut și ca HTTP cookie, web cookie sau browser cookie, este de obicei un fișier de mici dimensiuni, format din litere și numere, trimis de către un
        website și stocat în browser-ul web al utilizatorului atunci când acesta navighează pe un website.
      </p>
      <p>Modulele cookie sunt complet „pasive” (nu conțin programe software, viruși sau spyware și nu pot accesa informațiile de pe hard disk-ul utilizatorului).</p>

      <h2>2. La ce folosesc modulele cookie?</h2>
      <p>
        Modulele cookie au fost proiectate ca un mod sigur pentru website-uri de a reține starea website-ului sau activitatea anterioară a utilizatorului. Atunci când
        utilizatorul navighează din nou pe același site, informația păstrată de modulul cookie poate fi folosită pentru a anunța website-ul de activitatea anterioară a
        utilizatorului. Modulele cookie pot include apăsarea anumitor butoane, autentificarea sau reținerea paginilor vizitate.
      </p>
      <p>
        Unele module cookie sunt esențiale pentru funcționarea unor servicii, altele sunt utile pentru a strânge informații cu privire la folosirea website-ului. Unele sunt
        temporare și dispar când închizi browser-ul, altele rămân în dispozitiv o perioadă mai lungă de timp.
      </p>
      <p>Tipurile de module cookie folosite pe website-uri pot fi:</p>
      <ul>
        <li>
          <strong>strict necesare</strong> — rețin ce a adăugat utilizatorul în coșul de cumpărături și în ce etapă a comenzii se află;
        </li>
        <li>
          <strong>funcționale</strong> — rețin detaliile de conectare, asigură siguranța conexiunii și aspectul unitar al website-ului;
        </li>
        <li>
          <strong>de performanță</strong> — îmbunătățesc performanța site-ului și experiența utilizatorului;
        </li>
        <li>
          <strong>de semnalare (targeting)</strong> — permit distribuirea și aprecierea de conținut și transmit informații către alte website-uri pentru a personaliza anunțurile.
        </li>
      </ul>
      <p>
        Site-ul Merci folosește stocarea locală a browser-ului (localStorage / sessionStorage) strict pentru funcționalitate: pentru a reține produsele adăugate în coș și pentru a
        afișa animația de întâmpinare o singură dată pe sesiune.
      </p>

      <h2>3. Ce opțiuni ai în legătură cu cookie-urile?</h2>
      <p>
        Reține totuși că, dacă ștergi cookie-urile sau refuzi să le accepți, este posibil să nu poți utiliza toate funcțiile pe care le oferim, nu îți vei putea stoca
        preferințele, iar unele pagini ar putea să nu fie afișate corect.
      </p>
      <ul>
        <li>
          Pentru Chrome:{" "}
          <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer">
            pagina Google
          </a>
        </li>
        <li>
          Pentru Firefox:{" "}
          <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer">
            pagina Mozilla
          </a>
        </li>
        <li>
          Pentru Safari:{" "}
          <a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer">
            pagina Apple
          </a>
        </li>
        <li>
          Pentru Edge:{" "}
          <a href="https://support.microsoft.com/ro-ro/microsoft-edge" target="_blank" rel="noopener noreferrer">
            pagina Microsoft
          </a>
        </li>
      </ul>
      <p>Pentru orice alt browser, consultă pagina oficială a browser-ului respectiv.</p>
    </LegalPage>
  );
}
