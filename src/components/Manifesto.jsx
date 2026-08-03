import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Added a couple of extra chapters so the horizontal scroll feels natural and fills the track
const CHAPTERS = [
  {
    n: "01",
    t: "15+ Years of Trust",
    d: "A legacy built on reliability. For over a decade and a half, we've supported everyone from indie creators to blockbuster sets. Our gear and our word are tested, proven, and guaranteed to perform.",
    bg: "" // Ready for background images later; falls back to CSS in the meantime
  },
  {
    n: "02",
    t: "Absolute Clarity",
    d: "No hidden clauses, no technical guesswork. Our approach is deeply cooperative. We work seamlessly alongside your crew, ensuring your DPs and gaffers have exactly what they need, exactly when they need it.",
    bg: ""
  },
  {
    n: "03",
    t: "The Joy of the Craft",
    d: "Filmmaking is intense, but it should never lose its magic. We bring positive energy, proactive problem-solving, and a genuine love for cinema to every single location.",
    bg: ""
  },
  {
    n: "04",
    t: "Cinema Grade",
    d: "Only the highest caliber glass and sensors. Maintained to pristine factory standards.",
    bg: ""
  },
  {
    n: "05",
    t: "On-Call Support",
    d: "Our engineers are available 24/7. When you are rolling, we are ready.",
    bg: ""
  }
]; 

// Reusable text variant for the header elements
const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Manifesto() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  //  Set the playback speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; 
    }
  }, []);

  // Trigger intro animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Native auto-scroll logic that pauses on hover/touch
  useEffect(() => {
    let animationFrameId;
    const scrollTrack = () => {
      if (trackRef.current && !isHovered) {
        trackRef.current.scrollLeft += 0.2; // Speed of auto-scroll
        
        // Loop back to start if it hits the end
        if (trackRef.current.scrollLeft >= trackRef.current.scrollWidth - trackRef.current.clientWidth - 1) {
          trackRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollTrack);
    };

    animationFrameId = requestAnimationFrame(scrollTrack);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section className="manifesto" id="manifesto" data-testid="manifesto-section" ref={sectionRef}>
      
      <motion.div 
        ref={videoRef}
        className="manifesto-video-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      >
        <video
          src="/bg_video.mp4" 
          autoPlay
          loop
          muted
          playsInline 
          className="manifesto-video"
        />
      </motion.div>
      
      <div className="manifesto-head">
        <div>
          <motion.div 
            className="eyebrow" 
            style={{ marginBottom: 18, willChange: "transform, opacity" }}
            variants={textVariant}
            initial="hidden"
            animate={controls}
          >
            § About us
          </motion.div>
          <motion.h2
            variants={textVariant}
            initial="hidden"
            animate={controls}
            style={{ willChange: "transform, opacity" }}
          >
            Gear alone <em>doesn't</em>{" "}
            make a scene. <br />
            Craft does.
          </motion.h2>
        </div>
        <motion.p
          variants={textVariant}
          initial="hidden"
          animate={controls}
          style={{ 
            color: "var(--ash)", 
            fontSize: 16, 
            lineHeight: 1.7, 
            maxWidth: 520, 
            marginLeft: "auto", 
            willChange: "transform, opacity" 
          }}
        >
          We are technicians first, rental agents second. Every fixture we
          send out is prepped, load-tested and paired with an on-call
          engineer. When your director says <em style={{ color: "var(--white)" }}>“roll”</em>,
          the tools are already invisible.
        </motion.p>
      </div>

      {/* 3. The auto-scrolling horizontal flex track using your original class names */}
      <motion.div 
        className="chapters" 
        data-testid="chapters-grid"
        ref={trackRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        variants={{ visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } } }}
      >
        {CHAPTERS.map((c, i) => (
          <div
            key={c.t}
            className="chapter"
            // Applies background image only if you add one to the array later
            style={c.bg ? { backgroundImage: `url(${c.bg})`, backgroundSize: 'cover' } : {}}
            data-testid={`chapter-${i + 1}`}
          >
            <span className="num">— {c.n}</span>
            <h3>{c.t}.</h3>
            <p>{c.d}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}