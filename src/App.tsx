import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
