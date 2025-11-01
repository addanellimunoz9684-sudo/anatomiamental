import '../styles/components/missionVision.css'

export default function MissionVision() {
  return (
    <section className="mission-vision-section">
      <div className="container">
        <div className="mission-container">
          <h2>Nuestra Misión</h2>
          <p>
            Proporcionar un espacio digital accesible y confiable dedicado a la promoción
            y cuidado de la salud mental, ofreciendo recursos, información y apoyo
            profesional que permita a las personas comprender, gestionar y mejorar
            su bienestar emocional y psicológico.
          </p>
        </div>

        <div className="vision-container">
          <h2>Nuestra Visión</h2>
          <ul>
            <li>Ser la plataforma líder en el ámbito de la salud mental en línea</li>
            <li>Excelencia en contenido psicológico y recursos de autoayuda</li>
            <li>Compromiso con la desestigmatización de la salud mental</li>
            <li>Accesibilidad y alcance a todas las personas que buscan apoyo</li>
            <li>Innovación constante en la prestación de servicios de salud mental digital</li>
            <li>Construcción de una comunidad de apoyo empática y comprensiva</li>
          </ul>
        </div>
      </div>
    </section>
  )
}