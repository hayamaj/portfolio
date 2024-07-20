
import About from '@/components/About';
import { CldImage } from 'next-cloudinary';

export const navItems = [
    { name: "𖤐", link: "#home" },

  ];

  export const navItems2 = [
    { name: "back to home", link: "/" },

  ];

export const gridItems = [
    { title: 'title1', description: 'desc1', id:1},
    
]

export const contentData = [
  {
    title: "About Me",
    description: "Learn more about Haya.",
    content: "",
  },
  {
    title: "About Me",
    description: "Learn more about Haya.",
    content: "",
  },
  {
    title: "About Me",
    description: "Learn more about Haya.",
    content: "",
  },
  {
    title: "About Me",
    description: "Learn more about Haya.",
    content: "",
  },
  
  
  // Add more projects or content as needed
];

// Images array with CldImage component


export const images = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/OP001.jpg",
    alt: "Image 1",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/OP002.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/OP003.jpg",
    alt: "Image 1",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/OP004.jpg",
    alt: "Image 1",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1718474884/image1_fnesv6.jpg",
    alt: "Image 1",
  },
    {
    id: 6,
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/OP004XX.jpg",
    alt: "Image 1",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/IN001.jpg",
    alt: "Image 1",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1718474889/image2_lleqfm.jpg",
    alt: "Image 1",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/PC002.jpg",
    alt: "Image 1",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/2021-6_yqsasb.jpg",
    alt: "Image 1",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/PH001.jpg",
    alt: "Image 1",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/PH002.jpg",
    alt: "Image 1",
  },
];



export const projects = [
    {
      id: 1,
      title: "DIBS!",
      des: "a digital thrift store solution to campus waste management.",
      img: "/dibslogo.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/expo.png"],
      link: "/projects",
    },
    {
      id: 2,
      title: "CREATIVE",
      des: "check out my creative work - art, photo, motion graphics...",
      img: "/drawingvid.mov",
      iconLists: ["/photoshop.png", "/illustrator.png", "/figma.png", "/aftereffects.png"], //replace
      link: "/creative",
    },
  ];

  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];
  
