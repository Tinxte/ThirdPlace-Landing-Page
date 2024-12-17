import './App.css'
import NavBar from './components/navigation/NavBar'
import homePageImg from '../src/assets/ThirdPlace_home page.png'
import viewLocationsImg from '../src/assets/ThirdPlace_view locations.png'
import Logo from './components/navigation/Logo'

function App() {

  return (


    <>
        <div className='outer-container'>
          <div className='logo'>
            <Logo/>
          </div>

          <div className='inner-container'>
            <div className='description'>
              <h1>Connect with your local community for free</h1>
              <p>We’re launching ThirdPlace soon! Explore “third places” in your area and build community in physical spaces near you.</p>
              <p>Sign up to be notified when ThirdPlace goes live!</p>
            </div>

            <div>
              <form>
                <label className="form-label">
                  <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    className="form-control"
                    required
                  />
                </label>

                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
    </>
    
  )
}

export default App
