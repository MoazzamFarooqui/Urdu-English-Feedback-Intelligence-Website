export const nav = [
  { label: 'Home', path: '/' },
  { label: 'Company', path: '/company' },
  { label: 'Vision', path: '/vision' },
  { label: 'Team', path: '/team' },
  { label: 'Products', path: '/products' },
  { label: 'Solution', path: '/solution' },
  { label: 'Contact', path: '/contact' },
];

export const problems = [
  {
    icon: 'Languages',
    title: 'Mixed languages',
    body: 'Reviews arrive in Urdu script, Roman Urdu and English — often in the same sentence. Most tools were not built for this.',
  },
  {
    icon: 'Clock',
    title: 'No time to read everything',
    body: 'Owners are busy running the business. Feedback piles up unread, and the important points get buried.',
  },
  {
    icon: 'Repeat',
    title: 'Same problems repeat',
    body: 'Without a clear summary, the same complaints keep coming back — because no one saw the pattern.',
  },
];

export const howItWorks = [
  { step: '01', title: 'Collect', body: 'Pull in feedback from Google reviews, CSV uploads, forms and WhatsApp exports.' },
  { step: '02', title: 'Understand', body: 'Sentimo reads Urdu, Roman Urdu and English, and detects sentiment and topic.' },
  { step: '03', title: 'Summarize', body: 'Get a weekly plain-language summary of what customers like and what to fix.' },
  { step: '04', title: 'Act', body: 'Follow suggested actions to address the issues that show up most often.' },
];

export const industries = [
  { icon: 'UtensilsCrossed', title: 'Restaurants', body: 'See what guests say about food, service and delivery in one place.' },
  { icon: 'ShoppingBag', title: 'Online sellers', body: 'Turn order reviews and DMs into clear product and delivery insight.' },
  { icon: 'Stethoscope', title: 'Clinics', body: 'Understand patient feedback on wait times, staff and care quality.' },
  { icon: 'Scissors', title: 'Salons', body: 'Track what clients love about service, stylists and pricing.' },
];

export const whySentimo = [
  { icon: 'Languages', title: 'Built for mixed languages', body: 'Designed specifically for Urdu, Roman Urdu and English in the same feedback.' },
  { icon: 'UserRound', title: 'Made for owners, not analysts', body: 'No data science background needed. Clear summaries in everyday language.' },
  { icon: 'Zap', title: 'Saves hours every week', body: 'Stop reading reviews one by one. Get the important points in minutes.' },
  { icon: 'Target', title: 'Turns feedback into action', body: 'See recurring issues and suggested next steps, not just a score.' },
];

export const sampleReviews = [
  { text: 'Khana bohat acha tha lekin delivery late thi', sentiment: 'mixed', topics: ['Food', 'Delivery'] },
  { text: 'سروس بہت اچھی تھی مگر قیمت زیادہ ہے', sentiment: 'negative', topics: ['Staff', 'Price'], urdu: true },
  { text: 'Great food and friendly staff, will order again', sentiment: 'positive', topics: ['Food', 'Staff'] },
  { text: 'Quality theek thi but packing was bad', sentiment: 'mixed', topics: ['Quality', 'Delivery'] },
];

export const coreFeatures = [
  {
    icon: 'Languages',
    title: 'Multilingual feedback ingestion',
    tag: 'MVP',
    body: 'Bring in reviews in Urdu script, Roman Urdu and English from one dashboard.',
  },
  {
    icon: 'Smile',
    title: 'Sentiment analysis',
    tag: 'MVP',
    body: 'Each piece of feedback is labeled positive, negative or mixed — in all three languages.',
  },
  {
    icon: 'Tag',
    title: 'Topic & aspect detection',
    tag: 'MVP',
    body: 'Automatically tags food, service, price, delivery and cleanliness across feedback.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Owner-friendly dashboard',
    tag: 'MVP',
    body: 'See trends over time in a clean dashboard built for owners, not data teams.',
  },
  {
    icon: 'Sparkles',
    title: 'Weekly plain-language summary',
    tag: 'MVP',
    body: 'A short summary of what customers like and what to fix, with suggested actions.',
  },
];

