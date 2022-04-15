import React from "react";
import './user.css';
import pic2 from "../../images/pic3.jpg"
import pic1 from "../../images/userbg.jpg"
import search from "../../images/search.svg"
import pic5 from "../../images/pic1.jpg";
import pic6 from "../../images/pic2.png";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.png";
import pic7 from "../../images/pic5.jpg";
import pic8 from "../../images/pic6.png";
export default function Profile() {
    return (
        <>

            <div className="wwwrapper">


                <div className="llleft">
                    <div className="pppost">
                        <div className="ppprofileCover">
                            <img
                                className="cccover-image"
                                src={pic1}
                                alt=""
                            />
                            <img className="ppprofileUserImg" src={pic2} alt=""
                            />
                        </div>
                        <div className="ppprofileInfo">
                            <h1 className="profileInfoName">Sarah Wood</h1>
                            <p className="profileInfoDesc">Sarah Wood is co-founder and COO of video ad tech company</p>
                            <p><i className="sssub-text">London . England . United Kingdom . 234 Friends</i></p><br />
                            <button className="button1"> <span className="text">Add Friends</span></button>
                            <button className="button2"> <span className="text2">Visit Website</span></button>


                        </div>
                    </div>
                </div>
                <div className="rrright"><div className="ssside-bar"><div className="feed-find-friend-container">
                        <div className="find-friend-header">
                            <div className="headingggg">Suggestion
                                <img src={search} /></div>

                        </div>
                        <div className="find-friend-body">
                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic5} />
                                    <span>Jason Bond</span>
                                </div>
                                <button className='action-follow'>+Friend</button>

                            </div>

                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic6} />
                                    <span>Aman Dasila</span>
                                </div>
                                <button className='action-follow'>+Friend</button>

                            </div>

                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic3} />
                                    <span>Aditi Roy</span>
                                </div>
                                <button className='action-follow'>+Friend</button>

                            </div>

                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic4} />
                                    <span>Agam Agrwal</span>
                                </div>
                                <button className='action-follow'>+Friend</button>

                            </div>

                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic7} />
                                    <span>Aditi Roy</span>
                                </div>
                                <button className='action-follow'>+Friend</button>

                            </div>

                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic8} />
                                    <span>Agam Agrwal</span>
                                </div>
                                <button className='action-follow'>+Friend</button>

                            </div>
                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic3} />
                                    <span>Aditi Roy</span>
                                </div>
                                <button className='action-follow'>+Friend</button>

                            </div>

                            <div className="user-row">
                                <div className="user-infoooo">
                                    <img src={pic4} />
                                    <span>Agam Agrwal</span>
                                </div>
                                <button className='action-follow'>+Friend</button>

                            </div>



                        </div>
                    </div></div></div>

            </div>

        </>
    );
}