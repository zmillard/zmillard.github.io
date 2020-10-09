import React from 'react';
import ReactDOM from 'react-dom';
import Typed from 'typed.js';

// https://github.com/mattboldt/typed.js/

class TypedJS extends React.Component {
    componentDidMount() {
      // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
        strings: strings,
        typeSpeed: 100,
        backSpeed: 100,
        shuffle: true,
        backDelay: 1000,
        loop: true
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
      return (
        <div className="wrap">
          <div className='type-wrap display-3'>
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
          </div>
        </div>
      );
    }
}
export default TypedJS;