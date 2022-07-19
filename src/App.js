import './App.css'
const Test = () => {
    return <div>Hello world~</div>
}
const loop = (num) => {
    let arr = []
    for (let i = 0; i <= num; i++) {
        arr.push(i)
    }
    return arr
}
function App() {
    return (
        <div className='App'>
            {loop(100).map((r) => (
                <Test key={r} />
            ))}
        </div>
    )
}

export default App
