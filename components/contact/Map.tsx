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
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7282.562711464504!2d90.34786719870617!3d23.80014693053239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHouse%20No.%2035%2C%203rd%20Floor%2C%20Road%20No-4%2C%20Block-F%2C%20Kalwalapara%20(Main%20Road)%20Mirpur-1%2C%20Dhaka%201216%2C%20Bangladesh!5e1!3m2!1sen!2sbd!4v1776760358621!5m2!1sen!2sbd"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
