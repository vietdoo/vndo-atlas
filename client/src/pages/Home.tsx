/*
 * Chosen design philosophy: contemporary editorial collage — warm parchment,
 * asymmetrical margin notes, serif travel writing, mono utility labels, and
 * interactions that feel like moving paper ephemera rather than app chrome.
 */
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { destinations } from "../data/destinations";

const glyphs = "山水風月雲門庭寺路春秋東西南北光影人間遠行遊記";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const active = destinations[activeIndex];
  const isReferenceAsset = (image: string) => image.includes("images.unsplash.com");

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
    setActiveIndex((currentIndex) => (index === currentIndex ? currentIndex : index));
  };

  const moveDestination = (direction: -1 | 1) => {
    setActiveIndex((currentIndex) => (currentIndex + direction + destinations.length) % destinations.length);
  };

  return (
    <main className="site-shell" lang="vi">
      <section className="stage" id="home" data-country={active.name.toLowerCase()}>
        <div className="perimeter" aria-hidden="true" />
        <header className="topbar">
          <a className="brand" href="#home" aria-label="Chimes — trang chủ">
            <img src="/manus-storage/chimes-mark_c8e788e5.png" alt="" />
            <span>Chimes</span>
          </a>
          <nav className="menu" aria-label="Điều hướng chính">
            <a href="#home" className="is-active">Trang chủ</a>
            <a href="#destinations">Điểm đến</a>
            <a href="#contributions">Góp nhặt</a>
          </nav>
          <button className={`play-btn ${isPlaying ? "is-playing" : ""}`} type="button" onClick={() => setIsPlaying((value) => !value)} aria-pressed={isPlaying}>
            <span className="play-btn__mark"><Play size={11} fill="currentColor" /></span>
            {isPlaying ? "Dừng" : "Nghe"}
          </button>
        </header>

        <div className="marker marker--top marker--one">1</div>
        <div className="marker marker--top marker--two">2</div>
        <div className="marker marker--top marker--three">3</div>
        <div className="marker marker--top marker--four">4</div>
        <div className="marker marker--top marker--five">5</div>

        <button className="country-btn country-btn--left" type="button" onClick={() => moveDestination(1)} aria-label={`Điểm đến tiếp theo: ${adjacent.next.name}`}>
          <span className="country-btn__marker">{adjacent.next.marker}</span>
          <span className="country-btn__label">{adjacent.next.name}</span>
          <ChevronLeft size={13} />
        </button>
        <button className="country-btn country-btn--right" type="button" onClick={() => moveDestination(-1)} aria-label={`Điểm đến trước: ${adjacent.previous.name}`}>
          <span className="country-btn__marker">{adjacent.previous.marker}</span>
          <span className="country-btn__label">{adjacent.previous.name}</span>
          <ChevronRight size={13} />
        </button>

        <div className="hero-art" key={active.name} aria-live="polite">
          <div className="glyph-block" aria-hidden="true">{Array.from({ length: 7 }, (_, row) => <span key={row}>{glyphs.slice(row * 9, row * 9 + 26)}</span>)}</div>
          <div className="roof-shadow" aria-hidden="true" />
          <img className={`roof-image ${isReferenceAsset(active.image) ? "roof-image--reference" : ""}`} src={active.image} alt={`Mái kiến trúc ${active.name}`} />
          <div className="hero-art__caption">{active.country} / {String(activeIndex + 1).padStart(2, "0")}</div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow"><span>{active.phonetic}</span> <i>{active.aside}</i></p>
          <h1>{active.title}</h1>
          <div className="headline-rule" aria-hidden="true" />
        </div>

        <div className="bottom-copy">
          <p>{active.description}</p>
          <button type="button" className="about-link" onClick={() => setIsAboutOpen(true)}>
            Về Chimes <span aria-hidden="true">↗</span>
          </button>
        </div>

        <div className="stage-footer"><span>Cuộn để du ngoạn</span><span className="footer-line" /><span>{String(activeIndex + 1).padStart(2, "0")} / {String(destinations.length).padStart(2, "0")}</span></div>
      </section>

      <section className="editorial-section destinations-section" id="destinations">
        <div className="section-kicker">02 / điểm đến</div>
        <div>
          <p className="section-eyebrow">Chọn một câu chuyện kế bên.</p>
          <h2>Mười ba miền đất,<br /><em>một atlas thong thả.</em></h2>
        </div>
        <div className="destination-list">
            {destinations.map((destination, index) => (
            <button key={destination.name} type="button" aria-current={index === activeIndex ? "true" : undefined} className={`destination-card ${index === activeIndex ? "is-selected" : ""}`} onClick={() => { setDestination(index); window.location.hash = "home"; window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <span className="destination-card__index">0{index + 1}</span>
              <img className={`destination-card__visual ${isReferenceAsset(destination.image) ? "destination-card__visual--reference" : ""}`} src={destination.image} alt={`Ảnh điểm đến ${destination.name}`} />
              <span className="destination-card__name">{destination.name}</span>
              <span className="destination-card__aside">{destination.aside}</span>
              <span className="destination-card__arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      <section className="editorial-section contribution-section" id="contributions">
        <div className="section-kicker">03 / góp nhặt</div>
        <div className="contribution-note">
          <p className="section-eyebrow">Những ghi chú bên đường luôn được chào đón.</p>
          <h2>Để lại một<br /><em>âm vang nhỏ.</em></h2>
          <p className="contribution-body">Một lối đi, một đường mái, một món ăn bạn vẫn còn nhớ. Atlas lớn lên từ những chi tiết không chịu bị vội vàng.</p>
          <button type="button" className="ink-button" onClick={() => setIsAboutOpen(true)}>Đọc lời nhắn <span>↗</span></button>
        </div>
        <div className="contribution-stamp" aria-hidden="true">CHIMES<br /><span>FIELD EDITION</span><br />MMXXVI</div>
      </section>

      {isAboutOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsAboutOpen(false); }}>
          <section className="about-modal" role="dialog" aria-modal="true" aria-labelledby="about-title">
            <button className="modal-close" type="button" onClick={() => setIsAboutOpen(false)} aria-label="Đóng cửa sổ giới thiệu"><X size={17} /></button>
            <p className="section-eyebrow">Một ghi chú bên lề</p>
            <h2 id="about-title">Đi thật chậm.<br /><em>Nhìn thật kỹ.</em></h2>
            <p>Chimes là một atlas biên tập nhỏ dành cho những nơi vẫn ở lại sau khi hành trình kết thúc. Mỗi chương là một lớp ghép của kiến trúc, ngôn ngữ, thời tiết và những mối duyên lặng lẽ trên đường.</p>
            <div className="modal-signature">Budarina / Chimes<br /><span>một khảo cứu du hành độc lập</span></div>
          </section>
        </div>
      )}
    </main>
  );
}
