import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowRight, Check, ChevronDown, Clock3, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Star, X, Zap } from 'lucide-react';
import heroImage from '../../attached_assets/generated_images/tyre-van-hero.jpg';

export const business = {
  name: 'Milemark Tyres',
  phone: '0800 048 1188',
  whatsapp: '447700900118',
  hours: 'Open 24 hours · 7 days',
  areas: 'Bedfordshire · Hertfordshire · Cambridgeshire',
};

const nav = [
  { href: '/', label: 'Home' },
  { href: '/mobile-tyre-fitting', label: 'Mobile fitting' },
  { href: '/tyre-repair', label: 'Tyre repair' },
  { href: '/tyres', label: 'Tyres' },
  { href: '/services', label: 'All services' },
  { href: '/about', label: 'About us' },
];

export function ButtonLink({ href, children, secondary = false, className = '' }: { href: string; children: ReactNode; secondary?: boolean; className?: string }) {
  return <Link href={href} data-testid={`link-${href.replace(/\//g, '') || 'home'}`} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 ${secondary ? 'border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--secondary))]' : 'bg-[hsl(var(--secondary))] text-[hsl(var(--primary))] hover:brightness-95'} ${className}`}>{children}</Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  return <header className="sticky top-0 z-40 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 backdrop-blur-md">
    <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
      <Link href="/" data-testid="link-logo" className="flex items-center gap-3" onClick={() => setOpen(false)}>
        <span className="grid size-10 place-items-center rounded-[13px] bg-[hsl(var(--primary))] text-[hsl(var(--secondary))]"><Zap className="size-5 fill-current" /></span>
        <span className="font-display text-lg font-bold tracking-tight">milemark<span className="text-[hsl(var(--accent))]">.</span></span>
      </Link>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
        {nav.map(item => <Link key={item.href} href={item.href} data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`} className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors hover:text-[hsl(var(--accent))] ${location === item.href ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--muted-foreground))]'}`}>{item.label}</Link>)}
      </nav>
      <div className="hidden items-center gap-3 lg:flex">
        <a href={`tel:${business.phone.replaceAll(' ', '')}`} data-testid="link-header-phone" className="flex items-center gap-2 text-sm font-bold"><Phone className="size-4 text-[hsl(var(--accent))]" /> {business.phone}</a>
        <ButtonLink href="/contact">Get a quote <ArrowRight className="size-4" /></ButtonLink>
      </div>
      <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu" onClick={() => setOpen(!open)} className="rounded-lg p-2 lg:hidden">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="border-t border-[hsl(var(--border))] bg-[hsl(var(--card))] px-5 py-4 lg:hidden">
      <nav className="flex flex-col gap-1" aria-label="Mobile navigation">{nav.map(item => <Link key={item.href} href={item.href} data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-semibold">{item.label}</Link>)}</nav>
      <ButtonLink href="/contact" className="mt-3 w-full">Get a quote <ArrowRight className="size-4" /></ButtonLink>
    </div>}
  </header>;
}