export const roadmapFeatures = [
  { icon: 'MessageCircle', title: 'WhatsApp & social integrations', body: 'Connect feedback straight from WhatsApp and social channels.' },
  { icon: 'Mic', title: 'Voice feedback', body: 'Capture and understand spoken feedback in Urdu and English.' },
  { icon: 'Reply', title: 'Suggested replies', body: 'Draft on-brand responses to common reviews in one click.' },
  { icon: 'Smartphone', title: 'Mobile app', body: 'Take Sentimo with you and check insights on the go.' },
];

export const targetCustomers = [
  {
    icon: 'UtensilsCrossed',
    title: 'Restaurants',
    pain: 'Reviews mention food, delivery and price in three languages.',
    help: 'Sentimo groups feedback by topic and shows what to fix first.',
  },
  {
    icon: 'ShoppingBag',
    title: 'Online sellers',
    pain: 'Order feedback is scattered across DMs and reviews.',
    help: 'Sentimo turns scattered comments into clear product and delivery insight.',
  },
  {
    icon: 'Stethoscope',
    title: 'Clinics',
    pain: 'Patient feedback on wait times and staff is hard to track.',
    help: 'Sentimo surfaces recurring themes so care and service can improve.',
  },
  {
    icon: 'Scissors',
    title: 'Salons',
    pain: 'Clients talk about stylists, service and pricing in mixed language.',
    help: 'Sentimo shows what clients love and where pricing feels off.',
  },
];

export const plans = [
  {
    name: 'Starter',
    badge: 'Early access',
    points: ['Feedback upload (CSV & manual)', 'Sentiment & topic detection', 'Weekly summary', '1 business profile'],
    cta: 'Join the waitlist',
    highlight: false,
  },
  {
    name: 'Growth',
    badge: 'Early access',
    points: ['Everything in Starter', 'Google reviews export', 'Dashboard trends', 'Up to 3 profiles'],
    cta: 'Join the waitlist',
    highlight: true,
  },
  {
    name: 'Business',
    badge: 'Roadmap',
    points: ['Everything in Growth', 'WhatsApp & social integrations', 'Suggested replies', 'Team access'],
    cta: 'Get notified',
    highlight: false,
  },
];

export const coreValues = [
  { icon: 'Languages', title: 'Language-first', body: 'We build for the languages real customers actually use.' },
  { icon: 'HandHeart', title: 'Owner respect', body: 'Owners are experts at their business. We respect their time.' },
  { icon: 'ShieldCheck', title: 'Honesty', body: 'No inflated claims. We say what Sentimo does and what it does not.' },
  { icon: 'Sparkles', title: 'Clarity over flash', body: 'Insight should be clear and useful, not just impressive.' },
];

export const objectives = [
  {
    metric: 'Multilingual sentiment classification',
    target: 'Support Urdu, Roman Urdu and English in the MVP',
    timeframe: 'MVP',
  },
  {
    metric: 'Model quality',
    target: 'Reach a defined F1-score target on a labelled validation set',
    timeframe: 'Target',
  },
  {
    metric: 'User research',
    target: 'Complete 3+ user interviews to shape core features',
    timeframe: 'Pre-launch',
  },
  {
    metric: 'Working MVP',
    target: 'Deliver a working MVP by a stated date',
    timeframe: 'Target',
  },
  {
    metric: 'Topic coverage',
    target: 'Detect 5 core topics: food, service, price, delivery, cleanliness',
    timeframe: 'MVP',
  },
  {
    metric: 'Early access signups',
    target: 'Build a waitlist of interested small businesses',
    timeframe: 'Launch',
  },
];

export const faqs = [
  {
    q: 'Which languages does Sentimo support?',
    a: 'Sentimo is designed for Urdu (script), Roman Urdu and English — including feedback that mixes all three in one message.',
  },
  {
    q: 'How do I get early access?',
    a: 'Use the contact form or any "Get early access" button on the site. We will add you to the waitlist and reach out as slots open.',
  },
  {
    q: 'Is Sentimo free during early access?',
    a: 'Early access members help shape the product. Pricing will be announced at launch, and early access participants will be the first to know.',
  },
  {
    q: 'Do I need any technical knowledge to use it?',
    a: 'No. Sentimo is built for owners, not analysts. You upload feedback and read a clear summary — no data science background needed.',
  },
  {
    q: 'Where is my feedback data stored?',
    a: 'Feedback is stored securely and used only to produce your insights. We do not share your data with third parties.',
  },
];
