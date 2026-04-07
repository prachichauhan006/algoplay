import { useState } from "react"

function BinarySearch({ onBack }) {
  const [array] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90])
  const [target, setTarget] = useState("")
  const [low, setLow] = useState(null)
  const [high, setHigh] = useState(null)
  const [mid, setMid] = useState(null)
  const [found, setFound] = useState(null)
  const [searching, setSearching] = useState(false)

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  const binarySearch = async () => {
    let lo = 0
    let hi = array.length - 1
    setFound(null)
    setSearching(true)

    while (lo <= hi) {
      let m = Math.floor((lo + hi) / 2)
      setLow(lo)
      setHigh(hi)
      setMid(m)
      await sleep(800)

      if (array[m] === Number(target)) {
        setFound(m)
        setSearching(false)
        return
      } else if (array[m] < Number(target)) {
        lo = m + 1
      } else {
        hi = m - 1
      }
    }

    setFound(-1)
    setSearching(false)
  }

  const reset = () => {
    setLow(null)
    setHigh(null)
    setMid(null)
    setFound(null)
    setTarget("")
  }

  const getColor = (index) => {
    if (found === index) return "green"
    if (found === -1) return "red"
    if (index === mid) return "orange"
    if (low !== null && high !== null && index >= low && index <= high) return "steelblue"
    return "#ccc"
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Binary Search</h2>
      <p style={{ color: "gray" }}>Sorted array — enter a number to search</p>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "10px", height: "200px" }}>
        {array.map((value, index) => (
          <div key={index} style={{
            width: "50px",
            height: `${value * 2}px`,
            backgroundColor: getColor(index),
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            color: "white",
            transition: "background-color 0.3s"
          }}>
            {value}
          </div>
        ))}
      </div>

      {found === -1 && <p style={{ color: "red", marginTop: "10px" }}>❌ Not found!</p>}
      {found !== null && found !== -1 && <p style={{ color: "green", marginTop: "10px" }}>✅ Found at index {found}!</p>}

      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          placeholder="Enter number (10-90)"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", fontSize: "16px" }}
        />
        <button onClick={binarySearch} disabled={searching} style={{ marginRight: "10px" }}>Search</button>
        <button onClick={reset} style={{ marginRight: "10px" }}>Reset</button>
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  )
}

export default BinarySearch