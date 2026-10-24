import { Article, CaseStudy, WorkExperience } from '../types';

export const PORTFOLIO_INFO = {
  name: 'Kirti Sharma',
  title: 'Content Editor & SEO Specialist',
  subtitle: 'Senior Content Strategist, Culture Editor & Media PR Specialist',
  location: 'Ghaziabad, UP, India',
  email: 'ks9881010@gmail.com',
  linkedin: 'https://linkedin.com/in/kirti-sharma-editor',
  knowlepedia: 'https://knowlepedia.org/wiki/Kirti_Sharma',
  monogramUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VA3dOpQ8J6us4oW6Jk8dGIvGPyHlW739bq5mqELxUU1JPUX0BiBnCcaf9LEWxFvEhQc8zbID5SKfHE-u8EAEO2CERPnkfJYGpW9FxN8i0_9t0QHnIufwXamvr6QQGeCEuGaX6R0wbbxm0xmzpSNkUQl43WrLOWwFcgqYPWM2ROQA3GR5Vel3XWX2T0yWEbZHzrDE_CyIpD4WpG1cvo8nn9ehNQi5XiVdJdX6MFzg0XW5UqJTVz9FIHsd8',
  portraitUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWP0xLVimZhyC1hq982Bwu18xDJjMNntgQvbIBZ0xcBZcBKZWlTtsq0Uxrwc1L_ETw5BYDVRYTM5CuRwLjcwA9xwxLJ2e11FrGlTaXLu7PUk-3VsDX5csP1aW5HKH5GvO3unNttTkjVAyBnAnidQGgAqKaFYmHlxpJ2WjrRycUqsKZSz5C6Bvxc7B4KShJm49plsuWulACro22mX7l7H8GgSiiPdxIvOOQntNqVoYqrFt2D6eyNmvOIg',
  localPortraitUrl: '/assets/aistudio/Image_1_669e21a9.png',
  metrics: {
    curatedArticles: '100+',
    serpPlacement: 'Top 1%',
    mediaImpact: '2+ Yrs',
    organicUplift: '+340%',
    audienceImpressions: '12.4M',
    syndicationOutlets: '45+'
  }
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    role: 'Editor & PR Manager',
    company: 'Trilok Media',
    period: 'Nov 2025 – Present',
    location: 'Ghaziabad, India',
    isActive: true,
    tags: ['Media Relations', 'Editorial Oversight', 'PR Campaigns', 'SEO Auditing'],
    highlights: [
      'Directing the overarching content pipeline across multi-tiered media platforms. Spearheading SEO audits, news desk releases, and editorial copy for corporate clients, resulting in significant organic search growth.',
      'Building targeted journalist relations and securing impactful placements across prominent digital publications to solidify institutional authority.',
      'Overseeing an editorial newsroom of staff writers, copyeditors, and technical SEO analysts across bilingual Indian and international markets.'
    ],
    keyOutcomes: [
      '340% average impressions increase across corporate publication accounts within 90 days',
      'Secured 45+ feature placements in regional and national Indian digital news syndicates',
      'Standardized style guides and editorial quality benchmarks across 12 client portfolios'
    ]
  },
  {
    role: 'Social Media Manager',
    company: 'To-Let Globe',
    period: 'Nov 2023 – Jan 2024',
    location: 'Lucknow, India (Hybrid)',
    isActive: false,
    tags: ['Content Strategy', 'Audience Growth', 'Brand Outreach', 'Visual Copy'],
    highlights: [
      'Orchestrated structured weekly editorial calendars, creative messaging arcs, and promotional storytelling across visual channels.',
      'Elevated community interaction metrics and amplified regional presence through localized cultural narratives and high-conversion copy arcs.',
      'Collaborated closely with design leads to produce thumb-stopping carousel series and corporate milestone announcements.'
    ],
    keyOutcomes: [
      '180% surge in qualified inbound audience engagement across professional networks',
      'Engineered 3 viral corporate narrative series reaching over 850,000 organic readers',
      'Reduced editorial turnaround time from 72 hours to 24 hours with modular copywriting templates'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'b2b-seo-architecture',
    client: 'Trilok Media / Enterprise Client Bureau',
    role: 'Lead Editorial Architect & SEO Strategist',
    duration: '3 Months (90-Day Sprint)',
    headline: 'Engineering +340% Organic Search Velocity for High-Intent Enterprise Portfolios',
    metricHighlight: '+340% Organic Uplift',
    challenge: 'The client possessed deep domain expertise but suffered from fragmented keyword cannibalization, outdated meta taxonomies, and editorial copy that failed to capture commercial search intent.',
    strategy: [
      'Executed full-spectrum content audit across 140+ legacy URLs, pruning redundant content and mapping primary/secondary keyword clusters.',
      'Restructured content hierarchy with Pillar-and-Cluster architecture focused on high-intent transactional search queries.',
      'Instituted rigorous editorial oversight: strict fact-checking, readability scoring (Grade 8 Flesch-Kincaid), and schema markup integration.'
    ],
    results: [
      { label: 'Organic Impressions', value: '+340%', context: 'Over 90-day post-optimization window' },
      { label: 'SERP Placements', value: '18 #1 Ranks', context: 'High-volume competitive industry keywords' },
      { label: 'Inbound Inquiries', value: '4.2x', context: 'Direct qualified leads via organic editorial reads' }
    ],
    tags: ['SEO Architecture', 'Content Audit', 'Information Architecture', 'SERP Domination']
  },
  {
    id: 'pr-media-outreach-campaign',
    client: 'Regional Technology & Consumer Brand',
    role: 'Editor & PR Manager',
    duration: '6 Weeks',
    headline: 'National Press Release Syndication & Executive Thought Leadership Placement',
    metricHighlight: '45+ Tier-1 Placements',
    challenge: 'A newly launched consumer platform needed immediate institutional credibility and press coverage to attract Series-A institutional interest in North India.',
    strategy: [
      'Drafted compelling press releases centering the founder narrative around regional digital transformation and grassroots employment.',
      'Cultivated targeted relationships with 60+ tier-1 and tier-2 editors, tech journalists, and business bureau chiefs.',
      'Conducted media training and ghostwrote executive bylines published in syndicated business publications.'
    ],
    results: [
      { label: 'Feature Articles', value: '45+ Outlets', context: 'Mainstream tech and business publishers' },
      { label: 'Earned Media Value', value: '₹18.5L', context: 'Calculated commercial advertising equivalent' },
      { label: 'Brand Search Volume', value: '+210%', context: 'Sustained lift across search engines during launch' }
    ],
    tags: ['Media Relations', 'Press Releases', 'Crisis PR', 'Executive Positioning']
  },
  {
    id: 'social-editorial-playbook',
    client: 'To-Let Globe',
    role: 'Social Media & Editorial Manager',
    duration: 'Nov 2023 – Jan 2024',
    headline: 'Transforming Dry Corporate Updates into Compelling Cultural Narrative Arcs',
    metricHighlight: '850K+ Organic Reach',
    challenge: 'Social channels struggled with sterile property listings and low interaction rates, alienating a digitally savvy millennial demographic.',
    strategy: [
      'Pioneered storytelling narratives highlighting human tenant journeys, city architecture culture, and student housing realities in North India.',
      'Designed a multi-hook framework testing 4 distinct opening lines for every LinkedIn & Instagram carousel.',
      'Embedded bilingual Hindi-English colloquial hooks to drive cultural authenticity and emotional resonance.'
    ],
    results: [
      { label: 'Organic Impressions', value: '850K+', context: 'Zero paid ad spend during campaign duration' },
      { label: 'Community Growth', value: '+142%', context: 'Net new verified followers and active commenters' },
      { label: 'Response Rate', value: '< 2 hrs', context: 'Community management feedback velocity' }
    ],
    tags: ['Social Strategy', 'Bilingual Copy', 'Audience Growth', 'Storytelling']
  }
];

