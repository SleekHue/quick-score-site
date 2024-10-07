import './App.css';
import { Highlight } from './components/ui/hero-highlight';
import Hero from "../src/assets/Hero.jpg";

function App() {
  return (
    <div className='mt-32 mx-32 flex justify-between'>

      {/* CTA */}
      <div className=' text-5xl font-medium flex flex-col'>
      <h1>Get Live Score</h1>
      <div className='flex space-x-2 mt-2'>
        <span>Updates</span>
        <Highlight className="text-black dark:text-white px-2">
          on the Go &rarr;
        </Highlight>
      </div>
      <p className='text-lg font-light text-gray-500 mt-10'>
        Stay in the game with Quickscore: your ultimate browser <br/>         
        companion for real-time sports updates, scores, and news!
      </p>

      <a href="https://chromewebstore.google.com/detail/quick-score-live-score-an/igbedijjdbkpodndbnhdbhngogjdakni" className="bg-sky-500 text-white px-4 py-3 rounded-md text-sm w-44 mt-10">Try Now for free </a>
      <text className='mt-2 text-gray-400 font-light italic text-sm'>No account or signup needed</text>
    </div>

    <img src={Hero} className='h-[28rem] rounded-lg'></img>
    </div>
  );
}

export default App;