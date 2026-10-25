import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { EMAIL, GITHUB, LINKEDIN } from "../lib";

const socialLinks = [
  { href: LINKEDIN, icon: <FaLinkedin />, label: "LinkedIn" },
  { href: GITHUB, icon: <FaGithub />, label: "GitHub" },
  { href: `mailto:${EMAIL}`, icon: <FaEnvelope />, label: "Email" },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Dhruv Shricharan 2026
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
