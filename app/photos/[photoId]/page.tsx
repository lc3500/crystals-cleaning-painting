import React from "react";
import BackButton from "./back-button";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { photoId: "1" },
    { photoId: "2" },
    { photoId: "3" },
    { photoId: "4" },
    { photoId: "5" },
    { photoId: "6" },
  ];
}

export default async function PhotoDetailPage({
    params,
}: {
    params: Promise<{ photoId: string }>;
}) {
    const { photoId } = await params;

    return (
        <section className="h-screen overflow-hidden flex flex-col">
            <header className="w-full h-1/5 flex items-center p-4">
                <BackButton />
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