import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Quick from './components/quick/Quick';
import SetUpt from './components/SetUp/SetUpt';


export default function App() {
  return (
    <div className='bg-black font-inter flex flex-col gap-4 md:gap-20'>
      <Header/>
<Hero/>
<Quick/>
<SetUpt/>
    </div>
  )
}
