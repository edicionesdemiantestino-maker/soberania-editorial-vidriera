import Link from "next/link";

export default function InstitucionalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
      
      {/* Cabecera */}
      <div className="text-center space-y-4 mb-16">
        <span className="text-ediciones-accent text-xs font-mono tracking-[0.25em] uppercase">
          Soberanía Editorial
        </span>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Respaldo Institucional
        </h1>
        <div className="w-12 h-1 bg-ediciones-accent mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Hitos Legales */}
        <section className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-sm space-y-6 hover:border-neutral-600 transition-colors">
          <div className="flex items-center gap-3">
            <span className="text-ediciones-accent text-2xl">⚖️</span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-white">Registros Oficiales</h2>
          </div>
          <ul className="space-y-4 text-neutral-400 font-serif text-lg leading-relaxed">
            <li className="flex gap-3">
              <span className="text-ediciones-accent">✦</span>
              <p>Obras inscritas oficialmente ante la <strong className="text-white font-sans">Dirección Nacional del Derecho de Autor (DNDA)</strong> a través de la plataforma Trámites a Distancia (marzo 2026).</p>
            </li>
            <li className="flex gap-3">
              <span className="text-ediciones-accent">✦</span>
              <p>Credenciales de ISBN gestionadas a través de la <strong className="text-white font-sans">Cámara Argentina del Libro</strong> para distribución formal.</p>
            </li>
          </ul>
        </section>

        {/* Alcance Internacional */}
        <section className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-sm space-y-6 hover:border-neutral-600 transition-colors">
          <div className="flex items-center gap-3">
            <span className="text-ediciones-accent text-2xl">🌍</span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-white">Alcance Internacional</h2>
          </div>
          <p className="text-neutral-400 font-serif text-lg leading-relaxed">
            A través de la infraestructura de Amazon KDP, los títulos de <strong className="text-white font-sans">Soberanía Editorial</strong> han roto las barreras de la distribución tradicional.
          </p>
          <ul className="space-y-4 text-neutral-400 font-serif text-lg leading-relaxed">
            <li className="flex gap-3">
              <span className="text-ediciones-accent">✦</span>
              <p>Ventas consolidadas y lectores activos en <strong className="text-white font-sans">España</strong> (Saga El Ente).</p>
            </li>
            <li className="flex gap-3">
              <span className="text-ediciones-accent">✦</span>
              <p>Distribución en formato e-book para <strong className="text-white font-sans">Estados Unidos</strong> (Cubism: Latin American Exile Saga).</p>
            </li>
          </ul>
        </section>
      </div>

      {/* Prensa y Reseñas (Espacio preparado para futuras notas) */}
      <section className="border-t border-neutral-800 pt-16 mt-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white">Prensa & Reseñas</h2>
          <p className="text-neutral-500 font-serif mt-4">Espacio reservado para cobertura de medios y devoluciones de lectores.</p>
        </div>
        
        {/* Ejemplo de estructura para cuando tengas una reseña:
        <div className="max-w-2xl mx-auto bg-[#0c0c0c] border border-neutral-800 p-6 italic font-serif text-neutral-300">
          "Una mirada cruda y necesaria sobre la identidad patagónica que rompe con la linealidad de la literatura regional."
          <span className="block mt-4 text-right text-sm font-sans font-bold text-ediciones-accent not-italic">— Medio o Lector</span>
        </div>
        */}
      </section>

      <div className="text-center pt-8">
        <Link 
          href="/#catalogo" 
          className="text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-widest inline-block transition-colors"
        >
          ← Explorar el catálogo
        </Link>
      </div>
    </div>
  );
}