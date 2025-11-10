
import StarFull from '@/public/icons/star-full.svg'
import Star from '@/public/icons/Star.svg'
import StarHalf from '@/public/icons/star-half.svg'


const RatingStars = ({ rating, max = 5, size = 16 }) => {

    const fullStars = Math.floor(rating);

    const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;

    const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-[2px] text-yellow-400">
            {Array(fullStars)
                .fill()
                .map((_, i) => (
                    <StarFull key={`full-${i}`} style={{ width: size, height: size }} />
                ))}

            {hasHalfStar && <StarHalf style={{ width: size, height: size }} />}

            {Array(emptyStars)
                .fill()
                .map((_, i) => (
                    <Star key={`empty-${i}`} style={{ width: size, height: size }} />
                ))}
        </div>
    );
};

export default RatingStars;
