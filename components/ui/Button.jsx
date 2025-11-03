import Link from "next/link"

export default function Button({ href, onClick, className = '', type, children }) {
    const baseClass =
        "px-5 py-3 bg-primary rounded-md text-white hover:bg-primary/85 cursor-pointer transition-all duration-300 flex w-fit ";

    if (href) {
        return <Link href={href} className={`${baseClass} ${className}`}>{children}</Link>;
    }
    else {
        return <button type={type} onClick={onClick} className={`${baseClass} ${className}`}>{children}</button>;
    }
}
