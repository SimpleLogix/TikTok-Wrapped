// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { Stats } from "../utils/Stats";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import PageIntro from "../pages/PageIntro";
// import "../App.css";
// import PageOne from "../pages/PageOne";

// gsap.registerPlugin(ScrollTrigger);

// type StatsPageProps = {
//   data: Stats;
//   clearDataCallback: () => void;
// };

// const StatsPage: React.FC<StatsPageProps> = ({ data, clearDataCallback }) => {
//   const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
//   const containerRef = useRef(null);
//   const sectionRefs = useRef<HTMLDivElement[]>([]);
//   sectionRefs.current = [];
//   const animateWrapped = () => {
//     gsap.to(containerRef.current, {
//       y: "100%",
//       duration: 0.9,
//       onComplete: () => {
//         //TODO- Replace with another FC or do something else
//       },
//     });
//   };
//   const addToRefs = useCallback((el: HTMLDivElement) => {
//     if (el && !sectionRefs.current.includes(el)) {
//       sectionRefs.current.push(el);
//     }
//   }, []);

//   // attach a scroll trigger to each page
//   useEffect(() => {
//     sectionRefs.current.forEach((section, index) => {
//       gsap.fromTo(
//         section,
//         { autoAlpha: 0 }, // Initial state of the animation
//         {
//           autoAlpha: 1, // Final state of the animation
//           ease: "none",
//           scrollTrigger: {
//             id: `section-${index + 1}`,
//             trigger: section,
//             start: "top top", // When the top of the trigger hits the top of the viewport
//             end: "bottom bottom", // When the bottom of the trigger hits the bottom of the viewport
//             scrub: true,
//           },
//         }
//       );
//     });
//     ScrollTrigger.refresh();
//   }, []);
//   return (
//     <div className="scrollContainer">
//       <div className="panel" ref={addToRefs}>
//         <PageIntro />
//       </div>
//       <div className="panel" ref={addToRefs}>
//         <PageOne />
//       </div>

//       {/* other pages */}
//     </div>
//     // <div id="stats-container" className="center-flex" ref={containerRef}>
//     //   <div className="stats-border">
//     //     <div className="stats-items">
//     //       <div className="stats-title">User</div>
//     //       <div id="user" className="stat-item">
//     //         {data.user}
//     //       </div>
//     //     </div>

//     //     <div className="stats-items">
//     //       <div className="stats-title">Date Joined</div>
//     //       <div id="join_date" className="stat-item">
//     //         {data.join_date}
//     //       </div>
//     //     </div>

//     //     <div className="stats-items">
//     //       <div className="stats-title">Videos Watched</div>
//     //       <div id="total_videos" className="stat-item">
//     //         {data.total_videos}
//     //       </div>
//     //     </div>

//     //     <div className="stats-items">
//     //       <div className="stats-title">Hours Scrolled</div>
//     //       <div id="hours_scrolled" className="stat-item">
//     //         {data.hours_scrolled}
//     //       </div>
//     //     </div>

//     //     <div className="stats-items">
//     //       <div className="stats-title">Times Opened TikTok</div>
//     //       <div id="times_opened_app" className="stat-item">
//     //         {data.times_opened_app}
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div id="wrapped-button" onClick={animateWrapped}>
//     //     View TikTok Wrapped
//     //   </div>
//     //   <button className="clear-data-button" onClick={clearDataCallback}>
//     //     Clear Data
//     //   </button>
//     // </div>
//   );
// };

// export default StatsPage;

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Stats } from "../utils/Stats";

gsap.registerPlugin(ScrollTrigger);

type StatsPageProps = {
  data: Stats;
  clearDataCallback: () => void;
};

const StatsPage: React.FC<StatsPageProps> = ({ data, clearDataCallback }) => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    gsap.to(sectionRefs.current, {
      yPercent: -100 * (sectionRefs.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scrollContainer",
        pin: true,
        scrub: 1,
        snap: 1 / (sectionRefs.current.length - 1),
        end: "+=" + document.body.offsetHeight,
      },
    });
  }, []);

  return (
    <div className="scrollContainer">
      <div className="panel" ref={addToRefs}>
        Page 1
      </div>
      <div className="panel" ref={addToRefs}>
        Page 2
      </div>
      <div className="panel" ref={addToRefs}>
        Page 3
      </div>
      {/* other pages */}
    </div>
  );
};

export default StatsPage;
