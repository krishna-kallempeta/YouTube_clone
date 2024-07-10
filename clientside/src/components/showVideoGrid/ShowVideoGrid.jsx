import ShowVideo from "../ShowVideo/ShowVideo"
import './showVideoGrid.css'
function ShowVideoGrid({vids}){
    return(
        <>
        <div className="continer_showvideogrid">
            {
                vids?.map(vi=>{
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
export default ShowVideoGrid