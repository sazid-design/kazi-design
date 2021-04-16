import React from 'react';
import styles from './cardstyles.css';
import kazi1 from '../images/kazi1.jpg';
import kazi2 from '../images/kazi2.jpg';
import kazi3 from '../images/kazi3.jpg';
import kazi4 from '../images/kazi4.jpg';
import kazi5 from '../images/kazi5.jpg';


const cards = () => {
    return (
        <React.Fragment>
            
            
            <div className="cards">
                <div className="card">
                    <div className="container">
                        <img src={kazi1} alt="kazi1"/>
                    </div>
                    <div className="details">
                        <h3>Dark</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quisquam!</p>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <img src={kazi2} alt="kazi2"/>
                    </div>
                    <div className="details">
                        <h3>Duo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quisquam!</p>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <img src={kazi3} alt="kazi3"/>
                    </div>
                    <div className="details">
                        <h3>Themed</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quisquam!</p>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <img src={kazi4} alt="kazi4"/>
                    </div>
                    <div className="details">
                        <h3>Requested Edits</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quisquam!</p>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <img src={kazi5} alt="kazi4"/>
                    </div>
                    <div className="details">
                        <h3>Gore</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quisquam!</p>
                    </div>
                </div>
            </div>
            
            
                
            
        
        </React.Fragment>
    )
}

export default cards
