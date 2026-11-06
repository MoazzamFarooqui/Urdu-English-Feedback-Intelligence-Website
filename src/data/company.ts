export const company = {
  name: 'Sentimo Tech Solutions',
  product: 'Sentimo',
  tagline: 'Understand every customer, in every language they speak.',
  location: 'Pakistan',
  focus: 'NLP and feedback analytics',
  market: 'Pakistani SMEs',
  email: 'hello@sentimo.example',
  website: 'sentimo.example',
};

export const contact = {
  email: 'hello@sentimo.example',
  phone: '+92 300 0000000',
  location: 'Pakistan',
  members: [
    { name: 'Moazzam Farooqui', email: 'moazzam@sentimo.example', phone: '+92 300 0000001' },
    { name: 'Falak Naz', email: 'falak@sentimo.example', phone: '+92 300 0000002' },
    { name: 'Musfirah Shakil', email: 'musfirah@sentimo.example', phone: '+92 300 0000003' },
  ],
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'X', href: '#' },
    { label: 'GitHub', href: '#' },
  ],
};

export const team = [
  {
    id: 'moazzam',
    name: 'Moazzam Farooqui',
    designation: 'Chief Executive Officer (CEO) & Product Lead',
    initials: 'MF',
    bio: 'Defines the product vision, leads user research and shapes the business behind Sentimo.',
    skills: ['Product strategy', 'User research', 'Business modeling', 'Documentation', 'Presentations'],
    responsibilities: [
      'Product definition and roadmap ownership',
      'User research and customer interviews',
      'Business model and go-to-market planning',
      'Website content and narrative',
      'Documentation and presentations',
    ],
    deliverables: ['Product requirements', 'Interview insights', 'Business model canvas', 'Pitch and demo materials'],
    contribution: 'Anchors what Sentimo is for, who it serves and how it reaches them.',
    vision: 'Build a product small-business owners trust to understand every customer voice.',
  },
  {
    id: 'falak',
    name: 'Falak Naz',
    designation: 'Chief Data Officer (CDO) & Lead NLP Engineer',
    initials: 'FN',
    bio: 'Builds the language understanding at the core of Sentimo — from data to trained models.',
    skills: ['NLP', 'Sentiment analysis', 'Topic modeling', 'Data labeling', 'Evaluation metrics', 'Python'],
    responsibilities: [
      'Data collection and dataset preparation',
      'Urdu, Roman Urdu and English text cleaning',
      'Roman Urdu normalization',
      'Sentiment and topic model training',
      'Evaluation metrics and quality reporting',
    ],
    deliverables: ['Labeled validation set', 'Sentiment classifier', 'Topic detector', 'Evaluation report'],
    contribution: 'Powers the multilingual understanding that makes Sentimo different.',
    vision: 'Make code-mixed feedback as readable as plain English for any owner.',
  },
  {
    id: 'musfirah',
    name: 'Musfirah Shakil',
    designation: 'Chief Technology Officer (CTO) & Platform Architect',
    initials: 'MS',
    bio: 'Designs and builds the platform that turns feedback into clear, owner-friendly insight.',
    skills: ['Platform architecture', 'Backend & API design', 'PostgreSQL', 'Deployment', 'Monitoring', 'Security', 'React'],
    responsibilities: [
      'Platform and architecture design',
      'Backend and API design',
      'Storage and data modeling',
      'Deployment and monitoring',
      'Security and access control',
      'Website build',
    ],
    deliverables: ['System architecture', 'REST API', 'Dashboard front-end', 'Deployment pipeline'],
    contribution: 'Turns the models into a reliable, secure product owners can actually use.',
    vision: 'A platform that feels effortless for owners and stays dependable as it grows.',
  },
];

export const responsibilityMatrix = [
  { area: 'Product definition & roadmap', moazzam: 'Lead', falak: 'Support', musfirah: 'Support' },
  { area: 'User research & interviews', moazzam: 'Lead', falak: 'Support', musfirah: 'Support' },
  { area: 'Business model & outreach', moazzam: 'Lead', falak: 'Support', musfirah: 'Support' },
  { area: 'Data collection & cleaning', moazzam: 'Support', falak: 'Lead', musfirah: 'Support' },
  { area: 'NLP models & evaluation', moazzam: 'Support', falak: 'Lead', musfirah: 'Support' },
  { area: 'Architecture & API', moazzam: 'Support', falak: 'Support', musfirah: 'Lead' },
  { area: 'Dashboard & website', moazzam: 'Support', falak: 'Support', musfirah: 'Lead' },
  { area: 'Deployment & security', moazzam: 'Support', falak: 'Support', musfirah: 'Lead' },
];
