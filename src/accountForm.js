import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";


function AccountForm() {

    let dispatch = useDispatch()
    const [amount,setAmount] = useState('') 
    const [name,setName] = useState('') 
    const [mobile,setMobile] = useState('')
    const [accountType,setAccountType] = useState('')
    const [PAN,setPAN] = useState('')
    const [TransactionID,setTransactionID] = useState(1)

    return(
        <>

            <div className='container'> 
            <br/>
            <h2> Update Details  <i class="fa-solid fa-pen fa-fade fa-xs"></i></h2>
             <br/>


            {/* For Name,Mobile,accountType,PAN */}

              <div className="row mt-2"> 
                <div className="col-4">
                   <div className="mt-0">
                   <input type='text' placeholder="Name" className="form-control" value={name} onChange={(e)=>{
                        let value = e.target.value ;
                        setName(value)
                    }}/>
                   </div>
                    <div className="mt-2">
                    <input type='number' placeholder="Mobile" className="form-control" value={mobile} onChange={(e)=>{
                        let value = e.target.value ;
                        setMobile(value)
                    }}/>
                    </div>
                    <div className="mt-2">
                    <input type='text' placeholder="Type" className="form-control" value={accountType} onChange={(e)=>{
                        let value = e.target.value ;
                        setAccountType(value)
                    }}/>
                    </div>
                    <div className="mt-2">
                    <input type='text' placeholder="PAN" className="form-control" value={PAN} onChange={(e)=>{
                        let value = e.target.value ;
                        setPAN(value)
                    }}/>
                    </div>
                    
                </div>
                <button className="btn btn-primary mx-2 col-1" onClick={()=>{
                    dispatch({type:'nameUpdate',payload:name}) 
                    dispatch({type:'mobileUpdate',payload:mobile}) 
                    dispatch({type:'accountTypeUpdate',payload:accountType}) 
                    dispatch({type:'PANUpdate',payload:PAN}) 
                    setName("")
                    setMobile("")
                    setAccountType("")
                    setPAN("")
                }}>Update</button>
              </div>
        
            


            {/* Amount */}
            <div className="row mt-2"> 
                <div className="col-4">
                    <input type='number' placeholder="Amount" className="form-control" value={amount} onChange={(e)=>{
                        let value = e.target.value ;
                        setAmount(value)
                    }}/>
                </div>
                <button className="btn btn-primary col-1 mx-2" onClick={()=>{
                    dispatch({type:'deposit',payload:amount}) 
                    setTransactionID(TransactionID+1) 
                    dispatch({type:'add',payload:{
                        id:TransactionID,
                        amount:amount,
                        type:"Credit",
                        date:new Date().toLocaleString(),
                        status:"Successful",
                        description:"Amount has been Credited to your account"
                    }})
                    setAmount('')
                }}>Deposit</button>

                <button className="btn btn-danger mx-2 col-1" onClick={()=>{
                    dispatch({type:'withdraw',payload:amount}) 
                    setTransactionID(TransactionID+1) 
                    dispatch({type:'add',payload:{
                        id:TransactionID,
                        amount:amount,
                        type:"Debit",
                        date:new Date().toLocaleString(),
                        status:"Successful",
                        description:"Amount has been Debited from your account"
                    }})
                    setAmount('')
                }}>Withdraw</button>

            </div>

            
            {/* Reset */}
            <div>
            <button className="btn btn-danger mx-2 col-1 mt-2" onClick={()=>{
                    dispatch({type:'reset'}) 
                }}>Reset</button>
            </div>

          
            
        </div>
        </>
    )
}

export default AccountForm;