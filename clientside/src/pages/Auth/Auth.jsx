import { GoogleLogout } from 'react-google-login';
import '../../pages/Auth/Auth.css'
import { BiLogOut } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/currentUser';
function Auth({ User,setAuthBtn, setEditCreateChanelBtn}){
    const dispatch = useDispatch();
    const  onLogoutSuccess=()=>{
        dispatch(setCurrentUser)
        alert("Log out successfully")

    }
    return(
        <>
        <div className="Auth_container" onClick={()=>setAuthBtn(false)}>
            <div className="Auth_container2">
                <p className="User_Details">
                    <div className="Chanel_logo_App">
                        <p className="fstChar_logo_App">
                            {
                                 User?.result.name ? (
                                    <>
                                    {
                                       User?.result.name.charAt(0).toUpperCase()
                                    }
                                    </>

                                 ):(
                                    <>
                                    {
                                        User?.result.email.charAt(0).toUpperCase()
                                     }
                                     </>

                                 )


                            }

                        </p>
                    </div>
                    <div className='email_Auth'>{
                        User?.result.email}

                    </div>

                </p>
                <div className='btns_Auth'>
                    {
                        User?.result.name ?<>
                            <input type="submit" className='btn_Auth' value=" your account"
                            onClick={()=> setEditCreateChanelBtn(true)}/>
                   
                        </>:<>
                        <input type="submit" className='btn_Auth' value="Create your account"
                        onClick={()=> setEditCreateChanelBtn(true)}/>
                   
                        </>
                    }
               

                
                <div>
                    <GoogleLogout
                        clientId={"765054484584-nms3lhls83kvbv0v9hlvdr79gnbn87kc.apps.googleusercontent.com"}
                        onLogoutSuccess={onLogoutSuccess}
                        render={(renderProps)=>(
                            <div onClick={renderProps.onClick} className='btn_Auth'>
                                <BiLogOut/>
                                Log out
                            </div>

                        )} 
                         />
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Auth;