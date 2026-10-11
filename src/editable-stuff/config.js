// Navigation Bar SECTION
const navBar = {
  show: true,
  brandText: "Luiz F. G. dos Santos, Ph.D.",
  roleBadge: "Delphos Labs",
};

// Main Body SECTION
const mainBody = {
  firstName: "Luiz",
  middleName: "F. G.",
  lastName: "dos Santos",
  credentials: "Ph.D.",
  badge: "AI Research Lead · Ph.D. in Physics · Nobel Scholar",
  title: "Luiz F. G. dos Santos, Ph.D.",
  tagline: "Machine Learning Engineer & AI Researcher specializing in scalable LLM systems, distributed training, high-throughput data pipelines, and production inference.",
  icons: [
    {
      name: "GitHub",
      image: "fa-github",
      url: "https://github.com/luiz0992",
    },
    {
      name: "LinkedIn",
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/luiz-fernando-guedes-dos-santos-641812109/",
    },
    {
      name: "Google Scholar",
      image: "fa-google",
      url: "https://bit.ly/2TV4aik",
    },
    {
      name: "Email",
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
  imageSize: 320,
  message:
    "I'm an AI Research Lead and Machine Learning Engineer with a Ph.D. in Physics, combining rigorous mathematical foundations with hands-on systems engineering. I specialize in taking LLM, transformer, and scientific AI models from research prototypes into scalable, production inference environments.",
  subMessage:
    "My core focus spans distributed pretraining and fine-tuning, high-throughput tokenization and data pipelines, GPU performance optimization (FlashAttention 3, Composer, Accelerate), and reliable inference serving with Triton, TensorRT-LLM, Kubernetes, and MLflow.",
  stats: [
    { value: "Ph.D.", label: "Physics (Distinction)" },
    { value: "Lead AI", label: "Delphos Labs" },
    { value: "Alum", label: "Shell & NASA GSFC" },
    { value: "Honors", label: "Nobel Scholar" },
  ],
  resume: require("../editable-stuff/resume.pdf"),
  scholarUrl: "https://bit.ly/2TV4aik",
};

// EXPERIENCE SECTION
const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: "AI Researcher Lead",
      company: "Delphos Labs Inc.",
      location: "Houston, TX",
      companylogo: require("../assets/img/delphos.svg"),
      date: "Jan 2025 – Present",
      periodDetail: "AI Researcher Lead (Nov 2025 – Present) · AI Researcher (Jan 2025 – Oct 2025)",
      summary:
        "Lead AI research and ML systems engineering for applied AI products, focusing on tokenizer development, learned technical representations, distributed training infrastructure, and production inference.",
      achievements: [
        "Directed core development of an ML training platform spanning distributed pretraining/fine-tuning, Hydra/Pydantic experiment configuration, MLflow model management, and objective evaluation.",
        "Productionized model applications for embedding, naming, and detection use cases through Triton, TensorRT, TensorRT-LLM, Kubernetes, and MLflow Model Registry.",
        "Improved GPU training reliability and throughput with Composer/Accelerate, FlashAttention 3, mixed precision controls, and distributed data-loading optimizations.",
        "Engineered high-throughput tokenization and dataset workflows for technical representations (WordPiece tokenizer training, GCS/MDS datasets, ModernBERT/FlexBERT models).",
      ],
      skills: ["PyTorch", "TensorRT-LLM", "Triton", "FlashAttention 3", "Composer", "Accelerate", "Kubernetes", "MLflow", "ModernBERT"],
    },
    {
      role: "Principal Data Scientist & AI Researcher",
      company: "Shell",
      location: "Houston, TX",
      companylogo: require("../assets/img/shell.svg"),
      date: "Mar 2022 – Dec 2024",
      periodDetail: "Enterprise GenAI and applied AI systems",
      summary:
        "Served as Principal Data Scientist leading enterprise LLM, RAG, NLP, and automation projects from initial prototypes through enterprise adoption.",
      achievements: [
        "Deployed LLM-based agents for file analysis, information extraction, and analytical automation, turning ambiguous business needs into adopted capabilities.",
        "Designed RAG systems that improved contextual grounding for enterprise LLM workflows and reduced dependence on manual document review.",
        "Directed NLP and deep learning projects for unstructured-data extraction, structuring, and analysis across technical and business domains.",
        "Built predictive, sequence-modeling, and reinforcement-learning models, balancing scientific rigor, performance, interpretability, and deployment readiness.",
      ],
      skills: ["Enterprise GenAI", "RAG Architectures", "LLM Agents", "NLP", "Reinforcement Learning", "Python", "Predictive Modeling"],
    },
    {
      role: "Postdoctoral Associate — AI for Space Sciences",
      company: "CIRES / University of Colorado Boulder",
      location: "Boulder, CO",
      companylogo: require("../assets/img/cires.svg"),
      date: "May 2021 – Mar 2022",
      periodDetail: "Postdoctoral Research",
      summary:
        "Built deep learning and statistical forecasting models for solar-wind time series, remote-sensing satellite imagery, and sensor data.",
      achievements: [
        "Extracted supervised and unsupervised representations from extreme ultraviolet (EUV) solar images across multiple frequencies and magnetic-field data for deep learning forecasting.",
        "Developed quantitative uncertainty models for machine learning algorithms in space-weather forecasting, improving reliability and risk interpretation.",
      ],
      skills: ["Computer Vision", "Time Series", "Uncertainty Quantification", "Space Weather", "Deep Learning", "Signal Processing"],
    },
    {
      role: "Researcher — NASA Solar Dynamics Observatory",
      company: "Frontier Development Lab / SETI Institute",
      location: "Mountain View, CA",
      companylogo: require("../assets/img/fdl.svg"),
      date: "Jun 2019 – May 2021",
      periodDetail: "AI for Space Science Research",
      summary:
        "Applied state-of-the-art computer vision to expand the observational capabilities of NASA's Solar Dynamics Observatory (SDO).",
      achievements: [
        "Developed a calibration technique for EUV instruments using a Convolutional Neural Network (CNN) over morphological and brightness features from AIA observations (published in Astronomy & Astrophysics).",
        "Pioneered unsupervised deep learning on multi-channel Atmospheric Imaging Assembly (AIA) data using U-Nets and GANs for image-to-image translation and synthetic solar-corona imagery.",
      ],
      skills: ["CNNs", "GANs", "U-Nets", "Image Translation", "NASA SDO AIA", "A&A Publication"],
    },
    {
      role: "Research Assistant — ML for Mission Data",
      company: "NASA Goddard Space Flight Center",
      location: "Washington Metro, DC",
      companylogo: require("../assets/img/nasa.svg"),
      date: "Jan 2017 – May 2021",
      periodDetail: "Graduate Research Assistant",
      summary:
        "Reduced, calibrated, and modeled multi-spacecraft mission data (SDO, STEREO, WIND) with machine learning and GPU acceleration.",
      achievements: [
        "Trained deep neural networks to identify and classify magnetic flux rope signatures in interplanetary coronal mass ejections (published in Solar Physics).",
        "Engineered compiled, vectorized workflows, parallel processing, and GPU acceleration with Bayesian/frequentist statistics for robust inference.",
      ],
      skills: ["NASA GSFC", "Flux Rope Detection", "GPU Programming", "Bayesian Modeling", "Solar Physics"],
    },
  ],
};

