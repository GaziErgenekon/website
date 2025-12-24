import { motion } from 'framer-motion'
import { heroContent, teamContact } from '../data/content'

const ComingSoon = () => {
    return (
        <div className="min-h-screen bg-ergenekon-dark">
            {/* Hero Section - Exactly like main site */}
            <section
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
                    <motion.p
                        className="font-exo text-white text-sm md:text-base tracking-[0.3em] 
                            uppercase mb-4 font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {heroContent.subtitle}
                    </motion.p>

                    {/* Main Title - Same style as Hero */}
                    <motion.h1
                        className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                                 font-bold text-white mb-6 tracking-wider"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="text-ergenekon-bright">ERGENEKON</span> R&D TEAM
                    </motion.h1>

                    {/* Coming Soon Message - Instead of description */}
                    <motion.div
                        className="mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="font-exo text-ergenekon-silver text-lg md:text-xl max-w-2xl mx-auto 
                            leading-relaxed mb-4 font-semibold">
                            Dijital Dünyada Güvenli bir gelecek için
                        </p>

                        {/* Coming Soon Badge */}
                        <div className="inline-flex items-center gap-3 px-6 py-3 
                                      bg-black/50 backdrop-blur-sm border border-ergenekon-red/30 
                                      rounded-full mt-4">
                            <span className="w-3 h-3 rounded-full bg-ergenekon-bright animate-pulse" />
                            <span className="font-orbitron text-ergenekon-bright text-lg md:text-xl tracking-wider">
                                SİTEMİZ YAKINDA GELECEK
                            </span>
                        </div>
                    </motion.div>

                    {/* Social Links - Instead of CTA buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {/* Instagram */}
                        <a
                            href={teamContact.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative min-w-[180px] px-6 py-3 
                                     bg-black/50 backdrop-blur-sm border border-ergenekon-red/30
                                     text-ergenekon-silver font-exo rounded-lg 
                                     transition-all duration-300 ease-out
                                     hover:border-ergenekon-bright hover:text-ergenekon-bright
                                     hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]
                                     flex items-center justify-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            Instagram
                        </a>

                        {/* LinkedIn */}
                        <a
                            href={teamContact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative min-w-[180px] px-6 py-3 
                                     bg-black/50 backdrop-blur-sm border border-ergenekon-red/30
                                     text-ergenekon-silver font-exo rounded-lg 
                                     transition-all duration-300 ease-out
                                     hover:border-ergenekon-bright hover:text-ergenekon-bright
                                     hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]
                                     flex items-center justify-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            LinkedIn
                        </a>

                        {/* Linktree */}
                        <a
                            href={teamContact.linktree}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative min-w-[180px] px-6 py-3 
                                     bg-ergenekon-bright text-white font-exo font-semibold rounded-lg 
                                     transition-all duration-300 ease-out
                                     hover:bg-ergenekon-red hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]
                                     flex items-center justify-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.953 15.066l-.038.086a.925.925 0 0 0 .042.064l.043-.064 3.292-3.293-1.291-1.29-3.293 3.293-.047.044.053-.047zm-3.47-1.549a.927.927 0 0 0 .656 1.583h1.895l-2.55 2.55c-.365.364-.365.955 0 1.32l.038.037a.933.933 0 0 0 1.32-.038l2.55-2.55v1.895c0 .516.42.936.936.936a.927.927 0 0 0 .656-1.583l-3.293-3.293-2.208.143zm7.546-10.517l-1.293 1.292 3.294 3.293-.043.064a.925.925 0 0 0 .042-.064l-.038-.086 3.293-3.293-1.292-1.292-3.292 3.292-.046.045-.053.046.045-.045.046-.046zm3.47 1.549a.927.927 0 0 0-.656-1.583H12.95l2.55-2.55a.933.933 0 0 0-.039-1.32l-.037-.038a.933.933 0 0 0-1.32.038l-2.55 2.55V.25a.936.936 0 0 0-.936-.936.927.927 0 0 0-.656 1.583l3.293 3.293 2.208-.143zM12 8.707l-3.293 3.293 3.293 3.293 3.293-3.293L12 8.707z" />
                            </svg>
                            Linktree
                        </a>
                    </motion.div>
                </div>

                {/* Decorative Elements - Same as Hero */}
                <div className="absolute bottom-0 left-0 right-0 h-32 
                        bg-gradient-to-t from-ergenekon-dark to-transparent" />
            </section>
        </div>
    )
}

export default ComingSoon
