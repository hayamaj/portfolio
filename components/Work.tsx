"use client";

const Work = () => {
  return (
    <div className="flex items-center justify-center">
  <div className="mb-16 flex flex-col items-left justify-center w-screen max-w-2xl mx-12" id="work">
  <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl">Work</h1>
          <a href="/work" className="font-medium cursor-pointer ml-auto hover:text-gray-700">See all work</a>
        </div>
        <div className="my-4">
        <h1 className="font-semibold">Yuva AI</h1>
        <h1 className="font-light opacity-50">Computer Vision AI Data Engineer</h1>
        <h1 className="font-light opacity-50">May 2024-August 2024</h1>
        </div>

        <div className="my-4">
                <h1 className="font-semibold">Dakota Systems</h1>
                <h1 className="font-light opacity-50">AI Integration and Solutions Engineer</h1>
                <h1 className="font-light opacity-50">May 2023-Nov 2023</h1>
            </div>


        </div>




    </div>

     );
    };

    
export default Work;