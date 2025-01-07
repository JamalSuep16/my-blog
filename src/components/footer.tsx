import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <section id="contact" className="bg-slate-500 py-8">
      <div className="flex flex-col items-center px-4">
        <h3 className="text-[#414141] font-semibold text-2xl mb-4 text-center">
          Contact Us
        </h3>
        <div className="flex flex-col sm:flex-row sm:gap-8 items-center text-black">
          <div className="flex flex-row gap-2 items-center mt-3">
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
              <Image
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
          <div className="flex flex-row gap-2 items-center mt-3 sm:mt-0">
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
              <Image
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
