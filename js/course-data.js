// Get URL parameter
const urlParams = new URLSearchParams(window.location.search);
const courseKey = urlParams.get('course');

// Course Data
const courses = {
  webdev: {
    title: "Web Development",
    desc: "Master front‑end and back‑end development to build modern web applications.",
    duration: "6 Weeks",
    mode: "Online (Self‑paced)",
    level: "Beginner to Intermediate",
    requirements: "Basic computer knowledge",
    outcome: "Learn HTML, CSS, JavaScript, and frameworks.",
    image: "assets/images/course1.jpg",
    faculty: {
      name: "Prof. Ananya Mehta",
      expertise: "Full‑Stack Web Development, UI/UX Design",
      experience: "8+ years",
      about: "Ananya helps students master coding through real projects and creative teaching.",
      email: "ananya@fdalearning.com",
      image: "assets/images/faculty1.jpg"
    },
    modules: [
      {
        title: "Introduction to Web Development",
        topics: [
          "How the web works",
          "HTML/CSS/JS basics",
          "Setting up your environment"
        ]
      },
      {
        title: "HTML & CSS Fundamentals",
        topics: [
          "HTML5 structure",
          "Responsive layouts",
          "Portfolio project"
        ]
      },
      {
        title: "JavaScript & DOM Manipulation",
        topics: [
          "Syntax, loops, events",
          "Dynamic UI",
          "To‑Do App project"
        ]
      },
      {
        title: "Front‑End Frameworks",
        topics: [
          "Bootstrap basics",
          "React introduction",
          "Mini React project"
        ]
      },
      {
        title: "Back‑End Development",
        topics: [
          "Node.js fundamentals",
          "Express APIs",
          "Frontend‑Backend connection"
        ]
      },
      {
        title: "Final Project & Deployment",
        topics: [
          "Complete web app",
          "Testing & GitHub",
          "Deploying to Netlify"
        ]
      }
    ]
  },

  datasci: {
    title: "Data Science",
    desc: "Learn data handling, visualization, and machine learning with Python.",
    duration: "8 Weeks",
    mode: "Hybrid (Online + Live Sessions)",
    level: "Intermediate",
    requirements: "Basic programming knowledge (Python preferred)",
    outcome: "Perform data analysis, visualization, and predictive modeling.",
    image: "assets/images/course2.jpg",
    faculty: {
      name: "Dr. Rahul Verma",
      expertise: "Machine Learning, AI, and Data Analytics",
      experience: "10+ years",
      about: "Rahul brings deep insights from research and industry to make data learning practical and exciting.",
      email: "rahul@fdalearning.com",
      image: "assets/images/faculty2.jpg"
    },
    modules: [
      {
        title: "Introduction to Data Science",
        topics: ["Data workflow", "Python libraries", "Jupyter setup"]
      },
      {
        title: "Data Cleaning and Preparation",
        topics: ["Handling missing data", "Data wrangling", "Feature engineering"]
      },
      {
        title: "Data Visualization",
        topics: ["Matplotlib, Seaborn", "Dashboard creation", "Storytelling with data"]
      },
      {
        title: "Statistics and Probability",
        topics: ["Descriptive stats", "Distributions", "Hypothesis testing"]
      },
      {
        title: "Machine Learning Essentials",
        topics: ["Supervised/Unsupervised learning", "Scikit-learn", "Model evaluation"]
      },
      {
        title: "Capstone Project",
        topics: ["End-to-end data analysis", "Report writing", "Presentation"]
      }
    ]
  },

  html: {
    title: "Intro to HTML",
    desc: "Get started with the building blocks of every web page using HTML.",
    duration: "1 Week",
    mode: "Online (Free)",
    level: "Beginner",
    requirements: "No prior coding experience",
    outcome: "Write structured HTML and understand page semantics.",
    image: "assets/images/html-course.jpg",
    faculty: {
      name: "Ms. Kavita Sharma",
      expertise: "Web Fundamentals, Accessibility, Semantics",
      experience: "5+ years",
      about: "Kavita specializes in teaching web fundamentals to absolute beginners with clarity.",
      email: "kavita@fdalearning.com",
      image: "assets/images/faculty_html.jpg"
    },
    modules: [
      {
        title: "HTML Basics",
        topics: ["What is HTML?", "Tags & Elements", "Attributes"]
      },
      {
        title: "Text & Links",
        topics: ["Headings, paragraphs", "Anchor tags", "Lists"]
      },
      {
        title: "Images & Media",
        topics: ["img tag", "Audio & Video embedding", "alt attributes"]
      },
      {
        title: "Semantic HTML",
        topics: ["section, article, header, footer", "Accessibility tags", "SEO basics"]
      },
      {
        title: "HTML Project",
        topics: ["Build a personal webpage", "Validate HTML", "Publish locally"]
      }
    ]
  },

  python: {
    title: "Basics of Python",
    desc: "Learn Python fundamentals and writing your first scripts from scratch.",
    duration: "2 Weeks",
    mode: "Online (Free)",
    level: "Beginner",
    requirements: "Basic computer literacy",
    outcome: "Write Python scripts, use variables, loops, functions.",
    image: "assets/images/python-course.jpg",
    faculty: {
      name: "Mr. Suresh Patel",
      expertise: "Python, Automation, Scripting",
      experience: "7+ years",
      about: "Suresh makes Python easy through examples, quizzes, and hands-on coding.",
      email: "suresh@fdalearning.com",
      image: "assets/images/faculty_python.jpg"
    },
    modules: [
      {
        title: "Python Introduction",
        topics: ["What is Python?", "Installation & Setup", "Hello World"]
      },
      {
        title: "Variables & Data Types",
        topics: ["Numbers, Strings", "Lists & Tuples", "Dictionaries"]
      },
      {
        title: "Control Flow",
        topics: ["if / else statements", "for loops", "while loops"]
      },
      {
        title: "Functions & Modules",
        topics: ["Defining functions", "Importing modules", "Standard library"]
      },
      {
        title: "File Handling & Exceptions",
        topics: ["Reading/Writing files", "Try/Except blocks", "Error handling"]
      },
      {
        title: "Mini Project",
        topics: ["Build a text‑based game", "Data input/output"]
      }
    ]
  }
};

