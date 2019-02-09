import React, {Component} from "react";


class ROCK extends Component{
	render() {
		return(
			
			<div className="Box">
				<img style={{marginLeft:"50px",height:"300px",width:"350px"}} className="images" src={this.props.img}/>
				<p style={{marginLeft:"180px",fontSize:"20px",fontFamily:"monospace"}} className="popo">{this.props.name}</p>
			</div>

		);
	}
}

export default ROCK;