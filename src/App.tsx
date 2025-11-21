import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import TerapiaIndividual from './pages/services/TerapiaIndividual'
import TerapiaPareja from './pages/services/TerapiaPareja'
import Asesoria from './pages/services/Asesoria'
import Talleres from './pages/services/Talleres'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/servicios/terapia-individual" element={<TerapiaIndividual />} />
          <Route path="/servicios/terapia-pareja" element={<TerapiaPareja />} />
          <Route path="/servicios/asesoria" element={<Asesoria />} />
          <Route path="/servicios/talleres" element={<Talleres />} />
          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
