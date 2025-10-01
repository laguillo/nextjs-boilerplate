# Next.js Boilerplate

A modern, production-ready Next.js boilerplate with authentication, dashboard, and email functionality built with the latest technologies.

## ✨ Features

- 🚀 **Next.js 15** with App Router and Turbopack
- 🔐 **Authentication System** powered by Better Auth
  - Email/Password authentication
  - Google OAuth integration
  - Email verification
  - Password reset functionality
  - Admin and organization plugins
- 💾 **Database** with Prisma ORM (SQLite by default)
- 🎨 **UI Components** built with:
  - Radix UI primitives
  - Tailwind CSS v4
  - shadcn/ui components
  - Dark mode support with next-themes
- 📊 **Dashboard** with interactive charts (Recharts)
- 📧 **Email Templates** with React Email and Resend
- 📝 **Form Validation** with React Hook Form + Zod
- 🎯 **TypeScript** for type safety
- 🎨 **ESLint & Prettier** for code quality
- 🖱️ **Drag and Drop** with dnd-kit

## 🛠️ Tech Stack

### Core

- **Framework:** Next.js 15
- **React:** 19
- **TypeScript:** 5.9.3
- **Styling:** Tailwind CSS 4

### Authentication & Database

- **Auth:** Better Auth
- **ORM:** Prisma
- **Database:** SQLite (configurable)

### UI Components

- **Component Library:** Radix UI
- **Icons:** Lucide React
- **Charts:** Recharts
- **Notifications:** Sonner
- **Themes:** next-themes

### Email

- **Service:** Resend
- **Templates:** React Email

## 📋 Prerequisites

- Node.js 18+ or Bun
- SQLite (or your preferred database)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd nextjs-boilerplate
```

### 2. Install dependencies

```bash
bun install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="file:./dev.db"

# Better Auth
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email (Resend)
RESEND_API_KEY="your-resend-api-key"
EMAIL_SENDER_NAME="Your App Name"
EMAIL_SENDER_ADDRESS="noreply@yourdomain.com"
```

### 4. Set up the database

```bash
bunx prisma generate
bunx prisma db push
```

### 5. Run the development server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
nextjs-boilerplate/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
├── src/
│   ├── app/                   # App router pages
│   │   ├── (auth)/           # Authentication pages
│   │   ├── (site)/           # Public pages
│   │   ├── dashboard/        # Dashboard pages
│   │   └── api/              # API routes
│   ├── components/           # React components
│   │   ├── ui/              # UI components (shadcn)
│   │   ├── dashboard/       # Dashboard components
│   │   ├── emails/          # Email templates
│   │   └── providers/       # Context providers
│   ├── lib/                 # Utility functions
│   │   ├── auth.ts          # Better Auth configuration
│   │   ├── prisma.ts        # Prisma client
│   │   └── resend.ts        # Resend client
│   ├── hooks/               # Custom React hooks
│   ├── constants/           # Constants and configs
│   └── server/              # Server-side utilities
└── ...config files
```

## 🔑 Authentication

The boilerplate includes a complete authentication system with:

- **Sign Up/Sign In** pages with form validation
- **Email verification** with custom templates
- **Password reset** functionality
- **Google OAuth** integration
- **Protected routes** with middleware
- **Admin** and **Organization** plugins ready to use

### Authentication Routes

- `/sign-in` - Sign in page
- `/sign-up` - Registration page
- `/api/auth/*` - Auth API endpoints

## 🎨 UI Components

This boilerplate includes a comprehensive set of pre-built UI components:

- Forms (Input, Select, Checkbox, etc.)
- Navigation (Sidebar, Breadcrumb, Tabs)
- Feedback (Toasts, Tooltips, Badges)
- Data Display (Tables, Cards, Charts)
- Overlays (Dialogs, Drawers, Dropdown Menus)
- And more...

All components are fully typed and customizable.

## 📊 Dashboard

The dashboard includes:

- Interactive area charts with multiple data series
- Data tables with sorting and pagination
- Card sections with statistics
- Responsive sidebar navigation
- User profile menu

## 📧 Email Templates

Email templates are built with React Email and include:

- Email verification template
- Password reset template
- Responsive design
- Customizable branding

## 🧪 Available Scripts

```bash
# Development
bun dev              # Start dev server with Turbopack

# Build
bun run build        # Build for production

# Production
bun start            # Start production server

# Code Quality
bun run lint         # Run ESLint

# Database
bunx prisma studio   # Open Prisma Studio
bunx prisma generate # Generate Prisma Client
bunx prisma db push  # Push schema changes
```

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your environment variables
4. Deploy!

### Other Platforms

This boilerplate can be deployed to any platform that supports Next.js:

- AWS
- Google Cloud
- DigitalOcean
- Railway
- And more...

## 🔧 Configuration

### Database

By default, this project uses SQLite. To use another database:

1. Update the `provider` in `prisma/schema.prisma`
2. Update the `DATABASE_URL` in `.env`
3. Update the adapter config in `src/lib/auth.ts`
4. Run `bunx prisma generate` and `bunx prisma db push`

### Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts` (auto-generated)
- Theme provider: `src/components/providers/theme-provider.tsx`

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Better Auth Documentation](https://better-auth.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
