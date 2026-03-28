/**
 * Nikhil Jain — profile data for this site.
 * Optional: set contact.email when you want an email row + footer mail icon.
 */
window.PROFILE = {
  meta: {
    siteTitle: "Nikhil Jain — Senior Technical Lead | AI & Enterprise Platforms",
    ogDescription:
      "AI-focused Senior Technical Lead with 12+ years building production-grade RAG, multi-agent systems, and enterprise AI platforms — currently at Atlassian.",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Projects & Writing", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    initials: "NJ",
    photoUrl: "nikhil-jain.jpeg",
    photoAlt: "Nikhil Jain",
    nameParts: ["Nikhil", "Jain"],
    name: "",
    role:
      "Senior Technical Lead | Building production-grade, scalable Generative AI RAG application development | 10+ years of experience in building distributed systems at scale | Full-stack Architect | Entrepreneur | Researcher",
    subtext:
      "I architect and ship scalable, production-grade AI for global enterprise platforms — multi-agent orchestration, RAG, and agentic systems that move metrics: automation, cost, accuracy, and user experience.",
    primaryCta: { label: "View Projects", href: "#projects" },
    secondaryCta: { label: "Get in Touch", href: "#contact" },
  },

  about: {
    sectionLead: "Building AI that ships to production.",
    paragraphs: [
      "I’m an <strong>AI-focused Senior Technical Lead</strong> with 12+ years architecting and deploying scalable, production-grade AI solutions for global enterprise platforms. I specialize in <strong>multi-agent orchestration</strong>, <strong>Retrieval-Augmented Generation (RAG)</strong>, and advanced AI tooling that drives transformation and operational efficiency.",
      "At <strong>Atlassian</strong>, I led adoption of AI SDKs and workflow automation across teams — automating 5,000+ Generative UI components and streamlining workflows end to end. My work spans the full AI lifecycle: ideation, architecture, deployment, and monitoring — with measurable productivity gains, cost savings, and better user experiences.",
      "<ul><li>Designed and implemented <strong>multi-agent orchestration</strong> for complex enterprise workflows — intelligent collaboration and automation across distributed environments.</li><li>Built scalable <strong>RAG</strong> applications for context-aware, high-accuracy answers in knowledge-intensive scenarios.</li><li>Developed AI tools and SDKs (including Conversation Assistant and Generative UI Component SDKs) supporting <strong>200+ teams</strong> and <strong>100K+ clients</strong> with automation, security, and performance.</li><li>Engineered <strong>agentic AI platforms</strong> that modernized 10+ legacy systems — automation from <strong>37% to 85%</strong>, ~<strong>90% accuracy</strong>, ~<strong>$4M ARR</strong> saved, and ~<strong>70% productivity</strong> improvement.</li><li>Pioneered <strong>LLM-based testing</strong> and workflow automation — QA coverage for <strong>10K+ workflows</strong> weekly and ~<strong>25% less</strong> manual effort.</li><li>Architected <strong>microfrontend and microservice</strong> solutions for multi-tenant environments — scale, security, and availability for <strong>500+ clients</strong> and <strong>100K+ daily users</strong>.</li></ul>",
    ],
    skillTags: [
      "LangGraph",
      "LangChain",
      "RAG",
      "Multi-Agent Systems",
      "FastAPI",
      "Python",
      "React",
      "TypeScript",
      "Next.js",
      "OpenAI",
      "Vector DBs",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Enterprise AI",
      "Microservices",
      "Generative UI",
    ],
  },

  highlights: [
    {
      label: "Current Focus",
      value: "Multi-Agent & RAG at Scale",
      desc: "Orchestration, retrieval quality, and agentic platforms for enterprise workflows — from design through production monitoring.",
    },
    {
      label: "Role",
      value: "Senior Technical Lead",
      desc: "Leading AI SDK adoption, automation, and cross-team delivery at Atlassian with an emphasis on measurable outcomes.",
    },
    {
      label: "Experience",
      value: "12+ Years in Enterprise AI",
      desc: "Full-stack ownership across AI architecture, platform engineering, and global-scale delivery for complex customer environments.",
    },
    {
      label: "Impact",
      value: "$4M ARR · 70% Productivity Lift",
      desc: "Representative outcomes from agentic automation, legacy modernization, and LLM-assisted quality workflows.",
    },
  ],

  projectsSectionTitle: "Projects & Writing",
  projectsSectionLead: "Things I've built and ideas I'm exploring.",
  projectsIntro:
    "Open-source work spanning full-stack RAG, multi-agent systems, CSP-safe iframe embedding, translation APIs, voice AI, and LangGraph tool agents. The Enterprise RAG notebook series (AI-series) lives under Writing below.",

  projects: [
    {
      name: "Iframe-Proxy — CSP bypass",
      description:
        "Node.js + Express backend with a React demo that proxies third-party pages so they can load inside iframes when X-Frame-Options or CSP frame-ancestors would normally block embedding — domain allowlists, header stripping, and asset rewriting for CSP-protected sites (e.g. Skilljar, learning platforms).",
      tags: ["Node.js", "Express", "React", "CSP", "Security"],
      status: "live",
      icon: "shield",
      badge: "Live — 1 Star",
      links: [{ label: "GitHub", url: "https://github.com/Nikhiljain180/Iframe-Proxy---CSP-bypass-solution" }],
    },
    {
      name: "Langserve Translate Agent",
      description:
        "FastAPI service with LangChain and LangServe: a simple translation chain (GPT-powered) exposed as REST — multi-language output via `/chain/invoke`, OpenAPI docs, and optional LangSmith tracing.",
      tags: ["FastAPI", "LangChain", "LangServe", "Python", "OpenAI"],
      status: "live",
      icon: "search",
      badge: "Live",
      links: [{ label: "GitHub", url: "https://github.com/Nikhiljain180/Langserve-translate-agent" }],
    },
    {
      name: "DocuMind AI",
      description:
        "Full-stack RAG application for document Q&A: FastAPI backend, React frontend, OpenAI models, vector search (Qdrant), PostgreSQL, Redis, and Celery for async processing — upload documents and chat with grounded answers.",
      tags: ["FastAPI", "React", "RAG", "OpenAI", "Qdrant", "PostgreSQL", "Celery", "Docker"],
      status: "live",
      icon: "search",
      badge: "Live — 1 Star",
      links: [{ label: "GitHub", url: "https://github.com/Nikhiljain180/DocuMind-AI" }],
    },
    {
      name: "Multi-Agent Orchestrator",
      description:
        "LangGraph reference implementation with Planner, Researcher, Coder, and Reviewer agents — checkpointed state, SQLite persistence, and shared retry policies for resilient LLM workflows.",
      tags: ["LangGraph", "Python", "SQLite", "Multi-Agent"],
      status: "live",
      icon: "agents",
      badge: "Live",
      links: [{ label: "GitHub", url: "https://github.com/Nikhiljain180/Multi-agent-orchestrator" }],
    },
    {
      name: "TrialGuard AI",
      description:
        "Voice-agent stack for clinical trial follow-up: Bolna Voice AI, Next.js dashboard, Prisma/SQLite, adverse-event detection, retention analytics — automating structured patient calls at scale.",
      tags: ["Next.js", "TypeScript", "Voice AI", "Bolna", "Healthcare"],
      status: "live",
      icon: "shield",
      badge: "Live",
      links: [
        { label: "GitHub", url: "https://github.com/Nikhiljain180/trialguard-ai" },
        { label: "Live Demo", url: "https://trialguard-gilt.vercel.app" },
      ],
    },
    {
      name: "Lattice — Distributed Agentic Tools",
      description:
        "A research-assistant mesh built on LangGraph — composable tool calls across Wikipedia, arXiv, and Tavily, served through FastAPI + LangServe with a modular agent, tools, and LLM layout.",
      tags: ["LangGraph", "FastAPI", "LangServe", "Python", "OpenAI"],
      status: "live",
      icon: "agents",
      badge: "Live",
      links: [{ label: "GitHub", url: "https://github.com/Nikhiljain180/AI-tool-agent-over-langraph" }],
    },
  ],

  writing: {
    lead: "Ideas I'm exploring.",
    statusLine: "Open source — notebook series",
    items: [
      {
        title: "Enterprise RAG: What Breaks at Scale",
        description:
          "Companion to the AI-series repo: ten hands-on notebooks on failure modes outside the toy demo — chunking, hybrid retrieval, permissions, staleness, evaluation, and boundaries for real RAG apps.",
        statusLine: "Live — 10 notebooks + README",
        statusClass: "status-live",
        parts: [
          {
            title: "AI-series on GitHub (README, notebooks, clone)",
            url: "https://github.com/Nikhiljain180/AI-series?tab=readme-ov-file",
            done: true,
          },
          {
            title: "Part 1: Not all vectors are equal (embedding choice)",
            url: "https://nikhiljain180.github.io/AI-series/01_not_all_vectors_are_equal_embedding_choice.html",
            done: true,
          },
          {
            title: "Part 2: The right chunk, wrong context (structural chunking)",
            url: "https://nikhiljain180.github.io/AI-series/02_right_chunk_wrong_context_structural_chunking.html",
            done: true,
          },
          {
            title: "Part 3: When dense search misses keywords (hybrid BM25)",
            url: "https://nikhiljain180.github.io/AI-series/03_when_dense_search_misses_keywords_hybrid_bm25.html",
            done: true,
          },
          {
            title: "Part 4: Cross-encoder rerank — cost vs quality",
            url: "https://nikhiljain180.github.io/AI-series/04_cross_encoder_rerank_cost_vs_quality.html",
            done: true,
          },
          {
            title: "Part 5: ACL at query time — why RAG leaks or blocks wrong",
            url: "https://nikhiljain180.github.io/AI-series/05_acl_at_query_time_why_rag_leaks_or_blocks_wrong.html",
            done: true,
          },
          {
            title: "Part 6: Semantic cache — similarity, TTL, invalidation",
            url: "https://nikhiljain180.github.io/AI-series/06_semantic_cache_similarity_ttl_and_invalidation.html",
            done: true,
          },
          {
            title: "Part 7: Stale index — incremental updates & tombstones",
            url: "https://nikhiljain180.github.io/AI-series/07_stale_index_incremental_updates_and_tombstones.html",
            done: true,
          },
          {
            title: "Part 8: Grounded or confidently wrong (faithfulness checks)",
            url: "https://nikhiljain180.github.io/AI-series/08_grounded_or_confidently_wrong_faithfulness_checks.html",
            done: true,
          },
          {
            title: "Part 9: RAG is not one metric (retrieval & generation eval)",
            url: "https://nikhiljain180.github.io/AI-series/09_rag_is_not_one_metric_retrieval_and_generation_eval.html",
            done: true,
          },
          {
            title: "Part 10: Prompt injection & PII boundary for RAG apps",
            url: "https://nikhiljain180.github.io/AI-series/10_prompt_injection_and_pii_boundary_for_rag_apps.html",
            done: true,
          },
        ],
      },
    ],
  },

  contact: {
    title: "Let's connect.",
    blurb:
      "If you’re building production AI systems, multi-agent platforms, or enterprise RAG beyond the demo — I’m happy to compare notes on architecture, evaluation, and shipping safely at scale.",
    resumeUrl: "nikhil-resume-ai.pdf",
    resumeLabel: "Download Resume",
    email: "nikhiljain180@gmail.com",
    linkedin: {
      label: "LinkedIn",
      value: "Nikhil Jain",
      url: "https://www.linkedin.com/in/nikhiljain180/",
    },
    githubPersonal: {
      label: "GitHub",
      value: "Nikhiljain180",
      url: "https://github.com/Nikhiljain180",
      handle: "Nikhiljain180",
    },
    githubOrg: null,
  },

  footer: {
    name: "Nikhil Jain",
    year: 2026,
    tagline: "Built with purpose, not templates.",
  },
};
