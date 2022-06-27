import PropTypes from 'prop-types'
import React from 'react'
import blogMain from '../images/blogMain.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.png'
import rapstaBot from '../images/rapsta-bot.png'
import meToo from '../images/me-too.png'
import pong1 from '../images/pong1.png'
import pong2 from '../images/pong2.png'
import cliptuber from '../images/cliptuber.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="blog"
          className={`${this.props.article === 'blog' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Blog</h2>
          <span className="image main">
            <a href='https://blog.antoniosolismz.com/' target="_blank" rel="noreferrer"> <img src={blogMain} alt="Main screen of the blog" /> </a>  
          </span>
          <p>
            I have a Blog where I share the process behind projects I've worked
            on or general things that I've found interesting and want to talk
            about. It is more of a resource for me to quickly find the steps
            to repeat something I've done before, but I figured it may be helpful
            to someone, so if you're interested check out 
            <a href="https://blog.antoniosolismz.com/" target="_blank" rel="noreferrer"> my blog</a>.
          </p>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>

          <h3> Discord bot: Rapsta Bot. </h3>
          <span className="image main">
            <a href='https://github.com/otelo2/Rapsta-Bot' target="blank" rel="noreferrer"> <img src={rapstaBot} alt="Rapsta bot" /> </a>  
          </span>
          <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
          <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
          <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
          <p>JavaScript Discord bot using Discord.js for the server with my friends. Hosted using Heroku and implemented a connection to a PostgreSQL database to store birthdays.</p>

          <h3> Me Too Browser. </h3>
          <span className="image main">
            <a href='https://github.com/otelo2/MeTooTlaxcala' target="blank" rel="noreferrer"> <img src={meToo} alt="Me Too" /> </a>  
          </span>
          <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" />
          <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
          <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
          <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
          <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg" />
          <p>Checks the Me Too Twitter page of my state to find new tweets, save them to a database (PostgreSQL), and adding it to a JSON file so they can be looked up using a web frontend.
             I made it so people can easily check if someone has been reported as an abuser without having to go to the Twitter page, and as a backup if it were taken down.
             The code is honestly super convoluted as my goal was to have it work automatically with little human intervention. Not my best but probably the biggest project scope wise.
          </p>

          <h3> Pong game. </h3>
          <span className="image main">
            <a href='https://github.com/otelo2/Custom-Pong' target="blank" rel="noreferrer"> <img src={pong1} alt="Pong 1" /> </a>  
            <a href='https://github.com/otelo2/Custom-Pong' target="blank" rel="noreferrer"> <img src={pong2} alt="Pong 2" /> </a>  
          </span>
          <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-plain-wordmark.svg" />
          <p>Written in Love2D. A modification of the pong tutorial by Colton Ogden for my video games lab course. I added some basic logic so you could play against the computer and another player
            (original project was only against other players).
          </p>

          <h3> Annoying clip tuber </h3>
          <span className="image main">
            <a href='https://github.com/otelo2/Annoying-Clip-Tuber' target="blank" rel="noreferrer"> <img src={cliptuber} alt="Cliptuber" /> </a>  
          </span>
          <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" />
          
          <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" />
          
          <p>For a while there was a surge of YouTube channels that just were downloading Twitch clips of popular streamers, uploading them to YouTube, and getting a ton of views.
            Using selenium webdriver to automate the retrieval of clip links (so I woudn't need to use an API) this program automatically downloads clips in parallel from specified streamers.
            Downloading the clips in parallel was groundbreaking in terms of speed and efficiency. 
          </p>
          <p>No screenshots of the execution because Twitch updated their site (so the automatic browser is broken)</p>
          <p>I really like automation tho. This was a very fun project.</p>

          <h3> And some more </h3>
          <p>I've done some other projects that I feel like don't deserve to be here, but you can check them out in <a href="https://github.com/otelo2?tab=repositories" > my GitHub.</a></p>
            
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I am a mexican Computer Systems Engineer with a passion for cybersecurity and
            technology in general. 
          </p>
          <p>
            My favorite programming language is Python, but
            I've used Java, C, JavaScript, etc. I'd say my biggest skill for programming
            is being able to quickly pick up a language I've never used before. 
          </p>
          <p>
            As for cybersecurity, I've had experience with platforms like HackTheBox and
            TryHackMe, with the latter being ranked in the top 2% of the world.
          </p>
          <p>
            I am currently looking for opportunities to relocate to Canada and start my 
            career in the tech industry!
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:antonio.solismz@outlook.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/antoniosolismz" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-sol%C3%ADs-mart%C3%ADnez-07b4a8192/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="mailto:antonio.solismz@outlook.com" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/otelo2/" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
