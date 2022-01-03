import React,{useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Label } from 'reactstrap';
import Axios from 'axios';


function Forms()
{

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [names,setName] = useState('');
    const [contact,setContact] = useState('');
    const [cpassword,setCPassword] = useState('');
    
    const [PTTM,setPTTM] = useState('');
    const [PTTQ,setPTTQ] = useState('');
    const [PTTH,setPTTH] = useState('');
    const [PTTY,setPTTY] = useState('');
    const [PTTO,setPTTO] = useState('');

    const [DAPM,setDAPM] = useState('');
    const [DAPQ,setDAPQ] = useState('');
    const [DAPH,setDAPH] = useState('');
    const [DAPY,setDAPY] = useState('');
    const [DAPO,setDAPO] = useState('');

    const [CSAPM,setCSAPM] = useState('');
    const [CSAPQ,setCSAPQ] = useState('');
    const [CSAPH,setCSAPH] = useState('');
    const [CSAPY,setCSAPY] = useState('');
    const [CSAPO,setCSAPO] = useState('');  

    const submitForm=()=>{

        const PTT = `${PTTM} ${PTTQ} ${PTTH} ${PTTY} ${PTTO}`
        const DAP = `${DAPM} ${DAPQ} ${DAPH} ${DAPY} ${DAPO}`
        const CSAP = `${CSAPM} ${CSAPQ} ${CSAPH} ${CSAPY} ${CSAPO}`

        if(password===cpassword)
        {
            Axios.post('http://localhost:3001/api/insert',{username:username,password:password,names:names,contact:contact,
            PTT:PTT,DAP:DAP,CSAP:CSAP
        }).then(()=>{
            alert(username+" "+password+" "+names+" "+contact);
        });
    }
    else{
        alert("password and confirm password do not match");
    }
    }

    return(
        <div style={{width:"max-content"}}>
        <div className="subhead">
            <h2>Create New Sub-Agent</h2>
        </div>
        <div >
            <br></br>
             <Form className="form1" onSubmit={submitForm}>
                <Label htmlFor="username" >Account Username * </Label>
                 <input className="frm" type="text" name="username" required onChange={(e)=>{setUsername(e.target.value)}} />
                 <br></br>
                 <Label htmlFor="pass" >password *</Label>
                 <input className="frm" type="password" name="pass" required onChange={(e)=>{setPassword(e.target.value)}}/>
                 <br></br>
                 <Label htmlFor="passw" >confirm password *</Label>
                 <input className="frm" type="password" name="passw" required onChange={(e)=>{setCPassword(e.target.value)}}/>
                 <br></br>
                 <Label htmlFor="agentname" >Sub-agent name * </Label>
                 <input className="frm" type="text" name="agentname" required onChange={(e)=>{setName(e.target.value)}}/>
                 <br></br>
                 <Label htmlFor="contact" >Contact number</Label>
                 <input className="frm" type="tel" name="contact" onChange={(e)=>{setContact(e.target.value)}}/>
                  <br></br><br></br><br></br>  
                <table className="table" style={{width:"15%"}}>
                    <tr>
                        <td></td>
                        <td>Monthly License</td>
                        <td>Quaterly License</td>
                        <td>Half-Yearly License</td>
                        <td>Yearly License</td>
                        <td>One-time License</td>
                    </tr>
                    <tr>
                    <td style={{fontSize:"12px"}}><Label htmlFor="up" >PTT user price</Label></td>
                       <td> <input className="frm" type="text" name="up" onChange={(e)=>{setPTTM(e.target.value)}} /></td>
                       <td> <input className="frm" type="text" onChange={(e)=>{setPTTQ(e.target.value)}}/></td>
                       <td> <input className="frm" type="text" onChange={(e)=>{setPTTH(e.target.value)}}/></td>
                       <td> <input className="frm" type="text" onChange={(e)=>{setPTTY(e.target.value)}}/></td>
                       <td> <input className="frm" type="text" onChange={(e)=>{setPTTO(e.target.value)}}/></td> 
                    </tr>
                    <tr>
                    <td style={{fontSize:"12px"}}><Label htmlFor="dp" >Dispatcher Account Price</Label></td>
                       <td> <input className="frm" type="text" name="dp" onChange={(e)=>{setDAPM(e.target.value)}} /></td>
                       <td> <input className="frm" type="text" onChange={(e)=>{setDAPQ(e.target.value)}}/></td>
                       <td> <input className="frm" type="text" onChange={(e)=>{setDAPH(e.target.value)}}/></td>
                       <td> <input className="frm" type="text" onChange={(e)=>{setDAPY(e.target.value)}}/></td>
                       <td> <input className="frm" type="text" onChange={(e)=>{setDAPO(e.target.value)}}/></td> 
                    </tr>
                    <tr>
                    <td style={{fontSize:"12px"}}><Label htmlFor="csp" >Control Station Account Price</Label></td>
                       <td> <input className="frm" type="text" name="csp" onChange={(e)=>{setCSAPM(e.target.value)}}/></td>
                       <td> <input className="frm" type="text" onChange={(e)=>{setCSAPQ(e.target.value)}}/></td>
                       <td> <input className="frm" type="text" onChange={(e)=>{setCSAPH(e.target.value)}}/></td>
                       <td> <input className="frm" type="text" onChange={(e)=>{setCSAPY(e.target.value)}}/></td>
                       <td> <input className="frm" type="text" onChange={(e)=>{setCSAPO(e.target.value)}}/></td> 
                    </tr>
                </table>
                    <input style={{backgroundColor:"grey",width:"120px"}} type="submit" value="save" />
             </Form>   
             <br></br><br></br>
        </div>
        </div>
    );
}

export default Forms