const PHONE = "(289) 933-7662";
const TEL = "tel:+12899337662";
const SMS = "sms:+12899337662";
const EMAIL = "chrisproresto@gmail.com";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Chris's%20Property%20Restoration&query_place_id=ChIJ04fFStIcXoYRHCLXXCVMd_0";

const ICONS: Record<string, string> = {
  phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
  message: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6",
  pin: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
  layers: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  bricks: "M3 3h18v18H3zM3 9h18M3 15h18M9 3v6M15 9v6M9 15v6",
  flower: "M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  tree: "M12 22v-7M17 8a5 5 0 0 0-10 0 4 4 0 0 0-1 7.9h12A4 4 0 0 0 17 8z",
  axe: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",
  sprout: "M7 20h10M10 20c5.5-2.5.8-6.4 3-10M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8zM14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
  droplet: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z",
  wrench: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  home: "M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  check: "M20 6 9 17l-5-5",
  dollar: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  handshake: "m11 17 2 2a1 1 0 1 0 3-3M14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4M21 3l1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8",
  user: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  quote: "M3 21c3 0 7-1 7-8V5H3v7h4c0 4-2 5-4 5zM14 21c3 0 7-1 7-8V5h-7v7h4c0 4-2 5-4 5z",
  arrow: "M5 12h14M12 5l7 7-7 7",
  chevron: "m6 9 6 6 6-6",
};

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" role="img" aria-label="Rated 4.8 out of 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

const services = [
  { icon: "layers", name: "Concrete & Stamped Concrete", text: "New concrete pads and decorative stamped concrete, plus repair and replacement of cracked or broken walkway sections. Poured to last and finished cleanly.", featured: true },
  { icon: "bricks", name: "Flagstone & Interlock Patios", text: "Patios and stone walkways built from natural flagstone or interlock brick. One customer still talks about how much she loves her new stone walkway." },
  { icon: "flower", name: "Garden Design, Planting & Mulch", text: "Full garden design, planting and fresh mulch, from a single tired bed to a whole yard. Beds are laid out so they look good now and fill in nicely over time." },
  { icon: "tree", name: "Tree Planting", text: "Chris sources healthy, hand-picked trees at a fair price and tells you exactly where they should go so they thrive, then plants them properly." },
  { icon: "axe", name: "Tree & Stump Removal", text: "Removal of unwanted trees, old stumps and bramble, with stump grinding to reclaim overgrown corners of the yard and make room for something new." },
  { icon: "sprout", name: "Sodding & Seeding", text: "A new lawn from fresh sod or seed, with the ground prepared first so the grass roots in and stays green." },
  { icon: "droplet", name: "Exterior Drainage", text: "Exterior drainage systems that carry water away from your foundation, patio and walkways, so the yard stays dry and the house stays protected." },
  { icon: "wrench", name: "Repairs & Spring Clean-Ups", text: "Walkway repair, deck step restoration, yard and water-feature spring clean-ups, and custom work. If it is outside and needs fixing, ask Chris." },
  { icon: "home", name: "Real-Estate Listing Prep", text: "Getting a home ready to sell? Chris tidies and refreshes the gardens and yard on your timeline so the listing photos and showings make a strong first impression." },
];

const reviews = [
  { name: "Tom F.", job: "Realtor, repeat customer", text: "I have used Chris several times at my own home and refer him to my real estate clients and neighbours. Reasonable rates, always on time, polite and respectful of the property." },
  { name: "Brieanna L.", job: "Listing prep", text: "We hired Chris to get the property ready to list. The quote was fair and accurate, the gardens looked amazing, he answered texts quickly and he finished on the agreed timeline." },
  { name: "Andrew M.", job: "Drainage & concrete walkway", text: "Chris installed an exterior drainage system and repaired and replaced concrete in our walkway. On time, on budget, and it met every expectation." },
  { name: "Alana H.", job: "Stone walkway & tree planting", text: "Quick but thorough, friendly and great at communicating. We have a lovely stone walkway and lots of new trees. Our backyard is a great place because of him." },
  { name: "Rupal T.", job: "Spring clean-up & deck steps", text: "Two projects: a spring clean-up of the yard and waterfall, then restoring the steps to our lower deck. An amazing job both times. Honest, professional and no time wasted." },
  { name: "Bruce P.", job: "Tree installation", text: "Chris found beautiful trees at a good price and knew exactly how and where to plant them." },
];

