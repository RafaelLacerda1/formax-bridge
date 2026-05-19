import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  GraduationCap,
  ShieldCheck,
  Clock,
  Headphones,
  CheckCircle2,
  MessageCircle,
  Award,
  Sparkles,
  Star,
  Instagram,
  AlertTriangle,
  TrendingUp,
  Heart,
  Users,
  Zap,
} from "lucide-react";

import heroImage from "@/assets/formax-hero.png";
import logo from "@/assets/formax-logo.png";
import instagramImg from "@/assets/formax-instagram.png";
import social1 from "@/assets/social-1.jpg";
import social2 from "@/assets/social-2.jpg";

export const Route = createFileRoute("/")({
  component: BridgePage,
});

const PIXEL_ID = "948773708066649";

function initMetaPixel() {
  if (typeof window === "undefined") return;
  // @ts-expect-error
  if (window.fbq) return;
  // @ts-expect-error
  window.fbq = function () {
    // @ts-expect-error
    window.fbq.callMethod
      // @ts-expect-error
      ? window.fbq.callMethod.apply(window.fbq, arguments)
      // @ts-expect-error
      : window.fbq.queue.push(arguments);
  };
  // @ts-expect-error
  if (!window._fbq) window._fbq = window.fbq;
  // @ts-expect-error
  window.fbq.push = window.fbq;
  // @ts-expect-error
  window.fbq.loaded = true;
  // @ts-expect-error
  window.fbq.version = "2.0";
  // @ts-expect-error
  window.fbq.queue = [];
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  // @ts-expect-error
  window.fbq("init", PIXEL_ID);
  // @ts-expect-error
  window.fbq("track", "PageView");
}

const WHATSAPP_URL =
  "https://wa.me/5531995023091?text=" +
  encodeURIComponent(
    "Olá, vim do Instagram e quero entender melhor como funciona o EJA Online e também como funciona para conseguir o Diploma Técnico por Competência em até 48h."
  );
const INSTAGRAM_URL = "https://instagram.com/formax.cursos";

function trackWhatsAppClick(source: string) {
  // @ts-expect-error
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    // @ts-expect-error
    window.fbq("trackCustom", "CliqueWhatsApp", { source });
  }
}

function openWhatsApp(source: string) {
  trackWhatsAppClick(source);
  if (typeof window !== "undefined") {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  }
}

function WhatsAppButton({
  children,
  variant = "primary",
  source,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "giant" | "outline";
  source: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-3 font-bold tracking-tight rounded-full transition-all duration-300 will-change-transform cursor-pointer";
  const styles =
    variant === "giant"
      ? "bg-gradient-whatsapp text-whatsapp-foreground px-7 py-5 text-lg sm:text-xl shadow-glow animate-pulse-glow hover:scale-[1.02]"
      : variant === "outline"
      ? "border-2 border-white/90 text-white px-6 py-3 hover:bg-white hover:text-foreground"
      : "bg-gradient-whatsapp text-whatsapp-foreground px-6 py-4 text-base sm:text-lg shadow-elegant hover:scale-[1.02] animate-pulse-glow";
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        openWhatsApp(source);
      }}
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 fill-current" strokeWidth={0} />
      <span>{children}</span>
    </button>
  );
}

