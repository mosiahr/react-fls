const FOOTER_INFO = "© 2025 Gregory Mosia"
const MAIN_HEADER_TITLE = "FLS React 2025"
const LOGO_SRC = "../img/logo.svg"
const PROJECT_FOLDER = "/react-fls/hw1"

//** Task 3 */
// Задано початок та кінець діапазону. При натисканні на кнопку випадковим чином генерувати значення
// з вказаного діапазону та відображати його.

function SolutionResult() {
    const [range, setRange] = React.useState({ min: "", max: "" })
    const [randomNumber, setRandomNumber] = React.useState(null)

    function handlerRange(event) {
        const { name, value } = event.target
        setRange((prev) => ({ ...prev, [name]: parseInt(value) }))
    }

    function getRandomNumber(minNumber, maxNumber) {
        if (!Number.isFinite(minNumber) || !Number.isFinite(maxNumber))
            throw new TypeError("A minNumber and a maxNumber must be a number")
        return (
            minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
        )
    }

    function generateRandomNumber() {
        if (Number.isFinite(range.min) && Number.isFinite(range.max)) {
            const randomNumber = getRandomNumber(range.min, range.max)
            setRandomNumber(randomNumber)
        }
    }

    return (
        <section className="solution-result">
            <div className="solution-result solution-result--short">
                <Input
                    value={range.min}
                    handlerValueChange={handlerRange}
                    name="min"
                    type="number"
                    placeholder="Enter First Number"
                    labelMessage="From:"
                />
                <Input
                    value={range.max}
                    handlerValueChange={handlerRange}
                    name="max"
                    type="number"
                    placeholder="Enter Second Number"
                    labelMessage="To:"
                />
                <Button
                    message="Generate Number"
                    handlerOnClick={generateRandomNumber}
                />
                <ResultBlock randomNumber={randomNumber} />
            </div>
        </section>
    )
}

function Button({ message, handlerOnClick }) {
    return (
        <button className="button" type="button" onClick={handlerOnClick}>
            {message}
        </button>
    )
}

// Page
function Header({ title, logoUrl = LOGO_SRC }) {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__block">
                    <a href={PROJECT_FOLDER}>
                        <img src={logoUrl} alt="Image" />
                    </a>
                    <h2>{title}</h2>
                </div>
            </div>
        </header>
    )
}

function Input({
    value,
    handlerValueChange,
    name,
    type,
    placeholder,
    labelMessage,
    id = crypto.randomUUID(),
}) {
    return (
        <div className="solution-result__number-field">
            <label htmlFor={id}>{labelMessage}</label>
            <div className="">
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handlerValueChange}
                />
            </div>
        </div>
    )
}

function ResultBlock({ randomNumber }) {
    return (
        <div className="solution-result__block">
            <h3 className="solution-result__title">Result</h3>
            <div  className="block__random-number">{randomNumber}</div>
        </div>
    )
}

function Main() {
    return (
        <main className="page">
            <div className="page__container">
                <div className="page-block">
                    <PageHeader
                        label="Task 3"
                        title="Задано початок та кінець діапазону. При натисканні на кнопку випадковим чином генерувати значення з вказаного діапазону та відображати його."
                    />
                    <SolutionResult />
                </div>
            </div>
        </main>
    )
}

function PageHeader({ label, title }) {
    return (
        <div className="page-block__title title-block">
            <h5>{label}</h5>
            <h2>{title}</h2>
        </div>
    )
}

function Footer({ text }) {
    return (
        <footer className="footer">
            <div className="footer__container">
                <span>{text}</span>
            </div>
        </footer>
    )
}

function App() {
    return (
        <div className="wrapper">
            <Header title={MAIN_HEADER_TITLE} />
            <Main />
            <Footer text={FOOTER_INFO} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
