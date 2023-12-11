import './App.css'
import logo from './assets/discord-logo-white.png'
import menuIcon from './assets/menu-icon.png'
import backgroundImage from './assets/discord-background.png'

function App() {
  return (
  <div className="App">
    <div className='navBar'>
      <img src={logo} alt='discord logo'/>
      <img src={menuIcon} alt='burger menu icon'/>
    </div>
    <div className='HeroContainer'>
    <div className='HeroElements'>
      <h1>IMAGINE A PLACE...</h1>
      <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often. </p>
      <button className='whiteButton'>Download for Mac</button>
      <button className='blackButton'>Open Discord in your browser</button>
    </div>
    </div>
  </div>
  )
}

export default App
