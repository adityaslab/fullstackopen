const Total = ({ parts }) =>{
  const sum = parts.reduce(
    (a,b)=>a+b.exercises,
    0)
    return(
      <b>total of {sum} exercises</b>
    )
}

export default Total