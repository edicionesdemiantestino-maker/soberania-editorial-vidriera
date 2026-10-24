import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Base de datos local
const booksData: Record<string, {
  title: string;
  subtitle: string;
  year: string;
  cover: string;
  synopsis: string;
  details: string[];
  amazonUrl: string;
  waText: string;
  dossier?: string;
}> = {
  "kaukel": {
    title: "Trilogy Saga Káukel",
    subtitle: "Trilogía de la Identidad Patagónica",
    year: "2026",
    cover: "/Trilogia-Saga-Kaukel.png",
    synopsis: "Saga narrativa centrada en la reconstrucción identitaria y territorial patagónica. Explora la memoria, el paisaje y las dinámicas sociales del sur profundo.",
    details: ["Inscripta oficialmente ante la DNDA (marzo 2026).", "Edición física y digital e-book.", "ISBN Cámara Argentina del Libro."],
    amazonUrl: "https://a.co/d/0fStBYOT",
    waText: "Hola Demián, quisiera adquirir la saga Káukel."
  },
  "el-ente": {
    title: "El Ente",
    subtitle: "De la frecuencia cero",
    year: "2026",
    cover: "/El-Ente-Frecuencia-Cero.png",
    synopsis: "Una incursión literaria que aborda las frecuencias ausentes, la desconexión contemporánea y la búsqueda de sentido en entornos fragmentados.",
    details: ["Inscripta oficialmente ante la DNDA (marzo 2026).", "Formato digital optimizado."],
    amazonUrl: "https://a.co/d/02l6BELf",
    waText: "Hola Demián, me interesa El Ente de la frecuencia cero.",
    dossier: `INTRODUCCIÓN AL LIBRO I: EL EXPEDIENTE VENTO

AVISO LEGAL Y NARRATIVO: Esta es una obra de reconstrucción artística y conceptual. Cualquier semejanza con la realidad, con personajes de la vida política, empresarial o judicial, o con eventos históricos de la República Argentina, es pura y absoluta coincidencia. Los nombres, escenarios y situaciones aquí descritos forman parte de un ejercicio de "Cubismo de Redes" destinado a la preservación de una memoria alternativa. Este documento no es una acusación, sino un artefacto de ficción soberana.

"La historia oficial no es más que una mentira acordada, pero la memoria de la calle es una herida abierta que no cicatriza".

Aclaro desde el inicio, como dicta el rigor del blindaje: si los rostros que aquí aparecen te resultan familiares, si el frío de los 90 te eriza la piel o si el dolor de 2001 te suena a conocido, es solo una coincidencia de la realidad con el arte. El arte no miente, pero la realidad a veces se copia de él para ocultar sus rastros.

Este es el expediente visual y narrativo de Valeria Vento, la Mariscal. Una figura que, en esta ficción, representa a la Traidora que se tragó un país durante cuarenta años. Muchos han intentado contar su historia, pero la Mariscal tiene mil caras y un solo espejo: el que ella misma mandó a construir. Quien la mira de frente, solo ve su reflejo.

Por eso, este legado no es un retrato lineal, sino un mosaico de fragmentos. A través del cubismo, hemos descompuesto su poder en planos afilados. Cada imagen que sigue es un segundo exacto de la infamia, un tajo en la seda de su poder. Verás cómo la lealtad se convirtió en billetes, cómo el patrimonio se remató, y cómo el hambre se firmó con un bisturí.

Este legado es la verdad fragmentada para que la mentira monolítica no pueda volver a ocultarse.

Bienvenido al expediente. El blindaje está puesto. Ahora, empezá a leer.

EL BAUTISMO DE HUMO

La calle Corrientes, a esa hora de la madrugada, era un tajo abierto que supuraba un vapor frío y rancio. El olor del gas lacrimógeno se le había pegado a Valeria en el pelo, un aroma metálico y persistente que le recordaba, con cada ráfaga de viento, que el mundo exterior se estaba cayendo a pedazos. Pero a ella no le importaba el mundo; le importaba el mapa de ese mundo que llevaba apretado contra las costillas.

Subió los tres pisos por escalera de ese edificio de San Telmo que olía a humedad vieja y a encierro. En el descanso del segundo piso, se detuvo. Escuchó. Abajo, el eco de un patrullero que pasaba despacio, como un animal buscando una presa, hacía vibrar los vidrios resecos de los ventanales. Valeria no sintió miedo. Sintió una especie de desprecio eléctrico. Le daban asco los que corrían, los que se escondían, los que creían que una molotov casera iba a frenar el engranaje de los que realmente mandaban.`
  },
  "cubismo": {
    title: "Cubismo",
    subtitle: "Narrativa fragmentada (Español)",
    year: "2026",
    cover: "/cubismo.png",
    synopsis: "Exploración de la estructura literaria a través de múltiples ángulos simultáneos, rompiendo la linealidad cronológica clásica.",
    details: ["Inscripta ante la DNDA (marzo 2026).", "Maquetación y diseño A+ Content."],
    amazonUrl: "https://a.co/d/0hj0kQEO",
    waText: "Hola Demián, quiero adquirir Cubismo en español.",
    dossier: `INTRODUCCIÓN: El Ángulo de la Memoria (Homenaje al Cubismo del Desarraigo)

Este libro no es un registro oficial, ni una cronología de fechas frías en un archivo estatal. Lo que tienes entre las manos es una historia alternativa, un mapa de señales recuperadas del ruido blanco del olvido. Es una obra construida desde la óptica del cubismo: aquí la realidad se fragmenta no para romperse, sino para mostrar todas sus caras al mismo tiempo. El dolor de la partida, la disonancia del nuevo idioma y el brillo de la resistencia conviven en un solo plano, desafiando la lógica de quienes quisieron imponer un relato único y gris.

A ustedes, los que fueron exiliados y hoy están en pie: A los que tuvieron que meter su vida en una maleta de veinte kilos y descubrieron que el alma pesaba mucho más. A los que sobrevivieron al frío de Estocolmo, a la soledad de Ciudad de México o al cemento de Madrid, y que hoy caminan con la frente en alto, sin pedir permiso por existir. Este libro es su espejo. Es el reconocimiento de que su identidad no se perdió en la aduana, sino que se multiplicó para volverse universal.

En estas páginas, el exilio deja de ser una cifra política para convertirse en lo que realmente fue: una experiencia humana total. Aquí, el pasado y el presente se superponen. Veremos a Alfredo, Atahualpa, Isabel, Astor, Mercedes, Sergio, Julián y Sofía no como estatuas de bronce, sino como seres de carne y vibración que, ante la orden de callar, respondieron con la sinfonía más potente de todas: la de seguir siendo.

Bienvenidos a esta frecuencia. Ajusten el dial de su memoria. La historia comienza aquí, vista desde todos los ángulos posibles, para que nunca más nadie pueda decirnos quiénes somos.

Capítulo 1: “La Estática del Despegue”

El estuche de la guitarra no es un objeto. Es un perímetro. Alfredo lo sujeta con la falange del índice derecho, sintiendo la vibración del asfalto de Carrasco filtrándose por el cuero gastado hasta alcanzar el abeto de la tapa. La madera tiene memoria de bosque, pero ahora solo registra la frecuencia de las botas.

[FRECUENCIA 440Hz – INTERFERENCIA DETECTADA]

El aire en Montevideo se ha vuelto sólido. No se respira, se mastica. Es un compuesto químico de gasoil de camión militar y el miedo agrio que emana de los poros de quienes esperan en la fila. Alfredo no mira a los ojos. Mirar es entregar una coordenada. Sus ojos están fijos en la veta de la madera que asoma por un raspón del estuche. Esa veta es el único mapa confiable que le queda.`
  },
  "cubismo-en": {
    title: "Cubismo (English Edition)",
    subtitle: "Fragmented Narrative",
    year: "2026",
    cover: "/cubismo-en.png",
    synopsis: "Official English translation of Cubismo. A multi-perspective narrative exploring memory, structure, and identity.",
    details: ["Edición internacional disponible globalmente en Amazon KDP."],
    amazonUrl: "https://a.co/d/06i2i3TT",
    waText: "Hola Demián, me interesa la edición en inglés de Cubismo."
  },
  "patria-grande": {
    title: "Patria Grande",
    subtitle: "Bitácora social y política",
    year: "2026",
    cover: "/Bitacora-Patria-Grande.png",
    synopsis: "Ensayo y crónica que recorre las transformaciones sociohistóricas y la soberanía en la región sudamericana.",
    details: ["Inscripta ante la DNDA (marzo 2026)."],
    amazonUrl: "https://a.co/d/06oG09f8",
    waText: "Hola Demián, me interesa Patria Grande."
  },
  "cronicas-del-viento-1": {
    title: "Crónicas del Viento",
    subtitle: "Ciclo I",
    year: "2026",
    cover: "/cronicas-del-viento-1.png",
    synopsis: "Primer ciclo de relatos e impresiones patagónicas, registrando vivencias, voces locales y el impacto del territorio.",
    details: ["Colección narrativa de Soberanía Editorial."],
    amazonUrl: "https://a.co/d/09C0MPSs",
    waText: "Hola Demián, quisiera adquirir Crónicas del Viento (Ciclo I)."
  },
  "cronicas-del-viento-2": {
    title: "Crónicas del Viento",
    subtitle: "Ciclo II",
    year: "2026",
    cover: "/cronicas-del-viento-2.jpg",
    synopsis: "Continuación de la serie de crónicas del viento, profundizando en la crónica social y el relato territorial.",
    details: ["Colección narrativa de Soberanía Editorial."],
    amazonUrl: "https://a.co/d/0ba73QxI",
    waText: "Hola Demián, quisiera adquirir Crónicas del Viento (Ciclo II)."
  },
  "sintonia-soberana": {
    title: "Sintonía Soberana",
    subtitle: "Colección Editorial",
    year: "2026",
    cover: "/Sintonia-Soberana.png",
    synopsis: "Compilación de manifiestos, ensayos cortos y piezas gráficas producidas bajo el sello Soberanía Editorial.",
    details: ["Edición especial de catálogo."],
    amazonUrl: "https://a.co/d/02EOKhFQ",
    waText: "Hola Demián, me interesa Sintonía Soberana."
  }
};

