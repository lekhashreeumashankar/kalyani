'use client'

import { FormEvent, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Phone,
  Send,
  X,
} from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Electrical laminations',
    description:
      'Precision stamped laminations engineered for efficient magnetic circuits, cleaner assembly, and dependable performance.',
    detail: 'Motor & generator cores',
  },
  {
    number: '02',
    title: 'Motor stampings',
    description:
      'Rotor and stator components made to drawing, with the repeatability and finish demanded by modern electric motion.',
    detail: 'Pressed & machined parts',
  },
  {
    number: '03',
    title: 'Transformer cores',
    description:
      'Formed steel assemblies that support stable power transmission — designed, developed, and delivered as one system.',
    detail: 'Core assemblies',
  },
]


const products = [
  {
    id: '01',
    name: 'Precision Stamped Ring & Flange',
    category: 'Motor & Transmission Components',
    spec: 'High concentricity stamped ring with laser-cut mounting points',
    process: 'Multi-stage blanking & piercing on 160T press line',
    material: 'CRCA / Mild Steel',
    image: '/kalyani/1.png',
  },
  {
    id: '02',
    name: 'Automotive Mounting Bracket',
    category: 'Body & Chassis Pressed Parts',
    spec: 'Reinforced contour embossing with precision mounting holes',
    process: 'Formed on 200T mechanical press line',
    material: 'High-Tensile Sheet Metal',
    image: '/kalyani/2.png',
  },
  {
    id: '03',
    name: 'Deep Drawn Cylindrical Enclosure',
    category: 'Deep Drawn Metal Enclosures',
    spec: 'Uniform wall thickness with tight concentric tolerances',
    process: 'Hydraulic deep draw pressing & trimming',
    material: 'Deep Draw Quality Steel (DD/EDD)',
    image: '/kalyani/3.png',
  },
  {
    id: '04',
    name: 'Formed Structural Geometry Clip',
    category: 'Precision Formed Geometry',
    spec: 'Multi-angle return bends with burr-free finish',
    process: 'Progressive tooling with multi-bend stations',
    material: 'Spring Steel / CRCA',
    image: '/kalyani/4.png',
  },
  {
    id: '05',
    name: 'Electrical Rotor & Stator Core',
    category: 'Electrical Core Stampings',
    spec: 'Silicon electrical steel (CRGO/CRNGO) for high magnetic flux',
    process: 'High-speed precision blanking with tight stack interlocks',
    material: 'Electrical Grade Silicon Steel',
    image: '/kalyani/5.png',
  },
  {
    id: '06',
    name: 'Reinforced Chassis Flange',
    category: 'Automotive Press Parts',
    spec: 'Heavy-gauge pressed profile with punched precision holes',
    process: 'Heavy press blanking & CNC piercing',
    material: 'Structural Steel Plate',
    image: '/kalyani/7.png',
  },
  {
    id: '07',
    name: 'Heavy-Duty Pressed Link Plate',
    category: 'Powertrain & Suspension Parts',
    spec: 'High-fatigue tolerance plate with deburred radius contours',
    process: 'Compound die stamping on 250T press',
    material: 'Alloy Steel / EN Series',
    image: '/kalyani/8.png',
  },
  {
    id: '08',
    name: 'Formed Enclosure & Support Bracket',
    category: 'Custom Industrial Stampings',
    spec: 'Precision 90-degree flanges with slot apertures',
    process: 'Blanking, bending & projection welded studs',
    material: 'CRCA Steel (Zinc Plated)',
    image: '/kalyani/9.png',
  },
  {
    id: '09',
    name: 'Slotted Stator Lamination Assembly',
    category: 'Motor & Alternator Stampings',
    spec: 'Multi-pole winding slot geometry with stacking interlocks',
    process: 'Progressive stamping & automatic core stacking',
    material: 'Non-Oriented Silicon Steel',
    image: '/kalyani/10.png',
  },
  {
    id: '10',
    name: 'Heavy Structural Press Component',
    category: 'Heavy-Duty Stampings',
    spec: 'Automotive structural bracket engineered to withstand dynamic load',
    process: 'Tandem press line stamping & stress relief',
    material: 'High-Strength Low-Alloy Steel (HSLA)',
    image: '/kalyani/11.png',
  },
  {
    id: '11',
    name: 'Fabricated & Welded Sub-Assembly',
    category: 'Assembled Pressed Parts',
    spec: 'Pre-assembled stamped parts with SPM CO2 robotic welding',
    process: 'Robotic welding, VMC machining & inspection',
    material: 'Fabricated Steel Sub-Assembly',
    image: '/kalyani/12.png',
  },
]

