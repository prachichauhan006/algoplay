import BubbleSort from "./BubbleSort"
import SelectionSort from "./SelectionSort"
import InsertionSort from "./InsertionSort"
import { useState } from "react"


function App() {
  const [page, setPage] = useState("home")

  if (page === "bubble") return <BubbleSort onBack={() => setPage("home")} />
  if (page === "selection") return <SelectionSort onBack={() => setPage("home")} />
  if (page === "insertion") return <InsertionSort onBack={() => setPage("home")} />
  if (page === "binary") return <div><h2>Binary Search</h2><button onClick={() => setPage("home")}>Back</button></div>

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎮 AlgoPlay</h1>
      <p>DSA Visualizer — Learn algorithms visually</p>

      <div style={{ marginTop: "30px" }}>
        <button onClick={() => setPage("bubble")}>Bubble Sort</button>
        <button onClick={() => setPage("selection")}>Selection Sort</button>
        <button onClick={() => setPage("insertion")}>Insertion Sort</button>
        <button onClick={() => setPage("binary")}>Binary Search</button>
      </div>
    </div>
  )
}

export default App