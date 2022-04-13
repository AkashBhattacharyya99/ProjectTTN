import "./Sidebar.css";

import { Users } from "../../dummyData";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <img src="" className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <img src="" className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          
          <hr className="sidebarHr" />
          <li className="sidebarListItem">
            <img src="" className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <img src="" className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          
          <hr className="sidebarHr" />
          
          <li className="sidebarListItem">
            <img src="" className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <img src="" className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        
      </div>
    </div>
  );
}