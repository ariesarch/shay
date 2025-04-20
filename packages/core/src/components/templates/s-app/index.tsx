export interface SAppOptions {
    class?: string;
}

export function getAppProps({ class: classOverride = '' }: SAppOptions) {
    return {
        class: `bg-primary ${classOverride}`.trim(),
    };
}