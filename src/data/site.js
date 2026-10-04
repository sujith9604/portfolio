// All site content in one place. Edit this file, then the pages update.
// Lines marked CONFIRM came from your old site, your resume, or your git config: check them once.

export const site = {
  name: 'Sujith Sai Dhaipule', // CONFIRM: your old site used both "Sujith Sai Dhaipule" and "Dhaipule Sujith Sai"
  shortName: 'Sujith',
  title: 'Backend Engineer',
  tagline: 'I build and migrate backend services for a banking platform.',
  intro:
    'Backend engineer at Atlas Consolidated, a Singapore-based banking-as-a-service company. ' +
    'I work in Java and Spring Boot on KYC, compliance, and risk services: provider integrations, ' +
    'messaging, audit logging, and screening.',
  email: 'sujith9604@gmail.com',
  phone: '+91 97044 65065', // set to '' to hide your phone number from the site
  location: 'Hyderabad, India',
  github: 'https://github.com/sujith9604',
  linkedin: 'https://linkedin.com/in/sujith-sai', // CONFIRM: copied from your old site
};

export const roles = ['Backend Engineer', 'Java and Spring Boot', 'Fintech Systems', 'Problem Solver'];

export const stats = [
  { number: '1.5+', label: 'Years in fintech backend' },
  { number: '4', label: 'KYC and monitoring providers integrated' },
  { number: '3', label: 'Messaging platforms migrated' },
];

export const job = {
  role: 'Backend Engineer', // CONFIRM: exact title on your offer letter
  company: 'Atlas Consolidated',
  about: 'Singapore-based banking-as-a-service company',
  period: 'Jan 2025 – Present', // CONFIRM: internship and full-time dates
  summary:
    'I work on the compliance and risk side of a banking platform, in Java and Spring Boot.',
  points: [
    'Integrated identity and monitoring providers (Singpass, Onfido, Bench Matrix, and the first version of Sumsub) behind common provider interfaces, with per-provider rate limiting to stay within vendor limits.',
    'Migrated messaging for the Compliance and Risk services from SQS to Kafka and then NATS JetStream, writing the producers and consumers on the shared messaging framework.',
    'Moved audit-log storage from MySQL to Loki and Grafana for scalability. The audit tenant handles over a million log lines a day.',
    'Built message screening using fuzzy search, and the backend APIs for an in-house LSEG World-Check portal that replaced a paid vendor portal.',
    'Moved risk configuration from a separate repository into the database, moved KYC field encryption to a central utility, and wrote unit and integration tests for the core module.',
  ],
  stack: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Kafka', 'NATS JetStream', 'AWS SQS', 'Loki', 'Grafana', 'JUnit'],
};

// Skills, laid out like the resume: a label and a plain list.
export const skills = [
  { label: 'Languages', items: ['Java', 'SQL'] },
  { label: 'Backend', items: ['Spring Boot', 'Spring Web', 'Spring Data / JPA', 'REST APIs', 'JUnit'] },
  { label: 'Data and Messaging', items: ['MySQL', 'Redis', 'Kafka', 'NATS JetStream', 'AWS SQS'] },
  { label: 'Cloud and Tools', items: ['AWS', 'Git', 'Loki', 'Grafana'] },
  { label: 'Fundamentals', items: ['Object-oriented Programming', 'Data Structures and Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'] },
];

export const education = [
  {
    when: '2021 – 2025',
    title: 'B.Tech, Computer Science and Engineering',
    where: 'IIIT Guwahati',
    detail:
      'CPI 7.81. Core coursework in algorithms, DBMS, operating systems, computer networks, software engineering, and high performance computing. Ranked in the top 0.07% of 484,302 teams in Flipkart GRiD 6.0 (Round 2).', // CONFIRM: your old site said CPI 7.83
  },
  {
    when: '2019 – 2021',
    title: 'Intermediate (MPC)',
    where: 'Sri Chaitanya Junior Kalasala, Hyderabad',
    detail: 'Scored 94.4%. Ranked in the top 1.5% in TS-EAMCET and the top 2% in COMEDK in 2021.',
  },
];

// All projects. tone is one of: 'live', 'course', 'planned' (it only changes the badge colour).
// Course projects are labelled as such and described without "I built".
export const projects = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    status: 'Live',
    tone: 'live',
    image: 'images/portfolio-website.svg',
    description:
      'This site. A single-page React app with client-side routing, a canvas particle background, and a deploy script that publishes to GitHub Pages.',
    technologies: ['React', 'Vite', 'React Router', 'GitHub Pages'],
    github: 'https://github.com/sujith9604/portfolio',
    live: 'https://sujith9604.github.io/portfolio/',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Desktop App',
    status: 'Course project',
    tone: 'course',
    image: 'images/real-estate-app.svg',
    description:
      'A desktop real estate management system where users can buy or sell properties, with property listing and search, and entity-relationship diagrams for the database design.',
    technologies: ['Java', 'Swing', 'MySQL'],
    github: 'https://github.com/sujith9604/vaasthunirmaan',
    live: '',
  },
  {
    id: 'unix-fs',
    title: 'Unix-like File System',
    status: 'Course project',
    tone: 'course',
    image: 'images/unix-like-file-system.svg',
    description:
      'A simplified Unix-like file system with create, delete, read, and write, plus a virtual memory and disk management simulation covering paging, frame allocation, and page replacement (Random, FIFO, and LRU).',
    technologies: ['C++', 'Operating Systems', 'Paging'],
    github: '',
    live: '',
  },
  {
    id: 'client-server',
    title: 'Java Client-Server Communication',
    status: 'Course project',
    tone: 'course',
    image: 'images/java-client-server.svg',
    description:
      'A command-line client-server application in Java for communication between network nodes, with protocols simulated and analysed using NetSim.',
    technologies: ['Java', 'Sockets', 'NetSim'],
    github: '',
    live: '',
  },
  {
    id: 'usb-sim',
    title: 'USB Malware Simulation',
    status: 'Course project',
    tone: 'course',
    image: 'images/usb-malware-simulation.svg',
    description:
      'A lab simulation of how a USB-borne program infects files, sets up autorun, and replicates, with the network traffic captured and analysed using Snort (NIDS) on Linux.',
    technologies: ['C++', 'Snort', 'Linux'],
    github: '', // add your repo link here if you want to show it
    live: '',
  },
  {
    id: 'careslot',
    title: 'CareSlot: Healthcare Appointments Backend',
    status: 'Planned',
    tone: 'planned',
    image: 'images/careslot.svg',
    description:
      'A backend I plan to build to practise concurrency, idempotency, and caching: appointment booking that cannot double-book a slot, with a Redis availability cache and reminder events.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
    github: '',
    live: '',
  },
];

export const community = [
  { icon: '🤝', title: 'Yuvaan', text: 'Volunteered at a 3-day annual cultural fest, helping with event planning and execution (March 2023).' },
  { icon: '🏃', title: 'Fit India Movement', text: 'Took part in a 2 km fitness initiative by the Ministry of Youth Affairs and Sports (October 2022).' },
];

// One small line at the bottom of every page.
export const thanks = 'Thanks for visiting. Love you 3000.';

export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
