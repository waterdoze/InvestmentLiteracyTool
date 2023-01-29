import React from "react";
import './index.css'

import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Stock from "./components/Stock";
import Calculator from "./components/Calculator";
import Home from "./components/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Home />} />
            <Route path='/stock' element={<Stock />} />
            <Route path='/calculator' element={<Calculator />} />
        </Route>

    )
)

function App() {



    return (
        <div id="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
