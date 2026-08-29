import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { Icon } from "./icons.jsx";
import {
  asset,
  faqItems,
  heroVideos,
  posterFan,
  projectCards,
  services,
  team,
} from "./data.js";

const mediaShouldAutoplay =
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
  !new URLSearchParams(window.location.search).has("capture");

function useScrollPopEffects(routeKey) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) return undefined;

    const popTargets = [...document.querySelectorAll("[data-scroll-pop]")];
    let animationFrame = 0;

    const revealTarget = (target) => {
      if (target.classList.contains("is-scroll-pop-visible")) return;
      target.classList.add("is-scroll-pop-visible");
      observer.unobserve(target);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) revealTarget(entry.target);
      });
    }, { threshold: 0.5 });

    const revealVisibleTargets = () => {
      animationFrame = 0;
      popTargets.forEach((target) => {
        if (target.classList.contains("is-scroll-pop-visible")) return;
        const bounds = target.getBoundingClientRect();
        const visibleHeight = Math.max(0, Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, 0));
        if (bounds.height > 0 && visibleHeight / bounds.height >= 0.5) revealTarget(target);
      });
    };

    const scheduleVisibilityCheck = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(revealVisibleTargets);
    };

    popTargets.forEach((target) => {
      target.classList.add("is-scroll-pop-ready");
      observer.observe(target);
    });

    window.addEventListener("scroll", scheduleVisibilityCheck, { passive: true });
    window.addEventListener("resize", scheduleVisibilityCheck);
    scheduleVisibilityCheck();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleVisibilityCheck);
      window.removeEventListener("resize", scheduleVisibilityCheck);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [routeKey]);
}

function Logo({ className = "" }) {
  return <img className={`logo ${className}`} src={asset("logo.svg")} alt="Viralup" />;
}

function HeaderLogo() {
  return (
    <span className="header-logo" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="3.75" cy="18.75" r="2.25" />
          <circle cx="9" cy="9" r="2.25" />
          <circle cx="15" cy="15" r="2.25" />
          <circle cx="20.25" cy="5.25" r="2.25" />
          <path d="M6.32 14.77 7.93 11.98M10.59 10.59 13.41 13.41M16.07 13.02 19.18 7.23" />
        </g>
      </svg>
      <span>Viralup</span>
    </span>
  );
}

function MetricIcon({ index }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <rect x="1.5" y="3" width="13" height="10" rx="1.5" />
        <path d="m6.5 6 3.5 2-3.5 2Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="m3 2.5 4.8 10.2 1.3-3.8 3.8-1.3Z" />
        <path d="M10.5 1.5v2M14.5 5.5h-2M13.3 2.7l-1.5 1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="5.25" />
      <circle cx="8" cy="8" r="1.75" />
      <path d="M8 1v2M15 8h-2M8 15v-2M1 8h2" />
    </svg>
  );
}

function ServiceSparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5.752.23 5.128 2.09a6.3 6.3 0 0 1-3.03 3.031l-1.88.626a.316.316 0 0 0 0 .601l1.88.625a6.25 6.25 0 0 1 3.006 3.008l.625 1.883a.316.316 0 0 0 .601 0l.648-1.86a6.25 6.25 0 0 1 3.005-3.007l1.882-.625a.316.316 0 0 0 0-.602l-1.859-.649A6.3 6.3 0 0 1 6.978 2.09L6.353.207a.316.316 0 0 0-.601.023Z"
        transform="translate(9.168 3.352)"
      />
      <path
        d="m4.109.164-.446 1.329A4.5 4.5 0 0 1 1.5 3.658l-1.345.447a.226.226 0 0 0 0 .429l1.345.447a4.47 4.47 0 0 1 2.146 2.148l.446 1.345a.226.226 0 0 0 .429 0l.463-1.328A4.47 4.47 0 0 1 7.13 4.998l1.345-.447a.226.226 0 0 0 0-.429l-1.328-.464a4.5 4.5 0 0 1-2.163-2.165L4.538.148a.226.226 0 0 0-.429.016Z"
        transform="translate(2.75 12.018)"
      />
    </svg>
  );
}

function PlanIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.39 17.46a3.36 3.36 0 0 1-3.88 2.74 3.38 3.38 0 0 1-2.71-3.91L6.15 2.87a.75.75 0 0 1 .86-.61l5.13.91a.75.75 0 0 1 .6.87Z" />
      <circle cx="7.13" cy="16.88" r="1.13" fill="currentColor" stroke="none" />
      <path d="M7.13 20.25h13.88a.75.75 0 0 0 .75-.75v-4.86M7.13 20.25c.39 0 .77-.07 1.14-.2l12.99-4.71a.75.75 0 0 0 .45-.96l-1.79-4.9a.75.75 0 0 0-.96-.44l-7.57 2.75" />
    </svg>
  );
}

function PauseBarsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4.5" y="3.75" width="5.25" height="16.5" rx="0.75" />
      <rect x="14.25" y="3.75" width="5.25" height="16.5" rx="0.75" />
    </svg>
  );
}

function AccentTitle({ children, align = "center", className = "" }) {
  return <h2 className={`section-title section-title--${align} ${className}`}>{children}</h2>;
}

function Video({ src, className = "", label = "Campaign video", style }) {
  const poster = src.replace("/assets/viralup/", "/assets/viralup/posters/").replace(".mp4", ".jpg");

  return (
    <video
      className={className}
      style={style}
      src={src}
      poster={poster}
      aria-label={label}
      autoPlay={mediaShouldAutoplay}
      muted
      loop
      playsInline
      preload={mediaShouldAutoplay ? "metadata" : "none"}
    />
  );
}

