import { useState } from "react"

function BubbleSort({ onBack }) {
  const [array, setArray] = useState([90, 30, 50, 10, 70])
  const [comparing, setComparing] = useState([])

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  const bubbleSort = async () => {
    let arr = [...array]

  const resetArray = () => {
    const newArr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 90) + 10)
    setArray(newArr)
    setComparing([])
    
}

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {

        setComparing([j, j + 1])           // ye do bars highlight karo
        await sleep(500)                    // 500ms ruko

        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]                 // swap karo
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
          setArray([...arr])               // screen update karo
          await sleep(500)
        }
      }
    }
    setComparing([])                        // sorting done, highlight hatao
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Bubble Sort</h2>

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

      <button onClick={bubbleSort} style={{ marginTop: "30px", marginRight: "10px" }}>Sort</button>
      <button onClick={resetArray} style={{ marginRight: "10px" }}>Reset</button>
      <button onClick={onBack}>Back</button>
    </div>
  )
}

export default BubbleSort