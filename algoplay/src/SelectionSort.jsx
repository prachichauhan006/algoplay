import { useState } from "react"

function SelectionSort({ onBack }) {
  const [array, setArray] = useState([90, 30, 50, 10, 70])
  const [comparing, setComparing] = useState([])
  const [minIndex, setMinIndex] = useState(null)

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  const selectionSort = async () => {
    let arr = [...array]

    for (let i = 0; i < arr.length - 1; i++) {
      let min = i
      setMinIndex(min)

      for (let j = i + 1; j < arr.length; j++) {
        setComparing([min, j])
        await sleep(500)

        if (arr[j] < arr[min]) {
          min = j
          setMinIndex(min)
        }
      }

      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
      setArray([...arr])
      await sleep(500)
    }
    setComparing([])
    setMinIndex(null)
  }

  const resetArray = () => {
    const newArr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 90) + 10)
    setArray(newArr)
    setComparing([])
    setMinIndex(null)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Selection Sort</h2>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "10px", height: "200px" }}>
        {array.map((value, index) => (
          <div key={index} style={{
            width: "50px",
            height: `${value * 2}px`,
            backgroundColor: minIndex === index ? "green" : comparing.includes(index) ? "orange" : "steelblue",
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

      <button onClick={selectionSort} style={{ marginTop: "30px", marginRight: "10px" }}>Sort</button>
      <button onClick={resetArray} style={{ marginRight: "10px" }}>Reset</button>
      <button onClick={onBack}>Back</button>
    </div>
  )
}

export default SelectionSort