import Image from "next/image";

export default function PromoCard({ title, subtitle, price, image, bgColor }) {
    return (
        <div
            className={`group relative flex items-center justify-between p-8 rounded-xl overflow-hidden w-full max-w-[450px] md:max-w-[700px] h-[250px] md:h-[300px] lg:h-[250px]`}
            style={{ backgroundColor: bgColor }}
        >
            <div className="z-10 text-white space-y-2">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-lg ">{subtitle}</p>
                <p className="text-lg ">${price}</p>
                <button className="underline hover:no-underline cursor-pointer">
                    SHOP NOW
                </button>
            </div>
            <div className="absolute -right-30 bottom-0 w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain  "
                />
            </div>
        </div>
    );
};