function Header({ menuOpen, setMenuOpen, isContactPage = false }) {
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      menuButtonRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen, setMenuOpen]);

  const pageRoot = isContactPage ? "/" : "";
  const navigationLinks = [
    ["About us", `${pageRoot}#about`],
    ["How we work", `${pageRoot}#process`],
    ["Our Projects", `${pageRoot}#projects`],
    ["Our Services", `${pageRoot}#services`],
    ["Pricing Plan", `${pageRoot}#pricing`],
    ["Our team", `${pageRoot}#team`],
    ["Testimonials", `${pageRoot}#testimonials`],
    ["Contact us", "/contact-us"],
  ];

  return (
    <>
      <div className={`site-nav-layer${isContactPage ? " contact-page-nav" : ""}`}>
        <header className="site-header">
          <button
            className="icon-button menu-button"
            type="button"
            ref={menuButtonRef}
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <svg className="header-menu-icon" viewBox="0 0 22 22" aria-hidden="true">
              <path d="M3 7.5h16M3 14.5h16" />
            </svg>
          </button>
          <a className="header-logo-link" href="/" aria-label="Viralup home">
            <HeaderLogo />
          </a>
          <a className="button button--blue header-cta" href="/contact-us">
            Contact us
          </a>
        </header>
      </div>

      {menuOpen && (
        <div className="menu-expanded" aria-label="Expanded navigation">
          <button className="menu-expanded-scrim" type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />
          <div className="menu-expanded-panel">
            <div className="menu-expanded-header">
              <button
                className="icon-button menu-expanded-close"
                type="button"
                aria-label="Close navigation"
                autoFocus
                onClick={() => setMenuOpen(false)}
              >
                <Icon name="close" size={22} strokeWidth={2} />
              </button>
              <a className="header-logo-link" href="/" aria-label="Viralup home" onClick={() => setMenuOpen(false)}>
                <HeaderLogo />
              </a>
              <a className="button button--blue header-cta menu-expanded-cta" href="/contact-us" onClick={() => setMenuOpen(false)}>
                Contact us
              </a>
            </div>

            <div className="menu-expanded-content">
              <img
                className="menu-expanded-image"
                src={asset("navigation-portrait.png")}
                alt="Stylish person in white sunglasses holding a smartphone"
              />
              <div className="menu-expanded-details">
                <div className="menu-link-group">
                  <h2>Navigation</h2>
                  <nav aria-label="Primary navigation">
                    {navigationLinks.map(([label, href]) => (
                      <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
                    ))}
                  </nav>
                </div>
                <div className="menu-follow-group">
                  <h2>Follow us</h2>
                  <div className="menu-socials">
                    <a href="https://dribbble.com/" target="_blank" rel="noreferrer" aria-label="Dribbble"><Icon name="dribbble" size={20} /></a>
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={20} /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" size={20} /></a>
                    <a href="https://x.com/home" target="_blank" rel="noreferrer" aria-label="X"><Icon name="x" size={20} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Hero() {
  const mediaRef = useRef(null);
  const [reelRunning, setReelRunning] = useState(mediaShouldAutoplay);
  const reelVideos = [...heroVideos, ...heroVideos, ...heroVideos];

  useEffect(() => {
    const media = mediaRef.current;
    if (!media || !mediaShouldAutoplay) return undefined;

    let inView = true;
    const syncPlayback = () => {
      const shouldRun = inView && document.visibilityState === "visible";
      setReelRunning(shouldRun);
      media.querySelectorAll("video").forEach((video) => {
        if (shouldRun) video.play().catch(() => {});
        else video.pause();
      });
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    }, { rootMargin: "160px 0px", threshold: 0.01 });

    observer.observe(media);
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="engagement-badge">
          <span className="avatar-stack" aria-hidden="true">
            {[1, 2, 3].map((number) => (
              <img key={number} src={asset(`avatar-${number}.png`)} alt="" />
            ))}
          </span>
          <strong>10x</strong> Engagement
        </div>
        <h1>Turn social <em>engagement</em><br />into real growth</h1>
        <p>We help businesses grow their social media presence<br className="desktop-only" /> increase engagement &amp; build brand authority</p>
        <div className="hero-actions">
          <a className="button button--blue" href="#projects">See our work</a>
          <a className="button button--white" href="#pricing">View pricing</a>
        </div>
      </div>

      <div ref={mediaRef} className="hero-media" aria-label="Selected campaign work">
        <div className={`video-rail ${reelRunning ? "is-running" : "is-paused"}`} aria-hidden="true">
          {reelVideos.map((video, index) => (
            <Video key={`${video}-${index}`} src={video} className="rail-video" label="" />
          ))}
        </div>
        <div className="phone-frame" aria-label="Featured mobile campaign">
          <span className="phone-island" aria-hidden="true" />
          <Video src={asset("UJ4jBT0nSwEu7j1G6D16IRrwOc.mp4")} className="phone-video" label="Featured product campaign" />
        </div>
      </div>

      <div className="partners">
        <span>Growth Partners</span>
        <div className="partner-row" aria-label="Growth partners">
          <div className="partner-track">
            {[0, 1].map((group) => (
              <div className="partner-group" key={group} aria-hidden={group === 1 ? "true" : undefined}>
                {[1, 2, 3, 4, 5].map((number) => (
                  <img key={`${group}-${number}`} src={asset(`partner-${number}.svg`)} alt="" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["Strategy planning", "We analyze your brand goals audience trends and platforms to create a social strategy."],
    ["Content creation", "We design content that fits your brand voice and attracts people across social platforms."],
    ["Growth optimization", "We track performance test ideas & improve campaigns to increase reach engagement & growth."],
  ];

  return (
    <section className="section process-section" id="process">
      <div className="section-label"><span aria-hidden="true" />How we work</div>
      <AccentTitle className="process-title">Our process <em>drives</em><br />real social growth</AccentTitle>
      <div className="process-panel content-width" data-scroll-pop>
        <div className="process-list">
          {steps.map(([title, description]) => (
            <article key={title}>
              <span className="solid-dot" aria-hidden="true" />
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
        <div className="process-images" aria-label="Content creators at work">
          <img src={asset("process-selfie.png")} alt="Two people taking a campaign selfie" />
          <img src={asset("process-creator.png")} alt="A creator working with a phone" />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-label"><span aria-hidden="true" />Our Projects</div>
      <AccentTitle className="projects-title">Explore the <em>creative</em><br />work behind Viralup</AccentTitle>
      <div className="project-grid content-width">
        {projectCards.map((project, index) => (
          <article
            className="project-card"
            data-scroll-pop
            key={project.name}
            style={{ "--scroll-pop-delay": `${Math.floor(index / 2) * 100}ms` }}
          >
            <div className="project-media">
              <Video src={project.video} label={`${project.name} campaign`} />
              <div className="project-metrics" aria-hidden="true">
                {project.metrics.map((metric, index) => (
                  <span className="project-metric" key={metric}>
                    <MetricIcon index={index} />
                    <strong>{metric}</strong>
                  </span>
                ))}
              </div>
            </div>
            <div className="project-caption">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-grid content-width">
        <img className="about-image" data-scroll-pop src={asset("mission-woman.png")} alt="A smiling creator holding a green phone" />
        <div className="about-copy" data-scroll-pop>
          <div className="about-copy-top">
            <div className="section-label about-label"><span aria-hidden="true" />Our mission</div>
            <div className="about-story">
              <AccentTitle align="left" className="about-title">The belief <em>Powering</em><br />modern brand success</AccentTitle>
              <p>We believe that strong strategies creative content and consistent execution together drive meaningful engagement build brand authority and ensure lasting social growth.</p>
            </div>
          </div>
          <div className="stat-row">
            <div><strong>78%</strong><span>Engagement Rate</span></div>
            <div><strong>150K</strong><span>Follower Growth</span></div>
          </div>
        </div>

        <div className="about-copy about-copy--vision" data-scroll-pop style={{ "--scroll-pop-delay": "100ms" }}>
          <div className="about-copy-top">
            <div className="section-label about-label"><span aria-hidden="true" />Our vision</div>
            <div className="about-story">
              <AccentTitle align="left" className="about-title">The goal <em>leading</em><br />innovation &amp; growth</AccentTitle>
              <p>We focus on fueling innovation and growth by creating meaningful strategies engaging experiences and powerful campaigns that elevate brands to new heights.</p>
            </div>
          </div>
          <div className="stat-row">
            <div><strong>95%</strong><span>Client Satisfaction</span></div>
            <div><strong>32+</strong><span>Team Members</span></div>
          </div>
        </div>
        <img className="about-image about-image--vision" data-scroll-pop style={{ "--scroll-pop-delay": "100ms" }} src={asset("vision-duo.png")} alt="Two creators comparing campaign content on their phones" />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-label"><span aria-hidden="true" />Our services</div>
      <AccentTitle className="services-title">We provide <em>services</em><br />that elevate growth</AccentTitle>
      <div className="services-grid content-width">
        {services.map((service, index) => (
          <article
            className="service-card"
            data-scroll-pop
            key={service.title}
            style={{ "--scroll-pop-delay": `${Math.floor(index / 3) * 100}ms` }}
          >
            <h3><span className="service-icon"><ServiceSparkleIcon /></span>{service.title}</h3>
            <div className="service-tags">
              {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <img src={service.image} alt="" />
          </article>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const [popular, setPopular] = useState(false);
  const features = [
    "24/7 Support", "Analytics Dashboard", "Growth Insights", "Campaign Recommendations",
    "Engagement Reports", "Trend Alerts", "Monthly Review", "Platform Optimization",
    "Audience Insights", "Performance Score",
  ];

  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-label"><span aria-hidden="true" />Pricing</div>
      <AccentTitle className="pricing-title">Discover the <em>package</em><br />{" "}for best results</AccentTitle>
      <div className="pricing-wrap content-width">
        <aside className="pause-card" data-scroll-pop>
          <span><PauseBarsIcon /> Pause or cancel anytime</span>
          <img src={asset("pricing-arrow.png")} alt="" />
          <p>Easily pause or cancel your subscription anytime</p>
        </aside>
        <article className="plan-card" data-scroll-pop>
          <div className="plan-intro">
            <div className="plan-copy">
              <span className="plan-label"><PlanIcon /> Basic Plan</span>
              <div className="price"><strong>$2,999</strong><span>/Monthly</span></div>
              <p>Perfect for small brands seeking professional social media support and content creation.</p>
            </div>
            <button
              type="button"
              className="plan-switch"
              role="switch"
              aria-checked={popular}
              onClick={() => setPopular((value) => !value)}
            >
              <span>Basic</span><i className={popular ? "is-popular" : ""} /><span>Popular</span>
            </button>
          </div>
          <a href="#contact" className="button button--black button--wide">Contact us</a>
          <ul className="feature-list">
            {features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </article>
        <div className="call-banner" data-scroll-pop style={{ "--scroll-pop-delay": "100ms" }}>
          <h3>Schedule a call<br />with our experts</h3>
          <ul><li>Free Consultation</li><li>Growth Strategy</li><li>Expert Guidance</li></ul>
          <a className="button button--white" href="#contact">Talk with team</a>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section team-section" id="team">
      <div className="section-label"><span aria-hidden="true" />Our team</div>
      <AccentTitle className="team-title">Experts behind <em>every</em><br />successful campaign</AccentTitle>
      <div className="team-grid content-width">
        {team.map((person, index) => (
          <article
            className="team-card"
            data-scroll-pop
            key={person.name}
            style={{ "--scroll-pop-delay": `${Math.floor(index / 2) * 100}ms` }}
          >
            <img src={person.image} alt={`${person.name}, ${person.role}`} />
            <div className="team-copy">
              <span className="role-chip"><i aria-hidden="true" />{person.role}</span>
              <h3>{person.name}</h3>
              <p>{person.description}</p>
              <div className="social-row">
                {[["linkedin", "LinkedIn"], ["instagram", "Instagram"], ["x", "X"]].map(([icon, label]) => (
                  <a key={label} href="#contact" aria-label={`${person.name} on ${label}`}><Icon name={icon} size={14} /></a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function StarRating({ rating = 5, light = false }) {
  return (
    <span className={`star-rating${light ? " star-rating--light" : ""}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 24 24" aria-hidden="true" className={index < rating ? "is-filled" : ""}>
          <path d="m12 2.75 2.8 5.68 6.27.91-4.54 4.42 1.07 6.25L12 17.06l-5.6 2.95 1.07-6.25-4.54-4.42 6.27-.91Z" />
        </svg>
      ))}
    </span>
  );
}

function TestimonialCard({ quote, name, role, rating }) {
  return (
    <article className="testimonial-card">
      <StarRating rating={rating} />
      <p>{quote}</p>
      <div className="testimonial-byline"><strong>{name}</strong><i aria-hidden="true" /><span>{role}</span></div>
    </article>
  );
}

function Testimonials() {
  const sectionRef = useRef(null);
  const [tickerActive, setTickerActive] = useState(false);
  const leftReviews = [
    { rating: 5, quote: '"Viralup helped our brand grow faster with clear strategy better content and consistent social engagement results"', name: "James Carter", role: "Manager" },
    { rating: 4, quote: '“Their team delivered strong results improved engagement and made our social presence more professional and trustworthy"', name: "Olivia Bennett", role: "Brand Director" },
  ];
  const rightReviews = [
    { rating: 4, quote: '“We saw noticeable growth better engagement and clearer direction across all our campaigns within weeks consistently"', name: "Sophia Reed", role: "Growth Lead" },
    { rating: 5, quote: 'The strategy support and insights helped our brand stay active relevant and competitive in digital markets"', name: "Michael Adams", role: "Business Owner" },
  ];

  useEffect(() => {
    if (!mediaShouldAutoplay || !sectionRef.current) return undefined;

    let inView = false;
    const update = () => setTickerActive(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    }, { threshold: 0.05 });

    observer.observe(sectionRef.current);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <section className="section testimonials-section" id="testimonials" ref={sectionRef}>
      <div className="section-label"><span aria-hidden="true" />Testimonials</div>
      <AccentTitle className="testimonials-title">Words from <em>brands</em><br />{" "}we helped grow</AccentTitle>
      <div className="testimonial-stage content-width" data-scroll-pop>
        <div className="testimonial-column testimonial-column--left" aria-hidden="true">
          <div className={`testimonial-track${tickerActive ? " is-running" : ""}`}>
            {[...leftReviews, ...leftReviews].map((review, index) => <TestimonialCard {...review} key={`${review.name}-${index}`} />)}
          </div>
        </div>
        <article className="testimonial-featured">
          <img src={asset("testimonial-daniel.png")} alt="Daniel Moore, startup founder" />
          <div>
            <StarRating light />
            <blockquote>“Working with Viralup was simple transparent &amp; effective helping us reach new audiences quickly online”</blockquote>
            <div className="testimonial-byline"><strong>Daniel Moore</strong><i aria-hidden="true" /><span>Startup Founder</span></div>
          </div>
        </article>
        <div className="testimonial-column testimonial-column--right" aria-hidden="true">
          <div className={`testimonial-track${tickerActive ? " is-running" : ""}`}>
            {[...rightReviews, ...rightReviews].map((review, index) => <TestimonialCard {...review} key={`${review.name}-${index}`} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="section-label"><span aria-hidden="true" />FAQ</div>
      <AccentTitle className="faq-title">Frequently asked <em>questions</em><br />{" "}about Viralup services</AccentTitle>
      <div className="faq-card">
        {faqItems.map(([question, answer], index) => {
          const open = activeIndex === index;
          return (
            <article
              className={`faq-item ${open ? "is-open" : ""}`}
              data-scroll-pop
              key={question}
              style={{ "--scroll-pop-delay": `${Math.floor(index / 2) * 100}ms` }}
            >
              <button type="button" aria-expanded={open} onClick={() => setActiveIndex(open ? -1 : index)}>
                <span>{question}</span><Icon name={open ? "close" : "plus"} size={17} />
              </button>
              <div className="faq-answer"><p>{answer}</p></div>
            </article>
          );
        })}
        <div className="faq-contact" data-scroll-pop style={{ "--scroll-pop-delay": "200ms" }}>
          <span className="mail-circle"><Icon name="mail" size={18} /></span>
          <div><strong>Email us</strong><a href="mailto:mudasirhussain5852@gmail.com">mudasirhussain5852@gmail.com</a></div>
          <a className="button button--black" href="#contact">Contact us</a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [fanActive, setFanActive] = useState(false);

  useEffect(() => {
    if (!mediaShouldAutoplay || !sectionRef.current) return undefined;

    let inView = false;
    const update = () => setFanActive(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    }, { threshold: 0.05 });

    observer.observe(sectionRef.current);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  function submit(event) {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("Enter a valid email address.");
      return;
    }
    setStatus("Thanks — your interest has been noted for this preview.");
  }

  return (
    <section className="section contact-section" id="contact" ref={sectionRef}>
      <div className="section-label"><span aria-hidden="true" />Get started</div>
      <AccentTitle className="contact-title">Grow your <em>brand</em><br />{" "}with Viralup today</AccentTitle>
      <p className="contact-description">Join Viralup and transform your social media<br />into measurable growth and engagement.</p>
      <form className="subscribe-form" onSubmit={submit} noValidate>
        <label className="sr-only" htmlFor="email">Email address</label>
        <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@email.com" aria-describedby="form-status" />
        <button className="button button--blue" type="submit">Subscribe</button>
      </form>
      <p className="form-status" id="form-status" role="status">{status}</p>
      <div className={`poster-fan${fanActive ? " is-running" : ""}`} aria-hidden="true">
        <div className="poster-space">
          <div className="poster-ring">
            {posterFan.map((video, index) => (
              <Video key={video} src={video} className="fan-card" label="" style={{ "--fan-index": index }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPageIntro() {
  const [submitted, setSubmitted] = useState(false);

  function submitContact(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  }

  return (
    <section className="contact-page-intro" aria-labelledby="contact-page-title">
      <div className="contact-page-intro-inner">
        <div className="contact-page-hero-copy">
          <div className="section-label"><span aria-hidden="true" />Contact us</div>
          <div className="contact-page-message">
            <h1 id="contact-page-title">Let’s talk <em>about</em><br />your brand goals</h1>
            <p>
              <span className="contact-page-copy-desktop">Contact our team to start boosting engagement,<br />followers, and online brand presence.</span>
              <span className="contact-page-copy-mobile">Contact our team to start<br />boosting engagement, followers,<br />and online brand presence.</span>
            </p>
          </div>
          <div className="contact-page-actions">
            <a className="button button--blue" href="/#projects">See our work</a>
            <a className="button button--white" href="/#services">What we do</a>
          </div>
        </div>

        <div className="contact-page-grid">
          <aside className="contact-help-card">
            <div className="contact-help-title"><Icon name="help" size={20} /><h2>Need any help</h2></div>
            <div className="contact-help-links">
              <a href="mailto:mudasirhussain5852@gmail.com"><span><Icon name="message" size={16} /></span>mudasirhussain5852@gmail.com</a>
              <a href="tel:+001234567890"><span><Icon name="phone" size={16} /></span>+001 234 567 890</a>
              <a href="https://www.google.com/maps/place/London,+UK" target="_blank" rel="noreferrer"><span><Icon name="pin" size={16} /></span>London, england</a>
            </div>
          </aside>

          <div className="contact-form-card">
            <form className="contact-page-form" onSubmit={submitContact}>
              <div className="contact-form-pair">
                <label className="contact-field">Full Name<input type="text" name="name" placeholder="Jane Smith" required /></label>
                <label className="contact-field">Email Address<input type="email" name="email" placeholder="jane@framer.com" required /></label>
              </div>
              <label className="contact-field">Select Service
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Select...</option>
                  <option>Content creation</option>
                  <option>Strategy planning</option>
                  <option>Paid media</option>
                  <option>Influencer relations</option>
                  <option>Social management</option>
                  <option>Campaign analysis</option>
                  <option>Brand consulting</option>
                  <option>Community building</option>
                  <option>Performance tracking</option>
                </select>
              </label>
              <label className="contact-field contact-field--message">Message<textarea name="message" placeholder="Write something here..." required /></label>
              <button className="contact-page-submit" type="submit">{submitted ? "Submitted" : "Submit"}</button>
              <span className="sr-only" role="status" aria-live="polite">{submitted ? "Your message has been submitted." : ""}</span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ isContactPage = false }) {
  const root = isContactPage ? "/" : "";

  return (
    <footer className="site-footer content-width">
      <div className="footer-grid">
        <div className="footer-brand"><Logo /><p>A premium template crafted to drive social growth and maximize brand success.</p><div className="social-row"><a href="https://dribbble.com/" aria-label="Website"><Icon name="dribbble" size={14} /></a><a href="https://www.linkedin.com/feed/" aria-label="LinkedIn"><Icon name="linkedin" size={14} /></a><a href="https://www.instagram.com/" aria-label="Instagram"><Icon name="instagram" size={14} /></a><a href="https://x.com/home" aria-label="X"><Icon name="x" size={14} /></a></div></div>
        <nav><strong>Main</strong><a href={`${root}#process`}>How we work</a><a href={`${root}#about`}>About us</a><a href={`${root}#services`}>Services</a><a href={`${root}#pricing`}>Pricing plan</a><a href={`${root}#team`}>Team</a><a href={`${root}#testimonials`}>Testimonial</a></nav>
        <nav><strong>Other Pages</strong><a href={`${root}#projects`}>Projects</a><a href="/contact-us">Contact us</a><a href="/404">404</a></nav>
        <div className="footer-contact"><strong>Get in touch</strong><a href="mailto:mudasirhussain5852@gmail.com"><Icon name="mail" size={15} />mudasirhussain5852@gmail.com</a><a href="tel:+001234567890"><Icon name="check" size={15} />+001 234 567 890</a><span><Icon name="arrow" size={15} />London, England</span></div>
      </div>
      <div className="footer-bottom">
        {isContactPage ? (
          <div className="footer-copyright-group"><span>Copyright © 2025.</span><span>Built in Framer</span></div>
        ) : <span>Copyright © 2025. • Built in Framer</span>}
        <span>Designed by Muddasir hussain</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isContactPage = window.location.pathname.replace(/\/+$/, "") === "/contact-us";

  useScrollPopEffects(isContactPage);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      stopInertiaOnNavigate: true,
    });

    return () => lenis.destroy();
  }, []);

  return (
    <div className={`app-shell${isContactPage ? " contact-page-shell" : ""}`}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} isContactPage={isContactPage} />
      <main>
        {isContactPage ? <ContactPageIntro /> : <><Hero /><Process /><Projects /><About /><Services /><Pricing /><Team /><Testimonials /></>}
        <FAQ />
        <Contact />
      </main>
      <Footer isContactPage={isContactPage} />
    </div>
  );
}
