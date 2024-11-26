import './App.css'
import NavBar from './components/navigation/NavBar'
import homePageImg from '../src/assets/ThirdPlace_home page.png'
import viewLocationsImg from '../src/assets/ThirdPlace_view locations.png'

function App() {

  return (


    <>
      <NavBar/>

      <section id='home'>
        <h1>Welcome to ThirdPlace!</h1>

        <div className="review-card">
          <p>An app where you can browse, submit, and review physical locations to hang out at for no cost. There is a loneliness epidemic happening, and people are feeling more isolated than ever. People need free "third places" to socialize and hang out in public. Join now and find community in a third place near you.</p>
        </div>

        <a href='#about'>
          <button>Learn More</button>
        </a>
      </section>

      <section id='about'>
        <div>
          <h2>About the Project</h2>
          <p>ThirdPlace was create as our capstone project during LaunchCode's Web Development program in 2024. Part of our team decided that we wanted to continue development of this project and we hope to complete our vision soon.</p>
        </div>
        <div className='img-divs'>
          <img 
            src={homePageImg}
            id='home-page-img'
          ></img>
        </div>
        {/* <div className='img-divs'>
          <img 
            src={viewLocationsImg}
            id='view-locations-img'
          ></img>
        </div> */}
        <a href='#learn-more'>
          <button>Learn More</button>
        </a>
      </section>

      <section id='learn-more'>
        <h2>Interested?</h2>
        <p>Sign up to be notified about updates and launch information!</p>
        <div className='container'>
          <form>
            <label className="form-label">
              {/* Name */}
              <input
                type='text'
                name='name'
                placeholder='Name'
                className="form-control"
                required
              />
            </label>
            <label className="form-label">
              {/* Email */}
              <input
                type='text'
                name='email'
                placeholder='Email'
                className="form-control"
                required
              />
            </label>
            <label className="form-label">
              {/* What interests you about this project? */}
              <textarea
                name='question'
                placeholder='What interests you about this project?'
                className="form-control"
                color='5'
                rows={5}
                required
              />
            </label>

            <button className='sign-up'>Sign Up</button>
          </form>
        </div>

        <div className='top-btn'>
          <div>
            <a href='#about'>
              <button className='back-to-top'>About</button>
            </a>
          </div>
          <div>
            <a href='#'>
              <button className='back-to-top'>Back to Top</button>
            </a>
          </div>
        </div>
      </section>

    </>
    
  )
}

export default App
