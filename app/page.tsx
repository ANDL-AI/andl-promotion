"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import Header from "@/components/header"
import HeroAndDemo from "@/components/hero"
import FAQ from "@/components/faq-dropdown-card"
import Footer from "@/components/footer"
import JourneyTimeline from "@/components/journey"

export default function Component() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const header = document.querySelector("header")
      const headerHeight = header ? header.offsetHeight : 0
      const top = section.offsetTop - headerHeight
      window.scrollTo({
        top: top,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Animated progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 overflow-hidden" style={{ scaleX }} />

      {/* Content container */}
      <div className="relative z-10">
        <Header scrollToSection={scrollToSection} />

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <HeroAndDemo />
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FAQ />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  )
}

