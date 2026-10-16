import { games } from "./data";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-3">
          MY TOP 3 FAVORITE GAMES
        </h1>

        <p className="text-gray-400 text-center mb-12">
          私のおすすめゲーム3選
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.name}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`${import.meta.env.BASE_URL}${game.image}`}
                alt={game.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">
                  {game.name}
                </h2>

                <p className="text-gray-300 text-sm mb-5">
                  {game.description}
                </p>

                <div className="text-yellow-400 text-xl">
                  {"★".repeat(game.rating)}
                  {"☆".repeat(5 - game.rating)}
                </div>

                <p className="text-gray-400 text-xs mt-2">
                  おすすめ度：{game.rating}/5
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;