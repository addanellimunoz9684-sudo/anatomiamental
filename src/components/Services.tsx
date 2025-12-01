import { Link } from 'react-router-dom'
import '../styles/components/services.css'
import AnimateOnScroll from './AnimateOnScroll'

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Terapia Individual",
      description: "Espacio personal y confidencial para abordar dificultades emocionales, problemas de ansiedad, depresión, y desarrollo personal.",
      features: [
        "Sesiones personalizadas",
        "Enfoque integral",
        "Herramientas prácticas",
        "Seguimiento continuo"
      ],
      icon: "🧠"
    },
    {
      id: 2,
      title: "Terapia de Pareja",
      description: "Ayuda profesional para mejorar la comunicación, resolver conflictos y fortalecer la relación en un ambiente seguro.",
      features: [
        "Mejora de comunicación",
        "Resolución de conflictos",
        "Fortalecimiento de vínculos",
        "Estrategias de convivencia"
      ],
      icon: "💑"
    },
    {
      id: 3,
      title: "Asesoría Psicológica",
      description: "Orientación profesional para tomar decisiones importantes, manejar crisis y desarrollar estrategias de afrontamiento.",
      features: [
        "Consultas específicas",
        "Orientación profesional",
        "Manejo de crisis",
        "Desarrollo de estrategias"
      ],
      icon: "💡"
    },
    {
      id: 4,
      title: "Talleres y Grupos",
      description: "Espacios de aprendizaje y crecimiento en grupo, abordando temas específicos de salud mental y desarrollo personal.",
      features: [
        "Grupos reducidos",
        "Temas especializados",
        "Material didáctico",
        "Ejercicios prácticos"
      ],
      icon: "👥"
    }
  ]

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header" style={{ backgroundImage: `url('/src/assets/Servicios 2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px', height: '300px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title" style={{ color: 'white' }}>Nuestros Servicios</h2>
          </div>
        </div>
        <p className="section-description">
          Ofrecemos una variedad de servicios psicológicos adaptados a tus necesidades,
          con un enfoque profesional y personalizado.
        </p>

        <div className="services-grid">
          {services.map((service, idx) => (
            <AnimateOnScroll key={service.id} delay={idx * 80} className="service-card-wrap">
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link to={
                  service.id === 1 ? '/servicios/terapia-individual' :
                  service.id === 2 ? '/servicios/terapia-pareja' :
                  service.id === 3 ? '/servicios/asesoria' :
                  '/servicios/talleres'
                } className="contact-button">
                  Más información
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="contact-info">
          <h3>¿Necesitas más información?</h3>
          <p>
            Contáctanos para agendar una consulta o resolver tus dudas.
            Estamos aquí para ayudarte en tu camino hacia el bienestar emocional.
          </p>
          <div className="contact-methods">
            <a href="tel:+1234567890" className="contact-link">
              📞 Llamar ahora
            </a>
            <a href="mailto:contacto@anatomiamental.com" className="contact-link">
              ✉️ Enviar correo
            </a>
            <a href="/contacto" className="contact-link">
              💬 Chat en línea
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}