export function FloatingActions() {
  return <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
    <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer" data-testid="link-floating-whatsapp" aria-label="Message Milemark on WhatsApp" className="grid size-14 place-items-center rounded-full bg-[#1e9e62] text-white shadow-lg transition-transform hover:scale-105"><MessageCircle className="size-6" /></a>
    <a href={`tel:${business.phone.replaceAll(' ', '')}`} data-testid="link-floating-phone" aria-label="Call Milemark Tyres" className="grid size-14 place-items-center rounded-full bg-[hsl(var(--accent))] text-white shadow-lg transition-transform hover:scale-105"><Phone className="size-6" /></a>
  </div>;
}

export function SiteFooter() {
  return <footer className="bg-[hsl(var(--primary))] px-5 pb-28 pt-16 text-[hsl(var(--primary-foreground))] lg:px-8 lg:pb-16">
    <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
      <div><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-[13px] bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]"><Zap className="size-5 fill-current" /></span><span className="font-display text-lg font-bold">milemark<span className="text-[hsl(var(--secondary))]">.</span></span></div><p className="mt-5 max-w-xs text-sm leading-6 text-slate-300">The local crew who bring the tyre shop to you. Fast, fair and properly equipped for the real world.</p></div>
      <div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[hsl(var(--secondary))]">Explore</p>{nav.slice(1, 5).map(item => <Link key={item.href} href={item.href} data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`} className="block py-1.5 text-sm text-slate-300 hover:text-white">{item.label}</Link>)}</div>
      <div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[hsl(var(--secondary))]">Help, quickly</p><a href={`tel:${business.phone.replaceAll(' ', '')}`} data-testid="link-footer-phone" className="flex items-center gap-2 py-1.5 text-sm text-slate-300 hover:text-white"><Phone className="size-4" /> {business.phone}</a><a href={`https://wa.me/${business.whatsapp}`} data-testid="link-footer-whatsapp" className="flex items-center gap-2 py-1.5 text-sm text-slate-300 hover:text-white"><MessageCircle className="size-4" /> WhatsApp us</a><p className="mt-3 text-sm text-slate-400">{business.hours}</p></div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="font-display text-lg font-bold">Need us today?</p><p className="mt-2 text-sm leading-5 text-slate-300">Tell us where you are and what happened. We’ll get you moving.</p><ButtonLink href="/contact" className="mt-5 w-full">Request a call <ArrowRight className="size-4" /></ButtonLink></div>
    </div>
    <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-slate-400 sm:flex-row"><span>© 2024 Milemark Tyres Ltd. All rights reserved.</span><span>Serving the local roads since 2011.</span></div>
  </footer>;
}

export function PageShell({ children, title, description }: { children: ReactNode; title: string; description: string }) {
  useEffect(() => { document.title = `${title} | Milemark Tyres`; const meta = document.querySelector('meta[name="description"]') ?? document.createElement('meta'); meta.setAttribute('name', 'description'); meta.setAttribute('content', description); document.head.appendChild(meta); }, [title, description]);
  return <div className="noise min-h-[100dvh] overflow-hidden"><SiteHeader />{children}<FloatingActions /><SiteFooter /></div>;
}

