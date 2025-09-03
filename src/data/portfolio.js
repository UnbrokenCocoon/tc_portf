// This file exports the data for your portfolio sections.

// Personal Information
export const personalInfo = {
  name: "Thomas Compton",
  role: "NLP Data Scientist, Educator",
  tagline: "ML Engineer with a passion for NLP, generative AI, and building impactful, data-driven solutions.",
  location: "Leeds, England, United Kingdom",
  email: "thomasocompton@outlook.com",
  website: "https://thomascompton.medium.com", // Using Medium as primary public profile
  linkedin: "https://www.linkedin.com/in/thomas-compton-b55915147/",
  github: "https://github.com/UnbrokenCocoon",
  bio: "I combine technical expertise in natural language processing (BERTopic, vector embeddings, FAISS, spaCy, LLMs) with strong communication, collaboration, and project delivery skills developed across academic, non-profit, and creative sectors. I am particularly motivated to work in applied NLP and data science roles where communication, audience awareness, and technical rigour are equally valued."
};


export const projectsData = [
  {
    title: "Database Debate Simulator (Agentic AI)",
    description: "A RAG-based system to simulate multi-agent debates using short LLM-driven conversations, demonstrating the integration of embeddings, retrieval, and generative AI for interactive reasoning.",
    skills: ["LangChain", "FAISS", "Hugging Face", "Python", "Gradio", "Google Gemini"],
    link: "https://huggingface.co/spaces/ovrelord/union-debate-sim",
    github: "https://github.com/UnbrokenCocoon/Historical-union-debate"
  },
  {
    title: "Bible Vector Searcher",
    description: "A powerful RAG-based search engine that allows users to find verses within the Bible using semantic queries. It leverages a vector database for efficient and contextually relevant results.",
    skills: ["RAG", "Vector Search", "Hugging Face", "Gradio", "Python"],
    link: "https://huggingface.co/spaces/ovrelord/Bible_searcher",
    github: "https://github.com/UnbrokenCocoon/bible_searcher"
  },
  {
    title: "OCR Accuracy Evaluation",
    description: "Benchmarked Word Error Rate (WER) and Character Error Rate (CER) across various OCR engines (EasyOCR, PaddleOCR, Tesseract) and LLM-assisted OCR pipelines. Developed a batched workflow with backoff to handle high-volume jobs.",
    skills: ["EasyOCR", "PaddleOCR", "Tesseract", "Google Gemini", "Jiwer", "Deepseek", "Qwen"],
    github: "https://github.com/UnbrokenCocoon/OCR-evaluation",
    blog: "https://thomascompton.medium.com/comparing-llms-and-python-ocr-packages-opportunities-and-challenges-in-ocr-accuracy-19d6146f2ada"
  },
  {
    title: "BERTopic Evaluation and Fine-Tuning",
    description: "Developed metrics and workflows to evaluate stability and performance across multiple BERTopic model runs. Implemented randomized parameter search to explore trade-offs between topic coverage, inequality (Gini), and coherence.",
    skills: ["BERTopic", "Sentence Transformers", "UMAP", "HDBSCAN", "scipy", "matplotlib", "PyTorch"],
    github: "https://github.com/UnbrokenCocoon/BERTopic_Stability",
    paper: "https://arxiv.org/abs/2507.23364",
    blog: "https://thomascompton.medium.com/creating-reliable-topic-models-with-custom-bertopic-2805e5cfad32"
  },
  {
    title: "Literature Review Tools",
    description: "Modular Python toolkit for automating literature reviews using RAG, FAISS, and sentence embeddings. Enables semantic search, clustering, and summarization of academic papers.",
    skills: ["RAG", "FAISS", "Sentence Transformers", "SpaCy", "NLTK", "scikit-learn"],
    github: "https://github.com/UnbrokenCocoon/Lit-Review"
  },
  {
    title: "PDF-to-Speech Reader",
    description: "Tool that converts PDF documents into audio using text-to-speech, supporting accessibility and hands-free review of academic and technical documents.",
    skills: ["pypdf", "pyttsx3", "pydub", "AWS", "Python"],
    github: "https://github.com/UnbrokenCocoon/PDF-text-to-speech"
  },
  {
    title: "Hansard OCR Dataset",
    description: "Curated dataset of historical UK parliamentary debates prepared for training and evaluating OCR models, including preprocessing pipelines and integration with TrOCR.",
    skills: ["TrOCR", "torch", "BeautifulSoup", "Transformers", "SQL", "PostgreSQL"],
    github: "https://github.com/UnbrokenCocoon/Hansard-OCR-Dataset"
  },
  {
    title: "Samuel Smiles Digital Archive",
    description: "Educational repository for historical text analysis, featuring workflows for collecting, embedding, clustering, and interpreting 19th-century texts using modern NLP techniques.",
    skills: ["sentence-transformers", "FAISS", "BERTopic", "spaCy", "NLTK", "scikit-learn", "matplotlib"],
    github: "https://github.com/UnbrokenCocoon/Samuel-Smiles-DA"
  },
  {
    title: "ngram-2-topic",
    description: "Hybrid topic modeling approach that combines n-gram frequency analysis with sentence embeddings to produce more interpretable and stable topics.",
    skills: ["sentence-transformers", "spaCy", "n-grams", "topic modeling"],
    github: "https://github.com/UnbrokenCocoon/ngram-2-topic"
  }
];

