import Image from "next/image";
import HeroImage from "@/public/bathroom.jpg";

export default function Landing() {
    return (
        <section className="w-screen h-screen md:h-[70vh] bg-black flex flex-col items-center justify-center text-left overflow-hidden relative pt-[10%]">
            <Image src={HeroImage} alt="Painted bathroom" className="w-screen opacity-65" />
            <section id="container" className="absolute bottom-0 left-0 w-full flex gap-10 flex-col z-5">

                <h2
                    style={{
                        fontSize: "5rem",
                        color: "white",
                    }}
                >
                    Bringing New Life to Your Space
                </h2>
                <h1 style={{ fontSize: "7rem" }}>One Brush & Broom at a Time!</h1>
            </section>

        </section>
    );
}