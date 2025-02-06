import React from 'react'
    import { Routes, Route } from 'react-router-dom'
    import Home from './pages/Home'
    import Navbar from './components/Navbar'
    import Footer from './components/Footer'

    function App() {
      return (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )
    }

    export default App
