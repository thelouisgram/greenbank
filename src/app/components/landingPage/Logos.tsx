import React, { useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';

const Logos: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Memoize the logo data to prevent it from being re-created on every render
  const logoData = useMemo(
    () => [
      { src: '/assets/upwork.png', width: 105.32, height: 32, alt: 'upwork' },
      { src: '/assets/petal.png', width: 90.48, height: 32, alt: 'petal' },
      { src: '/assets/rakuten.png', width: 107.53, height: 32, alt: 'rakuten' },
      { src: '/assets/nyt.png', width: 236.8, height: 32, alt: 'nyt' },
      { src: '/assets/vice.png', width: 101.71, height: 32, alt: 'vice' },
      { src: '/assets/dell.png', width: 100.57, height: 32, alt: 'dell' },
      { src: '/assets/upwork.png', width: 105.32, height: 32, alt: 'upwork' },
      { src: '/assets/petal.png', width: 90.48, height: 32, alt: 'petal' },
      { src: '/assets/rakuten.png', width: 107.53, height: 32, alt: 'rakuten' },
      { src: '/assets/nyt.png', width: 236.8, height: 32, alt: 'nyt' },
      { src: '/assets/vice.png', width: 101.71, height: 32, alt: 'vice' },
      { src: '/assets/dell.png', width: 100.57, height: 32, alt: 'dell' },
    ],
    []
  );

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let start: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const speed = 0.1;
      const offset = progress * speed;

      if (carousel) {
        carousel.style.transform = `translateX(-${offset}px)`;

        const firstLogo = carousel.querySelector('div');
        if (firstLogo && offset >= firstLogo.clientWidth) {
          carousel.appendChild(firstLogo);
          start = timestamp;
          carousel.style.transform = 'translateX(0)';
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [logoData]);

  return (
    <div className="overflow-hidden" style={{ width: '100%' }}>
      <div
        className="flex"
        ref={carouselRef}
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
      >
        {logoData.map((logo, index) => (
          <div
            key={index}
            className="px-4 md:px-6 flex-shrink-0"
            style={{ display: 'inline-block' }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
