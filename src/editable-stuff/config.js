// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#0b3d91, #4484ce, #1ad7c0, #4cc9f0, #7209b7",
  firstName: "Luiz",
  middleName: "F. G.",
  lastName: "dos Santos",
  message: " Ph.D. — Machine Learning Engineer | LLM Systems, Applied AI & Scalable ML ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/luiz0992",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/luiz-fernando-guedes-dos-santos-641812109/",
    },
    {
      image: "fa-google",
      url: "https://bit.ly/2TV4aik",
    },
    {
      image: "fa-envelope",
      url: "mailto:luiz.fernando0992@gmail.com",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/luiz-profile.png"),
  imageSize: 375,
  message:
    "I'm Luiz Fernando Guedes dos Santos, a Machine Learning Engineer and AI Research Lead with a Ph.D. in Physics. I specialize in taking LLM, transformer, and applied AI systems from research prototypes through production inference. My focus areas include distributed training, high-throughput data pipelines, GPU performance optimization, model evaluation, and reliable serving with PyTorch, Triton, TensorRT, Kubernetes, and MLflow. Previously, I worked as a Principal Data Scientist at Shell leading enterprise GenAI and applied AI systems, and as a Postdoctoral Associate at CIRES/CU Boulder applying AI to space sciences. My research at NASA Goddard Space Flight Center and the Frontier Development Lab combined deep learning with solar physics and space weather forecasting.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "luiz0992",
  reposLength: 4,
  specificRepos: ["ml-engineer-starter-kit", "flash-attn3-builds", "thesis_template_CUA", "Tweeter_Post_Classifier"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message: "",
  images: [],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "PyTorch / CUDA / GPU", value: 95 },
    { name: "LLM Systems / Transformers", value: 95 },
    { name: "Python", value: 95 },
    { name: "Distributed Training", value: 90 },
    { name: "TensorRT / Triton / Inference", value: 90 },
    { name: "MLflow / Kubernetes / Docker", value: 85 },
    { name: "RAG / NLP / Computer Vision", value: 90 },
    { name: "Data Pipelines / GCS / MDS", value: 85 },
  ],
  softSkills: [
    { name: "Technical Leadership", value: 95 },
    { name: "Cross-functional Collaboration", value: 90 },
    { name: "Research & Innovation", value: 95 },
    { name: "Problem Solving", value: 95 },
    { name: "Roadmap Ownership", value: 85 },
    { name: "Mentoring", value: 90 },
    { name: "Scientific Communication", value: 90 },
    { name: "Adaptability", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm always interested in discussing ML engineering, AI research, and collaboration opportunities. Whether you have a question about LLM systems, distributed training, or applied AI — feel free to reach out at",
  email: "luiz.fernando0992@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: "AI Researcher Lead",
      companylogo: require("../assets/img/delphos.svg"),
      date: "Jan 2025 – Present · Delphos Labs, Houston, TX",
    },
    {
      role: "Principal Data Scientist & AI Researcher",
      companylogo: require("../assets/img/shell.svg"),
      date: "Mar 2022 – Dec 2024 · Shell, Houston, TX",
    },
    {
      role: "Postdoctoral Associate — AI for Space Sciences",
      companylogo: require("../assets/img/cires.svg"),
      date: "May 2021 – Mar 2022 · CIRES / CU Boulder",
    },
    {
      role: "Researcher — NASA Solar Dynamics Observatory",
      companylogo: require("../assets/img/fdl.svg"),
      date: "Jun 2019 – May 2021 · Frontier Development Lab",
    },
    {
      role: "Research Assistant — ML for Mission Data",
      companylogo: require("../assets/img/nasa.svg"),
      date: "Jan 2017 – May 2021 · NASA Goddard Space Flight Center",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