export function Eyebrow({ children }: { children: ReactNode }) { return <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[hsl(var(--accent))]"><span className="h-px w-7 bg-[hsl(var(--accent))]" />{children}</p>; }

export function TrustStrip() {
  return <div className="border-y border-[hsl(var(--border))] bg-[hsl(var(--card))]"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[hsl(var(--border))] md:grid-cols-4"><div className="p-5 text-center"><p className="font-display text-2xl font-bold">13 yrs</p><p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">on local roads</p></div><div className="p-5 text-center"><p className="font-display text-2xl font-bold">4.9/5</p><p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">from 280+ reviews</p></div><div className="p-5 text-center"><p className="font-display text-2xl font-bold">45 min</p><p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">typical arrival</p></div><div className="hidden p-5 text-center md:block"><p className="font-display text-2xl font-bold">24/7</p><p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">phone support</p></div></div></div>;
}

export function Hero() {
  return <section className="relative isolate bg-[hsl(var(--primary))] text-white"><div className="absolute inset-0 -z-10 bg-cover bg-center opacity-40 mix-blend-screen" style={{ backgroundImage: `url(${heroImage})` }} /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--primary))]/90 to-[hsl(var(--primary))]/30" /><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_.72fr] lg:px-8 lg:py-28"><div className="animate-rise"><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold"><span className="size-2 rounded-full bg-[hsl(var(--secondary))]" /> Taking calls now · {business.hours}</div><h1 className="max-w-3xl font-display text-5xl font-bold leading-[.96] tracking-[-.04em] sm:text-6xl lg:text-8xl">Tyre trouble?<br /><span className="text-[hsl(var(--secondary))]">We’re on our way.</span></h1><p className="mt-7 max-w-xl text-lg leading-7 text-slate-300">Mobile tyre fitting and emergency repair across Bedfordshire, Hertfordshire and Cambridgeshire. Home, work, car park or hard shoulder — we come to you.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={`tel:${business.phone.replaceAll(' ', '')}`} data-testid="link-hero-call" className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--secondary))] px-6 py-4 font-bold text-[hsl(var(--primary))] hover:brightness-95"><Phone className="size-5" /> Call {business.phone}</a><a href={`https://wa.me/${business.whatsapp}`} data-testid="link-hero-whatsapp" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 font-bold text-white hover:bg-white/15"><MessageCircle className="size-5" /> WhatsApp a photo</a></div><div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300"><span className="flex items-center gap-2"><ShieldCheck className="size-4 text-[hsl(var(--secondary))]" /> Fully insured & equipped</span><span className="flex items-center gap-2"><Clock3 className="size-4 text-[hsl(var(--secondary))]" /> Clear price before we start</span></div></div><div className="hidden lg:block"><div className="ml-auto max-w-sm rounded-[28px] border border-white/15 bg-[hsl(var(--primary))]/70 p-6 shadow-2xl backdrop-blur-sm animate-rise delay-200"><div className="flex items-center justify-between"><span className="text-sm font-bold">Today’s roadside response</span><span className="rounded-full bg-[#1e9e62]/20 px-2.5 py-1 text-xs font-bold text-[#82e6ac]">LIVE</span></div><div className="my-7 flex items-center gap-4"><div className="grid size-14 place-items-center rounded-2xl bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]"><MapPin /></div><div><p className="font-display text-3xl font-bold">45 min</p><p className="text-sm text-slate-400">average arrival time</p></div></div><div className="space-y-3 border-t border-white/10 pt-5 text-sm"><div className="flex justify-between"><span className="text-slate-400">Next available crew</span><span className="font-bold">Unit 04 · Hitchin</span></div><div className="flex justify-between"><span className="text-slate-400">Covering</span><span className="font-bold">20 mile radius</span></div></div><ButtonLink href="/contact" className="mt-6 w-full">Book a fitting <ArrowRight className="size-4" /></ButtonLink></div></div></div></section>;
}

export const services = [
  { icon: Zap, title: 'Emergency roadside', copy: 'A puncture, blowout or warning light? We make the situation safe, then sort the tyre.', href: '/services', tag: 'Most called' },
  { icon: ShieldCheck, title: 'Mobile tyre fitting', copy: 'New tyres fitted at your home, work, car park or wherever the day has stopped you.', href: '/mobile-tyre-fitting', tag: 'Convenient' },
  { icon: Check, title: 'Puncture repair', copy: 'If your tyre can be safely repaired, we’ll tell you honestly and get you back on the road.', href: '/tyre-repair', tag: 'Save money' },
];

export function ServicesPreview() {
  return <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><Eyebrow>What we do</Eyebrow><h2 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-[-.03em] sm:text-5xl">The tyre shop that<br /><span className="text-[hsl(var(--accent))]">comes to you.</span></h2></div><ButtonLink href="/services" secondary>See every service <ArrowRight className="size-4" /></ButtonLink></div><div className="mt-12 grid gap-4 md:grid-cols-3">{services.map((item, i) => <Link href={item.href} key={item.title} data-testid={`card-service-${i}`} className={`group relative overflow-hidden rounded-[24px] border border-[hsl(var(--border))] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)] ${i === 1 ? 'bg-[hsl(var(--primary))] text-white' : 'bg-[hsl(var(--card))]'}`}><span className={`mb-14 grid size-12 place-items-center rounded-2xl ${i === 1 ? 'bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]' : 'bg-[hsl(var(--muted))] text-[hsl(var(--accent))]'}`}><item.icon className="size-6" /></span><span className="absolute right-6 top-7 text-xs font-bold uppercase tracking-wider opacity-60">{item.tag}</span><h3 className="font-display text-2xl font-bold">{item.title}</h3><p className={`mt-3 text-sm leading-6 ${i === 1 ? 'text-slate-300' : 'text-[hsl(var(--muted-foreground))]'}`}>{item.copy}</p><span className={`mt-7 inline-flex items-center gap-2 text-sm font-bold ${i === 1 ? 'text-[hsl(var(--secondary))]' : 'text-[hsl(var(--accent))]'}`}>Find out more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></section>;
}

