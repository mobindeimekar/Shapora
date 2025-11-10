'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Button from '@/components/ui/Button';

const slides = [
    {
        id: 1,
        title: "Orange iPhone Pro — Bold Design, Pro Power",
        subtitle: "Starting at only $500",
        image: "/hero-images/phone.webp",
        bgColor: "bg-[#FDD046]",
        link: "/shop",
    },
    {
        id: 2,
        title: "Minimalist Armchair for Living Spaces",
        subtitle: "Exclusive Offer $299",
        image: "/hero-images/hero-image-sofa.webp",
        bgColor: "bg-[#aDE6F5]",
        link: "/shop",
    },
];

export function HeroSlider() {
    return (
        <div className="relative w-full max-w-[1100px] h-[300px] sm:h-[350px] lg:h-[460px] xl:h-[530px] rounded-md overflow-hidden">
            <Swiper
                centeredSlides
                autoplay={{
                    delay: 20000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className={`flex items-center justify-between w-full h-full px-10 md:px-16 lg:px-24 ${slide.bgColor}`}>
                            <div className="flex flex-col justify-center gap-4 max-w-[450px]">
                                <p className="text-sm md:text-base lg:text-xl text-gray-800 tracking-wide uppercase">
                                    {slide.subtitle}
                                </p>
                                <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold xl:font-bold leading-tight text-gray-900">
                                    {slide.title}
                                </h2>
                                <Button
                                    href={slide.link}
                                    className="px-7 py-0 mt-2"
                                >
                                    SHOP NOW
                                </Button>
                            </div>

                            <div className="flex justify-center items-center h-full relative w-[100%] md:w-[70%]">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 40vw"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}












