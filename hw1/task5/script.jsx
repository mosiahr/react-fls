const FOOTER_INFO = "© 2025 Gregory Mosia"
const MAIN_HEADER_TITLE = "FLS React 2025"
const LOGO_SRC = "../img/logo.svg"
const PROJECT_FOLDER = "/react-fls/hw1"

//** Task 5 */
// Додаток містить масив об’єктів (логін, пароль) --  існуючі логіни і паролі.
//  Користувач вводить логін і пароль, а програма при натисненні на кнопку повідомляє чи може користувач бути авторизованим.

const INFO_MESSAGES = {
    SUCCESS: { type: "success", text: "Login successful!" },
    BLANK: { type: "blank", text: "" },
    INCORRECT_LOGIN: { type: "error", text: "Incorrect login or password!" },
}

const userRegistrationList = [
    { login: "user1", pass: "pass123" },
    { login: "admin", pass: "admin2025" },
    { login: "test", pass: "qwerty" },
]

function SolutionResult() {
    return (
        <section className="solution-result">
            <LoginForm userList={userRegistrationList} />
            <UserList userList={userRegistrationList} />
        </section>
    )
}

function LoginForm({ userList }) {
    const [infoMessage, setInfoMessage] = React.useState(INFO_MESSAGES.BLANK)

    const inputLoginId = crypto.randomUUID()
    const inputPassId = crypto.randomUUID()

    function login() {
        const inputLogin = document.getElementById(inputLoginId)
        const inputPass = document.getElementById(inputPassId)

        const login = inputLogin?.value
        const pass = inputPass?.value

        if (login && pass) {
            if (
                userList.find(
                    (user) => user.login === login && user.pass === pass
                )
            ) {
                setInfoMessage(INFO_MESSAGES.SUCCESS)
            } else {
                setInfoMessage(INFO_MESSAGES.INCORRECT_LOGIN)
            }
        } else {
            setInfoMessage(INFO_MESSAGES.INCORRECT_LOGIN)
        }
    }

    return (
        <form method="get" className="login-form">
            <div className="solution-result__title">Sign In</div>
            <Input id={inputLoginId} placeholder="Login" type="text" />
            <Input id={inputPassId} placeholder="Password" type="password" />
            <Button title="Sign In" handleOnClick={login} />
            <InfoBlock message={infoMessage} />
        </form>
    )
}

function Button({ title, handleOnClick }) {
    return (
        <button className="button" type="button" onClick={handleOnClick}>
            {title}
        </button>
    )
}

function InfoBlock({ message }) {
    return (
        <div
            className={`solution-result__info-block info-block info-block--${message.type}`}
        >
            {message.text}
        </div>
    )
}

function UserList({ userList }) {
    const listItems = userList.map((user, i) => (
        <li key={i}>
            Login: {user.login} / Password: {user.pass}
        </li>
    ))
    return (
        <div>
            <h2>User Registration List: </h2>
            <ul>{listItems}</ul>
        </div>
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
    id = crypto.randomUUID(),
    value,
    handleChangeValue,
    name,
    type,
    placeholder,
}) {
    return (
        <div className="solution-result__number-field">
            <div className="">
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChangeValue}
                    min="0"
                />
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
                        label="Task 5"
                        title="Додаток містить масив об’єктів (логін, пароль) --  існуючі логіни і паролі. Користувач вводить логін і пароль, а програма при натисненні на кнопку повідомляє чи може користувач бути авторизованим."
                    />
                    <SolutionResult />
                </div>
            </div>
        </main>
    )
}

function NewlineText({ text }) {
    return text
        .split(/\\n+/)
        .map((str) => <p key={crypto.randomUUID()}>{str}</p>)
}

function PageHeader({ label, title }) {
    return (
        <div className="page-block__title title-block">
            <h5>{label}</h5>
            <h2>
                <NewlineText text={title} />
            </h2>
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
