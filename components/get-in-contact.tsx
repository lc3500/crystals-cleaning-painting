import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Phone, Mail, PictureInPicture } from "lucide-react";
import Link from "next/link";


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
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Avatar className="h-20 w-20 sm:h-24 sm:w-24">
                            <AvatarImage
                                src="https://crystals-cleaning-painting.s3.us-west-1.amazonaws.com/IMG_20221230_153849_Original.jpg"
                                alt="Avatar"
                            />
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <DrawerTitle
                            className="text-2xl sm:text-5xl font-bold text-center sm:text-left"
                        >Crystal McGuinn</DrawerTitle>
                    </div>
                    <DrawerDescription className="text-lg sm:text-3xl text-center sm:text-left">Professional Painter and Flooring Expert</DrawerDescription>
                    <section className="m-2 sm:m-4">
                        <ul className="gap-4 sm:gap-6 flex flex-col text-base sm:text-xl">
                            <li>
                                <a
                                    href="tel:1234567890"
                                    className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition text-center sm:text-left"
                                >
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                                    Phone
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:crystal@example.com"
                                    className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition text-center sm:text-left"
                                >
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                                    Email
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/gallery"
                                    className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition text-center sm:text-left"
                                >
                                    <PictureInPicture className="w-5 h-5 sm:w-6 sm:h-6" />
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

export default function GetInContact() {
    return (
        <section className="bg-secondary flex flex-col w-full min-h-[30vh] items-center justify-center gap-4 sm:gap-5 px-4 sm:px-10 py-8 sm:py-12">
            <h1 className="text-primary text-3xl sm:text-5xl h1-alt text-center">Get in Contact</h1>
            <DrawerComponent>
                <div className="px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition cursor-pointer text-base sm:text-lg">
                    View Contact Info
                </div>
            </DrawerComponent>
        </section>
    )
}