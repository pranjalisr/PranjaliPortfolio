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
              src="/dp2.jpeg"
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
            Welcome to my portfolio! I’m a Full Stack Developer passionate about building high-performance apps and seamless deployment pipelines. From crafting intuitive UIs with React to deploying scalable backends with Node.js, Docker, and AWS, I bridge the gap between development and operations.            </p>
            <p className="text-lg mb-4">
            I enjoy turning complex problems into simple, elegant solutions. My work thrives at the intersection of usability, performance, and automation.
            </p>
            <p className="text-lg mb-4">
            With a focus on clean code, automation, and CI/CD practices, I deliver secure, scalable, and efficient solutions. Explore my projects to see how I turn ideas into reliable, real-world applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
