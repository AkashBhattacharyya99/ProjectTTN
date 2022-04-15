import "./Topbar.css";
import PhotoLogo from "../../images/PhotoLogo.svg"
import AccLogo from "../../images/AccLogo.svg"

export default function Topbar() {

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <img src={AccLogo}/>
      </div>

      <div className="topbarCenter">
          <input type="text" placeholder=" Start a Post"/>
      </div>

      <div className="topbarRight" >
      <div className="tl"><img src={PhotoLogo} /></div>
      <div className="tr">Photo/Video</div>
          {/* <span><img src={PhotoLogo} /> </span> */}
      </div>
    </div>
  );
}