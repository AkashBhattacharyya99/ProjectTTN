import React from 'react'
import "./AccFeed.css";
import userbg from "../../images/userbg.jpg";
import pic from "../../images/pic.png";

export default function AccFeed() {
  return (
    <div className='wrapperr'>
    <div className="coverr">
        <img src={userbg} />
    </div>

    <div className="id-sectionn">
        <div className="circlee">
            <img src={pic} className="logoo" />
        </div>
        <div className="ids">
            <h2>Akash Bhatt</h2>
            <h4>Newly Recruit at TTN</h4>
            <div className="pro-post">
                <div className="profile">
                    <h1>100</h1>
                    <h4>Profile View</h4>
                </div>
                <div className="post">
                    <h1>12</h1>
                    <h4>Post</h4>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}
