function ChangeMode(props) {
  const { back, next, changeMode } = props
  return (
    <div className="buttons">
      <button className="button" onClick={() => changeMode(back)}>
        {back}
      </button>
      <button className="button" onClick={() => changeMode(next)}>
        {next}
      </button>
    </div>
  )
}

export default ChangeMode
