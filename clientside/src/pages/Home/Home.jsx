import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../components/showVideoGrid/ShowVideoGrid'
import vid from '../Videos/purivideo.mp4'
import '../Home/Home.css'
function Home(){
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

      const NavList =[
        "All",
        "Python",
        "Java",
        "C++",
        "Movies",
        "Science",
        "Animation",
        "Gaming",
        "Comedy"

      ]
      
    return(
       <div className="container_Pages_App">
        <LeftSidebar/>
        <div className="container2_Pages_App">
        <div className='navigation_Home'>
                {
                   NavList.map(m=>{
                    return(
                      <p key={m} className='btn_nav_home'>
                      {m}
                    </p>

                    )

                   })
                }
              </div>
            <ShowVideoGrid vids={vids}/>
        </div>
             
       </div>

    )
       
    
}
export default Home