import Navbar from "./components/Navbar";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>
      <main className="pt-20 min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-start p-4">
        <Weather />
      </main>
    </>
  );
}

export default App;
