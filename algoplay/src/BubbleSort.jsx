import { useState } from "react"

function BubbleSort({ onBack }) {
  const [array, setArray] = useState([90, 30, 50, 10, 70])
  const [comparing, setComparing] = useState([])
  const [speed, setSpeed] = useState(500)
  const [sorting, setSorting] = useState(false)

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  const bubbleSort = async () => {
    setSorting(true)
    let arr = [...array]

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setComparing([j, j + 1])
        await sleep(speed)

        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
          setArray([...arr])
          await sleep(speed)
        }
      }
    }
    setComparing([])
    setSorting(false)
  }

  const resetArray = () => {
    const newArr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 90) + 10)
    setArray(newArr)
    setComparing([])
    setSorting(false)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Bubble Sort</h2>

      {/* Speed Slider */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ color: "#aaa", marginRight: "10px" }}>
          Speed: {speed === 200 ? "Fast" : speed === 500 ? "Medium" : "Slow"}
        </label>
        <input
          type="range"
          min="200"
          max="1000"
          step="300"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>

      {/* Bars */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "10px", height: "200px" }}>
        {array.map((value, index) => (
          <div key={index} style={{
            width: "50px",
            height: `${value * 2}px`,
            backgroundColor: comparing.includes(index) ? "orange" : "steelblue",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            color: "white",
            transition: "height 0.3s"
          }}>
            {value}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "30px" }}>
        <button onClick={bubbleSort} disabled={sorting}>Sort</button>
        <button onClick={resetArray}>Reset</button>
        <button onClick={onBack}>Back</button>
      </div>

      {/* Explanation */}
      <div style={{
        marginTop: "40px",
        maxWidth: "500px",
        margin: "40px auto 0",
        border: "1px solid #00d4ff33",
        borderRadius: "12px",
        padding: "20px",
        textAlign: "left"
      }}>
        <h3 style={{ color: "#00d4ff", marginBottom: "10px" }}>How Bubble Sort works?</h3>
        <p>🔵 <b>Blue</b> — unsorted bars</p>
        <p>🟠 <b>Orange</b> — currently comparing</p>

        <h4 style={{ color: "#00d4ff", marginTop: "16px", marginBottom: "8px" }}>Real World Example</h4>
        <p style={{ color: "#aaa", lineHeight: "1.6" }}>
          Imagine students standing in a line by height. You walk from left to right —
          if a taller student is before a shorter one, you swap them.
          After every full pass, the tallest unsorted student reaches their correct position.
          You keep doing this until everyone is in order.
        </p>

        <h4 style={{ color: "#00d4ff", marginTop: "16px", marginBottom: "8px" }}>Algorithm</h4>
        <p style={{ color: "#aaa", lineHeight: "1.6" }}>
          Compare adjacent elements. If left &gt; right, swap them.
          Repeat until array is sorted. Largest element "bubbles up" to end each pass.
        </p>

        <p style={{ marginTop: "14px", color: "#aaa" }}>
          ⏱ Time: <b style={{ color: "white" }}>O(n²)</b> &nbsp;|&nbsp;
          💾 Space: <b style={{ color: "white" }}>O(1)</b> &nbsp;|&nbsp;
          ✅ Stable: <b style={{ color: "white" }}>Yes</b>
        </p>
      </div>

    </div>
  )
}

export default BubbleSort