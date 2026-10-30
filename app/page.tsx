import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Libros y audiolibros | Demián Agustín Testino",
  description:
    "Explorá el catálogo de Soberanía Editorial, conocé las lecturas que inspiran a Demián Agustín Testino y escuchá Crónicas del Viento.",
};

const books = [
  {
    slug: "kaukel",
    title: "Trilogy Saga Káukel",
    subtitle: "Trilogía de la Identidad Patagónica",
    year: "2026",
    cover: "/Trilogia-Saga-Kaukel.png",
    color: "border-blue-900",
    amazonUrl: "https://a.co/d/0fStBYOT",
    waText: "Hola Demián, me interesa adquirir la saga Káukel.",
  },
  {
    slug: "el-ente",
    title: "El Ente",
    subtitle: "De la frecuencia cero",
    year: "2026",
    cover: "/El-Ente-Frecuencia-Cero.png",
    color: "border-neutral-700",
    amazonUrl: "https://a.co/d/02l6BELf",
    waText: "Hola Demián, me interesa adquirir El Ente de la frecuencia cero.",
  },
  {
    slug: "cubismo",
    title: "Cubismo",
    subtitle: "Narrativa fragmentada (Español)",
    year: "2026",
    cover: "/cubismo.png",
    color: "border-yellow-900",
    amazonUrl: "https://a.co/d/0hj0kQEO",
    waText: "Hola Demián, me interesa adquirir Cubismo (Español).",
  },
  {
    slug: "cubismo-en",
    title: "Cubismo (English Edition)",
    subtitle: "Fragmented Narrative",
    year: "2026",
    cover: "/cubismo-en.png",
    color: "border-amber-700",
    amazonUrl: "https://a.co/d/06i2i3TT",
    waText: "Hola Demián, me interesa adquirir Cubismo (English Edition).",
  },
  {
    slug: "patria-grande",
    title: "Patria Grande",
    subtitle: "Bitácora social y política",
    year: "2026",
    cover: "/Bitacora-Patria-Grande.png",
    color: "border-red-900",
    amazonUrl: "https://a.co/d/06oG09f8",
    waText: "Hola Demián, me interesa adquirir Patria Grande.",
  },
  {
    slug: "cronicas-del-viento-1",
    title: "Crónicas del Viento",
    subtitle: "Ciclo I",
    year: "2026",
    cover: "/cronicas-del-viento-1.png",
    color: "border-teal-900",
    amazonUrl: "https://a.co/d/09C0MPSs",
    waText: "Hola Demián, me interesa adquirir Crónicas del Viento (Ciclo I).",
  },
  {
    slug: "cronicas-del-viento-2",
    title: "Crónicas del Viento",
    subtitle: "Ciclo II",
    year: "2026",
    cover: "/cronicas-del-viento-2.jpg",
    color: "border-cyan-900",
    amazonUrl: "https://a.co/d/0ba73QxI",
    waText: "Hola Demián, me interesa adquirir Crónicas del Viento (Ciclo II).",
  },
  {
    slug: "sintonia-soberana",
    title: "Sintonía Soberana",
    subtitle: "Colección Editorial",
    year: "2026",
    cover: "/Sintonia-Soberana.png",
    color: "border-purple-900",
    amazonUrl: "https://a.co/d/02EOKhFQ",
    waText: "Hola Demián, me interesa adquirir Sintonía Soberana.",
  },
];

const inspiringReads = [
  {
    title: "Demian",
    author: "Hermann Hesse",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547841594l/43609577._SY75_.jpg",
    goodreadsUrl: "https://www.goodreads.com/review/show/9056382784",
  },
  {
    title: "Crónicas del Ángel Gris",
    author: "Alejandro Dolina",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348608234l/230467._SX50_.jpg",
    goodreadsUrl: "https://www.goodreads.com/review/show/9056380075",
  },
  {
    title: "Rebelión en la Granja",
    author: "George Orwell",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1325861570l/170448._SY75_.jpg",
    goodreadsUrl: "https://www.goodreads.com/review/show/9056378737",
  },
];

