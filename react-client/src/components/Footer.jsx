import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <a target="_blank" href='https://github.com/zmillard'>
                        <img className='linkIcon' src='https://image.flaticon.com/icons/svg/25/25231.svg' />
                    </a>
                    <a target="_blank" href='https://www.linkedin.com/in/zo%C3%AB-millard-a81033105/'>
                        <img className='linkIcon' src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png' />
                    </a>
                    <p className='linkTxt' >Website built using React, Node, Webpack, react-strap, and typed.js</p>
                </div>
            </footer>
        )
    }
}
export default Footer;