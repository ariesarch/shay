import React from 'react';
import { getAppProps, SAppOptions } from '@shay/core';

type SAppProps = React.PropsWithChildren<
    Omit<SAppOptions, 'class'> & { className?: string }
>;

export const SApp = ({ children, className, ...rest }: SAppProps) => {
    const props = getAppProps({ ...rest, class: className });

    return (
        <div className={props.class}>
            {children}
        </div>
    );
};