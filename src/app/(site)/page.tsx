import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={25}
              priority
            />
            <span className="text-xl font-bold">Boilerplate</span>
          </div>
          <Button variant="outline" size="sm">
            GitHub
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Next.js Boilerplate
            <span className="text-blue-600 dark:text-blue-400"> Moderno</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Un starter completo con las mejores herramientas para construir
            aplicaciones web full-stack. Autenticación, base de datos, UI
            components y más, todo configurado y listo para usar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8">
              Comenzar Ahora
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8">
              Ver Documentación
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Todo lo que necesitas incluido
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Las mejores herramientas del ecosistema, pre-configuradas y
            optimizadas para tu productividad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Next.js Feature */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center mb-4">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Next.js 15</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Framework React con App Router, Server Components y las últimas
              optimizaciones de rendimiento.
            </p>
          </div>

          {/* Better Auth Feature */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Better Auth</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Autenticación moderna y segura con múltiples proveedores, sessions
              y gestión de usuarios completa.
            </p>
          </div>

          {/* Prisma Feature */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Prisma ORM</h3>
            <p className="text-gray-600 dark:text-gray-300">
              ORM type-safe con migraciones, Prisma Studio y soporte para
              múltiples bases de datos.
            </p>
          </div>

          {/* UI Feature */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">shadcn/ui + Tailwind</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Componentes hermosos y accesibles con Tailwind CSS para un
              desarrollo UI rápido y consistente.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stack Tecnológico
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Las tecnologías más modernas y confiables del ecosistema
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Next.js 15 con App Router</li>
                <li>• React Server Components</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• shadcn/ui Components</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Next.js API Routes</li>
                <li>• Better Auth</li>
                <li>• Prisma ORM</li>
                <li>• Database agnostic</li>
                <li>• Server Actions</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Herramientas</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• ESLint + Prettier</li>
                <li>• Bun package manager</li>
                <li>• Prisma Studio</li>
                <li>• Dark mode support</li>
                <li>• Responsive design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Comienza en segundos
          </h2>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-8 text-left">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-gray-400 text-sm">Terminal</span>
            </div>
            <code className="text-green-400 font-mono">
              <div className="mb-2">
                $ git clone https://github.com/tu-usuario/nextjs-boilerplate.git
              </div>
              <div className="mb-2">$ cd nextjs-boilerplate</div>
              <div className="mb-2">$ bun install</div>
              <div className="mb-2">$ bun dev</div>
            </code>
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            ¡Y ya tienes una aplicación full-stack corriendo con autenticación,
            base de datos y UI profesional!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para empezar tu próximo proyecto?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ahorra semanas de configuración y enfócate en lo que realmente
            importa: construir tu producto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 text-base px-8"
            >
              Descargar Boilerplate
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 text-base px-8"
            >
              Ver en GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                className="invert"
                src="/next.svg"
                alt="Next.js logo"
                width={100}
                height={20}
              />
              <span className="text-lg font-bold">Boilerplate</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Documentación
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Ejemplos
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Next.js Boilerplate. Construido con ❤️ para
              desarrolladores.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
