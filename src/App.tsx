import { useEffect, useState } from 'react'
import './index.css'

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
// WhatsApp SVG Icon (reusable)
// ——————————————————————————————————
function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ——————————————————————————————————
// Check Icon (reusable)
// ——————————————————————————————————
function CheckIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

const WA_LINK = 'https://wa.me/5561991572149?text=Oi!%20Vi%20a%20proposta%20do%20IIBPR%20Digital.%20Quero%20conversar!'
const WA_LINK_B = 'https://wa.me/5561991572149?text=Oi!%20Vi%20a%20proposta%20do%20IIBPR%20Digital.%20Quero%20conversar%20sobre%20a%20Op%C3%A7%C3%A3o%20B!'

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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-primary to-teal-light flex items-center justify-center shadow-lg shadow-teal-primary/20">
              <span className="text-white text-xs font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>II</span>
            </div>
            <span className="font-semibold text-white text-sm tracking-wide">IIBPR Digital</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-400 hover:text-teal-light transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-teal-primary/20 hover:bg-teal-primary/30 text-teal-light text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 border border-teal-primary/30 hover:border-teal-primary/50"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Falar agora
          </a>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
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

      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-sm text-slate-400 hover:text-teal-light hover:bg-white/5 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 bg-teal-primary hover:bg-teal-light text-white text-sm font-medium px-4 py-3 rounded-full transition-colors duration-200"
            >
              <WhatsAppIcon className="w-4 h-4" />
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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-mesh-1" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-teal-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-teal-primary/30 bg-teal-primary/10 backdrop-blur-sm mb-10">
            <span className="w-2 h-2 rounded-full bg-teal-light animate-pulse" />
            <span className="text-teal-light text-sm font-medium tracking-wide">Proposta Comercial Exclusiva</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            IIBPR Digital
            <span className="block bg-gradient-to-r from-teal-light to-teal-primary bg-clip-text text-transparent">Transformação Digital</span>
            <span className="block text-gold text-3xl sm:text-4xl lg:text-5xl mt-2 font-semibold">do Instituto</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl">
            Site profissional + plataforma de pesquisa acadêmica com inteligência artificial.
            Uma proposta de parceria estratégica para o futuro do IIBPR.
          </p>

          <div className="flex flex-wrap gap-3 mb-14">
            {[
              { icon: '🎓', label: '420h Formação' },
              { icon: '📚', label: '8+ Cursos' },
              { icon: '🔬', label: '8 APIs Acadêmicas' },
              { icon: '📋', label: '4 Fases de Entrega' },
            ].map((badge) => (
              <div key={badge.label} className="glass-card flex items-center gap-2 px-5 py-2.5 rounded-full">
                <span className="text-base">{badge.icon}</span>
                <span className="text-white text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn-teal inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-primary to-teal-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm sm:text-base shadow-xl shadow-teal-primary/25 hover:shadow-2xl hover:shadow-teal-primary/30 hover:-translate-y-1 w-full sm:w-auto"
            >
              <WhatsAppIcon />
              Quero conversar sobre a proposta
            </a>
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center gap-2 glass-card text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm sm:text-base hover:bg-white/10 w-full sm:w-auto"
            >
              Ver diagnóstico
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs uppercase tracking-[0.3em] font-medium">scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}

// ——————————————————————————————————
// Diagnostico
// ——————————————————————————————————
function Diagnostico() {
  const problems = [
    { icon: '🔴', title: 'WordPress novo vazio', description: 'Tema instalado, zero conteúdo. O site existe mas não representa o instituto.', impact: 'Alta urgência' },
    { icon: '🔴', title: 'Research Navigator offline', description: 'MVP funcional desenvolvido, porém com deploy quebrado. Produto pronto que não gera valor.', impact: 'Alta urgência' },
    { icon: '🟡', title: 'Presença digital fragmentada', description: '3 plataformas desconectadas sem identidade unificada. Experiência confusa para o usuário.', impact: 'Urgência média' },
    { icon: '🟡', title: 'Receita não explorada', description: 'Concorrentes cobram $12–20/mês por ferramentas similares. Oportunidade de monetização imediata.', impact: 'Urgência média' },
  ]

  return (
    <section id="diagnostico" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/50" />
      <div className="absolute inset-0 gradient-mesh-2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <span className="inline-block text-teal-light text-sm font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-teal-primary/20 bg-teal-primary/5">Diagnóstico</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Problemas Identificados</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Análise das oportunidades de melhoria no ecossistema digital atual do IIBPR.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="reveal glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500 group cursor-default" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-primary/10 transition-colors duration-500">
                  <span className="text-2xl">{p.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>
                  <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/10">{p.impact}</span>
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
    { number: '01', title: 'Migração Completa do Site', duration: '2–3 dias', gradient: 'from-teal-primary to-teal-dark', items: ['Migração de todo conteúdo existente', 'Configuração do WordPress otimizado', 'SEO técnico (meta tags, sitemap, schema)', 'Integração com domínio e SSL', 'Velocidade e performance (Core Web Vitals)', 'Testes em múltiplos dispositivos'] },
    { number: '02', title: 'Customização Premium do Tema', duration: '3–5 dias', gradient: 'from-gold to-gold-dark', items: ['Design alinhado à identidade institucional', 'Header e footer personalizados', 'Páginas internas com templates únicos', 'Galeria de fotos e mídia otimizada', 'Formulários e CTAs estratégicos', 'Paleta de cores e tipografia do IIBPR'] },
    { number: '03', title: 'Research Navigator Deploy', duration: '2–3 dias', gradient: 'from-slate-600 to-slate-800', items: ['Correção dos bugs de deploy', 'Configuração de ambiente de produção', 'Integração com as 8 APIs acadêmicas', 'Autenticação e sistema de usuários', 'Dashboard de analytics e uso', 'Monitoramento e alertas automáticos'] },
    { number: '04', title: 'QA + Lançamento', duration: '1–2 dias', gradient: 'from-teal-light to-teal-primary', items: ['Testes de qualidade completos', 'Revisão de conteúdo final', 'Validação de todos os fluxos', 'Treinamento de gestão básica', 'Documentação entregue', 'Suporte pós-lançamento (30 dias)'] },
  ]

  return (
    <section id="entregas" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <span className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">Entregas</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>4 Fases em 8–12 Dias Úteis</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Cronograma detalhado com entregas claras, prazos definidos e responsabilidades estabelecidas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {phases.map((phase, i) => (
            <div key={i} className="reveal glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-500" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className={`px-8 py-6 flex items-center gap-5 bg-gradient-to-r ${phase.gradient}`}>
                <span className="text-5xl font-bold text-white/15" style={{ fontFamily: "'Playfair Display', serif" }}>{phase.number}</span>
                <div>
                  <h3 className="font-bold text-white text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{phase.title}</h3>
                  <span className="text-white/70 text-sm">{phase.duration}</span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-teal-light" />
                      <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
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
    { icon: '🔍', title: 'Busca 8 APIs', description: 'Pesquisa simultânea em Semantic Scholar, PubMed, Crossref, DOAJ, Unpaywall, OpenAlex e mais.' },
    { icon: '🤖', title: 'Chat IA (Thesys)', description: 'Converse com artigos científicos usando IA generativa de última geração.' },
    { icon: '📊', title: 'Síntese Multiartigo', description: 'Gere resumos e comparações automáticas de múltiplos artigos relacionados.' },
    { icon: '💬', title: 'Perguntar ao Artigo', description: 'Faça perguntas específicas sobre qualquer artigo e receba respostas fundamentadas.' },
    { icon: '📁', title: 'Coleções', description: 'Organize pesquisas em coleções temáticas com anotações e tags personalizadas.' },
    { icon: '📝', title: 'Citação APA', description: 'Geração automática de referências no formato ABNT/APA com um clique.' },
  ]

  return (
    <section id="navigator" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 70% 20%, rgba(13, 148, 136, 0.15) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(212, 168, 83, 0.1) 0%, transparent 40%)' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="inline-flex items-center gap-2 text-teal-light text-sm font-semibold uppercase tracking-[0.2em] mb-4 px-5 py-2 rounded-full border border-teal-primary/30 bg-teal-primary/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-light animate-pulse" />
            Produto Exclusivo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Research Navigator
            <span className="block bg-gradient-to-r from-teal-light to-teal-primary bg-clip-text text-transparent text-2xl sm:text-3xl mt-2">Assistente de Pesquisa Acadêmica com IA</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Primeiro assistente de pesquisa acadêmica com inteligência artificial, 100% em Português.
            Psicomotricidade como primeiro nicho — expansível para qualquer área acadêmica.
            Desenvolvido exclusivamente para o ecossistema IIBPR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <div key={i} className="reveal glass-card glass-card-hover p-8 rounded-2xl transition-all duration-500 group cursor-default" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-primary/20 to-teal-primary/5 flex items-center justify-center mb-5 group-hover:from-teal-primary/30 group-hover:to-teal-primary/10 transition-all duration-500">
                <span className="text-2xl">{f.icon}</span>
              </div>
              <h3 className="font-bold text-white mb-3 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="reveal glass-card rounded-3xl p-10">
          <h3 className="text-center font-bold text-white text-2xl mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Valor de Desenvolvimento no Mercado</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Freelancer', value: 'R$ 45k–180k', sub: '350–800h de esforço' },
              { label: 'Agência Digital', value: 'R$ 180k–650k', sub: 'Projetos similares cotados' },
              { label: 'Horas estimadas', value: '350–800h', sub: 'Backend + Frontend + IA' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/20 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
                <div className="text-white text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-slate-500 text-xs">{stat.sub}</div>
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
    'Primeiro nicho acadêmico com foco em Psicomotricidade',
    'Português nativo — não é tradução automática',
    '8 APIs acadêmicas integradas (mais que a maioria)',
    'GenUI chat com interface generativa inteligente',
    'Selo de qualidade IIBPR — autoridade acadêmica reconhecida',
  ]

  const pricing = [
    { plan: 'Aluno', price: 'R$ 29,90', description: 'Acesso básico às ferramentas de pesquisa', badge: '' },
    { plan: 'Profissional', price: 'R$ 49,90', description: 'Acesso completo + coleções + síntese avançada', badge: 'Recomendado' },
    { plan: 'Institucional', price: 'R$ 149,90', description: 'Multi-usuário + analytics + suporte prioritário', badge: '' },
  ]

  return (
    <section id="mercado" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="absolute inset-0 gradient-mesh-2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <span className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">Validação de Mercado</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Mercado Validado e Crescente</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Concorrentes globais cobram entre $6 e $20/mês. Nenhum foca em Psicomotricidade ou oferece experiência nativa em Português.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="reveal">
            <h3 className="font-bold text-white text-xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Concorrentes Globais</h3>
            <div className="space-y-3">
              {competitors.map((c) => (
                <div key={c.name} className="glass-card flex items-center justify-between p-5 rounded-xl hover:bg-white/8 transition-all duration-300">
                  <div>
                    <span className="font-semibold text-white">{c.name}</span>
                    <span className="text-slate-500 text-sm ml-2">— {c.focus}</span>
                  </div>
                  <span className="text-teal-light font-bold text-sm">{c.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '150ms' }}>
            <h3 className="font-bold text-white text-xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Nossos Diferenciais</h3>
            <div className="space-y-4">
              {diferenciais.map((d, i) => (
                <div key={i} className="glass-card flex items-start gap-4 p-5 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-primary to-teal-dark flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-teal-primary/20">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-300 text-sm leading-relaxed">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal">
          <h3 className="text-center font-bold text-white text-2xl mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Estrutura de Preços</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.plan} className={`relative glass-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${p.badge ? 'border-teal-primary/50 bg-white/8 shadow-xl shadow-teal-primary/10' : ''}`}>
                {p.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-primary to-teal-dark text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-teal-primary/30">{p.badge}</span>
                  </div>
                )}
                <div className="text-center">
                  <h4 className="font-bold text-white text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{p.plan}</h4>
                  <div className="text-4xl font-bold bg-gradient-to-r from-teal-light to-teal-primary bg-clip-text text-transparent mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{p.price}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
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
    { name: 'Mínimo', alunos: 10, receita: 'R$ 499', custos: 'R$ 120', lucro: 'R$ 379', lucroNum: 379 },
    { name: 'Conservador', alunos: 30, receita: 'R$ 1.497', custos: 'R$ 120', lucro: 'R$ 1.377', lucroNum: 1377 },
    { name: 'Moderado', alunos: 60, receita: 'R$ 2.994', custos: 'R$ 200', lucro: 'R$ 2.794', lucroNum: 2794 },
    { name: 'Escala', alunos: 100, receita: 'R$ 4.990', custos: 'R$ 350', lucro: 'R$ 4.640', lucroNum: 4640 },
  ]
  const maxLucro = Math.max(...scenarios.map((s) => s.lucroNum))

  return (
    <section id="financeiro" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <span className="inline-block text-teal-light text-sm font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-teal-primary/20 bg-teal-primary/5">Projeção Financeira</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>4 Cenários de Crescimento</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Baseado em conversão conservadora da base atual de alunos e profissionais do IIBPR.</p>
        </div>

        <div className="reveal overflow-x-auto">
          <div className="glass-card rounded-2xl overflow-hidden min-w-[540px]">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-800 to-slate-900">
                  <th className="text-left px-6 py-5 font-semibold text-sm text-slate-300">Cenário</th>
                  <th className="text-center px-6 py-5 font-semibold text-sm text-slate-300">Usuários</th>
                  <th className="text-right px-6 py-5 font-semibold text-sm text-slate-300">Receita/mês</th>
                  <th className="text-right px-6 py-5 font-semibold text-sm text-slate-300">Custos/mês</th>
                  <th className="text-right px-6 py-5 font-semibold text-sm text-slate-300">Lucro/mês</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((s, i) => (
                  <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'} hover:bg-white/5 transition-colors duration-200`}>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-primary" style={{ opacity: 0.3 + (i + 1) * 0.17 }} />
                        <span className="font-semibold text-white">{s.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center text-slate-400">{s.alunos} usuários</td>
                    <td className="px-6 py-5 text-right text-slate-400">{s.receita}</td>
                    <td className="px-6 py-5 text-right text-slate-400">{s.custos}</td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <div className="h-2 rounded-full bg-white/5 overflow-hidden w-20 hidden sm:block">
                          <div className="h-full bg-gradient-to-r from-teal-primary to-teal-light rounded-full transition-all duration-700" style={{ width: `${(s.lucroNum / maxLucro) * 100}%` }} />
                        </div>
                        <span className="font-bold text-teal-light">{s.lucro}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-center text-slate-600 text-sm mt-6 reveal">* Valores mensais em BRL. Baseado no plano Profissional (R$49,90). Custos incluem infraestrutura e APIs.</p>
      </div>
    </section>
  )
}

// ——————————————————————————————————
// Go-to-Market
// ——————————————————————————————————
function GoToMarket() {
  const timeline = [
    { mes: 'Mês 1–2', fase: 'Beta Gratuito', desc: 'Lançamento com alunos selecionados, coleta de feedback, ajustes de UX.', color: 'from-teal-primary to-teal-dark' },
    { mes: 'Mês 2–3', fase: 'Plano Aluno', desc: 'Abertura do tier básico para toda a comunidade IIBPR. Foco em adoção.', color: 'from-slate-600 to-slate-700' },
    { mes: 'Mês 3–4', fase: 'Plano Profissional', desc: 'Lançamento do tier principal com features avançadas e upsell.', color: 'from-gold to-gold-dark' },
    { mes: 'Mês 4–6', fase: 'Plano Institucional', desc: 'Parcerias com institutos, universidades e redes de profissionais.', color: 'from-teal-light to-teal-primary' },
  ]

  return (
    <section id="gtm" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/70" />
      <div className="absolute inset-0 gradient-mesh-1" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <span className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">Estratégia</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Go-to-Market: 6 Meses</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Estratégia faseada para crescimento orgânico e validação de mercado com riscos controlados.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-teal-primary/50 via-gold/30 to-teal-primary/50" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div key={i} className={`reveal relative flex flex-col md:flex-row items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} style={{ transitionDelay: `${i * 120}ms` }}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-16 md:ml-0`}>
                  <div className={`glass-card glass-card-hover rounded-2xl p-7 transition-all duration-500 ${i % 2 === 0 ? 'md:ml-auto md:mr-10' : 'md:mr-auto md:ml-10'} max-w-sm`}>
                    <span className="text-xs font-bold text-teal-light uppercase tracking-[0.15em]">{item.mes}</span>
                    <h3 className="font-bold text-white text-lg mt-2 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.fase}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br ${item.color} shadow-lg ring-4 ring-slate-950 flex-shrink-0 mt-7`} />
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
    <section id="proposta" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-40">
        <div style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(212, 168, 83, 0.1) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(13, 148, 136, 0.08) 0%, transparent 50%)', width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <span className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">A Proposta</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Duas Opções, Você Escolhe</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Pensamos em duas estruturas que respeitam diferentes momentos e objetivos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Opção A */}
          <div className="reveal relative">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-gold/50 via-gold/20 to-gold/5" />
            <div className="relative bg-slate-950/90 backdrop-blur-xl rounded-3xl p-9 shadow-2xl shadow-gold/10">
              <div className="absolute -top-4 left-8">
                <span className="bg-gradient-to-r from-gold to-gold-light text-slate-950 text-sm font-bold px-6 py-2 rounded-full shadow-lg shadow-gold/30">Opção A — Recomendada</span>
              </div>

              <div className="mt-5">
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Sociedade Estratégica</h3>
                <p className="text-slate-400 text-sm mb-8">Parceria de longo prazo com participação nos resultados do Research Navigator</p>

                <div className="glass-card rounded-2xl p-7 mb-7">
                  <h4 className="font-bold text-slate-300 mb-5 text-xs uppercase tracking-[0.15em]">Investimento Fabiane</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Site Profissional Completo</span>
                      <span className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>R$ 3.000</span>
                    </div>
                    <div className="border-t border-white/5 pt-3 flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Aporte Research Navigator</span>
                      <span className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>R$ 1.000</span>
                    </div>
                    <div className="border-t border-white/5 pt-3 flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Infraestrutura mensal</span>
                      <span className="text-teal-light font-semibold">R$ 120/mês</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-7">
                  <div className="text-center p-5 rounded-2xl bg-gradient-to-br from-teal-primary/10 to-teal-primary/5 border border-teal-primary/20">
                    <div className="text-4xl font-bold text-teal-light" style={{ fontFamily: "'Playfair Display', serif" }}>30%</div>
                    <div className="text-slate-400 text-sm mt-1">Participação Fabiane</div>
                  </div>
                  <div className="text-center p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>70%</div>
                    <div className="text-slate-400 text-sm mt-1">Participação Guilherme</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-9">
                  {['Site profissional completo (R$ 3.000)', 'Research Navigator funcionando', 'Exclusividade de 12 meses', 'Suporte contínuo incluso', 'Participação nos lucros futuros', 'Fabiane lidera frente acadêmica'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckIcon className="w-4 h-4 text-teal-light flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="glow-btn-gold block w-full text-center bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-slate-950 font-bold py-4 rounded-xl transition-all duration-300 shadow-xl shadow-gold/20 hover:-translate-y-0.5">
                  Quero a Opção A
                </a>
              </div>
            </div>
          </div>

          {/* Opção B */}
          <div className="reveal glass-card rounded-3xl p-9" style={{ transitionDelay: '150ms' }}>
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Opção B — Serviço</h3>
            <p className="text-slate-400 text-sm mb-8">Contratação tradicional sem participação nos resultados</p>

            <div className="glass-card rounded-2xl p-7 mb-7">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Site Profissional Completo</span>
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>R$ 3.000</span>
                </div>
                <div className="border-t border-white/5 pt-3 flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Research Navigator</span>
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>R$ 500/mês</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-9">
              {['Site profissional completo (R$ 3.000)', 'Mensalidade pelo Navigator', 'Sem participação nos lucros', 'Suporte via contrato separado', 'Propriedade total do instituto'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                  <CheckIcon className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a href={WA_LINK_B} target="_blank" rel="noopener noreferrer" className="block w-full text-center glass-card hover:bg-white/10 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5">
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
    <section id="cta" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(13, 148, 136, 0.1) 0%, transparent 60%)' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <span className="inline-block text-teal-light text-sm font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-teal-primary/20 bg-teal-primary/5">Próximo Passo</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Vamos Construir Juntos o
            <span className="block bg-gradient-to-r from-teal-light to-teal-primary bg-clip-text text-transparent">Futuro do IIBPR?</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Esta proposta tem validade de 30 dias. Entre em contato agora para tirar dúvidas e alinhar os detalhes. Nenhum compromisso inicial.
          </p>

          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="glow-btn-teal inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-primary to-teal-dark text-white font-bold px-12 py-5 rounded-full transition-all duration-300 text-lg shadow-2xl shadow-teal-primary/25 hover:shadow-teal-primary/40 hover:-translate-y-1">
            <WhatsAppIcon className="w-6 h-6" />
            Conversar no WhatsApp
          </a>

          <p className="text-slate-600 text-sm mt-8">Guilherme Domingos — Trik Digital</p>
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
    <footer className="bg-slate-950 py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-primary/20 to-teal-primary/5 flex items-center justify-center border border-teal-primary/20">
              <span className="text-teal-light text-xs font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>T</span>
            </div>
            <span className="text-slate-400 font-medium text-sm">Trik Digital</span>
          </div>
          <p className="text-slate-600 text-sm text-center">Proposta confidencial — {new Date().getFullYear()} — Todos os direitos reservados</p>
          <a href="https://wa.me/5561991572149" target="_blank" rel="noopener noreferrer" className="text-teal-light hover:text-teal-primary text-sm font-medium transition-colors duration-300">
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
    <div className="min-h-screen bg-slate-950">
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
