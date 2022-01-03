import React,{Component} from 'react';
import '../App.css';
import Main from './main.js';
import {BrowserRouter,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Collapse} from 'reactstrap'; 

class Dashboard extends Component
{  

    constructor(props)
   {
       super(props);

       this.state={
           iscolOpen:false,
        }

        this.change=this.change.bind(this);
   }

   change(){

    this.setState({
        iscolOpen:!this.state.iscolOpen,
    })
   }

    render(){
    return(
            <div style={{display:"flex"}}>
            <div className="dashboard">
            <h4 style={{textAlign:"center"}}>Dashboard</h4>
            <div className="dashbutton">
            <Button style={{backgroundColor:"rgb(68,84,106)",border:"none"}}>+ company management</Button>
            <br></br>
            <Button style={{backgroundColor:"rgb(68,84,106)",border:"none"}}>+ user management</Button>
            <br></br>
            <Button style={{backgroundColor:"rgb(68,84,106)",border:"none"}}>+ license management</Button>
            <br></br>
            <Button onClick={this.change} style={{backgroundColor:"rgb(68,84,106)",border:"none"}}>+ sub agent management</Button>
            <br></br>
            <Collapse className="colbutton" isOpen={this.state.iscolOpen}>
            <br></br>
            <BrowserRouter>
           <Link className="link" to="createnewnubagent" >Create new subagent</Link>
           </BrowserRouter>
            <br></br>
            <Button style={{backgroundColor:"rgb(68,84,106)",border:"none"}}>view subagents</Button>
            <br></br>
            <Button style={{backgroundColor:"rgb(68,84,106)",border:"none"}}>set prices for sub agents</Button>
            <br></br>
            <Button style={{backgroundColor:"rgb(68,84,106)",border:"none"}}>recharge subagent</Button>
            <br></br>
            <Button style={{backgroundColor:"rgb(68,84,106)",border:"none"}}>modify subagent</Button>
            <br></br>
            </Collapse>
            <Button style={{backgroundColor:"rgb(68,84,106)",border:"none"}}>+ personal center</Button>
            </div>
            </div>
            <BrowserRouter>
            <div>
                <Main />
            </div>
            </BrowserRouter>
            </div>

    );
    }
}

export default Dashboard;