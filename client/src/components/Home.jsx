import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    let navigate = useNavigate()

    const stock = () => {
        navigate('/stock')
    }

    const calc = () => {
        navigate('/calculator')
    }

    return (
        <div id='App'>
            <button className="buy-sell" onClick={stock}>
                Stock Chart
            </button>
            <button className="buy-sell" onClick={calc}>
                Calculator
            </button>
        </div>
    )
}

export default Home