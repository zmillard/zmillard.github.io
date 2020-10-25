import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Deck from './Deck';
import HeaderImage from './HeaderImage';
import TypedJS from './TypedJS';
import '../index.scss';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderImage />
        <Jumbotron className='firstJumbo'>
            <h1 className="display-3">My name is Zoë Millard.</h1>
            <hr className="my-2" />
            <TypedJS
              strings={[
                'I am a Software Engineer.',
                'I am a skiier.',
                'I am a developer.',
                'I am excited to learn new things.'
              ]}
            />
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3" id='aboutMe'>About Me:</h1>
            <div className='headshotContainer'>
              <img className='headshot' src='https://lh3.googleusercontent.com/Ju6jfpl4u72Y_gtyGdmvX1he2BtTXonKF8yEfOq0g_Nrzt1Ot6RhSV5rbn4AByNU8ybMkrhUl-PBeeuQVlAmau33ERDvszxHVXNTIhHXJclr9UkO6NTs0GpYNSoUidX4nDgKaV5mMQ=w2400' alt="Zoe Headshot" />
            </div>
            <div className='aboutMeBody'>
              <p>I have a BS in Computer Science from Stevens Institute of Technology. While there, I started a Women in Computer Science organization, and was very passionate about volunteering. <br /> <br />
                Since graduating, I've been working as a Software Engineer, doing web programming. I've also been able to find ways to continue my passion for volunteering and promoting women in Computer Science.
                Some additional interests include skiing and traveling.</p>
            </div>
          </Container>
        </Jumbotron>
        < Deck />
        <br />
        <Jumbotron fluid>
          <Container fluid>
            <div>
              <h1 className="display-3">Professional Experience:</h1>
              <div className="largeText">
                <p>I'm a Software Engineer at American Express working in web programming.</p>
              </div> 
            </div>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}
export default HomePage;
