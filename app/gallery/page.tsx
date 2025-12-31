"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PhotosPage() {
    const router = useRouter();
    return (
        <>
            <header className="w-screen h-30 m-10">
                <Button className="text-2xl py-10" onClick={() => router.back()}><ChevronLeft /> Back to Home</Button>
            </header>
            <section className="grid" style={{gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem"}}>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="w-full aspect-square flex items-center justify-center p-4" onClick={() => router.push(`/${num}`)}>
                        <Image
                            src={`/crystals-cleaning-painting/${num}.webp`}
                            alt={`Photo ${num}`}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                            width={600}
                            height={600}
                            unoptimized
                        />
                    </div>
                ))}
            </section>
        </>
    );
}