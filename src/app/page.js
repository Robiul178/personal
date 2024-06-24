import About from './About/page';
import Skills from './Skills/page';
import Projects from './Projects/page';
import Education from './Education/page';

export default function Home() {
  return (
    <main className='mb-8'>
      <About />
      <div className='mt-24'> <Skills /></div>
      <div className='mt-24'> <Education /></div>
      <div className="py-24"> <Projects /></div>
    </main>
  );
}
