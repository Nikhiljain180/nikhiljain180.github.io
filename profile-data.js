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
  projectsSectionLead: "Things I've shipped — plus long-form writing on production RAG.",
  projectsIntro:
    "Open-source work spanning full-stack RAG, multi-agent systems, CSP-safe iframe embedding, translation APIs, voice AI, and LangGraph tool agents. The Enterprise RAG series (essays + notebooks) is in the section below.",

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

  /**
   * Blog block uses the same layout as AI-series/docs/index.html (topics list + typography).
   */
  writing: {
    sectionLabel: "Beyond the demo",
    series: {
      title: "Enterprise RAG: What Breaks at Scale",
      kicker: "Enterprise RAG in production — long-form essays on retrieval, safety, and scale",
      subHtml:
        '<strong class="ai-series-strong-blog">Read the blog</strong> for long-form explanations (plain language, written like a serious article). <strong class="ai-series-strong-nb">Notebook export</strong> is the auto-generated HTML from Jupyter—useful for code cells. <strong>GitHub</strong> opens the <code>.ipynb</code> to run or edit locally.',
      topics: [
        {
          blogLinks: [
            { href: "https://nikhiljain180.github.io/AI-series/articles/01-not-all-vectors-equal.html", text: "Part 1" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/01b-embeddings-deep-dive.html", text: "Part 2" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/01c-supplement-scenarios.html", text: "Part 3" },
          ],
          lesson: {
            href: "https://nikhiljain180.github.io/AI-series/articles/01-not-all-vectors-equal.html",
            text: "1. Not all vectors are equal",
          },
          teach:
            "Chunking (fixed, semantic, hierarchical) and embedding models—explained for students and production engineers. Start with Part 1.",
          exportUrl: "https://nikhiljain180.github.io/AI-series/01_not_all_vectors_are_equal_embedding_choice.html",
          githubUrl: "https://github.com/Nikhiljain180/AI-series/blob/main/01_not_all_vectors_are_equal_embedding_choice.ipynb",
        },
        {
          blogLinks: [
            { href: "https://nikhiljain180.github.io/AI-series/articles/02-right-chunk-wrong-context.html", text: "Part 1" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/02b-structural-chunking-deep-dive.html", text: "Part 2" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/02c-supplement-scenarios.html", text: "Part 3" },
          ],
          lesson: {
            href: "https://nikhiljain180.github.io/AI-series/articles/02-right-chunk-wrong-context.html",
            text: "2. The right chunk, wrong context",
          },
          teach:
            'Structural chunking, boundaries, and why "relevant" fragments still miss the exception clause. Start with Part 1; run the notebook for code.',
          exportUrl: "https://nikhiljain180.github.io/AI-series/02_right_chunk_wrong_context_structural_chunking.html",
          githubUrl: "https://github.com/Nikhiljain180/AI-series/blob/main/02_right_chunk_wrong_context_structural_chunking.ipynb",
        },
        {
          blogLinks: [
            { href: "https://nikhiljain180.github.io/AI-series/articles/03-hybrid-search-bm25-vectors.html", text: "Part 1" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/03b-fusion-logging-and-regressions.html", text: "Part 2" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/03c-supplement-scenarios.html", text: "Part 3" },
          ],
          lesson: {
            href: "https://nikhiljain180.github.io/AI-series/articles/03-hybrid-search-bm25-vectors.html",
            text: "3. When dense search misses keywords",
          },
          teach: "Hybrid BM25 + vectors, fusion (RRF), and logging which leg saved the query. Start with Part 1.",
          exportUrl: "https://nikhiljain180.github.io/AI-series/03_when_dense_search_misses_keywords_hybrid_bm25.html",
          githubUrl: "https://github.com/Nikhiljain180/AI-series/blob/main/03_when_dense_search_misses_keywords_hybrid_bm25.ipynb",
        },
        {
          blogLinks: [
            { href: "https://nikhiljain180.github.io/AI-series/articles/04-cross-encoder-reranking.html", text: "Part 1" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/04b-latency-cost-and-candidates.html", text: "Part 2" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/04c-supplement-scenarios.html", text: "Part 3" },
          ],
          lesson: {
            href: "https://nikhiljain180.github.io/AI-series/articles/04-cross-encoder-reranking.html",
            text: "4. Cross-encoder reranking",
          },
          teach: "Retrieve wide, rerank narrow: quality vs latency vs GPU memory. Start with Part 1.",
          exportUrl: "https://nikhiljain180.github.io/AI-series/04_cross_encoder_rerank_cost_vs_quality.html",
          githubUrl: "https://github.com/Nikhiljain180/AI-series/blob/main/04_cross_encoder_rerank_cost_vs_quality.ipynb",
        },
        {
          blogLinks: [
            { href: "https://nikhiljain180.github.io/AI-series/articles/05-acl-at-query-time.html", text: "Part 1" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/05b-filters-audits-and-threats.html", text: "Part 2" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/05c-supplement-scenarios.html", text: "Part 3" },
          ],
          lesson: {
            href: "https://nikhiljain180.github.io/AI-series/articles/05-acl-at-query-time.html",
            text: "5. ACL at query time",
          },
          teach: "Enforce authorization in retrieval—filters, audits, cross-tenant tests. Start with Part 1.",
          exportUrl: "https://nikhiljain180.github.io/AI-series/05_acl_at_query_time_why_rag_leaks_or_blocks_wrong.html",
          githubUrl: "https://github.com/Nikhiljain180/AI-series/blob/main/05_acl_at_query_time_why_rag_leaks_or_blocks_wrong.ipynb",
        },
        {
          blogLinks: [
            { href: "https://nikhiljain180.github.io/AI-series/articles/06-semantic-cache-invalidation.html", text: "Part 1" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/06b-metrics-and-two-tier-caching.html", text: "Part 2" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/06c-supplement-scenarios.html", text: "Part 3" },
          ],
          lesson: {
            href: "https://nikhiljain180.github.io/AI-series/articles/06-semantic-cache-invalidation.html",
            text: "6. Semantic cache & invalidation",
          },
          teach: "Similarity + version tags, TTL, false hits—cache without lying. Start with Part 1.",
          exportUrl: "https://nikhiljain180.github.io/AI-series/06_semantic_cache_similarity_ttl_and_invalidation.html",
          githubUrl: "https://github.com/Nikhiljain180/AI-series/blob/main/06_semantic_cache_similarity_ttl_and_invalidation.ipynb",
        },
        {
          blogLinks: [
            { href: "https://nikhiljain180.github.io/AI-series/articles/07-stale-index-tombstones.html", text: "Part 1" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/07b-incremental-updates-and-ops.html", text: "Part 2" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/07c-supplement-scenarios.html", text: "Part 3" },
          ],
          lesson: {
            href: "https://nikhiljain180.github.io/AI-series/articles/07-stale-index-tombstones.html",
            text: "7. Stale index & tombstones",
          },
          teach: "Incremental updates, stable IDs, deletes, ingestion lag. Start with Part 1.",
          exportUrl: "https://nikhiljain180.github.io/AI-series/07_stale_index_incremental_updates_and_tombstones.html",
          githubUrl: "https://github.com/Nikhiljain180/AI-series/blob/main/07_stale_index_incremental_updates_and_tombstones.ipynb",
        },
        {
          blogLinks: [
            { href: "https://nikhiljain180.github.io/AI-series/articles/08-faithfulness-and-grounding.html", text: "Part 1" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/08b-layered-guards-and-rubrics.html", text: "Part 2" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/08c-supplement-scenarios.html", text: "Part 3" },
          ],
          lesson: {
            href: "https://nikhiljain180.github.io/AI-series/articles/08-faithfulness-and-grounding.html",
            text: "8. Grounded or confidently wrong",
          },
          teach: "Cheap faithfulness checks, abstention, and rubrics—before the LLM sounds sure. Start with Part 1.",
          exportUrl: "https://nikhiljain180.github.io/AI-series/08_grounded_or_confidently_wrong_faithfulness_checks.html",
          githubUrl: "https://github.com/Nikhiljain180/AI-series/blob/main/08_grounded_or_confidently_wrong_faithfulness_checks.ipynb",
        },
        {
          blogLinks: [
            { href: "https://nikhiljain180.github.io/AI-series/articles/09-rag-evaluation-metrics.html", text: "Part 1" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/09b-golden-sets-and-slicing.html", text: "Part 2" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/09c-supplement-scenarios.html", text: "Part 3" },
          ],
          lesson: {
            href: "https://nikhiljain180.github.io/AI-series/articles/09-rag-evaluation-metrics.html",
            text: "9. RAG is not one metric",
          },
          teach: "Recall@k, slicing, golden sets—retrieval vs generation eval. Start with Part 1.",
          exportUrl: "https://nikhiljain180.github.io/AI-series/09_rag_is_not_one_metric_retrieval_and_generation_eval.html",
          githubUrl: "https://github.com/Nikhiljain180/AI-series/blob/main/09_rag_is_not_one_metric_retrieval_and_generation_eval.ipynb",
        },
        {
          blogLinks: [
            { href: "https://nikhiljain180.github.io/AI-series/articles/10-prompt-injection-pii.html", text: "Part 1" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/10b-layered-defenses-and-ux.html", text: "Part 2" },
            { href: "https://nikhiljain180.github.io/AI-series/articles/10c-supplement-scenarios.html", text: "Part 3" },
          ],
          lesson: {
            href: "https://nikhiljain180.github.io/AI-series/articles/10-prompt-injection-pii.html",
            text: "10. Prompt injection & PII",
          },
          teach: "Untrusted chunks, layered defenses, PII boundaries. Start with Part 1.",
          exportUrl: "https://nikhiljain180.github.io/AI-series/10_prompt_injection_and_pii_boundary_for_rag_apps.html",
          githubUrl: "https://github.com/Nikhiljain180/AI-series/blob/main/10_prompt_injection_and_pii_boundary_for_rag_apps.ipynb",
        },
      ],
    },
  },

  contact: {
    title: "Let's connect.",
    blurb:
      "If you’re building production AI systems, multi-agent platforms, or enterprise RAG beyond the demo — I’m happy to compare notes on architecture, evaluation, and shipping safely at scale.",
    resumeUrl: "nikhil-resume-ai.pdf",
    resumeLabel: "Download Resume",
    email: "nikhiljain180@gmail.com",
    phone: "+91-7838493846",
    phoneTel: "tel:+917838493846",
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
