// declarations.d.ts
declare module 'vanta/dist/vanta.fog.min' {
    const VantaFog: any;
    export default VantaFog;
  }

  declare namespace JSX {
    interface IntrinsicElements {
      'dotlottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }