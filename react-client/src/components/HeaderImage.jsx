import React, { Component } from 'react';
import '../index.css';

class HeaderImage extends Component {
    render() {
        return (
            <div className='mainImg1'>
                <img src='https://lh3.googleusercontent.com/oKPOrTkOcMRajkbnVs7B-Kajc-R_LhETNZw4p3kSsM7ybE_F4xhSeu1TaeMrAL88fp-9ZLb-N3JJ3jMMp1YpIl6n5diHveF_Xa6BCRRn97hW7D2HUxCEaHHSpEyyGjQvU7ybqkd63A=w2400'/>
                <div className='mx-auto centered'>
                    <h1 className="display-3">Hello, World!</h1>
                </div>
            </div>
        )
    }
}
export default HeaderImage;