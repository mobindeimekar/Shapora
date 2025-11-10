"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./productSlider.css";
import Chevron from '@/public/icons/chevron-down.svg'
import Heart from '@/public/icons/heart.svg'
import Cart from '@/public/icons/shopping-cart.svg'
import RatingStars from '@/components/ui/RatingStars';
import { formatUSD } from "@/utils/formatPrice";



export default function ProductSlider({ products }) {
    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={4}
                loop={true}
                spaceBetween={30}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 15 },
                    640: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 30 },
                    1280: { slidesPerView: 6, spaceBetween: 30 },

                }}
                className="product-swiper"
            >
                {products.map((item) => (
                    <SwiperSlide key={item.id} className="!h-auto mb-7">
                        <div className="group flex flex-col justify-between h-full p-5 cursor-pointer ">

                            {/* 🔹 بخش عکس */}
                            <div className="relative w-full h-[220px] mx-auto overflow-hidden rounded-md">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    quality={70}
                                    className="object-contain transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <Image
                                    src={item.hoverImage}
                                    alt={`${item.title} hover`}
                                    fill
                                    className="object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                />

                                {/* 🔹 دکمه‌های شناور سمت راست بالا */}
                                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 -translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2">
                                    <button className="w-10 h-10 p-2 bg-white border border-neutral-300 rounded-lg hover:bg-primary hover:text-white">
                                        <Heart />
                                    </button>
                                    <button className="w-10 h-10 p-2 bg-white border border-neutral-300 rounded-lg hover:bg-primary hover:text-white">
                                        <Cart />
                                    </button>
                                </div>
                            </div>

                            {/* 🔹 اطلاعات محصول */}
                            <div className="mt-3 text-start flex flex-col gap-y-1.5">

                                <span className="text-sm text-gray-500 font-light">{item.brand}</span>
                                <h3 className="text-sm text-gray-800 line-clamp-2 ">
                                    {item.title}
                                </h3>
                                <RatingStars rating={item.rating} size={15} />
                                <div className="flex items-baseline gap-2">
                                    {item.offer ? (
                                        <>
                                            <span className="text-gray-400 line-through">
                                                {formatUSD(item.price)}
                                            </span>
                                            <span className="text-red-600 text-lg">
                                                {formatUSD(item.offer)}
                                            </span>
                                        </>
                                    )
                                        :
                                        <span className="text-red-600 text-lg">
                                            {formatUSD(item.price)}
                                        </span>
                                    }
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>

            <button className="custom-prev absolute -translate-y-1/2 z-2 cursor-pointer font-light rounded-full flex items-center justify-center">
                <Chevron className="h-9 w-9 rotate-90 stroke-1" />
            </button>
            <button className="custom-next absolute -translate-y-1/2 z-2 cursor-pointer font-light rounded-full flex items-center justify-center">
                <Chevron className="h-9 w-9 rotate-270 stroke-1" />
            </button>
        </div>
    );
}
