import ShowVideo from '../ShowVideo/ShowVideo';
import vid from '../../pages/Videos/purivideo.mp4'
function ShowVideoList({videoId}){
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
        <>
        <div className="continer_showvideogrid">
            {
                vids?.filter(q=>q._id===videoId).map(vi=>{
                    return(
                        <div key={vi._id} className="video_box_app">
                            <ShowVideo vid={vi}/>
                            
                            
                        </div>
                    )
                })

            }

        </div>
        
        </>
       
    )
}
export default ShowVideoList;