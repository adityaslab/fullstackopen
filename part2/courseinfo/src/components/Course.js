import Total from "./components/Total"
import Content from "./components/Content"
import Header from "./components/Header"

const Course = ({course}) => {
  return(
    <div>
      <h1>Web development curriculum</h1>
      {
        course.map(course =>
          <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>)
      }
    </div>
  )
}
export default Course