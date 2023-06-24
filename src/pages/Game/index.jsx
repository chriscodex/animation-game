import './styles.css'

function Game() {
  return (
    <div className='game-container'>
      <ul>
        <li><input type="checkbox" className='game-shield' /></li>
        <li><input type="checkbox" className='game-shield' /></li>
        <li><input type="checkbox" className='game-shield' /></li>
        <li><input type="checkbox" className='game-shield' /></li>
      </ul>
      <h3 className='total-count'>Score: </h3>
    </div>
  )
}

export { Game }