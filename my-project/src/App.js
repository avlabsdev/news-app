import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/100.css"; // Specify weight
import "@fontsource/inter/100-italic.css"; // Specify weight and style
import "@fontsource/inter/200.css"; // Specify weight
import "@fontsource/inter/200-italic.css"; // Specify weight and style
import "@fontsource/inter/300.css"; // Specify weight
import "@fontsource/inter/300-italic.css"; // Specify weight and style
import "@fontsource/inter/400.css"; // Specify weight
import "@fontsource/inter/400-italic.css"; // Specify weight and style
import "@fontsource/inter/500.css"; // Specify weight
import "@fontsource/inter/500-italic.css"; // Specify weight and style
import "@fontsource/inter/600.css"; // Specify weight
import "@fontsource/inter/600-italic.css"; // Specify weight and style
import "@fontsource/inter/700.css"; // Specify weight
import "@fontsource/inter/700-italic.css"; // Specify weight and style
import "@fontsource/inter/800.css"; // Specify weight
import "@fontsource/inter/800-italic.css"; // Specify weight and style
import "@fontsource/inter/900.css"; // Specify weight
import "@fontsource/inter/900-italic.css"; // Specify weight and style

import logo from './logo.svg';
import barsIcon from './images/bars-solid.svg';
import webThreeMobilePhoto from './images/image-web-3-mobile.jpg';
import webThreeDesktopPhoto from './images/image-web-3-desktop.jpg';
import retroPCPhoto from './images/image-retro-pcs.jpg';
import laptopPhoto from './images/image-top-laptops.jpg';
import gamingPhoto from './images/image-gaming-growth.jpg';

function App() {
  return (
    <div className="App">
      <header className="container flex items-center justify-between mx-auto p-4 mt-4">
        <button className="p-2"><img src={logo} alt="Logo" className="lg:w-full w-2/3" /></button>
        <button className="p-2 lg:hidden"><img src={barsIcon} alt="Menu icon" className="w-6" /></button>
        <nav className="lg:flex gap-12 items-center hidden">
          <button className="p-2">Home</button>
          <button className="p-2">New</button>
          <button className="p-2">Popular</button>
          <button className="p-2">Trending</button>
          <button className="p-2">Categories</button>
        </nav>
      </header>
      <main className="container mx-auto flex flex-col gap-8 p-4">
        <section className="flex lg:flex-row flex-col gap-8">
          <div className="lg:w-4/5 w-full h-fit">
            <img src={webThreeMobilePhoto} alt="Web 3" className="lg:hidden flex object-fill w-full h-1/2" />
            <img src={webThreeDesktopPhoto} alt="Web 3" className="hidden lg:flex object-fill w-full h-1/2" />
            <div className="flex flex-col gap-4 py-4 mt-2">
              <h1 className="text-5xl font-bold custom-text-verydarkblue">The Bright Future of Web 3.0?</h1>
              <p className="custom-text-darkgrayblue">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button className="py-4 px-10 custom-bg-softred custom-text-verydarkblue font-semibold uppercase tracking-widest w-min mt-2">Read&nbsp;More</button>
            </div>
          </div>
          <div className="lg:w-2/6 w-full lg:p-8 p-5 custom-bg-verydarkblue flex flex-col gap-4">
            <h2 className="text-5xl font-bold custom-text-softorange">New</h2>
            <ul className="flex flex-col -mt-4">
              <li className="flex flex-col gap-2 border-b border-gray-600 py-8">
                <a href="#/">
                  <h3 className="font-semibold custom-text-offwhite text-xl lg:text-2xl">New Hydrogen VS Electric Cars</h3>
                  <p className="custom-text-grayblue">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </a>
              </li>
              <li className="flex flex-col gap-2 border-b border-gray-600 py-8">
                <a href="#/">
                  <h3 className="font-semibold custom-text-offwhite text-xl">The Downsides of AI Artistry</h3>
                  <p className="custom-text-grayblue">What are the possible adverse effects of on-demand AI image generation?</p>
                </a>
              </li>
              <li className="flex flex-col gap-2 pt-8 pb-2">
                <a href="#/">
                  <h3 className="font-semibold custom-text-offwhite text-xl">Is VC Funding Drying Up?</h3>
                  <p className="custom-text-grayblue">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <div className="py-4 flex gap-6 items-center">
            <div className="w-1/3 h-min">
              <img src={retroPCPhoto} alt="Retro PCs" className="h-full w-full object-fill" />
            </div>
            <div className="flex flex-col w-2/3 gap-2 h-min">
              <span className="font-bold text-4xl custom-text-softred">01</span>
              <h3 className="font-extrabold text-lg">Reviving Retro PC's</h3>
              <p className="custom-text-darkgrayblue">What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className="py-4 flex gap-6 items-center">
            <div className="w-1/3 h-min">
              <img src={laptopPhoto} alt="Laptop keyboard" className="h-full w-full object-fill" />
            </div>
            <div className="flex flex-col w-2/3 gap-2 h-min">
              <span className="font-bold text-4xl custom-text-softred">02</span>
              <h3 className="font-extrabold text-lg">Top 10 Laptops of 2022</h3>
              <p className="custom-text-darkgrayblue">Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className="py-4 flex gap-6 items-center">
            <div className="w-1/3 h-min">
              <img src={gamingPhoto} alt="Retro PCs" className="h-full w-full object-fill" />
            </div>
            <div className="flex flex-col w-2/3 gap-2 h-min">
              <span className="font-bold text-4xl custom-text-softred">03</span>
              <h3 className="font-extrabold text-lg">The Growth of Gaming</h3>
              <p className="custom-text-darkgrayblue">How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="container mx-auto p-4 pb-10">
        <p>&copy; 2024 AV Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
