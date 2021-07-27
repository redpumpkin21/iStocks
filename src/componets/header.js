import React from 'react'
import {Link} from 'react-router-dom'

const Header = (Props) => {
    return(
        <div className = "nav" id="nav2">
            <Link to ="/">
                <h1>iStocks</h1>
            </Link>
       
             <Link to = "/stocks">
                <div>
                    Stocks
                </div>
             </Link>
            <Link to = "/about">
                 <div>
                    About
                 </div>
            </Link>
        </div> 
    )
}
export default Header