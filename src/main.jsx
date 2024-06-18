import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import CreateFlashcardForm from './components/CreateFlashcardForm.jsx'
import Flashcards from './components/Flashcards.jsx'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/flashcards",
    element: <Flashcards />,
  },
  {
    path: "/flashcards/create",
    element: <CreateFlashcardForm />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
