import { heroContent } from "../../constants";
import ParticleBackground from "../common/ParticleBackground";
import Button from "../ui/Button";

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#about-us");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-[url('/hero-bg.jpg')] min-h-screen flex-center 
                 bg-cover bg-center bg-no-repeat"
    >
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] 
                    bg-primary/20 blur-[120px] rounded-full animate-pulse-slow"
      />

      <div className="relative text-center">
        <img
          src="/logo-full.png"
          alt="Ergenekon Logo"
          className="w-48 sm:w-64 md:w-80 object-contain mx-auto mb-4 sm:mb-6 animate-pulse-slow hover:scale-110 hover:rotate-3 
                             transition-all duration-700 ease-out cursor-pointer
                             drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]
                             hover:drop-shadow-[0_0_50px_rgba(220,38,38,0.9)]"
        />

        <p
          className="font-exo text-white font-bold text-xs sm:text-sm md:text-base tracking-[0.3em] 
                    uppercase mb-3 sm:mb-4 animate-fade-in px-4
                    drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]
                    hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]
                    hover:tracking-[0.4em] transition-all duration-300 cursor-default"
        >
          {heroContent.subtitle}
        </p>

        <h1
          className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 
                             font-bold text-white mb-4 sm:mb-6 tracking-tight px-4
                             transition-all duration-500 ease-out
                             hover:tracking-widest cursor-default
                             group"
        >
          {heroContent.title.split(" ").map((word, index, arr) => (
            <span
              key={index}
              className={`inline-block transition-all duration-300 ${
                index !== arr.length - 1 ? "mr-3 lg:mr-5" : ""
              } 
                                      ${
                                        index === 0
                                          ? "text-primary drop-shadow-[0_0_20px_rgba(220,38,38,0.8)] hover:drop-shadow-[0_0_35px_rgba(220,38,38,1)]"
                                          : "text-white hover:text-ergenekon-silver"
                                      }`}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          className="font-exo text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto 
                    mb-8 sm:mb-3 leading-relaxed font-bold px-4
                    hover:text-white transition-colors duration-300"
        >
          {heroContent.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <a href="#projects">
            <Button variant="default" colorMode="primary" size="lg">
              {heroContent.ctaPrimary}
            </Button>
          </a>

          <a href="#contact">
            <Button variant="default" colorMode="primary" size="lg">
              {heroContent.ctaSecondary}
            </Button>
          </a>
        </div>

      </div>
        <Button
          onClick={scrollToNext}
          variant="elevated"
          colorMode="primary"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-50 "
          aria-label="Scroll to next section"
        >
          <svg
            className="w-6 h-6 transition-colors duration-300"
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
        </Button>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 
                    bg-gradient-to-t from-ergenekon-dark to-transparent"
      />
    </section>
  );
};

export default Hero;
