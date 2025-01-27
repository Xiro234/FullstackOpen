import { useState } from 'react'

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const AnecdoteDisplay = ({header, anecdote, votes}) => (
  <>
    <h1>
      {header}
    </h1>
    <div>
      {anecdote}
    </div>
    <div>
      has {votes} votes
    </div>
  </>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const anecdoteRandomizer = () => {
    const anecdoteIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(anecdoteIndex)
  }

  const vote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const bestAnecdoteIndex = () => {
    let best = 0
    let max = -1
  
    for(let i = 0; i < votes.length; i++) {
      if(votes[i] > max) {
        max = votes[i]
        best = i
      }
    }
  
    return best
  }

  return (
    <div>
      <AnecdoteDisplay header="Anecdote of the day" anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button text="next anecdote" onClick={anecdoteRandomizer}/>
      <Button text="vote" onClick={vote}/>
      <AnecdoteDisplay header="Anecdote with the most votes" anecdote={anecdotes[bestAnecdoteIndex()]} votes={votes[bestAnecdoteIndex()]} />
    </div>
  )
}

export default App