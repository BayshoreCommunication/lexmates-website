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
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3282671.853422184!2d142.82972230456852!3d-36.5364056613042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s245%20King%20Street%2C%20Touterie%20Victoria%208520%20Australia!5e0!3m2!1sen!2sbd!4v1771320626954!5m2!1sen!2sbd"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
