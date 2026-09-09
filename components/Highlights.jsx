import React from 'react'

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="about_us py-20 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/highlights/highlight.webp')" }}>
      {/* Dark overlay for better contrast if needed, but since user said no bg color, I'll keep it mostly transparent or a very light overlay if text is bright. Wait, the SS has dark text on light cards, and gold text on dark background. I will add a subtle dark overlay so the gold text is visible, just in case, but let me check if there was an overlay originally. The user said "show koi bg colo na use kre". So I won't use a bg color. */}
      
      <div className="container-fluid max-w-[1300px] mx-auto relative z-10 py-[70px]">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-[#004B87] text-center" data-aos="fade-up" data-aos-duration="1000" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '10px' }}>
          PROJECT HIGHLIGHTS & USPS
        </h2>
        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-3 mb-8" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-16 h-[1px] bg-[#004B87]"></div>
          <div className="w-2 h-2 rounded-full bg-[#004B87] mx-3"></div>
          <div className="w-16 h-[1px] bg-[#004B87]"></div>
        </div>
        
        {/* 6 Highlights Cards Matching User Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                
          {/* Highlight 1: Lokhandwala Address */}
          <div className="highlight-card gradient-blue p-6 sm:p-7 rounded-2xl bg-[#eef5fc] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite' }}>
                  <span className="text-[38px] sm:text-[44px] leading-none select-none" role="img" aria-label="Lokhandwala Address">🏙️</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Lokhandwala Address</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Mumbai's most iconic lifestyle circle
              </p>
          </div>

          {/* Highlight 2: Spacious Balconies */}
          <div className="highlight-card gradient-green p-6 sm:p-7 rounded-2xl bg-[#eefcee] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0.1s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.2s' }}>
                  <span className="text-[38px] sm:text-[44px] leading-none select-none" role="img" aria-label="Spacious Balconies">🌅</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Spacious Balconies</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Private outdoor spaces with city views
              </p>
          </div>

          {/* Highlight 3: 750–1700 Sq.Ft */}
          <div className="highlight-card gradient-purple p-6 sm:p-7 rounded-2xl bg-[#f5eefc] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0.2s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.4s' }}>
                  <span className="text-[38px] sm:text-[44px] leading-none select-none" role="img" aria-label="750–1700 Sq.Ft">📐</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>750–1700 Sq.Ft</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Smart to expansive layouts for every need
              </p>
          </div>

          {/* Highlight 4: Purvankara Pedigree */}
          <div className="highlight-card gradient-amber p-6 sm:p-7 rounded-2xl bg-[#fdf8ee] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.6s' }}>
                  <span className="text-[38px] sm:text-[44px] leading-none select-none" role="img" aria-label="Purvankara Pedigree">🏛️</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Purvankara Pedigree</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  45+ years of trusted delivery track record
              </p>
          </div>

          {/* Highlight 5: Green Landscaping */}
          <div className="highlight-card gradient-red p-6 sm:p-7 rounded-2xl bg-[#fceedf] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0.1s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.8s' }}>
                  <span className="text-[38px] sm:text-[44px] leading-none select-none" role="img" aria-label="Green Landscaping">🌿</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Green Landscaping</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Curated gardens and open green spaces
              </p>
          </div>

          {/* Highlight 6: Metro Connectivity */}
          <div className="highlight-card gradient-indigo p-6 sm:p-7 rounded-2xl bg-[#eef0fc] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0.2s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '1s' }}>
                  <span className="text-[38px] sm:text-[44px] leading-none select-none" role="img" aria-label="Metro Connectivity">🚇</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Metro Connectivity</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Minutes from metro & railway stations
              </p>
          </div>

        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  )
}

export default Highlights
