import { CONSTANTS } from '../../constants/confConstants'
import ThemeToggle from '../ThemeToggle'

function AppHeader({ title, logoUrl }) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav">
          <a className="header__logo" href={CONSTANTS.PROJECT_FOLDER}>
            <img src={logoUrl} alt="React Logo" />
            <h2>{title}</h2>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default AppHeader
