import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Compteur React</h1>

      <p className="text-lg">Valeur : {count}</p>

      <button
        className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-900 hover:bg-cyan-400"
        onClick={() => setCount(count * 2)}
      >
        +{count}
      </button>
    </div>
  );
}

export default App;
