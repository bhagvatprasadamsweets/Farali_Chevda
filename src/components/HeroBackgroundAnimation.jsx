import { motion } from 'framer-motion';

export default function HeroBackgroundAnimation() {
  // Mobile-safe, responsive floating particles
  // On small screens, we keep particles smaller and placed along margins to prevent obscuring text/buttons
  const particles = [
    // Left side particles
    { id: 1, type: 'banana-baton', top: '10%', left: '4%', sizeMobile: 18, sizeDesktop: 26, duration: 6, delay: 0, rotate: 35 },
    { id: 2, type: 'sparkle', top: '28%', left: '8%', sizeMobile: 12, sizeDesktop: 16, duration: 5.5, delay: 1.5, rotate: 15 },
    { id: 3, type: 'orb', top: '48%', left: '3%', sizeMobile: 8, sizeDesktop: 12, duration: 7, delay: 2.2, rotate: 0 },
    { id: 4, type: 'banana-baton', top: '72%', left: '7%', sizeMobile: 16, sizeDesktop: 24, duration: 7.5, delay: 0.8, rotate: -25 },
    
    // Right side particles (visible on all screens, tucked neatly)
    { id: 5, type: 'sparkle', top: '8%', right: '5%', sizeMobile: 12, sizeDesktop: 18, duration: 6.2, delay: 1.8, rotate: 45 },
    { id: 6, type: 'banana-baton', top: '22%', right: '4%', sizeMobile: 18, sizeDesktop: 28, duration: 6.8, delay: 0.5, rotate: 60 },
    { id: 7, type: 'orb', top: '45%', right: '3%', sizeMobile: 9, sizeDesktop: 14, duration: 7.2, delay: 2.6, rotate: 0 },
    { id: 8, type: 'banana-baton', top: '78%', right: '6%', sizeMobile: 16, sizeDesktop: 24, duration: 8, delay: 1.2, rotate: 10 },
    
    // Center & Ambient particles (Desktop / Tablet only to keep mobile text ultra-clean)
    { id: 9, type: 'sparkle', top: '15%', left: '48%', sizeDesktop: 16, duration: 6.5, delay: 2.0, rotate: 90, desktopOnly: true },
    { id: 10, type: 'orb', top: '84%', left: '42%', sizeDesktop: 12, duration: 7.0, delay: 3.0, rotate: 0, desktopOnly: true },
  ];

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 transform-gpu"
    >
      {/* Mobile-Optimized Floating Golden Particles */}
      {particles.map((p) => {
        const style = {
          top: p.top,
          ...(p.left ? { left: p.left } : {}),
          ...(p.right ? { right: p.right } : {}),
        };

        return (
          <motion.div
            key={p.id}
            style={style}
            animate={{
              y: [0, -16, 0],
              x: [0, p.id % 2 === 0 ? 8 : -8, 0],
              rotate: [p.rotate, p.rotate + 30, p.rotate],
              opacity: [0.35, 0.8, 0.35],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
            className={`absolute ${p.desktopOnly ? 'hidden sm:block' : 'block'}`}
          >
            {p.type === 'banana-baton' || p.type === 'sev-arc' ? (
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-6 sm:h-6 drop-shadow-[0_1px_3px_rgba(229,163,35,0.35)]"
              >
                <rect
                  x="6"
                  y="13"
                  width="20"
                  height="5"
                  rx="2.5"
                  transform="rotate(-25 16 15)"
                  fill="#E5A323"
                  className="opacity-75"
                />
              </svg>
            ) : p.type === 'sparkle' ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 sm:w-4 sm:h-4 drop-shadow-[0_0_5px_rgba(242,140,40,0.4)]"
              >
                <path
                  d="M12 2 Q12 12 2 12 Q12 12 12 22 Q12 12 22 12 Q12 12 12 2 Z"
                  fill="#F28C28"
                  className="opacity-70"
                />
              </svg>
            ) : (
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-tr from-[#E5A323] to-[#FFD66B] shadow-[0_0_8px_rgba(229,163,35,0.5)] opacity-60" />
            )}
          </motion.div>
        );
      })}

      {/* 7. Subtle Flowing Light Wave along Bottom Edge */}
      <motion.div
        animate={{
          x: ['-5%', '5%', '-5%'],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-2 inset-x-0 w-[110%] h-6 sm:h-8 bg-gradient-to-r from-transparent via-[#E5A323]/20 to-transparent blur-sm sm:blur-md"
      />
    </div>
  );
}
