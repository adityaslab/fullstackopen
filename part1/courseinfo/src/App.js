const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = ({name}) => {
    return(
      <h1>{name}</h1>
    )
  }

  const Content = ({part, exercise}) => {
    return(
      <p>
        {part} {exercise}
      </p>
    )
  }

  const Total = (props) => {
    return(
      <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
    )
  }
  return (
    <div>
      <Header name={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
    <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  )
}

export default App
