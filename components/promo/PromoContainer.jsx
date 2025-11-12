import { DUMMY_PROMO_DATA1 } from "@/data/productData";
import PromoCard from "./PromoCard";



export default function PromoContainer() {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-y-5 gap-x-5 w-full max-w-[1400px]">
            {DUMMY_PROMO_DATA1.map((promo) => (
                <PromoCard key={promo.id}
                    title={promo.title}
                    subtitle={promo.subtitle}
                    price={promo.price}
                    image={promo.image}
                    bgColor={promo.bgColor}
                />
            ))}
        </div>
    );
}