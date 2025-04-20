// @shay/react/src/components/SButton.tsx
import * as React from "react";
import { getSButtonProps, SButtonOptions } from "@shay/core";

// Define types for the props
type SButtonProps = React.PropsWithChildren<
    Omit<SButtonOptions, "class"> & { className?: string }
>;

// ForwardRef component for SButton
export const SButton = React.forwardRef<HTMLButtonElement, SButtonProps>(
    ({ children, className, variant, size, colorschema, ...rest }, ref) => {
        // Pass the variant, size, colorschema, and className to getSButtonProps
        const props = getSButtonProps({
            ...rest,
            class: className,
            variant, // Ensure variant is passed here
            size, // Pass size if needed
            colorschema, // Pass colorschema if needed
        });

        return (
            <button ref={ref} className={props.class} onClick={props.onClick}>
                {children}
            </button>
        );
    }
);

SButton.displayName = "SButton"; // For DevTools

// For DevTools

// // @shay/react
// import React from 'react';
// import { getSButtonProps, SButtonOptions } from '@shay/core';

// type SButtonProps = React.PropsWithChildren<
//     Omit<SButtonOptions, 'class'> & { className?: string }
// >;

// export const SButton = ({ children, className, ...rest }: SButtonProps) => {
//     const props = getSButtonProps({ ...rest, class: className });

//     return (
//         <button className={props.class} onClick={props.onClick}>
//             {children}
//         </button>
//     );
// };
// import React from 'react';
// import { getSButtonProps, SButtonOptions } from '@shay/core';

// type SButtonProps = React.PropsWithChildren<SButtonOptions>;

// export const SButton = ({ children, ...options }: SButtonProps) => {
//     const props = getSButtonProps(options);
//     return (
//         <button {...props}>
//             {children}
//         </button>
//     );
// };
// packages/react/src/components/atoms/shay-button.tsx
// import React from 'react';
// import { SButtonProps, getSButtonProps } from '@shay/core';

// export const SButton = ({ text, onClick }: SButtonProps) => {
//     const props = getSButtonProps({ text, onClick });
//     return <button className={props.className} onClick={onClick}>{text}</button>;
// };
