import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <a target="_blank" href='https://github.com/zmillard'>
                        <img className='linkIcon' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.lJEV8azOsH7rRQJ6gmvt9gHaHa%3Fpid%3DApi%26defcache%3D1&f=1&ipt=54eb7d906e190e1a00c3d8961900afbb825fcb685ac86bf42b15680cde8ef178' />
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