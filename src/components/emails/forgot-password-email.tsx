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

interface PasswordResetEmailProps {
  userName: string;
  resetUrl: string;
  requestTime: string;
}

const ForgotPasswordEmail = ({
  userName,
  resetUrl,
  requestTime
}: PasswordResetEmailProps) => {
  return (
    <Html lang='es' dir='ltr'>
      <Tailwind>
        <Head />
        <Body className='bg-gray-100 py-[40px] font-sans'>
          <Container className='mx-auto max-w-[600px] rounded-[8px] bg-white p-[40px] shadow-sm'>
            {/* Header */}
            <Section className='mb-[32px] text-center'>
              <Text className='m-0 text-[24px] font-bold text-gray-900'>
                Restablecer su contraseña
              </Text>
            </Section>

            {/* Main Content */}
            <Section className='mb-[32px]'>
              <Text className='mb-[16px] text-[16px] leading-[24px] text-gray-700'>
                Hi {userName},
              </Text>
              <Text className='mb-[16px] text-[16px] leading-[24px] text-gray-700'>
                Hemos recibido una solicitud para restablecer su contraseña{' '}
                {requestTime}. Si usted hizo esta solicitud, haga clic en el
                botón de abajo para crear una nueva contraseña.
              </Text>
              <Text className='mb-[24px] text-[16px] leading-[24px] text-gray-700'>
                Este enlace para restablecer la contraseña expirará en 1 hora
                por su seguridad.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className='mb-[32px] text-center'>
              <Button
                href={resetUrl}
                className='box-border rounded-[6px] bg-red-600 px-[32px] py-[12px] text-[16px] font-semibold text-white no-underline hover:bg-red-700'
              >
                Restablecer contraseña
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className='mb-[32px]'>
              <Text className='mb-[8px] text-[14px] leading-[20px] text-gray-600'>
                Si el botón no funciona, puede copiar y pegar este enlace en su
                navegador:
              </Text>
              <Text className='text-[14px] break-all text-blue-600'>
                {resetUrl}
              </Text>
            </Section>

            <Hr className='my-[24px] border-gray-200' />

            {/* Security Notice */}
            <Section className='mb-[24px]'>
              <Text className='mb-[16px] text-[14px] leading-[20px] text-gray-600'>
                <strong>Aviso de seguridad:</strong>
              </Text>
              <Text className='mb-[12px] text-[14px] leading-[20px] text-gray-600'>
                • Si usted no solicitó un restablecimiento de contraseña, ignore
                este correo electrónico. Su contraseña permanecerá sin cambios.
              </Text>
              <Text className='mb-[12px] text-[14px] leading-[20px] text-gray-600'>
                • Por su seguridad, este enlace solo puede usarse una vez y
                expira en 1 hora.
              </Text>
              <Text className='mb-[12px] text-[14px] leading-[20px] text-gray-600'>
                • Si continúa recibiendo estos correos electrónicos, por favor
                contacte a nuestro equipo de soporte de inmediato.
              </Text>
            </Section>

            {/* Help Section */}
            <Section className='mb-[24px] rounded-[6px] bg-gray-50 p-[20px]'>
              <Text className='mb-[8px] text-[14px] leading-[20px] font-semibold text-gray-700'>
                ¿Necesita ayuda?
              </Text>
              <Text className='m-0 text-[14px] leading-[20px] text-gray-600'>
                Si tiene problemas con su restablecimiento de contraseña,
                comuníquese con nuestro equipo de soporte en
                support@yourcompany.com o visite nuestro centro de ayuda.
              </Text>
            </Section>

            {/* Footer */}
            <Section className='border-t border-gray-200 pt-[24px]'>
              <Text className='m-0 mb-[8px] text-[12px] leading-[16px] text-gray-500'>
                Este correo electrónico fue enviado por `$
                {process.env.EMAIL_SENDER_NAME}`
              </Text>
              <Text className='m-0 mb-[8px] text-[12px] leading-[16px] text-gray-500'>
                123 Business Street, Suite 100, City, State 12345
              </Text>
              <Text className='m-0 text-[12px] leading-[16px] text-gray-500'>
                © {new Date().getFullYear()} {process.env.EMAIL_SENDER_NAME}.
                Todos los derechos reservados.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ForgotPasswordEmail;