function BridgePage() {
  useEffect(() => {
    initMetaPixel();
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 w-[600px] h-[600px] rounded-full bg-[oklch(0.55_0.24_330_/_0.4)] blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-5 pt-6 pb-10 sm:pt-10 sm:pb-16">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="FORMAX" className="h-11 w-11 rounded-xl shadow-lg" />
              <div className="leading-tight">
                <div className="font-extrabold text-lg tracking-tight">FORMAX</div>
                <div className="text-[10px] uppercase tracking-widest text-white/80">
                  Formação Técnica e Superior
                </div>
              </div>
            </div> {/* DIV FECHADA AQUI */}
            
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-white/15 backdrop-blur px-3 py-1.5 rounded-full border border-white/20">
              <ShieldCheck className="h-3.5 w-3.5" /> MEC / SISTEC
            </span>
          </header>

          <div className="grid lg:grid-cols-2 gap-10 items-center mt-8 sm:mt-12">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/25 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                Diploma reconhecido • EJA Online • Curso por Competência
              </div>
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Seja Técnico em{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-[oklch(0.92_0.08_70)]">
                  até 48 horas
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/90 max-w-xl">
                Regularize sua profissão com <strong className="text-white">reconhecimento técnico</strong> e
                conclua seu <strong className="text-white">EJA Online</strong> de forma rápida, prática e com
                suporte humanizado da Brenda.
              </p>
              <p className="mt-4 text-sm text-white/80">
                Mais de <strong className="text-white">44 mil alunos</strong> acompanham a FORMAX. Atendimento
                individual, suporte especializado e formação reconhecida.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <WhatsAppButton source="hero">FALAR COM A BRENDA AGORA</WhatsAppButton>
                <a
                  href="#credibilidade"
                  className="inline-flex items-center justify-center gap-2 font-semibold text-sm text-white/90 hover:text-white px-4 py-3"
                >
                  Ver como funciona ↓
                </a>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/85">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> 100% Online
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> Suporte WhatsApp
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> Diploma Reconhecido
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.55_0.24_330_/_0.5)] to-transparent rounded-3xl blur-2xl" />
              <img
                src={heroImage}
                alt="Aluna conquistou diploma técnico com a FORMAX"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-elegant ring-1 ring-white/20"
                loading="eager"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 bg-white text-foreground rounded-2xl shadow-elegant px-4 py-2.5 flex items-center gap-2 animate-float">
                <Award className="h-6 w-6 text-[var(--brand-orange)]" />
                <div className="leading-tight">
                  <div className="text-xs text-muted-foreground">Diploma em</div>
                  <div className="text-sm font-extrabold">48 horas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILIDADE */}
      <section id="credibilidade" className="py-16 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--brand-magenta)]">
              Por que a FORMAX
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">
              Tudo o que você precisa para <span className="text-gradient-brand">conquistar seu diploma</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Atendimento sério, suporte individual e processo facilitado do começo ao fim.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Clock, title: "Atendimento Rápido", desc: "Resposta em minutos pelo WhatsApp." },
              { icon: Headphones, title: "Suporte Humanizado", desc: "Você é atendido por uma pessoa real." },
              { icon: CheckCircle2, title: "Processo Facilitado", desc: "Sem burocracia. Tudo simples e claro." },
              { icon: Award, title: "Formação Reconhecida", desc: "Diploma técnico válido em todo Brasil." },
              { icon: GraduationCap, title: "EJA Online", desc: "Conclua seu ensino médio no seu ritmo." },
              { icon: ShieldCheck, title: "Curso por Competência", desc: "Diploma técnico em até 48 horas." },
              { icon: MessageCircle, title: "Atendimento WhatsApp", desc: "Tire dúvidas com a Brenda direto." },
              { icon: Zap, title: "Resultado Rápido", desc: "Sem perder tempo, sem desculpas." },
            ].map((f) => (
              <div
                key={f.title}
                className="group bg-card rounded-2xl p-5 shadow-card border border-border hover:-translate-y-1 hover:shadow-elegant transition-all duration-300"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-soft text-[var(--brand-orange-deep)] group-hover:bg-gradient-brand group-hover:text-white transition-colors">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-base">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="relative py-16 sm:py-24 bg-gradient-brand-soft overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[oklch(0.72_0.19_45_/_0.25)] blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[oklch(0.55_0.24_330_/_0.25)] blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-5 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--brand-magenta)]">
            Transformação
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl mt-2 leading-tight tracking-tight">
            Seu diploma pode <span className="text-gradient-brand">mudar sua vida.</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/80 max-w-2xl mx-auto">
            Conquiste novas oportunidades profissionais, aumente sua renda e dê o próximo passo na carreira que você
            sempre sonhou.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: TrendingUp, title: "Nova carreira", desc: "Cargos que exigem diploma técnico." },
              { icon: Heart, title: "Realização", desc: "A conquista que você adiou por anos." },
              { icon: Users, title: "Mais oportunidades", desc: "Concursos, vagas e promoções." },
            ].map((b) => (
              <div key={b.title} className="bg-white/80 backdrop-blur rounded-2xl p-5 shadow-card border border-white/60">
                <b.icon className="h-7 w-7 mx-auto text-[var(--brand-orange-deep)]" />
                <div className="mt-2 font-bold">{b.title}</div>
                <div className="text-sm text-muted-foreground">{b.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <WhatsAppButton source="transformacao">QUERO MUDAR MINHA VIDA AGORA</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--brand-magenta)]">
              Alunos Reais
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">
              Histórias de quem <span className="text-gradient-brand">já conquistou</span>
            </h2>
            <div className="mt-3 flex items-center justify-center gap-1 text-[var(--brand-orange)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-foreground">4,9/5 • Centenas de avaliações</span>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-3xl p-4 shadow-card border border-border hover:shadow-elegant transition">
              <img src={social1} alt="Mensagem de aluno satisfeito" className="w-full rounded-2xl" loading="lazy" />
              <div className="mt-3 px-1">
                <div className="flex gap-0.5 text-[var(--brand-orange)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-sm font-semibold">"Vocês foram fundamentais na minha conquista."</p>
                <p className="text-xs text-muted-foreground">Aluno verificado</p>
              </div>
            </div>
            <div className="bg-card rounded-3xl p-4 shadow-card border border-border hover:shadow-elegant transition">
              <video
                src="/videos/prova-social.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full rounded-2xl bg-black aspect-[9/16] object-cover"
              />
              <div className="mt-3 px-1">
                <div className="flex gap-0.5 text-[var(--brand-orange)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-sm font-semibold">Depoimento em vídeo</p>
                <p className="text-xs text-muted-foreground">Aluno FORMAX</p>
              </div>
            </div>
            <div className="bg-card rounded-3xl p-4 shadow-card border border-border hover:shadow-elegant transition">
              <img src={social2} alt="Aluno agradecendo o atendimento" className="w-full rounded-2xl" loading="lazy" />
              <div className="mt-3 px-1">
                <div className="flex gap-0.5 text-[var(--brand-orange)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-sm font-semibold">"Me sinto realizado. Muito obrigado!"</p>
                <p className="text-xs text-muted-foreground">Aluno verificado</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <WhatsAppButton source="prova-social">QUERO COMEÇAR HOJE</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-16 sm:py-20 bg-gradient-brand-soft">
        <div className="max-w-5xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--brand-magenta)]">
              Comunidade FORMAX
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">
              <span className="text-gradient-brand">+44 mil alunos</span> acompanham a FORMAX
            </h2>
            <p className="mt-4 text-muted-foreground">
              Milhares de pessoas conquistando seus diplomas e transformando suas carreiras todos os dias. Faça parte
              dessa comunidade.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
              <Stat label="Seguidores" value="44K+" />
              <Stat label="Posts" value="153" />
              <Stat label="Avaliação" value="4,9★" />
            </div>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold text-white bg-gradient-brand shadow-elegant hover:scale-[1.02] transition"
              >
                <Instagram className="h-5 w-5" /> VER INSTAGRAM
              </a>
              <WhatsAppButton source="instagram" variant="primary">
                FALAR COM A BRENDA
              </WhatsAppButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-brand opacity-30 rounded-3xl blur-2xl" />
            <img
              src={instagramImg}
              alt="Perfil oficial @formax.cursos no Instagram"
              className="relative w-full rounded-3xl shadow-elegant border border-white/40"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* URGÊNCIA */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-5">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[oklch(0.97_0.04_50)] to-[oklch(0.97_0.04_330)] border border-[var(--brand-orange)]/30 p-6 sm:p-8 shadow-card">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-cta text-white shadow-glow">
                <AlertTriangle className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl">Atendimento limitado para novos alunos</h3>
                <p className="mt-1 text-muted-foreground text-sm sm:text-base">
                  Turmas em andamento. A Brenda atende por ordem de chegada — garanta seu atendimento agora antes que
                  as vagas se encerrem.
                </p>
              </div>
              <WhatsAppButton source="urgencia" className="shrink-0">
                FALAR AGORA
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-20 sm:py-28 bg-gradient-hero text-white overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <Sparkles className="h-10 w-10 mx-auto opacity-90" />
          <h2 className="font-display font-black text-4xl sm:text-5xl mt-4 leading-tight tracking-tight">
            Fale agora com a Brenda
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Descubra a melhor forma de conquistar sua formação técnica reconhecida ou concluir seu EJA online.
            Atendimento humano, rápido e sem compromisso.
          </p>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton source="cta-final" variant="giant">
              QUERO MAIS INFORMAÇÕES NO WHATSAPP
            </WhatsAppButton>
          </div>
          <p className="mt-6 text-sm text-white/80">📱 (31) 99502-3091 • Atendimento humanizado pela Brenda</p>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" /> Empresa séria e consolidada
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Award className="h-4 w-4" /> Diploma reconhecido
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4" /> +44 mil alunos
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-foreground text-white/80">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="FORMAX" className="h-10 w-10 rounded-lg" />
            <div className="leading-tight">
              <div className="font-extrabold text-white">FORMAX</div>
              <div className="text-[10px] uppercase tracking-widest">Formação Técnica e Superior</div>
            </div>
          </div>
          <p className="text-xs text-center sm:text-right">
            © {new Date().getFullYear()} FORMAX. Todos os direitos reservados. <br className="sm:hidden" />
            Cursos reconhecidos MEC / SISTEC.
          </p>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => openWhatsApp("floating")}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-whatsapp text-white shadow-glow animate-pulse-glow hover:scale-110 transition-transform cursor-pointer"
      >
        <MessageCircle className="h-7 w-7 fill-current" strokeWidth={0} />
      </button>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl p-3 text-center border border-white/60 shadow-card">
      <div className="font-extrabold text-xl text-gradient-brand">{value}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}