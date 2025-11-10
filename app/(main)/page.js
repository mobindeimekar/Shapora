import Hero from "@/components/home/Hero/Hero";
import ProductSliderWrapper from "@/components/productSlider/productSliderWrapper";
import StoreFeatures from "@/components/storeFeatures/StoreFeatures";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col gap-y-8 items-center min-h-[10000px] px-5 ">

        <Hero />
        <StoreFeatures />
        <ProductSliderWrapper />
      </main>
    </>
  );
}

