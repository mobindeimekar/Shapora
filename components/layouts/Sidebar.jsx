'use client'


import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import X from '../../public/icons/x.svg'
import Chevron from '../../public/icons/chevron-down.svg'
import { expandAccordion, sidebarFlyIn } from "@/utils/motionVariants";
import { sidebarActions } from "@/redux/sidebarSlice";


export default function Sidebar() {

    const [dropdown, setDropdown] = useState(null)

    const isSidebar = useSelector(state => state.sidebarExistance.sidebar)

    const dispatch = useDispatch()

    function handleSidebar() {
        dispatch(sidebarActions.toggleSidebar())
    }

    function toggleDropdown(dropdownName) {
        console.log(dropdownName)
        setDropdown((prev) => prev === dropdownName ? null : dropdownName)
    }

    return (

        <>
            <AnimatePresence>
                {isSidebar && <>
                    <div onClick={handleSidebar} className="w-lvw h-lvh bg-black/50 fixed top-0 z-4"></div>

                    <motion.div
                        variants={sidebarFlyIn}
                        initial='init'
                        animate='anim'
                        exit='init'
                        className="flex flex-col fixed top-0 left-0 bg-white w-[330px] h-lvh z-5">

                        <div className="flex justify-between font-bold py-5 px-7">
                            <span>MENU</span>
                            <span onClick={handleSidebar}><X className='w-4.5 h-4.5' /></span>
                        </div>

                        <hr className="border-gray-200"></hr>

                        <ul className='flex flex-col mt-2 px-7 text-sm'>

                            <li className='flex items-center'>
                                <Link href='' className='py-3 cursor-pointer hover:text-primary transition-all duration-300'>Home</Link>
                            </li>

                            <li onClick={() => toggleDropdown('shop')} className='flex flex-col ' >
                                <button className='py-3 flex w-full justify-between items-center'>Shop<Chevron className='w-4 h-4' /></button>
                                <AnimatePresence mode="wait">
                                    {dropdown === 'shop' &&

                                        <motion.ul
                                            variants={expandAccordion}
                                            initial='init'
                                            animate='anim'
                                            exit='init'
                                            className={`flex flex-col rounded-md min-w-max font-light gap-y-3 ${dropdown === 'shop' ? 'mb-3' : 'mb-0'}`}
                                        >

                                            <li className='mb-1'>Casual Wear</li>
                                            {["Casuall Wear", "Home Decorate", "Electronics"].map((item, i) => {
                                                return (
                                                    <li key={i}>{item}</li>
                                                )
                                            })}


                                        </motion.ul>
                                    }
                                </AnimatePresence>
                            </li>

                            <li className='flex items-center'>
                                <Link href='collection' className='py-3 cursor-pointer hover:text-primary transition-all duration-300'>Collections</Link>
                            </li>

                            <li onClick={() => toggleDropdown('cloths')} className='flex flex-col ' >
                                <button className='py-3 flex w-full justify-between items-center'>cloths<Chevron className='w-4 h-4' /></button>
                                <AnimatePresence mode="wait">
                                    {dropdown === 'cloths' &&

                                        <motion.ul
                                            variants={expandAccordion}
                                            initial='init'
                                            animate='anim'
                                            exit='init'
                                            className={`flex flex-col rounded-md min-w-max font-light gap-y-3 ${dropdown === 'cloths' ? 'mb-3' : 'mb-0'}`}
                                        >

                                            <li className='mb-1'>Casual Wear</li>
                                            {["Man Fashion", "Woman Fashion", "Kids cloth", "Accessories"].map((item, i) => {
                                                return (
                                                    <li key={i}>{item}</li>
                                                )
                                            })}


                                        </motion.ul>
                                    }
                                </AnimatePresence>
                            </li>

                            <li className='flex items-center'>
                                <Link href='Blog' className='py-3 cursor-pointer hover:text-primary transition-all duration-300'>Blog</Link>
                            </li>

                            <li className='flex items-center'>
                                <Link href='contact' className='py-3 cursor-pointer hover:text-primary transition-all duration-300'>Contact</Link>
                            </li>

                        </ul>

                    </motion.div>

                </>}
            </AnimatePresence>
        </>

    )
}