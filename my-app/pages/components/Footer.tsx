import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaReddit,
  FaTiktok,
  FaTwitch,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent py-12 flex flex-col items-center justify-center text-center">
      <p className="mb-6 text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl">
        Witness the beginning of an industry shift, join the{" "}
        <br className="hidden sm:block" />
        revolution early.
      </p>

      <div className="flex flex-wrap justify-center gap-5 mb-6 text-xl sm:text-2xl text-[#b0b0b0]">
        <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
          <FaLinkedin />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-white transition">
          <FaInstagram />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-white transition">
          <FaFacebook />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-white transition">
          <FaTwitter />
        </a>
        <a href="#" aria-label="Reddit" className="hover:text-white transition">
          <FaReddit />
        </a>
        <a href="#" aria-label="TikTok" className="hover:text-white transition">
          <FaTiktok />
        </a>
        <a href="#" aria-label="Twitch" className="hover:text-white transition">
          <FaTwitch />
        </a>
      </div>

      <div className="text-lg sm:text-base text-[#807e7e] tracking-wide">
        © All Rights Reserved. Techverse Inc.
      </div>
    </footer>
  );
}
