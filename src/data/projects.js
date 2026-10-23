import { GITHUB_URL, LINKEDIN_URL } from './site.js'

export const projectsIntro = {
  kicker: '03. AUTONOMOUS QUEUE // INTERACTIVE DECK',
  title: 'Autonomous Agents & AI Systems Queue',
  subtitle:
    'Use mouse wheel, trackpad gestures, arrow keys, or deck controls to cycle through the interactive system cards with integrated tools & platform marquees.',
}

/*
 * Code tokens: [className, text] or a plain string.
 * Terminal body kinds: code | trace | stream | bbox | list.
 * Badge variants: "accentBold" | "accent" | "muted".
 */
const KW = 'text-emerald-400'
const STR = 'text-neutral-300'

export const projects = [
  {
    id: 'flowtonic',
    kind: 'system',
    badges: [
      { label: 'TypeScript', variant: 'accentBold' },
      { label: 'v1.4 PROD', variant: 'accent' },
      { label: 'SHA: f7c19a9', variant: 'muted' },
    ],
    module: 'SYS_MOD_01 // STACK_DEPTH: 01',
    icon: 'token',
    kicker: 'Autonomous Portfolio Intelligence Platform',
    name: 'flowtonic-ai-infrastructure',
    description:
      'AI-powered portfolio intelligence platform for private equity and venture teams to monitor portfolio company performance, surface operational risks, and identify value-creation opportunities autonomously.',
    spec: {
      label: 'Architecture Pipeline:',
      text: 'Multi-modal ETL agent pipelines, vector similarity index over financial filings, automated LLM risk scoring.',
    },
    links: [{ label: 'Open Repository', href: 'https://github.com/Vickey21299/flowtonic-ai-infrastructure', icon: 'code' }],
    stat: { text: '4.8k docs/min ETL' },
    terminal: {
      file: 'flowtonic_agent.ts',
      tag: 'LIVE REPL',
      body: {
        kind: 'code',
        lines: [
          [[KW, 'import'], ' { AgentEngine } ', [KW, 'from'], ' ', [STR, "'@flowtonic/core'"], ';'],
          [[KW, 'const'], ' agent = ', [KW, 'new'], ' ', ['text-white font-bold', 'PortfolioAgent'], '({'],
          ['  model: ', [STR, "'gpt-4o'"], ','],
          ['  vectorStore: ', [STR, "'pgvector'"], ','],
          ['  telemetry: ', [KW, 'true']],
          ['});'],
          [[KW, 'await'], ' agent.', ['text-emerald-300', 'monitorSecFilings'], '();'],
        ],
      },
      metrics: [
        { label: 'Vector Dimension:', value: '1536', tone: 'text-emerald-400' },
        { label: 'P99 Query Latency:', value: '142ms', tone: 'text-emerald-300' },
      ],
      footer: { label: 'Terminal status:', value: '● ACTIVE EVAL', strong: true },
    },
    tools: [
      { icon: 'javascript', color: 'text-[#3178C6]', name: 'TypeScript', sub: 'Strict Runtime' },
      { icon: 'hub', color: 'text-emerald-400', name: 'LangChain', sub: 'Agent Framework' },
      { icon: 'database', color: 'text-[#336791]', name: 'pgvector', sub: 'PostgreSQL Vector' },
      { icon: 'layers', color: 'text-[#2496ED]', name: 'Docker Hub', sub: 'Container Pods' },
      { icon: 'memory', color: 'text-[#DC382D]', name: 'Redis', sub: 'Distributed Cache' },
      { icon: 'terminal', color: 'text-slate-300', name: 'Next.js 14', sub: 'App Router' },
    ],
  },
  {
    id: 'patient-agent',
    kind: 'system',
    badges: [
      { label: 'Python', variant: 'accentBold' },
      { label: 'LangGraph Core', variant: 'accent' },
      { label: 'Deterministic FSM', variant: 'muted' },
    ],
    module: 'SYS_MOD_02 // STACK_DEPTH: 02',
    icon: 'medical_services',
    kicker: 'Reliable Multi-Turn Clinical Scheduling Swarm',
    name: 'patient-appointment-ai-agent',
    description:
      'Reliable AI agent for patient appointment scheduling with multi-turn conversations, tool use, fault recovery, and an evaluation harness with closed-loop improvements.',
    spec: {
      label: 'Evaluation Benchmark:',
      text: 'Deterministic slot-booking state machine, calendar conflict resolution, Langfuse evaluation harness, 99.4% task completion rate.',
    },
    links: [{ label: 'Open Repository', href: 'https://github.com/Vickey21299/patient-appointment-ai-agent', icon: 'code' }],
    stat: { text: '99.4% Eval Benchmark', accent: true },
    terminal: {
      file: 'langgraph_fsm.py',
      tag: 'GRAPH TRACE',
      body: {
        kind: 'trace',
        title: 'STATE MACHINE TRACE:',
        rows: [
          { tag: '[Intent]', text: '──▶ Patient query parsed', tone: 'text-emerald-300', tagBg: 'bg-emerald-500/10' },
          { tag: '[Calendar]', text: '──▶ Slots locked (0.02s)', tone: 'text-emerald-400', tagBg: 'bg-emerald-500/10' },
          { tag: '[Confirmed]', text: '──▶ Deterministic OK', tone: 'text-emerald-200 font-bold', tagBg: 'bg-emerald-500/20' },
        ],
      },
      metrics: [
        { label: 'Multi-Turn Depth:', value: '8-14 turns', tone: 'text-white' },
        { label: 'Hallucination Rate:', value: '< 0.02%', tone: 'text-emerald-400' },
      ],
      footer: { label: 'Langfuse run IDs:', value: 'lf_trace_8819x' },
    },
    tools: [
      { icon: 'terminal', color: 'text-[#3776AB]', name: 'Python 3.11', sub: 'Core Engine' },
      { icon: 'account_tree', color: 'text-emerald-400', name: 'LangGraph', sub: 'State Machine FSM' },
      { icon: 'bolt', color: 'text-[#009688]', name: 'FastAPI', sub: 'Async Webhooks' },
      { icon: 'insights', color: 'text-emerald-300', name: 'Langfuse', sub: 'Evaluation & Tracing' },
      { icon: 'layers', color: 'text-[#2496ED]', name: 'Docker', sub: 'Isolated Pods' },
      { icon: 'calendar_today', color: 'text-yellow-400', name: 'Google Calendar', sub: 'REST API v3' },
    ],
  },
  {
    id: 'intercom',
    kind: 'system',
    badges: [
      { label: 'TypeScript', variant: 'accentBold' },
      { label: 'Full-Stack AI', variant: 'muted' },
      { label: 'Live WebSockets', variant: 'accent' },
    ],
    module: 'SYS_MOD_03 // STACK_DEPTH: 03',
    icon: 'forum',
    kicker: 'Real-Time Support Agent & Helpdesk Engine',
    name: 'TICVIC-Intercom',
    description:
      'Production-grade intercom system built from scratch featuring streaming generative AI co-pilots, semantic ticket clustering, and autonomous conversational triage over WebSocket duplex channels.',
    spec: {
      label: 'Real-Time Architecture:',
      text: 'Sub-200ms streaming responses, WebSocket duplex channels, hybrid BM25 + dense knowledge retrieval.',
    },
    links: [{ label: 'Open Repository', href: 'https://github.com/Vickey21299/TICVIC-Intercom', icon: 'code' }],
    stat: { text: '182ms Stream Chunk', ping: true },
    terminal: {
      file: 'wss://stream.ticvic.internal',
      tag: '12ms latency',
      tagBold: true,
      body: {
        kind: 'stream',
        channel: '[WSS CHANNEL] #ticket-4921',
        status: '● STREAMING',
        speaker: 'Assistant:',
        text: '"Tokens negotiated via JWT handshake..."',
      },
      metrics: [
        { label: 'Channel Protocol:', value: 'WSS / Duplex', tone: 'text-white' },
        { label: 'Vector Cache Hit:', value: '87.4%', tone: 'text-emerald-400' },
      ],
      footer: { label: 'Ping telemetry:', value: 'pong received (12ms)' },
    },
    tools: [
      { icon: 'javascript', color: 'text-[#3178C6]', name: 'TypeScript', sub: 'Strict Typings' },
      { icon: 'code_blocks', color: 'text-[#61DAFB]', name: 'React UI', sub: 'Real-Time Client' },
      { icon: 'sync_alt', color: 'text-emerald-400', name: 'WebSockets', sub: 'Duplex Channels' },
      { icon: 'filter_center_focus', color: 'text-emerald-400', name: 'Pinecone', sub: 'Vector Index' },
      { icon: 'terminal', color: 'text-[#68A063]', name: 'Node.js', sub: 'Event Loop' },
      { icon: 'memory', color: 'text-[#DC382D]', name: 'Redis PubSub', sub: 'Event Fanout' },
    ],
  },
  {
    id: 'expense-claims',
    kind: 'system',
    badges: [
      { label: 'Python', variant: 'accentBold' },
      { label: 'Enterprise Tooling', variant: 'muted' },
      { label: 'OCR + Vision LLMs', variant: 'accent' },
    ],
    module: 'SYS_MOD_04 // STACK_DEPTH: 04',
    icon: 'receipt_long',
    kicker: 'Enterprise Automated Claim Verification Pipeline',
    name: 'Expense-Claims',
    description:
      'Expense claim system with AI vision features that automates receipt extraction, policy violation checks, and approval routing, reducing manual audit friction by over 75%.',
    spec: {
      label: 'Vision Telemetry:',
      text: 'Multi-format receipt OCR, anomaly detection algorithms, corporate rule compliance engine with 98.2% extraction accuracy.',
    },
    links: [{ label: 'Open Repository', href: 'https://github.com/Vickey21299/Expense-Claims', icon: 'code' }],
    stat: { text: '-75.4% Audit Friction', accent: true },
    terminal: {
      file: 'ocr_eval.py',
      tag: 'OCR SNIPPET',
      body: {
        kind: 'bbox',
        title: 'DETECTED BOUNDING BOXES:',
        rows: [
          { left: '[BBOX_01] "TOTAL USD $148.50"', right: 'conf: 0.99', leftTone: 'text-emerald-300', rightTone: 'text-neutral-500', border: 'border-emerald-500/20' },
          { left: '[POLICY] "MEETS TRAVEL LIMIT"', right: 'APPROVED', leftTone: 'text-emerald-400 font-semibold', rightTone: 'text-emerald-400 font-bold', border: 'border-emerald-500/40' },
        ],
      },
      metrics: [
        { label: 'Vision Accuracy:', value: '98.2%', tone: 'text-white' },
        { label: 'Auto-Approval Rate:', value: '82.0%', tone: 'text-emerald-400' },
      ],
      footer: { label: 'Flag Latency:', value: '0.84s parse' },
    },
    tools: [
      { icon: 'terminal', color: 'text-[#3776AB]', name: 'Python', sub: 'Core Runtime' },
      { icon: 'document_scanner', color: 'text-[#5C3EE8]', name: 'OpenCV', sub: 'BBox Extraction' },
      { icon: 'visibility', color: 'text-[#4285F4]', name: 'Gemini 1.5 Pro', sub: 'Vision Multimodal' },
      { icon: 'dashboard', color: 'text-[#FF4B4B]', name: 'Streamlit', sub: 'Audit HUD' },
      { icon: 'crop_free', color: 'text-emerald-400', name: 'Tesseract OCR', sub: 'Text Recognition' },
    ],
  },
  {
    id: 'research-copilot',
    kind: 'system',
    badges: [
      { label: 'Python', variant: 'accentBold' },
      { label: 'Autonomous Research', variant: 'muted' },
      { label: 'Multi-Agent Swarm', variant: 'accent' },
    ],
    module: 'SYS_MOD_05 // STACK_DEPTH: 05',
    icon: 'find_in_page',
    kicker: 'Automated Pre-Meeting Intelligence Gathering',
    name: 'AI-Research-Copilet',
    description:
      'Autonomous AI Research Copilot that researches target companies across financial reports, news sources, and executive statements to generate structured executive briefing memos before partner meetings.',
    spec: {
      label: 'Multi-Agent Architecture:',
      text: 'Recursive search aggregation, source credibility weighting, and executive briefing synthesis under 45 seconds.',
    },
    links: [{ label: 'Open Repository', href: 'https://github.com/Vickey21299/AI-Research-Copilet', icon: 'code' }],
    stat: { text: '<45s Brief Synthesis' },
    terminal: {
      file: 'search_graph.py',
      tag: '4 WORKERS',
      body: {
        kind: 'list',
        title: 'RECURSIVE GRAPH SEARCH:',
        lines: [
          { text: '01. Seed Entity: Target Corp // Q3' },
          { text: '02. Branch: SEC 10-K + Transcripts' },
          { text: '03. Synthesis: Executive Briefing', strong: true },
        ],
      },
      metrics: [
        { label: 'Swarm Workers:', value: '4 Threads', tone: 'text-white' },
        { label: 'Brief Gen Time:', value: '< 45s', tone: 'text-emerald-400' },
      ],
      footer: { label: 'Swarm state:', value: 'COMPLETE (0.34s)' },
    },
    tools: [
      { icon: 'terminal', color: 'text-[#3776AB]', name: 'Python', sub: 'Core Runtime' },
      { icon: 'travel_explore', color: 'text-emerald-400', name: 'Tavily Search', sub: 'AI Search API' },
      { icon: 'psychology', color: 'text-white', name: 'OpenAI GPT-4o', sub: 'Synthesis Engine' },
      { icon: 'soup_kitchen', color: 'text-[#FF6F00]', name: 'BeautifulSoup', sub: 'HTML Scraper' },
      { icon: 'description', color: 'text-[#3178C6]', name: 'Markdown Engine', sub: 'Memo Parser' },
    ],
  },
  {
    id: 'em-lora',
    kind: 'system',
    badges: [
      { label: 'PyTorch & Kotlin', variant: 'accentBold' },
      { label: 'IIT Delhi Research', variant: 'muted' },
      { label: 'PINNs', variant: 'accent' },
    ],
    module: 'SYS_MOD_06 // STACK_DEPTH: 06',
    icon: 'science',
    kicker: 'Inverse Physical Simulation & Privacy-Preserving Mesh',
    name: 'BTP-EM-filed-prediction & LoRaCrowdSensing',
    nameSmall: true,
    description:
      'Physics-informed deep learning models for magnetic field reconstruction (ICASSP pipeline) paired with federated crowd sensing telemetry over LoRa mesh networks.',
    spec: {
      label: 'PINN Physics Specifications:',
      text: 'PINN solver with 100x acceleration, local on-device TFLite model aggregation, zero-leakage encryption.',
    },
    links: [
      { label: 'EM Field Repo', href: 'https://github.com/Vickey21299/BTP-EM-filed-prediction-using-Deep-learning-', icon: 'code' },
      { label: 'LoRa Repo', href: 'https://github.com/Vickey21299/LoRaCrowdSensing_local', icon: 'cell_tower', secondary: true },
    ],
    stat: null,
    terminal: {
      file: 'pinn_solver.py',
      tag: 'PINN 100x',
      body: {
        kind: 'list',
        title: 'SOLVER PARAMETERS & LOSS:',
        lines: [
          { text: 'Epoch 100: [████████░░] 0.082 MSE' },
          { text: 'Epoch 300: [██████████] 0.014 MSE' },
          { text: 'Epoch 500: [CONVERGED] 0.003 MSE', strong: true },
        ],
      },
      metrics: [
        { label: 'Mesh Latency:', value: '12ms edge-hop', tone: 'text-white' },
        { label: 'Differential Privacy:', value: 'ε = 0.5 (Local DP)', tone: 'text-emerald-400' },
      ],
      footer: { label: 'Model weight:', value: 'INT8 Quantized (4.2 MB)' },
    },
    tools: [
      { icon: 'local_fire_department', color: 'text-[#EE4C2C]', name: 'PyTorch', sub: 'Tensors & PINNs' },
      { icon: 'developer_mode', color: 'text-[#7F52FF]', name: 'Kotlin Multiplatform', sub: 'Edge Client' },
      { icon: 'speed', color: 'text-[#76B900]', name: 'CUDA Kernels', sub: 'Hardware Accel' },
      { icon: 'memory', color: 'text-[#FF6F00]', name: 'TensorFlow Lite', sub: 'INT8 Mobile' },
      { icon: 'cell_tower', color: 'text-emerald-400', name: 'LoRa Mesh', sub: 'P2P Telemetry' },
    ],
  },
  {
    id: 'github-index',
    kind: 'archive',
    command: '$ vickey-cli repo --list --all',
    indexLabel: 'INDEX ARCHIVE // 30+ REPOSITORIES',
    kicker: 'AUTONOMOUS COMPUTE ARCHIVE // 30+ REPOSITORIES',
    title: 'Explore Full Production Index on GitHub',
    description:
      'Explore 30+ open-source repositories across Python, TypeScript, Kotlin, C, and Dart covering multi-agent swarms, RAG pipelines, and physics-informed models.',
    stats: [
      { value: '30+', label: 'Repositories', tone: 'text-emerald-400' },
      { value: '7 Langs', label: 'Py, TS, C, Kotlin', tone: 'text-emerald-300' },
      { value: '24/7', label: 'Agent Uptime', tone: 'text-white' },
    ],
    primary: { label: 'Visit Full GitHub Profile (30 Repos)', href: `${GITHUB_URL}?tab=repositories` },
    secondary: { label: 'Connect on LinkedIn', href: LINKEDIN_URL },
    footerLeft: 'github.com/Vickey21299',
    footerRight: 'STATUS: PRODUCTION LIVE',
  },
]
