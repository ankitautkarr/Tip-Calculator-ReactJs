import React from 'react'
import "./Input.css"



class Input extends React.Component {

		initialState = {    
   			  amount :0,    
   			  custName: '', 
   			  
  	}


  	state = this.initialState 

  	 
	sendAmount = (event) => {
         this.props.parentCallback1(event);
         this.setState({amount : event.target.value})  
         console.log(event.target.value) 
    }

    
    sendService = (event) => {
         this.props.parentCallback2(event);         
    }

    
    sendName = (event) => {
    	this.props.parentCallback3(event); 
    	this.setState({custName : event.target.value}) 
    }

    
    buttonClick = (event) => { 
    	this.props.parentCallback4(event); 
		    	this.setState(this.initialState) 

    	
    }

   

	render(){
		return(

			<div className = "Input">
				<h4>Enter Your Bill Amount</h4> 
				<input type="number"
					className = "textInput"
			        name="amout"
			        value={this.state.amount}
			        id="amount"
			        placeholder = "Enter amount"
			       	onChange = {this.sendAmount}
			        
			         />			       	

			    <hr />

			    <label htmlFor="service" id ="label">How was the service</label>
			    <span>   </span>
			    <select id="service" onChange= {this.sendService} >
			    	<option defaultValue="Choose" value='0'>Choose..</option>
    				<option value= '0.2'>Excellent</option>
    				<option value= '0.1'>Moderate</option>
    				<option value= '0.05'>Bad</option>
  				</select>
  				<span>   </span>
  				<input className = "textInput"
			        type="text"
			        name="name"
			        id="name"
			        value={this.state.custName}
			        placeholder = "Customer Name"
			        onChange = {this.sendName}
			     />
			     <span>   </span>
			     <input className = "button"
			        type="button"
			        id="button"
			        value = "Add Customer"
			        onClick = {this.buttonClick}
			     />

			     <br></br>
			     <p id = "p"></p>

			</div>
		)

	}
 }

 export default Input