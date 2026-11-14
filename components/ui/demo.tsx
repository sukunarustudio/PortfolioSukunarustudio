import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: 'HOME', href: '#top' },
    { label: 'PRODUK', href: '#produk' },
    { label: 'KARYA', href: '#karya' },
    { label: 'KONTAK', href: '#sosmed' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/sukunarustudio' },
    { icon: Twitter, href: 'https://twitter.com/sukunarustudio' },
    { icon: Facebook, href: 'https://facebook.com/sukunarustudio' },
    { icon: Linkedin, href: 'https://linkedin.com/company/sukunarustudio' },
  ];

  return (
    <MinimalistHero
      logoText="SUKUNARU."
      navLinks={navLinks}
      mainText="Sukunaru Studio mengerjakan poster cetak berkarakter editorial, identitas visual media sosial, serta software utilitas kreator."
      readMoreLink="#karya"
      imageSrc="/assets/creator-portrait.png"
      imageAlt="Portrait Sukunaru Studio Creator"
      overlayText={{
        part1: 'visual',
        part2: 'craft.',
      }}
      socialLinks={socialLinks}
      locationText="Indonesia • GMT+7"
    />
  );
};

export default MinimalistHeroDemo;
