const FOOTER_INFO = "© 2025 Gregory Mosia"
const MAIN_HEADER_TITLE = "FLS React 2025"
const LOGO_SRC = "../img/logo.svg"
const PROJECT_FOLDER = "/react-fls/hw1"

//** Task 4 */
// 'Рахунок у банку'\nВимоги:\n
// 1) Спочатку сума дорівнює 0грн. Змінити суму у гривнях можна або зарахуванням на рахунок, або зняттям.\n
// 2) Сума автоматично переводиться у долари та євро (фіксований курс задається у data).\n
// 3) можливість зарахувати суму (контролювати, щоб не була від’ємною)\n
// 4) можливість зняти (щоб не можна зняти більше ніж є на рахунку)\n
// 5) при виконанні зняття і зарахування коштів вираховувати 3% від суми (відображати кількість відсотків автоматично)\n\n
// При зміні суми :\n- якщо було зняття, то суму відображати червоним\n- якщо було зарахування, то суму відображати зеленим\n
// Якщо сума валюти менша за 100 то відображати червоним кольором, інакше - зеленим\n

const INFO_MESSAGES = {
    SUCCESS: { type: "success", text: "Success!" },
    BLANK: { type: "blank", text: "" },
    NOT_ENOUGH_MONEY: { type: "error", text: "Error: not enough money!" },
    INVALID_INPUT: { type: "error", text: "Error: invalid input!" },
}

const BALANCE_TOTAL_CLASS_NAME = {
    BLANK: "",
    ADD: "balance__total--add",
    WITHDRAW: "balance__total--withdraw",
}

const BALANCE_CURRENCY_CLASS_NAME = {
    BLANK: "",
    LESS: "currency-balance__less",
    MORE: "currency-balance__more",
}

function SolutionResult() {
    const [balance, setBalance] = React.useState({
        amountUAH: "",
        amountUSD: "",
        amountEUR: "",
        exchangeRateUSD: 41.72,
        exchangeRateEUR: 48,
        feeRate: 0.03,
        feeValue: null,
        message: INFO_MESSAGES.BLANK,
        balanceTotalClassName: BALANCE_TOTAL_CLASS_NAME.BLANK,
    })

    const inputId = crypto.randomUUID()
    const feeBlockId = crypto.randomUUID()

    const setMessage = (message) =>
        setBalance((prevBalance) => ({ ...prevBalance, message }))

    function showZeroInFeeBlock() {
        const feeBlock = document.getElementById(feeBlockId)
        feeBlock.textContent = `Fee (${balance.feeRate * 100}%): 0`
    }

    function handleAdd() {
        const input = document.getElementById(inputId)
        const inputValue = parseFloat(input?.value)

        if (Number.isFinite(inputValue)) {
            if (inputValue <= 0) {
                setMessage(INFO_MESSAGES.INVALID_INPUT)
            } else {
                const newAmountUAH = (
                    parseFloat(balance.amountUAH || 0) +
                    inputValue * (1 - balance.feeRate)
                ).toFixed(2)

                //* Check newAmountUAH when fee rate > 1
                if (newAmountUAH > 0) {
                    setBalance((prevBalance) => {
                        return {
                            ...prevBalance,
                            amountUAH: newAmountUAH,
                            amountUSD: (
                                newAmountUAH / prevBalance.exchangeRateUSD
                            ).toFixed(2),
                            amountEUR: (
                                newAmountUAH / prevBalance.exchangeRateEUR
                            ).toFixed(2),
                            message: INFO_MESSAGES.SUCCESS,
                            balanceTotalClassName: BALANCE_TOTAL_CLASS_NAME.ADD,
                        }
                    })
                } else {
                    setMessage(INFO_MESSAGES.NOT_ENOUGH_MONEY)
                }
            }
            input.value = ""
            showZeroInFeeBlock()
        } else {
            setMessage(INFO_MESSAGES.INVALID_INPUT)
        }
    }

    function handleWithdraw() {
        const input = document.getElementById(inputId)
        const inputValue = parseFloat(input?.value)
        if (Number.isFinite(inputValue)) {
            if (inputValue <= 0) {
                setMessage(INFO_MESSAGES.INVALID_INPUT)
            } else {
                const newAmountUAH = (
                    parseFloat(balance.amountUAH || 0) -
                    inputValue * (1 + balance.feeRate)
                ).toFixed(2)

                if (newAmountUAH > 0) {
                    setBalance((prevBalance) => {
                        return {
                            ...prevBalance,
                            amountUAH: newAmountUAH,
                            amountUSD: (
                                newAmountUAH / prevBalance.exchangeRateUSD
                            ).toFixed(2),
                            amountEUR: (
                                newAmountUAH / prevBalance.exchangeRateEUR
                            ).toFixed(2),
                            message: INFO_MESSAGES.SUCCESS,
                            balanceTotalClassName:
                                BALANCE_TOTAL_CLASS_NAME.WITHDRAW,
                        }
                    })
                } else {
                    setMessage(INFO_MESSAGES.NOT_ENOUGH_MONEY)
                }
            }
            input.value = ""
            showZeroInFeeBlock()
        } else {
            setMessage(INFO_MESSAGES.INVALID_INPUT)
        }
    }

    function handleChangeValue() {
        const input = document.getElementById(inputId)
        const inputValue = parseFloat(input?.value)

        if (Number.isFinite(inputValue)) {
            setBalance((prevBalance) => ({
                ...prevBalance,
                feeValue: (prevBalance.feeRate * inputValue).toFixed(2),
            }))
        } else {
            showZeroInFeeBlock()
        }

        setMessage(INFO_MESSAGES.BLANK)
    }

    return (
        <section className="solution-result">
            <BalanceUI
                amountUAH={balance.amountUAH}
                amountUSD={balance.amountUSD}
                amountEUR={balance.amountEUR}
                balanceTotalClassName={balance.balanceTotalClassName}
            />
            <div className="balance-block">
                <Input
                    id={inputId}
                    handleChangeValue={handleChangeValue}
                    name="amountInput"
                    type="number"
                    placeholder="Amount"
                    min="0"
                />
                <InfoBlock message={balance.message} />
                <div className="solution-result__group-buttons group-buttons">
                    <Button title="Add Money" handleOnClick={handleAdd} />
                    <Button title="Withdraw" handleOnClick={handleWithdraw} />
                </div>
            </div>
            <FeeBlock
                fee={balance.feeRate}
                feeValue={balance.feeValue}
                feeBlockId={feeBlockId}
            />
        </section>
    )
}

function BalanceUI({ amountUAH, amountUSD, amountEUR, balanceTotalClassName }) {
    const balanceCurrencyClassName = (currency) =>
        currency < 100
            ? BALANCE_CURRENCY_CLASS_NAME.LESS
            : BALANCE_CURRENCY_CLASS_NAME.MORE

    return (
        <div className="solution-result__balance balance">
            <div className="balance__title">Balance</div>
            <div className={`balance__total ${balanceTotalClassName}`}>
                {`${amountUAH || "0.00"} UAH`}
            </div>
            <div className="balance__currency currency-balance">
                <div className={balanceCurrencyClassName(amountUSD)}>
                    {`${amountUSD || "0.00"} USD`}
                </div>
                |
                <div className={balanceCurrencyClassName(amountEUR)}>
                    {`${amountEUR || "0.00"} EUR`}
                </div>
            </div>
        </div>
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

function FeeBlock({ fee, feeValue, feeBlockId }) {
    return (
        <div>
            <div id={feeBlockId}>{`Fee (${fee * 100}%): ${feeValue || 0}`}</div>
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
                        label="Task 4"
                        title="'Рахунок у банку'\nВимоги:\n1) Спочатку сума дорівнює 0грн. Змінити суму у гривнях можна або зарахуванням на рахунок, або зняттям.\n2) Сума автоматично переводиться у долари та євро (фіксований курс задається у data).\n3) можливість зарахувати суму (контролювати, щоб не була від’ємною)\n4) можливість зняти (щоб не можна зняти більше ніж є на рахунку)\n5) при виконанні зняття і зарахування коштів вираховувати 3% від суми (відображати кількість відсотків автоматично)\n\nПри зміні суми :\n- якщо було зняття, то суму відображати червоним\n- якщо було зарахування, то суму відображати зеленим\nЯкщо сума валюти менша за 100 то відображати червоним кольором, інакше - зеленим\n"
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
