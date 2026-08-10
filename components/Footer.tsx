import Link from "next/link";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hayamaj" },
  { label: "X", href: "https://x.com/hayalikethesong" },
  { label: "Gmail", href: "mailto:hayamaj02@gmail.com" },
  { label: "GitHub", href: "https://github.com/hayamaj" },
];

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-6">
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-neutral-400">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="underline decoration-1 underline-offset-4 hover:text-black"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <p className="text-xs font-light text-neutral-400">
          Haya AlMajali &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
