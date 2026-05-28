import './style.css'
import heroImg from './assets/hero.svg'
import authImg from './assets/auth.svg'
import section2Img from './assets/section2.svg'
import section3Img from './assets/section3.svg'
import section4Img from './assets/section4.svg'
import logoImg from '/logo.svg'

const app = document.querySelector('#app')

// Dummy account (pre-created)
const DUMMY_ACCOUNT = { email: 'user@example.com', password: 'password' }

// Simple client-side routing using location.hash
function navLink(label, hash) {
  return `<a class="text-gray-900 px-2.5 py-2 rounded hover:bg-gray-100" href="#${hash}">${label}</a>`
}

const templates = {
  navbar: () => `
    <header class="flex justify-between items-center px-6 py-[18px] border-b border-gray-200">
      <div class="flex items-center gap-3">
        <img src="${logoImg}" alt="logo" class="object-cover rounded-lg"/>
      </div>
      <nav class="flex items-center gap-3">
        <div>${navLink('Home', '')}</div>
        <div class="relative group">
          <div class="text-gray-900 px-2.5 py-2 cursor-pointer hover:text-purple-600" >About Us ▾</div>
          <div class="hidden group-hover:block absolute top-full left-0 bg-white border border-gray-200 p-2.5 rounded-lg min-w-[180px] shadow-lg z-60">
            <a href="#about-team" class="block px-2.5 py-2 rounded hover:bg-gray-100">Our Experts</a>
            <a href="#about-mission" class="block px-2.5 py-2 rounded hover:bg-gray-100">Our Mission</a>
            <a href="#about-contact" class="block px-2.5 py-2 rounded hover:bg-gray-100">Contact Us</a>
          </div>
        </div>
        <div>${navLink('FAQs', 'faqs')}</div>
        <div class="relative group">
          <div class="text-gray-900 px-2.5 py-2 cursor-pointer hover:text-purple-600" >Grow With Us ▾</div>
          <div class="hidden group-hover:block absolute top-full left-0 bg-white border border-gray-200 p-2.5 rounded-lg min-w-[180px] shadow-lg z-60">
            <a href="#grow-creators" class="block px-2.5 py-2 rounded hover:bg-gray-100">As Creators</a>
            <a href="#grow-preschools" class="block px-2.5 py-2 rounded hover:bg-gray-100">As Preschools</a>
            <a href="#grow-partners" class="block px-2.5 py-2 rounded hover:bg-gray-100">As Partners</a>
          </div>
        </div>
        <div class="relative group">
          <div class="text-gray-900 px-2.5 py-2 cursor-pointer hover:text-purple-600" >Our Products ▾</div>
          <div class="hidden group-hover:block absolute top-full left-0 bg-white border border-gray-200 p-2.5 rounded-lg min-w-[180px] shadow-lg z-60">
            <a href="#prod-1" class="block px-2.5 py-2 rounded hover:bg-gray-100">Product 1</a>
            <a href="#prod-2" class="block px-2.5 py-2 rounded hover:bg-gray-100">Product 2</a>
            <a href="#prod-3" class="block px-2.5 py-2 rounded hover:bg-gray-100">Product 3</a>
          </div>
        </div>
        <div class="flex gap-3">
          <a class="inline-flex gap-2 px-4 py-2 rounded-lg bg-purple-600 no-underline text-white hover:bg-purple-600 hover:shadow-lg" href="/#auth-signin" target="_blank">Login <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
          </a>
        </div>
      </nav>
    </header>
  `,
  footer: () => `
    <footer class="p-6 border-t border-gray-200 text-left">
      <div class="grid grid-cols-4 gap-3 max-w-[1126px] mx-auto mb-6">
        <div>
          <div class="flex items-center gap-3 mb-3"><img src="${logoImg}" class="w-12 h-12 object-cover rounded-lg" alt=""/><div class="font-semibold">MOONTREE</div></div>
          <small class="text-gray-600 text-xs">MOSAIC Tower 2, 1, Jalan Impact, Cyberjaya</small>
        </div>
        <div>
          <h4 class="font-semibold mb-2">Menu</h4>
          <ul class="list-none p-0 space-y-1">
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">FAQs</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Help</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-2">About</h4>
          <ul class="list-none p-0 space-y-1">
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Our Experts</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Privacy & Term</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-2">Our Products</h4>
          <ul class="list-none p-0 space-y-1">
            <li class="text-gray-600">Product 1</li>
            <li class="text-gray-600">Product 2</li>
            <li class="text-gray-600">Product 3</li>
          </ul>
        </div>
      </div>
      <small class="text-gray-600 text-xs">© ${new Date().getFullYear()} Moontree (M) Sdn Bhd 202501007700 (1609114-P) © 2026</small>
    </footer>
  `,
  home: () => `
    <section class="py-12">
      <div class="max-w-[1126px] mx-auto px-6 flex justify-between items-center gap-6">
        <div class="flex-1 text-left">
          <div class="text-purple-600 font-bold tracking-wider text-sm mb-3">E-COURSE PLATFORM</div>
          <h1 class="text-5xl font-bold mb-6 text-gray-900 leading-tight">A Fun Way to Learn Islamic Life as a Family</h1>
          <p class="text-lg text-gray-600 max-w-[560px] mb-4">Interactive stories and playful activities connecting your family to Islamic values and meaningful lessons through joy and wonder.</p>
          <div class="flex gap-3 mt-5 mb-7">
            <a class="inline-block px-3.5 py-2.5 rounded-lg bg-purple-600 text-white no-underline cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all" href="/#auth-signup" target="_blank">Join for free</a>
            <a class="inline-block px-3.5 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 no-underline cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all" href="#howitworks">Watch how it works</a>
          </div>

          <div class="flex gap-6 mt-7 items-center">
            <div class="flex flex-col items-start">
              <div class="font-bold text-xl text-gray-900">
                <span class="count-up" data-target="700">0</span>+
              </div>
              <div class="text-sm text-gray-600">Hours of content</div>
            </div>
            
            <div class="flex flex-col items-start pl-6 border-l border-gray-200">
              <div class="font-bold text-xl text-gray-900">
                <span class="count-up" data-target="575">0</span>k+
              </div>
              <div class="text-sm text-gray-600">GlobalTalk Users</div>
            </div>
          </div>

        </div>
        <div class="flex-1 flex justify-center">
          <img src="${heroImg}" alt="hero" />
        </div>
      </div>
    </section>

    <section class="py-12 bg-[#fbfaf9]">
      <div class="max-w-[1126px] mx-auto px-6 flex gap-8 items-center">
        <div><img src="${section2Img}" alt="family" class="w-[420px] rounded-lg object-cover"/></div>
        <div class="max-w-[560px]">
          <h2 class="text-2xl font-semibold mb-3 text-gray-900">Nurturing family faith with joy.</h2>
          <p class="text-gray-600 mb-4">Easily teach your kids Islamic values through playful stories that build lifelong love for the Deen.</p>
          <div class="flex gap-3 mt-5">
            <a class="inline-block px-3.5 py-2.5 rounded-lg bg-purple-500 text-white no-underline cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all" href="/#auth-signup" target="_blank">Join for free</a>
            <a class="inline-block px-3.5 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 no-underline cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all" href="#howitworks">Watch how it works</a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="max-w-[1126px] mx-auto px-6 flex flex-row-reverse gap-8 items-center">
      <div><img src="${section3Img}" alt="affiliate" class="w-[420px] rounded-lg object-cover"/></div>  
      <div class="max-w-[560px]">
          <h2 class="text-2xl font-semibold mb-3 text-gray-900">Earn rewards and inspire everyone.</h2>
          <p class="text-gray-600 mb-4">Earn commissions by helping parents teach kids Islamic values playfully.</p>
          <a class="inline-block px-3.5 py-2.5 rounded-lg bg-purple-500 text-white no-underline cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all" href="#grow">Become Affiliate With Us</a>
        </div>
      </div>
    </section>

    <section class="py-12 bg-[#fbfaf9]">
      <div class="max-w-[1126px] mx-auto px-6 flex gap-8 items-center">
        <div><img src="${section4Img}" alt="kid play" class="w-[320px] rounded-lg object-cover"/></div>
        <div class="max-w-[560px]">
          <h2 class="text-2xl font-semibold mb-3 text-gray-900">Big Adventures for Little Muslims</h2>
          <p class="text-gray-600 mb-4">Play games, listen to exciting stories, and earn cool rewards while learning all about the beauty of Islam with your family!</p>
          <div class="flex gap-3 mt-5">
            <a class="inline-block px-3.5 py-2.5 rounded-lg bg-purple-500 text-white no-underline cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all" href="/#auth-signup" target="_blank">Join for free</a>
            <a class="inline-block px-3.5 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 no-underline cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all" href="#howitworks">Watch how it works</a>
          </div>
        </div>
      </div>
    </section>
  `,
  about: () => `
    <section class="p-8 max-w-[1126px] mx-auto px-6">
      <h2 class="text-2xl font-semibold mb-3 text-gray-900">About Us</h2>
      <p class="text-gray-600 mb-4">MoonTree Learning builds playful, values-driven e-learning for families to teach Islamic principles to children.</p>
      <p class="text-gray-600">Our mission is to make faith learning joyful and accessible.</p>
    </section>
  `,
  faqs: () => `
    <section class="p-8 max-w-[1126px] mx-auto px-6">
      <h2 class="text-2xl font-semibold mb-3 text-gray-900">FAQs</h2>
      <details class="mb-4">
        <summary class="font-semibold text-gray-900 cursor-pointer">Is content suitable for kids?</summary>
        <p class="text-gray-600 mt-2">Yes — stories and activities are designed for young learners and families.</p>
      </details>
      <details>
        <summary class="font-semibold text-gray-900 cursor-pointer">Do I need to pay to start?</summary>
        <p class="text-gray-600 mt-2">You can sign up for free and access sample lessons.</p>
      </details>
    </section>
  `,
  grow: () => `
    <section class="p-8 max-w-[1126px] mx-auto px-6">
      <h2 class="text-2xl font-semibold mb-3 text-gray-900">Grow With Us</h2>
      <p class="text-gray-600 mb-4">Partner, create, or join our affiliate program to help more families learn together.</p>
      <a class="inline-block px-3.5 py-2.5 rounded-lg bg-purple-500 text-white no-underline cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all" href="/#auth-signup" target="_blank">Become an Affiliate</a>
    </section>
  `,
  auth: (mode = 'signin') => `
    <section class="h-screen flex items-center bg-[#f6f6f6]">
      <div class="w-full h-full">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] h-full w-full bg-white overflow-hidden">
          <div class="p-10 lg:p-12">
            <div class="mb-8 max-w-[540px]">
              <div class="text-purple-600 font-semibold tracking-wide uppercase mb-3">Welcome to MoonTree</div>
              <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get Started Now</h1>
              <p class="text-gray-600 leading-relaxed">Sign in or join for free to unlock playful Islamic lessons, stories, and family learning activities.</p>
            </div>

            <div class="flex flex-wrap gap-3 mb-8 auth-tabs">
              <button data-mode="signin" class="tab px-5 py-3 rounded-full border text-sm font-medium ${mode === 'signin' ? 'bg-purple-500 text-white border-transparent' : 'bg-white text-gray-700 border-gray-200'}">Sign In</button>
              <button data-mode="signup" class="tab px-5 py-3 rounded-full border text-sm font-medium ${mode === 'signup' ? 'bg-purple-500 text-white border-transparent' : 'bg-white text-gray-700 border-gray-200'}">Sign Up</button>
            </div>

            <div class="space-y-4">
              <form id="auth-signin-form" class="flex flex-col gap-4" style="display: ${mode === 'signin' ? 'block' : 'none'}">
                <label class="flex flex-col gap-2 text-sm text-gray-700">Email
                  <input name="email" type="email" required class="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 focus:border-purple-500 focus:outline-none" />
                </label>
                <label class="flex flex-col gap-2 text-sm text-gray-700">Password
                  <input name="password" type="password" required class="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 focus:border-purple-500 focus:outline-none" />
                </label>
                <button class="inline-block w-full rounded-xl bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-600" type="submit">Sign In</button>
              </form>

              <form id="auth-signup-form" class="flex flex-col gap-4" style="display: ${mode === 'signup' ? 'block' : 'none'}">
                <label class="flex flex-col gap-2 text-sm text-gray-700">Email
                  <input name="email" type="email" required class="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 focus:border-purple-500 focus:outline-none" />
                </label>
                <label class="flex flex-col gap-2 text-sm text-gray-700">Password
                  <input name="password" type="password" required class="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 focus:border-purple-500 focus:outline-none" />
                </label>
                <button class="inline-block w-full rounded-xl bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-600" type="submit">Create Account</button>
              </form>
            </div>

            <div class="mt-6 text-sm text-gray-500">
              ${mode === 'signin' ? 'New here? <a href="#auth-signup" class="font-semibold text-purple-600 hover:underline">Create your account</a>' : 'Already have an account? <a href="#auth-signin" class="font-semibold text-purple-600 hover:underline">Sign in</a>'}
            </div>
          </div>

          <div class="hidden lg:block bg-slate-100">
            <img src="${authImg}" alt="Auth illustration" class="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  `,

  elearning: (userEmail) => `
    <section class="p-8 max-w-[1126px] mx-auto px-6">
      <div class="flex justify-between items-center gap-3 mb-8">
        <h2 class="text-2xl font-semibold text-gray-900">Welcome back, ${userEmail || 'Learner'}</h2>
        <div>
          <button id="logout" class="inline-block px-3.5 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 no-underline cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all">Logout</button>
        </div>
      </div>

      <div class="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[18px] mt-[18px]">
        <div class="course-card border border-gray-200 rounded overflow-hidden bg-white shadow-sm flex flex-col" data-src="https://www.w3schools.com/html/mov_bbb.mp4">
          <img src="${heroImg}" alt="course" class="w-full h-[140px] object-cover">
          <div class="p-3 flex-1 flex flex-col">
            <h3 class="text-base font-semibold text-gray-900 mb-2">Big Adventures for Little Muslims</h3>
            <div class="text-gray-600 text-sm mt-auto flex justify-between items-center mb-3">
              <div>By MoonTree • 2h 30m</div>
              <div class="font-bold text-gray-900">Free</div>
            </div>
            <button class="inline-block px-3.5 py-2.5 rounded-lg bg-purple-500 text-white no-underline cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all text-sm watch">Watch</button>
          </div>
        </div>

        <div class="course-card border border-gray-200 rounded overflow-hidden bg-white shadow-sm flex flex-col" data-src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4">
          <img src="${heroImg}" alt="course" class="w-full h-[140px] object-cover">
          <div class="p-3 flex-1 flex flex-col">
            <h3 class="text-base font-semibold text-gray-900 mb-2">Stories & Values</h3>
            <div class="text-gray-600 text-sm mt-auto flex justify-between items-center mb-3">
              <div>By MoonTree • 45m</div>
              <div class="font-bold text-gray-900">$4.99</div>
            </div>
            <button class="inline-block px-3.5 py-2.5 rounded-lg bg-purple-500 text-white no-underline cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all text-sm watch">Watch</button>
          </div>
        </div>
      </div>

      <div class="mt-5 flex justify-center">
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

function animateCounters() {
  const counters = app.querySelectorAll('.count-up')
  const animationDuration = 700 // Total animation time in milliseconds (2 seconds)

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target') || 0
    const startTime = performance.now()

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / animationDuration, 1)
      const currentValue = Math.floor(progress * target)

      counter.innerText = currentValue

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        counter.innerText = target
      }
    }

    requestAnimationFrame(updateCount)
  })
}

function render() {
  const hash = location.hash.replace('#', '')
  let content = ''
  const showNavFooter = !(hash === 'auth' || hash === 'auth-signin' || hash === 'auth-signup')
  if (showNavFooter) {
    content += templates.navbar()
  }

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
        content += `<section class="p-8 max-w-[1126px] mx-auto px-6"><h2 class="text-2xl font-semibold mb-3 text-gray-900">Page not found</h2></section>`
  }

  if (showNavFooter) {
    content += templates.footer()
  }
  app.innerHTML = content

  // animate the home page counter only when the home page is shown
  if ((hash === '' || hash === 'home') && app.querySelector('.count-up')) {
    animateCounters()
  }

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
    const dropdowns = app.querySelectorAll('[data-dropdown]')
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

