import SectionWrapper from "../layouts/SectionWrapper";
import Truck from "../../public/icons/truck.svg";
import MoneyBag from "../../public/icons/moneybag-move-back.svg";
import Gift from "../../public/icons/gift.svg";
import Phone from "../../public/icons/phone-call.svg";

const features = [
  { id: 1, title: "Worldwide Shipping", subtitle: "Order Above $100", icon: <Truck /> },
  { id: 2, title: "Money Back Guarantee", subtitle: "Guarantee Within 30 Days", icon: <MoneyBag /> },
  { id: 3, title: "Offers And Discounts", subtitle: "Available Now", icon: <Gift /> },
  { id: 4, title: "24/7 Support Services", subtitle: "Any Time Support", icon: <Phone /> },
];

export default function StoreFeatures() {
  return (
    <SectionWrapper className="px-0 py-0">
      <div className="w-full">
        <div
          className="flex py-7 lg:py-10 lg:justify-center gap-x-10 lg:gap-x-17 overflow-x-auto scrollbar-hide px-5 snap-x snap-mandatory items-center " >
          {features.map((item, index) => (
            <div
              key={item.id}
              className="snap-start flex-shrink-0 min-w-[250px] flex items-center gap-4" >
              <div className="w-13 h-13 flex items-center justify-center text-red-600 hover:text-neutral-700 cursor-pointer transition duration-300">
                {item.icon}
              </div>

              <div>
                <h4 className="text-base text-gray-900">{item.title}</h4>
                <p className="text-sm font-light text-gray-600">{item.subtitle}</p>
              </div>

              {index !== features.length - 1 && (
                <div className="hidden md:block ml-4 mr-[-22px]">
                  <div className="w-px h-10 bg-gray-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
