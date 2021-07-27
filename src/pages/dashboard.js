import React from "react"
import {Link} from "react-router-dom"
const Dashboard= (props) =>{ 
    const stocks= [
    {name: "Apple Inc.", symbol: "AAPL"},
    {name: "Microsoft Corporation",  symbol: "MSFT"},
    {name: "Alphabet inc,", symbol: "GOOGL"},
    {name: "FaceBook", symbol: "FB"},
    {name: "Oracle Corp", symbol: "ORCL"},
    {name: "Intel Corporation", symbol: "INTC"}
]
return <div className="stocks">
{stocks.map((stock) => {
    const {name, symbol} = stock
    return (
        <Link to={`/stocks/${symbol}`}>
            <h2>{name}</h2>
        </Link>
            )
                })}
        </div>
}
export default Dashboard