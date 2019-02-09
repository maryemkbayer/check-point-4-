import React, {Component} from "react";


class Chiffres extends Component{
	render() {
		return(
			
			<div className="chiffres">
            
				<h3 style={{marginLeft:"160px",fontSize:"30px",color:"white"}}>{this.props.number}</h3>
                <p style={{marginLeft:"160px",fontSize:"30px",color:"white"}} >{this.props.para}</p>
               
			</div>

		);
	}
}

export default Chiffres;