'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronDown from '@/public/icons/chevron-down.svg';
import { fadeIn } from '@/utils/motionVariants';

export default function NavMegaDropdown({ title, columns }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative flex items-center h-full"
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
                    <motion.div
                        variants={fadeIn}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        className="absolute left-0 top-6 mt-3 bg-white border border-gray-200 rounded-xl shadow-lg z-3 w-[700px] p-6"
                    >
                        <div className="grid grid-cols-3 gap-8">
                            {columns?.map((col, i) => (
                                <div key={i}>
                                    <h3 className="font-semibold text-gray-800 mb-3">{col.title}</h3>
                                    <ul className="space-y-2">
                                        {col.links.map((link, j) => (
                                            <li key={j}>
                                                <Link
                                                    href={link.href}
                                                    className="text-gray-600 hover:text-red-500 transition-all"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

