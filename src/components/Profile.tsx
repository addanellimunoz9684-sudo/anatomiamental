import React from 'react'
import '../styles/components/profile.css'

export default function Profile() {
  return (
    <section className="profile-section">
      <div className="container">
        <div className="profile-content">
          <div className="profile-image">
            <img 
              src="/src/assets/profile-image.jpg" 
              alt="Psicóloga Addanelli Sascil" 
            />
            <div className="credentials">
              <h3>Addanelli Sascil</h3>
              <p>Psicóloga Clínica</p>
              <div className="certifications">
                <span>Cédula Profesional: XXXXX</span>
              </div>
            </div>
          </div>
          
          <div className="profile-info">
            <h2>Presentación Personal y Profesional</h2>
            
            <div className="bio">
              <p>
                Soy Addanelli Sascil, psicóloga clínica con especialización en terapia cognitivo-conductual 
                y un profundo compromiso con la salud mental. Mi enfoque se centra en proporcionar un espacio 
                seguro y de confianza donde cada persona pueda explorar y desarrollar su potencial emocional.
              </p>
            </div>

            <div className="specialties">
              <h3>Áreas de Especialización</h3>
              <ul>
                <li>Terapia Individual y de Pareja</li>
                <li>Manejo de Ansiedad y Depresión</li>
                <li>Desarrollo Personal</li>
                <li>Psicología Organizacional</li>
              </ul>
            </div>

            <div className="education">
              <h3>Formación Académica</h3>
              <ul>
                <li>Licenciatura en Psicología - Universidad de Guadalajara</li>
                <li>Especialización en Terapia Cognitivo-Conductual</li>
                <li>Diplomado en Neuropsicología</li>
              </ul>
            </div>

            <div className="approach">
              <h3>Mi Enfoque</h3>
              <p>
                Creo en un abordaje integral que combina técnicas terapéuticas basadas en evidencia 
                con un enfoque humanista y empático. Mi objetivo es acompañar a cada persona en su 
                proceso de crecimiento y sanación, proporcionando herramientas prácticas para el 
                manejo emocional y el desarrollo de habilidades de afrontamiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}