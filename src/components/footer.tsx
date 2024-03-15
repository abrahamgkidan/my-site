import React from "react";

const FOOTER_LINKS = [
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Speaking", href: "/speaking" },
  { title: "Uses", href: "/uses" },
];

const Footer: React.FC = () => {
  return (
    <footer className="mt-32 flex-none">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7x1 lg:px-8">
          <div className="border-t border-zinc-200 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <p className="text-sm text-zinc-400 dark:text-zinc-500">
                    &copy; {new Date().getFullYear()} Abraham Gebrekidan. All
                    rights reserved.
                  </p>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {FOOTER_LINKS.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="transition hover:text-teal-500 dark:hover:text-teal-400"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
