import React from 'react'
import { Link } from 'gatsby'
import './slider.css'
import { Twirl as Hamburger } from 'hamburger-react'

class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isBoxVisible: 'active'
        }
    }

    toggleBox = () => {
        this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
    };

    render() {
        return (
            <div className={`slider slider-${this.state.isBoxVisible ? "" : "active"}`}>
                <nav onClick={this.toggleBox} className={`${this.state.isBoxVisible ? "" : "active"}`}>
                    <Hamburger rounded />
                </nav>

                <nav className={`menu ${this.state.isBoxVisible ? "" : "active"}`}>
                    <ul className={`menu-inner ${this.state.isBoxVisible ? "" : "active"}`}>
                        <li className="first-li menu-link"><Link to="/cleaning">Cleaning</Link></li>
                        <li className="menu-link"><Link to="/cooking">Cooking</Link></li>
                        <li className="menu-link"><Link to="/crabbing">Crabbing</Link></li>
                        <li className="menu-link"><Link to="/fishing">Fishing</Link></li>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                    </ul>
                </nav>

            </div>
        )
    }
}

export default Slider