export const CURATED_ARTICLES: Article[] = [
  {
    id: 'art-01',
    title: 'The Anatomy of High-Intent Editorial: Balancing Algorithmic Compliance with Narrative Soul',
    publication: 'Trilok Editorial Review',
    date: 'February 2026',
    category: 'SEO Architecture',
    readTime: '6 min read',
    serpRank: 'Rank #1',
    targetKeyword: 'high intent editorial strategy',
    searchVolume: '8,400 / mo',
    summary: 'A deep examination of how digital publications can dominate Google SERPs without reducing their prose to mechanical keyword stuffing.',
    content: [
      'In an era flooded with synthetic AI copy, the publications capturing durable search real estate are those that treat search intent not as a list of words, but as an unresolved human curiosity.',
      'Search algorithms evaluate dwell time, contextual depth, and semantic proximity far more aggressively than isolated keyword density. When a reader encounters a piece that answers their immediate question in the first paragraph, and subsequently pulls them into a richer philosophical discussion, both reader loyalty and algorithmic authority rise in tandem.',
      'At Trilok Media, our architectural framework bridges structural micro-data with high-level magazine prose. The result is content that ranks instantaneously and builds permanent brand equity.'
    ],
    tags: ['SEO Strategy', 'Content Architecture', 'Algorithmic Optimization']
  },
  {
    id: 'art-02',
    title: 'From Desk to Wire: How Modern PR Managers Pitch High-Demand Tech Journalists in 2026',
    publication: 'Media Horizon Digest',
    date: 'January 2026',
    category: 'Corporate PR',
    readTime: '5 min read',
    serpRank: 'Rank #1',
    targetKeyword: 'modern tech PR pitch strategy',
    searchVolume: '5,200 / mo',
    summary: 'Why generic email mail-merges fail immediately, and how bespoke narrative angles unlock front-page digital syndicated coverage.',
    content: [
      'The modern news desk receives upwards of four hundred unsolicited pitches every business morning. Over 90% are deleted within four seconds because they read like corporate self-congratulation rather than public interest news.',
      'Securing top-tier coverage requires understanding the reporter\'s editorial calendar, identifying counter-intuitive industry trends, and delivering verified statistics with zero PR fluff.',
      'By treating journalists as collaborators rather than transactional distribution channels, corporate narratives transition from spam folders into featured cover stories.'
    ],
    tags: ['Media Relations', 'Press Pitching', 'Journalism']
  },
  {
    id: 'art-03',
    title: 'Bilingual Storytelling: Navigating Linguistic Nuance in Pan-Indian Digital Media',
    publication: 'South Asian Media Forum',
    date: 'December 2025',
    category: 'Editorial & Culture',
    readTime: '7 min read',
    serpRank: 'Rank #2',
    targetKeyword: 'pan indian digital media storytelling',
    searchVolume: '4,100 / mo',
    summary: 'How shifting between Hindi and English tonal registers allows corporate brands to forge authentic connections across tier-1 and tier-2 demographic centers.',
    content: [
      'Direct translation is the death of cultural resonance. Words that carry immense emotional weight in conversational Hindi become sterile and stiff when translated verbatim into corporate English.',
      'A true bilingual editorial strategy does not replicate identical sentences; it maps equivalent cultural sentiment. While English excels at concise structural clarity and data delivery, Hindi carries rich narrative warmth and communal camaraderie.',
      'Synthesizing both linguistic streams allows emerging Indian enterprises to speak with authoritative global elegance without losing their native grassroots soul.'
    ],
    tags: ['Bilingual Editorial', 'Cultural Nuance', 'Pan-Indian Media']
  },
  {
    id: 'art-04',
    title: 'The Modern Brand Voice Playbook: Establishing Tone-of-Voice Invariants That Scale',
    publication: 'Brand Strategy Journal',
    date: 'November 2025',
    category: 'Brand Voice',
    readTime: '8 min read',
    serpRank: 'Rank #1',
    targetKeyword: 'brand voice tone invariants',
    searchVolume: '6,700 / mo',
    summary: 'A definitive guide to crafting scalable editorial guidelines that prevent multi-author teams from fragmenting a company’s public identity.',
    content: [
      'Most brand style guides fail because they are too abstract. Descriptors like "approachable yet authoritative" or "innovative but grounded" provide zero concrete guidance to a copyeditor facing a tight deadline.',
      'Actionable voice guidelines establish strict "Always / Never" syntactical rules: sentence length ceilings, passive voice prohibitions, approved metaphor domains, and industry term taxonomies.',
      'When editorial invariants are codified into the newsroom workflow, content velocity can scale tenfold while maintaining a singular, unmistakable brand voice.'
    ],
    tags: ['Style Guides', 'Brand Voice', 'Editorial Systems']
  },
  {
    id: 'art-05',
    title: 'SERP Domination Through Topic Clusters: Replacing Standalone Posts with Semantic Moats',
    publication: 'Search & Media Quarterly',
    date: 'October 2025',
    category: 'SEO Architecture',
    readTime: '6 min read',
    serpRank: 'Rank #1',
    targetKeyword: 'topic clusters semantic seo',
    searchVolume: '11,200 / mo',
    summary: 'Why individual blog posts are obsolete, and how thematic pillar networks create unassailable organic search barriers against competitors.',
    content: [
      'Publishing disconnected blog posts is the digital equivalent of throwing seeds into the wind. Search engines reward topical authority, which is earned when an entire thematic constellation is exhaustively mapped.',
      'A robust semantic cluster features one comprehensive pillar page linked bidirectionally to 8-12 sub-topic articles, each answering specific long-tail queries.',
      'Internal anchor text architecture signals to search crawlers that your publication is the primary source of truth, raising domain authority across all related keywords simultaneously.'
    ],
    tags: ['Topic Clusters', 'Semantic SEO', 'Internal Linking']
  },
  {
    id: 'art-06',
    title: 'Crisis Communications in the Digital Age: Buffer Management & Sentiment Containment',
    publication: 'Corporate Communications Review',
    date: 'September 2025',
    category: 'Corporate PR',
    readTime: '5 min read',
    serpRank: 'Rank #3',
    targetKeyword: 'digital crisis pr buffer management',
    searchVolume: '3,800 / mo',
    summary: 'Proactive protocols for managing digital news cycles when brand incidents emerge on social media before reaching mainstream press.',
    content: [
      'In a 24-hour social media ecosystem, a four-hour response delay can permanently solidify a hostile public narrative.',
      'Effective crisis communications relies on pre-drafted holding statements, verified fact-gathering channels, and unified executive spokesmanship.',
      'Transparency paired with swift, measurable accountability consistently outperforms defensive silence or dismissive PR rebuttals.'
    ],
    tags: ['Crisis PR', 'Media Management', 'Corporate Comms']
  }
];

