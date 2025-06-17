import { CONSTANTS } from '../../constants/confConstants'

function AppHeader({ title, logoUrl }) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__block">
          <a href={CONSTANTS.PROJECT_FOLDER}>
            <img src={logoUrl} alt="React Logo" />
          </a>
          <h2>{title}</h2>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
