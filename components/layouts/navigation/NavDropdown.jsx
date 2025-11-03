'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronDown from '@/public/icons/chevron-down.svg';
import { fadeIn } from '@/utils/motionVariants';

export default function NavDropdown({ title, items }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative flex items-center h-full "
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center gap-x-1 hover:text-red-600 transition-all duration-300 cursor-pointer">
                <span className="font-medium">{title}</span>
                <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        variants={fadeIn}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        className="absolute left-0 top-6 mt-3 bg-white border border-gray-200 rounded-xl shadow-lg z-50 w-[220px] p-2"
                    >
                        {items?.map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={item.href}
                                    className="block px-4 py-2 text-gray-700 hover:text-red-500 transition-all"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
