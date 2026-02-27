import Image from "next/image"

export default function Home() {
  return (
    <main>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5575992367033"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
          <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.887.76 5.593 2.083 7.936L0 32l7.87-2.057A15.94 15.94 0 0016 32c8.837 0 16-7.164 16-16.004C32 7.56 24.837.396 16 .396z"/>
        </svg>
        Falar no WhatsApp
      </a>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-40">
        <a href="#" className="flex items-center">
          <Image
            src="/logo-muller.svg"
            alt="Müller Digital Studio"
            width={200}
            height={60}
            priority
          />
        </a>

        <div className="space-x-6 hidden md:flex items-center">
          <a href="#servicos" className="hover:text-blue-900">Serviços</a>
          <a href="#sobre" className="hover:text-blue-900">Sobre</a>
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
      <section className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white text-center px-6 pt-28">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Soluções Digitais <br />
          <span className="text-blue-300">Estratégicas e Profissionais</span>
        </h1>

        <p className="mt-8 text-lg max-w-2xl text-gray-200">
          Criamos sites, identidades visuais e aplicativos modernos para empresas
          que querem crescer, se posicionar e vender mais no digital.
        </p>

        <a
          href="https://wa.me/5575992367033"
          target="_blank"
          rel="noreferrer"
          className="mt-10 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Solicitar Orçamento
        </a>

        {/* Barra de confiança */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-200">
          <span>✔ Atendimento rápido</span>
          <span>✔ Projetos responsivos</span>
          <span>✔ Entrega com suporte</span>
        </div>
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
        <h2 className="text-3xl font-bold mb-12 text-blue-900">Como Funciona</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-semibold mb-2">1. Contato</h3>
            <p className="text-gray-600">Você fala conosco pelo WhatsApp.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">2. Planejamento</h3>
            <p className="text-gray-600">Definimos a melhor solução para seu negócio.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">3. Desenvolvimento</h3>
            <p className="text-gray-600">Criamos seu projeto com padrão profissional.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">4. Entrega</h3>
            <p className="text-gray-600">Entrega com suporte e orientação.</p>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-900">
          O que dizem sobre nosso atendimento
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border rounded-xl shadow-sm text-left">
            <p>“Atendimento claro e rápido. Processo muito organizado.”</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm text-left">
            <p>“Projeto profissional e moderno. Recomendo.”</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm text-left">
            <p>“Suporte excelente e entrega dentro do prazo.”</p>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 px-6 bg-gray-100 text-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Sobre Nós</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          A Müller Digital Studio cria soluções digitais modernas e estratégicas
          para empresas que desejam crescer no ambiente online.
        </p>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-white text-gray-900 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Pronto para elevar sua presença digital?
        </h2>

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