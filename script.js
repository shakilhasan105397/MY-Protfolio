    /* ==================================================================
       ✏️  EDIT YOUR CONTENT HERE — everything on the page renders from DATA
       ================================================================== */
    const DATA = {
      profile: {
        name: "Shakil Hasan",
        initials: "SH",
        hello: "Hello, I'm",
        roles: ["Software Engineering Student", "Full-Stack Web Developer", "Competitive Programmer", "UI/UX Enthusiast"],
        tagline: "I design and build fast, accessible web experiences — and I love turning tricky problems into clean, elegant code.",
        status: "Open to internships",
        photo: "images/image1.png",            // 👉 e.g. "images/profile.jpg"  (empty = gradient initials avatar)
        aboutPhoto: "images/image2.png",       // 👉 e.g. "images/about.jpg"    (empty = uses `photo` or initials)
        cv: "files/Resume.pdf", // 👉 put your CV PDF at this path
        cvUpdated: "PDF · updated 2026",
        email: "251-35-279@diu.edu.bd",
        phone: "+880 1609570164",
        location: "Dhaka, Bangladesh",
      },
      socials: [
        { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/" },
        { name: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/" },
        { name: "X (Twitter)", icon: "fa-brands fa-x-twitter", url: "https://x.com/" },
        { name: "Facebook", icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/share/1Fc2TCnzXJ/" },
        { name: "Email", icon: "fa-solid fa-envelope", url: "251-35-279@diu.edu.bd" },
      ],
      about: {
        bio: [
          "I'm <strong>Shakil Hasan</strong>, a Software Engineering student at <strong>Daffodil International University</strong> in Dhaka, Bangladesh. I enjoy the whole journey of building software — from sketching an idea in Figma to shipping a fast, accessible product.",
          "Most days you'll find me writing React and Node.js, solving algorithm problems on Codeforces and LeetCode, or exploring how great products are designed. I'm looking for opportunities to learn from experienced engineers and build things that genuinely help people.",
        ],
        facts: [
          { icon: "fa-solid fa-user", label: "Name", value: "Shakil Hasan" },
          { icon: "fa-solid fa-location-dot", label: "Based in", value: "Dhaka, Bangladesh" },
          { icon: "fa-solid fa-graduation-cap", label: "Studying", value: "B.Sc. in Software Engineering" },
          { icon: "fa-solid fa-language", label: "Languages", value: "Bangla, English" },
        ],
        counters: [
          { value: 15, suffix: "+", label: "Projects built" },
          { value: 60, suffix: "+", label: "Problems solved" },
          { value: 20, suffix: "+", label: "Technologies" },
          { value: 8, suffix: "", label: "Certifications" },
        ],
      },
      skills: {
        "Programming Languages": { icon: "fa-solid fa-code", items: [
          { name: "C", level: 90, icon: "fa-solid fa-c" }, { name: "C++", level: 85, icon: "fa-solid fa-code" },
          { name: "Java", level: 75, icon: "fa-brands fa-java" }, { name: "Python", level: 78, icon: "fa-brands fa-python" },
          { name: "JavaScript", level: 88, icon: "fa-brands fa-js" }, { name: "TypeScript", level: 70, icon: "fa-solid fa-t" } ] },
        "Frontend Development": { icon: "fa-solid fa-palette", items: [
          { name: "HTML5", level: 95, icon: "fa-brands fa-html5" }, { name: "CSS3 / Sass", level: 90, icon: "fa-brands fa-css3-alt" },
          { name: "React", level: 85, icon: "fa-brands fa-react" }, { name: "Next.js", level: 72, icon: "fa-solid fa-n" },
          { name: "Tailwind CSS", level: 90, icon: "fa-solid fa-wind" }, { name: "Bootstrap", level: 82, icon: "fa-brands fa-bootstrap" } ] },
        "Backend Development": { icon: "fa-solid fa-server", items: [
          { name: "Node.js", level: 80, icon: "fa-brands fa-node-js" }, { name: "Express.js", level: 78, icon: "fa-solid fa-route" },
          { name: "REST APIs", level: 82, icon: "fa-solid fa-plug" }, { name: "PHP / Laravel", level: 65, icon: "fa-brands fa-laravel" },
          { name: "Firebase", level: 70, icon: "fa-solid fa-fire" }, { name: "Auth / JWT", level: 72, icon: "fa-solid fa-shield-halved" } ] },
        "Database": { icon: "fa-solid fa-database", items: [
          { name: "MySQL", level: 82, icon: "fa-solid fa-database" }, { name: "MongoDB", level: 78, icon: "fa-solid fa-leaf" },
          { name: "PostgreSQL", level: 68, icon: "fa-solid fa-server" }, { name: "SQLite", level: 65, icon: "fa-solid fa-feather" },
          { name: "Redis", level: 45, icon: "fa-solid fa-bolt" } ] },
        "Tools & Technologies": { icon: "fa-solid fa-screwdriver-wrench", items: [
          { name: "Git & GitHub", level: 90, icon: "fa-brands fa-git-alt" }, { name: "VS Code", level: 95, icon: "fa-solid fa-laptop-code" },
          { name: "Figma", level: 75, icon: "fa-brands fa-figma" }, { name: "Postman", level: 80, icon: "fa-solid fa-paper-plane" },
          { name: "Docker", level: 55, icon: "fa-brands fa-docker" }, { name: "Linux", level: 70, icon: "fa-brands fa-linux" } ] },
      },
      education: [
        { degree: "B.Sc. in Software Engineering", institute: "Daffodil International University", place: "Dhaka", period: "2025 — 2028(expected)",
          desc: "Core coursework in Data Structures, Algorithms, Object-Oriented Programming, Database Systems and Software Requirements Engineering. Active member of the university programming club.", grade: "CGPA 3.55 / 4.00 (ongoing)" },
        { degree: "Higher Secondary Certificate (Science)", institute: "Daud Public School & Collage", place: "Jashore Cantonment", period: "2020 — 2022",
          desc: "Science group with Higher Mathematics and ICT. Discovered programming through ICT classes and started building small web pages.", grade: "GPA 5.00 / 5.00" },
        { degree: "Secondary School Certificate (Science)", institute: "Narikel Baria High School", place: "Bagherpara,Jashore", period: "2018 — 2020",
          desc: "Science group. Took part in school science fairs and math olympiads.", grade: "GPA 5.00 / 5.00" },
      ],
      experience: [
        /*{ role: "Frontend Developer Intern", company: "PixelForge Studio", type: "Internship", period: "Jun 2026 — Present", location: "Dhaka · Hybrid",
          points: ["Built reusable React components for a client dashboard used by 2,000+ users.", "Improved Lighthouse performance score from 68 to 95 by code-splitting and image optimization.", "Collaborated with designers in Figma to ship pixel-perfect, accessible UI."],
          tech: ["React", "TypeScript", "Tailwind CSS", "Figma", "Git"] },*/
        { role: "Freelance Web Developer", company: "Self-employed", type: "Freelance", period: "Jan 2025 — Present", location: "Remote",
          points: ["Delivered 10+ responsive websites for small businesses and student organizations.", "Set up hosting, domains and contact forms; handled client communication end-to-end.", "Maintained a 5-star rating through clear timelines and clean handover docs."],
          tech: ["HTML", "CSS", "JavaScript", "Node.js", "Firebase"] },
        { role: "Executive Member", company: "DIU Software Engineering Club", type: "Volunteer", period: "Mar 2025 — Present", location: "Daffodil International University",
          points: ["Organized two intra-university programming contests with 30+ participants.", "Ran weekly beginner workshops on Git, GitHub and web fundamentals.", "Built the club's event registration website."],
          tech: ["Leadership", "Event Management", "React", "MongoDB"] },
        { role: "Peer Mentor", company: "Structured Programming Lab (C)", type: "Part-time", period: "Sep 2025 — Dec 2025", location: "Daffodil International University",
          points: ["Mentored 40+ first-year students in C programming lab sessions.", "Created practice problem sets and debugging guides."],
          tech: ["C", "Problem Solving", "Teaching"] },
      ],
      // category: "featured" | "academic" | "personal"   ·   image: e.g. "images/projects/campushub.jpg" (empty = gradient art)
      projects: [
        { title: "CampusHub", category: "featured", icon: "fa-solid fa-building-columns", colors: ["#8b5cf6", "#22d3ee"], image: "",
          desc: "All-in-one student portal for routines, notices, results and club events.",
          details: "CampusHub brings everything a DIU student checks daily into one fast, mobile-friendly dashboard. Students can follow clubs, get notice alerts and track their CGPA over time.",
          features: ["Role-based access for students, teachers and admins", "Real-time notice board with push notifications", "CGPA calculator with semester history charts"],
          tech: ["React", "Node.js", "Express", "MongoDB", "JWT"], demo: "#", github: "#" },
        { title: "ShopSphere", category: "featured", icon: "fa-solid fa-bag-shopping", colors: ["#ec4899", "#8b5cf6"], image: "",
          desc: "Modern e-commerce store with cart, payments and an admin dashboard.",
          details: "A full-stack e-commerce platform with product search, filters, a persistent cart, secure checkout and an analytics dashboard for store owners.",
          features: ["Server-side rendering for SEO-friendly product pages", "Stripe test-mode checkout", "Inventory and order management dashboard"],
          tech: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "Tailwind"], demo: "#", github: "#" },
        { title: "DevPulse Chat", category: "featured", icon: "fa-solid fa-comments", colors: ["#22d3ee", "#34d399"], image: "",
          desc: "Real-time chat app for developer communities with code snippet sharing.",
          details: "DevPulse is a real-time chat application with rooms, typing indicators and syntax-highlighted code snippets — built to learn WebSockets end-to-end.",
          features: ["Socket.io rooms with typing indicators", "Markdown + code highlighting", "Online presence and read receipts"],
          tech: ["React", "Socket.io", "Node.js", "Redis"], demo: "#", github: "#" },
        { title: "Library Management System", category: "academic", icon: "fa-solid fa-book", colors: ["#fbbf24", "#ec4899"], image: "",
          desc: "Desktop app to manage books, members, issues and fines (OOP course project).",
          details: "Built for the Object-Oriented Programming course. Demonstrates inheritance, interfaces and design patterns with a clean Java Swing UI and MySQL storage.",
          features: ["Book issue/return with automatic fine calculation", "Search by title, author or ISBN", "Admin and librarian roles"],
          tech: ["Java", "Swing", "MySQL", "JDBC"], demo: "#", github: "#" },
        { title: "Pathfinding Visualizer", category: "academic", icon: "fa-solid fa-route", colors: ["#22d3ee", "#8b5cf6"], image: "",
          desc: "Interactive visualizer for BFS, DFS, Dijkstra and A* on a grid (Algorithms course).",
          details: "Draw walls, drag start and end points, and watch classic graph algorithms explore the grid step by step. Used by classmates to revise for exams.",
          features: ["Four algorithms with adjustable speed", "Maze generation with recursive division", "Step-by-step mode for learning"],
          tech: ["JavaScript", "HTML Canvas", "Algorithms"], demo: "#", github: "#" },
        { title: "MediCare Appointments", category: "academic", icon: "fa-solid fa-stethoscope", colors: ["#34d399", "#22d3ee"], image: "",
          desc: "Hospital appointment booking system with doctor schedules (Database course).",
          details: "A normalized relational database design with a PHP front end for booking, rescheduling and cancelling doctor appointments.",
          features: ["3NF schema with ER diagram", "Doctor availability calendar", "SMS-style reminders (simulated)"],
          tech: ["PHP", "MySQL", "Bootstrap"], demo: "#", github: "#" },
        { title: "WeatherNow", category: "personal", icon: "fa-solid fa-cloud-sun", colors: ["#22d3ee", "#fbbf24"], image: "",
          desc: "Beautiful weather app with 7-day forecasts and location search.",
          details: "A small React app that uses a public weather API, geolocation and animated backgrounds that change with the weather.",
          features: ["Geolocation + city search", "Animated weather backgrounds", "Installable as a PWA"],
          tech: ["React", "Weather API", "PWA"], demo: "#", github: "#" },
        { title: "Taka Tracker", category: "personal", icon: "fa-solid fa-wallet", colors: ["#8b5cf6", "#ec4899"], image: "",
          desc: "Offline-first expense tracker in BDT with monthly budget insights.",
          details: "Track daily spending in Taka, set monthly budgets and see where your money goes with simple charts — works fully offline.",
          features: ["Offline storage with IndexedDB", "Budget alerts", "Monthly category charts"],
          tech: ["JavaScript", "IndexedDB", "Chart.js"], demo: "#", github: "#" },
      ],
      certifications: [
        { title: "Full Stack Web Development Course", issuer: "IntelliPaat Academy", date: "2025", icon: "fa-brands fa-w", url: "https://drive.google.com/file/d/1i4qdlfwwPCv1IvFlLKc0FOlawVcSTlR-/view?usp=sharing" },
        { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "2025", icon: "fa-brands fa-free-code-camp", url: "https://drive.google.com/file/d/1yf9wAgQAbWCUvNyqXjP679tqDulQcTV5/view?usp=sharing" },
        { title: "Data Structures and  Algorithms Course ", issuer: "IntelliPaat Academy", date: "2025", icon: "fa-brands fa-d", url: "https://drive.google.com/file/d/1vUaoeGHGezSvqE9wwW77x4Iqf6kAshoj/view?usp=sharing" },
        { title: "Python Programming", issuer: "IntelliPaat Academy", date: "2025", icon: "fa-brands fa-python", url: "https://drive.google.com/file/d/1f6xwRrRR6V3odIo14VjVW-xcJuueMXer/view?usp=sharing" },
        { title: "Computer Architecture", issuer: "Saylor University", date: "2026", icon: "fa-brands fa-c", url:"https://drive.google.com/file/d/1yZROMpq-aNeLcktv3ssp9nojpbtvsmcn/view?usp=sharing "},
        { title: "SQL Course", issuer: "IntelliPaat Academy", date: "2026", icon: "fa-brands fa-s", url: "https://drive.google.com/file/d/1slXREwN__mZdEYcGK2RAGT20T1nKjHr6/view?usp=sharing" },
      ],
      achievements: {
        stats: [
          { value: 1, suffix: "", label: "Hackathons", icon: "fa-solid fa-laptop-code", color: "c-cyan" },
          { value: 5, suffix: "+", label: "Contests", icon: "fa-solid fa-trophy", color: "c-amber" },
          { value: 3, suffix: "", label: "Awards", icon: "fa-solid fa-medal", color: "c-pink" },
          { value: 200, suffix: "+", label: "Problems solved", icon: "fa-solid fa-brain", color: "c-violet" },
        ],
        items: [
          /*{ title: "Champion — DIU Intra-Department Hackathon", desc: "Built an AI-assisted campus lost-and-found app in 24 hours with a team of three.", year: "2026", tag: "Hackathon", icon: "fa-solid fa-trophy" },
          { title: "Top 10 — DIU Take-Off Programming Contest", desc: "Ranked among the top 10 of 250+ first-year participants.", year: "2025", tag: "Contest", icon: "fa-solid fa-ranking-star" },
          { title: "Finalist — NASA Space Apps Challenge, Dhaka", desc: "Visualized climate data for local farmers as an interactive map.", year: "2025", tag: "Hackathon", icon: "fa-solid fa-rocket" },
          { title: "Dean's List Award", desc: "Recognized for academic excellence in the Department of Software Engineering.", year: "2025", tag: "Award", icon: "fa-solid fa-award" },*/
          { title: "Best UI Award — Web Design Sprint", desc: "Awarded for the most polished and accessible interface.", year: "2026", tag: "Award", icon: "fa-solid fa-wand-magic-sparkles" },
          { title: "100 Days of Code", desc: "Completed the #100DaysOfCode challenge, coding and sharing progress every day.", year: "2025", tag: "Challenge", icon: "fa-solid fa-fire" },
        ],
      },
      github: {
        username: "",   // 👉 your GitHub username, e.g. "shakilhasan" — leave empty to show the sample numbers below
        // Shown when the username is empty or the API is unavailable (rate limit / offline)
        fallback: { name: "Shakil Hasan", bio: "Software Engineering @ DIU · Building for the web", repos: 32, followers: 48, following: 35, stars: 120,
          languages: { JavaScript: 38, TypeScript: 18, "C++": 16, Python: 10, Java: 9, HTML: 9 },
          topRepos: [{ name: "campushub", stars: 34, language: "JavaScript" }, { name: "shopsphere", stars: 27, language: "TypeScript" }, { name: "cp-solutions", stars: 22, language: "C++" }, { name: "pathfinding-visualizer", stars: 18, language: "JavaScript" }] },
      },
      codingProfiles: [
        { platform: "LeetCode", handle: "shakilhasan", short: "LC", logo: "linear-gradient(135deg,#ffa116,#f97316)", url: "https://leetcode.com/",
          stats: [{ label: "Rating", value: "1,684" }, { label: "Solved", value: "200" }, { label: "Top", value: "12%" }],
          badges: ["Knight (target)", "100 Days Badge", "SQL 50"], breakdown: { Easy: 150, Medium: 140, Hard: 30 } },
        { platform: "HackerRank", handle: "shakil_hasan", short: "HR", logo: "linear-gradient(135deg,#2ec866,#0f9d58)", url: "https://www.hackerrank.com/",
          stats: [{ label: "Stars", value: "4★" }, { label: "Solved", value: "140" }, { label: "Badges", value: "6" }],
          badges: ["Problem Solving ★★★★★", "C++ ★★★★", "SQL ★★★"], breakdown: { Easy: 80, Medium: 50, Hard: 10 } },
        { platform: "Codeforces", handle: "shakil.hasan", short: "CF", logo: "linear-gradient(135deg,#1f8acb,#b11e26)", url: "https://codeforces.com/",
          stats: [{ label: "Rating", value: "1,312" }, { label: "Solved", value: "180" }, { label: "Rank", value: "Pupil" }],
          badges: ["Max 1,348", "40+ rated contests", "Div. 3 regular"], breakdown: { Easy: 110, Medium: 60, Hard: 10 } },
      ],
      testimonials: [
        { name: "Dr. Farhana Rahman", role: "Course Teacher, Software Engineering, DIU", quote: "Shakil consistently goes beyond the assignment. His algorithms project was so clear that I now use it to explain graph search to new students." },
        { name: "Tanvir Ahmed", role: "Lead Developer, PixelForge Studio", quote: "He picks things up incredibly fast and writes clean, well-structured React. He took ownership of our dashboard performance and delivered real results." },
        { name: "Nusrat Jahan", role: "Founder, Kantha & Co. (freelance client)", quote: "Our new website looks beautiful on every phone and was delivered ahead of schedule. Shakil explained everything patiently — highly recommended." },
        { name: "Rafiul Islam", role: "Teammate, DIU Hackathon 2026", quote: "Calm under pressure and always the one who makes the demo actually work. Shakil is the teammate you want at 3 a.m. before a deadline." },
      ],
      services: [
        { title: "Web Development", icon: "fa-solid fa-code", desc: "Fast, modern websites and web apps built with React, Next.js and Node.js." },
        { title: "Frontend & UI", icon: "fa-solid fa-pen-ruler", desc: "Pixel-perfect, accessible interfaces translated from Figma with delightful motion." },
        { title: "Backend & APIs", icon: "fa-solid fa-server", desc: "REST APIs, authentication and databases that are secure and easy to scale." },
        { title: "Responsive Design", icon: "fa-solid fa-mobile-screen", desc: "Layouts that look and feel great on every screen, from phones to 4K monitors." },
        { title: "Performance & SEO", icon: "fa-solid fa-gauge-high", desc: "Lighthouse audits, Core Web Vitals fixes and on-page SEO improvements." },
        { title: "Programming Mentoring", icon: "fa-solid fa-chalkboard-user", desc: "One-to-one help with C, C++, data structures and problem solving for beginners." },
      ],
      interests: [
        { name: "Competitive Programming", icon: "fa-solid fa-terminal", color: "c-cyan" }, { name: "Open Source", icon: "fa-brands fa-github", color: "c-violet" },
        { name: "UI Design", icon: "fa-solid fa-palette", color: "c-pink" }, { name: "AI & ML", icon: "fa-solid fa-robot", color: "c-cyan" },
        { name: "Photography", icon: "fa-solid fa-camera", color: "c-amber" }, { name: "Football", icon: "fa-solid fa-futbol", color: "c-green" },
        { name: "Reading", icon: "fa-solid fa-book-open", color: "c-violet" }, { name: "Travelling", icon: "fa-solid fa-plane", color: "c-pink" },
        { name: "Gaming", icon: "fa-solid fa-gamepad", color: "c-cyan" }, { name: "Music", icon: "fa-solid fa-headphones", color: "c-amber" },
      ],
      learningJourney: [
        { title: "Programming Fundamentals", desc: "C, logic building, debugging", progress: 100 },
        { title: "Web Fundamentals", desc: "HTML, CSS, JavaScript, Git", progress: 100 },
        { title: "Data Structures & Algorithms", desc: "C++, STL, graphs, DP", progress: 75 },
        { title: "Modern Frontend", desc: "React, Next.js, TypeScript", progress: 85 },
        { title: "Backend Engineering", desc: "Node.js, APIs, auth", progress: 65 },
        { title: "Databases & System Design", desc: "SQL, NoSQL, scaling basics", progress: 40 },
        { title: "Cloud & DevOps", desc: "Docker, CI/CD, AWS basics", progress: 15 },
        { title: "AI / Machine Learning", desc: "Python, ML foundations", progress: 0 },
      ],
      careerGoals: {
        short: [
          { when: "2028", title: "Software engineering internship", desc: "Join a product company and ship code used by real users.", done: true },
          { when: "2029", title: "Codeforces Specialist (1400+)", desc: "Keep practicing daily and compete in every Div. 2/3 round." },
          { when: "2029", title: "Open-source contributions", desc: "Land meaningful PRs in 3+ popular JavaScript projects." },
          { when: "2030", title: "Launch a SaaS side project", desc: "Design, build and market a small product end-to-end." },
        ],
        long: [
          { when: "2031", title: "Graduate with distinction", desc: "Finish my B.Sc. with a strong CGPA and a research publication." },
          { when: "2031+", title: "Full-stack engineer at scale", desc: "Work on products used by millions of people." },
          { when: "2032+", title: "Tech lead & mentor", desc: "Lead teams and help juniors grow, like my mentors did for me." },
          { when: "Someday", title: "Build for Bangladesh", desc: "Create technology that solves real problems at home." },
        ],
      },
      resumeHighlights: ["Education & coursework", "Technical skills", "Selected projects", "Experience & leadership", "Awards & certifications"],
      faq: [
        { q: "Are you available for internships or freelance work?", a: "Yes! I'm currently open to software engineering internships and selected freelance web projects. The best way to reach me is through the contact form or email below." },
        { q: "What technologies do you work with most?", a: "Day to day I use React, TypeScript, Tailwind CSS and Node.js with MongoDB or PostgreSQL. For problem solving I use C++." },
        { q: "How long does a typical website take?", a: "A small business or portfolio site usually takes 1–2 weeks. Larger web apps depend on scope — I'll give you a clear timeline after a short call." },
        { q: "Do you work remotely?", a: "Yes. I'm based in Dhaka (GMT+6) and comfortable collaborating remotely using GitHub, Slack, Notion and Google Meet." },
        { q: "Can you help me learn programming?", a: "Absolutely — I mentor beginners in C, C++ and data structures. Send me a message with what you'd like to learn." },
      ],
      contact: {
        formspree: "",   // 👉 e.g. "https://formspree.io/f/xxxxabcd" — empty = opens the visitor's email app (mailto fallback)
        availability: "Available for internships & freelance — replies within 24h",
      },
    };

    /* Sections used by the navbar, mobile menu and command palette */
    const SECTIONS = [
      { id: "home", label: "Home", icon: "fa-solid fa-house" },
      { id: "about", label: "About", icon: "fa-solid fa-user", nav: true },
      { id: "skills", label: "Skills", icon: "fa-solid fa-code", nav: true },
      { id: "education", label: "Education", icon: "fa-solid fa-graduation-cap" },
      { id: "experience", label: "Experience", icon: "fa-solid fa-briefcase", nav: true },
      { id: "projects", label: "Projects", icon: "fa-solid fa-diagram-project", nav: true },
      { id: "certifications", label: "Certifications", icon: "fa-solid fa-certificate" },
      { id: "achievements", label: "Achievements", icon: "fa-solid fa-trophy" },
      { id: "github", label: "GitHub", icon: "fa-brands fa-github", nav: true },
      { id: "coding", label: "Coding Profiles", icon: "fa-solid fa-terminal" },
      { id: "testimonials", label: "Testimonials", icon: "fa-solid fa-quote-left" },
      { id: "services", label: "Services", icon: "fa-solid fa-layer-group", nav: true },
      { id: "interests", label: "Interests", icon: "fa-solid fa-heart" },
      { id: "journey", label: "Learning Journey", icon: "fa-solid fa-map" },
      { id: "goals", label: "Career Goals", icon: "fa-solid fa-flag-checkered" },
      { id: "resume", label: "Resume", icon: "fa-solid fa-file-arrow-down" },
      { id: "faq", label: "FAQ", icon: "fa-solid fa-circle-question" },
      { id: "contact", label: "Contact", icon: "fa-solid fa-paper-plane", nav: true },
    ];

    /* ==================================================================
       APP LOGIC — you shouldn't need to edit below this line
       ================================================================== */
    (function () {
      "use strict";
      const $ = (s, el = document) => el.querySelector(s);
      const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
      const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const isPlaceholder = (url) => !url || url === "#";
      const cssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      const P = DATA.profile;
      const charts = [];

      /* ---------- Toast ---------- */
      let toastTimer;
      function toast(msg, icon = "fa-circle-info") {
        const t = $("#toast");
        t.querySelector("i").className = "fa-solid " + icon;
        t.querySelector("span").textContent = msg;
        t.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
      }

      /* Render helpers for links that may still be placeholders ("#") */
      function linkAttrs(url, label) {
        if (isPlaceholder(url)) return `href="#" data-placeholder="${esc(label)}" aria-disabled="true"`;
        const ext = /^https?:/.test(url);
        return `href="${esc(url)}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ""}`;
      }

      /* ==================== RENDER: NAV ==================== */
      function renderNav() {
        $("#navLinks").innerHTML = SECTIONS.filter((s) => s.nav).map((s) => `<li><a href="#${s.id}" data-nav="${s.id}">${s.label}</a></li>`).join("");
        $("#mobileLinks").innerHTML = SECTIONS.map((s, i) => `<li style="--i:${i}"><a href="#${s.id}" data-nav="${s.id}"><small>${String(i + 1).padStart(2, "0")}</small>${s.label}</a></li>`).join("");
        $("#footerQuick").innerHTML = ["about", "skills", "projects", "experience", "resume", "contact"]
          .map((id) => SECTIONS.find((s) => s.id === id)).map((s) => `<li><a href="#${s.id}"><i class="fa-solid fa-angle-right" aria-hidden="true"></i>${s.label}</a></li>`).join("");
        const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
        $("#kbdHint").textContent = isMac ? "⌘ K" : "Ctrl K";
      }

      /* ==================== RENDER: HERO ==================== */
      function avatarHTML(photo, alt) {
        // 👉 PROFILE PHOTO goes here via DATA.profile.photo
        return photo ? `<img src="${esc(photo)}" alt="${esc(alt)}" loading="lazy" decoding="async" />` : `<span class="avatar-initials grad-text" aria-hidden="true">${esc(P.initials)}</span>`;
      }
      function renderHero() {
        $("#heroAvatar").innerHTML = avatarHTML(P.photo, P.name);
        if (!P.photo) $("#heroAvatar").setAttribute("aria-label", P.name + " (avatar)");
        $("#statusPill span:last-child").textContent = P.status;
        $("#heroHello").textContent = P.hello;
        const parts = P.name.split(" ");
        let i = 0;
        const word = (w, cls = "") => `<span class="${cls}" style="display:inline-block;white-space:nowrap">${[...w].map((c) => `<span class="char" style="--i:${i++}">${esc(c)}</span>`).join("")}</span>`;
        $("#heroName").innerHTML = `<span class="sr-only">${esc(P.name)}</span><span aria-hidden="true">${word(parts[0])} ${word(parts.slice(1).join(" "), "last")}</span>`;
        $("#heroTagline").textContent = P.tagline;
        $("#rolesSr").textContent = P.roles.join(", ");
        $("#heroSocials").innerHTML = DATA.socials.map((s) => `<a class="social magnetic" ${linkAttrs(s.url, s.name)} aria-label="${esc(s.name)}"><i class="${s.icon}" aria-hidden="true"></i></a>`).join("");
        $("#footerSocial").innerHTML = DATA.socials.map((s) => `<li><a ${linkAttrs(s.url, s.name)}><i class="${s.icon}" aria-hidden="true"></i>${esc(s.name)}</a></li>`).join("");
        const fe = $("#footerEmail");
        fe.href = "mailto:" + P.email;
        fe.querySelector("span").textContent = P.email;
        $("#footerAbout").textContent = P.tagline;
        $("#year").textContent = new Date().getFullYear();
        $("#cvMeta").textContent = P.cvUpdated;
      }

      function typewriter() {
        const el = $("#typewriter");
        const words = P.roles;
        if (reduceMotion) { el.textContent = words[0]; return; }
        let w = 0, c = 0, deleting = false;
        (function tick() {
          const word = words[w];
          el.textContent = word.slice(0, c);
          if (!deleting && c < word.length) { c++; setTimeout(tick, 65 + Math.random() * 40); }
          else if (!deleting) { deleting = true; setTimeout(tick, 1700); }
          else if (c > 0) { c--; setTimeout(tick, 32); }
          else { deleting = false; w = (w + 1) % words.length; setTimeout(tick, 350); }
        })();
      }

      /* ==================== RENDER: ABOUT ==================== */
      function renderAbout() {
        const A = DATA.about;
        const photo = P.aboutPhoto || P.photo;
        $("#aboutPhoto").innerHTML = (photo ? `<img src="${esc(photo)}" alt="Portrait of ${esc(P.name)}" loading="lazy" decoding="async" />` : `<span class="avatar-initials grad-text" aria-hidden="true">${esc(P.initials)}</span>`) +
          `<div class="about-photo-badge glass"><span class="card-icon"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i></span><div><strong>${esc(DATA.education[0].institute)}</strong><span>${esc(DATA.education[0].degree)}</span></div></div>`;
        $("#aboutBio").innerHTML = A.bio.map((p) => `<p>${p}</p>`).join("");
        $("#aboutFacts").innerHTML = A.facts.map((f, i) => `<div class="fact glass reveal" style="--d:${i + 2}"><i class="${f.icon}" aria-hidden="true"></i><div><small>${esc(f.label)}</small><span>${esc(f.value)}</span></div></div>`).join("");
        $("#aboutCounters").innerHTML = A.counters.map((c, i) => `<div class="counter glass reveal zoom" style="--d:${i + 3}"><b><span data-count="${c.value}">0</span><span class="grad-text">${esc(c.suffix)}</span></b><span>${esc(c.label)}</span></div>`).join("");
      }

      /* ==================== RENDER: SKILLS (tabs) ==================== */
      function renderSkills() {
        const cats = Object.keys(DATA.skills);
        $("#skillTabs").innerHTML = cats.map((c, i) => `<button class="tab" role="tab" id="stab-${i}" aria-controls="spanel-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}"><i class="${DATA.skills[c].icon}" aria-hidden="true"></i>${esc(c)}</button>`).join("");
        $("#skillPanels").innerHTML = cats.map((c, i) => `
          <div class="tab-panel" role="tabpanel" id="spanel-${i}" aria-labelledby="stab-${i}" ${i ? "hidden" : ""}>
            <div class="skills-grid">${DATA.skills[c].items.map((s, k) => `
              <div class="reveal" style="--d:${k}"><article class="skill glass glow tilt" style="--p:${s.level};--d:${k}">
                <div class="ring" role="img" aria-label="${esc(s.name)} ${s.level}%">
                  <svg viewBox="0 0 80 80" aria-hidden="true"><circle class="ring-bg" cx="40" cy="40" r="34" /><circle class="ring-fg" cx="40" cy="40" r="34" /></svg>
                  <span class="ring-icon" aria-hidden="true"><i class="${s.icon}"></i></span>
                </div>
                <h3>${esc(s.name)}</h3>
                <div class="skill-meta"><span>${s.level >= 85 ? "Advanced" : s.level >= 65 ? "Proficient" : "Learning"}</span><span>${s.level}%</span></div>
                <div class="bar" aria-hidden="true"><span></span></div>
              </article></div>`).join("")}
            </div>
          </div>`).join("");

        const tabs = $$("#skillTabs .tab");
        const panelIO = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate"); }), { threshold: 0.2 });
        $$("#skillPanels .tab-panel").forEach((p) => panelIO.observe(p));
        const select = (idx, focus) => {
          tabs.forEach((t, i) => { t.setAttribute("aria-selected", i === idx); t.tabIndex = i === idx ? 0 : -1; });
          $$("#skillPanels .tab-panel").forEach((p, i) => {
            p.hidden = i !== idx;
            p.classList.remove("animate");
            if (i === idx) { void p.offsetWidth; requestAnimationFrame(() => p.classList.add("animate")); }
          });
          if (focus) tabs[idx].focus();
          observeReveals($("#skillPanels"));
        };
        tabs.forEach((t, i) => {
          t.addEventListener("click", () => select(i));
          t.addEventListener("keydown", (e) => {
            const map = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
            if (map[e.key]) { e.preventDefault(); select((i + map[e.key] + tabs.length) % tabs.length, true); }
            if (e.key === "Home") { e.preventDefault(); select(0, true); }
            if (e.key === "End") { e.preventDefault(); select(tabs.length - 1, true); }
          });
        });
      }

      /* ==================== RENDER: EDUCATION ==================== */
      function renderEducation() {
        $("#eduTimeline").insertAdjacentHTML("beforeend", DATA.education.map((e, i) => `
          <article class="tl-item">
            <span class="tl-dot" aria-hidden="true"></span>
            <div class="reveal ${i % 2 ? "from-right" : "from-left"}">
              <div class="tl-card glass glow tilt card">
                <span class="tl-period"><i class="fa-regular fa-calendar" aria-hidden="true"></i>${esc(e.period)}</span>
                <h3>${esc(e.degree)}</h3>
                <p class="tl-org"><i class="fa-solid fa-building-columns" aria-hidden="true"></i>${esc(e.institute)}, ${esc(e.place)}</p>
                <p>${esc(e.desc)}</p>
                <div class="grade"><span class="badge"><i class="fa-solid fa-star" aria-hidden="true"></i>${esc(e.grade)}</span></div>
              </div>
            </div>
          </article>`).join(""));
      }

      /* ==================== RENDER: EXPERIENCE ==================== */
      function renderExperience() {
        const list = $("#expTabs"), panel = $("#expPanel");
        list.innerHTML = DATA.experience.map((x, i) => `<button class="exp-tab" role="tab" id="etab-${i}" aria-controls="expPanel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}"><strong>${esc(x.role)}</strong><span>${esc(x.company)} · ${esc(x.period)}</span></button>`).join("");
        const tabs = $$(".exp-tab", list);
        const show = (i) => {
          const x = DATA.experience[i];
          tabs.forEach((t, k) => { t.setAttribute("aria-selected", k === i); t.tabIndex = k === i ? 0 : -1; });
          panel.setAttribute("aria-labelledby", "etab-" + i);
          panel.innerHTML = `
            <header>
              <div><h3>${esc(x.role)}</h3><p class="company"><i class="fa-solid fa-building" aria-hidden="true"></i>${esc(x.company)}</p>
              <p class="period"><i class="fa-regular fa-clock" aria-hidden="true"></i>${esc(x.period)} · ${esc(x.location)}</p></div>
              <span class="badge">${esc(x.type)}</span>
            </header>
            <h4>Key achievements</h4>
            <ul>${x.points.map((p) => `<li><i class="fa-solid fa-circle-check" aria-hidden="true"></i><span>${esc(p)}</span></li>`).join("")}</ul>
            <h4>Tech used</h4>
            <div class="chips">${x.tech.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>`;
          panel.classList.remove("pop"); void panel.offsetWidth; panel.style.animation = "none"; void panel.offsetWidth; panel.style.animation = "panelIn .5s var(--ease)";
        };
        tabs.forEach((t, i) => {
          t.addEventListener("click", () => show(i));
          t.addEventListener("keydown", (e) => {
            const map = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
            if (map[e.key]) { e.preventDefault(); const n = (i + map[e.key] + tabs.length) % tabs.length; show(n); tabs[n].focus(); }
          });
        });
        show(0);
      }

      /* ==================== RENDER: PROJECTS ==================== */
      const CAT_LABEL = { featured: "Featured", academic: "Academic", personal: "Personal" };
      function projectThumb(p, i) {
        // 👉 PROJECT SCREENSHOT: set `image` on the project in DATA.projects
        const inner = p.image
          ? `<img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" loading="lazy" decoding="async" />`
          : `<div class="project-art" style="--c1:${p.colors[0]};--c2:${p.colors[1]};--ax:${20 + (i * 17) % 60}%"><i class="${p.icon}" aria-hidden="true"></i></div>`;
        return `<div class="project-thumb">${inner}<span class="badge">${CAT_LABEL[p.category]}</span></div>`;
      }
      function renderProjects() {
        const filters = [["all", "All"], ["featured", "Featured Projects"], ["academic", "Academic Projects"], ["personal", "Personal Projects"]];
        $("#projectFilters").innerHTML = filters.map(([k, l]) => `<button class="tab" type="button" data-filter="${k}" aria-pressed="${k === "all"}">${l}<span class="count">${k === "all" ? DATA.projects.length : DATA.projects.filter((p) => p.category === k).length}</span></button>`).join("");
        $("#projectsGrid").innerHTML = DATA.projects.map((p, i) => `
          <div class="reveal" style="--d:${i % 3}" data-cat="${p.category}">
            <article class="project glass glow tilt">
              ${projectThumb(p, i)}
              <div class="project-body">
                <h3>${esc(p.title)}</h3>
                <p>${esc(p.desc)}</p>
                <div class="chips">${p.tech.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
                <div class="project-actions">
                  <a class="btn btn-primary btn-sm" ${linkAttrs(p.demo, "Live demo")}><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>Live Demo</a>
                  <a class="btn btn-ghost btn-sm" ${linkAttrs(p.github, "GitHub repository")}><i class="fa-brands fa-github" aria-hidden="true"></i>GitHub</a>
                  <button class="btn btn-ghost btn-sm" type="button" data-project="${i}" aria-haspopup="dialog"><i class="fa-solid fa-circle-info" aria-hidden="true"></i>Details</button>
                </div>
              </div>
            </article>
          </div>`).join("");

        $$("#projectFilters .tab").forEach((b) => b.addEventListener("click", () => {
          const f = b.dataset.filter;
          $$("#projectFilters .tab").forEach((x) => x.setAttribute("aria-pressed", x === b));
          $$("#projectsGrid > div").forEach((card) => {
            const show = f === "all" || card.dataset.cat === f;
            card.hidden = !show;
            if (show) { card.classList.add("in"); const a = card.firstElementChild; a.classList.remove("pop"); void a.offsetWidth; a.classList.add("pop"); }
          });
        }));

        const modal = $("#projectModal");
        $("#projectsGrid").addEventListener("click", (e) => {
          const btn = e.target.closest("[data-project]");
          if (!btn) return;
          const i = +btn.dataset.project, p = DATA.projects[i];
          $("#modalBox").innerHTML = `
            <button class="icon-btn modal-close" type="button" aria-label="Close project details" data-close><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
            ${projectThumb(p, i)}
            <div class="modal-content">
              <h3 id="modalTitle">${esc(p.title)}</h3>
              <p>${esc(p.details)}</p>
              <h4 style="font-size:.8rem;text-transform:uppercase;letter-spacing:.14em;color:var(--muted)">Highlights</h4>
              <ul>${p.features.map((f) => `<li><i class="fa-solid fa-bolt" aria-hidden="true"></i>${esc(f)}</li>`).join("")}</ul>
              <div class="chips">${p.tech.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
              <div class="project-actions">
                <a class="btn btn-primary" ${linkAttrs(p.demo, "Live demo")}><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>Live Demo</a>
                <a class="btn btn-ghost" ${linkAttrs(p.github, "GitHub repository")}><i class="fa-brands fa-github" aria-hidden="true"></i>Source code</a>
              </div>
            </div>`;
          openDialog(modal, btn);
        });
        modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest("[data-close]")) closeDialog(modal); });
      }

      /* Dialog helpers (focus is restored to the trigger on close) */
      let lastTrigger = null;
      function openDialog(d, trigger) {
        lastTrigger = trigger || document.activeElement;
        if (!d.open) d.showModal();
        document.documentElement.classList.add("modal-open");
      }
      function closeDialog(d) { if (d.open) d.close(); }
      $$("dialog").forEach((d) => d.addEventListener("close", () => {
        document.documentElement.classList.remove("modal-open");
        if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus({ preventScroll: true });
      }));

      /* ==================== RENDER: CERTIFICATIONS & ACHIEVEMENTS ==================== */
      function renderCerts() {
        $("#certGrid").innerHTML = DATA.certifications.map((c, i) => `
          <div class="reveal" style="--d:${i % 3}"><article class="cert card glass glow tilt">
            <div class="cert-top"><span class="card-icon"><i class="${c.icon}" aria-hidden="true"></i></span><span class="badge"><i class="fa-solid fa-check" aria-hidden="true"></i>Verified</span></div>
            <h3>${esc(c.title)}</h3>
            <div><p class="issuer">${esc(c.issuer)}</p><p class="date"><i class="fa-regular fa-calendar" aria-hidden="true"></i>Issued ${esc(c.date)}</p></div>
            <a class="link" ${linkAttrs(c.url, "Credential")}>View credential <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
          </article></div>`).join("");
      }
      function renderAchievements() {
        const A = DATA.achievements;
        $("#achStats").innerHTML = A.stats.map((s, i) => `<div class="reveal zoom" style="--d:${i}"><div class="stat glass glow tilt"><i class="${s.icon} ${s.color}" aria-hidden="true"></i><b><span data-count="${s.value}">0</span>${esc(s.suffix)}</b><span>${esc(s.label)}</span></div></div>`).join("");
        $("#achGrid").innerHTML = A.items.map((a, i) => `
          <div class="reveal" style="--d:${i % 3}"><article class="ach card glass glow tilt">
            <span class="card-icon"><i class="${a.icon}" aria-hidden="true"></i></span>
            <div><h3>${esc(a.title)}</h3><p>${esc(a.desc)}</p><div class="meta"><span class="chip">${esc(a.tag)}</span><span class="chip"><i class="fa-regular fa-calendar" aria-hidden="true"></i>${esc(a.year)}</span></div></div>
          </article></div>`).join("");
      }

      /* ==================== GITHUB STATISTICS (live API + fallback) ==================== */
      const LANG_COLORS = ["#8b5cf6", "#22d3ee", "#ec4899", "#34d399", "#fbbf24", "#60a5fa", "#f97316"];
      function renderGitHub(d, live) {
        const user = DATA.github.username;
        const profileUrl = user ? "https://github.com/" + encodeURIComponent(user) : "https://github.com/";
        $("#ghProfileCard .gh-profile").innerHTML = `
          <div class="gh-avatar">${d.avatar ? `<img src="${esc(d.avatar)}" alt="GitHub avatar of ${esc(d.name)}" loading="lazy" />` : esc(P.initials)}</div>
          <div style="flex:1;min-width:180px"><h3>${esc(d.name)}</h3><p>${esc(d.bio || "")}</p><p style="margin-top:.3rem"><span class="badge">${live ? '<i class="fa-solid fa-circle" style="color:var(--green);font-size:.5rem" aria-hidden="true"></i>Live' : "Sample data"}</span></p></div>
          <a class="btn btn-ghost btn-sm" href="${profileUrl}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i>${user ? "@" + esc(user) : "GitHub"}</a>`;
        $("#ghStats").innerHTML = [["Repos", d.repos], ["Followers", d.followers], ["Following", d.following], ["Stars", d.stars]]
          .map(([l, v]) => `<div class="gh-stat"><b data-count="${v}">0</b><span>${l}</span></div>`).join("");
        $("#ghRepos").innerHTML = d.topRepos.slice(0, 4).map((r) => `
          <a class="gh-repo" href="${r.url ? esc(r.url) : profileUrl}" target="_blank" rel="noopener noreferrer">
            <div style="min-width:0"><strong><i class="fa-regular fa-folder" aria-hidden="true"></i> ${esc(r.name)}</strong><small>${esc(r.language || "—")}</small></div>
            <span class="stars"><i class="fa-solid fa-star" aria-hidden="true"></i> ${r.stars}</span>
          </a>`).join("");
        $$("#ghStats [data-count]").forEach(countUp);

        const langs = Object.entries(d.languages).sort((a, b) => b[1] - a[1]).slice(0, 6);
        const total = langs.reduce((s, [, v]) => s + v, 0) || 1;
        $("#langLegend").innerHTML = langs.map(([n, v], i) => `<li><i style="background:${LANG_COLORS[i]}"></i>${esc(n)}<b>${Math.round((v / total) * 100)}%</b></li>`).join("");
        makeChart("langChart", {
          type: "doughnut",
          data: { labels: langs.map((l) => l[0]), datasets: [{ data: langs.map((l) => l[1]), backgroundColor: LANG_COLORS, borderWidth: 0, hoverOffset: 10 }] },
          options: { cutout: "68%", plugins: { legend: { display: false } } },
        });

        const graph = $("#ghGraph");
        if (user) {
          graph.innerHTML = `<img class="gh-graph-img" src="https://ghchart.rshah.org/8b5cf6/${encodeURIComponent(user)}" alt="GitHub contribution graph of ${esc(user)}" loading="lazy" />`;
          graph.querySelector("img").addEventListener("error", () => { graph.innerHTML = `<p class="notice"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>Contribution graph is unavailable right now.</p>`; });
        } else {
          // Placeholder heatmap (shown until DATA.github.username is set)
          const cells = Array.from({ length: 53 * 7 }, (_, k) => { const v = (Math.sin(k * 12.9898) * 43758.5453) % 1; const lvl = Math.abs(v); return lvl > .85 ? 1 : lvl > .65 ? .7 : lvl > .4 ? .4 : lvl > .2 ? .18 : .06; });
          graph.innerHTML = `<div role="img" aria-label="Sample contribution graph" style="display:grid;grid-template-rows:repeat(7,1fr);grid-auto-flow:column;gap:3px;overflow-x:auto;padding:.3rem 0">${cells.map((o) => `<span style="width:11px;height:11px;border-radius:3px;background:color-mix(in srgb,var(--violet) ${Math.round(o * 100)}%,var(--surface-2))"></span>`).join("")}</div>`;
        }
      }
      async function loadGitHub() {
        const u = (DATA.github.username || "").trim();
        const fb = DATA.github.fallback;
        const fallback = (msg) => {
          if (msg) $("#ghNotice").innerHTML = `<p class="notice"><i class="fa-solid fa-circle-info" aria-hidden="true"></i><span>${msg}</span></p>`;
          renderGitHub({ ...fb, avatar: "" }, false);
        };
        if (!u) return fallback("Showing sample numbers — set <code>DATA.github.username</code> to load live stats.");
        const key = "sh-gh-" + u;
        try {
          let cached = null;
          try { cached = JSON.parse(sessionStorage.getItem(key) || "null"); } catch (e) { cached = null; }
          let d = cached;
          if (!d) {
            const [uRes, rRes] = await Promise.all([
              fetch(`https://api.github.com/users/${encodeURIComponent(u)}`, { headers: { Accept: "application/vnd.github+json" } }),
              fetch(`https://api.github.com/users/${encodeURIComponent(u)}/repos?per_page=100&sort=updated`, { headers: { Accept: "application/vnd.github+json" } }),
            ]);
            if (!uRes.ok || !rRes.ok) throw new Error("GitHub API responded " + uRes.status);
            const user = await uRes.json();
            const repos = (await rRes.json()).filter((r) => !r.fork);
            const languages = {};
            repos.forEach((r) => { if (r.language) languages[r.language] = (languages[r.language] || 0) + 1; });
            d = {
              name: user.name || user.login, bio: user.bio || "", avatar: user.avatar_url, repos: user.public_repos, followers: user.followers, following: user.following,
              stars: repos.reduce((s, r) => s + r.stargazers_count, 0), languages: Object.keys(languages).length ? languages : { "No data": 1 },
              topRepos: repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4).map((r) => ({ name: r.name, stars: r.stargazers_count, language: r.language, url: r.html_url })),
            };
            try { sessionStorage.setItem(key, JSON.stringify(d)); } catch (e) {}
          }
          renderGitHub(d, true);
        } catch (err) {
          fallback("Live GitHub data is unavailable right now (offline or rate-limited) — showing saved numbers.");
        }
      }

      /* ==================== CODING PROFILES ==================== */
      function renderCoding() {
        $("#codingGrid").innerHTML = DATA.codingProfiles.map((c, i) => `
          <div class="reveal" style="--d:${i}"><article class="cp card glass glow tilt">
            <div class="cp-head"><span class="cp-logo" style="--logo:${c.logo}" aria-hidden="true">${esc(c.short)}</span><div><h3>${esc(c.platform)}</h3><span>@${esc(c.handle)}</span></div></div>
            <div class="cp-stats">${c.stats.map((s) => `<div><b>${esc(s.value)}</b><small>${esc(s.label)}</small></div>`).join("")}</div>
            <div class="chips">${c.badges.map((b) => `<span class="chip"><i class="fa-solid fa-award" aria-hidden="true"></i>${esc(b)}</span>`).join("")}</div>
            <a class="btn btn-ghost btn-sm" ${linkAttrs(c.url, c.platform + " profile")}>View profile <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
          </article></div>`).join("");
        const levels = ["Easy", "Medium", "Hard"], colors = ["#34d399", "#22d3ee", "#ec4899"];
        makeChart("codingChart", {
          type: "bar",
          data: { labels: DATA.codingProfiles.map((c) => c.platform), datasets: levels.map((l, i) => ({ label: l, data: DATA.codingProfiles.map((c) => c.breakdown[l] || 0), backgroundColor: colors[i], borderRadius: 8, borderSkipped: false, barThickness: 28 })) },
          options: { indexAxis: "y", scales: { x: { stacked: true }, y: { stacked: true } } },
        });
      }

      /* Chart.js wrapper with theme-aware colors and graceful fallback */
      function chartTheme(cfg) {
        const text = cssVar("--muted"), grid = cssVar("--border");
        cfg.options = cfg.options || {};
        cfg.options.plugins = cfg.options.plugins || {};
        cfg.options.plugins.legend = Object.assign({ labels: { color: text, usePointStyle: true, boxWidth: 8, font: { family: "Inter" } } }, cfg.options.plugins.legend);
        if (cfg.options.plugins.legend.labels) cfg.options.plugins.legend.labels.color = text;
        if (cfg.options.scales) Object.values(cfg.options.scales).forEach((s) => { s.ticks = Object.assign(s.ticks || {}, { color: text }); s.grid = Object.assign(s.grid || {}, { color: grid }); s.border = { display: false }; });
        return cfg;
      }
      function makeChart(id, cfg) {
        const canvas = document.getElementById(id);
        if (!canvas) return;
        if (typeof window.Chart === "undefined") {
          canvas.parentElement.innerHTML = `<p class="notice"><i class="fa-solid fa-chart-pie" aria-hidden="true"></i>Chart library couldn't load — see the summary below.</p>`;
          return;
        }
        const old = charts.find((c) => c.canvas === canvas);
        if (old) { old.destroy(); charts.splice(charts.indexOf(old), 1); }
        cfg.options = Object.assign({ responsive: true, maintainAspectRatio: false, animation: reduceMotion ? false : { duration: 1200 } }, cfg.options);
        charts.push(new window.Chart(canvas, chartTheme(cfg)));
      }
      function refreshCharts() {
        const text = cssVar("--muted"), grid = cssVar("--border");
        charts.forEach((c) => {
          const o = c.options;
          if (o.plugins && o.plugins.legend && o.plugins.legend.labels) o.plugins.legend.labels.color = text;
          if (o.scales) Object.values(o.scales).forEach((s) => { if (s.ticks) s.ticks.color = text; if (s.grid) s.grid.color = grid; });
          c.update("none");
        });
      }

      /* ==================== TESTIMONIALS (carousel) ==================== */
      function renderTestimonials() {
        const T = DATA.testimonials;
        const track = $("#carouselTrack"), dots = $("#carouselDots");
        track.innerHTML = T.map((t, i) => `
          <div class="slide" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${T.length}">
            <figure class="testimonial glass">
              <i class="fa-solid fa-quote-left quote-icon" aria-hidden="true"></i>
              <blockquote>“${esc(t.quote)}”</blockquote>
              <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <figcaption class="t-person"><span class="t-avatar" aria-hidden="true">${esc(t.name.replace(/^Dr\.\s*/, "").split(" ").map((w) => w[0]).slice(0, 2).join(""))}</span><span><strong>${esc(t.name)}</strong><span>${esc(t.role)}</span></span></figcaption>
            </figure>
          </div>`).join("");
        dots.innerHTML = T.map((_, i) => `<button class="dot" type="button" aria-label="Show testimonial ${i + 1}"></button>`).join("");
        const slides = $$(".slide", track), dotBtns = $$(".dot", dots);
        let idx = 0, timer = null;
        const go = (n) => {
          idx = (n + T.length) % T.length;
          track.style.transform = `translateX(-${idx * 100}%)`;
          slides.forEach((s, k) => { s.setAttribute("aria-hidden", String(k !== idx)); s.inert = k !== idx; });
          dotBtns.forEach((d, k) => d.setAttribute("aria-current", String(k === idx)));
        };
        const stop = () => { clearInterval(timer); timer = null; };
        const play = () => { if (reduceMotion) return; stop(); timer = setInterval(() => go(idx + 1), 5500); };
        $("#prevSlide").addEventListener("click", () => { go(idx - 1); play(); });
        $("#nextSlide").addEventListener("click", () => { go(idx + 1); play(); });
        dotBtns.forEach((d, k) => d.addEventListener("click", () => { go(k); play(); }));
        const car = $("#carousel");
        car.addEventListener("mouseenter", stop); car.addEventListener("mouseleave", play);
        car.addEventListener("focusin", stop); car.addEventListener("focusout", play);
        car.addEventListener("keydown", (e) => { if (e.key === "ArrowLeft") go(idx - 1); if (e.key === "ArrowRight") go(idx + 1); });
        document.addEventListener("visibilitychange", () => (document.hidden ? stop() : play()));
        // Swipe support (touch + mouse drag)
        const vp = $(".carousel-viewport", car);
        let x0 = null;
        vp.addEventListener("pointerdown", (e) => { x0 = e.clientX; });
        vp.addEventListener("pointerup", (e) => { if (x0 === null) return; const dx = e.clientX - x0; if (Math.abs(dx) > 45) { go(idx + (dx < 0 ? 1 : -1)); play(); } x0 = null; });
        vp.addEventListener("pointercancel", () => { x0 = null; });
        go(0); play();
      }

      /* ==================== SERVICES, INTERESTS, JOURNEY, GOALS ==================== */
      function renderServices() {
        $("#servicesGrid").innerHTML = DATA.services.map((s, i) => `
          <div class="reveal" style="--d:${i % 3}"><article class="service card glass glow tilt">
            <span class="num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
            <span class="card-icon"><i class="${s.icon}" aria-hidden="true"></i></span>
            <h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p>
            <a href="#contact" class="more">Let's talk <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
          </article></div>`).join("");
      }
      function renderInterests() {
        $("#bubbles").innerHTML = DATA.interests.map((it, i) => `<div class="reveal zoom" style="--d:${i}"><div class="bubble glass" style="--i:${i}"><i class="${it.icon} ${it.color}" aria-hidden="true"></i><span>${esc(it.name)}</span></div></div>`).join("");
      }
      function renderJourney() {
        $("#roadmap").innerHTML = DATA.learningJourney.map((s, i) => {
          const state = s.progress >= 100 ? "done" : s.progress > 0 ? "active" : "next";
          const label = { done: "Completed", active: "In progress", next: "Up next" }[state];
          return `<li class="road-step ${state} reveal" style="--d:${i % 4}">
            <span class="road-node" aria-hidden="true">${state === "done" ? '<i class="fa-solid fa-check"></i>' : i + 1}</span>
            <div class="road-card glass glow">
              <span class="road-status">${label}</span>
              <h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p>
              <div class="animate"><div class="road-pct"><span>Progress</span><span>${s.progress}%</span></div>
              <div class="bar" style="--p:${s.progress}" role="progressbar" aria-valuenow="${s.progress}" aria-valuemin="0" aria-valuemax="100" aria-label="${esc(s.title)} progress"><span></span></div></div>
            </div></li>`;
        }).join("");
      }
      function renderGoals() {
        const col = (title, sub, icon, items, end, d) => `
          <div class="reveal" style="--d:${d}"><article class="goal-col glass glow">
            <header><span class="card-icon"><i class="${icon}" aria-hidden="true"></i></span><div><h3>${title}</h3><span>${sub}</span></div></header>
            <ol class="path">${items.map((m) => `<li class="milestone ${m.done ? "done" : ""}"><span class="when">${esc(m.when)}</span><strong>${esc(m.title)}</strong><span>${esc(m.desc)}</span></li>`).join("")}</ol>
            <div class="path-end"><i class="fa-solid fa-flag-checkered" aria-hidden="true"></i>${end}</div>
          </article></div>`;
        $("#goalsGrid").innerHTML = col("Short-term goals", "Next 1–2 years", "fa-solid fa-bullseye", DATA.careerGoals.short, "Solid foundation & real-world experience", 0) +
          col("Long-term goals", "3–5+ years", "fa-solid fa-mountain-sun", DATA.careerGoals.long, "Impactful engineer & mentor", 1);
      }

      /* ==================== RESUME / CV DOWNLOAD ==================== */
      function setupCV() {
        $("#resumeList").innerHTML = DATA.resumeHighlights.map((h) => `<li><i class="fa-solid fa-circle-check" aria-hidden="true"></i>${esc(h)}</li>`).join("");
        $$("[data-cv]").forEach((a) => {
          a.href = P.cv;
          a.setAttribute("download", P.cv.split("/").pop());
          a.addEventListener("click", () => {
            if (a.id !== "dlBtn" || a.classList.contains("loading")) return;
            const label = $(".dl-label", a), icon = $("i", a);
            a.classList.add("loading");
            label.textContent = "Downloading…";
            setTimeout(() => {
              a.classList.remove("loading"); a.classList.add("done");
              icon.className = "fa-solid fa-check"; label.textContent = "Downloaded!";
              setTimeout(() => { a.classList.remove("done"); icon.className = "fa-solid fa-arrow-down"; label.textContent = "Download CV"; }, 2200);
            }, 1100);
          });
        });
      }

      /* ==================== FAQ (accordion) ==================== */
      function renderFAQ() {
        $("#faqList").innerHTML = DATA.faq.map((f, i) => `
          <div class="faq-item glass reveal ${i === 0 ? "open" : ""}" style="--d:${i}">
            <h3><button class="faq-q" type="button" id="faq-q-${i}" aria-expanded="${i === 0}" aria-controls="faq-a-${i}">${esc(f.q)}<span class="plus" aria-hidden="true"></span></button></h3>
            <div class="faq-a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}"><div><p>${esc(f.a)}</p></div></div>
          </div>`).join("");
        $$(".faq-q").forEach((b) => b.addEventListener("click", () => {
          const item = b.closest(".faq-item"), open = !item.classList.contains("open");
          $$(".faq-item.open").forEach((o) => { o.classList.remove("open"); $(".faq-q", o).setAttribute("aria-expanded", "false"); });
          item.classList.toggle("open", open);
          b.setAttribute("aria-expanded", String(open));
        }));
      }

      /* ==================== CONTACT (validated form) ==================== */
      function renderContact() {
        const items = [
          { icon: "fa-solid fa-envelope", label: "Email", html: `<a href="mailto:${esc(P.email)}">${esc(P.email)}</a>` },
          { icon: "fa-solid fa-phone", label: "Phone", html: `<a href="tel:${esc(P.phone.replace(/[^+\d]/g, ""))}">${esc(P.phone)}</a>` },
          { icon: "fa-solid fa-location-dot", label: "Location", html: `<span>${esc(P.location)}</span>` },
        ];
        $("#contactInfo").innerHTML = items.map((it, i) => `<div class="info-item glass reveal from-left" style="--d:${i}"><span class="card-icon"><i class="${it.icon}" aria-hidden="true"></i></span><div><small>${it.label}</small>${it.html}</div></div>`).join("") +
          `<div class="availability glass reveal from-left" style="--d:3"><span class="pulse"></span><span>${esc(DATA.contact.availability)}</span></div>
           <div class="socials reveal from-left" style="--d:4;margin-top:.4rem">${DATA.socials.map((s) => `<a class="social magnetic" ${linkAttrs(s.url, s.name)} aria-label="${esc(s.name)}"><i class="${s.icon}" aria-hidden="true"></i></a>`).join("")}</div>`;

        const form = $("#contactForm"), status = $("#formStatus"), btn = $("#submitBtn");
        const rules = {
          name: (v) => (v.trim().length >= 2 ? "" : "Please enter your name (at least 2 characters)."),
          email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Please enter a valid email address."),
          subject: (v) => (v.trim().length >= 3 ? "" : "Please add a subject (at least 3 characters)."),
          message: (v) => (v.trim().length >= 10 ? "" : "Your message should be at least 10 characters."),
        };
        const validate = (input) => {
          const msg = rules[input.name](input.value);
          const field = input.closest(".field");
          field.classList.toggle("invalid", !!msg);
          input.setAttribute("aria-invalid", String(!!msg));
          $(".error", field).textContent = msg;
          return !msg;
        };
        const inputs = Object.keys(rules).map((n) => form.elements[n]);
        inputs.forEach((inp) => {
          inp.addEventListener("blur", () => { if (inp.value) validate(inp); });
          inp.addEventListener("input", () => { if (inp.closest(".field").classList.contains("invalid")) validate(inp); });
        });
        const showStatus = (ok, text) => {
          status.className = "form-status show " + (ok ? "success" : "error");
          status.innerHTML = ok
            ? `<svg class="check-svg" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" /><path d="M12 20.5l5.5 5.5L28 15" /></svg><span>${text}</span>`
            : `<i class="fa-solid fa-circle-exclamation" style="color:var(--pink);font-size:1.4rem" aria-hidden="true"></i><span>${text}</span>`;
        };
        form.addEventListener("submit", async (e) => {
          e.preventDefault();
          const valid = inputs.map(validate).every(Boolean);
          if (!valid) {
            form.classList.remove("shake"); void form.offsetWidth; form.classList.add("shake");
            inputs.find((i) => i.getAttribute("aria-invalid") === "true").focus();
            return;
          }
          if (form.elements._gotcha.value) return; // spam bot
          const v = Object.fromEntries(inputs.map((i) => [i.name, i.value.trim()]));
          btn.classList.add("loading"); btn.disabled = true; $(".label", btn).textContent = "Sending…";
          try {
            if (DATA.contact.formspree) {
              const res = await fetch(DATA.contact.formspree, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
              if (!res.ok) throw new Error("Form service error");
              showStatus(true, `Thanks ${esc(v.name.split(" ")[0])}! Your message was sent — I'll reply soon.`);
            } else {
              // mailto fallback — opens the visitor's email app with everything pre-filled
              const body = `${v.message}\n\n— ${v.name} (${v.email})`;
              window.location.href = `mailto:${P.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;
              showStatus(true, `Thanks ${esc(v.name.split(" ")[0])}! Your email app should open with the message ready to send.`);
            }
            form.reset();
          } catch (err) {
            showStatus(false, `Sorry, something went wrong. Please email me directly at ${esc(P.email)}.`);
            form.classList.remove("shake"); void form.offsetWidth; form.classList.add("shake");
          } finally {
            btn.classList.remove("loading"); btn.disabled = false; $(".label", btn).textContent = "Send message";
          }
        });
      }

      /* ==================== REVEAL + COUNTERS ==================== */
      const revealIO = "IntersectionObserver" in window ? new IntersectionObserver((entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); }
      }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }) : null;
      function observeReveals(root = document) {
        $$(".reveal:not(.in)", root).forEach((el) => (revealIO ? revealIO.observe(el) : el.classList.add("in")));
      }
      function countUp(el) {
        if (el.dataset.counted) return;
        el.dataset.counted = "1";
        const target = parseFloat(el.dataset.count) || 0;
        const fmt = (n) => Math.round(n).toLocaleString("en-US");
        if (reduceMotion) { el.textContent = fmt(target); return; }
        const start = performance.now(), dur = 1800;
        const step = (t) => { const p = Math.min((t - start) / dur, 1); el.textContent = fmt(target * (1 - Math.pow(1 - p, 4))); if (p < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      }
      function observeCounters() {
        const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { countUp(e.target); io.unobserve(e.target); } }), { threshold: 0.5 });
        $$("[data-count]").forEach((el) => io.observe(el));
      }

      /* ==================== NAV: active section, mobile menu, scroll UI ==================== */
      function setupNav() {
        const links = $$("[data-nav]");
        const setActive = (id) => links.forEach((a) => { const on = a.dataset.nav === id; a.classList.toggle("active", on); if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
        const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: "-45% 0px -50% 0px" });
        SECTIONS.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el); });

        const menu = $("#mobileMenu"), toggle = $("#menuToggle");
        const setMenu = (open) => {
          menu.classList.toggle("open", open);
          menu.setAttribute("aria-hidden", String(!open));
          menu.inert = !open;
          toggle.setAttribute("aria-expanded", String(open));
          toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
          toggle.innerHTML = `<i class="fa-solid ${open ? "fa-xmark" : "fa-bars"}" aria-hidden="true"></i>`;
          document.documentElement.classList.toggle("modal-open", open);
          if (open) { const first = $("a", menu); if (first) first.focus(); }
        };
        menu.inert = true;
        toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
        menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
        document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.classList.contains("open")) { setMenu(false); toggle.focus(); } });
        window.addEventListener("resize", () => { if (window.innerWidth > 1020 && menu.classList.contains("open")) setMenu(false); });

        // Scroll-driven UI (progress bar, nav state, back-to-top ring, timeline fill)
        const bar = $("#scrollProgress"), nav = $("#nav"), toTop = $("#toTop"), tl = $("#eduTimeline");
        let ticking = false, lastY = window.scrollY;
        const onScroll = () => {
          const y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
          const p = max > 0 ? y / max : 0;
          bar.style.transform = `scaleX(${p})`;
          nav.classList.toggle("scrolled", y > 30);
          nav.classList.toggle("hidden", y > lastY && y > 600 && !menu.classList.contains("open"));
          toTop.classList.toggle("show", y > 700);
          toTop.style.setProperty("--p", p.toFixed(3));
          const r = tl.getBoundingClientRect();
          const fill = Math.min(Math.max((window.innerHeight * 0.6 - r.top) / r.height, 0), 1);
          tl.style.setProperty("--fill", (fill * 100).toFixed(1) + "%");
          lastY = y; ticking = false;
        };
        window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
        onScroll();
        toTop.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); $(".brand").focus({ preventScroll: true }); });

        // Placeholder links ("#") show a friendly toast instead of jumping to top
        document.addEventListener("click", (e) => {
          const a = e.target.closest("a[data-placeholder]");
          if (a) { e.preventDefault(); toast(`${a.dataset.placeholder} link coming soon.`, "fa-link"); }
        });
      }

      /* ==================== THEME TOGGLE ==================== */
      function setupTheme() {
        const btn = $("#themeToggle");
        const sync = () => {
          const t = document.documentElement.getAttribute("data-theme");
          btn.innerHTML = `<i class="fa-solid ${t === "dark" ? "fa-sun" : "fa-moon"}" aria-hidden="true"></i>`;
          btn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
          const meta = $('meta[name="theme-color"]');
          if (meta) meta.setAttribute("content", t === "dark" ? "#06060d" : "#f4f4fb");
        };
        window.toggleTheme = () => {
          const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
          document.documentElement.setAttribute("data-theme", next);
          try { localStorage.setItem("sh-theme", next); } catch (e) {}
          sync();
          refreshCharts();
          document.dispatchEvent(new CustomEvent("themechange"));
        };
        btn.addEventListener("click", window.toggleTheme);
        sync();
      }

      /* ==================== CUSTOM CURSOR + MAGNETIC + 3D TILT ==================== */
      function setupCursor() {
        if (!finePointer || reduceMotion) return;
        const dot = $("#cursorDot"), ring = $("#cursorRing");
        let x = -100, y = -100, rx = -100, ry = -100;
        document.body.classList.add("has-cursor");
        window.addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; dot.style.transform = `translate3d(${x}px,${y}px,0)`; document.body.classList.remove("cursor-out"); }, { passive: true });
        document.addEventListener("mouseleave", () => document.body.classList.add("cursor-out"));
        window.addEventListener("mousedown", () => ring.classList.add("is-down"));
        window.addEventListener("mouseup", () => ring.classList.remove("is-down"));
        document.addEventListener("mouseover", (e) => ring.classList.toggle("is-hover", !!e.target.closest("a, button, [role='tab'], .bubble, input, textarea")));
        (function loop() { rx += (x - rx) * 0.18; ry += (y - ry) * 0.18; ring.style.transform = `translate3d(${rx}px,${ry}px,0)`; requestAnimationFrame(loop); })();
      }
      function bindInteractions(root = document) {
        if (!finePointer || reduceMotion) return;
        $$(".magnetic:not([data-bound])", root).forEach((el) => {
          el.dataset.bound = "1";
          el.addEventListener("mousemove", (e) => { const r = el.getBoundingClientRect(); el.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.25}px ${(e.clientY - r.top - r.height / 2) * 0.35}px`; });
          el.addEventListener("mouseleave", () => { el.style.translate = ""; });
        });
        $$(".glow:not([data-glow])", root).forEach((el) => {
          el.dataset.glow = "1";
          const isTilt = el.classList.contains("tilt");
          el.addEventListener("mousemove", (e) => {
            const r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
            el.style.setProperty("--mx", px * 100 + "%"); el.style.setProperty("--my", py * 100 + "%");
            if (isTilt) { el.classList.add("tilting"); el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 9}deg) rotateY(${(px - 0.5) * 11}deg) translateY(-4px)`; }
          });
          el.addEventListener("mouseleave", () => { if (isTilt) { el.classList.remove("tilting"); el.style.transform = ""; } });
        });
      }

      /* ==================== HERO PARTICLE NETWORK (canvas) ==================== */
      function setupParticles() {
        const canvas = $("#particles");
        if (!canvas || !canvas.getContext) return;
        const ctx = canvas.getContext("2d");
        let w = 0, h = 0, pts = [], raf = null, rgb = cssVar("--particle") || "167,139,250";
        const mouse = { x: -9999, y: -9999 };
        const resize = () => {
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          w = canvas.clientWidth; h = canvas.clientHeight;
          canvas.width = w * dpr; canvas.height = h * dpr;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          const count = Math.min(90, Math.max(24, Math.floor((w * h) / 15000)));
          pts = Array.from({ length: count }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, r: Math.random() * 1.6 + 0.6 }));
        };
        const draw = () => {
          ctx.clearRect(0, 0, w, h);
          for (const p of pts) {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
            const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
            if (d > 0 && d < 120) { p.x += (dx / d) * 1.4; p.y += (dy / d) * 1.4; }
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(${rgb},.85)`; ctx.fill();
          }
          for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
            const a = pts[i], b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
            if (d2 < 16900) { ctx.strokeStyle = `rgba(${rgb},${((1 - Math.sqrt(d2) / 130) * 0.35).toFixed(3)})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
          }
        };
        const loop = () => { draw(); raf = requestAnimationFrame(loop); };
        const start = () => { if (!raf && !reduceMotion) loop(); };
        const stop = () => { if (raf) cancelAnimationFrame(raf); raf = null; };
        resize();
        if (reduceMotion) draw();
        let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { resize(); if (reduceMotion) draw(); }, 150); });
        const hero = $("#home");
        hero.addEventListener("mousemove", (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
        hero.addEventListener("mouseleave", () => { mouse.x = mouse.y = -9999; });
        new IntersectionObserver((en) => (en[0].isIntersecting && !document.hidden ? start() : stop())).observe(hero);
        document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
        document.addEventListener("themechange", () => { rgb = cssVar("--particle"); if (reduceMotion) draw(); });
      }

      /* ==================== COMMAND PALETTE (Ctrl/⌘ + K) ==================== */
      function setupPalette() {
        const dlg = $("#cmdk"), input = $("#cmdkInput"), list = $("#cmdkList");
        const go = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }); history.replaceState(null, "", "#" + id); };
        const items = [
          ...SECTIONS.map((s, i) => ({ group: "Sections", label: s.label, icon: s.icon, hint: String(i + 1).padStart(2, "0"), run: () => go(s.id) })),
          { group: "Actions", label: "Toggle light / dark theme", icon: "fa-solid fa-circle-half-stroke", hint: "Theme", run: () => window.toggleTheme() },
          { group: "Actions", label: "Download CV", icon: "fa-solid fa-download", hint: "PDF", run: () => $("#dlBtn").click() },
          { group: "Actions", label: "Copy email address", icon: "fa-regular fa-copy", hint: P.email, run: () => copyEmail() },
          { group: "Actions", label: "Send me a message", icon: "fa-solid fa-paper-plane", hint: "Contact", run: () => { go("contact"); setTimeout(() => $("#cName").focus({ preventScroll: true }), 600); } },
        ];
        let filtered = items, active = 0;
        const render = () => {
          const q = input.value.trim().toLowerCase();
          filtered = items.filter((it) => (it.label + " " + it.group).toLowerCase().includes(q));
          active = Math.min(active, Math.max(filtered.length - 1, 0));
          if (!filtered.length) { list.innerHTML = `<div class="cmdk-empty">No results for “${esc(input.value)}”</div>`; input.removeAttribute("aria-activedescendant"); return; }
          let html = "", group = "";
          filtered.forEach((it, i) => {
            if (it.group !== group) { group = it.group; html += `<div class="cmdk-group" role="presentation">${group}</div>`; }
            html += `<div class="cmdk-item" role="option" id="cmdk-opt-${i}" data-i="${i}" aria-selected="${i === active}"><i class="${it.icon}" aria-hidden="true"></i>${esc(it.label)}<small>${esc(it.hint)}</small></div>`;
          });
          list.innerHTML = html;
          input.setAttribute("aria-activedescendant", "cmdk-opt-" + active);
          const el = $(`#cmdk-opt-${active}`); if (el) el.scrollIntoView({ block: "nearest" });
        };
        const run = (i) => { const it = filtered[i]; if (!it) return; closeDialog(dlg); setTimeout(it.run, 60); };
        const open = () => { input.value = ""; active = 0; render(); openDialog(dlg, document.activeElement); setTimeout(() => input.focus(), 30); };
        $("#cmdkOpen").addEventListener("click", open);
        document.addEventListener("keydown", (e) => {
          if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); dlg.open ? closeDialog(dlg) : open(); }
        });
        input.addEventListener("input", () => { active = 0; render(); });
        input.addEventListener("keydown", (e) => {
          if (e.key === "ArrowDown") { e.preventDefault(); active = (active + 1) % Math.max(filtered.length, 1); render(); }
          else if (e.key === "ArrowUp") { e.preventDefault(); active = (active - 1 + filtered.length) % Math.max(filtered.length, 1); render(); }
          else if (e.key === "Enter") { e.preventDefault(); run(active); }
        });
        list.addEventListener("click", (e) => { const it = e.target.closest(".cmdk-item"); if (it) run(+it.dataset.i); });
        list.addEventListener("mousemove", (e) => { const it = e.target.closest(".cmdk-item"); if (it && +it.dataset.i !== active) { active = +it.dataset.i; $$(".cmdk-item", list).forEach((x) => x.setAttribute("aria-selected", String(+x.dataset.i === active))); } });
        dlg.addEventListener("click", (e) => { if (e.target === dlg) closeDialog(dlg); });
      }
      async function copyEmail() {
        try { await navigator.clipboard.writeText(P.email); toast("Email copied to clipboard!", "fa-check"); }
        catch (e) { toast(P.email, "fa-envelope"); }
      }

      /* ==================== LOADER + INIT ==================== */
      function hideLoader() {
        const loader = $("#loader");
        if (loader.classList.contains("done")) return;
        loader.classList.add("done");
        document.body.classList.remove("loading");
        document.body.classList.add("ready");
        typewriter();
      }

      function init() {
        renderNav(); renderHero(); renderAbout(); renderSkills(); renderEducation(); renderExperience();
        renderProjects(); renderCerts(); renderAchievements(); renderCoding(); renderTestimonials();
        renderServices(); renderInterests(); renderJourney(); renderGoals(); setupCV(); renderFAQ(); renderContact();
        setupTheme(); setupNav(); setupCursor(); setupParticles(); setupPalette();
        observeReveals(); observeCounters(); bindInteractions();
        // GitHub data loads when the section gets close to the viewport
        const ghIO = new IntersectionObserver((en) => { if (en[0].isIntersecting) { ghIO.disconnect(); loadGitHub().then(() => bindInteractions($("#github"))); } }, { rootMargin: "600px 0px" });
        ghIO.observe($("#github"));

        const minTime = reduceMotion ? 0 : 1300, t0 = performance.now();
        const done = () => setTimeout(hideLoader, Math.max(0, minTime - (performance.now() - t0)));
        if (document.readyState === "complete") done(); else window.addEventListener("load", done);
        setTimeout(hideLoader, 3500); // safety net if a CDN is slow

        // 🥚 Console easter egg
        console.log("%c SH %c Hey there, curious developer! 👋", "background:linear-gradient(120deg,#8b5cf6,#22d3ee,#ec4899);color:#fff;font-weight:700;padding:6px 10px;border-radius:8px;font-size:14px", "color:#8b5cf6;font-weight:600;font-size:14px;padding-left:6px");
        console.log("%cLike what you see? Let's build something together → " + P.email + "\nPsst… press Ctrl/⌘ + K to open the command palette.", "color:#22d3ee;font-size:12px");
      }

      init();
    })();