const episodes = [
  {
    title: "Mi Origen, Mi Pesar y Mi Destino",
    spotifyUrl: "https://open.spotify.com/episode/0qSQYmF1XVoUxC7KQ47YbF",
    youtubeUrl: "https://youtu.be/afHZM04ZDng",
  },
  {
    title: "Blanco sobre barro",
    spotifyUrl: "https://open.spotify.com/episode/1ZuVbjKqjhCsw9FVyEP7JH",
    youtubeUrl: "https://youtu.be/GQzAILOCJNM",
  },
  {
    title: "Nieve de aluminio",
    spotifyUrl: "https://open.spotify.com/episode/7JKU4V6dW0YxcTigFRvz7T",
    youtubeUrl: "https://youtu.be/5LiAaVEOViQ",
  },
];

const waveform = [
  12, 22, 14, 30, 18, 26, 10, 34, 16, 24, 12, 30, 18, 10, 28, 14, 22, 12,
  32, 18, 26, 10, 20, 14, 30, 16, 24, 12,
];

const whatsappNumber = "5492804841846";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <section
        aria-labelledby="home-title"
        className="relative mb-16 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/45 px-5 py-12 text-center sm:mb-20 sm:px-10 sm:py-16 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.12),transparent_58%)]"
        />
        <div className="relative mx-auto max-w-4xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ediciones-accent sm:text-sm">
            Soberanía Editorial
          </p>
          <h1
            id="home-title"
            className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Demián Agustín Testino
          </h1>
          <p className="mx-auto max-w-2xl font-serif text-base leading-relaxed text-neutral-300 sm:text-lg lg:text-xl">
            Autor, ensayista e investigador independiente. Sagas de identidad
            patagónica, crónicas sociales y narrativas cubistas.
          </p>
          <a
            href="https://www.goodreads.com/author/show/69271645.Demian_Agust_n_Testino"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-600 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-neutral-300 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ediciones-accent"
          >
            📚 Seguir como Autor en Goodreads
          </a>
          <div className="flex flex-col justify-center gap-3 pt-3 sm:flex-row">
            <a
              href="#catalogo"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-neutral-950 transition-colors hover:bg-ediciones-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ediciones-accent"
            >
              Explorar catálogo
            </a>
            <a
              href="#audiolibros"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-600 px-6 py-3 text-sm font-bold uppercase tracking-wider text-neutral-100 transition-colors hover:border-neutral-300 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ediciones-accent"
            >
              Escuchar audiolibros
            </a>
          </div>
        </div>
      </section>

      <section
        id="catalogo"
        aria-labelledby="catalog-title"
        className="mb-20 scroll-mt-24 sm:mb-24"
      >
        <div className="mb-7 flex flex-col gap-2 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-ediciones-accent">
              Libros
            </p>
            <h2
              id="catalog-title"
              className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl"
            >
              Catálogo editorial
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-400 sm:text-right">
            Historias, ideas y territorios para leer sin apuro.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
          {books.map((book) => (
            <article
              key={book.slug}
              className={`group grid min-w-0 grid-cols-1 gap-5 rounded-2xl border border-neutral-800 border-l-4 ${book.color} bg-neutral-900/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ediciones-accent/70 hover:bg-neutral-900 sm:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] sm:gap-5 sm:p-5 lg:p-6`}
            >
              <Link
                href={`/libros/${book.slug}`}
                aria-label={`Ver detalles de ${book.title}`}
                className="relative mx-auto block aspect-[2/3] w-full max-w-[14rem] overflow-hidden rounded-lg border border-neutral-700 bg-neutral-800 sm:mx-0 sm:max-w-none"
              >
                <Image
                  src={book.cover}
                  alt={`Portada de ${book.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 639px) 65vw, (max-width: 1023px) 24vw, 14vw"
                />
              </Link>

              <div className="flex min-w-0 flex-col justify-between gap-6 py-1">
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-ediciones-accent">
                    {book.year} / Soberanía Editorial
                  </span>
                  <Link
                    href={`/libros/${book.slug}`}
                    className="mt-2 block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ediciones-accent"
                  >
                    <h3 className="break-words text-xl font-bold uppercase leading-tight tracking-tight text-white transition-colors group-hover:text-ediciones-accent sm:text-2xl">
                      {book.title}
                    </h3>
                  </Link>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-neutral-400">
                    {book.subtitle}
                  </p>
                </div>

                <div className="grid gap-2.5 lg:grid-cols-1 xl:grid-cols-2">
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-3 py-3 text-center text-xs font-bold uppercase tracking-wide text-neutral-950 transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0 fill-current">
                      <path d="M7 4h-2l-1 2H2v2h1l3.6 7.6-1.3 2.4A2 2 0 0 0 7 21h12v-2H7l1.1-2h7.4a2 2 0 0 0 1.8-1.1L21 8H6.2L7 6h13V4H7Zm1 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                    </svg>
                    Adquirir en Amazon
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(book.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-emerald-800/80 bg-emerald-950/30 px-3 py-3 text-center text-xs font-bold uppercase tracking-wide text-emerald-100 transition-colors hover:border-emerald-500 hover:bg-emerald-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0 fill-current">
                      <path d="M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8.9-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7.1 7.1 0 0 1-1.3-1.7c-.1-.2 0-.3.1-.4l.4-.5.2-.4v-.4c0-.1-.5-1.3-.7-1.7-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.1.9 2.3a9.2 9.2 0 0 0 3.5 3.1c.5.2.9.4 1.2.4.5.2 1 .1 1.3.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" />
                    </svg>
                    WhatsApp directo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="audiolibros"
        aria-labelledby="audio-title"
        className="relative mb-20 scroll-mt-24 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/65 px-4 py-8 sm:mb-24 sm:px-7 sm:py-10 lg:px-10 lg:py-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.09),transparent_48%)]"
        />
        <div className="relative">
          <div className="mb-7 flex flex-col gap-5 lg:mb-9 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Una experiencia para escuchar
              </p>
              <h2
                id="audio-title"
                className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl"
              >
                Experiencia sonora
              </h2>
              <p className="mt-2 font-serif text-sm leading-relaxed text-neutral-400 sm:text-base">
                Crónicas del Viento: Ciclo I. Tres relatos, una nueva forma de
                entrar en el universo de la obra.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href="https://open.spotify.com/show/4ClWKsCvLdgZqBARqaVLYu?si=AykhWZtYSHGKyddWGoqERw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-800 px-4 py-2 text-xs font-semibold text-emerald-100 transition-colors hover:border-emerald-500 hover:bg-emerald-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                Spotify · Canal
              </a>
              <a
                href="https://youtube.com/playlist?list=PLfJ1GeFqj3zM&si=XsHpiljg81Rq23JF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-red-900 px-4 py-2 text-xs font-semibold text-red-100 transition-colors hover:border-red-500 hover:bg-red-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                YouTube · Playlist
              </a>
              <a
                href="https://youtube.com/@edicionesdemiantestino?si=JK4JRkgmQTwareNn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-neutral-700 px-4 py-2 text-xs font-semibold text-neutral-200 transition-colors hover:border-neutral-500 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ediciones-accent"
              >
                YouTube · Canal
              </a>
            </div>
          </div>

          <div
            aria-label="Episodios de Crónicas del Viento: Ciclo I"
            className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0"
          >
            {episodes.map((episode, index) => (
              <article
                key={episode.title}
                className="flex w-[min(82vw,19rem)] shrink-0 snap-start flex-col rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4 transition-colors hover:border-neutral-700 sm:w-auto sm:p-5"
              >
                <div
                  aria-hidden="true"
                  className="mb-5 flex h-24 items-center justify-between overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 px-4"
                >
                  <span className="font-serif text-4xl italic text-neutral-700">
                    0{index + 1}
                  </span>
                  <div className="flex h-10 items-center gap-1">
                    {waveform.map((height, barIndex) => (
                      <span
                        key={barIndex}
                        className="w-0.5 rounded-full bg-ediciones-accent/60"
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Crónicas del Viento · Ciclo I
                </p>
                <h3 className="mt-2 min-h-14 text-lg font-semibold leading-snug text-white">
                  {episode.title}
                </h3>
                <div className="mt-auto grid gap-2 pt-5">
                  <a
                    href={episode.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-emerald-800/80 bg-emerald-950/30 px-3 py-2.5 text-sm font-semibold text-emerald-100 transition-colors hover:border-emerald-500 hover:bg-emerald-500/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.8.8 0 0 1-1.1.3 12.6 12.6 0 0 0-8.3-1 .8.8 0 1 1-.4-1.5 14.2 14.2 0 0 1 9.5 1.1c.4.2.5.7.3 1.1Zm1.2-2.7a1 1 0 0 1-1.3.4 15.6 15.6 0 0 0-9.5-1.2 1 1 0 1 1-.5-1.9 17.5 17.5 0 0 1 10.9 1.4c.5.2.7.8.4 1.3Zm.1-2.8a1.2 1.2 0 0 1-1.6.5 18.5 18.5 0 0 0-10.7-1.2 1.2 1.2 0 1 1-.6-2.3 20.8 20.8 0 0 1 12.4 1.4c.6.3.8 1 .5 1.6Z" />
                    </svg>
                    Escuchar en Spotify
                  </a>
                  <a
                    href={episode.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-red-950 bg-red-950/25 px-3 py-2.5 text-sm font-semibold text-red-100 transition-colors hover:border-red-600 hover:bg-red-600/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current">
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                    </svg>
                    Ver en YouTube
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-neutral-500 sm:hidden">
            Deslizá para descubrir los episodios
          </p>
        </div>
      </section>

      <section
        aria-labelledby="identity-title"
        className="border-t border-neutral-800 pt-12 sm:pt-16"
      >
        <div className="mb-7 text-center sm:mb-9">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-ediciones-accent">
            Referencias y lecturas
          </p>
          <h2
            id="identity-title"
            className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl"
          >
            Mi identidad literaria
          </h2>
          <p className="mx-auto mt-2 max-w-xl font-serif text-sm leading-relaxed text-neutral-400 sm:text-base">
            Obras y autores que dialogan con el universo de mis sagas.
          </p>
          <a
            href="https://www.goodreads.com/review/list/205858549?ref=nav_mybooks"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full border border-neutral-700 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-neutral-400 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ediciones-accent"
          >
            Mis libros · Estantería Goodreads
          </a>
        </div>

        <div
          aria-label="Lecturas en Goodreads"
          className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-auto sm:grid sm:max-w-4xl sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0"
        >
          {inspiringReads.map((item) => (
            <a
              key={item.goodreadsUrl}
              href={item.goodreadsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-[min(72vw,14rem)] shrink-0 snap-start flex-col items-center rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ediciones-accent sm:w-auto"
            >
              <div className="relative mb-4 aspect-[2/3] w-24 overflow-hidden rounded-md border border-neutral-700 bg-neutral-800 shadow-lg">
                <Image
                  src={item.cover}
                  alt={`Portada de ${item.title}`}
                  fill
                  sizes="96px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-tight text-white transition-colors group-hover:text-ediciones-accent">
                {item.title}
              </h3>
              <p className="mt-1 font-serif text-xs text-neutral-400">
                {item.author}
              </p>
              <span className="mt-4 rounded-full border border-neutral-800 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-400 transition-colors group-hover:border-neutral-600 group-hover:text-white">
                Ver en Goodreads ↗
              </span>
            </a>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-neutral-500 sm:hidden">
          Deslizá para recorrer las lecturas
        </p>
      </section>
    </div>
  );
}
