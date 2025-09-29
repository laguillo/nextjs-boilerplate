import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Tailwind
} from '@react-email/components';
import Link from 'next/link';
import { SITE_NAME } from '@/constants/data';

interface VerifyEmailProps {
  userName: string;
  verifyUrl: string;
}

const VerificationEmail = (props: VerifyEmailProps) => {
  const { userName, verifyUrl } = props;
  return (
    <Html lang='es' dir='ltr'>
      <Tailwind>
        <Head />
        <Body className='bg-gray-100 py-[40px] font-sans'>
          <Container className='mx-auto max-w-[600px] rounded-[8px] bg-white p-[32px]'>
            <Section>
              <Text className='mt-0 mb-[16px] text-[24px] font-bold text-gray-900'>
                Verifica tu correo electrónico
              </Text>

              <Text className='mt-0 mb-[24px] text-[16px] leading-[24px] text-gray-700'>
                Gracias {userName} por registrarte! Para completar tu registro y
                asegurar tu cuenta, por favor verifica tu dirección de correo
                electrónico haciendo clic en el botón de abajo.
              </Text>

              <Section className='mb-[32px] text-center'>
                <Button
                  href={verifyUrl}
                  className='box-border rounded-[6px] bg-blue-600 px-[32px] py-[12px] text-[16px] font-medium text-white no-underline'
                >
                  Verifica tu dirección de correo electrónico
                </Button>
              </Section>

              <Text className='mt-0 mb-[24px] text-[14px] leading-[20px] text-gray-600'>
                Si el botón no funciona, puedes copiar y pegar este enlace en tu
                navegador:
                <br />
                {verifyUrl}
              </Text>

              <Text className='mt-0 mb-[32px] text-[14px] leading-[20px] text-gray-600'>
                Este enlace de verificación expirará en 24 horas. Si no creaste
                una cuenta, puedes ignorar este correo electrónico.
              </Text>

              <Hr className='my-[24px] border-gray-200' />

              <Text className='m-0 text-[12px] leading-[16px] text-gray-500'>
                Saludos cordiales,
                <br />
                El equipo de {SITE_NAME}
              </Text>
            </Section>

            <Section className='mt-[32px] border-t border-gray-200 pt-[24px]'>
              <Text className='m-0 text-center text-[12px] leading-[16px] text-gray-400'>
                {SITE_NAME}
                <br />
                123 Business Street, Suite 100
                <br />
                City, State 12345
              </Text>

              <Text className='m-0 mt-[8px] text-center text-[12px] leading-[16px] text-gray-400'>
                <Link href='#' className='text-gray-400 underline'>
                  Cancelar suscripción
                </Link>{' '}
                | © {new Date().getFullYear()} {SITE_NAME}. Todos los derechos
                reservados.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;