const steps = [
  { title: "Call or text Chris", text: `Reach Chris directly at ${PHONE}. Send a quick description or a photo of the yard by text.` },
  { title: "On-site look & quote", text: "Chris walks the property with you, talks through options and gives you a fair, accurate quote." },
  { title: "We do the work", text: "The job gets done on the agreed timeline, with updates by text along the way." },
  { title: "Final walk-through", text: "We walk the finished job together and clean up before leaving. Nothing is done until you are happy." },
];

const faqs = [
  { q: "What areas do you serve?", a: "Chris works in Hamilton and the surrounding area. If you are not sure whether your street is covered, call or text and ask." },
  { q: "Are estimates free?", a: `Call or text ${PHONE} to set up a time. Chris will look at the job and give you a clear, accurate quote before any work begins, so you know the price up front.` },
  { q: "Can you handle both hardscaping and planting?", a: "Yes. Concrete, flagstone and interlock patios, walkways and drainage are done by the same company that handles garden design, planting, sod and trees. One call covers the whole yard." },
  { q: "Will the job finish on time and on budget?", a: "That is what customers mention most. Reviewers describe projects finished on the agreed timeline and on budget, at fair, competitive prices." },
  { q: "Do you help get a house ready to sell?", a: "Yes. Listing prep is a regular job for us, and a local realtor refers his clients to Chris. We can tidy and refresh the gardens and yard to fit your listing date." },
  { q: "Can you remove old stumps and overgrowth?", a: "Yes. We pull out old stumps and bramble, grind stumps down, and can replant with new trees so an overgrown yard becomes usable again." },
  { q: "What is the best way to reach you?", a: `Text or call ${PHONE}. Customers say Chris replies quickly by text. You can also email ${EMAIL}.` },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: "Chris's Property Restoration",
    alternateName: "C.P.R.",
    telephone: "+1-289-933-7662",
    email: EMAIL,
    founder: { "@type": "Person", name: "Chris" },
    address: { "@type": "PostalAddress", addressLocality: "Hamilton", addressRegion: "ON", addressCountry: "CA" },
    areaServed: "Hamilton, ON and surrounding areas",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "13" },
    hasMap: MAPS,
    makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-card focus:px-4 focus:py-2">Skip to content</a>

      <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-3" aria-label="Chris's Property Restoration home">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand font-heading text-[1.05rem] font-bold text-cta">CPR</span>
            <span className="leading-tight">
              <span className="block font-heading text-[1.25rem] font-bold text-ink">Chris&apos;s Property Restoration</span>
              <span className="block text-[0.82rem] font-medium text-muted">Landscaping &amp; Concrete · Hamilton, ON</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold text-ink lg:flex">
            <a href="#services" className="hover:text-accent">Services</a>
            <a href="#reviews" className="hover:text-accent">Reviews</a>
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#faq" className="hover:text-accent">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden items-center gap-2 font-bold text-ink hover:text-accent md:flex"><Icon name="phone" className="h-5 w-5" />{PHONE}</a>
            <a href={TEL} className="btn hidden min-h-12 items-center rounded-lg bg-cta px-5 font-bold text-on-cta hover:bg-cta-dark focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand sm:inline-flex">Free Estimate</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-12 w-12 place-items-center rounded-lg bg-cta text-on-cta sm:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        {/* Hero */}
        <section id="top">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="fade-up">
              <p className="mb-4 inline-flex items-center gap-2 rounded-md bg-brand-soft px-3 py-1.5 text-[0.92rem] font-semibold text-brand">
                <Icon name="user" className="h-4 w-4" />Locally owned by Chris, serving Hamilton
              </p>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] text-ink">
                Landscaping, Patios &amp; Concrete in Hamilton, Ontario
              </h1>
              <p className="mt-5 max-w-[58ch] text-[1.15rem] text-muted">
                Stamped concrete, flagstone and interlock, gardens, trees, sod and drainage, all from one local company. Chris gives you a fair, accurate quote and finishes on time and on budget.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg bg-cta px-7 text-[1.1rem] font-bold text-on-cta hover:bg-cta-dark">
                  <Icon name="phone" className="h-5 w-5" />Call {PHONE}
                </a>
                <a href={SMS} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg border-2 border-brand px-7 text-[1.1rem] font-bold text-brand hover:bg-brand-soft">
                  <Icon name="message" className="h-5 w-5" />Text a photo of your yard
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-semibold text-ink">
                <span className="flex items-center gap-2"><Stars className="h-[18px] w-[18px]" /> 4.8 on Google</span>
                <span className="text-line" aria-hidden="true">|</span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-accent">13 Google reviews</a>
                <span className="text-line" aria-hidden="true">|</span>
                <span>On time &amp; on budget</span>
              </div>
            </div>

            <aside className="fade-up-2 rounded-2xl border border-line bg-card shadow-[0_24px_50px_-30px_oklch(0.2_0.01_260/0.5)]" aria-label="Quick facts">
              <div className="rounded-t-2xl bg-brand px-7 py-5 text-white">
                <p className="font-heading text-[1.35rem] font-bold">Quick facts</p>
                <p className="text-[0.95rem] text-white/80">What to expect when you call Chris</p>
              </div>
              <ul className="divide-y divide-line px-7">
                {[
                  { icon: "pin", t: "Service area", d: "Hamilton and surrounding areas" },
                  { icon: "dollar", t: "Pricing", d: "Fair, accurate quotes before work starts" },
                  { icon: "calendar", t: "Scheduling", d: "Finished on the agreed timeline" },
                  { icon: "message", t: "Fast replies", d: "Call, text or email, owner answers" },
                  { icon: "handshake", t: "Trusted locally", d: "Referred by a Hamilton-area realtor" },
                ].map((f) => (
                  <li key={f.t} className="flex items-start gap-4 py-4">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-accent"><Icon name={f.icon} className="h-5 w-5" /></span>
                    <span><span className="block font-bold">{f.t}</span><span className="block text-[0.96rem] text-muted">{f.d}</span></span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why Hamilton homeowners hire Chris" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "check", label: "4.8 from 13 Google reviews" },
              { icon: "user", label: "Locally owned & owner-run" },
              { icon: "dollar", label: "On time and on budget" },
              { icon: "layers", label: "Hardscape + planting, one call" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cta text-on-cta"><Icon name={t.icon} className="h-5 w-5" /></span>
                <span className="font-semibold leading-snug">{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="max-w-[64ch]">
              <p className="font-semibold text-accent">What we do</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.7rem)]">Everything your yard needs, from concrete to trees</h2>
              <p className="mt-4 text-muted">Most companies do hardscaping or planting. Chris does both, which means one person plans the patio, the drainage underneath it and the garden beside it. Here is what we handle for homeowners across Hamilton.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`lift flex flex-col rounded-xl border bg-card p-6 ${s.featured ? "border-cta-dark ring-1 ring-cta-dark" : "border-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand text-cta"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-md bg-cta px-2.5 py-1 text-[0.8rem] font-bold text-on-cta">Specialty</span>}
                  </div>
                  <h3 className="mt-5 text-[1.35rem]">{s.name}</h3>
                  <p className="mt-2 flex-1 text-[0.98rem] text-muted">{s.text}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-ink underline decoration-cta decoration-2 underline-offset-4 hover:text-accent">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-semibold text-accent">Customer reviews</p>
                <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.7rem)]">Rated 4.8 from 13 Google reviews</h2>
                <p className="mt-3 max-w-[60ch] text-muted">Hardworking, honest and a strong communicator: that is how Hamilton homeowners describe Chris, along with fair prices and jobs finished when he said they would be.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-12 shrink-0 items-center gap-2 rounded-lg border-2 border-brand bg-card px-5 font-bold text-brand hover:bg-brand-soft">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>

            <figure className="mt-12 rounded-2xl bg-brand p-8 text-white md:p-12">
              <Icon name="quote" className="h-9 w-9 text-cta" />
              <blockquote className="mt-4 max-w-[60ch] font-heading text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold leading-snug">
                Our backyard was completely overgrown with old stumps and bramble. Chris tore it all out and planted new trees he picked by hand, and now the backyard looks beautiful. A pleasure to work with, and the pricing was competitive.
              </blockquote>
              <figcaption className="mt-6 text-white/80"><span className="font-bold text-white">Winnie L.</span>, Google Local Guide · Overgrown yard transformation</figcaption>
            </figure>

            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="lift flex flex-col rounded-xl border border-line bg-card p-6">
                  <Icon name="quote" className="h-6 w-6 text-accent" />
                  <blockquote className="mt-3 flex-1">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4">
                    <span className="block font-bold">{r.name}</span>
                    <span className="block text-[0.92rem] text-muted">{r.job} · Google review</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-6 text-[0.92rem] text-muted">Reviews paraphrased from Google for length.</p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-semibold text-accent">About Chris</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.7rem)]">A Hamilton company that restores yards people stopped using</h2>
              <div className="mt-5 space-y-4 text-[1.05rem] text-muted">
                <p>Chris&apos;s Property Restoration (some customers just call it C.P.R.) is a locally owned landscape company serving Hamilton and the surrounding area. Chris handles the whole outdoor picture: the concrete and stone you walk on, the drainage underneath, and the trees, sod and gardens around it.</p>
                <p>Many jobs start with a yard that has gotten away from its owner: old stumps, bramble, a cracked walkway or water pooling near the house. Chris clears it out, fixes what is underneath, and puts back something you will actually enjoy using.</p>
                <p>Plenty of his work comes from repeat customers and referrals. One local realtor hires Chris for his own home and sends his clients and neighbours to him too. That kind of trust is earned by showing up on time, quoting honestly and treating every property with respect.</p>
              </div>
              <a href={TEL} className="btn mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-lg bg-cta px-6 font-bold text-on-cta hover:bg-cta-dark"><Icon name="phone" className="h-5 w-5" />Call Chris at {PHONE}</a>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: "dollar", title: "Fair, accurate quotes", text: "Customers say the quote matched the final bill, at prices that were reasonable and competitive." },
                { icon: "calendar", title: "Done when promised", text: "Jobs finish on the agreed timeline, including listing prep with a hard deadline." },
                { icon: "message", title: "Easy to reach", text: "Chris replies quickly by text and keeps you posted while the work is underway." },
                { icon: "home", title: "Respect for your property", text: "Customers describe Chris as polite and respectful of their home and yard." },
              ].map((d) => (
                <div key={d.title} className="rounded-xl border border-line bg-card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-accent"><Icon name={d.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-[1.25rem]">{d.title}</h3>
                  <p className="mt-1.5 text-[0.98rem] text-muted">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <p className="font-semibold text-accent">How it works</p>
            <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.7rem)]">From first call to finished yard</h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="relative rounded-xl border border-line bg-card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-cta font-heading text-[1.3rem] font-bold text-on-cta">{i + 1}</span>
                  <h3 className="mt-4 text-[1.25rem]">{s.title}</h3>
                  <p className="mt-1.5 text-[0.98rem] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-semibold text-accent">Service area</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.7rem)]">Serving Hamilton and the surrounding area</h2>
              <p className="mt-4 text-muted">Chris is based in Hamilton and works on homes across the city and nearby communities. Text your address and a short description of the job, and he will confirm he can get to you.</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {["Hamilton", "Surrounding communities"].map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-md border border-line bg-card px-4 py-2 font-semibold"><Icon name="pin" className="h-4 w-4 text-accent" />{a}</li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-card">
              <iframe title="Map of Hamilton, Ontario" src="https://maps.google.com/maps?q=Hamilton%2C%20ON&z=11&output=embed" className="h-[340px] w-full md:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <p className="font-semibold text-accent">FAQ</p>
            <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.7rem)]">Common questions</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-line bg-card">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[1.08rem] font-bold">
                    {f.q}
                    <Icon name="chevron" className="chev h-5 w-5 shrink-0 text-accent" />
                  </summary>
                  <p className="px-6 pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="bg-brand-dark text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6 md:py-20">
            <div>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.8rem)]">Ready to get your yard back?</h2>
              <p className="mt-3 max-w-[52ch] text-[1.1rem] text-white/85">Call or text Chris at {PHONE} for a fair, accurate quote on concrete, patios, trees, gardens or drainage anywhere in Hamilton.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={TEL} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg bg-cta px-7 text-[1.1rem] font-bold text-on-cta hover:bg-cta-dark"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
              <a href={`mailto:${EMAIL}`} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg border-2 border-white/70 px-7 text-[1.1rem] font-bold text-white hover:bg-white/10"><Icon name="mail" className="h-5 w-5" />Email Chris</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-bg pb-24 md:pb-0">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-4 md:px-6">
          <div>
            <p className="font-heading text-[1.3rem] font-bold">Chris&apos;s Property Restoration</p>
            <p className="mt-2 text-[0.95rem] text-muted">Locally owned landscaping, hardscaping and concrete in Hamilton, Ontario.</p>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <ul className="mt-3 space-y-2 text-[0.95rem] text-muted">
              <li><a href={TEL} className="hover:text-accent">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="break-all hover:text-accent">{EMAIL}</a></li>
              <li>Hamilton, ON</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-accent">View on Google Maps</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-bold">Services</p>
            <ul className="mt-3 grid gap-2 text-[0.95rem] text-muted sm:grid-cols-2">
              {services.map((s) => <li key={s.name}>{s.name}</li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto max-w-[1200px] px-5 py-5 text-[0.88rem] text-muted md:px-6">© {new Date().getFullYear()} Chris&apos;s Property Restoration. Serving Hamilton and surrounding areas.</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-bg/95 p-2.5 backdrop-blur md:hidden">
        <a href={TEL} className="btn flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cta font-bold text-on-cta"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={SMS} className="btn flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand font-bold text-brand"><Icon name="message" className="h-5 w-5" />Text</a>
      </div>
    </>
  );
}