// Skills data structured into categories
export const skillsData = [
  {
    category: "LLMs & Vector Search",
    items: ["LangChain", "FAISS", "Hugging Face", "Google Gemini"]
  },
  {
    category: "Programming",
    items: ["Python", "PyTorch", "scikit-learn"]
  },
  {
    category: "NLP & ML",
    items: ["spaCy", "NLTK", "BERTopic", "LDA", "Sentence Transformers"]
  },
  {
    category: "Data & Tools",
    items: ["AWS", "Docker", "Git", "Gradio", "pandas", "matplotlib", "SQL"]
  }
];

// Education data
export const educationData = [
  {
    degree: "PhD in Social Policy",
    school: "University of York",
    dates: "2021 - 2025",
    logoUrl: "/images/University_of_york.png"
  },
  {
    degree: "MSc International Relations (Distinction)",
    school: "University of Birmingham",
    dates: "2019 - 2020",
    // Fixed path here
    logoUrl: "/images/University_of_birm.png"
  },
  {
    degree: "BA in English (2:1)",
    school: "University of Birmingham",
    dates: "2016 - 2019",
    // Fixed path here
    logoUrl: "/images/University_of_birm.png"
  }
];

export const publicationsData = [
  {
    title: "Beyond the Black Box: Integrating Lexical and Semantic Methods in Quantitative Discourse Analysis with BERTopic",
    journal: "arXiv",
    year: "2025",
    link: "https://arxiv.org/abs/2508.19099"
  },
  {
    title: "Service, Solidarity, and Self-Help: A Comparative Topic Modeling Analysis of Community Unionism in the Boot and Shoe Union and Unite Community",
    journal: "arXiv",
    year: "2025",
    link: "https://arxiv.org/abs/2509.01529"
  },
  {
    title: "Holistic Evaluations of Topic Models",
    journal: "arXiv",
    year: "2025",
    link: "https://arxiv.org/abs/2507.23364"
  },
  {
    title: "Comparing LLMs and Python OCR Packages: Opportunities and Challenges in OCR Accuracy",
    journal: "Medium",
    year: "2025",
    link: "https://thomascompton.medium.com/comparing-llms-and-python-ocr-packages-opportunities-and-challenges-in-ocr-accuracy-19d6146f2ada"
  },
  {
    title: "Creating Reliable Topic Models with Custom BERTopic",
    journal: "Medium",
    year: "2025",
    link: "https://thomascompton.medium.com/creating-reliable-topic-models-with-custom-bertopic-2805e5cfad32"
  },
  {
    title: "Synthetic Dialogues with RAG: Building a Debate Simulator for Historical Union Discourse",
    journal: "Medium",
    year: "2025",
    link: "https://thomascompton.medium.com/in-working-on-a-project-comparing-2-topic-models-of-different-copora-it-became-annoying-not-cce816bd16a9"
  }
];

export const dataAnalysisData = [
  {
    title: "UMAP: Boot & Shoe Union (1920s)",
    corpus: "National Boot and Shoe Union",
    period: "1920s",
    description:
      "This UMAP projection visualizes sentence embeddings from the National Boot and Shoe Union monthly reports. Tight clusters indicate high thematic coherence, reflecting centralized editorial control and consistent discourse focused on industrial relations and member services.",
    imageUrl: "/images/umap_bs.png",
    altText: "UMAP projection of BERTopic model for National Boot and Shoe Union corpus",
    methods: ["UMAP", "BERTopic", "Sentence Transformers", "Python"],
    sourceLink: "https://arxiv.org/abs/2508.19099",
    relatedPaper: "Beyond the Black Box: Integrating Lexical and Semantic Methods in Quantitative Discourse Analysis with BERTopic"
  },
  {
    title: "UMAP: Unite Community (2010s–2020s)",
    corpus: "Unite Community",
    period: "2010s–2020s",
    description:
      "This UMAP shows the semantic structure of Unite Community reports. The more dispersed clusters reflect diverse volunteer authorship and broader engagement with social justice campaigns, such as housing, climate, and anti-racism.",
    imageUrl: "/images/umap_unicu.png",
    altText: "UMAP projection of BERTopic model for Unite Community corpus",
    methods: ["UMAP", "Topic Modeling", "BERTopic", "NLP"],
    sourceLink: "https://arxiv.org/abs/2509.01529",
    relatedPaper: "Service, Solidarity, and Self-Help: A Comparative Topic Modeling Analysis of Community Unionism"
  }
];