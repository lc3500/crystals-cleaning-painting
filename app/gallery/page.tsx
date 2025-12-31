"use client";
import Image from "next/image";
// Determine base path for images depending on environment
const isProd = typeof process !== 'undefined' && process.env.NODE_ENV === "production";
const basePath = isProd ? "/crystals-cleaning-painting" : "";
import { useRouter } from "next/navigation";
import BackButton from "../[photoId]/back-button";

export default function PhotosPage() {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden px-2 sm:px-6 lg:px-20">
            <header className="my-4 sm:my-10">
               <BackButton />
            </header>
            <section
                className="w-full gap-3 sm:gap-6 hidden md:grid"
                style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                }}
            >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                        key={num}
                        className="aspect-square flex items-center justify-center p-2 sm:p-4"
                        onClick={() => router.push(`/${num}`)}
                    >
                        <Image
                            src={`${basePath}/${num}.webp`}
                            alt={`Photo ${num}`}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                            width={600}
                            height={600}
                            unoptimized
                        />
                    </div>
                ))}
            </section>
            <section
                className="w-full gap-3 sm:gap-6 md:hidden grid"
                style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                }}
            >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                        key={num}
                        className="aspect-square flex items-center justify-center p-2 sm:p-4"
                        onClick={() => router.push(`/${num}`)}
                    >
                        <Image
                            src={`${basePath}/${num}.webp`}
                            alt={`Photo ${num}`}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                            width={600}
                            height={600}
                            unoptimized
                        />
                    </div>
                ))}
            </section>
        </div>
    );
}