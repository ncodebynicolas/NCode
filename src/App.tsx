import { Navbar } from './components/layout/navbar'
import { Footer } from './components/layout/footer'

import { Hero } from './components/sections/hero'
import { Projects } from './components/sections/projects'
import { About } from './components/sections/about'

function App() {
  return (
    <main className="relative overflow-hidden bg-[#0B0F19] text-white">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

      <Navbar />

      <Hero />

      <Projects />

      <About />

      <Footer />
    </main>
  )
}

export default App