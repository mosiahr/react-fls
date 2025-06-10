const FOOTER_INFO = "© 2025 Gregory Mosia"
const MAIN_HEADER_TITLE = "FLS React 2025"
const LOGO_SRC = "../img/logo.svg"
const PROJECT_FOLDER = "/react-fls/hw1"

//** Task 1 */
// Вводиться кількість пасажирів. Вивести: скільки потрібно автобусів (кожен автобус на 20 місць)
//  скільки пляшок води (кожному пасажиру 2 пляшки) скільки бутербродів (кожному пасажиру 3 бутерброди)
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
            aria-hidden="true"
            data-slot="icon"
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

function PassangerInput({ passangerNumber, handlerPassangerNumberChange }) {
    return (
        <React.Fragment>
            <div className="solution-result__number-field">
                <label htmlFor="num">
                    Кількість пасажирів <QuestionMarkIcon />
                </label>
                <div className="">
                    <input
                        id="num"
                        name="num"
                        type="number"
                        placeholder="Enter Number"
                        value={passangerNumber}
                        onChange={handlerPassangerNumberChange}
                    />
                </div>
            </div>
        </React.Fragment>
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

function SolutionResult() {
    const [passangerNumber, setPassangerNumber] = React.useState(0)

    function handlerPassangerNumberChange(event) {
        const value = parseInt(event.target.value)
        if (!Number.isFinite(value) || value < 0) setPassangerNumber(0)
        else setPassangerNumber(value)
    }

    const getBusNumber = (passangerNumber) => Math.ceil(passangerNumber / 20)

    return (
        <section className="solution-result">
            <PassangerInput
                passangerNumber={passangerNumber}
                handlerPassangerNumberChange={handlerPassangerNumberChange}
            />
            <ResultTable
                busNum={getBusNumber(passangerNumber)}
                bottleNum={passangerNumber * 2}
                sandwichNum={passangerNumber * 3}
            />
        </section>
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
