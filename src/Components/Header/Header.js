import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'


export default function Header() {
    return (
        
        <div id="Header" className="container-fluid" style={{ margin: 0 , height :'200px'}}>
            <h1 className="pt-5">CHỌN GAME BẠN MUỐN CHƠI NÀO !!!</h1>
            <div className="option container mt-5" id="optionGame">
                <div className="col-4">
                    {/* <button className="p-3" onClick={() => { <NavLink to='/gamebaucua'></NavLink> }}>Game Bầu Cua</button> */}
                    <button className="p-3"><NavLink className = "abc" to="/gamebaucua"> Game Bầu Cua</NavLink> </button>
                </div>
                <div className="col-4">
                    {/* <button className="p-3">Game Tù xì</button> */}
                    <button className="p-3"><NavLink className = "abc" to="/gameoantuxi"> Game Tù Xì</NavLink> </button>
                </div>
                <div className="col-4">
                    <button className="p-3"><NavLink className = "abc" to="/gamexucxac"> Game Xúc Xắc</NavLink> </button>
                </div>
            </div>

        </div>

      

    )
}
