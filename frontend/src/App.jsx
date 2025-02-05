// import Navbar from '../src/components/navbar' // Import the Navbar component
// import PhotoSlider from './components/slider'

// function App() {
//   return (
//     <>
//       <Navbar /> {/* Add Navbar here */}
      
//       <div className="text-center py-2">
//         <h1 className="text-4xl font-bold text-gray-800">Welcome to CP PLUS</h1>
//         <p className="mt-4 text-gray-600">Your trusted solutions provider</p>
//         <PhotoSlider />
//       </div>
//     </>
//   )
// }

// export default App


import React, { useState, useEffect } from "react";
import Navbar from "../src/components/navbar"; // Import the Navbar component
import PhotoSlider from "./components/slider"; // Import the PhotoSlider component

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false); // Hide the welcome message after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      <Navbar /> {/* Add Navbar here */}

      <div className={`text-center py-2 fade-out ${!showWelcome ? "hidden" : ""}`}>
        <h1 className="text-4xl font-bold text-gray-800">Welcome to CP PLUS</h1>
        <p className="mt-4 text-gray-600">Your trusted solutions provider</p>
      </div>
      <PhotoSlider />
    </>
  );
}

export default App;
