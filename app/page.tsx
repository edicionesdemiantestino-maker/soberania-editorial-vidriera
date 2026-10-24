import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const whatsappNumber = "5492804841846";

  const books = [
    {
      slug: "kaukel",
      title: "Trilogy Saga Káukel",
      subtitle: "Trilogía de la Identidad Patagónica",
      year: "2026",
      cover: "/Trilogia-Saga-Kaukel.png",
      color: "border-blue-900",
      amazonUrl: "https://a.co/d/0fStBYOT",
      waText: "Hola Demián, me interesa adquirir la saga Káukel."
    },
    {
      slug: "el-ente",
      title: "El Ente",
      subtitle: "De la frecuencia cero",
      year: "2026",
      cover: "/El-Ente-Frecuencia-Cero.png",
      color: "border-neutral-700",
      amazonUrl: "https://a.co/d/02l6BELf",
      waText: "Hola Demián, me interesa adquirir El Ente de la frecuencia cero."
    },
    {
      slug: "cubismo",
      title: "Cubismo",
      subtitle: "Narrativa fragmentada (Español)",
      year: "2026",
      cover: "/cubismo.png",
      color: "border-yellow-900",
      amazonUrl: "https://a.co/d/0hj0kQEO",
      waText: "Hola Demián, me interesa adquirir Cubismo (Español)."
    },
    {
      slug: "cubismo-en",
      title: "Cubismo (English Edition)",
      subtitle: "Fragmented Narrative",
      year: "2026",
      cover: "/cubismo-en.png",
      color: "border-amber-700",
      amazonUrl: "https://a.co/d/06i2i3TT",
      waText: "Hola Demián, me interesa adquirir Cubismo (English Edition)."
    },
    {
      slug: "patria-grande",
      title: "Patria Grande",
      subtitle: "Bitácora social y política",
      year: "2026",
      cover: "/Bitacora-Patria-Grande.png",
      color: "border-red-900",
      amazonUrl: "https://a.co/d/06oG09f8",
      waText: "Hola Demián, me interesa adquirir Patria Grande."
    },
    {
      slug: "cronicas-del-viento-1",
      title: "Crónicas del Viento",
      subtitle: "Ciclo I",
      year: "2026",
      cover: "/cronicas-del-viento-1.png",
      color: "border-teal-900",
      amazonUrl: "https://a.co/d/09C0MPSs",
      waText: "Hola Demián, me interesa adquirir Crónicas del Viento (Ciclo I)."
    },
    {
      slug: "cronicas-del-viento-2",
      title: "Crónicas del Viento",
      subtitle: "Ciclo II",
      year: "2026",
      cover: "/cronicas-del-viento-2.jpg",
      color: "border-cyan-900",
      amazonUrl: "https://a.co/d/0ba73QxI",
      waText: "Hola Demián, me interesa adquirir Crónicas del Viento (Ciclo II)."
    },
    {
      slug: "sintonia-soberana",
      title: "Sintonía Soberana",
      subtitle: "Colección Editorial",
      year: "2026",
      cover: "/Sintonia-Soberana.png",
      color: "border-purple-900",
      amazonUrl: "https://a.co/d/02EOKhFQ",
      waText: "Hola Demián, me interesa adquirir Sintonía Soberana."
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <section className="mb-20 text-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
          Demián Agustín Testino
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-serif italic">
          Autor, ensayista e investigador independiente. Sagas de identidad patagónica, crónicas sociales y narrativas cubistas.
        </p>
      </section>

      <section id="catalogo" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {books.map((book) => (
          <article 
            key={book.slug} 
            className={`flex flex-col sm:flex-row bg-neutral-900/50 border-l-4 ${book.color} border-y border-r border-neutral-800 hover:border-ediciones-accent transition-all duration-300 p-6 gap-6 group`}
          >
            <Link href={`/libros/${book.slug}`} className="w-full sm:w-1/3 aspect-[2/3] bg-neutral-800 relative overflow-hidden border border-neutral-700 flex-shrink-0 cursor-pointer">
              <Image
                src={book.cover}
                alt={`Portada de ${book.title}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </Link>

            <div className="w-full sm:w-2/3 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-ediciones-accent text-xs font-mono">{book.year} / SOBERANÍA EDITORIAL</span>
                <Link href={`/libros/${book.slug}`} className="hover:text-ediciones-accent transition-colors block">
                  <h3 className="text-2xl font-bold uppercase mt-1 tracking-tight">{book.title}</h3>
                </Link>
                <p className="text-neutral-400 font-serif text-sm mt-1">{book.subtitle}</p>
              </div>
              
              <div className="flex flex-col gap-3 pt-2">
                <a 
                  href={book.amazonUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black font-bold uppercase tracking-wider text-xs py-3 px-4 text-center hover:bg-neutral-200 transition-colors"
                >
                  🛒 Adquirir en Amazon
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(book.waText)}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-neutral-600 text-white font-bold uppercase tracking-wider text-xs py-3 px-4 text-center hover:bg-white/10 hover:border-white transition-colors"
                >
                  📱 WhatsApp Directo
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}