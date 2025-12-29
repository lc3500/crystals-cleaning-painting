import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Phone, Mail, PictureInPicture, Menu } from "lucide-react";
import { Button } from "./ui/button";


function DrawerComponent({ children }: { children?: React.ReactNode }) {
    return (
        <Drawer
            snapPoints={[1]}
            activeSnapPoint={1}
            direction="top"
        >
            <DrawerTrigger>
                {children}
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
                                <a
                                    href="/photos"
                                    className="flex items-center gap-4 p-4 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition"
                                >
                                    <PictureInPicture className="w-6 h-6" />
                                    View Photos
                                </a>
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

export default function GetInContact() {
    return (
        <section className="bg-secondary flex flex-col w-screen h-[30vh] items-center justify-center gap-5 p-10">
            <h1 className="text-primary text-5xl h1-alt">Get in Contact</h1>
            <DrawerComponent>
                <div className="p-4 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition cursor-pointer">
                    View Contact Info
                </div>
            </DrawerComponent>
        </section>
    )
}