// PUBLICATIONS & HONORS SECTION
const publications = {
  show: true,
  heading: "Research & Publications",
  subheading: "Peer-reviewed papers in machine learning, heliophysics, and remote sensing.",
  googleScholarUrl: "https://bit.ly/2TV4aik",
  honors: [
    {
      title: "John C. Mather Nobel Scholar",
      organization: "The John and Jane Mather Foundation / NASA Goddard",
      detail: "Prestigious award honoring graduate research excellence in NASA mission science.",
    },
    {
      title: "Award of Merit",
      organization: "NASA Frontier Development Lab / SETI Institute",
      detail: "Recognizing outstanding AI contributions to space science challenges.",
    },
  ],
  papers: [
    {
      title: "Multichannel autocalibration for the Atmospheric Imaging Assembly using machine learning",
      journal: "Astronomy & Astrophysics (A&A)",
      year: "2021",
      description: "Developed a deep convolutional neural network framework to autocalibrate multi-channel EUV instruments on NASA's Solar Dynamics Observatory without physical recalibration hardware.",
      link: "https://bit.ly/2TV4aik",
      badge: "Astronomy & Astrophysics",
    },
    {
      title: "Identifying flux rope signatures using a deep neural network",
      journal: "Solar Physics",
      year: "2020",
      description: "Designed a deep learning pipeline to identify interplanetary coronal mass ejection flux ropes from in situ magnetic field time series, advancing automated space weather prediction.",
      link: "https://bit.ly/2TV4aik",
      badge: "Solar Physics",
    },
    {
      title: "Exploring the limits of synthetic creation of solar EUV images via image-to-image translation",
      journal: "The Astrophysical Journal (ApJ)",
      year: "2022",
      description: "Investigated GAN and U-Net generative architectures for synthesizing solar extreme ultraviolet observations across disparate spectral wavelengths.",
      link: "https://bit.ly/2TV4aik",
      badge: "The Astrophysical Journal",
    },
  ],
};

