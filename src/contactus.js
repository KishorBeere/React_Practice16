import "./App.css"
import ChatIcon from '@mui/icons-material/Chat';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import ReportIcon from '@mui/icons-material/Report';
import BlockIcon from '@mui/icons-material/Block';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


function ContactUs(){
    return(
        <>
        <div className="container">
        <div className="contactUs-page"> 
            <div className="row"> 
                <div className="column">
                <EmailOutlinedIcon/>
                   Email? 
                </div>
                <div className="column">
                    <ChatIcon/>
                    Chat?
                </div>
                <div className="column">
                <PhoneInTalkIcon/>
                    Talk?
                </div>
            </div>

            <div className="row"> 
                <div className="column">
                   <LockOpenIcon/>
                    Forgot Password? 
                </div>
                <div className="column">
                <ChangeCircleIcon/>
                    Change Password? 
                </div>
                <div className="column">
                <PhoneCallbackIcon/>
                    Change Mobile?
                </div>
            </div>


            <div className="row"> 
                <div className="column">
                <ReportIcon/>
                    I want to advertise an issue
                </div>
                <div className="column">
                <BlockIcon/>
                    I want to block my account
                </div>
                <div className="column">
                <RemoveCircleIcon/>
                    I want to unblock my account
                </div>
            </div>
        </div>

        </div>
        </>
    )
}

export default ContactUs