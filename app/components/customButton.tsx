const customButton = ({onClick, text}: any) => {
  return (
    <button
    className="btn w-full"
    onClick={onClick}
    >
        {text}
    </button>
  )
}

export default customButton