// import List from "./components/List.jsx"
// import React, { Component } from "react"
// import ReactDOM from "react-dom"
// import data from "./data.json"
// let data = require("./data.json")

const fetchJson = () => {
    const [data, setData] = useState()

    fetch("./data.json")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setData(data)
        })
        .catch((e) => {
            console.log(e.message)
        })
}

class Task {
    constructor(id, title = "Task") {
        this.id = id
        this.title = title
    }

    [Symbol.toPrimitive](hint) {
        let res
        switch (hint) {
            case "string":
                res = this.title
                break
            case "number":
                res = this.id
                break
            default:
                this.title
                break
        }
        return res
    }
}

function List() {
    const tasks = []

    fetchJson()

    console.log(data)

    // let result = className ? `<ul>` : `<ul>`
    // for (let i = 0; i < props.length; i++) {
    //     const item = items[i]
    // if (stringify == true && typeof item === "object")
    //     result += `<li>${JSON.stringify(item)}</li>`
    // else result += `<li>${item}</li>`
    // result += `<li>${item}</li>`
    // }
    // result += `</ul>`
    // return result
    // return <h1>Привіт, {props.name}!</h1>
}

const App = () => {
    return (
        <div>
            <h1>Lesson 1</h1>
            <List />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
