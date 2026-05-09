export const profile = {
  name: "Nithya Paleti",
  title: "Software Engineer · SDE Intern",
  location: "Lucknow, India",
  email: "nithyapaleti8@gmail.com",
  github: "https://github.com/nithya7089",
  linkedin: "https://www.linkedin.com/in/nithya-paleti-1a8b93243/",
  leetcode: "https://leetcode.com/u/Nithya0709/",
  codechef: "https://www.codechef.com/users/nithya_9652",
  codeforces: "https://codeforces.com/profile/devil_hydra_09",
  geeksforgeeks: "https://www.geeksforgeeks.org/profile/nithyapaleti",
  resumeUrl: "#",
  summary:
    "Computer Science and AI undergraduate at IIIT Lucknow with Amazon internship experience, focused on backend reliability, LLM workflow quality, and full-stack products.",
};

export const codingProfiles = [
  {
    name: "LeetCode",
    handle: "Nithya0709",
    url: "https://leetcode.com/u/Nithya0709/",
  },
  {
    name: "CodeChef",
    handle: "nithya_9652",
    url: "https://www.codechef.com/users/nithya_9652",
  },
  {
    name: "Codeforces",
    handle: "devil_hydra_09",
    url: "https://codeforces.com/profile/devil_hydra_09",
  },
  {
    name: "GeeksforGeeks",
    handle: "nithyapaleti",
    url: "https://www.geeksforgeeks.org/profile/nithyapaleti",
  },
  {
    name: "GitHub",
    handle: "nithya7089",
    url: "https://github.com/nithya7089",
  },
];

export const stats = [
  { label: "CGPA at IIIT Lucknow", value: "8.5" },
  { label: "DSA problems solved", value: "1000+" },
  { label: "CodeChef max rating", value: "2029" },
  { label: "Graduation", value: "2026" },
];

export const experience = [
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    location: "Chennai, India",
    period: "Jul 2025 — Dec 2025",
    highlights: [
      "Contributing as a Software Development Engineer Intern in the Alexa Food domain team at Amazon.",
      "Reduced Customer Problem Detection Rate (CPDR) by optimizing LLM instructions and prompts, improving system accuracy and customer experience.",
      "Improved Alexa food instruction flows to boost reliability, efficiency, and customer experience.",
    ],
    tags: ["Java", "LLMs", "Prompt Optimization", "Alexa", "Backend"],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    location: "Chennai, India",
    period: "Jun 2024 — Jul 2024",
    highlights: [
      "Worked in the FTV and Tablets team as an SDE Intern.",
      "Implemented backend services with Java, resulting in a 15% optimization of system performance.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions with a 25% improvement in quality and efficiency.",
    ],
    tags: ["Java", "Backend Services", "Performance", "Cross-functional Delivery"],
  },
];

export const projects = [
  {
    name: "ParkAndRide",
    tagline: "Full-stack parking reservation platform",
    description:
      "A reservation system for metro parking lots with hourly, daily, and monthly bookings, real-time occupancy, dynamic pricing via a sigmoid demand model, and Stripe payments. Live on AWS EC2.",
    stack: [
      "Node.js",
      "Next.js",
      "MongoDB",
      "Redis",
      "Stripe",
      "AWS EC2",
      "JWT",
    ],
    highlights: [
      "Improved slot allocation accuracy by 35%.",
      "Dynamic pricing engine based on peak/off-peak demand.",
      "JWT-secured REST APIs with Redis-backed caching.",
      "Tiered cancellation policy with full test coverage.",
    ],
    accent: "from-cyan-300/70 via-sky-400/40 to-transparent",
    repo: "https://github.com/nithya7089/Park-and-Ride",
    live: "https://park-and-ride-nine.vercel.app/",
  },
  {
    name: "AURA WELL",
    tagline: "AI-based facial skincare recommendation",
    description:
      "A full-stack web app that analyzes facial skin images and user inputs through ML models to return personalized skincare recommendations with a polished Material UI experience.",
    stack: ["Python", "Flask", "React", "Material UI", "ML"],
    highlights: [
      "Webcam capture + interactive intake form on the frontend.",
      "Flask backend performing skin tone & concern analysis.",
      "Recommendation engine tuned for personalization.",
      "Responsive, accessible, and smooth UX.",
    ],
    accent: "from-fuchsia-300/70 via-violet-400/40 to-transparent",
    repo: "https://github.com/nithya7089/Aurawell",
    live: null as string | null,
  },
];

export const achievements = [
  "Expert on Codeforces, Knight on LeetCode, and 5-Star (max 2029) on CodeChef.",
  "LeetCode global ranks: 46/18k and 113/19k.",
  "CodeChef global rank: 71/20k.",
  "Codeforces global ranks: 719/40k and 1217/40k.",
  "Solved 1000+ DSA problems across LeetCode, Codeforces, and GeeksforGeeks.",
  "Google Cybersecurity Professional Certificate (Coursera).",
];

export const education = [
  {
    school: "Indian Institute of Information Technology, Lucknow",
    degree: "B.Tech, Computer Science and Artificial Intelligence",
    period: "Nov 2022 — Jun 2026",
    score: "CGPA 8.5 / 10",
    note: "OS, Software Engineering, Computer Networks, ML, DSA, DBMS, OOPS.",
  },
  {
    school: "Narayana Junior College, Vijayawada",
    degree: "Intermediate (12th)",
    period: "Nov 2020 — Jul 2022",
    score: "80%",
  },
  {
    school: "Sri Chaitanya Techno School, Vijayawada",
    degree: "Secondary (10th)",
    period: "Jul 2019 — Apr 2020",
    score: "100%",
  },
];

export const skills = {
  Languages: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  Frontend: ["ReactJS", "Redux", "Tailwind CSS", "Material UI", "Next.js"],
  Backend: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT", "Java"],
  Data: ["MongoDB", "MySQL", "Firebase", "Redis"],
  Cloud: ["AWS EC2", "Git", "Linux", "Stripe"],
  ML: ["Machine Learning", "Feature Engineering", "Image Analysis"],
};
