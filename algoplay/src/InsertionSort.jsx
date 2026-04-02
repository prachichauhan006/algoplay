import { useState } from "react"

function InsertionSort({ onBack }) {
  const [array, setArray] = useState([90, 30, 50, 10, 70])
  const [comparing, setComparing] = useState([])
  const [currentIndex, setCurrentIndex] = useState(null)

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  const insertionSort = async () => {
    let arr = [...array]

    for (let i = 1; i < arr.length; i++) {
      let key = arr[i]
      let j = i - 1
      setCurrentIndex(i)

      while (j >= 0 && arr[j] > key) {
        setComparing([j, j + 1])
        await sleep(500)

        arr[j + 1] = arr[j]
        j--
        setArray([...arr])
        await sleep(500)
      }

      arr[j + 1] = key
      setArray([...arr])
      await sleep(500)
    }
    setComparing([])
    setCurrentIndex(null)
  }

  const resetArray = () => {
    const newArr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 90) + 10)
    setArray(newArr)
    setComparing([])
    setCurrentIndex(null)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Insertion Sort</h2>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "10px", height: "200px" }}>
        {array.map((value, index) => (
          <div key={index} style={{
            width: "50px",
            height: `${value * 2}px`,
            backgroundColor: currentIndex === index ? "green" : comparing.includes(index) ? "orange" : "steelblue",
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

      <button onClick={insertionSort} style={{ marginTop: "30px", marginRight: "10px" }}>Sort</button>
      <button onClick={resetArray} style={{ marginRight: "10px" }}>Reset</button>
      <button onClick={onBack}>Back</button>
    </div>
  )
}

export default InsertionSort