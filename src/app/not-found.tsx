import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-navy text-paper">
      <div className="container-x pt-[6rem]">
        <p className="eyebrow text-gold">Eroare 404</p>
        <h1 className="title-xl mt-[1.25rem] max-w-[14ch]">Pagina asta a plecat prin lume</h1>
        <p className="paragraph-l mt-[1.5rem] max-w-[32rem] text-mist">Nu am găsit ce căutai. Hai înapoi la masă — meniul te așteaptă.</p>
        <div className="mt-[2.25rem] flex flex-wrap gap-[0.75rem]">
          <Link href="/" className="btn btn-gold">
            Acasă
          </Link>
          <Link href="/meniu" className="btn btn-ghost-light">
            Vezi meniul
          </Link>
        </div>
      </div>
    </section>
  );
}
