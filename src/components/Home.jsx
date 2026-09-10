function Home() {
  return (
    <section className="home" id="home">

      <div className="home-glow glow-one"></div>
      <div className="home-glow glow-two"></div>

      <div className="home-content">

        <p className="home-label">
          ✦ IT STUDENT · DEVELOPER · CREATIVE THINKER
        </p>

        <h1>
          Turning ideas
          <br />
          into <span>digital experiences.</span>
        </h1>

        <p className="home-description">
          I'm Ryeona Sherin R — a developer passionate about
          building modern web applications and exploring
          AI-powered solutions.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work ↗
          </a>

          <a href="#contact" className="secondary-btn">
            Let's Connect
          </a>
        </div>

      </div>

      <div className="home-side">

        <div className="floating-card">
          <span>Currently building</span>
          <h3>Web + AI</h3>
          <p>Turning curiosity into projects.</p>
        </div>

        <div className="tech-circle">
              <div className="initial-r">R</div>
          <div>React</div>
          <div>JS</div>
          <div>Python</div>
          <div>SQL</div>
        </div>

      </div>

      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </section>
  )
}

export default Home