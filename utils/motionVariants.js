import { animate, color, easeInOut } from "framer-motion";

export const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
}

export const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.3 } },
}

export const defaultViewport = { once: true, margin: "-200px" };

export const hoverScale = {
    init: { scale: 1, transition: { type: 'tween', duration: 0.3, ease: "easeInOut" } },
    anim: { scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } }

}

export const textHover = {
    init: { scale: 1, color: '#4a5565', transition: { type: 'spring', duration: 0.3, ease: "easeInOut" } },
    anim: { scale: 1.1, color: '#E63946' }
}

export const sidebarFlyIn = {
    init: { x: -350, transition: { type: 'spring', duration: 0.3, ease: "easeInOut" } },
    anim: { x: 0 }
}

export const expandAccordion = {
    init: { maxHeight: 0, opacity: 0, transition: { duration: 0.6, ease: "easeInOut" }, },
    anim: { maxHeight: 500, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } }
}

export const categoryDropdownAnimation = {
    init: { maxHeight: 0, y: -20, transition: { duration: 0.6, ease: "easeInOut" }, },
    anim: { maxHeight: 700, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }

}