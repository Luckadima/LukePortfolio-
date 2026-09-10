import { useEffect, useState } from "react";

const projects = [
  { id:"canva", number:"01", type:"BEFORE & AFTER UGC", title:"Canva — Before & After", category:"CREATIVE / DIGITAL", description:"A quick visual transformation showing how Canva can turn a simple starting point into a cleaner finished result.", video:"/videos/canva-ugc.mp4", image:"/images/pic1.jpeg" },
  { id:"notion", number:"02", type:"HOW-TO UGC", title:"Notion — Scheduling How-To", category:"PRODUCTIVITY", description:"A simple step-by-step video showing how to use Notion to organise and manage a schedule.", video:"/videos/notion-ugc.mp4", image:"/images/pic2.jpeg" },
  { id:"chatgpt", number:"03", type:"PROBLEM → SOLUTION UGC", title:"ChatGPT — Coding Problem → Solution", category:"TECH / AI", description:"A text-led coding story showing a problem, using ChatGPT to find the issue, and getting the website working again.", video:"/videos/chatgpt-ugc.mp4", image:"/images/pic4.jpeg" },
  { id:"fashion", number:"04", type:"FASHION / PERSONAL STYLE", title:"Style is part of the story too.", category:"FASHION", description:"Fashion is another side of my content — personal style, outfit-led visuals and creator-first storytelling.", image:"/images/fit1.jpeg", video:null }
];

const interests = [
  ["01","Fashion","Style, outfits, fashion finds and creator-led fashion content."],
  ["02","Tech & Apps","Apps, AI tools, SaaS and digital products explained naturally."],
  ["03","Lifestyle","Everyday routines, experiences, productivity and personal storytelling."]
];

