const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = ({name}) => {
    return(
      <h1>{name}</h1>
    )
  }

  const Part = (props) => {
    return(
      <p>{props.part} {props.exercise}</p>
    )
  }

  const Content = ({p1, p2, p3, e1, e2,e3}) => {
    return(
      <div>
        <Part part={p1} exercise={e1} />
        <Part part={p2} exercise={e2} />
        <Part part={p3} exercise={e3} />
      </div>
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
      <Content p1={part1.name} e1={part1.exercises} p2={part2.name} e2={part2.exercises} p3={part3.name} e3={part3.exercises}/>
    <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises} />
    </div>
  )
}

export default App
