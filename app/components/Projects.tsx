'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
const projects = [
  {
    title: 'FullStack E-Commerce with Admin Dashboard',
    description: 'Built a comprehensive analytics and customer management systems featuring real-time data visualization',
    tech: ['Typescript', 'Nextjs', 'Tailwind'],
    github: 'https://github.com/pranjalisr/ecommerce-store',
  },
  {
    title: ' Unique Job Tracking Platform',
    description: 'Developed a comprehensive job tracking application using React and Next.js, implementing 7 core modules.',
    tech: ['Nextjs', 'Reactjs', 'Typescript'],
    github: 'https://github.com/pranjalisr/job-tracker',
  },
  {
    title: 'Smart Competency Diagnostic (SIH’24 Project)',
    description: 'Designed adaptive learning pathways, adjusting based on user progress and feedback, offering 30+ micro-courses.',
    tech: ['Nextjs', 'PHP', 'Bootstrap'],
    github: 'https://github.com/pranjalisr/SIH1628Project/tree/master',
  },
  {
    title: 'REST API',
    description: 'Built a structured, scalable, and secure endpoints for creating, reading, updating, and deleting resources.',
    tech: ['JSON', 'MOCKDATA', 'JAVASCRIPT'],
    github: 'https://github.com/pranjalisr/RestApi',
  },
  {
    title: 'DevSecOps Pipeline',
    description: 'Built a DevOps pipeline with integrated security checks using tools like Snyk, Trivy, and OWASP ZAP. Automated vulnerability scanning and security testing.',
    tech: ['Docker', 'Expressjs', 'CI/CD'],
    github: 'https://github.com/pranjalisr/dev-sec-ops-pipeline',
  },
  {
    title: 'VR Experience',
    description: 'Allows users to interact with 3D environments and objects in a virtual space, manage VR content,enable seamless user interactions and personalize their experience.',
    tech: ['Nextjs', 'React', 'Expressjs'],
    github: 'https://github.com/pranjalisr/VR-Experience', 
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-600 text-white text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  <Github className="mr-2" size={20} />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects