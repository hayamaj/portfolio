import React from 'react';

const VideoComponent = () => {
  const video = {
    id: 3,
    title: "Geurnica Brought to Life",
    src: "https://res.cloudinary.com/dqqim3gc1/video/upload/v1707341834/image-gallery/MG001.mp4",
    alt: "video"
  };

  return (
    <section id="s-work" className="bg-[#FBF6F4] container">
      <div className="flex justify-center items-center max-w-2xl w-screen">
        <h1 className="font-semibold text-xl justify-center mb-8">Art</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="block">
          <div className="title mb-4">
            <h3 className="text-md font-light bg-[#FBF6F4] text-center">
              <span>{video.title}</span>
            </h3>
          </div>
          <div className="thumbnail relative">
            <video
              src={video.src}
              className="w-full h-full object-cover"
              controls
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;