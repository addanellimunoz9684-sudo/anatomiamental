import React from 'react'
import PostCard from '../components/PostCard'
import { usePosts } from '../hooks/usePosts'

export default function Home() {
  const { posts } = usePosts()

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Anatomia Mental</h1>
          <p className="hero-subtitle">
            Psicología, salud mental y bienestar emocional
          </p>
          <p className="hero-description">
            Encuentra aquí apoyo y recursos para mejorar tu salud psicológica,
            emocional y física en nuestro blog especializado.
          </p>
        </div>
      </section>

      <section className="categories-section">
        <h2>Explora</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h3>Autoayuda y Psicología</h3>
            <p>Tu guía personal</p>
          </div>
          <div className="category-card">
            <h3>Psicología Laboral</h3>
            <p>Para organizaciones y usuarios</p>
          </div>
          <div className="category-card">
            <h3>Neuropsicología</h3>
            <p>Entendiendo el cerebro</p>
          </div>
        </div>
      </section>

      <section className="latest-posts">
        <h2>Últimas Publicaciones</h2>
        <div className="posts-grid">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </section>

      <section className="services-section">
        <h2>Salud Mental</h2>
        <p className="services-intro">Descubre nuestros servicios de salud mental y encuentra la ayuda que necesitas.</p>
        <div className="services-grid">
          <div className="service-card">
            <h4>Terapias individuales</h4>
            <p>Ofrecemos terapias individuales personalizadas para abordar tus necesidades específicas de salud mental.</p>
          </div>
          <div className="service-card">
            <h4>Asesoramiento psicológico especializado</h4>
            <p>Nuestros expertos en psicología brindan asesoramiento especializado para mejorar tu bienestar emocional.</p>
          </div>
          <div className="service-card">
            <h4>Talleres y charlas educativas</h4>
            <p>Participa en nuestros talleres y charlas educativas para aprender más sobre salud mental.</p>
          </div>
        </div>
      </section>
    </div>
  )
}