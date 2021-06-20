import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function DiemCuoc(props) {

    const tongDiem =  useSelector(state => state.BaiTapGameBauCuaReducer.tongDiem)

    const dispatch = useDispatch();

    return (
        <div>
            <h3 className="text-center display-4 " style={{color:'#FFF',marginTop:0}}>GAME BẦU CUA !!! </h3>

            <div className="text-center mt-5">
                <span style={{fontSize:'20px',borderRadius:'5%'}} className="p-3 text-white bg-danger">TIỀN CỦA BẠN: <span className="text-warning">{tongDiem.toLocaleString()}$</span></span>

            </div>

            <div className="text-center mt-5">
                <button onClick={()=>{
                    dispatch({type:'CHOI_LAI'})
                }}  style={{fontSize:'15px',borderRadius:'5%',border:'none'}} className="p-2 text-white bg-success"> HẾT TIỀN RỒI !!! CHƠI LẠI </button>

            </div>
        </div>
    )
}
