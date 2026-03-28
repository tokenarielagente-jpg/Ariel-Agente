/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Cpu, 
  Shield, 
  Zap, 
  Flame, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  MessageSquare, 
  FileText, 
  BarChart3, 
  Settings, 
  Lock, 
  Download, 
  ExternalLink, 
  Waves,
  ArrowRight,
  Globe,
  Wallet
} from "lucide-react";
import { useEffect, useState } from "react";

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand-cyan/30 rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random()
          }}
          animate={{ 
            y: ["-10%", "110%"],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
        />
      ))}
    </div>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-purple mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-cyan/30 selection:text-brand-cyan">
      <ParticleBackground />
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-dark/80 backdrop-blur-xl border-b border-brand-glass-border py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-purple rounded-xl flex items-center justify-center neon-glow">
              <Waves className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">
              ARIEL <span className="text-brand-cyan">AGENTE</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#sobre" className="hover:text-brand-cyan transition-colors">Sobre</a>
            <a href="#tokenomics" className="hover:text-brand-cyan transition-colors">Tokenomics</a>
            <a href="#roadmap" className="hover:text-brand-cyan transition-colors">Roadmap</a>
            <button className="btn-primary py-2 px-6 text-sm">Comprar AG</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-cyan/20 text-brand-cyan text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4 fill-brand-cyan" />
            <span>O Futuro da IA + Web3 Chegou</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.1]"
          >
            O Agente de <span className="text-brand-cyan neon-text">Inteligência Artificial</span> da Nova Era Web3
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            IA + Blockchain + Token Utility na Binance Smart Chain. O ecossistema unificado para a nova economia digital.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <button className="btn-primary flex items-center gap-2 group">
              Comprar Token AG <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://drive.google.com/uc?export=download&id=1oE7Wvv2i9eJqK-G7wpH6qclYU76G-GdJ" 
              target="_blank"
              className="btn-secondary flex items-center gap-2"
            >
              Baixar Whitepaper <Download className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              { label: "Supply Total", value: "100M AG" },
              { label: "Taxa", value: "5%" },
              { label: "Rede", value: "BSC" },
              { label: "Circulação TGE", value: "95%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass p-6 text-center group hover:border-brand-cyan/50 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-brand-cyan mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section id="sobre" className="py-24 bg-brand-dark/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-brand-cyan/20 blur-3xl rounded-full"></div>
                <div className="relative glass p-8 aspect-square flex items-center justify-center">
                  <Waves className="w-48 h-48 text-brand-cyan animate-float" />
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <SectionHeading 
                title="Ariel Agente: Mais que um Token" 
                subtitle="Combinamos o poder da Inteligência Artificial com a segurança da Blockchain para criar utilidade real no ecossistema Web3."
              />
              <div className="space-y-6">
                {[
                  { icon: Cpu, title: "Inteligência Artificial", desc: "Algoritmos avançados para automação e geração de valor." },
                  { icon: Shield, title: "Blockchain Segura", desc: "Transparência total e segurança na rede Binance Smart Chain." },
                  { icon: Zap, title: "Token de Utilidade", desc: "O AG é o combustível que alimenta todo o ecossistema de serviços." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 p-6 glass hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-cyan/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema e Solução */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading title="Problema & Solução" subtitle="Por que o Ariel Agente é diferente de tudo o que você já viu." />
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 border-red-500/20 bg-red-500/5"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-red-400">
                <XCircle className="w-6 h-6" /> Problemas do Mercado
              </h3>
              <ul className="space-y-6">
                {[
                  "Falta de integração entre IA e cripto",
                  "Falta de transparência nos projetos",
                  "Inflação descontrolada de tokens",
                  "Falta de utilidade real (Memecoins)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 border-brand-neon/20 bg-brand-neon/5"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-brand-neon">
                <CheckCircle2 className="w-6 h-6" /> Nossa Solução
              </h3>
              <ul className="space-y-6">
                {[
                  "Ecossistema unificado (IA + Token + Comunidade)",
                  "Carteira pública e auditoria constante",
                  "Mecanismo deflacionário agressivo",
                  "Recompra e queima com lucro real do negócio"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-neon mt-2.5"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona o Agente */}
      <section className="py-24 bg-brand-dark/50">
        <div className="container mx-auto px-6">
          <SectionHeading title="O Agente Ariel" subtitle="Descubra as funcionalidades que tornam nosso agente de IA indispensável." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessageSquare, title: "Assistente Conversacional", desc: "Interação fluida e inteligente para suporte e consultoria." },
              { icon: FileText, title: "Geração de Conteúdo", desc: "Criação de textos, scripts e materiais criativos em segundos." },
              { icon: BarChart3, title: "Análise Inteligente", desc: "Processamento de dados complexos para insights estratégicos." },
              { icon: Settings, title: "Automação de Tarefas", desc: "Otimização de fluxos de trabalho repetitivos com precisão." }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 group hover:bg-brand-cyan/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <card.icon className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading title="Tokenomics" subtitle="Um modelo econômico desenhado para a valorização sustentável." />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="glass p-8">
                <div className="flex justify-between items-end mb-4">
                  <h4 className="text-2xl font-bold">Taxa Total: 5%</h4>
                  <span className="text-brand-cyan font-mono">Deflacionário</span>
                </div>
                <div className="space-y-6">
                  {[
                    { label: "Marketing", value: 2, color: "bg-brand-blue" },
                    { label: "Liquidez", value: 2, color: "bg-brand-purple" },
                    { label: "Burn (Queima)", value: 1, color: "bg-brand-neon" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value * 20}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 italic">
                * Cada transação alimenta o marketing, fortalece a liquidez e reduz o supply total permanentemente através da queima automática.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "95% Circulação", desc: "Lançamento justo com a maioria dos tokens no mercado." },
                { title: "5% Desenvolvimento", desc: "Reservado para expansão contínua do ecossistema." },
                { title: "Buyback & Burn", desc: "50% do lucro das licenças é usado para recomprar e queimar." },
                { title: "Transparência", desc: "Carteiras públicas para auditoria da comunidade." }
              ].map((item, i) => (
                <div key={i} className="glass p-6">
                  <h5 className="text-brand-cyan font-bold mb-2">{item.title}</h5>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modelo de Negócio */}
      <section className="py-24 bg-brand-dark/50">
        <div className="container mx-auto px-6">
          <SectionHeading title="Modelo de Negócio" subtitle="Como criamos valor real para o Token AG." />
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {[
                { step: "1", title: "Licença", desc: "Usuário compra licença de IA", icon: Wallet },
                { step: "2", title: "Receita", desc: "Gera lucro real para o projeto", icon: BarChart3 },
                { step: "3", title: "Buyback", desc: "50% do lucro recompra AG", icon: Zap },
                { step: "4", title: "Burn", desc: "Tokens são queimados", icon: Flame }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center relative group">
                  <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-4 neon-glow group-hover:border-brand-cyan transition-colors">
                    <item.icon className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 max-w-[120px]">{item.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-10 -right-12 text-brand-cyan/30">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading title="Roadmap" subtitle="Nossa jornada rumo ao domínio da IA na Web3." />
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { phase: "Q2 2026", items: ["Lançamento Oficial", "Listagem PancakeSwap", "Publicação Whitepaper v2"] },
              { phase: "Q3 2026", items: ["Sistema de Licenças", "Campanhas de Marketing Global", "Primeiro Ciclo de Buyback"] },
              { phase: "Q4 2026", items: ["Expansão do Agente de IA", "Novas Parcerias Estratégicas", "Listagem em CEXs"] },
              { phase: "2027", items: ["Ecossistema Completo", "Integrações Web3 Avançadas", "Governança DAO"] }
            ].map((stage, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-32 pt-1">
                  <span className="text-brand-cyan font-black text-xl">{stage.phase}</span>
                </div>
                <div className="flex-grow glass p-6 border-l-4 border-l-brand-cyan">
                  <ul className="space-y-3">
                    {stage.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-24 bg-brand-cyan/5">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading title="Transparência Total" subtitle="Segurança e confiança são nossos pilares." />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass p-8">
              <Globe className="w-12 h-12 text-brand-cyan mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4">Carteira Pública</h4>
              <p className="text-gray-400 text-sm mb-6">Acompanhe todos os movimentos da carteira de desenvolvimento em tempo real.</p>
              <button className="text-brand-cyan flex items-center gap-2 mx-auto text-sm font-bold hover:underline">
                Ver no BscScan <ExternalLink className="w-4 h-4" />
              </button>
            </div>
            <div className="glass p-8">
              <Lock className="w-12 h-12 text-brand-cyan mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4">Auditado</h4>
              <p className="text-gray-400 text-sm mb-6">Smart contract revisado por especialistas para garantir sua segurança.</p>
              <button className="text-brand-cyan flex items-center gap-2 mx-auto text-sm font-bold hover:underline">
                Ver Auditoria <ExternalLink className="w-4 h-4" />
              </button>
            </div>
            <div className="glass p-8">
              <Layers className="w-12 h-12 text-brand-cyan mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4">Governança</h4>
              <p className="text-gray-400 text-sm mb-6">A comunidade decide o futuro do projeto através de votações transparentes.</p>
              <button className="text-brand-cyan flex items-center gap-2 mx-auto text-sm font-bold hover:underline">
                Snapshot.org <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cyan/10 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black mb-8"
          >
            Entre para o futuro da <span className="text-brand-cyan">IA + Web3</span>
          </motion.h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Não perca a oportunidade de fazer parte do ecossistema que está revolucionando a utilidade dos tokens na BSC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary">Comprar AG Agora</button>
            <a 
              href="https://drive.google.com/uc?export=download&id=1oE7Wvv2i9eJqK-G7wpH6qclYU76G-GdJ" 
              target="_blank"
              className="btn-secondary"
            >
              Baixar Whitepaper
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-brand-glass-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Waves className="text-brand-cyan w-6 h-6" />
              <span className="text-xl font-bold">ARIEL AGENTE</span>
            </div>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Telegram</a>
              <a href="#" className="hover:text-white">Discord</a>
              <a href="#" className="hover:text-white">Medium</a>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-gray-600 mb-4 uppercase tracking-widest">Aviso Legal (Disclaimer)</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Este projeto não constitui aconselhamento financeiro. Criptoativos são investimentos de alto risco. 
              Faça sua própria pesquisa (DYOR) antes de investir. O Token AG é um ativo de utilidade para o ecossistema Ariel Agente.
            </p>
            <div className="mt-8 pt-8 border-t border-brand-glass-border/50 text-xs text-gray-600">
              © 2026 Ariel Agente. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
