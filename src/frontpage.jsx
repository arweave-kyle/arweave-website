import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './styles/frontpage.module.scss';


class FrontPage extends React.Component {
    render() { 
        return ( 
            <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className={styles.col, styles.mainCard}>
                                <div className={styles.headline}>
                                    <h1>Store data,<br/>permanently</h1>
                                </div>
                                <div className={styles.description}>
                                    <h5>arweave enables you to permanently host<br/>
                                    your web apps and pages, simply and quickly.</h5>
                                </div>
                                    <button className={styles.buttonPrimary}>SEE DOCUMENTATION</button>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className={styles.partnerCard}>Second</div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className={styles.col, styles.leftCard}>
                                <div className={styles.headline}>
                                    <h1>Store data,<br/>permanently</h1>
                                </div>
                                <div className={styles.description}>
                                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam.</h5>
                                </div>
                                <button className={styles.buttonSecondary}>CHECK THIS OUT</button>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className={styles.col, styles.rightCard}>
                                <div className={styles.headline}>
                                    <h1>Store data,<br/>permanently</h1>
                                </div>
                                <div className={styles.description}>
                                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam.</h5>
                                </div>
                                <button className={styles.buttonSecondary}>GO THERE NOW</button>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
         );
    }
}
 
export default FrontPage;