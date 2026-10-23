import hclLogo from '../assets/hclsoftware-logo.webp'
import mifosLogo from '../assets/mifos-initiative-logo.webp'
import raptorLogo from '../assets/raptor-supplies-logo.webp'
import deepMagStimLogo from '../assets/deepmagstim-logo.webp'
import cslLogo from '../assets/complex-systems-lab-logo.webp'

export const journeyIntro = {
  kicker: '02. CAREER & PRODUCTION FOOTPRINT',
  title: 'Professional Journey',
  subtitle:
    'Architecting enterprise RAG pipelines, autonomous multi-agent orchestration engines, and deep learning models for inverse physical simulations.',
}

export const experienceFilters = [
  { id: 'all', label: 'All Milestones' },
  { id: 'enterprise', label: 'Enterprise & Industry' },
  { id: 'research', label: 'Academic Research & Open Source' },
]

/*
 * Bullet strings use **double asterisks** for the <strong> segments of the design.
 * Tech pills: weight "bold" adds font-bold, accent pills use the emerald variant.
 * Constellation items: size "lg" has a sub-label, "sm" is the compact chip;
 * float = a|b|c ambient animation; tilt = resting rotate/translate from the design.
 */
export const experiences = [
  {
    id: 'hcl',
    category: 'enterprise',
    badges: [{ label: 'Sep 2025 – Present • 1 yr 2 mos' }],
    location: 'Noida, UP',
    logo: {
      src: hclLogo,
      alt: 'HCLSoftware logo',
      frame: 'bg-slate-900 p-1.5 shadow-emerald-900/20',
      img: 'object-cover rounded-xl',
    },
    company: 'HCLSoftware',
    tagline: 'Enterprise AI & Ops',
    role: 'Software Engineer 2 — Enterprise AI & Multi-Agent Systems',
    bullets: [
      '**BigFix AEX Generative AI & RAG:** Engineered document ingestion, semantic chunking, embeddings, vector retrieval, and context decomposition for enterprise IT ops.',
      'Integrated LLMs with structured function/tool calling and agent orchestration across complex infrastructure environments.',
      'Contributed to multi-agent architecture for natural-language interaction with mission-critical IT workflows.',
      '**iAutomate:** Connected ITSM flows with AWX/Ansible pipelines, cutting manual IT ticket ops by **~70%**.',
    ],
    tech: [
      { label: 'Python' },
      { label: 'FastAPI' },
      { label: 'LangGraph' },
      { label: 'Enterprise RAG' },
      { label: 'Vector DB' },
      { label: 'AWX/Ansible', accent: true },
    ],
    constellation: {
      title: 'Ecosystem Constellation',
      badge: 'Enterprise Stack',
      items: [
        { icon: 'python', name: 'Python', sub: 'Core Run', subAccent: true, size: 'lg', float: 'a', tilt: 'rotate(-2deg) translate(5px, -4px)' },
        { icon: 'langgraph', name: 'LangGraph', sub: 'Agent Mesh', size: 'lg', float: 'b', tilt: 'rotate(3deg) translate(-6px, 6px)' },
        { icon: 'fastapi', name: 'FastAPI', sub: 'Async API', subAccent: true, size: 'lg', float: 'c', tilt: 'rotate(-1.5deg) translate(8px, 4px)' },
        { icon: 'ansible', name: 'Ansible AWX', sub: 'Automation', size: 'lg', float: 'b', tilt: 'rotate(2deg) translate(-4px, -5px)' },
        { icon: 'docker', name: 'Docker Hub', size: 'sm', float: 'a', tilt: 'rotate(-2.5deg) translate(12px, -3px)' },
        { icon: 'postgres', name: 'Postgres pgvector', size: 'sm', float: 'c', tilt: 'rotate(1deg) translate(-10px, 3px)' },
      ],
    },
  },
  {
    id: 'mifos',
    category: 'research',
    badges: [{ label: 'Jun 2025 – Sep 2025 • 4 mos' }],
    location: 'Remote • C4GT Fellowship',
    logo: {
      src: mifosLogo,
      alt: 'Mifos Initiative logo',
      frame: 'bg-white p-2 shadow-emerald-900/20',
      img: 'object-contain',
    },
    company: 'Mifos Initiative',
    tagline: 'C4GT Global Open Source',
    role: 'Open Source Developer — Voice AI & Regional LLMs',
    bullets: [
      'Constructed multilingual voice AI agent supporting **22+ languages** integrating Whisper ASR + LLM + RAG for banking automation.',
      'Designed stateful conversation flows using **LangGraph** for financial transfers, loans, and status inquiries with **85% completion & <2s latency**.',
      'Optimized real-time speech interaction accuracy and automated regional acoustic pipeline reliability.',
    ],
    tech: [
      { label: 'LangGraph', bold: true },
      { label: 'Whisper ASR' },
      { label: 'Gemini LLMs' },
      { label: 'Voice RAG' },
      { label: 'Python', accent: true },
    ],
    constellation: {
      title: 'Voice AI & LLM Constellation',
      badge: 'Multilingual Model Core',
      items: [
        { icon: 'whisper', name: 'Whisper ASR', sub: '22+ Indic Langs', subAccent: true, size: 'lg', float: 'b', tilt: 'rotate(3deg) translate(-5px, -6px)' },
        { icon: 'gemini', name: 'Google Gemini', sub: 'Reasoning Agent', size: 'lg', float: 'a', tilt: 'rotate(-2deg) translate(8px, 4px)' },
        { icon: 'langgraph', name: 'LangGraph Flow', sub: '<2s Latency', subAccent: true, size: 'lg', float: 'c', tilt: 'rotate(1.5deg) translate(-10px, 8px)' },
        { icon: 'redis', name: 'Redis Session', size: 'sm', float: 'a', tilt: 'rotate(-3deg) translate(6px, -4px)' },
        { icon: 'fastapi', name: 'Audio Stream WS', size: 'sm', float: 'b', tilt: 'rotate(2deg) translate(-8px, -2px)' },
      ],
    },
  },
  {
    id: 'raptor',
    category: 'enterprise',
    badges: [{ label: 'Jan 2025 – Jun 2025 • 6 mos' }],
    location: 'On-site',
    logo: {
      src: raptorLogo,
      alt: 'Raptor Supplies logo',
      frame: 'bg-[#0c66e4] p-2 shadow-blue-900/30',
      img: 'object-contain',
    },
    company: 'Raptor Supplies',
    tagline: 'MRO Search Engine & Vision',
    role: 'Software & ML Engineer Intern — Industrial RAG & Search',
    bullets: [
      '**ChatMRO Platform:** Spearheaded RAG search architecture serving **10K+ monthly queries** across industrial parts catalogs.',
      'Built dual-stage NLP retrieval pipelines (query decomposition + dense embeddings) vastly improving precision for complex domain jargon.',
      '**PDF OCR Extraction Pipeline:** Tesseract OCR + supervised classifier for Manufacturer Part Number (MPN) parsing reaching **95% F1-score across 10M+ product records**.',
    ],
    tech: [
      { label: 'ChatMRO' },
      { label: 'Elasticsearch', bold: true },
      { label: 'Tesseract OCR' },
      { label: 'Hybrid RAG' },
      { label: 'BM25 + Dense', accent: true },
    ],
    constellation: {
      title: 'Search & Vision Constellation',
      badge: '10M+ Vector Scale',
      items: [
        { icon: 'elasticsearch', name: 'Elasticsearch', sub: 'BM25 Hybrid', subAccent: true, size: 'lg', float: 'a', tilt: 'rotate(-3deg) translate(6px, -4px)' },
        { icon: 'pytorch', name: 'PyTorch', sub: 'Vision Ingest', size: 'lg', float: 'b', tilt: 'rotate(2deg) translate(-8px, 6px)' },
        { icon: 'ocr', name: 'OCR Parsing', sub: '95% F1-Score', subAccent: true, size: 'lg', float: 'c', tilt: 'rotate(-1.5deg) translate(10px, 4px)' },
        { icon: 'python', name: 'Python Ingestion', size: 'sm', float: 'b', tilt: 'rotate(2.5deg) translate(-5px, -6px)' },
        { icon: 'docker', name: 'Docker Cluster', size: 'sm', float: 'a', tilt: 'rotate(-2deg) translate(8px, 2px)' },
      ],
    },
  },
  {
    id: 'deepmagstim',
    category: 'research',
    badges: [
      { label: "Academic Research & Master's Thesis" },
      { label: 'Targeted: ICASSP 2027 (Under Submission)', tone: 'amber' },
    ],
    location: null,
    logo: {
      src: deepMagStimLogo,
      alt: 'DeepMagStim logo',
      frame: 'bg-slate-950 p-1 shadow-cyan-900/30',
      img: 'object-contain',
    },
    company: 'DeepMagStim',
    tagline: 'i-CPS Lab • IIIT Delhi',
    role: 'Deep Learning for Electromagnetic Field Reconstruction — i-CPS Lab, IIIT Delhi',
    bullets: [
      '**Scientific & Neural Architecture:** Engineered deep learning-assisted peripheral nerve stimulation models using magnetic coils, inverse electromagnetic field reconstruction, and physics-informed neural network architectures.',
      '**Benchmarking & Edge Inference:** Evaluated model accuracy, edge inference optimization, and computational latency, achieving orders-of-magnitude speedups against classical finite-element numerical solvers.',
      '**Submission Pipeline:** Rigorous experimental protocol targeted for **ICASSP 2027** (in preparation / under review submission pipeline).',
    ],
    tech: [
      { label: 'PyTorch', bold: true },
      { label: 'PINNs', bold: true },
      { label: 'Electromagnetic Simulation' },
      { label: 'Edge AI' },
      { label: 'Signal Processing', accent: true },
    ],
    constellation: {
      title: 'Neural & Physics Simulation',
      badge: 'i-CPS IIIT-Delhi',
      items: [
        { icon: 'pytorch', name: 'PyTorch', sub: 'Scientific Tensors', subAccent: true, size: 'lg', float: 'a', tilt: 'rotate(2.5deg) translate(-6px, -4px)' },
        { icon: 'pinns', name: 'PINNs Network', sub: 'Inverse Maxwell', size: 'lg', float: 'b', tilt: 'rotate(-2deg) translate(8px, 6px)' },
        { icon: 'cuda', name: 'CUDA Kernels', sub: '100x Speedup', subAccent: true, size: 'lg', float: 'c', tilt: 'rotate(3deg) translate(-10px, 3px)' },
        { icon: 'tflite', name: 'TF Lite Embedded', size: 'sm', float: 'a', tilt: 'rotate(-1deg) translate(5px, -5px)' },
        { icon: 'lora', name: 'LoRa Mesh Node', size: 'sm', float: 'b', tilt: 'rotate(2deg) translate(-4px, 2px)' },
      ],
    },
  },
  {
    id: 'csl',
    category: 'enterprise',
    badges: [{ label: 'Aug 2023 – Dec 2023 • 5 mos' }],
    location: 'New Delhi',
    logo: {
      src: cslLogo,
      alt: 'Complex Systems Lab logo',
      frame: 'bg-slate-900 p-2 shadow-orange-900/20',
      img: 'object-contain',
    },
    company: 'Complex Systems Lab',
    tagline: 'RecipeDB Voice Assistant',
    role: 'Full Stack Developer — RecipeDB Voice Assistant',
    bullets: [
      'Engineered high-concurrency web application using React.js and Node.js featuring real-time speech-to-text input with stop-word semantic pruning.',
      'Deployed containerized microservices stack via Docker and Nginx reverse proxy with multi-attribute filtering (regional cuisines, equipment, ingredients).',
    ],
    tech: [
      { label: 'React.js', bold: true },
      { label: 'Node.js', bold: true },
      { label: 'Voice-to-Text' },
      { label: 'Docker' },
      { label: 'Nginx', accent: true },
    ],
    constellation: {
      title: 'Interactive Speech Constellation',
      badge: 'Real-Time WebSocket',
      items: [
        { icon: 'react', name: 'React.js', sub: 'Dynamic UI', subAccent: true, size: 'lg', float: 'a', tilt: 'rotate(-2.5deg) translate(5px, -5px)' },
        { icon: 'node', name: 'Node.js', sub: 'Async Event Loop', size: 'lg', float: 'b', tilt: 'rotate(3deg) translate(-7px, 6px)' },
        { icon: 'nginx', name: 'Nginx', sub: 'Microproxy', subAccent: true, size: 'lg', float: 'c', tilt: 'rotate(-1.5deg) translate(8px, 4px)' },
        { icon: 'js', name: 'TypeScript / ES6', size: 'sm', float: 'a', tilt: 'rotate(2deg) translate(-6px, -4px)' },
        { icon: 'websocket', name: 'Voice Socket Stream', size: 'sm', float: 'b', tilt: 'rotate(-2.5deg) translate(9px, 3px)' },
      ],
    },
  },
]

export const impactMetrics = [
  { value: '~70%', label: 'IT Operations Time Reduction' },
  { value: '95%', label: 'F1-Score across 10M+ Records' },
  { value: '22+', label: 'Indic Languages in Voice RAG' },
  { value: '<2s', label: 'Agent Response Latency' },
]
