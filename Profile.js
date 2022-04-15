import React from 'react'
import './profile.css'
import pic from "./images/pic.png";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.png";
import pic5 from "./images/pic5.jpg";
import pic6 from "./images/pic6.png";
import pic7 from "./images/pic7.jpg";

import userbg from "./images/userbg.jpg";
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

export default function Profile() {
    const Navigate=useNavigate();
    const[userData,SetUserData]=useState({});
    

    return (
        <>
        <div className="all">
            <div className='wrapper'>
                <div className="cover">
                <img src={userbg} />
                </div>

                <div className="id-section">
                    <div className="circle">
                    <img src={pic} className="logo"/>
                    </div>
                    <div className="id">
                        <h1>Akash</h1>
                    </div>
                </div>
                <div className="puradiv">
                <div className="leftsetting">
                    <label htmlFor="">FirstName</label><br/>
                    <input type="text" placeholder='FirstName'/><br/>
                    <label htmlFor="">Designation</label><br/>
                    <input type="text" placeholder='Designation'/><br/>
                    
  
                    <label htmlFor="">City</label><br/>
                    <input type="text" placeholder='City'/>
                </div>
                <div className="rightsetting">
                <label htmlFor="">LastName</label><br/>
                    <input type="text" placeholder='LastName'/><br/>
                    <label htmlFor="">MyWebsite</label><br/>
                    <input type="text" placeholder='MyWebsite'/><br/>
                    <label htmlFor="">BirthDay</label><br/>
                    <input type="date"/>
                </div>
                </div>
                <div className="purabutton">
                <button className="button1"> <span className="text">Add Friends</span></button>
                            <button className="button2"> <span className="text2">Visit Website</span></button>
                            </div>
            </div>



            <div className="find-friend-container">
                <div className="find-friend-header">
                    <div className="headingggg">Suggestion</div>
                    <div className="Search">
                        <input type="text" placeholder='Search a Friend'/>
                    </div>
                </div>
                <div className="find-friend-body">
                    <div className="user-row">
                        <div className="user-infoooo">
                            <img src={pic1} />
                            <span>Jason Bond</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>

                    <div className="user-row">
                        <div className="user-infoooo">
                            <img src={pic2} />
                            <span>Aman Dasila</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>

                    <div className="user-row">
                        <div className="user-infoooo">
                            <img src={pic3} />
                            <span>Aditi Roy</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>

                    <div className="user-row">
                        <div className="user-infoooo">
                            <img src={pic4} />
                            <span>Agam Agrwal</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>

                    <div className="user-row">
                        <div className="user-infoooo">
                            <img src={pic5} />
                            <span>Akash Bhatt</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>

                    <div className="user-row">
                        <div className="user-infoooo">
                            <img src={pic6} />
                            <span>Deep Chatt</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>
                    <div className="user-row">
                        <div className="user-infoooo">
                            <img src={pic7} />
                            <span>Jason Bond</span>
                        </div>
                        <button className='action-follow'>Follow</button>

                    </div>
                </div>
            </div>

            </div>
        </>
    )
}
