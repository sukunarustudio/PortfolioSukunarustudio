import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MinimalistHeroProps {
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    line1: string;
    line2: string;
    line3: string;
  };
  socialLinks: { icon: LucideIcon; href: string; label: string }[];
  locationText: string;
  className?: string;
}

const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-foreground/60 transition-colors hover:text-foreground"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export const MinimalistHero = ({
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex min-h-[calc(100vh-72px)] w-full flex-col justify-between overflow-hidden bg-background p-6 md:p-12 font-sans',
        className
      )}
    >
      {/* Main Content Area */}
      <div className="relative grid w-full flex-grow grid-cols-1 items-center gap-8 md:grid-cols-3">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="z-20 order-3 md:order-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <p className="max-w-xs text-sm leading-relaxed text-foreground/80">{mainText}</p>
          <a
            href={readMoreLink}
            className="mt-4 inline-block text-sm font-medium text-foreground underline underline-offset-4"
          >
            Lihat Portofolio
          </a>
        </motion.div>

        {/* Center Image with Circle (Proportionate size) */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-[300px] md:h-[420px]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[220px] w-[220px] rounded-full bg-amber-400 md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px]"
          />
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-[240px] md:h-[320px] lg:h-[360px] w-auto object-contain"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />
        </div>

        {/* Right 3-line Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="z-20 order-2 md:order-3 flex justify-center md:justify-start text-center md:text-left"
        >
          <h1 className="text-6xl font-black text-foreground tracking-tight leading-none md:text-8xl lg:text-9xl lowercase">
            {overlayText.line1}
            <br />
            {overlayText.line2}
            <br />
            <em className="font-serif italic font-normal text-amber-500">{overlayText.line3}</em>
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full items-center justify-between pt-6 border-t border-border/40">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center space-x-5"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} label={link.label} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xs font-mono text-foreground/60 tracking-wider"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
