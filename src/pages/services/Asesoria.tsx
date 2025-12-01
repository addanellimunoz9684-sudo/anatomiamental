import asesoriaImg from '../../assets/asesoramiento 2.png'

export default function Asesoria() {
  return (
    <article className="service-page container">
      <img src={asesoriaImg} alt="Asesoramiento Psicológico" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '2rem' }} />
      <h1>Asesoría Psicológica</h1>
      <p>Orientación profesional para tomar decisiones, manejar crisis y desarrollar estrategias de afrontamiento. Sesiones breves y enfocadas a objetivos concretos.</p>
      <h3>Modalidades</h3>
      <ul>
        <li>Consultas puntuales</li>
        <li>Orientación en crisis</li>
        <li>Planes de acción concretos</li>
      </ul>
    </article>
  )
}
