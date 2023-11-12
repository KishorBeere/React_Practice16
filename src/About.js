import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import BookIcon from '@mui/icons-material/Book';
import InfoIcon from '@mui/icons-material/Info';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FeedIcon from '@mui/icons-material/Feed';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import SecurityIcon from '@mui/icons-material/Security';
import UpdateIcon from '@mui/icons-material/Update';
import StorageIcon from '@mui/icons-material/Storage';


function About(){
    return (
        <>
        <br/>
        <h2 className="text-center" style={{
            color:'blue',
            background: 'white',
            padding: 10,

        }}>This application is primarly designed for checking and updating of user account details</h2>
        <div className="container">
        <div className="About-page">
            <div className="row">
                <div className="column"> <StorageIcon/> Values</div>
                <div className="column"> <SafetyCheckIcon/> Safety</div>
                <div className="column"> <BookIcon/> Blog</div>
            </div>


            <div className="row">
                <div className="column"> <InfoIcon/> About</div>
                <div className="column"> <UpdateIcon/> Careers</div>
                <div className="column"> <Diversity3Icon/> Team</div>
            </div>


            <div className="row">
                <div className="column"> <FeedIcon/> News</div>
                <div className="column"> <ModelTrainingIcon/> Idealogy</div>
                <div className="column"> <SecurityIcon/> Security</div>
            </div>

        </div>
        </div>
        </>
    )
}

export default About