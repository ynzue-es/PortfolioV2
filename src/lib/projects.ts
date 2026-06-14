export type KeyMoment = {
    tag: string;
    title: string;
    text: string;
};

export type Project = {
    /** Identifiant d'URL (ex: /zerodoc). */
    slug: string;
    name: string;
    /** Affiché dans l'en-tête et les cartes (année ou statut). */
    year: string;
    /** Phrase courte pour les cartes / le SEO. */
    tagline: string;
    /** Lien externe vers le site du projet, si public. */
    url?: string;
    repos?: string[];
    services: string;
    client: string;
    team: string;
    categories: string[];
    overview: string;
    keyMoments: KeyMoment[];
    results: { title: string; text: string };
    /** Fichier dans /public/images/projects-image/. */
    image: string;
    /** "cover" (photo plein cadre) ou "contain" (logo centré sur fond clair). */
    fit?: "cover" | "contain";
};

export const projects: Project[] = [
    {
        slug: "zerodoc",
        name: "Zerodoc",
        year: "2025",
        tagline: "No-code mobile platform replacing paper forms for industrial SMEs.",
        url: "https://zerodoc.fr",
        repos: ["Zerodoc", "Zerodoc-mobile"],
        services: "Product · Mobile · Backend",
        client: "SaaS — Industrial SMEs",
        team: "Founder / Full-stack",
        categories: ["No-code", "Mobile", "Industry 4.0", "ERP", "Offline-first", "AI"],
        overview:
            "Zerodoc is a no-code mobile platform that lets industrial SMEs replace their paper forms with configurable apps connected to their ERP. A schema-driven React Native (Expo) runner renders apps from JSON served by Supabase, while a Next.js builder built with shadcn/ui lets teams design them without writing code.",
        keyMoments: [
            {
                tag: "ARCHITECTURE",
                title: "Schema-driven runner",
                text: "The mobile app is fully schema-driven: a React Native Expo runner renders any form from JSON fetched from Supabase. A 3-level data model — Source → Dataset → Field — describes everything, so new apps ship without a new release.",
            },
            {
                tag: "OFFLINE-FIRST",
                title: "SQLite & idempotent sync",
                text: "Built offline-first on SQLite with an idempotent sync engine, so field workers keep capturing data without a connection and nothing is ever duplicated once they come back online.",
            },
            {
                tag: "FIELDS & CONNECTORS",
                title: "15+ field types & AI",
                text: "More than 15 field types — including AI generation via Mistral — plus connectors for Google Sheets, SQL and Odoo. RBAC across 4 roles and on-premise deployment on a VPS with Caddy + TLS.",
            },
        ],
        results: {
            title: "ON THE STORES",
            text: "iOS submitted on June 9th, Android in progress. Pricing at 90 / 190 / 350 €/mo.",
        },
        image: "zerodoc.svg",
        fit: "contain",
    },
    {
        slug: "gleam",
        name: "Gleam",
        year: "NOW",
        tagline: "Automation, process mining and low-code tools for industrial SMEs.",
        url: "https://gleamflow.fr",
        repos: ["gleam", "gleam-infra", "gleam-relay", "gleam-computer-agent", "gleam-on-premise"],
        services: "Automation · Process Mining · Low-code",
        client: "Plastics-industry SMEs",
        team: "Founder / CEO",
        categories: ["Automation", "Process Mining", "Low-code", "On-premise", "Industry"],
        overview:
            "Gleam is the core of my activity: automation, process mining and low-code tooling for SMEs in the plastics industry. A cloud Django API relays through a WebSocket to a local Python agent that drives n8n, Metabase and SQL Server — a hybrid on-premise architecture shipped as a pre-configured box.",
        keyMoments: [
            {
                tag: "ARCHITECTURE",
                title: "On-premise relay",
                text: "A cloud Django API talks to an on-premise relay over WebSocket, which forwards commands to a local Python agent driving n8n, Metabase and SQL Server.",
            },
            {
                tag: "PROCESS MINING",
                title: "From logs to flows",
                text: "Process mining with PM4Py turns raw event logs into directly-followed graphs rendered with ReactFlow, across 8 standardized industrial categories.",
            },
            {
                tag: "MOAT",
                title: "Plug-and-play box",
                text: "A pre-configured mini-PC delivered on-site removes the integration friction for SMEs and becomes a defensible distribution channel.",
            },
        ],
        results: {
            title: "CORE BUSINESS",
            text: "Gleam is the umbrella for every automation and data project, with Parlenote and bespoke workflows as upsells.",
        },
        image: "gleam.svg",
        fit: "contain",
    },
    {
        slug: "allopitch",
        name: "Allopitch",
        year: "2025",
        tagline: "AI voice sales-training SaaS: pitch to virtual prospects, get instant feedback.",
        url: "https://allopitch.fr",
        services: "SaaS · Voice AI",
        client: "Sales teams",
        team: "Founder / Full-stack",
        categories: ["SaaS", "Voice AI", "Sales", "Realtime", "Stripe"],
        overview:
            "Allopitch is a voice-AI sales-training SaaS: sales reps practice against virtual prospects and get instant AI feedback on their pitch. Built on Next.js and self-hosted Supabase, using the OpenAI Realtime API for live voice conversations.",
        keyMoments: [
            {
                tag: "VOICE",
                title: "Realtime conversations",
                text: "Reps hold a live spoken conversation with a virtual prospect powered by the OpenAI Realtime API, then receive instant, structured feedback on their pitch.",
            },
            {
                tag: "STACK",
                title: "Next.js & self-hosted Supabase",
                text: "A Next.js front end on a self-hosted Supabase backend, with full Stripe billing including complete webhook handling.",
            },
            {
                tag: "GO-TO-MARKET",
                title: "Coach & ambassador model",
                text: "A dedicated coach role plus an ambassador / commission model to drive distribution.",
            },
        ],
        results: {
            title: "TRAIN THE PITCH",
            text: "Reps sharpen their pitch on demand, against realistic prospects, with feedback that used to require a human coach.",
        },
        image: "allopitch.svg",
        fit: "contain",
    },
    {
        slug: "parlenote",
        name: "Parlenote",
        year: "2025",
        tagline: "B2B SaaS to record, transcribe and summarize client meetings.",
        url: "https://parlenote.fr",
        services: "SaaS · Speech AI",
        client: "B2B",
        team: "Founder / Full-stack",
        categories: ["SaaS", "Speech AI", "B2B", "Meetings"],
        overview:
            "Parlenote is a B2B SaaS that records, transcribes and summarizes client meetings using Mistral Voxtral. It ships as an upsell of Gleam, with invitation-only onboarding and PKCE authentication.",
        keyMoments: [
            {
                tag: "SPEECH AI",
                title: "Record, transcribe, summarize",
                text: "Meetings are recorded, transcribed and summarized automatically with Mistral Voxtral, turning conversations into actionable notes.",
            },
            {
                tag: "AUTH",
                title: "PKCE & invitation onboarding",
                text: "Secure PKCE authentication with invitation-only onboarding keeps the product B2B and controlled.",
            },
            {
                tag: "DISTRIBUTION",
                title: "Upsell of Gleam",
                text: "Parlenote plugs into the Gleam ecosystem as a natural upsell for existing clients.",
            },
        ],
        results: {
            title: "NEVER LOSE A MEETING",
            text: "Client conversations become searchable transcripts and summaries, with no manual note-taking.",
        },
        image: "parlenote.svg",
        fit: "contain",
    },
    {
        slug: "automatisations",
        name: "Business Automations",
        year: "ONGOING",
        tagline: "n8n workflows for industrial SMEs, deployable on-premise or in the cloud.",
        services: "Automation · Integration",
        client: "Industrial SMEs",
        team: "Solo / Gleam",
        categories: ["n8n", "ERP", "Integration", "On-premise", "ROI"],
        overview:
            "Custom business automations built as n8n workflows for industrial SMEs, deployable on-premise or in the cloud. They are the entry brick toward bespoke, ROI-priced automation projects.",
        keyMoments: [
            {
                tag: "FINANCE",
                title: "Invoice & accounting sync",
                text: "Automated invoice reminders (HTML tables + attached PDFs over SMB), manager sales recaps, and accounting sync (Quadra / Pennylane / Cegid) from Access .mdb databases into SQL Server.",
            },
            {
                tag: "INTEGRATIONS",
                title: "ERP & enterprise systems",
                text: "Lead enrichment and connectors for ERP / Sheets / SQL, with Odoo and Cegid PMI integrations (pyodbc) and Windows AD SSO (Kerberos / GSSAPI).",
            },
            {
                tag: "MODEL",
                title: "Entry brick, priced on ROI",
                text: "Each workflow is the entry point to larger custom automations, scoped and priced on measurable ROI.",
            },
        ],
        results: {
            title: "LESS MANUAL WORK",
            text: "Repetitive back-office tasks run on their own, on-premise or in the cloud, freeing teams for higher-value work.",
        },
        image: "automatisations.png",
        fit: "contain",
    },
    {
        slug: "ecole-42",
        name: "42 School",
        year: "2023",
        tagline: "Project-based, peer-to-peer software engineering with a low-level systems focus.",
        services: "C / C++ · Systems · Network",
        client: "Education",
        team: "Peer-to-peer",
        categories: ["C", "C++", "Unix", "Network", "Docker", "Algorithms"],
        overview:
            "42 is a project-based, peer-to-peer engineering school with no classes and no teachers — built on self-learning and low-level systems. I completed the common core, building everything from a Unix shell to a real-time multiplayer game.",
        keyMoments: [
            {
                tag: "C / SYSTEMS",
                title: "Low-level C & Minishell",
                text: "Rebuilt parts of the libc (libft) with manual memory management and algorithms (Ford-Johnson sort, data structures), then a full Unix shell — parsing, pipes, redirections, env variables, signals and process execution.",
            },
            {
                tag: "FULL-STACK",
                title: "ft_transcendence",
                text: "A full-stack web platform with a real-time multiplayer Pong game, microservices, auth and an SPA — Next.js + Django + Celery + Redis + PostgreSQL.",
            },
            {
                tag: "NETWORK & DEVOPS",
                title: "mini_serv, NetPractice, Inception",
                text: "A non-blocking multi-client TCP server in C (select), subnetting and TCP/IP routing (NetPractice), and a multi-container Docker infrastructure — NGINX, WordPress, MariaDB with TLS, volumes and isolated networks (Inception). Plus C++ OOP, templates, STL and exceptions.",
            },
        ],
        results: {
            title: "ENGINEERING RIGOR",
            text: "C/C++, algorithms, Unix systems, networking and containerization — with a discipline for memory management and robustness.",
        },
        image: "ecole-42.png",
        fit: "contain",
    },
];

export const getProject = (slug: string): Project | undefined =>
    projects.find((p) => p.slug === slug);

export const getOtherProjects = (slug: string): Project[] =>
    projects.filter((p) => p.slug !== slug);
