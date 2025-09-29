'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

// Iniciar sesión
export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password
      },
      headers: await headers() // Agregar headers para Server Actions
    });

    return {
      success: true,
      message: 'Bienvenido de nuevo.'
    };
  } catch (error) {
    const e = error as Error;

    if (e.message.includes('Invalid email or password')) {
      return {
        success: false,
        message: 'Usuario o contraseña incorrectos.'
      };
    }

    if (e.message.includes('User not found')) {
      return {
        success: false,
        message: 'No se encontró el usuario.'
      };
    }

    if (e.message.includes('Email not verified')) {
      return {
        success: false,
        message: 'Email no verificado.'
      };
    }

    return {
      success: false,
      message:
        e.message || 'Ha ocurrido un error, por favor inténtalo de nuevo.'
    };
  }
};

// Registro de usuario
export const signUp = async (values: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name: `${values.firstName} ${values.lastName}`,
        email: values.email,
        password: values.password
      },
      headers: await headers() // Agregar headers para Server Actions
    });

    return {
      success: true,
      message: 'Registro exitoso.'
    };
  } catch (error) {
    const e = error as Error;

    if (e.message.includes('Email already exists')) {
      return {
        success: false,
        message: 'El correo electrónico ya está en uso.'
      };
    }

    if (e.message.includes('Invalid email')) {
      return {
        success: false,
        message: 'El correo electrónico no es válido.'
      };
    }

    if (e.message.includes('Weak password')) {
      return {
        success: false,
        message: 'La contraseña es demasiado débil.'
      };
    }

    if (e.message.includes('Password is required')) {
      return {
        success: false,
        message: 'La contraseña es obligatoria.'
      };
    }

    return {
      success: false,
      message:
        e.message || 'Ha ocurrido un error, por favor inténtalo de nuevo.'
    };
  }
};

// Olvidé mi contraseña
export const forgetPassword = async (email: string) => {
  try {
    await auth.api.forgetPassword({
      body: {
        email
      },
      headers: await headers()
    });

    return {
      success: true,
      message:
        'Si este correo existe en nuestro sistema, recibirás un enlace de restablecimiento.'
    };
  } catch {
    return {
      success: true,
      message:
        'Si este correo existe en nuestro sistema, recibirás un enlace de restablecimiento.'
    };
  }
};

// Restablecer contraseña
export const resetPassword = async (token: string, newPassword: string) => {
  try {
    await auth.api.resetPassword({
      body: {
        token: token || '',
        newPassword
      },
      headers: await headers()
    });

    return {
      success: true,
      message: 'Contraseña restablecida con éxito.'
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'Ha ocurrido un error, por favor inténtalo de nuevo.'
    };
  }
};

export async function changePassword(
  currentPassword: string,
  newPassword: string
) {
  try {
    await auth.api.changePassword({
      body: {
        newPassword,
        currentPassword,
        revokeOtherSessions: true
      },
      // This endpoint requires session cookies.
      headers: await headers()
    });

    return {
      success: true,
      message: 'Contraseña cambiada con éxito.'
    };
  } catch (error) {
    const e = error as Error;

    if (e.message.includes('Current password is incorrect')) {
      return {
        success: false,
        message: 'La contraseña actual es incorrecta.'
      };
    }

    if (e.message.includes('Weak password')) {
      return {
        success: false,
        message: 'La nueva contraseña es demasiado débil.'
      };
    }

    return {
      success: false,
      message:
        e.message || 'Ha ocurrido un error, por favor inténtalo de nuevo.'
    };
  }
}

// Obtener usuario actual - Usar auth.api.getSession para Server Actions
export async function getCurrentUser() {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session) {
      return {
        success: false,
        message: 'No hay sesión activa.',
        user: null
      };
    }

    return {
      success: true,
      message: 'Sesión obtenida con éxito.',
      user: session.user,
      session: session
    };
  } catch (error) {
    console.error('Error al obtener usuario actual:', error);
    return {
      success: false,
      message: 'Error al obtener la sesión.',
      user: null
    };
  }
}

// Cerrar sesión
export async function signOut() {
  try {
    await auth.api.signOut({
      headers: await headers()
    });

    return {
      success: true,
      message: 'Sesión cerrada con éxito.'
    };
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    return {
      success: false,
      message: 'Error al cerrar la sesión.'
    };
  }
}

// Verificar si el usuario está autenticado
export async function isAuthenticated() {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    return !!session;
  } catch {
    return false;
  }
}
