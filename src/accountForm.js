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

    return(
        <>

            <div className='container'> 
            <br/>
            <h2> Update Details  <i class="fa-solid fa-pen fa-fade fa-xs"></i></h2>
             <br/>

              {/* FullName */}
              <div className="row mt-2"> 
                <div className="col-4">
                    <input type='text' placeholder="Enter Full Name" className="form-control" value={name} onChange={(e)=>{
                        let value = e.target.value ;
                        setName(value)
                    }}/>
                </div>
                <button className="btn btn-primary mx-2 col-1" onClick={()=>{
                    dispatch({type:'nameUpdate',payload:name}) 
                    setName('')
                }}>Update</button>
              </div>
        
            
            {/* mobileUpdate */}
            <div className="row mt-2"> 
                <div className="col-4">
                    <input type='number' maxLength={10} placeholder="Enter Mobile Number" className="form-control" value={mobile} onChange={(e)=>{
                        let value = e.target.value ;
                        setMobile(value)
                    }}/>
                </div>
                <button className="btn btn-primary mx-2 col-1" onClick={()=>{
                    dispatch({type:'mobileUpdate',payload:mobile}) 
                    setMobile('')
                }}>Update</button>

            </div>



            {/* AccountType */}
            <div className="row mt-2"> 
                <div className="col-4">
                    <input type='text' placeholder="Account Type" className="form-control" value={accountType} onChange={(e)=>{
                        let value = e.target.value ;
                        setAccountType(value)
                    }}/>
                </div>
                <button className="btn btn-primary mx-2 col-1" onClick={()=>{
                    dispatch({type:'accountTypeUpdate',payload:accountType}) 
                    setAccountType('')
                }}>Update</button>
            </div>



            {/* PAN */}
            <div className="row mt-2"> 
                <div className="col-4">
                    <input  maxlength="10" placeholder="Enter PAN Number" className="form-control" value={PAN} onChange={(e)=>{
                        let value = e.target.value ;
                        setPAN(value)
                    }}/>
                </div>
                <button className="btn btn-primary mx-2 col-1" onClick={()=>{
                    dispatch({type:'PANUpdate',payload:PAN}) 
                    setPAN('')
                }}>Update</button>
            </div>



            {/* Amount */}
            <div className="row mt-2"> 
                <div className="col-4">
                    <input type='number' placeholder="Enter Amount" className="form-control" value={amount} onChange={(e)=>{
                        let value = e.target.value ;
                        setAmount(value)
                    }}/>
                </div>
                <button className="btn btn-primary col-1 mx-2" onClick={()=>{
                    dispatch({type:'deposit',payload:amount}) 
                    setAmount('')
                }}>Deposit</button>

                <button className="btn btn-danger mx-2 col-1" onClick={()=>{
                    dispatch({type:'withdraw',payload:amount}) 
                    setAmount('')
                }}>withdraw</button>

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