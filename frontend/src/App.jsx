

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "../src/components/navbar";
// import PhotoSlider from "./components/slider";

// function App() {
//   const [showWelcome, setShowWelcome] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowWelcome(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       {/* Animate welcome message */}
//       <AnimatePresence>
//         {showWelcome && (
//           <motion.div
//             initial={{ opacity: 1, y: 0 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             transition={{ duration: 0.8 }}
//             className="text-center py-2"
//           >
//             <h1 className="text-4xl font-bold text-gray-800">
//               Welcome to CP PLUS
//             </h1>
//             <p className="mt-4 text-gray-600">Your trusted solutions provider</p>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Smooth transition for PhotoSlider */}
//       <motion.div
//         initial={{ y: 50, opacity: 0 }} // Start from below
//         animate={{ y: 0, opacity: 1 }} // Move up smoothly
//         transition={{ duration: 1.2, ease: "easeOut", delay: showWelcome ? 0.8 : 0 }} // Delay to wait for welcome message fade-out
//       >
//         <PhotoSlider />
//       </motion.div>
//     </>
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../src/components/navbar";
import PhotoSlider from "./components/slider";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      {/* Welcome Message with Animation */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="text-center py-2"
          >
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome to CP PLUS
            </h1>
            <p className="mt-4 text-gray-600">Your trusted solutions provider</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PhotoSlider moves up smoothly AFTER welcome message disappears */}
      <motion.div
        initial={{ y: 0 }} // Normal position
        animate={{ y: showWelcome ? 0 : -15 }} // Move up AFTER welcome disappears
        transition={{ duration: 1, ease: "easeInOut" }} // Smooth movement
      >
        <PhotoSlider />
      </motion.div>
    </>
  );
}

export default App;
