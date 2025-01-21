'use client'

// import Image from 'next/image'
import { motion } from 'framer-motion'
import Image from 'next/image';


const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <Image
              src="/image.jpg"
              alt="Pranjali"
              width={400}
              height={400}
              className="rounded-full mx-auto shadow-lg"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3"
          >
            <p className="text-lg mb-4">
              Welcome to my portfolio website, where technology meets creativity! As a passionate Full Stack Developer and DevOps Engineer, I specialize in building seamless, high-performance applications while ensuring robust and efficient deployment pipelines. From designing engaging user interfaces to architecting scalable backends and managing infrastructure, my expertise bridges the gap between development and operations to deliver end-to-end solutions that thrive in real-world environments.
            </p>
            <p className="text-lg mb-4">
              With a strong command over modern tech stacks like React, Node.js, Python, and Docker, combined with proficiency in cloud platforms such as AWS and Kubernetes, I bring ideas to life with precision and efficiency. My approach centers around clean code, automation, and collaboration, leveraging CI/CD practices to accelerate development cycles without compromising quality. Whether it's creating a feature-rich web application or ensuring smooth deployments, my work embodies reliability and innovation at its core.
            </p>
            <p className="text-lg">
             Every project on this portfolio reflects my dedication to solving complex challenges through smart and sustainable solutions. I thrive on crafting systems that are not only functional but also secure, scalable, and optimized for performance. Explore my portfolio to witness a blend of cutting-edge development and streamlined DevOps practices, and let's collaborate to bring your next big idea to life!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
