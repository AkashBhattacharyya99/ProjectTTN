import React from 'react'
import "./feed.css";

import Topbar from '../Topbar/Topbar';
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.png";
import pic5 from "../../images/pic5.jpg";
import pic6 from "../../images/pic6.png";
// import pic7 from "./images/pic7.jpg";
// import Post from './components/Post';
import PostData from '../PostData/PostData'
import AccFeed from '../AccFeed/AccFeed';
import { Posts } from "../../dummyData";
import Sidebar from '../Sidebar/Sidebar';
import search from "../../images/search.svg"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Feed() {
    const[friend,setFreind]=useState(true)
    const[friend1,setFreind1]=useState(true)
    const[friend2,setFreind2]=useState(true)
    const[friend3,setFreind3]=useState(true)

    const Friend=()=>{
            setFreind(false)
            if(!friend)
            {
                setFreind(true)
            }
    }
    const Friend1=()=>{
            setFreind1(false)
            if(!friend1)
            {
                setFreind1(true)
            }
    }
    const Friend2=()=>{
        setFreind2(false)
        if(!friend2)
        {
            setFreind2(true)
        }
}
const Friend3=()=>{
    setFreind3(false)
    if(!friend3)
    {
        setFreind3(true)
    }
}

    return (
        <>
            <div className="feedbody">
                <div className="left-feed">
                   <AccFeed/>
                   <Sidebar/>
                </div>

                <div className="mid-feed">
            
                <Topbar/>
                {Posts.map((p) => (
          <PostData key={p.id} post={p} />
        ))}
               
                </div>

                <div className="right-feed">

                    <div className="feed-find-friend-container">
                        <div className="find-friend-header">
                            <div className="headingggg">
                                Contacts
                                <img src={search} />
                                </div>
                            
                        </div>
                        <div className="find-friend-body">
                            <div className="user-row">
                                <div className="user-infoooo">
                                    <NavLink to="user">
                                    <img src={pic3} />
                                    </NavLink>
                                    <span>Sarah Wood</span>
                                    
                                </div>
                               

                            </div>

                            <div className="user-row">
                                <div className="user-infoooo">
                            
                                    <img src={pic2} />
                                    <span>Aman Dasila</span>
                                </div>
                              

                            </div>

                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic4} />
                                    <span>Agam Agrwal</span>
                                </div>
                                

                            </div>

                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic5} />
                                    <span>Akash Bhatt</span>
                                </div>
                              

                            </div>

                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic6} />
                                    <span>Deep Chatt</span>
                                </div>
                                

                            </div>
                            
                        </div>
                    </div>

                    <div className="feed-find-friend-container">
                        <div className="find-friend-header">
                            <div className="headingggg">Suggestion
                            <img src={search} /></div>
                            
                        </div>
                        <div className="find-friend-body">
                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic1} />
                                    <span>Jason Bond</span>
                                </div>
                                { friend? <button className='action-follow' onClick={Friend}> +Friend  </button>
                                        :<button className='action-follow' onClick={Friend}>unfriend </button>
                                }
                               

                            </div>

                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic2} />
                                    <span>Aman Dasila</span>
                                </div>
                                { friend1? <button className='action-follow' onClick={Friend1}> +Friend  </button>
                                        :<button className='action-follow' onClick={Friend1}>unfriend </button>
                                }

                            </div>

                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic1} />
                                    <span>Aditi Roy</span>
                                </div>
                                { friend2? <button className='action-follow' onClick={Friend2}> +Friend  </button>
                                        :<button className='action-follow' onClick={Friend2}>unfriend </button>
                                }

                            </div>

                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic4} />
                                    <span>Agam Agrwal</span>
                                </div>
                                { friend3? <button className='action-follow' onClick={Friend3}> +Friend  </button>
                                        :<button className='action-follow' onClick={Friend3}>unfriend </button>
                                }

                            </div>

                        
                           
                        </div>
                    </div>
                </div>
2
            </div>
        </>
    )
}
