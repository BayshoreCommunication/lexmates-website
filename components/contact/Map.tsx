interface GoogleMapProps {
  height?: string;
  rounded?: boolean;
}

export default function Map({
  height = "h-[420px]",
  rounded = true,
}: GoogleMapProps) {
  return (
    <section className="w-full my-8 md:my-16 px-8">
      <div
        className={`relative w-full max-w-[1320px] mx-auto ${height} ${
          rounded ? "rounded-2xl" : ""
        } overflow-hidden`}
      >
        <iframe
          src="https://www.google.com/maps?q=House+No+35,+Road+No+4,+Block+F,+Kalwalapara,+Mirpur+1,+Dhaka+1216,+Bangladesh&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
