import { useState } from 'react'

const Header = (props) => (
  <h1>{props.title}</h1>
)

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <p>
      {props.name} {props.count}
    </p>
  )
}

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  if (all == 0) {
    return (
      <p>No feedback given</p>
    )  
    } else {
    return (
      <>
      <Display name="good" count={props.good} />
      <Display name="neutral" count={props.neutral} />
      <Display name="bad" count={props.bad} />
        <p>
          all {all}
        </p>
        <p>
          average {(props.good - props.bad)/all}
        </p>
        <p>
          positive {props.good/all*100} %
        </p>
      </>
    )
  }

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Header title="give feedback" />
      <Button handleClick={increaseGood} text='good' />
      <Button handleClick={increaseNeutral} text='neutral' />
      <Button handleClick={increaseBad} text='bad' />
      <Header title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
