import React, { Component } from 'react'
import { render } from 'react-dom';
import ReactDOM from 'react-dom'
import { Fragment } from "react"
import { Route } from "react-router-dom"
import Header from "../../Components/Header/Header"
import TrangChu from '../../Components/TrangChu/TrangChu';

export const Hometemplates = (props) => {

    return <Route path={props.path} exact render={(propsRoute) => {
        return <Fragment>
            {/* <Header {...propsRoute} /> */}
            <props.component {...propsRoute}/>
            {/* <footer className="bg-dark text-white text-center p-5 mt-5">
                footer
            </footer> */}

        </Fragment>

    }} />

}