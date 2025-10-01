import { Button } from '@/components/ui/button';
import { SITE_NAME } from '@/constants/data';
import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'>
      {/* Header */}
      <header className='container mx-auto px-6 py-6'>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Image
              className='dark:invert'
              src='/next.svg'
              alt='Next.js logo'
              width={120}
              height={25}
              priority
            />
            <span className='text-xl font-bold'>{SITE_NAME}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Button size={'icon'} variant='outline'>
              <Github size={20} />
            </Button>
            <Button variant='outline'>
              <Link href='/dashboard'>Ir al Dashboard</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='container mx-auto px-6 py-20 text-center'>
        <div className='mx-auto max-w-4xl'>
          <h1 className='mb-6 text-5xl font-bold tracking-tight md:text-6xl'>
            Next.js Boilerplate
            <span className='text-blue-600 dark:text-blue-400'> Moderno</span>
          </h1>
          <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300'>
            Un starter completo con las mejores herramientas para construir
            aplicaciones web full-stack. Autenticación, base de datos, UI
            components y más, todo configurado y listo para usar.
          </p>
          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Button size='lg' className='px-8 text-base'>
              Comenzar Ahora
            </Button>
            <Button variant='outline' size='lg' className='px-8 text-base'>
              Ver Documentación
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='container mx-auto px-6 py-20'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
            Todo lo que necesitas incluido
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
            Las mejores herramientas del ecosistema, pre-configuradas y
            optimizadas para tu productividad
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Next.js Feature */}
          <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black dark:bg-white'>
              <Image
                className='dark:invert'
                src='/next.svg'
                alt='Next.js'
                width={24}
                height={24}
              />
            </div>
            <h3 className='mb-2 text-xl font-semibold'>Next.js 15</h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Framework React con App Router, Server Components y las últimas
              optimizaciones de rendimiento.
            </p>
          </div>

          {/* Better Auth Feature */}
          <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500'>
              <svg
                className='h-6 w-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-semibold'>Better Auth</h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Autenticación moderna y segura con múltiples proveedores, sessions
              y gestión de usuarios completa.
            </p>
          </div>

          {/* Prisma Feature */}
          <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600'>
              <svg
                className='h-6 w-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-semibold'>Prisma ORM</h3>
            <p className='text-gray-600 dark:text-gray-300'>
              ORM type-safe con migraciones, Prisma Studio y soporte para
              múltiples bases de datos.
            </p>
          </div>

          {/* UI Feature */}
          <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600'>
              <svg
                className='h-6 w-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-semibold'>shadcn/ui + Tailwind</h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Componentes hermosos y accesibles con Tailwind CSS para un
              desarrollo UI rápido y consistente.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className='bg-white py-20 dark:bg-gray-800'>
        <div className='container mx-auto px-6'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
              Stack Tecnológico
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300'>
              Las tecnologías más modernas y confiables del ecosistema
            </p>
          </div>

          <div className='mx-auto grid max-w-4xl gap-8 md:grid-cols-3'>
            <div className='text-center'>
              <h3 className='mb-4 text-xl font-semibold'>Frontend</h3>
              <ul className='space-y-2 text-gray-600 dark:text-gray-300'>
                <li>• Next.js 15 con App Router</li>
                <li>• React Server Components</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• shadcn/ui Components</li>
              </ul>
            </div>

            <div className='text-center'>
              <h3 className='mb-4 text-xl font-semibold'>Backend</h3>
              <ul className='space-y-2 text-gray-600 dark:text-gray-300'>
                <li>• Next.js API Routes</li>
                <li>• Better Auth</li>
                <li>• Prisma ORM</li>
                <li>• Database agnostic</li>
                <li>• Server Actions</li>
              </ul>
            </div>

            <div className='text-center'>
              <h3 className='mb-4 text-xl font-semibold'>Herramientas</h3>
              <ul className='space-y-2 text-gray-600 dark:text-gray-300'>
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
      <section className='container mx-auto px-6 py-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='mb-8 text-3xl font-bold md:text-4xl'>
            Comienza en segundos
          </h2>
          <div className='rounded-lg bg-gray-900 p-8 text-left dark:bg-gray-950'>
            <div className='mb-4 flex items-center'>
              <div className='flex space-x-2'>
                <div className='h-3 w-3 rounded-full bg-red-500'></div>
                <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                <div className='h-3 w-3 rounded-full bg-green-500'></div>
              </div>
              <span className='ml-4 text-sm text-gray-400'>Terminal</span>
            </div>
            <code className='font-mono text-green-400'>
              <div className='mb-2'>
                $ git clone https://github.com/tu-usuario/nextjs-boilerplate.git
              </div>
              <div className='mb-2'>$ cd nextjs-boilerplate</div>
              <div className='mb-2'>$ bun install</div>
              <div className='mb-2'>$ bun dev</div>
            </code>
          </div>
          <p className='mt-6 text-gray-600 dark:text-gray-300'>
            ¡Y ya tienes una aplicación full-stack corriendo con autenticación,
            base de datos y UI profesional!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-600 py-20'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
            ¿Listo para empezar tu próximo proyecto?
          </h2>
          <p className='mx-auto mb-8 max-w-2xl text-xl text-blue-100'>
            Ahorra semanas de configuración y enfócate en lo que realmente
            importa: construir tu producto.
          </p>
          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Button
              size='lg'
              className='bg-white px-8 text-base text-gray-900 hover:bg-gray-100'
            >
              Descargar Boilerplate
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-white px-8 text-base text-white hover:bg-white hover:text-gray-900'
            >
              Ver en GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 py-12 text-white dark:bg-gray-950'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <div className='mb-4 flex items-center space-x-2 md:mb-0'>
              <Image
                className='invert'
                src='/next.svg'
                alt='Next.js logo'
                width={100}
                height={20}
              />
              <span className='text-lg font-bold'>Boilerplate</span>
            </div>
            <div className='flex space-x-6'>
              <a
                href='#'
                className='text-gray-400 transition-colors hover:text-white'
              >
                Documentación
              </a>
              <a
                href='#'
                className='text-gray-400 transition-colors hover:text-white'
              >
                GitHub
              </a>
              <a
                href='#'
                className='text-gray-400 transition-colors hover:text-white'
              >
                Ejemplos
              </a>
            </div>
          </div>
          <div className='mt-8 border-t border-gray-800 pt-8 text-center text-gray-400'>
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
