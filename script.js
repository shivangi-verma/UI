import {
  animate,
  stagger,
} from "https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm";

animate(".flower", { scale: 1 }, { ease: "ease", duration: 1 });
animate(
  ".left",
  { y: [50, 0], opacity: [0, 1] },
  { ease: "ease", duration: 1 }
);
animate(
  ".right",
  { y: [50, 0], opacity: [0, 1] },
  { ease: "ease", duration: 1 }
);
// syntax
// animate(element, {cssproperty : value},{parameters of animation : value })
animate(
  ".emp-details",
  { y: [100, 0], opacity: [0, 1] },
  { ease: "ease", duration: 1 }
);
animate(
  ".emp-details1",
  { y: [200, 0], opacity: [0, 1] },
  { ease: "ease", duration: 1 }
);
// staggerer

// animate(
//   // selector
//   ".meet-person ",
//   //   css properties
//   {
//     opacity: 1,
//     y: [50, 0], 
//   },
//   //   animation params
//   {
//     // ease: "bounce",
//     duration: 1,
//     delay: stagger(0.05),
//   }
// );
// pehle acha ara tha ab kyu ni ara
// stagger bounce hoke

animate(".meet-person ", { opacity: 1, y: [50, 0] }, { delay: stagger(0.05) });
animate(".position-job ", { opacity: 1, y: [50, 0] }, { delay: stagger(0.05) });
