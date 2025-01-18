const Footer = () => {
    return (
      <footer className="py-8 px-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p className="mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  