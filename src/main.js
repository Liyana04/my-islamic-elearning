import './style.css'
import heroImg from './assets/hero.svg'

const app = document.querySelector('#app')

// Dummy account (pre-created)
const DUMMY_ACCOUNT = { email: 'user@example.com', password: 'password' }

// Simple client-side routing using location.hash
function navLink(label, hash) {
  return `<a class="nav-link" href="#${hash}">${label}</a>`
}

const templates = {
  navbar: () => `
    <header class="site-header">
      <div class="brand">
        <img src="${heroImg}" alt="logo" class="logo-img"/>
        <span class="brand-title">MoonTree Learning</span>
      </div>
      <nav class="site-nav">
        <div class="nav-item">${navLink('Home', '')}</div>
        <div class="nav-item dropdown">
          <a class="nav-link" href="#about">About Us ▾</a>
          <div class="dropdown-menu">
            <a href="#about-team">Our Experts</a>
            <a href="#about-mission">Our Mission</a>
            <a href="#about-contact">Contact Us</a>
          </div>
        </div>
        <div class="nav-item">${navLink('FAQs', 'faqs')}</div>
        <div class="nav-item dropdown">
          <a class="nav-link" href="#grow">Grow With Us ▾</a>
          <div class="dropdown-menu">
            <a href="#grow-creators">As Creators</a>
            <a href="#grow-preschools">As Preschools</a>
            <a href="#grow-partners">As Partners</a>
          </div>
        </div>
        <div class="nav-item dropdown">
          <a class="nav-link" href="#products">Our Products ▾</a>
          <div class="dropdown-menu">
            <a href="#prod-1">Product 1</a>
            <a href="#prod-2">Product 2</a>
            <a href="#prod-3">Product 3</a>
          </div>
        </div>
        <div class="nav-actions">
          <a class="nav-cta" href="#auth-signin">Sign In</a>
          <a class="nav-cta outline" href="#auth-signup">Sign Up</a>
        </div>
      </nav>
    </header>
  `,
  footer: () => `
    <footer class="site-footer">
      <div class="footer-grid">
        <div class="col">
          <div class="brand"><img src="${heroImg}" class="logo-img" alt=""/><div>MOONTREE</div></div>
          <small>MOSAIC Tower 2, 1, Jalan Impact, Cyberjaya</small>
        </div>
        <div class="col">
          <h4>Menu</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        <div class="col">
          <h4>About</h4>
          <ul>
            <li><a href="#">Our Experts</a></li>
            <li><a href="#">Privacy & Term</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="col">
          <h4>Our Products</h4>
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </div>
      </div>
      <small>© ${new Date().getFullYear()} Moontree (M) Sdn Bhd</small>
    </footer>
  `,
  home: () => `
    <section class="hero-section hero-landing">
      <div class="container">
        <div class="hero-content">
          <div class="eyebrow">E-COURSE PLATFORM</div>
          <h1>A Fun Way to Learn Islamic Life as a Family</h1>
          <p class="lead">Interactive stories and playful activities connecting your family to Islamic values and meaningful lessons through joy and wonder.</p>
          <div class="hero-actions">
            <a class="btn primary" href="#signup">Join for free</a>
            <a class="btn outline" href="#howitworks">Watch how it works</a>
          </div>

          <div class="hero-stats">
            <div class="stat">
              <div class="stat-num">700+</div>
              <div class="stat-label">Hours of content</div>
            </div>
            <div class="stat divider">
              <div class="stat-num">575k+</div>
              <div class="stat-label">GlobalTalk Users</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <img src="${heroImg}" alt="hero" />
        </div>
      </div>
    </section>

    <section class="page section-alt">
      <div class="container two-col">
        <div class="img-col"><img src="${heroImg}" alt="family"/></div>
        <div class="text-col">
          <h2>Nurturing family faith with joy.</h2>
          <p>Easily teach your kids Islamic values through playful stories that build lifelong love for the Deen.</p>
          <div class="hero-actions">
            <a class="btn primary" href="#signup">Join for free</a>
            <a class="btn outline" href="#howitworks">Watch how it works</a>
          </div>
        </div>
      </div>
    </section>

    <section class="page">
      <div class="container two-col reverse">
        <div class="text-col">
          <h2>Earn rewards and inspire everyone.</h2>
          <p>Earn commissions by helping parents teach kids Islamic values playfully.</p>
          <a class="btn primary" href="#grow">Become Affiliate With Us</a>
        </div>
        <div class="img-col"><img src="${heroImg}" alt="affiliate"/></div>
      </div>
    </section>

    <section class="page section-alt">
      <div class="container two-col">
        <div class="img-col"><img src="${heroImg}" alt="kid play"/></div>
        <div class="text-col">
          <h2>Big Adventures for Little Muslims</h2>
          <p>Play games, listen to exciting stories, and earn cool rewards while learning all about the beauty of Islam with your family!</p>
          <div class="hero-actions">
            <a class="btn primary" href="#signup">Join for free</a>
            <a class="btn outline" href="#howitworks">Watch how it works</a>
          </div>
        </div>
      </div>
    </section>
  `,
  about: () => `
    <section class="page">
      <h2>About Us</h2>
      <p>MoonTree Learning builds playful, values-driven e-learning for families to teach Islamic principles to children.</p>
      <p>Our mission is to make faith learning joyful and accessible.</p>
    </section>
  `,
  faqs: () => `
    <section class="page">
      <h2>FAQs</h2>
      <details>
        <summary>Is content suitable for kids?</summary>
        <p>Yes — stories and activities are designed for young learners and families.</p>
      </details>
      <details>
        <summary>Do I need to pay to start?</summary>
        <p>You can sign up for free and access sample lessons.</p>
      </details>
    </section>
  `,
  grow: () => `
    <section class="page">
      <h2>Grow With Us</h2>
      <p>Partner, create, or join our affiliate program to help more families learn together.</p>
      <a class="btn primary" href="#signup">Become an Affiliate</a>
    </section>
  `,
  auth: (mode = 'signin') => `
    <section class="page auth-page">
      <div class="auth-tabs">
        <button data-mode="signin" class="tab ${mode === 'signin' ? 'active' : ''}">Sign In</button>
        <button data-mode="signup" class="tab ${mode === 'signup' ? 'active' : ''}">Sign Up</button>
      </div>
      <div class="auth-forms">
        <form id="auth-signin-form" class="auth-form" style="display: ${mode === 'signin' ? 'block' : 'none'}">
          <label>Email <input name="email" type="email" required></label>
          <label>Password <input name="password" type="password" required></label>
          <button class="btn primary" type="submit">Sign In</button>
        </form>

        <form id="auth-signup-form" class="auth-form" style="display: ${mode === 'signup' ? 'block' : 'none'}">
          <label>Email <input name="email" type="email" required></label>
          <label>Password <input name="password" type="password" required></label>
          <button class="btn primary" type="submit">Sign Up</button>
        </form>
      </div>
    </section>
  `,

  elearning: (userEmail) => `
    <section class="page elearning-page">
      <div class="elearning-header">
        <h2>Welcome back, ${userEmail || 'Learner'}</h2>
        <div class="player-controls">
          <button id="logout" class="btn outline">Logout</button>
        </div>
      </div>

      <div class="courses-grid">
        <div class="course-card" data-src="https://www.w3schools.com/html/mov_bbb.mp4">
          <img src="${heroImg}" alt="course">
          <div class="card-body">
            <h3>Big Adventures for Little Muslims</h3>
            <div class="course-meta">
              <div class="meta-left">By MoonTree • 2h 30m</div>
              <div class="price">Free</div>
            </div>
            <button class="btn watch">Watch</button>
          </div>
        </div>

        <div class="course-card" data-src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4">
          <img src="${heroImg}" alt="course">
          <div class="card-body">
            <h3>Stories & Values</h3>
            <div class="course-meta">
              <div class="meta-left">By MoonTree • 45m</div>
              <div class="price">$4.99</div>
            </div>
            <button class="btn watch">Watch</button>
          </div>
        </div>
      </div>

      <div class="video-player">
        <video id="course-video" controls width="720">
          <source src="" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  `
}

