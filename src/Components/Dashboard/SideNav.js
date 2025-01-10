import React from 'react'
import { Link } from "react-router-dom";

function SideNav(props) {
  return (
    <div className="part-one-generate-invoice-container">
        <ul>
            <li className={props.active==='generate-inv'?'active-mode-invoice':null}>
                <Link to={'/dashboard'} className="sideNav-link">Generate Invoice</Link>
            </li>
            <li className={props.active==='past-inv'?'active-mode-invoice':null}>
                <Link to={'/past-invoice'} className="sideNav-link">Past Invoices</Link>
            </li>
        </ul>
    </div>
  )
}

export default SideNav