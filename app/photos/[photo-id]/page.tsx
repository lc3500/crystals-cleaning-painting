"use client";
import React from "react";
import { Usable } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PhotoDetailPage({ params }: { params: Usable<{ "photo-id": string }> }) {
    const router = useRouter();
    const photoId = React.use<{ "photo-id": string }>(params)["photo-id"];

    return (
        <section className="h-screen overflow-hidden flex flex-col">
            <header className="w-full h-1/5 flex items-center p-4">
            <Button className="text-2xl py-2" onClick={() => router.back()}><ChevronLeft /> Back to Gallery</Button>
            </header>
            <section className="flex-1 flex items-center justify-center p-4 overflow-hidden">
            <img 
                src={`/crystals-cleaning-pics/${photoId}.webp`}
                alt={`Photo ${photoId}`}
                className="rounded-lg shadow-lg max-h-full max-w-full"
            />
            </section>
        </section>
    );
}