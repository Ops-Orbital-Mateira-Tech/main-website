import React from 'react'

const logos = [
  '/images/client-microsoft.svg',
  '/images/client-samsung.svg',
  '/images/client-google.svg',
  '/images/client-oxitec.svg',
  '/images/client-clutch.svg',
  '/images/client-goodfirms.svg',
]

export default function ClientsCarousel() {
  return (
    <div className="relative overflow-hidden">
      <div className="marquee" aria-hidden>
        <div className="marquee-inner">
          {[...logos, ...logos].map((src, i) => (
            <div key={`${src}-${i}`} className="flex-shrink-0 px-4 sm:px-6">
              <img
                src={src}
                alt="client logo"
                className="h-8 sm:h-10 md:h-12 object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee {
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .marquee-inner {
          display: flex;
          align-items: center;
          animation: marquee 22s linear infinite;
          will-change: transform;
        }
        .marquee:hover .marquee-inner {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        /* ensure duplicated content lines up */
        .marquee-inner > div { display: flex; align-items: center; }
      `}</style>
    </div>
  )
}

