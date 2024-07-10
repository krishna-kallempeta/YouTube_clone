import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai';
import './Leftsidebar.css'
import shorts from '../../assets/shorts.jpg'
import { MdOutlineExplore, MdOutlineVideoLibrary, MdOutlineWatchLater, MdSubscriptions } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
function DrawerSidebar({toggleDreawer,toggleDrawerSidebar}){
    return(
        <>
        <div className="container_DrawerLeftSidebar" style={toggleDrawerSidebar}>
            <div className="container2_DrawerLeftSidebar">
                <div className='Drawer_leftsidebar'>
                    <NavLink to={'/'} className='icon_sidebar_div'>
                        <p>
                            <AiOutlineHome size={22} className='icon_sidebar' style={{margin:'auto 0.7rem'}}/>
                            <div className='text_sidebar_icon'>Home</div>
                        </p>
                       

                    </NavLink>
                    <NavLink to={'/Library'} className='icon_sidebar_div'>
                        <p>
                            <MdOutlineExplore size={22} className='icon_sidebar' style={{margin:'auto 0.7rem'}}/>
                            <div className='text_sidebar_icon'>Library</div>
                        </p>
                       

                    </NavLink>
                    <div className='icon_sidebar_div'>
                        <p>
                            <img src={shorts} width={22} alt="" className='icon_sidebar' style={{margin:'auto 0.7rem'}} />
                           <div className='text_sidebar_icon'>Shorts</div>
                        </p>
                       

                    </div>
                    <div className='icon_sidebar_div'>
                        <p>
                            <MdSubscriptions size={22} className='icon_sidebar' style={{margin:'auto 0.7rem'}}/>
                            <div className='text_sidebar_icon'>Home</div>
                        </p>
                    </div>
                </div>
                <div className='libraryBtn_Drawerleftsidebar'>
                    <NavLink to={'/library'} className='icon_sidebar_div'>
                        <p>
                            <MdOutlineVideoLibrary size={22} className='icon_sidebar' style={{margin:'auto 0.7rem'}}/>
                            <div className='text_sidebar_icon'>Library</div>
                        </p>
                    </NavLink>
                    <NavLink to={'/history'} className='icon_sidebar_div'>
                        <p>
                            <FaHistory size={22} className='icon_sidebar' style={{margin:'auto 0.7rem'}}/>
                            <div className='text_sidebar_icon'>History</div>
                        </p>
                    </NavLink>
                    <NavLink to={'/yourvideos'} className='icon_sidebar_div'>
                        <p>
                            <AiFillPlaySquare size={22} className='icon_sidebar' style={{margin:'auto 0.7rem'}}/>
                            <div className='text_sidebar_icon'>Your Videos</div>
                        </p>
                    </NavLink>
                    <NavLink to={'/WatchLater'} className='icon_sidebar_div'>
                        <p>
                            <MdOutlineWatchLater size={22} className='icon_sidebar' style={{margin:'auto 0.7rem'}}/>
                            <div className='text_sidebar_icon'>Watch Later</div>
                        </p>
                    </NavLink>

                    <NavLink to={'likedvideos'} className='icon_sidebar_div'>
                        <p>
                            <AiFillLike size={22} className='icon_sidebar' style={{margin:'auto 0.7rem'}}/>
                            <div className='text_sidebar_icon'>Liked videos</div>
                        </p>
                    </NavLink>


                </div>
                <div className='subscriptions_lsbar'>
                    <h3>Subscriptions</h3>
                    <div className='channel_lsbar'>
                        <p>C</p>
                        <div>Channel</div>

                    </div>
                    
                    <div className='channel_lsbar'>
                        <p>C</p>
                        <div>Channel</div>

                    </div>
                    <div className='channel_lsbar'>
                        <p>C</p>
                        <div>Channel</div>

                    </div>
                    <div className='channel_lsbar'>
                        <p>C</p>
                        <div>Channel</div>

                    </div>
                    <div className='channel_lsbar'>
                        <p>C</p>
                        <div>Channel</div>

                    </div>
                    <div className='channel_lsbar'>
                        <p>C</p>
                        <div>Channel</div>

                    </div>
                    <div className='channel_lsbar'>
                        <p>C</p>
                        <div>Channel</div>

                    </div>


                </div>

            </div>
            <div className='container3_DrawerLeftSidebar' onClick={()=>toggleDreawer}>
            
            </div>

        </div>
        
        </>
    )
}
export default DrawerSidebar;