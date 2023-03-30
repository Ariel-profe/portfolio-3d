
import { About } from '@/components/About'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory scroll-smooth overflow-y-auto text-white bg-app-pattern'>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
