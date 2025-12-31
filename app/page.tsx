"use client";
import Header from "./header";
import Landing from "../components/landing";
import MeetThePainter from "@/components/meet-the-painter";
import GetInContact from "@/components/get-in-contact";
import LocationHero from "@/components/location-hero";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-start gap-6 text-left overflow-hidden bg-tertiary min-h-screen px-2 sm:px-4 py-4 w-full">
      <div className="w-full max-w-screen-xl mx-auto">
        <Header />
        <Landing />
        <LocationHero />
        <MeetThePainter />
        <GetInContact />
      </div>
    </section>
  );
}
