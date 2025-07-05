'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Pranjali Srivastava
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-blue-400 mb-8"
        >
          DevOps & Full Stack Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl mb-12 max-w-2xl mx-auto"
        >
          Crafting seamless digital experiences with expertise in Full Stack Development and DevOps innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          {[
            { Icon: Github, href: 'https://github.com/pranjalisr' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/pranjali-sr25/' },
           // { Icon: Twitter, href: 'https://x.com/pranjalliiii' },
            { Icon: Mail, href: 'mailto:pranjalisr25@gmail.com' },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Icon size={32} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero