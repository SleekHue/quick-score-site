import Logo from "../assets/Logo.png";

export default function Navbar() {
    return (
      <>
        <div className="flex w-full h-3">
          <div className="bg-sky-700 w-1/4"></div>
          <div className="bg-sky-600 w-1/4"></div>
          <div className="bg-sky-500 w-1/4"></div>
          <div className="bg-sky-400 w-1/4"></div>
        </div>
        <div className="flex my-10 mx-32 justify-between">
            {/* Banner */}
            <div className="flex">
                <img className="h-10 mr-2" src={Logo}></img>
                <text className="text-3xl text-sky-400 font-bold">QUICK</text>
                <text className="text-3xl text-sky-400 font-extralight">SCORE</text>
            </div>

            {/* Stuff */}
            <div className="space-x-10 text-gray-700">
                <text>Coverage</text>
                <text>Pricing & FAQs</text>
                <a href="https://chromewebstore.google.com/detail/quick-score-live-score-an/igbedijjdbkpodndbnhdbhngogjdakni" className="bg-sky-500 text-white px-4 py-3 rounded-md">Try Now &rarr;</a>
            </div>
        </div>
      </>
    );
  }