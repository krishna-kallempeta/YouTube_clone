import { FaHistory } from 'react-icons/fa';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import vid from '../Videos/purivideo.mp4'
import WHLVideoList from '../../components/WHL/WHLVideoList'
import './Library.css'
import {  MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
function Library(){
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
            <div className='container_libraryPage'>
                
                    <h1 className='title_container_LibraryPage'>
                        <b>
                            <FaHistory/>
                        </b>
                        <b>
                            Watch Later
                        </b>

                    </h1>
                    <div className='container_videoList_LibraryPage'>
                        <WHLVideoList
                        page={"History"}
                        videoList={vids}/>

                    </div>

               

            </div>

            <div className='container_libraryPage'>
                
                <h1 className='title_container_LibraryPage'>
                    <b>
                        <MdOutlineWatchLater/>
                    </b>
                    <b>
                        History
                    </b>

                </h1>
                <div className='container_videoList_LibraryPage'>
                    <WHLVideoList
                    page={"History"}
                    videoList={vids}/>

                </div>

           

        </div>
        <div className='container_libraryPage'>
                
                <h1 className='title_container_LibraryPage'>
                    <b>
                        <AiOutlineLike/>
                    </b>
                    <b>
                        Liked videos
                    </b>

                </h1>
                <div className='container_videoList_LibraryPage'>
                    <WHLVideoList
                    page={"History"}
                    videoList={vids}/>

                </div>

           

        </div>
        </div>
             
       </div>

    )
       
    
}
export default Library