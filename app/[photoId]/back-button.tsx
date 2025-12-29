"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <Button className="text-2xl py-2" onClick={() => router.back()}><ChevronLeft /> Back to Gallery</Button>
    );
}