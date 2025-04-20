// function withOpacity(variableName) {
//     return ({ opacityValue }) => {
//         if (opacityValue !== undefined) {
//             return `rgba(var(${variableName}), ${opacityValue})`
//         }
//         return `rgb(var(${variableName}))`
//     }
// }/** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         "./src/**/*.{html,js,ts,jsx,tsx}",
//         '../core/src/**/*.{js,ts,jsx,tsx}'
//     ],
//     theme: {
//         extend: {
//             textColor: {
//                 skin: {
//                     base: withOpacity('--color-text-base'),
//                     muted: withOpacity('--color-text-muted'),
//                     inverted: withOpacity('--color-text-inverted'),
//                 },
//             },
//             backgroundColor: {
//                 skin: {
//                     fill: withOpacity('--color-fill'),
//                     'button-accent': withOpacity('--color-button-accent'),
//                     'button-accent-hover': withOpacity('--color-button-accent-hover'),
//                     'button-muted': withOpacity('--color-button-muted'),
//                 },
//             },
//             gradientColorStops: {
//                 skin: {
//                     hue: withOpacity('--color-fill'),
//                 },
//             },
//         },
//     },
//     plugins: [],
// }

// // tailwind.config.js
// function withOpacity(variableName) {
//     return ({ opacityValue }) => {
//         if (opacityValue !== undefined) {
//             return `rgba(var(${variableName}), ${opacityValue})`;  // Use RGBA when opacity is set
//         }
//         return `rgb(var(${variableName}))`;  // Use RGB if no opacity value
//     };
// }

// module.exports = {
//     content: [
//             "./src/**/*.{html,js,ts,jsx,tsx}",
//             '../core/src/**/*.{js,ts,jsx,tsx}'
//         ],
//     theme: {
//         extend: {
//             textColor: {
//                 primary: withOpacity('--color-primary-content'),
//                 secondary: withOpacity('--color-secondary-content'),
//                 accent: withOpacity('--color-accent-content'),
//                 neutral: withOpacity('--color-neutral-content'),
//                 info: withOpacity('--color-info-content'),
//                 success: withOpacity('--color-success-content'),
//                 warning: withOpacity('--color-warning-content'),
//                 error: withOpacity('--color-error-content'),
//             },
//             backgroundColor: {
//                 primary: withOpacity('--color-primary'),
//                 secondary: withOpacity('--color-secondary'),
//                 accent: withOpacity('--color-accent'),
//                 neutral: withOpacity('--color-neutral'),
//                 info: withOpacity('--color-info'),
//                 success: withOpacity('--color-success'),
//                 warning: withOpacity('--color-warning'),
//                 error: withOpacity('--color-error'),
//             },
//             gradientColorStops: {
//                 primary: withOpacity('--color-primary'),
//                 secondary: withOpacity('--color-secondary'),
//                 accent: withOpacity('--color-accent'),
//                 neutral: withOpacity('--color-neutral'),
//                 info: withOpacity('--color-info'),
//                 success: withOpacity('--color-success'),
//                 warning: withOpacity('--color-warning'),
//                 error: withOpacity('--color-error'),
//             },
//         },
//     },
//     plugins: [],
// };

function withOpacity(variableName) {
    return ({ opacityValue }) => {
        console.log("vName", variableName)
        console.log("FK", opacityValue)
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`
        }
        return `rgb(var(${variableName}))`
    }
}

export default {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
        "../core/src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            textColor: {
                skin: {
                    primary: withOpacity('--color-primary'),
                    secondary: withOpacity('--color-secondary'),
                    error: withOpacity('--color-error'),
                    info: withOpacity('--color-info'),
                    success: withOpacity('--color-success'),
                    warning: withOpacity('--color-warning'),
                    onPrimary: withOpacity('--color-on-primary'),
                    onSecondary: withOpacity('--color-on-secondary'),
                    onError: withOpacity('--color-on-error'),
                    onInfo: withOpacity('--color-on-info'),
                    onSuccess: withOpacity('--color-on-success'),
                    onWarning: withOpacity('--color-on-warning'),
                },
            },
            backgroundColor: {
                skin: {
                    primary: withOpacity('--color-primary'),
                    secondary: withOpacity('--color-secondary'),
                    error: withOpacity('--color-error'),
                    info: withOpacity('--color-info'),
                    success: withOpacity('--color-success'),
                    warning: withOpacity('--color-warning'),
                    surface: withOpacity('--color-surface'),
                    background: withOpacity('--color-background'),
                },
            },
            borderColor: {
                skin: {
                    primary: withOpacity('--color-primary'),
                    secondary: withOpacity('--color-secondary'),
                    error: withOpacity('--color-error'),
                    info: withOpacity('--color-info'),
                    success: withOpacity('--color-success'),
                    warning: withOpacity('--color-warning'),
                },
            },
            ringColor: {
                skin: {
                    primary: withOpacity('--color-primary'),
                    secondary: withOpacity('--color-secondary'),
                    error: withOpacity('--color-error'),
                    info: withOpacity('--color-info'),
                    success: withOpacity('--color-success'),
                    warning: withOpacity('--color-warning'),
                },
            },
            gradientColorStops: {
                skin: {
                    hue: withOpacity('--color-primary'),
                },
            },
        },
    },
    plugins: [],
}
