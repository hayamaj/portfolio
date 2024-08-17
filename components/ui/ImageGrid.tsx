import React from 'react';
import { images } from "@/data";
import { useLenis } from '@/libs/lenis';

const ImageGrid = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    console.log('scroll position:', scroll);
  });
  const handleClick = (id: number) => {
    const element = document.getElementById(`image-${id}`);
    if (element && lenis) {
      lenis.scrollTo(element, { duration: 1.5 });
    } else {
      console.error('Element not found or Lenis not initialized');
    }
  };

  return (
    
    <section id="s-work" className="bg-[#FBF6F4] container">
    <div className="flex md:justify-center items-center md:-my-36 md:ml-18 max-w-2xl w-screen">
          <h1 className="font-semibold text-xl justify-center">Art</h1>
      </div>
      <div className="projects md:mt-36 mt-8">
        {images.map((image, index) => {
          let rowClass = '';
          switch(index % 5) {
            case 0:
              rowClass = 'l-a';
              break;
            case 1:
              rowClass = 'l-b';
              break;
            case 2:
              rowClass = 'l-c';
              break;
            case 3:
              rowClass = 'l-d';
              break;
            case 4:
              rowClass = 'l-e';
              break;
            default:
              break;
          }
          return (
            <div key={image.id} id={`work-${image.id}`} className={`row ${rowClass}`}>
              <div className="block cursor-pointer" onClick={() => handleClick(image.id)}>
                <div className="title mb-4">
                  <h3 className="text-md font-light bg-[#FBF6F4]">
                    <span>{image.title}</span>
                  </h3>
                </div>
                <div className="thumbnail relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="object-cover w-auto h-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
};

export default ImageGrid;
