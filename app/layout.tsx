import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

// Optimización de tipografías nativas en Next.js
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: 'swap',
});

const merriweather = Merriweather({ 
  weight: ["300", "400", "700", "900"], 
  style: ["normal", "italic"],
  subsets: ["latin"], 
  variable: "--font-serif",
  display: 'swap',
});

// Metadatos con Open Graph para previsualización en WhatsApp y Redes Sociales
export const metadata: Metadata = {
  title: "Soberanía Editorial | Demián Agustín Testino",
  description: "Vidriera editorial oficial de Demián Agustín Testino. Obras literarias: Káukel, El Ente, Cubismo y Patria Grande.",
  openGraph: {
    title: "Soberanía Editorial | Demián A. Testino",
    description: "Sagas de identidad patagónica, crónicas sociales y narrativas cubistas.",
    url: "https://soberaniaeditorial.vercel.app", // Reemplaza esto con tu dominio final cuando lo tengas
    siteName: "Soberanía Editorial",
    images: [
      {
        url: "/Soberania-Editorial.png",
        width: 800,
        height: 800,
        alt: "Logo Soberanía Editorial",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappNumber = "5492804841846";

  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${merriweather.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-ediciones-dark text-ediciones-light font-sans selection:bg-ediciones-accent selection:text-black">
        <header className="border-b border-neutral-800/50 bg-black/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm shadow-neutral-900/50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-neutral-700 group-hover:border-ediciones-accent transition-colors duration-500">
                <Image src="/Soberania-Editorial.png" alt="Logo Soberanía Editorial" fill className="object-cover" />
              </div>
              <h1 className="text-xl font-bold tracking-widest uppercase hidden sm:block">
                Soberanía <span className="text-ediciones-accent">Editorial</span>
              </h1>
            </a>
            <nav className="flex gap-6 text-sm uppercase tracking-wider text-neutral-400 font-medium">
              <a href="/#catalogo" className="hover:text-white transition-colors duration-300">Catálogo</a>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola Demián, me comunico desde la web de Soberanía Editorial.")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-ediciones-accent transition-colors duration-300"
              >
                Contacto
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="border-t border-neutral-900 bg-[#050505] text-center py-12 text-neutral-600 text-sm flex flex-col items-center gap-3">
          <div className="relative w-8 h-8 overflow-hidden rounded-full grayscale opacity-50 mb-2">
            <Image src="/Soberania-Editorial.png" alt="Soberanía Editorial" fill className="object-cover" />
          </div>
          <p>© 2026 Demián Agustín Testino. Todos los derechos reservados.</p>
          <a href="mailto:edicionesdemiantestino@gmail.com" className="hover:text-ediciones-accent transition-colors duration-300">
            edicionesdemiantestino@gmail.com
          </a>
        </footer>
      </body>
    </html>
  );
}