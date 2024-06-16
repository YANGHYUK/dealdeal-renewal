import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';



const buttonVariants = cva(
  'cursor-pointer inline-flex items-center w-fit gap-4 justify-center whitespace-nowrap transition-colors disabled:pointer-events-none disabled:text-grey3 disabled:bg-grey2 px-40 py-8',
  {
    variants: {
      variant: {
        primary: 'text-white',
        secondary:
          'text-navy bg-white/[.08]',
      },
      size: {
        "p-large": 'px-40 py-8 w-303 h-52',
        "s-large": 'px-32 py-10 w-186 h-48',
        "s-small": 'px-32 py-10 w-184 h-44',
      },
    },
    compoundVariants: [
      {
        size: 'p-large',
        className: 'px-20 py-12',
      },
      {
        size: 's-large',
        className: 'px-24 py-12',
      },
      {
        size: 's-small',
        className: 'px-16 py-8',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'p-large',
    },
  },
);

interface ButtonVariantProps extends VariantProps<typeof buttonVariants> {}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size,  asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size,  className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps, ButtonVariantProps };
