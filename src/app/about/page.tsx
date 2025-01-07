import Image from "next/image";

export default function About() {
  return (
    <section className="bg-slate-900 py-12 px-6 md:py-24 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="bg-stone-400 rounded-xl p-1 w-29 text-center text-sm font-bold text-white">
          ABOUT ME
        </h2>
        <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-8 justify-between">
          <Image
            className="w-full md:w-2/6 rounded-lg shadow-md shadow-slate-50"
            src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="w-full md:w-3/6">
            <h2 className="text-2xl md:text-3xl font-normal text-white">
              Curious about me? Here You Have it:
            </h2>
            <span className="mt-6 text-sm md:text-base font-normal text-white">
              Hello! Arya Prabangsa Suhara, a passionate full-stack developer
              with a knack for creating dynamic and user-friendly web
              applications. <br />
              <br /> With over 3 years of experience in web development, I
              specialize in both front-end and back-end technologies, delivering
              seamless and engaging digital experiences. <br /> <br /> My
              expertise includes technologies like React, Node.js, MongoDB, and
              Tailwind CSS. I thrive on solving complex problems and
              collaborating with teams to bring ideas to life. When Im not
              coding, youll find me exploring new tech trends or enjoying
              outdoor adventures. <br /> <br /> Im always eager to take on
              challenging projects that push the boundaries of innovation. Lets
              create something amazing together!
            </span>
            <ul className="mt-4 list-disc pl-6 text-sm md:text-base font-normal text-white">
              <li>
                <p>Front End Mobile Developer</p>
              </li>
              <li>
                <p>Front End Web Developer</p>
              </li>
            </ul>
            <br />
            <p>
              One last thing, Im available for freelance work, so feel free to
              reach out and say hello! I promise I dont bite 😉
            </p>
          </div>
        </div>
      </div>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="bg-stone-400 rounded-xl p-1 w-29 text-center text-sm font-bold text-white">
              Get In Touch
            </h2>
          </div>
        </div>
        <div className="mt-10">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <p>
              What’s next? Feel free to reach out to me if youre looking for a
              developer, have a query, or simply want to connect.
            </p>
            <h2 className=" text-white text-2xl font-bold mt-5">
              aryasuhara6@gmail.com
            </h2>
            <h2 className="text-white text-2xl font-bold mt-5">
              +62 89512376842
            </h2>
            <p>You may also find me on these platforms!</p>
            <img src="/linkedin-logo.svg" alt="" className="mt-5 size-10" />
            <img src="/" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
