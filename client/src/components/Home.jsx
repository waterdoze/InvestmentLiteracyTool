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
            <div className="wrapper">
                <button className="btn" onClick={stock}>
                    Stock Chart
                </button>
                <button className="btn2" onClick={calc}>
                    Calculator
                </button>
            </div>
        </div>
    )
}

export default Home