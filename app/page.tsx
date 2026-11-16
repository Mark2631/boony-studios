import BookingPlanner from "@/components/booking-planner"

const services = [
  { number: "01", title: "Photography", text: "Portraits, weddings, celebrations, and the little in-between moments worth keeping.", image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1100&q=85", alt: "A couple sharing a wedding day moment" },
  { number: "02", title: "Film & video", text: "Cinematic wedding films, event highlights, and brand stories made to feel like you.", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1100&q=85", alt: "A filmmaker capturing a celebration" },
  { number: "03", title: "The full production", text: "Drone coverage, livestreaming, custom frames, and branded tees—all in one place.", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1100&q=85", alt: "A beautifully styled wedding reception" },
]

const notes = [
  { quote: "They caught the moments we didn’t even know were happening. Looking through our photos felt like reliving the whole day.", name: "A & M", detail: "Wedding, Meru" },
  { quote: "One team handled the photos, the film, and the livestream for family abroad. We could just enjoy our day.", name: "J & W", detail: "Wedding, Nanyuki" },
  { quote: "From the first call to the final gallery, the whole process felt personal. The pictures are everything.", name: "N. K.", detail: "Portrait session, Meru" },
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Boony Studios home"><span className="wordmark-icon">b.</span><span>BOONY <i>STUDIOS</i></span></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#work">Our work</a><a href="#services">What we do</a><a href="#about">Our approach</a></nav>
        <a className="header-cta" href="#booking">Plan your day <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" role="img" aria-label="Newlyweds sharing a golden-hour moment in the Kenyan highlands" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> MERU, KENYA · EST. WITH HEART</p>
          <h1>Your moments.<br /><em>Held forever.</em></h1>
          <p className="hero-copy">Photography and films for the days you’ll talk about for the rest of your life.</p>
          <a className="button button-light" href="#booking">Tell us what you’re planning <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-caption"><span>01 / 04</span><span>WEDDINGS · CELEBRATIONS · REAL LIFE</span></div>
        <div className="hero-side-note">MERU · NANYUKI · EVERYWHERE YOUR STORY GOES</div>
      </section>

      <section className="intro-strip" id="about">
        <span className="intro-label">GOOD DAYS<br />DESERVE TO LAST</span>
        <p>We’re a close-knit photo and film studio in Meru, making honest, beautiful work—and making it easy to bring your whole event together.</p>
        <a className="text-link" href="#services">Get to know us <span aria-hidden="true">↗</span></a>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="section-heading"><div><p className="eyebrow">ONE TEAM. EVERY DETAIL.</p><h2>Everything your day<br />needs to <em>be remembered.</em></h2></div><p className="section-aside">Great events are a lot to coordinate.<br />Your photo and film shouldn’t be.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-image-wrap"><img src={service.image} alt={service.alt} /><span className="service-number">{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><a className="text-link" href="#booking">Let’s talk <span aria-hidden="true">↗</span></a></article>)}</div>
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-copy"><p className="eyebrow"><span className="eyebrow-dot" /> YOUR FIRST STEP</p><h2>Less back-and-forth.<br /><em>More looking forward.</em></h2><p className="booking-description">Tell us a little about your event. We’ll have the right details to start putting together a thoughtful quote—no guessing, no long email chains.</p><div className="booking-promise"><span className="promise-mark">✓</span><span><strong>One team, one conversation.</strong><br />Photo, film, drone, livestream & print.</span></div><div className="booking-contact"><span>Rather talk first?</span><a href="tel:+254790903246">+254 790 903246</a></div></div>
        <BookingPlanner />
      </section>

      <section className="work-section section-pad" id="work"><div className="section-heading work-heading"><div><p className="eyebrow">THE FEELING STAYS</p><h2>Real people.<br /><em>Really good days.</em></h2></div><a className="text-link" href="https://www.instagram.com/bony_production/" target="_blank" rel="noreferrer">Find us on Instagram <span aria-hidden="true">↗</span></a></div><div className="work-grid"><img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85" alt="Wedding couple walking together outdoors" /><img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85" alt="Friends celebrating together at a wedding" /><img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85" alt="A warm, intimate wedding reception" /></div><p className="work-note">A FEW FAVOURITE FRAMES, FROM HERE AND EVERYWHERE AROUND IT.</p></section>

      <section className="testimonials-section"><div className="testimonials-title"><p className="eyebrow">KIND WORDS, KEPT CLOSE</p><h2>From the people<br />who were <em>there.</em></h2></div><div className="testimonial-grid">{notes.map((note) => <figure className="testimonial" key={note.name}><span className="quote-mark">“</span><blockquote>{note.quote}</blockquote><figcaption><strong>{note.name}</strong><span>{note.detail}</span></figcaption></figure>)}</div></section>

      <section className="closing-cta"><div><p className="eyebrow">WE’D LOVE TO HEAR ABOUT IT</p><h2>What are we<br /><em>celebrating?</em></h2></div><a className="button button-dark" href="#booking">Let’s make a plan <span aria-hidden="true">↗</span></a></section>

      <footer className="site-footer"><a className="wordmark footer-wordmark" href="#top"><span className="wordmark-icon">b.</span><span>BOONY <i>STUDIOS</i></span></a><div className="footer-location"><strong>Find us</strong><span>Meru–Nanyuki Highway<br />Makutano, Meru, Kenya</span></div><div className="footer-location"><strong>Say hello</strong><a href="tel:+254790903246">+254 790 903246</a><a href="https://wa.me/254790903246" target="_blank" rel="noreferrer">WhatsApp us ↗</a></div><div className="footer-social"><a href="https://www.instagram.com/bony_production/" target="_blank" rel="noreferrer">Instagram ↗</a><span>© {new Date().getFullYear()} Boony Photography Studios & Events</span></div></footer>
    </main>
  )
}
