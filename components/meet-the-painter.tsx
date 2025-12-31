
import Image from "next/image";


export default function MeetThePainter() {
    return (
        <section className="m-20">
            <h1 className="text-6xl text-primary">Meet the Painter</h1>
            <aside className="flex flex-row items-center justify-start max-w-4xl gap-5">
                <Image
                    src="https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg"
                    alt="Crystal McGinn"
                    className="rounded-full"
                    width={200}
                    height={200}
                    unoptimized
                />
                <p className="text-xl p-4">
                    Crystal is a professional painter with over 10 years of experience in
                    the industry. She has a passion for transforming spaces and takes
                    pride in her attention to detail.
                </p>
            </aside>
        </section>
    );
}