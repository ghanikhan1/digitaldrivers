import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  google,
  marketing,
  seo,
  googleanalytics,
  canva,
  klaviyo,
  mailchimp,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Digital Marketing",
    icon: mobile,
  },
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Social Media Marketing",
    icon: backend,
  },
  {
    title: "Ads Strategy",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Klaviyo",
    icon: klaviyo,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Google Analytics",
    icon: googleanalytics,
  },
  {
    name: "Meta",
    icon: meta,
  },
  {
    name: "Mail Chimp",
    icon: mailchimp,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Digital Marketing",
    // company_name: "Starbucks",
    icon: marketing,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "Pay-Per-Click (PPC) Advertising: Targeted ad campaigns to drive immediate traffic and conversions.",
      "Email Marketing: Craft compelling email campaigns to engage your audience and increase retention.",
      "Conversion Rate Optimization (CRO): Analyze and improve your website to convert more visitors into customers.",
      "Brand Strategy: Develop a strong brand identity and messaging to differentiate yourself in the market.",
    ],
  },
  {
    title: "SEO Optimization",
    // company_name: "Tesla",
    icon: seo,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "Optimize your website for search engines to improve visibility and attract organic traffic.",
      "Keyword Research: Identify and target the most relevant keywords for your industry.",
      "On-Page SEO: Optimize your website’s content and structure for better search engine rankings.",
      "Link Building: Enhance your site’s authority through strategic link-building efforts.",
      "Technical SEO: Address technical aspects like site speed, mobile-friendliness, and crawlability to improve SEO performance.",
    ],
  },
  {
    title: "Web Developments",
    // company_name: "Shopify",
    icon: web,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Meta (Facebook and Instagram) Marketing",
    // company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    // date: "Jan 2023 - Present",
    points: [
      "Innovative marketing strategies designed to enhance your presence on Meta platforms and drive targeted traffic to your site.",
      "Create highly targeted ad campaigns using Facebook and Instagram’s advanced audience targeting options.",
      "Utilize demographic, geographic, and interest-based targeting to reach your ideal customers.",
      "Develop visually appealing and engaging content tailored for Facebook and Instagram.",
      "Use a mix of images, videos, carousels, and stories to capture attention and engage your audience.",
    ],
  },
  {
    title: "Google Marketing",
    // company_name: "Meta",
    icon: google,
    iconBg: "#E6DEDD",
    // date: "Jan 2023 - Present",
    points: [
      "Strategic marketing solutions to enhance your presence on Google and drive targeted traffic to your site.",
      "Design and manage Google Ads campaigns including Search, Display, Shopping, and Video ads.",
      "Use keyword targeting and audience segmentation to reach potential customers at the right time.",
      "Optimize your website’s content and structure to improve search engine rankings.",
      "Conduct keyword research, on-page optimization, and technical SEO to enhance visibility on Google.",
      "Use Google Analytics and Google Ads reports to track the performance of your campaigns.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ghanikhan1",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ghanikhan1",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ghanikhan1",
  },
];

export { services, technologies, experiences, testimonials, projects };
