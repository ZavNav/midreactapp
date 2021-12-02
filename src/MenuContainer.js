import React, {Component} from "react";
import MenuBtn from "./MenuBtn";
import Menu from "./Menu";

class MenuContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }
    handleMouseDown (e) {
        this.toggleMenu();
        console.log("clicked");
        e.stopPropagation();
    }
    toggleMenu(){
        this.setState({
            visible: !this.state.visible
        })
    }
    render(){
        return(
            <div>
                <MenuBtn handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown} menuVisible={this.state.visible}/>
                <div>
                    <p>Find the odd (is it so?)</p>
                    <ul>
                        <li>Lorem</li>
                        <li>Ipsum</li>
                        <li>Dolor</li>
                        <li>Sit</li>
                        <li>Bumblebees</li>
                        <li>Aenean</li>
                        <li>Consectetur</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default MenuContainer;