// Load course dynamically
if (courses[courseKey]) {
  const course = courses[courseKey];

  // Course Info
  document.getElementById("courseTitle").textContent = course.title;
  document.getElementById("courseDesc").textContent = course.desc;
  document.getElementById("courseImage").src = course.image;

  // Details
  document.getElementById("courseDetails").innerHTML = `
    <h2>Course Information</h2>
    <p><strong>Duration:</strong> ${course.duration}</p>
    <p><strong>Mode:</strong> ${course.mode}</p>
    <p><strong>Level:</strong> ${course.level}</p>
    <p><strong>Requirements:</strong> ${course.requirements}</p>
    <p><strong>Outcome:</strong> ${course.outcome}</p>
    <a href="course-videos.html" class="start-btn">Start Course</a>
  `;

  // Faculty
  const f = course.faculty;
  document.getElementById("facultyImage").src = f.image;
  document.getElementById("facultyInfo").innerHTML = `
    <h3>${f.name}</h3>
    <p><strong>Expertise:</strong> ${f.expertise}</p>
    <p><strong>Experience:</strong> ${f.experience}</p>
    <p><strong>About:</strong> ${f.about}</p>
    <p><strong>Contact:</strong> <a href="mailto:${f.email}">${f.email}</a></p>
  `;

  // Modules
  const moduleContainer = document.getElementById("modules");
  course.modules.forEach(m => {
    const moduleDiv = document.createElement("div");
    moduleDiv.classList.add("module");
    moduleDiv.innerHTML = `
      <h3>${m.title}</h3>
      <ul>${m.topics.map(t => `<li>${t}</li>`).join("")}</ul>
    `;
    moduleContainer.appendChild(moduleDiv);
  });
} else {
  document.body.innerHTML = "<h2 style='text-align:center; margin-top:100px;'>Course not found.</h2>";
}
