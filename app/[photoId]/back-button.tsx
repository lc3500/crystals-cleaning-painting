"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <div className="h-20">
            <Button className="text-2xl py-2 h-full" onClick={() => router.back()}><ChevronLeft /> Back</Button>
        </div>
    );
}