import SectionWrapper from "../layouts/SectionWrapper";
import CategorySlider from "./CategorySlider";
import ProductSlider from "./ProductSlider";

const sliderMap = {
    "Shop By Categories": (data) => <CategorySlider categories={data} />,
    "Featured Products": (data) => <ProductSlider products={data} />,
};

export default function ProductSliderWrapper({title , data}) {
    const SliderComponent = sliderMap[title] || ((data) => <ProductSlider products={data} />);

    return (
        <SectionWrapper className="py-5 px-7" >
            <div className="border-b border-gray-200">
                <h2 className="flex w-fit text-[22px] border-b-2 py-2 border-red-600 z-2">{title}</h2>
            </div>
            {SliderComponent(data)}
        </SectionWrapper>
    );
}
