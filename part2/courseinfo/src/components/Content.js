import Part from "./components/Part"

const Content = ({ parts }) => {
  return(
    <div>
      {parts.map(part =>
        <div>
          <Part part={part}/>
        </div>
      )}
    </div>
  )
}

export default Content