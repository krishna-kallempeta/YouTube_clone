import WHL from '../../components/WHL/WHL';
import '../Home/Home.css'
import vid from '../Videos/purivideo.mp4'
function WatchHistory(){
   
    
    const history = [
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
       <WHL page={"History"} videoList={history}/>

    )
       
    
}
export default WatchHistory