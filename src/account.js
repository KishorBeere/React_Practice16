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



















//First Code I written for this. 


// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import "./App.css";


// function AccountForm() {

//     let dispatch = useDispatch()
//     const [amount,setAmount] = useState('') 
//     const [name,setName] = useState('') 
//     const [mobile,setMobile] = useState('')
//     const [accountType,setAccountType] = useState('')
//     const [PAN,setPAN] = useState('')
//     const [TransactionID,setTransactionID] = useState(1)

//     return(
//         <>

//             <div className='container'> 
//             <br/>
//             <h2> Update Details  <i class="fa-solid fa-pen fa-fade fa-xs"></i></h2>
//              <br/>

//               {/* FullName */}
//               <div className="row mt-2"> 
//                 <div className="col-4">
//                     <input type='text' placeholder="Enter Full Name" className="form-control" value={name} onChange={(e)=>{
//                         let value = e.target.value ;
//                         setName(value)
//                     }}/>
//                 </div>
//                 <button className="btn btn-primary mx-2 col-1" onClick={()=>{
//                     dispatch({type:'nameUpdate',payload:name}) 
//                     setName('')
//                 }}>Update</button>
//               </div>
        
            
//             {/* mobileUpdate */}
//             <div className="row mt-2"> 
//                 <div className="col-4">
//                     <input type='number' maxLength={10} placeholder="Enter Mobile Number" className="form-control" value={mobile} onChange={(e)=>{
//                         let value = e.target.value ;
//                         setMobile(value)
//                     }}/>
//                 </div>
//                 <button className="btn btn-primary mx-2 col-1" onClick={()=>{
//                     dispatch({type:'mobileUpdate',payload:mobile}) 
//                     setMobile('')
//                 }}>Update</button>

//             </div>



//             {/* AccountType */}
//             <div className="row mt-2"> 
//                 <div className="col-4">
//                     <input type='text' placeholder="Account Type" className="form-control" value={accountType} onChange={(e)=>{
//                         let value = e.target.value ;
//                         setAccountType(value)
//                     }}/>
//                 </div>
//                 <button className="btn btn-primary mx-2 col-1" onClick={()=>{
//                     dispatch({type:'accountTypeUpdate',payload:accountType}) 
//                     setAccountType('')
//                 }}>Update</button>
//             </div>



//             {/* PAN */}
//             <div className="row mt-2"> 
//                 <div className="col-4">
//                     <input  maxlength="10" placeholder="Enter PAN Number" className="form-control" value={PAN} onChange={(e)=>{
//                         let value = e.target.value ;
//                         setPAN(value)
//                     }}/>
//                 </div>
//                 <button className="btn btn-primary mx-2 col-1" onClick={()=>{
//                     dispatch({type:'PANUpdate',payload:PAN}) 
//                     setPAN('')
//                 }}>Update</button>
//             </div>



//             {/* Amount */}
//             <div className="row mt-2"> 
//                 <div className="col-4">
//                     <input type='number' placeholder="Enter Amount" className="form-control" value={amount} onChange={(e)=>{
//                         let value = e.target.value ;
//                         setAmount(value)
//                     }}/>
//                 </div>
//                 <button className="btn btn-primary col-1 mx-2" onClick={()=>{
//                     dispatch({type:'deposit',payload:amount}) 
//                     setTransactionID(TransactionID+1) 
//                     dispatch({type:'add',payload:{
//                         id:TransactionID,
//                         amount:amount,
//                         type:"Credit",
//                         date:new Date().toLocaleString(),
//                         status:"Successful",
//                         description:"Amount has been Credited to your account"
//                     }})
//                     setAmount('')
//                 }}>Deposit</button>

//                 <button className="btn btn-danger mx-2 col-1" onClick={()=>{
//                     dispatch({type:'withdraw',payload:amount}) 
//                     setTransactionID(TransactionID+1) 
//                     dispatch({type:'add',payload:{
//                         id:TransactionID,
//                         amount:amount,
//                         type:"Debit",
//                         date:new Date().toLocaleString(),
//                         status:"Successful",
//                         description:"Amount has been Debited from your account"
//                     }})
//                     setAmount('')
//                 }}>withdraw</button>

//             </div>

            
//             {/* Reset */}
//             <div>
//             <button className="btn btn-danger mx-2 col-1 mt-2" onClick={()=>{
//                     dispatch({type:'reset'}) 
//                 }}>Reset</button>
//             </div>

          
            
//         </div>
//         </>
//     )
// }

// export default AccountForm;