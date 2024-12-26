export default function Hero() {
  return (
    <section>
      <div className="w-full h-96 flex  justify-center items-center bg-gray-500">
        <div className="w-24 h-24 ml-10 ">
          <img
            className="rounded-xl shadow-md shadow-slate-50"
            src="/ProfileArya.jpeg"
            alt="Its Me"
          />
        </div>
        <div>
          <h1 className="justify-center items-center  text-white text-5xl font-bold relative z-10 flex-col sm:flex-row">
            Welcome To My Blog
          </h1>
          <p>
            What I'm learning about shipping great products, becoming a better
            developer, and growing a career in tech.
          </p>
        </div>
      </div>
    </section>
  );
}
