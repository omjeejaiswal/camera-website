import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../src/components/navbar";
import PhotoSlider from "./components/slider";
import WeOffer from "./components/weoffer";
import StayUpdated from "./components/stayupdated";

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

      < WeOffer />
      <StayUpdated />
    </>
    
  );
}

export default App;
