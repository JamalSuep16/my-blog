import Link from "next/link";

export default function Footer() {
  return (
    <section id="contact">
      <div className="bg-slate-500 flex flex-col items-center">
        <h3 className="text-[#414141] font-semibold text-2xl mb-4">
          Contact Us
        </h3>
        <div className="flex flex-col items-center text-black">
          <div className="flex flex-row gap-2 items-center mt-3">
            <div className="relative w-[20px] h-[20px]">
              <img
                src="/facebook.svg"
                alt="Facebook Logo"
                fill
                className="object-cover"
              />
            </div>
            <Link
              href="https://www.facebook.com/aryaprabangsasuhara"
              className="text-sm font-medium"
            >
              Jamal Suep
            </Link>
          </div>
          <div className="flex flex-row gap-2 items-center mt-3">
            <div className="relative w-[20px] h-[20px]">
              <img
                src="/instagram.svg"
                alt="Instagram Logo"
                fill
                className="object-cover"
              />
            </div>
            <Link
              href="https://www.instagram.com/aryasuharaa"
              className="text-sm font-medium"
            >
              @jamal_suep
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
