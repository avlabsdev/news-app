import logo from './logo.svg';
import barsIcon from './images/bars-solid.svg';

function App() {
  return (
    <div className="App">
      <header className="container flex items-center justify-between mx-auto p-4">
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
          <div className="lg:w-4/5 w-full p-4 bg-red-500">
            Featured Article Area
          </div>
          <div className="lg:w-2/6 w-full p-4 bg-red-500">
            New Articles Area
          </div>
        </section>
        <section>
          <div className="bg-red-500 p-4">
            Top Three Articles Area
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
