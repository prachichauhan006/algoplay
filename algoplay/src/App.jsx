import BubbleSort from "./BubbleSort"
import SelectionSort from "./SelectionSort"
import InsertionSort from "./InsertionSort"
import BinarySearch from "./BinarySearch"
import { useState } from "react"

function App() {
  const [page, setPage] = useState("home")

  if (page === "bubble") return <BubbleSort onBack={() => setPage("home")} />
  if (page === "selection") return <SelectionSort onBack={() => setPage("home")} />
  if (page === "insertion") return <InsertionSort onBack={() => setPage("home")} />
  if (page === "binary") return <BinarySearch onBack={() => setPage("home")} />

  return (
    <div style={{ textAlign: "center", padding: "50px 20px" }}>
      <h1>🎮 AlgoPlay</h1>
      <p>Visualize DSA algorithms — step by step</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        maxWidth: "600px",
        margin: "40px auto"
      }}>
        {[
          { label: "Bubble Sort", key: "bubble", desc: "Compare & swap adjacent elements" },
          { label: "Selection Sort", key: "selection", desc: "Find minimum & place it" },
          { label: "Insertion Sort", key: "insertion", desc: "Insert element at correct position" },
          { label: "Binary Search", key: "binary", desc: "Search in sorted array" },
        ].map((item) => (
          <div key={item.key} onClick={() => setPage(item.key)} style={{
            border: "2px solid #00d4ff",
            borderRadius: "12px",
            padding: "24px",
            cursor: "pointer",
            transition: "all 0.3s",
            backgroundColor: "#1a1a2e"
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#00d4ff22"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#1a1a2e"}
          >
            <h2 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>{item.label}</h2>
            <p style={{ fontSize: "0.85rem", margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <p style={{ fontSize: "0.8rem", color: "#555" }}>Built by Prachi Chauhan — B.Tech CSE 2027</p>
    </div>
  )
}

export default App