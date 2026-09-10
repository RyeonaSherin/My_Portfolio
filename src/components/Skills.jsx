function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Python",
    "MySQL",
    "Power BI",
    "Tableau"
  ]

  return (
    <section className="skills" id="skills">

      <div className="skills-heading">
        <p className="section-title">My Toolkit</p>
        <h2>Technologies I work with.</h2>
        <p>
          Tools and technologies I've explored while building
          projects and developing my skills.
        </p>
      </div>

      <div className="skills-cloud">
        {skills.map((skill, index) => (
          <div
            className={`skill-pill skill-${index + 1}`}
            key={skill}
          >
            <span>✦</span>
            {skill}
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills