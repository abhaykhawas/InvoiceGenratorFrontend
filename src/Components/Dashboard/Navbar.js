import React from 'react'
import './Navbar.css'
import down_arrow from '../../Assets/down_arrow.png'
import axios from 'axios';


function Navbar() {

  async function handleLogout(){
    try{
        const fetchData = async () => {
            let response = await axios.get('http://localhost:4000/api/v1/logout', {withCredentials: true})
            console.log(response.status)
            if (response.status == 200){
                window.location.href = '/login'
            }
        }
        fetchData()
        
    }
    catch(error) {
        // window.location.href = '/login'
        window.location.href = '/dashboard'
    }
  }
  return (
    <div className='dashboard-navbar-container'>
        <div className="navbar-logo-container">
            <h2>INVOICED</h2>
        </div>
        <div className="navbar-main-container">
            <ul>
                <li>
                    <a href="#">Generate Invoice</a>
                </li>
                <li>
                    <a href="#">Product List</a>
                </li>
                <li>
                    <a href="#">Format for Invoice</a>
                </li>
            </ul>
        </div>
        <div className="navbar-profile-container">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="profile" width={40} className="nav-profile-pic"/>
            <div className="down-arrow-nav-container">
                <img src={down_arrow} alt="down arrow" className='nav-down-arrow' width={15}/>
                <div className="hover-effect-down-arrow">
                    <div>
                        <ul>
                            <li>Profile</li>
                            <li onClick={handleLogout}>Log Out</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar