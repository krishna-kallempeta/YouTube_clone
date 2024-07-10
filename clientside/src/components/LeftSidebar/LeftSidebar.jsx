import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md"
import { NavLink } from "react-router-dom"
import shorts from '../../assets/shorts.jpg'
import '../LeftSidebar/Leftsidebar.css'
function LeftSidebar(){
    return(
        <div className="Container_leftSidebarr">
            <NavLink to={'/'} className="icon_Sidebar_div">
                <AiOutlineHome size={22} className="icon_sidebar"/>
                <div className="text_sidebar_icon">HOME</div>
            </NavLink>

            <NavLink to={'/explore'} className="icon_Sidebar_div">
                <img src={shorts} alt=""  width={22} className="icon_sidebar"/>
                <div className="text_sidebar_icon">Explore</div>
            </NavLink>

            <NavLink to={'/subscription'} className="icon_Sidebar_div">
                <MdOutlineSubscriptions size={22} className="icon_sidebar"/>
                <div className="text_sidebar_icon" style={{fontSize:"12px"}}>Subscription</div>
            </NavLink>

            <NavLink to={'/library'} className="icon_Sidebar_div">
                <MdOutlineVideoLibrary size={22} className="icon_sidebar"/>
                <div className="text_sidebar_icon">Library</div>
            </NavLink>
           
            
        </div>
      
    )
}
export default LeftSidebar;