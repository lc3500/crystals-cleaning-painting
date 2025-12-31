
import Image from "next/image";


export default function MeetThePainter() {
    return (
        <section className="my-8 px-2 sm:px-8">
            <h1 className="text-3xl sm:text-6xl text-primary mb-4">Meet the Painter</h1>
            <aside className="flex flex-col sm:flex-row items-center justify-start max-w-4xl gap-4 sm:gap-8">
                <Image
                    src="https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg"
                    alt="Crystal McGinn"
                    className="rounded-full"
                    width={160}
                    height={160}
                    unoptimized
                />
                <p className="text-base sm:text-xl p-2 sm:p-4 text-center sm:text-left">
                    Crystal is a professional painter with over 10 years of experience in
                    the industry. She has a passion for transforming spaces and takes
                    pride in her attention to detail.
                </p>
            </aside>
        </section>
    );
}