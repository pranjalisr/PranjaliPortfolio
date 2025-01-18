'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Resume</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg mb-8">
            Download my resume to learn more about my skills, experience, and qualifications in DevOps and Full Stack Development.
          </p>
          <motion.a
            href="/Pranjali_Srivastava_Resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume

