import NewLineText from './NewLineText'

function PageHeader({ label, title }) {
  return (
    <div className="page-block__title title-block">
      <h5>{label}</h5>
      <h2>
        {title}
        {/* <NewLineText text={title} /> */}
      </h2>
    </div>
  )
}

export default PageHeader