// Generación de parámetros estáticos para las rutas dinámicas en Vercel
export async function generateStaticParams() {
  return Object.keys(booksData).map((slug) => ({
    slug: slug,
  }));
}

export default async function LibroPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = booksData[slug];

  if (!book) {
    notFound();
  }

  const whatsappNumber = "5492804841846";

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link 
        href="/#catalogo" 
        className="text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-widest mb-8 inline-block transition-colors"
      >
        ← Volver al catálogo
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="aspect-[2/3] relative bg-neutral-800 border border-neutral-700 overflow-hidden shadow-lg shadow-black/50">
          <Image src={book.cover} alt={book.title} fill className="object-cover" priority />
        </div>

        <div className="md:col-span-2 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-ediciones-accent text-xs font-mono font-semibold tracking-wider">{book.year} / SOBERANÍA EDITORIAL</span>
            <h1 className="text-4xl font-black uppercase tracking-tight mt-1">{book.title}</h1>
            <p className="text-xl text-neutral-400 font-serif italic mt-1">{book.subtitle}</p>
            <p className="text-neutral-300 mt-6 leading-relaxed font-serif text-lg">{book.synopsis}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-800">
            <a 
              href={book.amazonUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-bold uppercase tracking-wider text-xs py-4 px-6 text-center hover:bg-neutral-200 transition-colors flex-1 shadow-md shadow-white/10"
            >
              🛒 Comprar en Amazon KDP
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(book.waText)}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-neutral-600 text-white font-bold uppercase tracking-wider text-xs py-4 px-6 text-center hover:bg-neutral-800 hover:border-white transition-colors flex-1"
            >
              📱 Adquirir por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <section className="bg-[#0c0c0c] border border-neutral-800/60 p-8 space-y-4 mb-16 rounded-sm">
        <h2 className="text-sm font-bold uppercase tracking-widest text-ediciones-accent font-mono mb-6">Ficha Técnica & Registro</h2>
        <ul className="space-y-3 text-neutral-400 font-serif text-base">
          {book.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-ediciones-accent mt-1">✦</span>
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Renderizado de Dosier Literario */}
      {book.dossier && (
        <article className="border-t border-neutral-800 pt-16 mb-20 max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <span className="text-ediciones-accent text-xs font-mono tracking-[0.2em]">INFORME EDITORIAL</span>
            <h2 className="text-3xl font-black uppercase mt-2 tracking-tight">Dossier Literario</h2>
            <div className="w-12 h-1 bg-ediciones-accent mx-auto mt-6"></div>
          </div>
          <div className="prose prose-invert prose-p:text-neutral-300 prose-p:leading-loose prose-p:font-serif prose-p:text-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-white max-w-none whitespace-pre-line text-justify">
            {book.dossier}
          </div>
        </article>
      )}
    </div>
  );
}