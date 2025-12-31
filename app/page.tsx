"use client";
import Header from "./header";
import Landing from "../components/landing";
import MeetThePainter from "@/components/meet-the-painter";
import GetInContact from "@/components/get-in-contact";
import LocationHero from "@/components/location-hero";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-start gap-5 text-left overflow-hidden bg-tertiary">
      <Header />
      <Landing />
      <LocationHero />
      <MeetThePainter />
      <GetInContact />
    </section>

  );
}
