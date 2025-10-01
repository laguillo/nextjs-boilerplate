'use client';

import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  showToggle?: boolean;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, showToggle = true, disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = React.useCallback(() => {
      setShowPassword((prev) => !prev);
    }, []);

    // Determinar si el botón de toggle debe estar deshabilitado
    const isToggleDisabled = React.useMemo(() => {
      return disabled || !props.value || props.value === '';
    }, [disabled, props.value]);

    return (
      <div className='relative'>
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn(
            'hide-password-toggle',
            showToggle && 'pr-10',
            className
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {showToggle && (
          <Button
            type='button'
            variant='ghost'
            size='sm'
            className='absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent'
            onClick={togglePasswordVisibility}
            disabled={isToggleDisabled}
            aria-label={
              showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
            }
            tabIndex={-1}
          >
            {showPassword && !isToggleDisabled ? (
              <EyeOff
                className='text-muted-foreground h-4 w-4'
                aria-hidden='true'
              />
            ) : (
              <Eye
                className='text-muted-foreground h-4 w-4'
                aria-hidden='true'
              />
            )}
            <span className='sr-only'>
              {showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            </span>
          </Button>
        )}

        {/* Oculta los toggles de contraseña nativos del navegador */}
        <style jsx>{`
          .hide-password-toggle::-ms-reveal,
          .hide-password-toggle::-ms-clear {
            visibility: hidden;
            pointer-events: none;
            display: none;
          }
          .hide-password-toggle::-webkit-credentials-auto-fill-button,
          .hide-password-toggle::-webkit-contacts-auto-fill-button {
            visibility: hidden;
            pointer-events: none;
            position: absolute;
            right: 0;
          }
        `}</style>
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
