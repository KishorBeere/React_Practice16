import {useSelector} from 'react-redux'
import "./App.css";


function Account(){
    let data = useSelector((state)=>{
        return state
    })
    return (
        <> 
        <div className='container' >  
        <br/>
        <h2 style={{top:'10px'}}>Check Details <i class="fa-solid fa-circle-info fa-fade"></i> </h2> 
        <br/>
            <table className="table table-bordered w-50">
                <thead>
                    <tr>
                        <th>Balance</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Account Type</th>
                        <th>PAN</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th>{data.balance}</th>
                        <th>{data.fullName}</th>
                        <th>{data.mobile}</th>
                        <th>{data.accountType}</th>
                        <th>{data.PAN}</th>
                    </tr>
                </tbody>
            </table>
        </div>

        </>
    )
}

export default Account