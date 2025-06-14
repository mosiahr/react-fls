const FOOTER_INFO = "© 2025 Gregory Mosia"
const MAIN_HEADER_TITLE = "FLS React 2025"
const LOGO_SRC = "../img/logo.svg"
const PROJECT_FOLDER = "/react-fls/hw1"

//** Task 1 */
// Вводиться кількість пасажирів. Вивести: скільки потрібно автобусів (кожен автобус на 20 місць)
//  скільки пляшок води (кожному пасажиру 2 пляшки) скільки бутербродів (кожному пасажиру 3 бутерброди)

function SolutionResult() {
    const [passengerNumber, setPassengerNumber] = React.useState(0)

    function handlerPassengerNumberChange(event) {
        const value = parseInt(event.target.value)
        if (!Number.isFinite(value) || value < 0) setPassengerNumber(0)
        else setPassengerNumber(value)
    }

    const getBusNumber = (passengerNumber) => Math.ceil(passengerNumber / 20)

    return (
        <section className="solution-result">
            <PassengerInput
                passengerNumber={passengerNumber}
                handlerPassengerNumberChange={handlerPassengerNumberChange}
            />
            <ResultTable
                busNum={getBusNumber(passengerNumber)}
                bottleNum={passengerNumber * 2}
                sandwichNum={passengerNumber * 3}
            />
        </section>
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

function QuestionMarkIcon() {
    return (
        <svg
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className=""
        >
            <path
                fillRule="evenodd"
                d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-6 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.293 5.293a1 1 0 1 1 .99 1.667c-.459.134-1.033.566-1.033 1.29v.25a.75.75 0 1 0 1.5 0v-.115a2.5 2.5 0 1 0-2.518-4.153.75.75 0 1 0 1.061 1.06Z"
                clipRule="evenodd"
            ></path>
        </svg>
    )
}

function PassengerInput({ passengerNumber, handlerPassengerNumberChange }) {
    return (
        <div className="solution-result__number-field solution-result__number-field--short">
            <label htmlFor="num">
                Кількість пасажирів <QuestionMarkIcon />
            </label>
            <div className="">
                <input
                    id="num"
                    name="num"
                    type="number"
                    placeholder="Enter Number"
                    value={passengerNumber}
                    onChange={handlerPassengerNumberChange}
                />
            </div>
        </div>
    )
}

function ResultTable({ busNum, bottleNum, sandwichNum }) {
    return (
        <table className="solution-result__table">
            <caption>Result</caption>
            <thead>
                <tr>
                    <th className="">К-ть автобусів</th>
                    <th className="">К-ть бутилок води</th>
                    <th className="">К-ть бутербродів</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="">{busNum || 0}</td>
                    <td className="">{bottleNum || 0}</td>
                    <td className="">{sandwichNum || 0}</td>
                </tr>
            </tbody>
        </table>
    )
}

function Main() {
    return (
        <main className="page">
            <div className="page__container">
                <div className="page-block">
                    <PageHeader
                        label="Task 1"
                        title="Вводиться кількість пасажирів. Вивести:
						скільки потрібно автобусів (кожен автобус на 20 місць)
						скільки пляшок води (кожному пасажиру 2 пляшки)
						скільки бутербродів (кожному пасажиру 3 бутерброди)"
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
