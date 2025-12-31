import React from "react";
import Image from "next/image";
import BackButton from "./back-button";
import fs from "fs";
import path from "path";

export const dynamicParams = false;

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), "public");
    const files = fs.readdirSync(dir);
    return files
        .filter((f) => f.endsWith(".webp"))
        .map((f) => ({ photoId: f.replace(/\.webp$/, "") }));
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
                <Image
                    src={`/${photoId}.webp`}
                    alt={`Photo ${photoId}`}
                    className="rounded-lg shadow-lg max-h-full max-w-full"
                    width={800}
                    height={800}
                    style={{ objectFit: 'contain' }}
                    unoptimized
                />
            </section>
        </section>
    );
}