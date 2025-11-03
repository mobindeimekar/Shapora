"use client";

export default function Badge({
    count = 0,
    color = "bg-red-600",
    textColor = "text-white",
    position = "top-0 right-0",
    size = "text-xs",
}) {
    if (!count || count === 0) return null;

    return (
        <span
            className={`absolute ${position} ${color} ${textColor} ${size} 
      font-medium rounded-full px-1.5 py-0.5 min-w-[18px] text-center leading-none shadow-sm`}
        >
            {count > 99 ? "99+" : count}
        </span>
    );
}
