import React from 'react'
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// n
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col footerH mt-4">
                        <p className="copyright">
                            &copy; HireHelloWorld. All rights reserved. v1.0.2
                        </p>
                    </div>
                </div>
            </div>
	    </footer>
    );
}

export default Footer
