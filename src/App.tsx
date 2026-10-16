
import { games } from "./data";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808] text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-red-950/40 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">

        {/* Header */}
        <header className="mb-16 text-center">
          <p className="mb-5 text-sm font-bold tracking-[0.4em] text-red-500">
            THE GAMING EXPERIENCE
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            THE ULTIMATE
            <span className="block text-red-600">
              GAME COLLECTION
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            私が選ぶ最高のゲーム3選。
            アクション、ホラー、FPSの世界へ。
          </p>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-red-600" />
        </header>

        {/* Game cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {games.map((game, index) => (
            <div
              key={game.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#171717] shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-red-600 hover:shadow-[0_20px_60px_rgba(220,38,38,0.25)]"
            >

              {/* Game image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}${game.image}`}
                  alt={game.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

                <div className="absolute left-5 top-5 rounded-md border border-red-500/50 bg-black/70 px-4 py-2 text-xs font-bold tracking-widest text-red-400">
                  TOP {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Game details */}
              <div className="p-7">
                <div className="mb-3 h-1 w-10 rounded-full bg-red-600" />

                <h2 className="mb-4 text-2xl font-black">
                  {game.name}
                </h2>

                <p className="mb-7 min-h-12 text-sm leading-7 text-gray-400">
                  {game.description}
                </p>

                <div className="border-t border-white/10 pt-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                    MY RATING
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl tracking-wider text-amber-400">
                      {"★".repeat(game.rating)}
                      {"☆".repeat(5 - game.rating)}
                    </span>

                    <span className="font-bold text-white">
                      {game.rating}.0
                      <span className="text-sm text-gray-500"> / 5</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-xs tracking-widest text-gray-500">
            MY FAVORITE GAMES • 2026
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;
