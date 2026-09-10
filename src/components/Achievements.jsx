function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements-heading">
        <p className="section-title">My Achievements</p>
        <h2>Achievements & Certifications</h2>
        <p>
          A few milestones and certifications I have earned throughout
          my learning journey.
        </p>
      </div>

      <div className="achievements-container">

        <div className="achievement-card">
          <span>🏆</span>
          <h3>TriSquadathon Hackathon</h3>
          <p>Secured 3rd Prize for the project “Hands 2 Voice”.</p>
        </div>

        <div className="achievement-card">
          <span>📜</span>
          <h3>Full Stack Development</h3>
          <p>Completed internship and gained practical web development experience.</p>
        </div>

        <div className="achievement-card">
          <span>🎨</span>
          <h3>UI/UX Design</h3>
          <p>Completed UI/UX internship and worked on design-based tasks.</p>
        </div>

        <div className="achievement-card">
          <span>📊</span>
          <h3>Data Analytics</h3>
          <p>Gained practical exposure to Excel, Power BI, Tableau and SQL.</p>
        </div>

      </div>
    </section>
  )
}

export default Achievements