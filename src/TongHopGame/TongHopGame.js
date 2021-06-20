import React from 'react'
import BaiTapGameBauCua from '../BaiTapTongHop/BaiTapGameBauCua/BaiTapGameBauCua'

export default function TongHopGame() {
    return (
        <div>
            <button className ="container-fluid mt-5 btn btn-primary" onClick = {() => <BaiTapGameBauCua />}>button this</button>
        </div>
    )
}
