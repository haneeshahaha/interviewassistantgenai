
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className='text-blue-600 text-2xl font-bold p-4 bg-gray-100'>
      Hello World - This should be blue!
      <Button className="ml-4">Click me!</Button>
    </div>
  );
};

export default App;