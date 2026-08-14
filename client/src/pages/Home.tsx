/*
 * Chosen design philosophy: contemporary editorial collage — warm parchment,
 * asymmetrical margin notes, serif travel writing, mono utility labels, and
 * interactions that feel like moving paper ephemera rather than app chrome.
 */
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

type Destination = {
  name: string;
  country: string;
  phonetic: string;
  title: string;
  description: string;
  aside: string;
  image: string;
  marker: string;
};

const destinations: Destination[] = [
  {
    name: "China",
    country: "China",
    phonetic: "缘分  (Yuánfèn)",
    title: "China — golden courtyards, silk-road myths, roofs that refuse gravity",
    description: "Wander forbidden gardens, painted eaves, and stories older than the maps that tried to hold them.",
    aside: "A destined meeting",
    image: "/manus-storage/chimes-hero-china_a199739c.png",
    marker: "中",
  },
  {
    name: "Vietnam",
    country: "Vietnam",
    phonetic: "Duyên  (duyên)",
    title: "Vietnam — lantern-lit alleys, river mornings, and roofs softened by rain",
    description: "Follow incense smoke through old quarters where every threshold keeps a little weather inside.",
    aside: "A thread that finds you",
    image: "/manus-storage/chimes-destination-vietnam_c521950d.png",
    marker: "越",
  },
  {
    name: "Japan",
    country: "Japan",
    phonetic: "縁  (En)",
    title: "Japan — quiet thresholds, cedar shadows, and bells that remember the wind",
    description: "Take the long way beneath shrine eaves, where silence gathers detail and seasons leave a trace.",
    aside: "A connection in passing",
    image: "/manus-storage/chimes-destination-japan_1a69dec1.png",
    marker: "日",
  },
];

const glyphs = "山水風月雲門庭寺路春秋東西南北光影人間遠行遊記";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const active = destinations[activeIndex];

  const adjacent = useMemo(
    () => ({
      previous: destinations[(activeIndex + destinations.length - 1) % destinations.length],
      next: destinations[(activeIndex + 1) % destinations.length],
    }),
    [activeIndex],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsAboutOpen(false);
      if (event.key === "ArrowLeft") setActiveIndex((index) => (index + destinations.length - 1) % destinations.length);
      if (event.key === "ArrowRight") setActiveIndex((index) => (index + 1) % destinations.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const setDestination = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <main className="site-shell">
      <section className="stage" id="home" data-country={active.name.toLowerCase()}>
        <div className="perimeter" aria-hidden="true" />
        <header className="topbar">
          <a className="brand" href="#home" aria-label="Chimes home">
            <img src="/manus-storage/chimes-mark_c8e788e5.png" alt="" />
            <span>Chimes</span>
          </a>
          <nav className="menu" aria-label="Primary navigation">
            <a href="#home" className="is-active">Home</a>
            <a href="#destinations">Destinations</a>
            <a href="#contributions">Contributions</a>
          </nav>
          <button className={`play-btn ${isPlaying ? "is-playing" : ""}`} type="button" onClick={() => setIsPlaying((value) => !value)} aria-pressed={isPlaying}>
            <span className="play-btn__mark"><Play size={11} fill="currentColor" /></span>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </header>

        <div className="marker marker--top marker--one">1</div>
        <div className="marker marker--top marker--two">2</div>
        <div className="marker marker--top marker--three">3</div>
        <div className="marker marker--top marker--four">4</div>
        <div className="marker marker--top marker--five">5</div>

        <button className="country-btn country-btn--left" type="button" onClick={() => setDestination((activeIndex + 1) % destinations.length)} aria-label={`Next destination: ${adjacent.next.name}`}>
          <span className="country-btn__marker">{adjacent.next.marker}</span>
          <span className="country-btn__label">{adjacent.next.name}</span>
          <ChevronLeft size={13} />
        </button>
        <button className="country-btn country-btn--right" type="button" onClick={() => setDestination((activeIndex + destinations.length - 1) % destinations.length)} aria-label={`Previous destination: ${adjacent.previous.name}`}>
          <span className="country-btn__marker">{adjacent.previous.marker}</span>
          <span className="country-btn__label">{adjacent.previous.name}</span>
          <ChevronRight size={13} />
        </button>

        <div className="hero-art" aria-live="polite">
          <div className="glyph-block" aria-hidden="true">{Array.from({ length: 7 }, (_, row) => <span key={row}>{glyphs.slice(row * 9, row * 9 + 26)}</span>)}</div>
          <div className="roof-shadow" aria-hidden="true" />
          <img className="roof-image" src={active.image} alt={`${active.name} architectural roof`} />
          <div className="hero-art__caption">{active.country} / 01</div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow"><span>{active.phonetic}</span> <i>{active.aside}</i></p>
          <h1>{active.title}</h1>
          <div className="headline-rule" aria-hidden="true" />
        </div>

        <div className="bottom-copy">
          <p>{active.description}</p>
          <button type="button" className="about-link" onClick={() => setIsAboutOpen(true)}>
            About <span aria-hidden="true">↗</span>
          </button>
        </div>

        <div className="stage-footer"><span>Scroll to wander</span><span className="footer-line" /><span>{String(activeIndex + 1).padStart(2, "0")} / 03</span></div>
      </section>

      <section className="editorial-section destinations-section" id="destinations">
        <div className="section-kicker">02 / destinations</div>
        <div>
          <p className="section-eyebrow">Choose a neighboring story.</p>
          <h2>Three places,<br /><em>one slow atlas.</em></h2>
        </div>
        <div className="destination-list">
          {destinations.map((destination, index) => (
            <button key={destination.name} type="button" className={`destination-card ${index === activeIndex ? "is-selected" : ""}`} onClick={() => { setDestination(index); window.location.hash = "home"; window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <span className="destination-card__index">0{index + 1}</span>
              <span className="destination-card__name">{destination.name}</span>
              <span className="destination-card__aside">{destination.aside}</span>
              <span className="destination-card__arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      <section className="editorial-section contribution-section" id="contributions">
        <div className="section-kicker">03 / contributions</div>
        <div className="contribution-note">
          <p className="section-eyebrow">Field notes are welcome.</p>
          <h2>Leave a small<br /><em>sound behind.</em></h2>
          <p className="contribution-body">A route, a roofline, a dish you still remember. The atlas grows through details that refuse to be rushed.</p>
          <button type="button" className="ink-button" onClick={() => setIsAboutOpen(true)}>Read the note <span>↗</span></button>
        </div>
        <div className="contribution-stamp" aria-hidden="true">CHIMES<br /><span>FIELD EDITION</span><br />MMXXVI</div>
      </section>

      {isAboutOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsAboutOpen(false); }}>
          <section className="about-modal" role="dialog" aria-modal="true" aria-labelledby="about-title">
            <button className="modal-close" type="button" onClick={() => setIsAboutOpen(false)} aria-label="Close about dialog"><X size={17} /></button>
            <p className="section-eyebrow">A note from the margin</p>
            <h2 id="about-title">Travel slowly.<br /><em>Notice everything.</em></h2>
            <p>Chimes is a small editorial atlas for places that stay with you after the itinerary ends. Each chapter is a collage of architecture, language, weather, and the quiet connections made along the way.</p>
            <div className="modal-signature">Budarina / Chimes<br /><span>an independent travel study</span></div>
          </section>
        </div>
      )}
    </main>
  );
}
