"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function LenisScrollReset() {
    const pathname = usePathname();
    const lenis = useLenis();
    const previousPath = useRef(pathname);

    useEffect(() => {
        if (previousPath.current === pathname) return;
        previousPath.current = pathname;
        lenis?.scrollTo(0, { immediate: true, force: true });
    }, [pathname, lenis]);

    return null;
}