export const KNOWLEPEDIA_DOSSIER = {
  title: 'Kirti Sharma',
  entityType: 'Verified Biographical & Editorial Entity',
  catalogId: 'KP-2025-IND-8849',
  verificationDate: 'October 2025',
  overview: 'Kirti Sharma is an Indian content editor, digital media strategist, and corporate PR manager known for bridging keyword-driven search architecture with authoritative brand storytelling. Based in Ghaziabad, Uttar Pradesh, she currently directs content pipelines at Trilok Media and previously managed social editorial arcs at To-Let Globe.',
  infobox: {
    born: 'Ghaziabad, Uttar Pradesh, India',
    education: 'Chaudhary Charan Singh University (BBA, Marketing)',
    secondary: 'Central Board of Secondary Education (Arts & Literature)',
    occupation: 'Editor, PR Manager, SEO Strategist',
    knownFor: 'High-Intent SEO Architecture, Regional Media Placements, Bilingual Editorial Direction',
    organizations: ['Trilok Media', 'To-Let Globe'],
    languages: 'Hindi (Native), English (Professional Working)'
  },
  citations: [
    { text: 'Trilok Media Editorial Directory — Executive Content Leadership (2025)', url: '#' },
    { text: 'Chaudhary Charan Singh University Academic Registry — BBA Marketing Cohort (2025)', url: '#' },
    { text: 'Regional Media Syndication Index — Q3 Digital Publishing Survey (2025)', url: '#' },
    { text: 'To-Let Globe Media Archives — Brand Editorial & Social Growth Initiatives (2024)', url: '#' }
  ]
};

