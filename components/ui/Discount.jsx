export default function Discount({ price, offer }) {
    return (
        <>
            <div className="bg-red-600 px-2.5 py-1 rounded-md text-xs text-white">
                {Math.round(((price - offer) / price) * 100)}%
            </div>
        </>
    );
}