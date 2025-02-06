import React from 'react'
    import { Link } from 'react-router-dom'
    import { FaShoppingBag } from 'react-icons/fa'

    export default function Navbar() {
      return (
        <nav className="bg-primary p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <FaShoppingBag className="mr-2" />
              Sabaya
            </Link>
            <div className="space-x-4">
              <Link to="/" className="hover:text-secondary">Home</Link>
            </div>
          </div>
        </nav>
      )
    }
