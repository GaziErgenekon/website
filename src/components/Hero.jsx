import { heroContent } from '../data/content'

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-hero-pattern 
                 bg-cover bg-center bg-no-repeat"
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-ergenekon-dark/80 via-ergenekon-dark/60 to-ergenekon-dark" />

            {/* Red Glow Effect - Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] 
                    bg-ergenekon-red/20 blur-[120px] rounded-full" />

            {/* Content */}
            <div className="relative z-10 section-container text-center">
                {/* Subtitle */}
                <p className="font-exo text-ergenekon-bright text-sm md:text-base tracking-[0.3em] 
                    uppercase mb-4 animate-fade-in">
                    {heroContent.subtitle}
                </p>

                {/* Main Title - with hover letter spacing transition */}
                <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                             font-bold text-white mb-6 tracking-wider
                             transition-all duration-500 ease-out
                             hover:tracking-[0.15em] cursor-default
                             group">
                    {heroContent.title.split(' ').map((word, index) => (
                        <span
                            key={index}
                            className={`inline-block transition-all duration-300 
                                      ${index === 0
                                    ? 'text-ergenekon-bright group-hover:drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]'
                                    : 'text-white group-hover:text-ergenekon-silver'}`}
                        >
                            {word}{' '}
                        </span>
                    ))}
                </h1>

                {/* Description */}
                <p className="font-exo text-ergenekon-silver text-lg md:text-xl max-w-2xl mx-auto 
                    mb-10 leading-relaxed">
                    {heroContent.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Primary Button with Pulse Animation */}
                    <a
                        href="#projects"
                        className="relative min-w-[180px] px-8 py-3 
                                 bg-ergenekon-bright text-white font-semibold rounded-lg 
                                 transition-all duration-300 ease-out
                                 hover:bg-ergenekon-red hover:shadow-[0_0_30px_rgba(220,38,38,0.7)]
                                 active:scale-95
                                 overflow-hidden group"
                    >
                        {/* Pulse Ring Animation */}
                        <span className="absolute inset-0 rounded-lg 
                                       animate-ping bg-ergenekon-bright/50
                                       pointer-events-none"
                            style={{ animationDuration: '2s' }} />

                        {/* Inner Glow */}
                        <span className="absolute inset-0 rounded-lg 
                                       bg-gradient-to-r from-transparent via-white/20 to-transparent
                                       opacity-0 group-hover:opacity-100
                                       transition-opacity duration-300" />

                        <span className="relative z-10">{heroContent.ctaPrimary}</span>
                    </a>

                    {/* Secondary Button */}
                    <a
                        href="#contact"
                        className="btn-secondary min-w-[180px]"
                    >
                        {heroContent.ctaSecondary}
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg
                        className="w-6 h-6 text-ergenekon-silver"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 
                    bg-gradient-to-t from-ergenekon-dark to-transparent" />
        </section>
    )
}

export default Hero
