import SectionWrapper from "../layouts/SectionWrapper";
import ProductSlider from "./ProductSlider";

const products = [
    { id: 1, title: "Home Decorative Wood Night Lamp ", price: 235, offer: 200, image: "/products/lamp1.webp", hoverImage: "/products/lamp2.webp", rating: 2.5 ,brand: "IKEA" },
    { id: 2, title: "Original Golden Necklace Set", price: 140, image: "/products/necklace1.webp", hoverImage: "/products/necklace2.webp", rating: 1.0 ,brand: "ZARA" },
    { id: 3, title: "Engagement Sterling Gold Style Ring", price: 120, image: "/products/ring1.webp", hoverImage: "/products/ring2.webp", rating: 4.2 ,brand: "Tiffany & Co." },
    { id: 4, title: "Sony Portable Wireless Camera", price: 180, image: "/products/camera1.webp", hoverImage: "/products/camera2.webp", rating: 3.6 ,brand: "Sony" },
    { id: 5, title: "Fire Stylist Analog Watch Analog Watch", price: 90, image: "/products/watch1.webp", hoverImage: "/products/watch2.webp", rating: 4.1 ,brand: "Casio" },
    { id: 6, title: "Laptop Backpack School Bag", price: 250, offer: 220, image: "/products/backpack2.webp", hoverImage: "/products/backpack2.webp", rating: 4.5 ,brand: "HP" },
    { id: 7, title: "Exclusive Design Office Chair Set", price: 120, offer: 98, image: "/products/chair1.webp", hoverImage: "/products/chair2.webp", rating: 5 ,brand: "IKEA"},
    { id: 8, title: "Sterling Gold Wedding Earring", price: 250, image: "/products/earings1.webp", hoverImage: "/products/earings2.webp", rating: 4.8 ,brand: "Tiffany & Co."},
    { id: 9, title: "Stainless Steel Wall Clock Wall Clock", price: 100, image: "/products/clock1.webp", hoverImage: "/products/clock2.webp", rating: 4.2 ,brand: "Sony"},
    { id: 10, title: "Durable Waterproof Hiking Shoes", price: 240, image: "/products/shoes1.webp", hoverImage: "/products/shoes2.webp", rating: 2.8 ,brand: "Adidas"},
];

export default function ProductSliderWrapper() {
    return (
        <SectionWrapper className="py-5 px-7" >
            <div className="border-b border-gray-200">
                <h2 className="flex w-fit text-[22px] border-b-2 py-2 border-red-600 z-2">Latest Product</h2>
            </div>
            <ProductSlider products={products} />
        </SectionWrapper>
    );
}
