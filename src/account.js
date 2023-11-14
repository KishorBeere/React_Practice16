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
        <h2 style={{top:'10px'}}>Check Details : </h2> 
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
                        <th>{data.account.balance}</th>
                        <th>{data.update.fullName}</th>
                        <th>{data.update.mobile}</th>
                        <th>{data.update.accountType}</th>
                        <th>{data.update.PAN}</th> 
                    </tr>
                </tbody>
            </table>


            {/* For Transactions */}
            <h2 style={{top:'10px'}}>Transactions Details :</h2>  <br/>
            <table className="table table-bordered w-60">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Desctiption</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.transactions.map((tr,index)=>{
                            return (<tr key={tr.id}>
                                        <td>{tr.id}</td>
                                        <td>{tr.amount}</td>
                                        <td>{tr.type}</td>
                                        <td>{tr.date}</td>
                                        <td>{tr.status}</td>
                                        <td>{tr.description}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>

        </>
    )
}

export default Account

















