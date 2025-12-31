
import React from "react";
import BackButton from "./back-button";
import fs from "fs";
import path from "path";

// Determine base path for images depending on environment
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/crystals-cleaning-painting" : "";

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
        <section
            className="h-screen overflow-hidden flex flex-col bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${basePath}/${photoId}.webp)` }}
        >
            <header className="w-screen h-30 m-10">
                <BackButton />
            </header>
        </section>
    );
}