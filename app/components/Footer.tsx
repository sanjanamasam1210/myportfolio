// components/Footer.tsx
'use client';

import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

const Footer = () => {
  const links: FooterLink[] = [
    { label: 'GitHub', href: 'https://github.com/sanjanamasam1210' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sanjana-masam/' },
    { label: 'Email', href: 'mailto:sanjanamasam1210@gmail.com' },
    { label: 'Resume', href: 'https://drive.google.com/file/d/154glOMfYj11V1FnRM-jueIm4TrSK37I9/view?usp=sharing' }
  ];

  return (
    <footer className="bottom-0 mt-10 w-full py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wider hover:underline hover:underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm text-muted-foreground tracking-wide text-center">
          © {new Date().getFullYear()} sanjanamasam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
