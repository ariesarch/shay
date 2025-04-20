// import { cva, type VariantProps } from "class-variance-authority";
// import { twMerge } from "tailwind-merge";
// import clsx, { ClassValue } from "clsx";

// export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

// export const sButtonStyles = cva(
//     "inline-flex items-center justify-center font-medium shadow-sm border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
//     {
//         variants: {
//             variant: {
//                 solid: "",
//                 outline: "bg-transparent border",
//                 ghost: "bg-transparent border-transparent",
//             },
//             size: {
//                 sm: "px-3 py-1.5 text-sm rounded",
//                 md: "px-4 py-2 text-base rounded-md",
//                 lg: "px-5 py-3 text-lg rounded-lg",
//             },
//             colorschema: {
//                 primary: "bg-skin-fill text-skin-base hover:bg-skin-button-inverted",
//                 secondary: "bg-secondary text-secondary-content hover:bg-secondary",
//                 accent: "bg-accent text-accent-content hover:bg-accent",
//                 neutral: "bg-neutral text-neutral-content hover:bg-neutral",
//             },
//         },
//         compoundVariants: [
//             {
//                 variant: "outline",
//                 colorschema: "primary",
//                 className:
//                     "text-skin-base border-transparent hover:bg-skin-button-accent hover:text-skin-base",
//             },
//             {
//                 variant: "outline",
//                 colorschema: "secondary",
//                 className:
//                     "text-secondary border-secondary hover:bg-secondary/10 hover:text-secondary",
//             },
//             {
//                 variant: "ghost",
//                 colorschema: "primary",
//                 className:
//                     "text-skin-base hover:bg-skin-button-accent",
//             },
//         ],
//         defaultVariants: {
//             variant: "solid",
//             size: "md",
//             colorschema: "primary",
//         },
//     }
// );

// export interface SButtonOptions extends VariantProps<typeof sButtonStyles> {
//     class?: string;
//     onClick?: () => void;
// }

// export function getSButtonProps({
//     class: classOverride = "",
//     variant,
//     size,
//     colorschema,
//     onClick,
// }: SButtonOptions) {
//     return {
//         class: cn(sButtonStyles({ variant, size, colorschema, className: classOverride })),
//         onClick,
//     };
// }

// export interface SButtonOptions {
//     class?: string;
//     onClick?: () => void;
// }

// export function getSButtonProps({ class: classOverride = '', onClick }: SButtonOptions) {
//     return {
//         // class: ` ${classOverride} px-4 py-2 bg-blue-500 text-white rounded`.trim(),
//         class: ` ${classOverride} text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8`.trim(),
//         onClick,
//     };
// }

// packages/core/src/components/atoms/shay-button.ts
// export type SButtonProps = {
//     text: string;
//     onClick?: () => void;
// };

// export function getSButtonProps(props: SButtonProps) {
//     return {
//         className: 'px-4 py-2 bg-blue-400 text-white rounded',
//         ...props,
//     };
// }
// You can also rename the file from shay-button.ts → sbutton.ts
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

// Merge helper
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export const sButtonStyles = cva(
    "inline-flex items-center justify-center font-medium border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
        variants: {
            variant: {
                solid: "", // let colorschema handle it
                outline: "bg-transparent border",
                ghost: "bg-transparent border-transparent",
            },
            size: {
                sm: "px-3 py-1.5 text-sm rounded",
                md: "px-4 py-2 text-base rounded-md",
                lg: "px-5 py-3 text-lg rounded-lg",
            },
            colorschema: {
                primary:
                    "bg-skin-primary bg-opacity-60 text-skin-on-primary hover:bg-skin-primary/90 focus:ring-skin-primary",
                secondary:
                    "bg-skin-secondary text-skin-on-secondary hover:bg-skin-secondary/90 focus:ring-skin-secondary",
                accent:
                    "bg-skin-accent text-skin-on-accent hover:bg-skin-accent/90 focus:ring-skin-accent",
                neutral:
                    "bg-skin-neutral text-skin-on-neutral hover:bg-skin-neutral/90 focus:ring-skin-neutral",
                error:
                    "bg-skin-error text-skin-on-error hover:bg-skin-error/90 focus:ring-skin-error",
                success:
                    "bg-skin-success text-skin-on-success hover:bg-skin-success/90 focus:ring-skin-success",
                warning:
                    "bg-skin-warning text-skin-on-warning hover:bg-skin-warning/90 focus:ring-skin-warning",
                info:
                    "bg-skin-info text-skin-on-info hover:bg-skin-info/90 focus:ring-skin-info",
            },
        },
        compoundVariants: [
            // OUTLINE
            {
                variant: "outline",
                colorschema: "primary",
                className:
                    "text-skin-primary border-skin-primary hover:bg-skin-primary/10 focus:ring-skin-primary",
            },
            {
                variant: "outline",
                colorschema: "secondary",
                className:
                    "text-skin-secondary border-skin-secondary hover:bg-skin-secondary/10 focus:ring-skin-secondary",
            },
            // More outline variants...
        ],
        defaultVariants: {
            variant: "solid",
            size: "md",
            colorschema: "primary",
        },
    }
);

export interface SButtonOptions extends VariantProps<typeof sButtonStyles> {
    class?: string;
    onClick?: () => void;
}

export function getSButtonProps({
    class: classOverride = "",
    variant,
    size,
    colorschema,
    onClick,
}: SButtonOptions) {
    return {
        class: sButtonStyles({ variant, size, colorschema, className: classOverride }),
        onClick,
    };
}
