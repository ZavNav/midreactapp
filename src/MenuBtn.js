import React, {Component} from "react";
import './MenuBtn.css';

class MenuBtn extends Component{
    render(){
        return(
            <button id={"roundBtn"} onMouseDown={this.props.handleMouseDown}/>
        )
    }
}

export default MenuBtn;