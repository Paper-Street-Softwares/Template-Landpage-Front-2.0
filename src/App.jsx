import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-0 bg-blue-500 desktop1:text-white">
      Hello, MPA with React and Tailwind and Deploy on Vercel.
    </div>
  );
}

export default App;
