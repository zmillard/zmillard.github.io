import React, { Component } from 'react';
import { Jumbotron, Button, Container, Media } from 'reactstrap';
import Deck from './Deck';
import Resume from './Resume';
import HeaderImage from './HeaderImage';
import TypedJS from './TypedJS';
import ReactDOM from 'react-dom';
// import '../index.scss';

// ReactDOM.render(
// 	<Typed
//     strings={[
//     	'Some <i>strings</i> are slanted',
//       'Some <strong>strings</strong> are bold',
//       'HTML characters &times; &copy;'
//     ]}
//   />,
//   document.getElementById('react-root')
// );

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
            <h1 className="display-3" id='aboutMe'>About Me:</h1><Media>
              <Media left href="#">
                <Media object className='headshot' src='https://lh3.googleusercontent.com/Ju6jfpl4u72Y_gtyGdmvX1he2BtTXonKF8yEfOq0g_Nrzt1Ot6RhSV5rbn4AByNU8ybMkrhUl-PBeeuQVlAmau33ERDvszxHVXNTIhHXJclr9UkO6NTs0GpYNSoUidX4nDgKaV5mMQ=w2400' alt="Zoe Headshot" />
              </Media>
              <Media body>
                <p>I'm originally from Tappan, NY, a river town about 40 minutes up the Hudson from NYC. I spent few years attending college in Hoboken, and now I am living in Brooklyn.</p>
                <p>I have a Bachelors of Science in Computer Science from Stevens Institute of Technology, in Hoboken, NJ. While there, I started a Women in Computer Science organization, and was very passionate about volunteering.</p>
                <p>Since graduating, I've been working as a Software Engineer, doing web programming. I've also been able to find ways to continute my passion for volunteering and promoting women in Computer Science.</p>
                <p>Some additional interests include skiing and traveling. Scroll down to see some of what I've done!</p>
              </Media>
            </Media>
          </Container>
        </Jumbotron>
        < Deck />
        <br />
        <Jumbotron fluid>
          <Container fluid>
            <div>
              <h1 className="display-3">Professional Experience:</h1>
              <p className="lead">I'm currently a Software Engineer with American Express, primarily doing web programming.</p>
              <p className="lead">In college, I was a member of a cooperative education program. This means that roughly every other semester for five years, I alternated between semesters of work and semesters of study.</p>
              <p className='lead'>Due to this program, I have had 5 seperate internships within 4 companies in a variety of industries. I was able to supplement the knowledge I gained from the classroom and find ways to be a contributing member of a team.</p>
              <p className="lead">In addition to the experience listed below, I was also been a TA for a graduate class in the Computer Science Department, and was a student tour guide.</p>
            </div>
          </Container>
        </Jumbotron>
        < Resume />
        <Jumbotron fluid>
          <Container fluid>
            <div>
              <h1 className="display-3">Contact Me:</h1>
              <p className="lead">Please connect via email, zoe.k.millard@gmail.com, or via linkedIn</p>
            </div>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}
export default HomePage;
