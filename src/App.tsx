import './App.css';
import Nav from './app/home/nav';
import { routes } from './data';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav/>
    <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
