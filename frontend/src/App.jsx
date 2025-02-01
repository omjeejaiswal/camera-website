import Navbar from '../src/components/navbar' // Import the Navbar component

function App() {
  return (
    <>
      <Navbar /> {/* Add Navbar here */}
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to CP PLUS</h1>
        <p className="mt-4 text-gray-600">Your trusted solutions provider</p>
      </div>
    </>
  )
}

export default App
