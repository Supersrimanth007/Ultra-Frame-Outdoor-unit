const WORDS = [
    { text: "LIGHTS", accent: false },
    { text: "CAMERA", accent: true },
    { text: "CRANES", accent: false },
    { text: "SCREENS", accent: false },
    { text: "ATMOSPHERE", accent: true },
    { text: "MOTION", accent: false },
  ];
  
  export default function Marquee() {
    const loop = [...WORDS, ...WORDS];
    return (
      <div className="marquee" data-testid="marquee-band">
        <div className="marquee-track">
          {loop.map((w, i) => (
            <span key={i}>
              {w.accent ? <span className="fill">{w.text}</span> : w.text}
              <span className="star">✦</span>
            </span>
          ))}
        </div>
      </div>
    );
  }