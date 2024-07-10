import Home from "../pages/Home/Home"
import { Routes,Route,Link } from "react-router-dom"
import Library from "../pages/Library/Library"
import YourVideos from "../pages/Yourvideo/YourVideos"
import History from "../pages/Hostory/History"
import LikedVideos from "../pages/LikedVideo/LikedVideo"
import WatchHistory from "../pages/WatchHistory/WatchHistory"
import WatchLater from "../pages/WatchLater/WatchLater"
import VideoPage from "../pages/VideoPage/VideoPage"

function AllRoutes(){
    return(
        <>
       
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/library" element={<Library/>}/>
         <Route path="/yourvideos" element={<YourVideos/>}/>
         <Route path="/history" element={<WatchHistory/>}/>
         <Route path="/likedvideos" element={<LikedVideos/>}/>
         {/* <Route path="/watchhistory" element={<WatchHistory/>}/> */}
         <Route path="/WatchLater" element={<WatchLater/>}/>
         <Route path="/videoPage/:vid" element={<VideoPage/>}/>
        
        </Routes>
        </>
    )
}
export default AllRoutes