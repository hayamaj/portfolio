
import About from '@/components/About';
import { CldImage } from 'next-cloudinary';

export const navItems = [
    { name: "scroll to top", link: "#home" },

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
    title: "Sattam AlMajali, 2019 (Oil on Canvas).",
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/OP001.jpg",
    alt: "Image 1",
  },
  {
    id: 4,
    title: "Detail, 2023 (Oil on Canvas)",
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/OP002.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    title: "Commissioned Portrait I (Oil on Canvas)",
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/OP003.jpg",
    alt: "Image 1",
  },
  {
    id: 3,
    title: "Commissioned Portrait II (Oil on Canvas)",
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707337201/image-gallery/OP004.jpg",
    alt: "Image 1",
  },
  {
    id: 5,
    title: "Jiddo & Teta (Digital Photo)",
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1718474884/image1_fnesv6.jpg",
    alt: "Image 1",
  },
    {
    id: 6,
    title: "Self-Portrait (Oil on Canvas)",
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707191748/image-gallery/OP004XX.jpg",
    alt: "Image 6",
  },
  {
    id: 7,
    title: "CJ (Ink on Paper)",
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707191749/image-gallery/IN001.jpg",
    alt: "Image 1",
  },
  {
    id: 8,
    title: "Jiddo (Digital Photo)",
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1718474889/image2_lleqfm.jpg",
    alt: "Image 1",
  },
  {
    id: 9,
    title: "Old Man's Hands (Pencil on Paper)",
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1707191748/image-gallery/PC002.jpg",
    alt: "Image 1",
  },
  {
    id: 10,
    title: "Family Tree (Digital Photo)",
    src: "https://res.cloudinary.com/dqqim3gc1/image/upload/v1722103822/image-gallery/kktn6wuyva7pt6iah4x1.png",
    alt: "Image 1",
  },
];


export const projects = [
    {
      id: 1,
      title: "dibs!",
      des: "a digital thrift store solution to campus waste management.",
      img: "/dibslogo.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/expo.png"],
      link: "/projects",
    },
    
    
    
  ];

  export const projectz = [
    {
      id: 1,
      title: "creative",
      des: "check out my creative work - art, photo, motion graphics...",
      img: "/drawingvid.mov",
      iconLists: ["/photoshop.png", "/illustrator.png", "/figma.png", "/aftereffects.png"], //replace
      link: "/creative",
    },

  ]

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
  
