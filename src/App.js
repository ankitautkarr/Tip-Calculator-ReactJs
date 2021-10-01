import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input.js'
import Output from './Output.js'
import Hotel from "./video/hotel.mp4"



class App extends React.Component {

	constructor(props){
    super(props); 
      this.state = {    
        billAmount :0,
        service :'',  
        custName :'', 
        totalTip: 0, 
        totalCust : 0,
        listCust : [] 
    }

  }

	
	
	getBillAmount = (event) => {
		this.setState({billAmount: event.target.value});
	}

  
	getService = (event) => {
		this.setState({service: event.target.value})		
	}

 
	getCustomerName = (event) => {
		this.setState({custName: event.target.value})	
		console.log("In Name");	
	}


     addCustomer =  (event) => {
        console.log(this.state.billAmount);
        console.log(this.state.service);
        console.log(this.state.custName); 


        
        if(this.state.billAmount == 0 || this.state.custName == "" || this.state.service == 0){
            alert("Please enter below values"); 
            this.setState({billAmount : 0}) 
            this.setState({custName : ""})  
            this.setState({service : 0})    
        }
        else { 
     
             var result = this.state.billAmount * this.state.service ; 
             result = result.toFixed(2); 
             result = parseFloat(result); 
             console.log(result);

              
            this.setState({listCust : [...this.state.listCust,{name:this.state.custName,perc:result}]});
            
            this.setState({billAmount : 0}) 
            this.setState({custName : ""})  

            }
    }


    
    caluculateTip = () => {

      
      let tipTotal = 0 
        this.state.listCust.forEach((item,index) => {  
            tipTotal += item.perc;   
            console.log(tipTotal,"tipTotal");
            console.log(item.perc, "perc");
        })

        tipTotal = tipTotal.toFixed(2); 
        tipTotal = parseFloat(tipTotal);

        this.setState({ totalTip: tipTotal }) 

        this.setState({totalCust : this.state.listCust.length}) 
    }


	render(){		
      
  		return(

        <div className="App"> 
             
              <div className="video-container">

                <div className="color-overlay"> 

                </div>
               
              
                <video autoPlay="autoplay" loop="loop" muted  className = "video"> 
                    <source src={Hotel} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

              </div> 


            	<div className="subContent"> 

              		<div className = "Header">
            				<h1>Tip Calculator</h1>  
            				
        			     </div>


              		<Input  parentCallback1 = {this.getBillAmount} parentCallback2 = {this.getService} parentCallback3 = {this.getCustomerName} parentCallback4 = {this.addCustomer} /> 
              		


              		<Output data = {this.state.listCust} totalTip = {this.state.totalTip} totalCust = {this.state.totalCust} parentCallback5 = {this.caluculateTip}/> 


                  <footer><small>@2020 TIP-CALCULATOR</small></footer> 

            	</div>

          </div>


  	);

  }
}

export default App;
