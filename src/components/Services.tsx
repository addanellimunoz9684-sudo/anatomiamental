import '../styles/components/services.css'

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
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-description">
          Ofrecemos una variedad de servicios psicológicos adaptados a tus necesidades,
          con un enfoque profesional y personalizado.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="contact-button">
                Solicitar Información
              </button>
            </div>
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