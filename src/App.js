import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
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
      element: <h1>Not Found</h1>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
