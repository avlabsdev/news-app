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

function App() {
  return (
    <div className="App">
      <header className="container flex items-center justify-between mx-auto p-4 mt-4">
        <button className="p-2"><img src={logo} alt="Logo" /></button>
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
          <div className="lg:w-4/5 w-full bg-red-500">
            <img src={webThreeMobilePhoto} alt="Web 3" className="lg:hidden flex" />
            <img src={webThreeDesktopPhoto} alt="Web 3" className="hidden lg:flex" />
            <div className="flex flex-col gap-4 py-4 mt-2">
              <h1 className="text-5xl font-bold">The Bright Future of Web 3.0?</h1>
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button className="py-4 px-12 bg-blue-500 font-semibold uppercase tracking-widest w-3/5">Read More</button>
            </div>
          </div>
          <div className="lg:w-2/6 w-full py-4 bg-red-500">
            <h2>New</h2>
            <ul>
              <li>
                <h3>Headline</h3>
                <p>Article summary description.</p>
              </li>
              <li>
                <h3>Headline</h3>
                <p>Article summary description.</p>
              </li>
              <li>
                <h3>Headline</h3>
                <p>Article summary description.</p>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="bg-red-500 py-4">
            Top Three Articles Area
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
