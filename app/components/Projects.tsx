'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
const projects = [
  {
    title: 'FullStack E-Commerce with Admin Dashboard',
    description: 'Built a comprehensive analytics and customer management systems featuring real-time data visualization',
    tech: ['Typescript', 'Nextjs', 'Tailwing'],
    deployment: 'https://ecommerce-store-omega-jet.vercel.app/',
  },
  {
    title: ' Multi-Cloud Infrastructure Management',
    description: 'Set up infrastructure across AWS, implemented a unified dashboard using Prometheus and Grafana for cross-cloud monitoring.',
    tech: ['Terraform', 'Grafana', 'Azure'],
    github: 'https://github.com/pranjalisr/Multi-Cloud-Infrastructure-Management',
  },
  {
    title: 'Kubernetes Cluster with Advanced Monitoring',
    description: 'Deployed a Kubernetes cluster using kubeadm or a managed service like EKS or GKE can also be used. Implemented tools like Prometheus, Grafanafor metrics, logging, and tracing.',
    tech: ['K8', 'Terraform', 'Grafana'],
    github: 'https://github.com/pranjalisr/k8s-cluster-advanced-monitoring',
  },
  {
    title: 'Serverless application with CI/CD',
    description: 'Built a serverless web application using AWS Lambda. Set up a CI/CD pipeline with GitHub Actions or Bitbucket Pipelines to deploy changes automatically.',
    tech: ['CI/CD', 'Typescript', 'JAVASCRIPT'],
    github: 'https://github.com/pranjalisr/Serverless-CICD-Appn',
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