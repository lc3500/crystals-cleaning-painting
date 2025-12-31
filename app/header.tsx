"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail, Menu, Phone, PictureInPicture } from "lucide-react";
import Link from "next/link";
import navItems from "./nav-items";
import Logo from "@/public/Logo.svg";
import Image from "next/image";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function DrawerComponent() {
    return (
        <Drawer
           snapPoints={[1]}
           activeSnapPoint={1}
           direction="top"
        >
            <DrawerTrigger>
                <Menu />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <div className="flex flex-row gap-4 items-center justify-center">
                        <Avatar className="h-24 w-24">
                            <AvatarImage
                                src="https://crystals-cleaning-painting.s3.us-west-1.amazonaws.com/IMG_20221230_153849_Original.jpg"
                                alt="Avatar"
                            />
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <DrawerTitle
                            className="text-5xl font-bold"
                        >Crystal McGuinn</DrawerTitle>
                    </div>
                    <DrawerDescription className="text-3xl">Professional Painter and Flooring Expert</DrawerDescription>
                    <section className="m-4 ">
                        <ul className="gap-6 flex flex-col text-xl">
                            <li>
                                <a
                                    href="tel:1234567890"
                                    className="flex items-center gap-4 p-4 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition"
                                >
                                    <Phone className="w-6 h-6" />
                                    Phone
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:crystal@example.com"
                                    className="flex items-center gap-4 p-4 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition"
                                >
                                    <Mail className="w-6 h-6" />
                                    Email
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/gallery"
                                    className="flex items-center gap-4 p-4 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition"
                                >
                                    <PictureInPicture className="w-6 h-6" />
                                    View Photos
                                </Link>
                            </li>
                        </ul>
                    </section>
                </DrawerHeader>
                <DrawerFooter>
                    {/* <Button>Submit</Button>
                    <DrawerClose>
                        Cancel
                    </DrawerClose> */}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default function Header() {
    return (
        <header className="w-[max-content] fixed h-[10%] bg-tertiary z-50 p-4 flex flex-row justify-start items-center rounded-b-lg shadow-lg m-4">
            <DrawerComponent />
            <img
                src="/Logo.svg"
                width={100}
                height={100}
                alt="Crystal's Cleaning and Painting Logo"
                className=""
            />
        </header>
    );
}