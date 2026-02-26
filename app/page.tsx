import Image from "next/image"
export default function Home() {
  return (
    <main>
      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5575992367033"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg font-semibold hover:scale-105 transition"
      >
        {/* Ícone WhatsApp SVG*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.887.76 5.593 2.083 7.936L0 32l7.87-2.057A15.94 15.94 0 0016 32c8.837 0 16-7.164 16-16.004C32 7.56 24.837.396 16 .396zm0 29.13c-2.567 0-5.08-.676-7.28-1.957l-.52-.308-4.67 1.22 1.247-4.55-.338-.56A13.92 13.92 0 012.08 16.396C2.08 8.962 8.566 2.476 16 2.476c7.434 0 13.92 6.486 13.92 13.92 0 7.434-6.486 13.92-13.92 13.92zm7.654-10.59c-.42-.21-2.486-1.228-2.87-1.367-.384-.14-.664-.21-.944.21-.28.42-1.084 1.367-1.33 1.65-.245.28-.49.315-.91.105-.42-.21-1.773-.653-3.377-2.084-1.248-1.113-2.09-2.487-2.336-2.907-.245-.42-.026-.646.184-.856.19-.19.42-.49.63-.735.21-.245.28-.42.42-.7.14-.28.07-.525-.035-.735-.105-.21-.944-2.275-1.293-3.115-.34-.816-.685-.705-.944-.718l-.804-.014c-.28 0-.735.105-1.12.525-.385.42-1.47 1.435-1.47 3.5s1.505 4.06 1.715 4.34c.21.28 2.965 4.528 7.188 6.35 1.005.434 1.79.693 2.4.887 1.008.32 1.925.275 2.65.167.808-.12 2.486-1.015 2.836-1.996.35-.98.35-1.82.245-1.995-.105-.175-.385-.28-.805-.49z" />
        </svg>
        Falar no WhatsApp
      </a>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-40">
        <Image
        src="/logo-muller.svg"
        alt="Müller Digital Studio"
        width={260}
        height={60}
        className="mb-8"
        priority
        />

        <div className="space-x-6 hidden md:flex items-center">
          <a href="#servicos" className="hover:text-blue-900">
            Serviços
          </a>
          <a href="#sobre" className="hover:text-blue-900">
            Sobre
          </a>

          <a
            href="https://wa.me/5575992367033"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-900 text-white px-4 py-2 rounded-full hover:scale-105 transition"
          >
            Orçamento
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white text-center px-6 pt-24">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Soluções Digitais <br />
          <span className="text-blue-300">Estratégicas e Profissionais</span>
        </h1>

        <p className="mt-8 text-lg max-w-2xl text-gray-200">
          Criamos sites, identidades visuais e aplicativos modernos para empresas que querem
          crescer, se posicionar e vender mais no digital.
        </p>

        <a
          href="https://wa.me/5575992367033"
          target="_blank"
          rel="noreferrer"
          className="mt-10 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Solicitar Orçamento
        </a>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 px-6 bg-white text-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-900">Nossos Serviços</h2>

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

      {/* Como Funciona */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12 text-blue-900">
          Como Funciona
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-900 mb-4">1</div>
            <h3 className="font-semibold mb-2 text-blue-700">Contato Inicial</h3>
            <p className="text-gray-600">
              Você entra em contato pelo Whatsapp e nos conta sobre o seu projeto.
            </p>
          </div>

          <div className="p-6">
          <div className="text-4xl font-bold text-blue-900 mb-4">2</div>
          <h3 className="font-semibold mb-2 text-blue-700">Planejamento</h3>
          <p className="text-gray-600">
            Analisamos suas necessidades e definimos a melhor solução digital.
          </p>
          </div>

          <div className="p-6">
            <div className="text-4xl font-bold text-blue-900 mb-4">3</div>
            <h3 className="font-semibold mb-2 text-blue-700">Desenvolvimento</h3>
            <p className="text-gray-600">
              Criamos seu projeto com design profissional e tecnologia moderna.
            </p>
          </div>

          <div className="p-6">
            <div className="text-4xl font-bold text-blue-900 mb-4">4</div>
            <h3 className="font-semibold mb-2 text-blue-700">Entrega & Suporte</h3>
            <p className="text-gray-600">
              Entregamos pronto para uso e oferecemos suporte estratégico.
            </p>
          </div>

        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 px-6 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Por que escolher a Müller Digital Studio?</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-semibold text-lg mb-2">Atendimento Personalizado</h3>
            <p className="text-gray-200">
              Cada projeto é pensado de forma estratégica para o seu negócio.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Design Profissional</h3>
            <p className="text-gray-200">
              Visual moderno que transmite confiança e autoridade.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Tecnologia Atual</h3>
            <p className="text-gray-200">
              Sites rápidos, responsivos e preparados para crescer.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Foco em Resultado</h3>
            <p className="text-gray-200">
              Nosso objetivo é gerar mais posicionamento e vendas para você.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 px-6 bg-gray-100 text-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Sobre Nós</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          A Müller Digital Studio é uma agência focada em criar soluções digitais modernas,
          profissionais e estratégicas para empresas que desejam crescer no ambiente online.
        </p>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-white text-gray-900 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Pronto para elevar sua presença digital?
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
          Entre em contato agora e solicite um orçamento personalizado para o seu projeto.
        </p>

        <a
          href="https://wa.me/5575992367033"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Falar no WhatsApp
        </a>
      </section>
    </main>
  )
}