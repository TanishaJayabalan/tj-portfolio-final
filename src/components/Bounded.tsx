import React from "react";
import clsx from "clsx";

type BoundedProps<T extends React.ElementType> = {
    as?: T;
    className?: string;
    children?: React.ReactNode; // Allow children explicitly
} & React.ComponentPropsWithoutRef<T>; // Add props specific to the `as` component

const Bounded = React.forwardRef<
    HTMLElement,
    BoundedProps<any> // Make the props generic
>(({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
        <Comp
            ref={ref}
            className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
            {...restProps}
        >
            <div className="mx-auto w-full max-w-7xl">{children}</div>
        </Comp>
    );
});

Bounded.displayName = "Bounded";
export default Bounded;
