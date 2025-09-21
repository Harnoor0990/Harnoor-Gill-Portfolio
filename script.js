function showContent(type) {
  const contentArea = document.getElementById("contentArea");
  const contentBox = document.getElementById("contentBox");

  let content = "";

  switch (type) {
    case "courses":
      content = `
                <h2>Relevant Coursework</h2>
                <div class="course-section">
                    <h3>Development & Programming</h3>
                    <p>Front-End Development, Back-End Development, Full Stack Development, Secure Coding & Testing, Service Manage Software Dev, Software Develop Fundamentals, Intermediate Software Development, Application Design & Delivery</p>
                </div>
                <div class="course-section">
                    <h3>Security & Infrastructure</h3>
                    <p>Security Foundation, Cloud Infrastructure and Development, Develop in DevOps Environment, Network & Troubleshooting</p>
                </div>
                <div class="course-section">
                    <h3>Data & Communication</h3>
                    <p>Transforming Data to Databases, Communication for the Workplace, Communication Strategies, Comm Systems Innov Thinking, IT Fundamentals, Customer & User Experience Development</p>
                </div>
            `;
      break;

    case "academics":
      content = `
        <h2>Academic Records</h2>
        <div class="grade-display">
            <h3>📄 My Academic GPA</h3>
            <div class="grade-image-container">
                <img src="images/grades.jpg" alt="Academic Grades" class="grade-image">
            </div>
        </div>
    `;
      break;

    case "projects":
      content = `
                <h2>Projects</h2>
                <div class="coming-soon">
                    <h3> New Projects Coming Soon!</h3>
                    <p>I'm currently working on several exciting IT projects that will showcase my development skills and technical expertise.</p>
                    <ul style="list-style: none; margin-top: 20px;">
                        <li>🔸 Web Application Development</li>
                        <li>🔸 Database Management System</li>
                        <li>🔸 Full-Stack Application</li>
                        <li>🔸 Cloud-Based Solution</li>
                    </ul>
                </div>
            `;
      break;

    case "skills":
      content = `
                <h2>Technical Skills</h2>
                <div class="course-section">
                    <h3>Programming Languages & Technologies</h3>
                    <div class="skills-grid">
                        <span class="skill-tag">HTML5</span>
                        <span class="skill-tag">CSS3</span>
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">Python</span>
                        <span class="skill-tag">MySQL</span>
                        <span class="skill-tag">GIT</span>
                    </div>
                </div>
                <div class="course-section">
                    <h3>Development Tools & Platforms</h3>
                    <div class="skills-grid">
                        <span class="skill-tag">Visual Studio Code</span>
                        <span class="skill-tag">Virtual Machines</span>
                        <span class="skill-tag">Version Control</span>
                        <span class="skill-tag">Debugging Tools</span>
                        <span class="skill-tag">Agile Development</span>
                        <span class="skill-tag">DevOps Environment</span>
                    </div>
                </div>
                <div class="course-section">
                    <h3>Core Competencies</h3>
                    <div class="skills-grid">
                        <span class="skill-tag">Full-Stack Development</span>
                        <span class="skill-tag">Database Design</span>
                        <span class="skill-tag">Cloud Infrastructure</span>
                        <span class="skill-tag">Security Foundation</span>
                        <span class="skill-tag">Network Troubleshooting</span>
                        <span class="skill-tag">Software Testing</span>
                    </div>
                </div>
            `;
      break;
  }

  contentBox.innerHTML = content;
  contentArea.style.display = "block";

  // Smooth scroll to content
  setTimeout(() => {
    contentArea.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}

// Add click handlers to navigation items
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const sections = ["courses", "academics", "projects", "skills"];

  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      showContent(sections[index]);
    });
  });

  // Add hover effects to circles
  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    circle.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.05)";
    });

    circle.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
});
