import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";



const RatingStars = ({ rating, max = 5, size = 16 }) => {
    // تعداد ستاره‌های پر
    const fullStars = Math.floor(rating);
    // آیا نیمه‌ستاره نیاز داریم؟
    const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
    // بقیه ستاره‌ها خالی‌اند
    const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center justify-center gap-[2px] text-yellow-400">
            {Array(fullStars)
                .fill()
                .map((_, i) => (
                    <FaStar key={`full-${i}`} size={size} />
                ))}

            {hasHalfStar && <FaStarHalfAlt size={size} />}

            {Array(emptyStars)
                .fill()
                .map((_, i) => (
                    <FaRegStar key={`empty-${i}`} size={size} />
                ))}
        </div>
    );
};

export default RatingStars;
