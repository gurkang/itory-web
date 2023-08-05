import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-b from-green-400 to-blue-500">
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Hello World</h1>
          <p className="text-2xl text-white">React + Typescript + Tailwind</p>
          <Link to="/profile"> Go to Profile</Link>
          <Link to="/dashboard"> Go to Dashboard</Link>
        </div>
      </div>
    </>
  );
}

export default App;
