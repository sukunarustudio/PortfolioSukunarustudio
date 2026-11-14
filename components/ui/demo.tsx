import React from 'react';
import { Instagram, Send, Twitter, Youtube } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';

const MinimalistHeroDemo = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/sukunarustudio', label: 'Instagram' },
    { icon: Send, href: 'https://wa.me/6289519203345', label: 'WhatsApp' },
    { icon: Twitter, href: 'https://threads.net/@sukunarustudio', label: 'Threads' },
    { icon: Youtube, href: 'https://youtube.com/@sukunarustudio', label: 'YouTube' },
  ];

  return (
    <MinimalistHero
      mainText="Desain poster cetak editorial, visual media sosial, dan software kreator."
      readMoreLink="#karya"
      imageSrc="/assets/creator-portrait.png"
      imageAlt="Portrait Kreator Sukunaru Studio"
      overlayText={{
        line1: 'less',
        line2: 'is',
        line3: 'more.',
      }}
      socialLinks={socialLinks}
      locationText="Indonesia • GMT+7"
    />
  );
};

export default MinimalistHeroDemo;
