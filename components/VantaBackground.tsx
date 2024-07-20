// components/VantaBackground.tsx

"use client";
import { useEffect, useRef, useState } from 'react';


const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let vantaEffect: any;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300; // Adjust this value based on when you want the fade effect to complete
      const newOpacity = Math.max(0, 2 - scrollTop / maxScroll);
      setOpacity(newOpacity);
      console.log('Scroll Position:', scrollTop);
      console.log('New Opacity:', newOpacity);
    };

    const initializeVanta = async () => {
      const THREE = await import('three');
      const FOG = (await import('vanta/dist/vanta.fog.min')).default;

      vantaEffect = FOG({
        THREE: THREE,
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xffc300,
        midtoneColor: 0xff1f00,
        lowlightColor: 0x2d00ff,
        baseColor: 0xffebeb,
        blurFactor: 0.6,
        zoom: 1.0,
        speed: 1.0
      });
    };

    initializeVanta();
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);

  return <div ref={vantaRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1,
  transition: 'opacity 0.5s',
  opacity }} />;

};

export default VantaBackground;

