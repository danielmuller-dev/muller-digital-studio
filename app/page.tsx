export default function Home() {
  return (
  <main>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold text-blue-900">
          Müller Digital Studio
        </h1>

        <div className="space-x-6 hidden md:flex items-center">
          <a href="#servicos" className="hover:text-blue-900">Serviços</a>
          <a href="#sobre" className="hover:text-blue-900">Sobre</a>

          <a 
            href="https://wa.me/5575992367033" 
            target="_blank"
            className="bg-blue-900 text-white px-4 py-2 rounded-full hover:scale-105 transition"
          >
            Orçamento
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white text-center px-6 pt-24">
        <h1 className="text-5xl md:text-6x1 font-bold leading-tight">
          Soluções Digitais<br />
          <span className="text-blue-300">Estratégicas e Profissionais</span>
        </h1>

        <p className="mt-8 text-lg max-w-2xl text-gray-200">
          Criamos sites, identidades visuais e aplicativos modernos para empresas
          que querem crescer, se posicionar e vender mais no digital.
        </p>

        <a 
          href="https://wa.me/5575992367033" 
          target="_blank"
          className="mt-10 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Solicitar Orçamento
        </a>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 px-6 bg-white text-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-900">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Design</h3>
            <p>Logomarcas, identidade visual e social media.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Sites</h3>
            <p>Sites modernos, rápidos e responsivos.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Aplicativos</h3>
            <p>Apps Android e iOS sob medida.</p>
          </div>

        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 px-6 bg-blue-900 text-white text-center">
        <h2 className="text-3x1 font-bold mb-10">
          Por que escolher a Müller Digital Studio?
        </h2>

        <div className="grid md:drig-cols-4 gap-8 max-w-6x1 mx-auto">

          <div>
            <h3 className="font-semibold text-lg mb-2">Atendimento Personalizado</h3>
            <p className="text-gray-200">Sites rápidos, responsivos e preparados para crescer.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Design Profissional</h3>
            <p className="text-gray-200">Visual moderno que transmite confiança e autoridade.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Foco em Resultado</h3>
            <p className="text-gray-200">Nosso objetivo é gerar mais posicionamento e vendas para você.</p>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">
          Sobre Nós
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          A Müller Digital Studio é uma agência focada em criar soluções digitais modernas,
          profissionais e estratégicas para empresas que desejam crescer no ambiente online.
        </p>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3x1 font-bold text-blue-900 mb-6">
          Pronto para elevar sua presença digital?
        </h2>

      <p className="max-w-2x1 mx-auto mb-8 text-lg text-gray-700">
          Entre em contato agora e solicite um orçamento personalizado para o seu projeto.
        </p>

        <a
          href="https://wa.me/5575992367033"
          target="_blank"
          className="bg-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Falar no Whatsapp
        </a>
      </section>

    </main>
  )
}