

export default function LocationHero() {
    return (
        <section className="w-full min-h-[40vh] px-2 sm:px-20 py-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-20 bg-primary text-white">
            <h1 className="text-2xl sm:text-7xl mb-4 sm:mb-0">We&apos;re Local!</h1>
            <div className="flex flex-col w-full sm:w-auto items-center">
                <h2 className="text-lg sm:text-5xl mb-2 sm:mb-4">Located in Marion, IN</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97034.56968412855!2d-85.72011870694534!3d40.53429120315444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814ff40b89e8245%3A0x70cfba96bf840f0!2sMarion%2C%20IN!5e0!3m2!1sen!2sus!4v1767048197074!5m2!1sen!2sus" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-48 sm:h-70 rounded-lg"
                ></iframe>
            </div>
        </section>
    );
}