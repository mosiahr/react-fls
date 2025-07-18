const FOOTER_INFO = "© 2025 Gregory Mosia"
const MAIN_HEADER_TITLE = "FLS React 2025"
const LOGO_SRC = "../img/logo.svg"
const PROJECT_FOLDER = "/react-fls/hw1"

//** Task 2 */
// Вводиться номер місяця. Автоматично виводити рекомендований одяг (зима – пальто, літо – шорти ….).
// Також автоматично виводити зображення з відповідним зображенням лісу (зима – ліс зі снігом, осінь – жовтий ліс, …).

function SolutionResult() {
    const [monthNumber, setMonthNumber] = React.useState(1)

    function handlerMonthNumberChange(event) {
        const value = parseInt(event.target.value)
        if (!Number.isFinite(value) || value < 1 || value > 12)
            setMonthNumber(1)
        else setMonthNumber(value)
    }

    const season = Season.getSeasonByMonth(monthNumber)

    return (
        <section className="solution-result">
            <Input
                value={monthNumber}
                handlerValueChange={handlerMonthNumberChange}
                name=""
                type="number"
                placeholder="Enter Month Number"
                labelMessage="Month Number:"
            />
            <ResultBlock
                name={season.name}
                clothes={season.clothes}
                pathImg={season.pathImg}
            />
        </section>
    )
}

class Season {
    static WINTER = {
        name: "Winter",
        monthNumbers: [12, 1, 2],
        clothes: "Пальто, Чоботи, Шапка",
        pathImg: "../img/winter.png",
    }
    static SPRING = {
        name: "Spring",
        monthNumbers: [3, 4, 5],
        clothes: "Куртка, Шапка",
        pathImg: "../img/spring.png",
    }
    static SUMMER = {
        name: "Summer",
        monthNumbers: [6, 7, 8],
        clothes: "Футболка, Кепка",
        pathImg: "../img/summer.png",
    }
    static AUTUMN = {
        name: "Autumn",
        monthNumbers: [9, 10, 11],
        clothes: "Плащ, Чоботи, Шапка",
        pathImg: "../img/autumn.png",
    }

    static getSeasonByMonth(month) {
        for (const season of [
            this.WINTER,
            this.SPRING,
            this.SUMMER,
            this.AUTUMN,
        ]) {
            if (season.monthNumbers.includes(month)) return season
        }
        throw new Error("Season not found!")
    }
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
        <div className="solution-result__number-field solution-result__number-field--short">
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

function ResultBlock({ name, clothes, pathImg }) {
    return (
        <div className="solution-result__block">
            <h3 className="solution-result__title">Result</h3>
            <div>{`Season: ${name}`}</div>
            <div>{`Essential Clothes: ${clothes}`}</div>
            <div className="solution-result__img">
                <img src={pathImg} alt={name} />
            </div>
        </div>
    )
}

function Main() {
    return (
        <main className="page">
            <div className="page__container">
                <div className="page-block">
                    <PageHeader
                        label="Task 2"
                        title="Вводиться номер місяця. Автоматично виводити рекомендований одяг (зима – пальто, літо – шорти ….). 
						Також автоматично виводити зображення з відповідним зображенням лісу (зима – ліс зі снігом, осінь – жовтий ліс, …)."
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
