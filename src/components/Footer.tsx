import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <section className="footer-contact">
            <h3>Contacto para ayuda psicológica en línea</h3>
            <form className="contact-form">
              <input type="text" placeholder="Nombre completo *" required />
              <input type="email" placeholder="Correo electrónico *" required />
              <textarea placeholder="¿Cómo podemos ayudarte? *" required></textarea>
              <button type="submit" className="submit-button">Enviar mensaje</button>
            </form>
          </section>
          
          <section className="footer-info">
            <div className="footer-brand">
              <h4>Anatomía Mental</h4>
              <p>Bienestar mental, apoyo emocional, psicoterapia, terapia cognitiva, ansiedad</p>
              <p className="contact-email">Contacto: sascil.garcia@anatomiamental.com</p>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61560208131955" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
              <a href="https://www.instagram.com/anatomiamental" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              <a href="https://www.tiktok.com/@anatomiamental" target="_blank" rel="noopener noreferrer" className="social-link">TikTok</a>
            </div>
          </section>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()}. Todos los derechos reservados.</p>
          <p className="disclaimer">
            Este sitio web utiliza cookies para proporcionar la funcionalidad necesaria del sitio y mejorar su experiencia.
          </p>
        </div>
      </div>
    </footer>
  )
}