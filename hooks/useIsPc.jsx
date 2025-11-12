import { useState, useEffect } from "react";

export function useIsPc(breakpoint = 1440) {
    const [isPc, setIsPc] = useState(false);

    useEffect(() => {
        const checkSize = () => setIsPc(window.innerWidth > breakpoint);
        checkSize();
        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, [breakpoint]);

    return isPc;
}
