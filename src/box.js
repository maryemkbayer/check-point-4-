import React, {Component} from "react";


class Box extends Component{
	render() {
		return(
			
			<div style={{width:"25%",backgroundColor:this.props.color}} className="Box">
            
				<h1>{this.props.name}</h1>
                <p>{this.props.des}</p>
                <button style={{marginLeft:"110px"}}>savoir plus</button>
			</div>

		);
	}
}

export default Box;