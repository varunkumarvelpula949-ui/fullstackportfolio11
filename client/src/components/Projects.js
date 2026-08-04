function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>Personal Portfolio Website</h3>
          <p>
            A responsive portfolio website built using React, HTML and CSS.
          </p>
        </div>

        <div className="project-card">
          <h3>Face Recognition System</h3>
          <p>
            A Python project that recognizes faces using machine learning.
          </p>
        </div>

        <div className="project-card">
          <h3>Student Management System</h3>
          <p>
            A CRUD application built with the MERN Stack.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;