export default function App(){
  const [open,setOpen]=useState(null);
  const active=projects.find(p=>p.id===open);

  useEffect(()=>{
    const els=[...document.querySelectorAll("[data-reveal]")];
    const io=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("show");
          io.unobserve(entry.target);
        }
      });
    },{threshold:.14});
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[]);

  useEffect(()=>{
    const onMove=(e)=>{
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove",onMove);
    return ()=>window.removeEventListener("mousemove",onMove);
  },[]);

  return <div className="page">
    <div className="cursor-glow"></div>

    <header className="nav">
      <a href="#top" className="brand"><span>LK</span><strong>Luke Kadima</strong></a>
      <nav><a href="#work">Work</a><a href="#about">About</a><a href="#interests">Interests</a><a href="#contact">Contact</a></nav>
    </header>

    <main id="top">
      <section className="hero shell">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">UGC CREATOR · DEVELOPER · CREATIVE</p>
          <h1>I create content <em>with personality.</em></h1>
          <p>From tech and apps to fashion, lifestyle and everyday experiences — I create short-form content that feels natural, clear and human.</p>
          <div className="actions"><a className="btn magnetic" href="#work">View my work</a><a href="#about" className="underlink">More about me ↘</a></div>
        </div>
        <div className="hero-media" data-reveal>
          <div className="red-shape"></div>
          <img src="/images/luke-portrait.jpeg" alt="Luke Kadima"/>
          <div className="badge"><small>CREATOR</small><b>South Africa</b></div>
        </div>
      </section>

      <section className="ticker">
        <div className="ticker-track">
          <span>UGC CREATOR</span><i>•</i><span>FASHION</span><i>•</i><span>TECH</span><i>•</i><span>LIFESTYLE</span><i>•</i><span>CREATIVE</span><i>•</i>
          <span>UGC CREATOR</span><i>•</i><span>FASHION</span><i>•</i><span>TECH</span><i>•</i><span>LIFESTYLE</span><i>•</i><span>CREATIVE</span><i>•</i>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-head" data-reveal>
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Different sides. <span>One creator.</span></h2>
        </div>

        <div className="story-grid">
          {projects.map((p,i)=><article
            className={`story-card story-${i+1}`}
            key={p.id}
            data-reveal
            onClick={()=>{
              if (p.video) {
                setOpen(p.id);
              } else if (p.id === "fashion") {
                document.getElementById("style-notes")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <div className="story-image">
              <img src={p.image} alt={p.title}/>
              <div className="story-overlay"></div>
              <span className="story-number">{p.number}</span>
              {p.video ? <button className="play-btn">▶</button> : <button className="style-jump">↓</button>}
            </div>
            <div className="story-copy">
              <div className="story-meta"><span>{p.category}</span><span>{p.type}</span></div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <b>{p.video ? "Watch video ↗" : "Explore personal style ↓"}</b>
            </div>
          </article>)}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-photo" data-reveal>
          <img src="/images/fit1.jpeg" alt="Luke in a blue shirt beside a clothing rack"/>
          <div className="photo-tag">STYLE / CREATIVE</div>
        </div>
        <div className="about-copy" data-reveal>
          <p className="eyebrow">ABOUT ME</p>
          <h2>More than one <em>side of me.</em></h2>
          <p className="lead">I’m Luke — a developer, creator and someone who genuinely enjoys fashion, digital products and finding interesting ways to tell stories online.</p>
          <p>Tech is part of what I know, but it is not the only thing I want to create around. My goal is to make content that feels like me — whether I am showing an app, putting together an outfit, talking about something I use, or sharing an everyday experience.</p>
          <div className="facts"><div><span>Based</span><b>South Africa</b></div><div><span>Creator style</span><b>Natural · Clear · Personal</b></div><div><span>Also</span><b>Web Developer</b></div></div>
        </div>
      </section>

      <section className="lookbook shell" id="style-notes" data-reveal>
        <div className="lookbook-copy">
          <p className="eyebrow">STYLE NOTES</p>
          <h2>Fashion gives the portfolio another rhythm.</h2>
          <p>Not every piece of content has to explain software. Some stories are visual — mood, styling, detail and personality.</p>
        </div>
        <div className="lookbook-stack">
          <img className="stack-a" src="/images/fit2.jpeg" alt="Luke in a pinstripe suit"/>
          <img className="stack-b" src="/images/fit3.jpeg" alt="Red cap fashion detail"/>
          <img className="stack-c" src="/images/fit4.jpeg" alt="Luke in a black suit outdoors"/>
        </div>
      </section>

      <section className="section shell" id="interests">
        <div className="section-head" data-reveal>
          <p className="eyebrow">WHAT I’M INTO</p>
          <h2>Content doesn’t need to fit <span>one box.</span></h2>
        </div>
        <div className="interest-list">
          {interests.map(([n,t,d])=><div className="interest" key={n} data-reveal>
            <span>{n}</span><h3>{t}</h3><p>{d}</p><b>↗</b>
          </div>)}
        </div>
      </section>

<section className="contact" id="contact">
  <div className="contact-inner" data-reveal>
    <p className="eyebrow light">LET'S CONNECT</p>

    <h2>
      Find me <em>online.</em>
    </h2>

    <p>
      Follow my work, see what I'm creating, or reach out about a
      collaboration.
    </p>

    <div className="social-links">
      <a
        href="https://www.instagram.com/lukekadimaa/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <div>
          <span>INSTAGRAM</span>
          <strong>@lukekadimaa</strong>
        </div>

        <span className="social-arrow">↗</span>
      </a>

      <a
        href="https://www.tiktok.com/@lukecodes"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <div>
          <span>TIKTOK</span>
          <strong>@lukecodes</strong>
        </div>

        <span className="social-arrow">↗</span>
      </a>

      <a
        href="mailto:lukekadima1942@gmail.com"
        className="social-link"
      >
        <div>
          <span>EMAIL</span>
          <strong>lukekadima1942@gmail.com</strong>
        </div>

        <span className="social-arrow">↗</span>
      </a>
    </div>
  </div>

  <div className="contact-marquee">
    CONNECT · CREATE · COLLABORATE ·
  </div>
</section>
    </main>

    <footer className="shell"><span>© 2026 Luke Kadima</span><span>UGC Creator · Developer · Creative</span></footer>

    {active && <div className="modal" onClick={()=>setOpen(null)}>
      <button className="close" onClick={()=>setOpen(null)}>×</button>
      <div className="modal-card" onClick={e=>e.stopPropagation()}>
        <div className="video-wrap"><video controls autoPlay playsInline><source src={active.video} type="video/mp4"/></video></div>
        <div className="modal-copy"><small>{active.type}</small><h3>{active.title}</h3><p>{active.description}</p></div>
      </div>
    </div>}
  </div>
}