export function HowItWorks() {
  const steps = [['01', 'Tell us where you are', 'Call, WhatsApp or book online. A photo and your location help us move faster.'], ['02', 'We bring the right tyre', 'We check size, make and condition, then give you a clear price before fitting.'], ['03', 'You get your day back', 'Our mobile workshop does the job safely, on the spot. No waiting room.']];
  return <section className="bg-[hsl(var(--primary))] px-5 py-20 text-white lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><Eyebrow>Simple by design</Eyebrow><h2 className="font-display text-4xl font-bold leading-tight tracking-[-.03em] sm:text-5xl">No towing.<br /><span className="text-[hsl(var(--secondary))]">No waiting room.</span></h2><p className="mt-5 max-w-sm leading-7 text-slate-300">We bring the tools, the stock and the calm head. You stay where you are.</p></div><div className="grid gap-0">{steps.map(([number, title, copy]) => <div key={number} className="grid grid-cols-[56px_1fr] gap-5 border-t border-white/15 py-7"><span className="font-mono text-sm text-[hsl(var(--secondary))]">{number}</span><div><h3 className="font-display text-2xl font-bold">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">{copy}</p></div></div>)}</div></div></div></section>;
}

export function ReviewBand() { return <section className="border-b border-[hsl(var(--border))] bg-[hsl(var(--secondary))] px-5 py-16 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.75fr_1.25fr] md:items-center"><div><div className="flex gap-1 text-[hsl(var(--primary))]">{[1, 2, 3, 4, 5].map(n => <Star key={n} className="size-5 fill-current" />)}</div><p className="mt-3 font-display text-2xl font-bold">“The call you hope you never need — and are glad you made.”</p><p className="mt-3 text-sm font-semibold opacity-70">Google review · 4.9 average from 280+ local customers</p></div><div className="md:border-l md:border-[hsl(var(--primary))]/20 md:pl-12"><p className="text-lg leading-8 text-[hsl(var(--primary))]">“I was stranded outside Luton airport with two children and a flat. Dan arrived earlier than promised, kept me updated, and had us moving in under 30 minutes. Properly kind service.”</p><p className="mt-4 text-sm font-bold">— Sarah M., Luton</p></div></div></section>; }

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const questions = [['How quickly can you get to me?', 'Most local call-outs are with you within 45–60 minutes. We’ll give you an honest ETA when you call, and keep you updated if traffic changes things.'], ['Can you fit tyres at my home or workplace?', 'Yes. Our vans are mobile workshops, so we can work at homes, offices, car parks, hotels and safe roadside locations across our coverage area.'], ['Do you repair punctures or always replace the tyre?', 'We inspect the damage first. If it is safe and legal to repair, we will. If not, we will explain why and show you suitable replacement options.'], ['Can I pay by card?', 'Yes. We accept contactless card, chip and PIN and most major cards. You can also ask for a written quote before we start.']];
  return <section className="mx-auto max-w-3xl px-5 py-20 lg:py-28"><div className="text-center"><Eyebrow>Good to know</Eyebrow><h2 className="font-display text-4xl font-bold tracking-[-.03em] sm:text-5xl">Questions, answered.</h2></div><div className="mt-10 divide-y divide-[hsl(var(--border))] border-y border-[hsl(var(--border))]">{questions.map(([q, a], i) => <div key={q}><button type="button" data-testid={`button-faq-${i}`} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left font-bold"><span>{q}</span><ChevronDown className={`size-5 shrink-0 text-[hsl(var(--accent))] transition-transform ${open === i ? 'rotate-180' : ''}`} /></button>{open === i && <p data-testid={`text-faq-answer-${i}`} className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{a}</p>}</div>)}</div></section>;
}