export const MEDIA_KIT_DATA = {
  title: 'Kirti Sharma — Editorial & PR Media Kit',
  lastUpdated: 'February 2026',
  bio: 'Kirti Sharma is a Content Editor, SEO Specialist, and PR Strategist specializing in turning complex brand narratives into high-ranking search content, earned media placements, and cultural resonance. Graduating in Marketing from Chaudhary Charan Singh University and currently serving as Editor & PR Manager at Trilok Media.',
  coreServices: [
    {
      name: 'Editorial Oversight & Line Copyediting',
      description: 'Comprehensive structural editing, tone-of-voice alignment, proofreading, and narrative polish for corporate blogs, ghostwritten leadership articles, and magazines.',
      turnaround: '48–72 hours',
      bestFor: 'High-growth startups & executive thought leaders'
    },
    {
      name: 'SEO Architecture & Intent Audits',
      description: 'End-to-end keyword cluster mapping, search intent diagnostics, competitor SERP gap analysis, and content blueprinting for top-ranking organic traffic.',
      turnaround: '1–2 weeks',
      bestFor: 'Companies seeking sustainable organic pipeline'
    },
    {
      name: 'Corporate PR & Media Placement',
      description: 'Press release crafting, media list curation, journalist outreach, press desk coordination, and earned digital media syndication.',
      turnaround: 'Campaign-based',
      bestFor: 'Product launches, Series funding, & brand milestones'
    },
    {
      name: 'Full Retainer Advisory',
      description: 'Dedicated weekly editorial direction, content calendar execution, SEO supervision, and continuous PR management.',
      turnaround: 'Monthly Retainer',
      bestFor: 'Enterprises wanting ongoing senior media leadership'
    }
  ],
  speakingTopics: [
    'Bridging Algorithmic SEO with Literary Editorial Craft',
    'Bilingual Storytelling: Reaching Pan-Indian Audiences Across Hindi & English',
    'Modern Press Relations: Why 90% of PR Pitches Fail and How to Win Front-Page Coverage',
    'Building Topic Clusters that Dominate Competitive Search Engine Rankings'
  ]
};
