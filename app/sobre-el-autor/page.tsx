export default function SobreElAutorPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-16">
      
      {/* Cabecera / Manifiesto */}
      <div className="text-center space-y-4">
        <span className="text-ediciones-accent text-xs font-mono tracking-[0.25em] uppercase">
          Soberanía Editorial — Manifiesto
        </span>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Literatura desde el Sur Profundo
        </h1>
        <div className="w-12 h-1 bg-ediciones-accent mx-auto mt-6"></div>
      </div>

      {/* Introducción: La mirada desde Trelew y la Patagonia */}
      <section className="space-y-6 font-serif text-lg leading-relaxed text-neutral-300 text-justify">
        <p>
          Escribir desde Trelew y la Patagonia profunda surge de una necesidad visceral: expresar las injusticias sociales que atraviesan nuestra región. A menudo se tilda al sur de desierto demográfico, como si la baja densidad poblacional atenuara los conflictos. Sin embargo, en estas tierras suceden las mismas estructuras de poder y despojo que en los grandes centros urbanos, solo que enmarcadas por la inmensidad del paisaje y el viento.
        </p>
        <p>
          Hablar de la Patagonia, de nuestras raíces, de la cultura originaria y de las comunidades que nos antecedieron es un ejercicio de reflexión pendiente que como sociedad nos debemos de manera ineludible. Cada página de nuestras obras busca poner luz sobre esas zonas invisibilizadas por los relatos oficiales.
        </p>
      </section>

      {/* Bloque destacado: Autogestión y Resistencia */}
      <blockquote className="border-l-2 border-ediciones-accent pl-6 py-2 my-8 italic font-serif text-xl text-white">
        &ldquo;Soberanía Editorial nace frente a la falta de oportunidades y los tiempos rígidos de una industria tradicional, corporativa y segmentada, tanto a nivel nacional como global.&rdquo;
      </blockquote>

      {/* El Sello y la Independencia */}
      <section className="space-y-6 font-serif text-lg leading-relaxed text-neutral-300 text-justify">
        <p>
          Estar al margen de los círculos literarios tradicionales y de las vidrieras complacientes —esas que se aplauden a sí mismas mientras ignoran la realidad de la calle— es una decisión ética. En <strong className="text-white font-sans font-semibold">Soberanía Editorial</strong> construimos un espacio de absoluta independencia. El día de mañana, cuando este sello acoja las obras de otros autores, lo hará con el mismo rigor y la misma entrega absoluta con la que defendemos nuestros propios textos.
        </p>
        <p>
          Entre los títulos que ya llevan el pulso y el sello de nuestra casa editorial se encuentran <em className="text-white">Crónicas del Viento (Ciclo II)</em> y la edición internacional en inglés de <em className="text-white">Cubism</em>.
        </p>
      </section>

      {/* Propósito Final */}
      <section className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-sm space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-ediciones-accent font-semibold">
          El Propósito de la Obra
        </h2>
        <p className="font-serif text-xl text-white italic leading-relaxed">
          &ldquo;Memoria, los años 90, el exilio, la soberanía... Si tuviera que definir el propósito de mis libros en una sola frase, diría que cada página y cada pensamiento buscan una sola cosa: <strong className="text-ediciones-accent not-italic font-sans font-bold">hacer justicia social</strong>. Y eso, en estos tiempos, cuesta un montón.&rdquo;
        </p>
        <p className="text-xs font-mono text-neutral-500 text-right pt-2">
          — Demián Agustín Testino
        </p>
      </section>

    </div>
  );
}