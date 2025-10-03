export default function ServiciosPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios terapéuticos diseñados para apoyarte en tu camino hacia el bienestar emocional
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-teal-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para comenzar tu proceso terapéutico?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Da el primer paso hacia tu bienestar emocional. Agenda una consulta y descubre cómo podemos ayudarte.
            </p>
            <a
              href="/contacto"
              className="bg-white text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition-colors inline-block"
            >
              Agenda tu consulta
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "Terapia Individual",
    description: "Un espacio seguro y confidencial para explorar tus pensamientos, emociones y desafíos personales con el apoyo de un profesional especializado.",
    icon: <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>,
    features: [
      "Evaluación personalizada de necesidades",
      "Desarrollo de estrategias de afrontamiento",
      "Manejo del estrés y la ansiedad",
      "Trabajo en autoestima y desarrollo personal",
      "Seguimiento continuo de progreso"
    ]
  },
  {
    title: "Terapia de Pareja",
    description: "Facilitamos el diálogo y la comprensión mutua para fortalecer la relación y superar los desafíos juntos.",
    icon: <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
    features: [
      "Mejora de la comunicación",
      "Resolución de conflictos",
      "Reconstrucción de la confianza",
      "Fortalecimiento del vínculo emocional",
      "Desarrollo de habilidades de relación"
    ]
  },
  {
    title: "Terapia Familiar",
    description: "Trabajamos con toda la familia para mejorar la dinámica, la comunicación y resolver conflictos en un ambiente seguro.",
    icon: <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    features: [
      "Evaluación del sistema familiar",
      "Mejora de la comunicación familiar",
      "Establecimiento de límites saludables",
      "Resolución de conflictos intergeneracionales",
      "Fortalecimiento de vínculos familiares"
    ]
  },
  {
    title: "Terapia para Adolescentes",
    description: "Apoyo especializado para jóvenes que enfrentan los desafíos únicos de la adolescencia en un ambiente comprensivo.",
    icon: <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>,
    features: [
      "Manejo de emociones y estrés",
      "Desarrollo de habilidades sociales",
      "Apoyo en problemas académicos",
      "Orientación en relaciones interpersonales",
      "Construcción de autoestima"
    ]
  }
];