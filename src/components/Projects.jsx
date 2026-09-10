function Projects() {
  const projects = [
    {
      category: "Web Application",
      title: "Hospital Management System",
      description:
        "A web-based system for patient booking and managing doctor, admin, and user workflows.",
      technologies: ["Flask", "Python", "MySQL"],
    },
    {
      category: "E-Commerce",
      title: "LuxeWear",
      description:
        "A fashion e-commerce application with authentication, product browsing, cart functionality, and user interactions.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
    },
    {
      category: "Web Application",
      title: "Weather App",
      description:
        "A weather application that provides current weather information and a 5-day forecast using weather API data.",
      technologies: ["JavaScript", "API", "HTML", "CSS"],
    },
    {
      category: "Data Analytics",
      title: "HR Analytics Dashboard",
      description:
        "An interactive dashboard designed to analyze HR data and present useful insights through visualizations.",
      technologies: ["Power BI", "Excel", "Data Analytics"],
    },
    {
  category: "UI/UX Design",
  title: "Fitness App",
  description:
    "A fitness app interface designed in Figma with a clean and user-friendly experience for tracking fitness activities.",
  technologies: ["Figma", "UI/UX Design"],
},
{
  category: "Web Application",
  title: "SpendWise Expense Tracker",
  description:
    "An expense tracking application designed to help users record, manage, and monitor their daily expenses.",
  technologies: ["JavaScript", "HTML", "CSS"],
},
  ]

  return (
    <section className="projects" id="projects">

      <div className="projects-heading">
        <p className="section-title">My Work</p>

        <h2>Featured Projects</h2>

        <p>
          Here are some of the projects I have worked on while
          learning and exploring different technologies.
        </p>
      </div>

      <div className="projects-container">

        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <button>View Project</button>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects