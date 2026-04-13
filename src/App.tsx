import { useEffect, useState } from 'react'

// ——————————————————————————————————
// Scroll Reveal Hook
// ——————————————————————————————————
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ——————————————————————————————————
// Nav
// ——————————————————————————————————
const navItems = [
  { href: '#diagnostico', label: 'Diagnóstico' },
  { href: '#entregas', label: 'Entregas' },
  { href: '#navigator', label: 'Research Navigator' },
  { href: '#mercado', label: 'Mercado' },
  { href: '#proposta', label: 'Proposta' },
]

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#ede4d3] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1a2744] flex items-center justify-center">
              <span className="text-white text-xs font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>II</span>
            </div>
            <span className="font-semibold text-[#1a2744] text-sm tracking-wide">IIBPR Digital</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#4a5568] hover:text-[#2d7d78] transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/5561991572149?text=Oi!%20Vi%20a%20proposta%20do%20IIBPR%20Digital.%20Quero%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#2d7d78] hover:bg-[#2a6b66] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar agora
          </a>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#1a2744] hover:bg-[#1a2744]/5 transition-colors duration-200"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#ede4d3] shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-sm text-[#4a5568] hover:text-[#2d7d78] hover:bg-[#f0f9f8] transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5561991572149?text=Oi!%20Vi%20a%20proposta%20do%20IIBPR%20Digital.%20Quero%20conversar!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 bg-[#2d7d78] hover:bg-[#2a6b66] text-white text-sm font-medium px-4 py-3 rounded-full transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar agora
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

// ——————————————————————————————————
// Hero
// ——————————————————————————————————
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#1a2744] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #2d7d78 0%, transparent 50%), radial-gradient(circle at 80% 20%, #c9a227 0%, transparent 40%)',
        }} />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
          <path d="M0 0 L500 0 L500 500 Z" fill="#2d7d78" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2d7d78]/40 bg-[#2d7d78]/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#38a89d] animate-pulse" />
            <span className="text-[#81e6d9] text-sm font-medium tracking-wide">Proposta Comercial Exclusiva</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            IIBPR Digital
            <span className="block text-[#38a89d]">Transformação Digital</span>
            <span className="block text-[#c9a227] text-3xl sm:text-4xl lg:text-5xl">do Instituto</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#a0aec0] leading-relaxed mb-10 max-w-2xl">
            Site profissional + plataforma de pesquisa acadêmica com inteligência artificial.
            Uma proposta de parceria estratégica para o futuro do IIBPR.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: '🎓', label: '420h Formação' },
              { icon: '📚', label: '8+ Cursos' },
              { icon: '🔬', label: '8 APIs Acadêmicas' },
              { icon: '📋', label: '4 Fases de Entrega' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-base">{badge.icon}</span>
                <span className="text-white text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5561991572149?text=Oi!%20Vi%20a%20proposta%20do%20IIBPR%20Digital.%20Quero%20conversar!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#2d7d78] hover:bg-[#38a89d] text-white font-semibold px-6 py-4 rounded-full transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero conversar sobre a proposta
            </a>
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-6 py-4 rounded-full transition-all duration-300 text-sm sm:text-base hover:bg-white/10 w-full sm:w-auto"
            >
              Ver diagnóstico
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}

// ——————————————————————————————————
// Diagnostico
// ——————————————————————————————————
function Diagnostico() {
  const problems = [
    {
      icon: '🔴',
      title: 'WordPress novo vazio',
      description: 'Tema instalado, zero conteúdo. O site existe mas não representa o instituto.',
      impact: 'Alta urgência',
    },
    {
      icon: '🔴',
      title: 'Research Navigator offline',
      description: 'MVP funcional desenvolvido, porém com deploy quebrado. Produto pronto que não gera valor.',
      impact: 'Alta urgência',
    },
    {
      icon: '🟡',
      title: 'Presença digital fragmentada',
      description: '3 plataformas desconectadas sem identidade unificada. Experiência confusa para o usuário.',
      impact: 'Urgência média',
    },
    {
      icon: '🟡',
      title: 'Receita não explorada',
      description: 'Concorrentes cobram $12–20/mês por ferramentas similares. Oportunidade de monetização imediata.',
      impact: 'Urgência média',
    },
  ]

  return (
    <section id="diagnostico" className="py-20 sm:py-28 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-[#2d7d78] text-sm font-semibold uppercase tracking-widest mb-3 block">Diagnóstico</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Problemas Identificados
          </h2>
          <p className="text-[#4a5568] text-lg leading-relaxed">
            Análise das oportunidades de melhoria no ecossistema digital atual do IIBPR.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-2xl p-7 border border-[#ede4d3] hover:border-[#2d7d78]/30 hover:shadow-lg transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1a2744]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2d7d78]/10 transition-colors duration-300">
                  <span className="text-2xl">{p.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-[#1a2744] text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
                  </div>
                  <p className="text-[#4a5568] text-sm leading-relaxed mb-3">{p.description}</p>
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#1a2744]/8 text-[#1a2744]">
                    {p.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ——————————————————————————————————
// Entregas
// ——————————————————————————————————
function Entregas() {
  const phases = [
    {
      number: '01',
      title: 'Migração Completa do Site',
      duration: '2–3 dias',
      color: '#2d7d78',
      items: [
        'Migração de todo conteúdo existente',
        'Configuração do WordPress otimizado',
        'SEO técnico (meta tags, sitemap, schema)',
        'Integração com domínio e SSL',
        'Velocidade e performance (Core Web Vitals)',
        'Testes em múltiplos dispositivos',
      ],
    },
    {
      number: '02',
      title: 'Customização Premium do Tema',
      duration: '3–5 dias',
      color: '#c9a227',
      items: [
        'Design alinhado à identidade institucional',
        'Header e footer personalizados',
        'Páginas internas com templates únicos',
        'Galeria de fotos e mídia otimizada',
        'Formulários e CTAs estratégicos',
        'Paleta de cores e tipografia do IIBPR',
      ],
    },
    {
      number: '03',
      title: 'Research Navigator Deploy',
      duration: '2–3 dias',
      color: '#1a2744',
      items: [
        'Correção dos bugs de deploy',
        'Configuração de ambiente de produção',
        'Integração com as 8 APIs acadêmicas',
        'Autenticação e sistema de usuários',
        'Dashboard de analytics e uso',
        'Monitoramento e alertas automáticos',
      ],
    },
    {
      number: '04',
      title: 'QA + Lançamento',
      duration: '1–2 dias',
      color: '#38a89d',
      items: [
        'Testes de qualidade completos',
        'Revisão de conteúdo final',
        'Validação de todos os fluxos',
        'Treinamento de gestão básica',
        'Documentação entregue',
        'Suporte pós-lançamento (30 dias)',
      ],
    },
  ]

  return (
    <section id="entregas" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-[#2d7d78] text-sm font-semibold uppercase tracking-widest mb-3 block">Entregas</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            4 Fases em 8–12 Dias Úteis
          </h2>
          <p className="text-[#4a5568] text-lg leading-relaxed">
            Cronograma detalhado com entregas claras, prazos definidos e responsabilidades estabelecidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="reveal rounded-2xl overflow-hidden border border-[#ede4d3] hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="px-7 py-5 flex items-center gap-4" style={{ backgroundColor: phase.color }}>
                <span className="text-4xl font-bold text-white/20" style={{ fontFamily: "'Playfair Display', serif" }}>{phase.number}</span>
                <div>
                  <h3 className="font-bold text-white text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{phase.title}</h3>
                  <span className="text-white/80 text-sm">{phase.duration}</span>
                </div>
              </div>
              <div className="p-7 bg-white">
                <ul className="space-y-3">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: phase.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#4a5568] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ——————————————————————————————————
// Research Navigator
// ——————————————————————————————————
function ResearchNavigator() {
  const features = [
    {
      icon: '🔍',
      title: 'Busca 8 APIs',
      description: 'Pesquisa simultânea em Semantic Scholar, PubMed, Crossref, DOAJ, Unpaywall, OpenAlex e mais.',
    },
    {
      icon: '🤖',
      title: 'Chat IA (Thesys)',
      description: 'Converse com artigos científicos usando IA generativa de última geração.',
    },
    {
      icon: '📊',
      title: 'Síntese Multiartigo',
      description: 'Gere resumos e comparações automáticas de múltiplos artigos relacionados.',
    },
    {
      icon: '💬',
      title: 'Perguntar ao Artigo',
      description: 'Faça perguntas específicas sobre qualquer artigo e receba respostas fundamentadas.',
    },
    {
      icon: '📁',
      title: 'Coleções',
      description: 'Organize pesquisas em coleções temáticas com anotações e tags personalizadas.',
    },
    {
      icon: '📝',
      title: 'Citação APA',
      description: 'Geração automática de referências no formato ABNT/APA com um clique.',
    },
  ]

  return (
    <section id="navigator" className="py-20 sm:py-28 bg-[#1a2744] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, #2d7d78 0%, transparent 50%)',
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-[#38a89d] text-sm font-semibold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full border border-[#38a89d]/30 bg-[#38a89d]/10">
            Produto Exclusivo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Research Navigator
            <span className="block text-[#38a89d] text-2xl sm:text-3xl mt-1">Assistente de Pesquisa com IA</span>
          </h2>
          <p className="text-[#a0aec0] text-lg leading-relaxed">
            Primeiro assistente de <strong className="text-white">pesquisa acadêmica com IA</strong> 100% em Português.
            Começa pela Psicomotricidade — o nicho do IIBPR — e expande para toda a pesquisa acadêmica brasileira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#38a89d]/40 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#2d7d78]/20 flex items-center justify-center mb-4 group-hover:bg-[#2d7d78]/40 transition-colors duration-300">
                <span className="text-2xl">{f.icon}</span>
              </div>
              <h3 className="font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{f.title}</h3>
              <p className="text-[#a0aec0] text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Value estimate */}
        <div className="reveal bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-center font-bold text-white text-xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Valor de Desenvolvimento no Mercado
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Freelancer', value: 'R$ 45k–180k', sub: '350–800h de esforço' },
              { label: 'Agência Digital', value: 'R$ 180k–650k', sub: 'Projetos similares cotados' },
              { label: 'Horas estimadas', value: '350–800h', sub: 'Backend + Frontend + IA' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold text-[#c9a227] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
                <div className="text-white/80 text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-[#a0aec0] text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ——————————————————————————————————
// Mercado
// ——————————————————————————————————
function Mercado() {
  const competitors = [
    { name: 'Elicit', price: '$12/mês', focus: 'Revisão sistemática' },
    { name: 'SciSpace', price: '$20/mês', focus: 'Leitura de papers' },
    { name: 'Scite', price: '$12/mês', focus: 'Citações inteligentes' },
    { name: 'Paperguide', price: '$12/mês', focus: 'Gestão de referências' },
    { name: 'Undermind', price: '$20/mês', focus: 'Pesquisa profunda' },
    { name: 'Connected Papers', price: '$6–20/mês', focus: 'Mapas de citação' },
  ]

  const diferenciais = [
    'Primeiro foco em Psicomotricidade — nicho sem concorrência no Brasil',
    'Português nativo — não é tradução',
    '8 APIs acadêmicas integradas (mais que a maioria)',
    'GenUI chat com interface generativa',
    'Selo de qualidade IIBPR — autoridade acadêmica',
  ]

  const pricing = [
    { plan: 'Aluno', price: 'R$ 29,90', description: 'Acesso básico às ferramentas de pesquisa', badge: '' },
    { plan: 'Profissional', price: 'R$ 49,90', description: 'Acesso completo + coleções + síntese avançada', badge: 'Recomendado' },
    { plan: 'Institucional', price: 'R$ 149,90', description: 'Multi-usuário + analytics + suporte prioritário', badge: '' },
  ]

  return (
    <section id="mercado" className="py-20 sm:py-28 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-[#2d7d78] text-sm font-semibold uppercase tracking-widest mb-3 block">Validação de Mercado</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Mercado Validado e Crescente
          </h2>
          <p className="text-[#4a5568] text-lg leading-relaxed">
            Concorrentes globais cobram entre $6 e $20/mês. Nenhum fala Português nativo nem serve o mercado acadêmico brasileiro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Competitors */}
          <div className="reveal">
            <h3 className="font-bold text-[#1a2744] text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Concorrentes Globais</h3>
            <div className="space-y-3">
              {competitors.map((c) => (
                <div key={c.name} className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#ede4d3] hover:border-[#2d7d78]/30 transition-colors duration-200">
                  <div>
                    <span className="font-semibold text-[#1a2744]">{c.name}</span>
                    <span className="text-[#4a5568] text-sm ml-2">— {c.focus}</span>
                  </div>
                  <span className="text-[#2d7d78] font-bold text-sm">{c.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diferenciais */}
          <div className="reveal" style={{ transitionDelay: '150ms' }}>
            <h3 className="font-bold text-[#1a2744] text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Nossos Diferenciais</h3>
            <div className="space-y-4 mb-8">
              {diferenciais.map((d, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#ede4d3]">
                  <div className="w-7 h-7 rounded-full bg-[#2d7d78] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#4a5568] text-sm leading-relaxed">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="reveal">
          <h3 className="text-center font-bold text-[#1a2744] text-xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Estrutura de Preços</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {pricing.map((p) => (
              <div
                key={p.plan}
                className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  p.badge ? 'border-[#2d7d78] bg-white shadow-md' : 'border-[#ede4d3] bg-white'
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#2d7d78] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      {p.badge}
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h4 className="font-bold text-[#1a2744] text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{p.plan}</h4>
                  <div className="text-3xl font-bold text-[#2d7d78] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{p.price}</div>
                  <p className="text-[#4a5568] text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ——————————————————————————————————
// Projeção Financeira
// ——————————————————————————————————
function ProjecaoFinanceira() {
  const scenarios = [
    {
      name: 'Mínimo',
      alunos: 10,
      receita: 'R$ 499',
      custos: 'R$ 120',
      lucro: 'R$ 379',
      lucroNum: 379,
    },
    {
      name: 'Conservador',
      alunos: 30,
      receita: 'R$ 1.497',
      custos: 'R$ 120',
      lucro: 'R$ 1.377',
      lucroNum: 1377,
    },
    {
      name: 'Moderado',
      alunos: 60,
      receita: 'R$ 2.994',
      custos: 'R$ 200',
      lucro: 'R$ 2.794',
      lucroNum: 2794,
    },
    {
      name: 'Escala',
      alunos: 100,
      receita: 'R$ 4.990',
      custos: 'R$ 350',
      lucro: 'R$ 4.640',
      lucroNum: 4640,
    },
  ]

  const maxLucro = Math.max(...scenarios.map((s) => s.lucroNum))

  return (
    <section id="financeiro" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-[#2d7d78] text-sm font-semibold uppercase tracking-widest mb-3 block">Projeção Financeira</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            4 Cenários de Crescimento
          </h2>
          <p className="text-[#4a5568] text-lg leading-relaxed">
            Baseado em conversão conservadora da base atual de alunos e profissionais do IIBPR.
          </p>
        </div>

        <div className="reveal overflow-x-auto">
          <table className="w-full min-w-[540px]">
            <thead>
              <tr className="bg-[#1a2744] text-white">
                <th className="text-left px-6 py-4 rounded-tl-xl font-semibold text-sm">Cenário</th>
                <th className="text-center px-6 py-4 font-semibold text-sm">Usuários</th>
                <th className="text-right px-6 py-4 font-semibold text-sm">Receita/mês</th>
                <th className="text-right px-6 py-4 font-semibold text-sm">Custos/mês</th>
                <th className="text-right px-6 py-4 rounded-tr-xl font-semibold text-sm">Lucro/mês</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((s, i) => (
                <tr key={i} className={`border-b border-[#ede4d3] ${i % 2 === 0 ? 'bg-white' : 'bg-[#faf7f2]'} hover:bg-[#f0f9f8] transition-colors duration-150`}>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#2d7d78]" style={{ opacity: 0.3 + (i + 1) * 0.17 }} />
                      <span className="font-semibold text-[#1a2744]">{s.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center text-[#4a5568]">{s.alunos} usuários</td>
                  <td className="px-6 py-5 text-right text-[#4a5568]">{s.receita}</td>
                  <td className="px-6 py-5 text-right text-[#4a5568]">{s.custos}</td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="h-2 rounded-full bg-[#2d7d78]/20 overflow-hidden w-16 hidden sm:block">
                        <div
                          className="h-full bg-[#2d7d78] rounded-full"
                          style={{ width: `${(s.lucroNum / maxLucro) * 100}%` }}
                        />
                      </div>
                      <span className="font-bold text-[#2d7d78]">{s.lucro}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-[#718096] text-sm mt-4 reveal">
          * Valores mensais em BRL. Baseado no plano Profissional (R$49,90). Custos incluem infraestrutura e APIs.
        </p>
      </div>
    </section>
  )
}

// ——————————————————————————————————
// Go-to-Market
// ——————————————————————————————————
function GoToMarket() {
  const timeline = [
    { mes: 'Mês 1–2', fase: 'Beta Gratuito', desc: 'Lançamento com alunos selecionados, coleta de feedback, ajustes de UX.', color: '#2d7d78' },
    { mes: 'Mês 2–3', fase: 'Plano Aluno', desc: 'Abertura do tier básico para toda a comunidade IIBPR. Foco em adoção.', color: '#1a2744' },
    { mes: 'Mês 3–4', fase: 'Plano Profissional', desc: 'Lançamento do tier principal com features avançadas e upsell.', color: '#c9a227' },
    { mes: 'Mês 4–6', fase: 'Plano Institucional', desc: 'Parcerias com institutos, universidades e redes de psicomotricidade.', color: '#38a89d' },
  ]

  return (
    <section id="gtm" className="py-20 sm:py-28 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-[#2d7d78] text-sm font-semibold uppercase tracking-widest mb-3 block">Estratégia</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Go-to-Market: 6 Meses
          </h2>
          <p className="text-[#4a5568] text-lg leading-relaxed">
            Estratégia faseada para crescimento orgânico e validação de mercado com riscos controlados.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#ede4d3]" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`reveal flex flex-col md:flex-row items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`bg-white rounded-2xl p-6 border border-[#ede4d3] hover:shadow-lg transition-all duration-300 ${i % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'} max-w-sm`}>
                    <span className="text-xs font-bold text-[#2d7d78] uppercase tracking-wider">{item.mes}</span>
                    <h3 className="font-bold text-[#1a2744] text-lg mt-1 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.fase}</h3>
                    <p className="text-[#4a5568] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-5 h-5 rounded-full border-4 border-white shadow-md flex-shrink-0 mt-6" style={{ backgroundColor: item.color }} />

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ——————————————————————————————————
// Proposta
// ——————————————————————————————————
function Proposta() {
  return (
    <section id="proposta" className="py-20 sm:py-28 bg-[#1a2744] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, #c9a227 0%, transparent 40%), radial-gradient(circle at 80% 20%, #2d7d78 0%, transparent 50%)',
          width: '100%',
          height: '100%',
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-3 block">A Proposta</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Duas Opções, Você Escolhe
          </h2>
          <p className="text-[#a0aec0] text-lg leading-relaxed">
            Pensamos em duas estruturas que respeitam diferentes momentos e objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Opção A */}
          <div className="reveal relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#c9a227]">
            <div className="absolute -top-4 left-8">
              <span className="bg-[#c9a227] text-[#1a2744] text-sm font-bold px-5 py-2 rounded-full shadow-lg">
                Opção A — Recomendada
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-bold text-[#1a2744] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Sociedade Estratégica
              </h3>
              <p className="text-[#4a5568] text-sm mb-6">Parceria de longo prazo com participação nos resultados</p>

              <div className="bg-[#faf7f2] rounded-2xl p-6 mb-6">
                <h4 className="font-bold text-[#1a2744] mb-4 text-sm uppercase tracking-wide">Investimento Total</h4>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-bold text-[#1a2744]" style={{ fontFamily: "'Playfair Display', serif" }}>R$ 3.000</span>
                  <span className="text-[#4a5568] text-sm">site profissional</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-semibold text-[#2d7d78]">+ R$ 1.000</span>
                  <span className="text-[#4a5568] text-sm">aporte Fabiane (entrada)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-[#2d7d78]">+ R$ 120/mês</span>
                  <span className="text-[#4a5568] text-sm">infraestrutura</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-[#f0f9f8] rounded-xl border border-[#2d7d78]/20">
                  <div className="text-3xl font-bold text-[#2d7d78]" style={{ fontFamily: "'Playfair Display', serif" }}>30%</div>
                  <div className="text-[#4a5568] text-sm mt-1">Participação Fabiane</div>
                </div>
                <div className="text-center p-4 bg-[#1a2744]/5 rounded-xl border border-[#1a2744]/10">
                  <div className="text-3xl font-bold text-[#1a2744]" style={{ fontFamily: "'Playfair Display', serif" }}>70%</div>
                  <div className="text-[#4a5568] text-sm mt-1">Participação Guilherme</div>
                </div>
              </div>

              <ul className="space-y-2 mb-8">
                {[
                  'Site profissional R$ 3.000 (incluso)',
                  'Research Navigator funcionando',
                  'Exclusividade de 12 meses',
                  'Suporte contínuo incluso',
                  'Fabiane faz frente comercial no meio acadêmico',
                  'Participação nos lucros: 30% Fabiane / 70% Guilherme',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#4a5568]">
                    <svg className="w-4 h-4 text-[#2d7d78] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5561991572149?text=Oi!%20Vi%20a%20proposta%20do%20IIBPR%20Digital.%20Quero%20conversar!"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#c9a227] hover:bg-[#d4af37] text-white font-bold py-4 rounded-xl transition-colors duration-200 shadow-lg"
              >
                Quero a Opção A
              </a>
            </div>
          </div>

          {/* Opção B */}
          <div className="reveal bg-white/5 border border-white/15 rounded-3xl p-8" style={{ transitionDelay: '150ms' }}>
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Opção B — Serviço
            </h3>
            <p className="text-[#a0aec0] text-sm mb-6">Contratação tradicional sem participação nos resultados</p>

            <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#a0aec0] text-sm">Site Profissional</span>
                  <span className="text-white font-bold">R$ 3.000</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                  <span className="text-[#a0aec0] text-sm">Research Navigator</span>
                  <span className="text-white font-bold">R$ 500/mês</span>
                </div>
              </div>
            </div>

            <ul className="space-y-2 mb-8">
              {[
                'Pagamento único pelo site',
                'Mensalidade pelo Navigator',
                'Sem participação nos lucros',
                'Suporte via contrato separado',
                'Propriedade total do instituto',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#a0aec0]">
                  <svg className="w-4 h-4 text-[#a0aec0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5561991572149?text=Oi!%20Vi%20a%20proposta%20do%20IIBPR%20Digital.%20Quero%20conversar%20sobre%20a%20Op%C3%A7%C3%A3o%20B!"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border border-white/30 hover:border-white/60 text-white font-semibold py-4 rounded-xl transition-colors duration-200 hover:bg-white/10"
            >
              Tenho interesse na Opção B
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ——————————————————————————————————
// CTA Final
// ——————————————————————————————————
function CTAFinal() {
  return (
    <section id="cta" className="py-20 sm:py-28 bg-[#faf7f2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <span className="text-[#2d7d78] text-sm font-semibold uppercase tracking-widest mb-3 block">Proximo Passo</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Vamos Construir Juntos o
            <span className="block text-[#2d7d78]">Futuro do IIBPR?</span>
          </h2>
          <p className="text-[#4a5568] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Esta proposta tem validade de 30 dias. Entre em contato agora para tirar duvidas e alinhar os detalhes.
            Nenhum compromisso inicial.
          </p>

          <a
            href="https://wa.me/5561991572149?text=Oi!%20Vi%20a%20proposta%20do%20IIBPR%20Digital.%20Quero%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#1a2744] hover:bg-[#234070] text-white font-bold px-10 py-5 rounded-full transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Conversar no WhatsApp
          </a>

          <p className="text-[#718096] text-sm mt-6">
            Guilherme Domingos — Trik Digital
          </p>
        </div>
      </div>
    </section>
  )
}

// ——————————————————————————————————
// Footer
// ——————————————————————————————————
function Footer() {
  return (
    <footer className="bg-[#1a2744] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white text-xs font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>T</span>
            </div>
            <span className="text-white/80 font-medium">Trik Digital</span>
          </div>
          <p className="text-white/40 text-sm text-center">
            Proposta confidencial — {new Date().getFullYear()} — Todos os direitos reservados
          </p>
          <a
            href="https://wa.me/5561991572149"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38a89d] hover:text-[#81e6d9] text-sm font-medium transition-colors duration-200"
          >
            +55 61 99157-2149
          </a>
        </div>
      </div>
    </footer>
  )
}

// ——————————————————————————————————
// App
// ——————————————————————————————————
export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Diagnostico />
        <Entregas />
        <ResearchNavigator />
        <Mercado />
        <ProjecaoFinanceira />
        <GoToMarket />
        <Proposta />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  )
}
