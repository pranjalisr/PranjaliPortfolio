'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
const projects = [
  {
    title: 'Task Manager',
    description: 'A React-based task management application with drag-and-drop functionality.',
    tech: ['React', 'Redux', 'React DnD'],
    github: 'https://github.com/janedoe/task-manager',
  },
  {
    title: 'Weather App',
    description: 'A sleek weather application using real-time data from a weather API.',
    tech: ['React', 'OpenWeather API', 'Styled Components'],
    github: '',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with product management and cart functionality.',
    tech: ['Next.js', 'MongoDB', 'Stripe'],
    github: '',
  },
  {
    title: 'Blog CMS',
    description: 'A content management system for creating and managing blog posts.',
    tech: ['Vue.js', 'Firebase', 'Markdown'],
    github: '',
  },
  {
    title: 'Fitness Tracker',
    description: 'Mobile app for tracking workouts and monitoring fitness progress.',
    tech: ['React Native', 'GraphQL', 'TypeScript'],
    github: '',
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat application with private and group messaging features.',
    tech: ['Socket.io', 'Express', 'MongoDB'],
    github: '',
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