export function KalyaniSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)

  function nextProduct() {
    setActiveProduct((prev) => (prev + 1) % products.length)
  }

  function prevProduct() {
    setActiveProduct((prev) => (prev - 1 + products.length) % products.length)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <section id="home" className="relative isolate min-h-[760px] overflow-hidden bg-ink">
        {/* Background Factory / Plant Image */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src="/kalyani/factory-hero-hd.jpg"
            alt="Kalyani Stampings Plant"
            className="size-full object-cover object-center"
          />
        </div>
        {/* Contrast overlay: keeps headline text crisp while making the factory clearly visible */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#251a14]/90 via-[#251a14]/65 to-black/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#251a14]/60 via-transparent to-black/40" />

        <header className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12">
          <a href="#home" className="group flex items-center transition-transform duration-200 hover:scale-[1.02]" aria-label="Kalyani Stampings home">
            <div className="flex items-center rounded-lg bg-white px-3.5 py-2 shadow-sm ring-1 ring-black/5 transition-shadow duration-200 group-hover:shadow-md">
              <img
                src="/kalyani/logo_horizontal.png"
                alt="Kalyani Stampings logo"
                className="h-9 w-auto object-contain sm:h-11"
              />
            </div>
          </a>

          <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/75 lg:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-orange" href="#about">About</a>
            <a className="transition-colors hover:text-orange" href="#capabilities">Capabilities</a>
            <a className="transition-colors hover:text-orange" href="#facilities">Facilities</a>
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2.5 rounded-lg bg-orange px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink shadow-sm transition-all duration-200 hover:bg-cream hover:shadow-md active:scale-95 sm:inline-flex"
          >
            Start a conversation <ArrowDownRight className="size-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="grid size-11 place-items-center border border-cream/30 text-cream lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </header>

        {menuOpen && (
          <nav className="absolute inset-x-6 top-24 z-20 flex flex-col gap-5 border border-orange/40 bg-ink/95 p-6 text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-2xl backdrop-blur lg:hidden" aria-label="Mobile navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
            <a href="#facilities" onClick={closeMenu}>Facilities</a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-orange px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-ink transition-all hover:bg-cream"
            >
              Start a conversation <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
          </nav>
        )}

        <div className="mx-auto flex max-w-[1440px] flex-col justify-center px-6 pb-24 pt-20 lg:min-h-[640px] lg:px-12 lg:pb-32 lg:pt-28">
          <div className="max-w-3xl">
            <p className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange">
              <span className="h-px w-12 bg-orange" /> Precision manufacturing / Since 2011
            </p>
            <h1 className="max-w-4xl font-display text-6xl leading-[0.93] tracking-[-0.04em] text-cream sm:text-7xl lg:text-[8.8rem]">
              The force behind <em className="text-orange">what moves</em> forward.
            </h1>
            <p className="mt-9 max-w-xl text-base leading-7 text-cream/70 sm:text-lg">
              Electrical laminations, motor stampings, and transformer cores shaped with the discipline of a trusted engineering partner.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#capabilities" className="inline-flex items-center gap-3 bg-orange px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-cream">
                Explore capabilities <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-orange">
                Our approach <ChevronRight className="size-4 text-orange" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-cream px-6 py-24 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.84fr_1fr] lg:gap-24">
          <div>
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-orange">The Company</p>
            <h2 className="max-w-xl font-display text-5xl leading-[0.96] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
              From concept <em className="text-orange">to completion.</em>
            </h2>
            <div className="mt-12 flex items-start gap-4 border-t border-ink/20 pt-5">
              <span className="mt-1 size-2 shrink-0 bg-orange" />
              <p className="max-w-xs text-[11px] font-bold uppercase leading-5 tracking-[0.2em] text-ink/60">Trust is the tolerance that holds everything together.</p>
            </div>
          </div>
          <div className="max-w-2xl">
            <p className="text-xl leading-8 text-ink sm:text-2xl sm:leading-9">
              Kalyani Stampings Private Limited is an IATF-16949:2016 certified manufacturing company established in 2011 — serving the growing needs of automotive and general engineering industries in India and abroad.
            </p>
            <p className="mt-7 max-w-xl text-sm leading-7 text-ink/65">
              Located near Oragadam SIPCOT in Chennai, our campus is surrounded by automotive leaders including Nissan, Ford, Hyundai, TVS, Daimler, and BMW. We move with the customer drawing: designing tools, then producing pressed, fabricated, machined, and assembly components with one accountable team.
            </p>
            <a href="#contact" className="mt-10 inline-flex items-center gap-3 border-b border-orange pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:text-orange">
              Work with Kalyani <MoveUpRight className="size-4 text-orange" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-[#403d39] px-6 py-20 text-cream sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-6 border-b border-cream/20 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-orange">Capabilities</p>
              <h2 className="max-w-2xl font-display text-4xl leading-[0.96] tracking-[-0.04em] sm:text-6xl">
                Parts that become <em className="text-orange">progress.</em>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-cream/60">
              A focused manufacturing partner for components that live inside the world&apos;s most important machines.
            </p>
          </div>

          <div className="grid gap-px bg-cream/20 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex flex-col justify-between bg-[#403d39] p-6 transition-colors duration-500 hover:bg-orange hover:text-ink sm:p-8"
              >
                <div className="flex items-center justify-between border-b border-cream/15 pb-4 transition-colors group-hover:border-ink/20">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange transition-colors group-hover:text-ink">
                    {service.detail}
                  </span>
                  <ArrowDownRight
                    className="size-4 text-cream/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-ink"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-2xl tracking-[-0.03em] sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-cream/70 transition-colors group-hover:text-ink/80 sm:text-sm">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="bg-[#2b2825] px-6 py-24 text-cream sm:py-32 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1320px]">
          {/* Section Header */}
          <div className="grid gap-8 border-b border-cream/15 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-orange">
                Infrastructure &amp; Manufacturing
              </p>
              <h2 className="font-display text-4xl leading-[0.95] tracking-[-0.03em] text-cream sm:text-6xl lg:text-7xl">
                A floor engineered for <em className="text-orange">high-precision output.</em>
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-cream/70 lg:pl-10">
              <p>
                Our 57,500 sq. ft. campus (32,000 sq. ft. built-up) in Chennai&apos;s automotive manufacturing belt operates comprehensive stamping lines, specialized SPM welding, VMC machining, and an in-house SolidWorks tool design facility.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-orange">
                <span>Mechanical &amp; Hydraulic Presses</span>
                <span className="text-cream/30">·</span>
                <span>Robotic &amp; SPM CO2 Welding</span>
                <span className="text-cream/30">·</span>
                <span>VMC &amp; CNC Turning</span>
              </div>
            </div>
          </div>



          {/* ========================================================================= */}
          {/* THE PRODUCT NAVIGATION SHOWCASE (Original services.php with Arrows) */}
          {/* ========================================================================= */}
          <div className="mt-20 rounded-2xl border border-cream/20 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 sm:p-10 lg:p-12">
            {/* Header with Navigation Controls */}
            <div className="flex flex-col justify-between gap-6 border-b border-cream/15 pb-8 sm:flex-row sm:items-end">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-orange">
                  Manufactured Components
                </span>
                <h3 className="mt-2 font-display text-3xl text-cream sm:text-4xl lg:text-5xl">
                  Pressed parts &amp; assemblies in motion.
                </h3>
                <p className="mt-2 max-w-xl text-xs text-cream/65 sm:text-sm">
                  Browse through parts manufactured across our press lines. Use the arrow buttons or select any component below.
                </p>
              </div>

              {/* Arrow Navigation Controls */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs font-semibold tracking-wider text-cream/60">
                  <strong className="text-orange">{String(activeProduct + 1).padStart(2, '0')}</strong> / {String(products.length).padStart(2, '0')}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevProduct}
                    className="grid size-11 place-items-center rounded-lg border border-cream/25 bg-white/5 text-cream transition-all duration-200 hover:border-orange hover:bg-orange hover:text-ink active:scale-95"
                    aria-label="Previous manufactured product"
                  >
                    <ChevronLeft className="size-5" />
                  </button>

                  <button
                    type="button"
                    onClick={nextProduct}
                    className="grid size-11 place-items-center rounded-lg border border-cream/25 bg-white/5 text-cream transition-all duration-200 hover:border-orange hover:bg-orange hover:text-ink active:scale-95"
                    aria-label="Next manufactured product"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Active Product Viewer */}
            <div className="mt-8 grid gap-8 rounded-xl border border-cream/10 bg-black/30 p-6 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-10">
              {/* Product Visual Showcase */}
              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cream/10 via-white/5 to-transparent p-8 sm:min-h-[360px]">
                <div className="absolute size-48 rounded-full bg-orange/15 blur-3xl" />
                <img
                  src={products[activeProduct].image}
                  alt={products[activeProduct].name}
                  className="relative z-10 max-h-64 w-auto max-w-[85%] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-110"
                />
                <span className="absolute bottom-3 left-4 font-mono text-[10px] tracking-widest text-cream/40">
                  COMPONENT {products[activeProduct].id}
                </span>
              </div>

              {/* Technical Specifications */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full bg-orange/20 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange">
                    {products[activeProduct].category}
                  </span>
                  <h4 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
                    {products[activeProduct].name}
                  </h4>
                  <p className="mt-4 text-xs leading-relaxed text-cream/75 sm:text-sm">
                    {products[activeProduct].spec}
                  </p>

                  <div className="mt-6 space-y-3 rounded-lg border border-cream/10 bg-white/5 p-4 text-xs">
                    <div className="flex justify-between border-b border-cream/10 pb-2">
                      <span className="font-semibold uppercase tracking-wider text-cream/50">Press Line</span>
                      <span className="font-medium text-cream">{products[activeProduct].process}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="font-semibold uppercase tracking-wider text-cream/50">Material Grade</span>
                      <span className="font-medium text-orange">{products[activeProduct].material}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-cream/10 pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2.5 rounded-lg bg-orange px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-ink transition-all duration-200 hover:bg-cream hover:shadow-lg active:scale-95"
                  >
                    Enquire About This Part <ArrowRight className="size-4" />
                  </a>

                  <span className="text-xs text-cream/50">
                    Custom dies &amp; tooling built to CAD drawing
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className="bg-cream px-6 py-24 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto grid max-w-[1240px] gap-16 lg:grid-cols-[0.8fr_1fr] lg:gap-28">
          <div>
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-orange">Start a conversation</p>
            <h2 className="max-w-xl font-display text-5xl leading-[0.95] tracking-[-0.04em] text-ink sm:text-7xl">
              Let&apos;s make the next part <em className="text-orange">matter.</em>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-7 text-ink/65">
              Tell us what you are building. Our team will get back to you with the right next step.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-start justify-center border border-orange bg-orange/10 p-8 sm:p-12">
                <span className="grid size-12 place-items-center bg-orange text-ink">
                  <Check className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-8 font-display text-4xl text-ink">Message received.</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-ink/70">
                  Thank you for reaching out. Managing Director M. Radhakrishnan and our engineering team will review your specifications and get in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange underline underline-offset-4 hover:text-ink"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <label className="block border-b border-ink/20 py-5">
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">Your name</span>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full bg-transparent text-lg text-ink outline-none placeholder:text-ink/25"
                    placeholder="Full name or company"
                  />
                </label>
                <label className="block border-b border-ink/20 py-5">
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">Work email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full bg-transparent text-lg text-ink outline-none placeholder:text-ink/25"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block border-b border-ink/20 py-5">
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">What are you making?</span>
                  <textarea
                    required
                    name="message"
                    rows={3}
                    className="w-full resize-none bg-transparent text-lg text-ink outline-none placeholder:text-ink/25"
                    placeholder="A little about your project, part specifications, or volume..."
                  />
                </label>
                <button
                  type="submit"
                  className="mt-8 inline-flex items-center gap-3 bg-ink px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-orange hover:text-ink"
                >
                  Send enquiry <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-warmblack px-6 pt-16 pb-12 text-cream/70 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          {/* Main Footer Grid */}
          <div className="grid gap-12 pb-14 border-b border-cream/10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:gap-16">
            {/* Col 1: Brand & Navigation */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center rounded-md bg-white px-3 py-1.5 shadow-sm">
                  <img
                    src="/kalyani/logo_horizontal.png"
                    alt="Kalyani Stampings Private Limited"
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <p className="mt-5 max-w-sm text-xs leading-relaxed text-cream/60">
                  Precision electrical laminations, motor stampings, and deep drawn metal components engineered with discipline since 2011.
                </p>
              </div>


            </div>

            {/* Col 2: Direct Contact / Leadership */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-orange">
                Executive Leadership
              </p>
              <h3 className="mt-3 font-display text-xl text-cream">M. Radhakrishnan</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-cream/50">Managing Director</p>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+919840349875"
                  className="group flex items-center gap-3 text-xs text-cream/80 transition-colors hover:text-orange"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/5 text-orange transition-colors group-hover:bg-orange group-hover:text-ink">
                    <Phone className="size-3.5" />
                  </span>
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-cream/40">Direct Mobile</span>
                    <span className="font-semibold text-cream group-hover:text-orange">+91 98403 49875</span>
                  </div>
                </a>

                <a
                  href="mailto:ceo@kalyanistampings.com"
                  className="group flex items-center gap-3 text-xs text-cream/80 transition-colors hover:text-orange"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/5 text-orange transition-colors group-hover:bg-orange group-hover:text-ink">
                    <Mail className="size-3.5" />
                  </span>
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-cream/40">Direct Email</span>
                    <span className="font-semibold text-cream group-hover:text-orange">ceo@kalyanistampings.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Col 3: Works & Plant Campus */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-orange">
                Works &amp; Plant Campus
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-cream">
                Kalyani Stampings Private Limited
              </p>

              <div className="mt-4 space-y-3.5 text-xs text-cream/70">
                <div className="flex items-start gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/5 text-cream/60">
                    <MapPin className="size-3.5" />
                  </span>
                  <p className="leading-relaxed">
                    2/99, Perinjambakkam Main Road,<br />
                    Rajiv Gandhi 1st Main Road,<br />
                    169, Koolangalcherry Village, Sriperumbudur Taluk,<br />
                    Kanchipuram District – 601105,<br />
                    Chennai, Tamil Nadu, India.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/5 text-cream/60">
                    <Building2 className="size-3.5" />
                  </span>
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-cream/40">Plant Phone</span>
                    <a href="tel:+919244926789" className="font-semibold text-cream transition-colors hover:text-orange">
                      +91 92449 26789
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kalyani+Stampings+Private+Limited+Sriperumbudur+Kanchipuram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-cream/15 bg-white/5 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-orange transition-all hover:border-orange/50 hover:bg-orange/10 hover:text-cream"
                >
                  View on Google Maps <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col gap-4 pt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© Kalyani Stampings Private Limited</p>
            <div className="flex gap-6">
              <a href="#home" className="transition-colors hover:text-orange">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
