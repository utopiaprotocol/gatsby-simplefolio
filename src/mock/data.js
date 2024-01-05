import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Utopia Protocol', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  // title: '',
  name: 'Utopia Protocol',
  // subtitle: '',
  cta: 'Welcome! Feeling lost? No worries, youre in the right place',
};

// ABOUT DATA
export const aboutData = {
  img: 'Utopia Protocol Logo.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'mailto:utopiaprotocol@gmail.com', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Lantana Street View.png',
    title: '129 Sterns St, FL',
    info: 'Relax with the whole family at this 2 bedroom 1 bathroom home with a large fenced yard, and plenty of room for everyone. Less than a mile to the beach, even closer to Ocean Avenue, shops, restaurants, boat launch, and parks.',
    info2: '',
    url: 'https://www.airbnb.com/rooms/596950728617166822',
  },
  {
    id: nanoid(),
    img: 'New Hyde Park Street View.png',
    title: '1210 5th Ave, NY',
    info: '',
    info2: '',
    url: '',
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: ' ',
  btn: '',
  email: 'utopiaprotocol@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'github',
    //   url: '',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
