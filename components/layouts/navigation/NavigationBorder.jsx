"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function NavigationBorder() {
    const { scrollY } = useScroll();
    const [showBorder, setShowBorder] = useState(false);

    // فقط زمانی که از 150px رد می‌کنیم state تغییر می‌کنه (نه هر اسکرول)
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50 && !showBorder) {
            setShowBorder(true);
        } else if (latest <= 50 && showBorder) {
            setShowBorder(false);
        }
    });

    return (
        <>
            {showBorder && <hr className="fixed top-[90px] w-full border-t border-gray-300 z-3" />}
        </>
    );
}
