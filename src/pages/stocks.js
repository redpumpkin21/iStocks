import React, {useState, useEffect} from 'react'


const Stocks = (props) =>{
    const apiKey ="41b85a690180b878586bb1bad8db6d1f"
    console.log(apiKey)
    const symbol = props.match.params.symbol
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`
       
    const [stock, setStock] = useState(null)

    const getStocks = async () =>{
        const response = await fetch(url)
        const data = await response.json()
        setStock(data[0])
    }
    useEffect(() => {
        getStocks()
    }, [])
    const loaded = () => {
        return(
            <div>
                <h4>Name:{stock.companyName}</h4>
                <h1>Price: {stock.price}</h1>
                <h2> Symbol:{stock.symbol}</h2>
            </div>
        )
    }

    const loading = () => {
        return <h1>SHOW ME THE MONEY</h1>
    }

    return stock ? loaded() : loading()
} 
export default Stocks