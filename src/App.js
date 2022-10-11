import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';

function App() {
  const route = createBrowserRouter([
    {
      path : "/",
      element: <Main></Main>,
      children: [
        {
          path : "/",
          loader: async() =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <div>
            <Header></Header>
            <Topics></Topics>
            <Footer></Footer>
          </div>
        },
        {
          path : "/Home",
          loader: async() =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <div>
          <Header></Header>
          <Topics></Topics>
          <Footer></Footer>
        </div>
        },
        {
          path : "/topics",
          loader: async() =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Topics></Topics>
        },
        {
          path: '/topics/:id',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path : "/statistics",
          loader: async() =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Statistics></Statistics>
        },
        {
          path : "/blog",
          element:<Blog></Blog>
        },
      ]
    },
    {
      path: '*',
      element: <div className='notFound'>
        <h1>Not Found 404</h1>
        <h2>You have enter the wrong route</h2>
        <p><Link to='/'>Click here</Link> to visit our home page and enjoy</p>
      </div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