// EDUCATION SECTION
const education = {
  show: true,
  heading: "Education",
  schools: [
    {
      degree: "Ph.D. in Physics",
      school: "The Catholic University of America",
      location: "Washington, DC",
      period: "Sep 2016 – Apr 2021",
      detail: "Graduated with distinction · GPA: 3.62 / 4.0 · Focus: Machine Learning & Heliophysics at NASA GSFC",
    },
    {
      degree: "Master of Science in Physics",
      school: "The Catholic University of America",
      location: "Washington, DC",
      period: "Sep 2017 – May 2018",
      detail: "GPA: 3.57 / 4.0",
    },
    {
      degree: "Bachelor in Physics",
      school: "University of Brasília / St. John's University",
      location: "Brasília, Brazil / New York, NY",
      period: "Sep 2010 – Jul 2015",
      detail: "Merit scholarship · GPA: 3.92 / 4.0",
    },
  ],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Technical Expertise",
  categories: [
    {
      title: "LLM Systems & Modeling",
      icon: "fa-brain",
      skills: [
        "Transformers",
        "WordPiece Tokenization",
        "RAG Architectures",
        "Representation Learning",
        "ModernBERT / FlexBERT",
        "NLP & Extraction",
        "Computer Vision",
        "Model Evaluation",
      ],
    },
    {
      title: "Distributed Training & Acceleration",
      icon: "fa-microchip",
      skills: [
        "PyTorch",
        "CUDA",
        "Distributed Pretraining / Fine-Tuning",
        "FlashAttention 3",
        "Composer (MosaicML)",
        "Hugging Face Accelerate",
        "Mixed Precision (BF16 / FP16)",
        "Training Optimization",
      ],
    },
    {
      title: "Inference Systems & Deployment",
      icon: "fa-server",
      skills: [
        "TensorRT-LLM",
        "TensorRT",
        "Triton Inference Server",
        "Docker",
        "Kubernetes",
        "MLflow Model Registry",
        "Latency Optimization",
        "High-Throughput Serving",
      ],
    },
    {
      title: "Data & Experiment Infrastructure",
      icon: "fa-database",
      skills: [
        "High-Throughput Data Pipelines",
        "GCS & Streaming MDS Datasets",
        "Hydra Experiment Config",
        "Pydantic",
        "Python",
        "Uncertainty Quantification",
        "Signal Processing",
        "Reproducible Workflows",
      ],
    },
    {
      title: "Research & Technical Leadership",
      icon: "fa-users",
      skills: [
        "Technical Roadmap Ownership",
        "Cross-Functional Collaboration",
        "AI Research Strategy",
        "Scientific Communication",
        "Mentoring",
        "Ambiguity Resolution",
      ],
    },
  ],
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Featured Code & Repositories",
  gitHubUsername: "luiz0992",
  reposLength: 4,
  specificRepos: [
    "ml-engineer-starter-kit",
    "flash-attn3-builds",
    "thesis_template_CUA",
    "Tweeter_Post_Classifier",
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Let's Connect",
  message:
    "I'm always open to discussing machine learning engineering, LLM systems research, and technical collaboration. Feel free to connect via LinkedIn or reach out directly by email.",
  email: "luiz.fernando0992@gmail.com",
  linkedIn: "https://www.linkedin.com/in/luiz-fernando-guedes-dos-santos-641812109/",
  github: "https://github.com/luiz0992",
  scholar: "https://bit.ly/2TV4aik",
};

export {
  navBar,
  mainBody,
  about,
  experiences,
  publications,
  education,
  skills,
  repos,
  getInTouch,
};
