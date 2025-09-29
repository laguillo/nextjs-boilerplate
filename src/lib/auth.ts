import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { organization } from 'better-auth/plugins/organization';
import { nextCookies } from 'better-auth/next-js';
import { admin } from 'better-auth/plugins/admin';
import { prisma } from './prisma';
import { resend } from './resend';
import VerificationEmail from '@/components/emails/verification-email';
import ForgotPasswordEmail from '@/components/emails/forgot-password-email';

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
        to: [user.email],
        subject: 'Verifica tu dirección de correo electrónico',
        react: VerificationEmail({ userName: user.name, verifyUrl: url })
      });
    },
    sendOnSignUp: true
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }
  },
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      const rest = await resend.emails.send({
        from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
        to: [user.email],
        subject: 'Restablecer contraseña',
        react: ForgotPasswordEmail({
          userName: user.name,
          resetUrl: url,
          requestTime: new Date().toLocaleString()
        })
      });
      console.log('🚀 ~ rest:', rest);
    },
    requireEmailVerification: true
  },
  database: prismaAdapter(prisma, {
    provider: 'sqlite'
  }),
  plugins: [admin(), organization(), nextCookies()]
});
