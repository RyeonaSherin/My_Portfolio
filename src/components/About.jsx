function About() {
  return (
    <section className="about" id="about">

      <div className="about-heading">
        <p className="section-title">A little about me</p>
        <h2>More than just<br />a developer.</h2>
      </div>

      <div className="about-layout">

        <div className="about-text">
          <p>
            I'm Ryeona Sherin R, an Information Technology student
            passionate about creating useful, modern and user-friendly
            digital experiences.
          </p>

          <p>
            My main focus is Full Stack Development, while I'm also
            exploring Artificial Intelligence and Data Analytics.
            I enjoy turning ideas into practical projects and
            continuously learning new technologies.
          </p>

          <div className="about-tags">
            <span>💻 Full Stack</span>
            <span>🤖 AI Explorer</span>
            <span>📊 Data Analytics</span>
          </div>
        </div>

        <div className="about-stats">

          <div className="stat-card">
            <strong>10+</strong>
            <span>Projects</span>
          </div>

          <div className="stat-card">
            <strong>3</strong>
            <span>Internships</span>
          </div>

          <div className="stat-card">
            <strong>1</strong>
            <span>Hackathon Prize</span>
          </div>

          <div className="stat-card">
            <strong>∞</strong>
            <span>Things to Learn</span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About