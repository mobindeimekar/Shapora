import Hero from "@/components/home/Hero/Hero";
import ProductSliderWrapper from "@/components/productSlider/productSliderWrapper";
import PromoContainer from "@/components/promo/PromoContainer.jsx";
import StoreFeatures from "@/components/storeFeatures/StoreFeatures";
import { categories, featuredProducts, latestProducts } from "@/data/productData";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col gap-y-8 items-center min-h-[10000px] px-5 ">

        <Hero />
        <StoreFeatures />
        <ProductSliderWrapper title="Latest Products" data={latestProducts} />
        <PromoContainer />
        <ProductSliderWrapper title="Featured Products" data={featuredProducts} />
        <ProductSliderWrapper title="Shop By Categories" data={categories} />
      </main>
    </>
  );
}

