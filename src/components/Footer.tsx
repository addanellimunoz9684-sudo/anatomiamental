const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: contacto@anatomiamental.com</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Dirección: Tu dirección aquí</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/servicios" className="text-gray-600 hover:text-teal-600">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/sobre-nosotros" className="text-gray-600 hover:text-teal-600">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 hover:text-teal-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-gray-600 hover:text-teal-600">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Anatomía Mental. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;