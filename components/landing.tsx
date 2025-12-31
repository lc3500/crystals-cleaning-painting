import HeroImage from "@/public/bathroom.jpg";

export default function Landing() {
    return (
        <section
            className="relative w-full min-h-[60vh] md:h-[70vh] overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${HeroImage.src})` }}
        >
            <section
                id="container"
                className="absolute inset-0 z-10 flex flex-col justify-end flex-1 gap-4 sm:gap-10 px-2 sm:px-8 pb-6 sm:pb-10 text-left text-white bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            >
                <h2 className="text-2xl sm:text-5xl font-bold">Bringing New Life to Your Space</h2>
                <h1 className="text-3xl sm:text-7xl font-extrabold leading-tight">
                    One Brush & Broom at a Time!
                </h1>
            </section>
        </section>
    );
}