export default function App() {
  const features = [
    { t: "Real Agronomy", d: "Soil tilth, compost, and crop rotation turn into satisfying, readable mechanics." },
    { t: "Animal Husbandry", d: "Pasture moves, feed, and weather shape herd health and yields." },
    { t: "Seasonal Rhythm", d: "Plan for spring, preserve for winter—storms and droughts test your prep." },
    { t: "Cooking System", d: "Fun to start, endless to master—built on real recipes and techniques." },
    { t: "Hunting & Butchery (Optional)", d: "Humane harvest with settings to disable hunting/harvest entirely if you prefer." },
    { t: "Play at Your Pace", d: "Solo or co-op—progress that respects your time." },
  ];

  // Put screenshots in /public and list them here.
  const shots = ["/Screenshot_1.jpg"];

  return (
    <div className="min-h-screen bg-[#efe3d0] text-[#2b1b12] text-lg">
      {/* Header — maroon with white text, centered content */}
      <header className="sticky top-0 z-20 border-b-2 border-[#4b2e19] bg-[#6b1f28] text-white">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 place-items-center py-3">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center border-2 border-white bg-[#8c2633] font-black">H</div>
              <span className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ fontFamily: 'Homesteader, inherit' }}>Homesteader™</span>
            </a>
            <div className="mt-2 flex items-center gap-6 text-lg">
              <a href="#features" className="hover:underline">Features</a>
              <a href="#story" className="hover:underline">Mechanics</a>
              <a href="#screenshots" className="hover:underline">Screenshots</a>
            </div>
          </div>
        </nav>
      </header>

      {/* MAIN — all centered */}
      <main className="mx-auto max-w-6xl px-4 text-center">
        {/* HERO */}
        <section id="home" className="border-b-2 border-[#4b2e19] bg-[#f2e6d6]">
          <div className="mx-auto max-w-4xl py-12">
            <p className="mx-auto inline-flex items-center gap-2 border-2 border-[#4b2e19] bg-[#e3d4be] px-2 py-1 text-xs">
              Farming <span>•</span> Crafting <span>•</span> Co-op
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Build your dream homestead
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-xl">
              A farming sim with a focus on <span className="font-semibold">real techniques turned into mechanics</span>—soil care, rotations, pasture management, preservation, and more. Demo available now.
            </p>
            <p className="mt-3 mx-auto max-w-2xl text-xl">
              Grow through authentic seasons, raise livestock with meaningful routines, and cook from a system that starts simple and blooms into endless options.
            </p>

            {/* Primary CTA centered */}
            <div className="mt-8 flex justify-center">
              <a href="#download" className="border-2 border-[#2b1b12] bg-[#7a4f39] px-10 py-5 text-2xl font-extrabold text-white hover:bg-[#6b4532]">
                Download Demo
              </a>
            </div>

            {/* Sarebyl hero image, scaled up and crisp */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3">
              <div className="border-2 border-[#4b2e19] bg-[#dfefff] p-3">
                <img src="/Sarebyl.png" alt="Sarebyl" width={620} className="[image-rendering:pixelated] select-none" />
              </div>
              <p className="max-w-3xl text-xl">
                The <span className="font-semibold">Sarebyl</span> is a seasonal spirit and the farm’s mascot—growing and fading with the year. Its life cycle mirrors the land and inspires many of the game's systems.
              </p>
            </div>

            <p className="mt-3 text-base text-[#3a2a1e]">Windows</p>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="border-b-2 border-[#4b2e19] bg-[#eadfd1]">
          <div className="mx-auto max-w-5xl px-2 py-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Farm. Craft. Thrive.</h2>
            <p className="mt-2 text-xl text-[#3a2a1e]">Thoughtful systems that reward patience and care.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <div key={i} className="border-2 border-[#4b2e19] bg-[#e9dbc7] p-5 text-left">
                  <p className="font-bold">{f.t}</p>
                  <p className="mt-1 text-lg text-[#3a2a1e]">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORY — single card */}
        <section id="story" className="border-b-2 border-[#4b2e19] bg-[#f3e8d8]">
          <div className="mx-auto max-w-4xl px-2 py-12">
            <div className="border-2 border-[#4b2e19] bg-[#e8efe2] p-4">
              <h3 className="text-3xl font-extrabold">A place to belong</h3>
              <p className="mt-2 text-xl">
                Mechanics are built from real practices: soil care, pasture rotation, seed saving, and preservation. Our cooking system mirrors real world recipes—easy to start, deep to explore. Hunting and a humane butcher exist for players who want them, and <span className="font-semibold">built-in settings let you disable harvest or hunting</span> entirely.
              </p>
              <ul className="mt-3 inline-block text-left list-disc pl-5 text-xl">
                <li>Keyboard & mouse (controller support coming later).</li>
                <li>Local & online co-op.</li>
                <li>Built by a tiny team with big love.</li>
              </ul>
              <p className="mt-3 text-xl">Demo available now!</p>
            </div>
          </div>
        </section>

        {/* SCREENS */}
        <section id="screenshots" className="border-b-2 border-[#4b2e19] bg-[#eadfd1]">
          <div className="mx-auto max-w-5xl px-2 py-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Screenshots</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-1">
              {shots.map((src, i) => (
                <div key={i} className="border-2 border-[#4b2e19] bg-[#f0e4d4]">
                  <img
                    src={src}
                    alt={`Homesteader screenshot ${i + 1}`}
                    className="w-full [image-rendering:pixelated] object-cover"
                    style={{ aspectRatio: "16 / 9" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOWNLOAD */}
        <section id="download" className="bg-[#e9dbc7]">
          <div className="mx-auto max-w-3xl px-2 py-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Play the demo today</h2>
            <p className="mt-2 text-sm">Your feedback helps shape the farm.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {/* Put your ZIP in /public and make sure this filename matches */}
              <a
                href="/HomesteaderDemo.zip"
                download
                className="border-2 border-[#2b1b12] bg-[#7a4f39] px-10 py-4 text-2xl font-bold text-white hover:bg-[#6b4532]"
              >
                Windows
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER — maroon with white text */}
      <footer className="border-t-2 border-[#4b2e19] bg-[#6b1f28] text-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid place-items-center">
            <p className="text-base">© {new Date().getFullYear()} Homesteader™ • Uplifting Games LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
