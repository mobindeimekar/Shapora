import Image from "next/image";
import Link from "next/link";

import Heart from "@/public/icons/heart.svg";
import ShoppingCart from "@/public/icons/shopping-cart.svg";
import User from "@/public/icons/user.svg";
import Percentage from '@/public/icons/circle-percentage.svg'
import Button from "../../ui/Button";
import Badge from "../../ui/Badge";
import CategoryDropdown from "./CategoryDropdown";
import NavDropdown from "./NavDropdown";
import NavMegaDropdown from "./NavMegaDropdown";
import SidebarButton from "./SidebarButton";
import NavigationBorder from "./NavigationBorder";

const shopMenu = [
    {
        title: "Casual Wear",
        links: [
            { label: "Jeans & Shirts", href: "/shop/jeans-shirts" },
            { label: "Kids Accessories", href: "/shop/kids-accessories" },
            { label: "Kids Clothes", href: "/shop/kids-clothes" },
            { label: "Women's Fashion", href: "/shop/womens-fashion" },
            { label: "Women's Clothes", href: "/shop/womens-clothes" },
        ],
    },
    {
        title: "Home Decore",
        links: [
            { label: "Cabinet Table", href: "/shop/cabinet-table" },
            { label: "Furniture", href: "/shop/furniture" },
            { label: "Gadgets", href: "/shop/gadgets" },
            { label: "Instruments", href: "/shop/instruments" },
            { label: "Computer", href: "/shop/computer" },
        ],
    },
    {
        title: "Electronic",
        links: [
            { label: "Leather Watch", href: "/shop/leather-watch" },
            { label: "Phone & Tablet", href: "/shop/phone-tablet" },
            { label: "Television & Game", href: "/shop/tv-game" },
            { label: "Headphones", href: "/shop/headphones" },
            { label: "Leather Watch", href: "/shop/leather-watch" },
        ],
    },
];


export default function MainNavigation() {
    return (
        <header className="w-full flex flex-col justify-center bg-white shadow-xs">

            <div className="flex items-center px-5 lg:px-20 justify-between gap-x-5 w-full  h-[90px] mx-auto fixed top-0 left-1/2 -translate-x-1/2 bg-white z-4 shadow-here  ">

                <Link href="/" >
                    <div className="relative w-[120px] md:w-[170px] h-[90px] flex justify-center items-center">
                        <Image
                            src="/shapora-logo.png"
                            alt="Shapora logo"
                            fill
                            sizes="1300px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                <form className="hidden md:flex gap-x-3 grow max-w-[700px] justify-center">
                    <input
                        className="border border-gray-300 outline-0 grow rounded-md px-5"
                        placeholder="Search"
                    />
                    <Button>SEARCH</Button>
                </form>

                <div className="hidden lg:flex items-center justify-center gap-x-1 font-light">
                    <Link
                        className="hover:text-red-600 transition-all duration-300"
                        href="#"
                    >
                        Log in
                    </Link>
                    /
                    <Link
                        className="hover:text-red-600 transition-all duration-300"
                        href="#"
                    >
                        Register
                    </Link>
                </div>

                <div className="flex items-center gap-x-2 md:gap-x-3 h-full">
                    <Link
                        className="hover:text-red-600 transition-all duration-300 relative"
                        href="#"
                    >
                        <User className="h-8 w-8 md:h-9 md:w-9 " />
                    </Link>

                    <Link
                        className="hover:text-red-600 transition-all duration-300 relative"
                        href="#"
                    >
                        <Heart className="h-8 w-8 md:h-9 md:w-9 " />
                        <Badge count={1} position="-top-1 -right-2" />
                    </Link>

                    <Link
                        className="hover:text-red-600 transition-all duration-300 relative"
                        href="#"
                    >
                        <ShoppingCart className="h-8 w-8 md:h-9 md:w-9 " />
                        <Badge count={5} position="-top-1 -right-2" />
                    </Link>
                </div>
            </div>

            <NavigationBorder />

            <div className="mt-[90px] flex flex-col md:flex-row md:justify-between px-5 py-2 lg:py-0 lg:px-15 gap-x-5 gap-y-5 max-w-[1460px] border-b border-b-neutral-100">
                {/* this form right here */}
                <form className="flex md:hidden gap-x-3 justify-center">
                    <input
                        className="border border-gray-300 outline-0 rounded-md px-5 min-w-0 grow"
                        placeholder="Search"
                    />
                    <Button>SEARCH</Button>
                </form>

                <SidebarButton />

                <span className="gap-x-1 underline hidden md:flex lg:hidden" >
                    <Percentage className='text-red-600' />
                    Special Offers
                </span>

                <div className="hidden lg:flex items-center gap-x-12 ">
                    <CategoryDropdown />

                    <Link href="/home" className="hover:text-red-600 transition-all">Home</Link>

                    <NavMegaDropdown title="Shop" columns={shopMenu} />

                    <Link href="/home" className="hover:text-red-600 transition-all">Home</Link>

                    <NavDropdown
                        title="Outerwear"
                        items={[
                            { label: 'Jackets', href: '/outerwear/jackets' },
                            { label: 'Coats', href: '/outerwear/coats' },
                            { label: 'Hoodies', href: '/outerwear/hoodies' },
                        ]}
                    />

                    <Link href="/blog" className="hover:text-red-600 transition-all">Blog</Link>

                    <Link href="/contact" className="hover:text-red-600 transition-all">Contact</Link>


                </div>


            </div>
        </header>
    );
}
