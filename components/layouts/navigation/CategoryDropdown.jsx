'use client';

import { useState } from "react";
import Menu from "@/public/icons/menu-2.svg";
import ChevronDown from "@/public/icons/chevron-down.svg";
import { AnimatePresence , motion} from "framer-motion";
import { categoryDropdownAnimation } from "@/utils/motionVariants";
import Link from "next/link";

export default function CategoryDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const categories = [
        "Electronics",
        "Fashion",
        "Home & Kitchen",
        "Beauty & Health",
        "Sports",
        "Toys",
        "Cabinet Table",
        "Furniture", 
        "Headphones",
        "Leahther Watch",
        "Sunglasses"
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-white gap-x-4 flex items-center bg-primary px-5 py-2 rounded-tr-md rounded-tl-md cursor-pointer"
            >
                <Menu className="h-7 w-7 lg:h-6 md:w-6" />
                <span className="font-medium text-sm">SHOP BY CATEGORIES</span>
                <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={categoryDropdownAnimation}
                        initial='init'
                        animate='anim'
                        exit='init'
                        className="absolute top-18 left-0 w-[260px] bg-white rounded-md z-2 overflow-hidden shadow-xs">
                        <ul className="flex flex-col py-4">
                            {categories.map((item, i) => (
                                <li
                                    key={i}
                                    className="px-5 py-3 text-sm text-gray-700 hover:text-red-600 cursor-pointer transition-all"
                                >
                                <Link href="#">
                                    {item}
                                </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}