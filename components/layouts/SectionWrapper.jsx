export default function SectionWrapper({ children, className ="px-7 py-10" }) {
    return (
        <>
            <section className={`max-w-[1400px] w-full bg-white rounded-md box-shadow-sm flex flex-col  ${className}`}>
                {children}
            </section>
        </>
    );
}