function isLoggedIn() {
  return Boolean(localStorage.getItem('loggedIn') === 'true') || false
}

function getLoggedUser() {
  return localStorage.getItem('userEmail') || ''
}

function render() {
  const hash = location.hash.replace('#', '')
  let content = ''
  content += templates.navbar()

  switch (true) {
    case hash === '' || hash === 'home':
      content += templates.home()
      break
    case hash === 'about':
      content += templates.about()
      break
    case hash === 'faqs':
      content += templates.faqs()
      break
    case hash === 'grow':
      content += templates.grow()
      break
    case hash === 'auth-signup' || hash === 'auth-signin' || hash === 'auth':
      // determine mode
      const mode = hash === 'auth-signup' ? 'signup' : 'signin'
      content += templates.auth(mode)
      break
    case hash === 'elearning':
      if (!isLoggedIn()) {
        location.hash = 'auth-signin'
        return
      }
      content += templates.elearning(getLoggedUser())
      break
    default:
      content += `<section class="page"><h2>Page not found</h2></section>`
  }

  content += templates.footer()
  app.innerHTML = content

  // Hook up forms and interactive behaviour
  // Auth forms (signin/signup)
  const signinForm = document.getElementById('auth-signin-form')
  const signupForm = document.getElementById('auth-signup-form')

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const form = new FormData(signupForm)
      const email = form.get('email')
      const password = form.get('password')
      // store as dummy account (client-side only) and auto-login
      localStorage.setItem('dummyUserEmail', email)
      localStorage.setItem('dummyUserPassword', password)
      localStorage.setItem('loggedIn', 'true')
      localStorage.setItem('userEmail', email)
      // after signup, go to courses/elearning
      location.hash = 'elearning'
    })
  }

  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const form = new FormData(signinForm)
      const email = form.get('email')
      const password = form.get('password')
      const storedEmail = localStorage.getItem('dummyUserEmail') || DUMMY_ACCOUNT.email
      const storedPassword = localStorage.getItem('dummyUserPassword') || DUMMY_ACCOUNT.password
      if (email === storedEmail && password === storedPassword) {
        localStorage.setItem('loggedIn', 'true')
        localStorage.setItem('userEmail', email)
        location.hash = 'elearning'
      } else {
        alert('Invalid credentials. Try user@example.com / password or create an account.')
      }
    })

    // tabs switch support
    const authTabs = app.querySelectorAll('.auth-tabs .tab')
    if (authTabs.length) {
      authTabs.forEach(tab => {
        tab.addEventListener('click', (ev) => {
          const m = ev.currentTarget.getAttribute('data-mode')
          // show/hide forms
          const signin = document.getElementById('auth-signin-form')
          const signup = document.getElementById('auth-signup-form')
          if (m === 'signin') {
            signin.style.display = 'block'
            signup.style.display = 'none'
          } else {
            signin.style.display = 'none'
            signup.style.display = 'block'
          }
          // active tab styles
          authTabs.forEach(t => t.classList.toggle('active', t === ev.currentTarget))
        })
      })
    }
  }

  // Dropdown touch toggle support
  const dropdowns = app.querySelectorAll('.dropdown')
  dropdowns.forEach(d => {
    d.addEventListener('click', (ev) => {
      // toggle open class for touch devices
      if (ev.currentTarget.classList.contains('open')) {
        ev.currentTarget.classList.remove('open')
      } else {
        // close others
        document.querySelectorAll('.dropdown.open').forEach(x => x.classList.remove('open'))
        ev.currentTarget.classList.add('open')
      }
    })
  })

  // E-learning interactions
  const watchButtons = app.querySelectorAll('.course-card .watch')
  if (watchButtons.length) {
    watchButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.course-card')
        const src = card.getAttribute('data-src')
        const video = document.getElementById('course-video')
        if (video) {
          video.pause()
          video.querySelector('source').src = src
          video.load()
          video.play()
        }
      })
    })
  }

  const logout = document.getElementById('logout')
  if (logout) {
    logout.addEventListener('click', () => {
      localStorage.removeItem('loggedIn')
      localStorage.removeItem('userEmail')
      location.hash = ''
    })
  }
}

window.addEventListener('hashchange', render)
window.addEventListener('load', render)

