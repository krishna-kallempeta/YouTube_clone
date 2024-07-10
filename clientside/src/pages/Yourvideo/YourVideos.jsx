import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../components/showVideoGrid/ShowVideoGrid'
import vid from '../Videos/purivideo.mp4'
import './YourVideo.css'
function YourVideos(){
    const vids = [
        {
          _id: 1,
          title: "First Video",
          video_url: vid,
          uploader:"abc",
          channel: "Channel A",
          description: "This is the description of the first video.",
        },
        {
          _id: 2,
          title: "Third Video",
          video_url: vid,
          uploader:"abc",
          channel: "Channel C",
          description: "This is the description of the third video.",
        },
        {
          _id: 3,
          title: "Fourth Video",
          video_url:vid,
          uploader:"abc",
          channel: "Channel D",
          description: "This is the description of the fourth video.",
        },
        {
          _id: 4,
          title: "Fifth Video",
          video_url: vid,
          uploader:"abc",
          channel: "Channel E",
          description: "This is the description of the fifth video.",
        }
      ];

    return(
        <div className="container_Pages_App">
        <LeftSidebar/>
        <div className="container2_Pages_App">
            <div className='container_Yourvideos'>
            <h1>Your Videos</h1>
     
            <ShowVideoGrid vids={vids}/>
            </div>
        </div>
             
       </div>
       

    )
       
    
}
export default YourVideos