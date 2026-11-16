import Image from "next/image";

const email = "zanele@lioness.org";
const sponsorLink = `mailto:${email}?subject=${encodeURIComponent("Lioness.Org sponsorship enquiry")}`;
const involvementLink = `mailto:${email}?subject=${encodeURIComponent("Getting involved with Lioness.Org")}`;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Logo() {
  return (
    <Image
      src="/images/lioness-logo.png"
      width={192}
      height={69}
      alt="Lioness.Org"
      className="brand-image"
      unoptimized
    />
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Lioness.Org home">
            <Logo />
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#work">Our work</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="button button-header" href="#get-involved">
            Get involved <Arrow diagonal />
          </a>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="shell hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Menstrual dignity in Southern Africa</p>
            <h1 id="hero-title">Girls’ dignity<br /><em>matters.</em></h1>
            <p className="hero-description">
              Every girl deserves access to period products and a safe space to
              talk about her health. Lioness.Org works with girls and young women
              to make both possible.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#sponsor">
                Sponsor a child <Arrow diagonal />
              </a>
              <a className="inline-link" href="#work">Explore our work <Arrow /></a>
            </div>
          </div>
          <figure className="hero-figure">
            <div className="hero-photo">
              <Image
                src="/images/dignity-hero.webp"
                alt="Three young women sharing a conversation outdoors"
                fill
                unoptimized
                preload
              />
            </div>
            <figcaption>Illustrative image</figcaption>
          </figure>
        </section>

        <section className="mission" id="about" aria-labelledby="mission-title">
          <div className="shell mission-inner">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" /> What we do</p>
              <h2 id="mission-title">Making space<br />for <em>dignity.</em></h2>
            </div>
            <div className="mission-copy">
              <p>
                When money is tight, period products can be hard to afford.
                Stigma can make it just as hard to ask for support. We bring
                practical help and open conversations together.
              </p>
              <div className="mission-pillars">
                <div>
                  <h3>Period products</h3>
                  <p>Dignity packs help girls and young women get the supplies they need.</p>
                </div>
                <div>
                  <h3>Community dialogues</h3>
                  <p>Girls and young women share their experiences and discuss what would help.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="shell work section-space" id="work" aria-labelledby="work-title">
          <div className="work-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> From our work · May 2021</p>
            <h2 id="work-title">Dignity through<br />the pandemic</h2>
            <p>
              As COVID-19 put household budgets under pressure, Lioness.Org
              distributed menstrual hygiene packs in Cape Town, Harare and
              Bulawayo. In community conversations, girls and young women spoke
              about the cost of period products, cultural taboos and the stress
              of managing their periods.
            </p>
          </div>
          <dl className="impact">
            <div>
              <dt>Menstrual hygiene packs distributed</dt>
              <dd>30</dd>
            </div>
            <div>
              <dt>Communities reached</dt>
              <dd>3</dd>
            </div>
          </dl>
        </section>

        <section className="support section-space" id="get-involved" aria-labelledby="support-title">
          <div className="shell">
            <p className="eyebrow"><span className="eyebrow-dot" /> Get involved</p>
            <h2 id="support-title">Support the work.</h2>
            <div className="support-grid">
              <article className="support-card support-sponsor" id="sponsor">
                <h3>Sponsor a child</h3>
                <p>Ask how sponsorship can help girls access period products and menstrual health support.</p>
                <a className="button button-primary" href={sponsorLink}>
                  Email about sponsorship <Arrow diagonal />
                </a>
              </article>
              <article className="support-card">
                <h3>Volunteer or partner</h3>
                <p>Tell us about the time, skills or resources you’d like to contribute to Lioness.Org.</p>
                <a className="button button-outline" href={involvementLink}>
                  Email about getting involved <Arrow diagonal />
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="shell footer-inner">
          <a className="brand" href="#top" aria-label="Lioness.Org home"><Logo /></a>
          <div className="footer-contact">
            <p className="eyebrow">Contact Lioness.Org</p>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <a className="inline-link back-to-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  );
}
