import React from 'react';
import Typed from 'typed.js';

/**
 * https://github.com/mattboldt/typed.js/
 **/

class TypedJS extends React.Component {
    componentDidMount() {
      const { strings } = this.props;
      const options = {
        strings: strings,
        typeSpeed: 100,
        backSpeed: 100,
        shuffle: true,
        backDelay: 1000,
        loop: true
      };
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
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