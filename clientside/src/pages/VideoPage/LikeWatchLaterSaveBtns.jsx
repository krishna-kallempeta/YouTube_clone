import { BsThreeDots } from "react-icons/bs";
import './LikeWatchLaterSaveBtns.css'
import { MdPlaylistAddCheck } from "react-icons/md";
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from "react-icons/ri";
import { useState } from "react";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
function LikeWatchLaterSaveBtns(){
    const [saveVideo,setSaveVideo] = useState(true);
    const [DislikeBtn,setDisLikeBtn] = useState(false)
    const [LikeBtn,setLikeBtn]=useState(false)

    const handleSaveVideo=()=>{
        if(saveVideo){
            setSaveVideo(false);
        }else{
            setSaveVideo(true);
        }
    }

    const toggleLikeBtn=()=>{
        if(LikeBtn){
            setLikeBtn(false)
        }
        else{
            setLikeBtn(true)
        }

    }

    const toggleDislikeBtn=()=>{
        if(DislikeBtn){
            setDisLikeBtn(false)

        }else{
            setDisLikeBtn(true)

        }
    }
    return(
        <>
        <div className="btns_cont_videPage">
            <div className="btn_VideoPage">
                <BsThreeDots/>
            </div>
            <div className="btn_VideoPage">
            <div className="like_videoPage"  onClick={()=>toggleLikeBtn()}>
                    {
                        LikeBtn ? ( 
                        <>
                         <AiFillLike size={22} className="btns_videoPage"/>
                        
                        </>
                        ):(
                        <>
                        <AiOutlineLike size={22} className="btns_videoPage"/>
                       
                        </>
                        )}   
                        <b>1</b> 
                </div>
                <div className="like_videoPage" onClick={()=>toggleDislikeBtn()}>
                    {
                        DislikeBtn ? ( 
                        <>
                         <AiFillDislike size={22} className="btns_videoPage"/>
                        
                        </>
                        ):(
                        <>
                        <AiOutlineDislike size={22} className="btns_videoPage"/>
                       
                        </>
                        )}   
                        <b>Dislike</b> 
                </div>
                <div className="like_videoPage" onClick={()=>handleSaveVideo()}>
                    {
                        saveVideo ? ( 
                        <>
                         <RiPlayListAddFill size={22} className="btns_videoPage"/>
                         <b>Save</b>
                        </>
                        ):(
                        <>
                        <MdPlaylistAddCheck size={22} className="btns_videoPage"/>
                        <b>Saved</b>
                        </>
                        )}    
                </div>

                <div className="like_videoPage">
                  <>
                  <RiHeartAddFill size={22} className="btns_videoPage"/>
                         <b>Thanks</b>
                        
                  </>    
                </div>
                <div className="like_videoPage">
                  <>
                  <RiShareForwardLine size={22} className="btns_videoPage"/>
                         <b>Share</b> 
                  </>    
                </div>
                

            </div>
        </div>
        </>
    )
}
export default LikeWatchLaterSaveBtns;