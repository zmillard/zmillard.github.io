import React, { Component } from 'react';
import { Jumbotron, Button, Container, Media } from 'reactstrap';
import Deck from './Deck';
import Resume from './Resume';
import TypedJS from './TypedJS';
import ReactDOM from 'react-dom';

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
        <div className='mainImg1'>
          <img src='https://lh3.googleusercontent.com/oKPOrTkOcMRajkbnVs7B-Kajc-R_LhETNZw4p3kSsM7ybE_F4xhSeu1TaeMrAL88fp-9ZLb-N3JJ3jMMp1YpIl6n5diHveF_Xa6BCRRn97hW7D2HUxCEaHHSpEyyGjQvU7ybqkd63A=w2400'/>
          <div className='centered'>
            <h1 className="display-3">Hello, World!</h1>
          </div>
        </div>
        <Jumbotron className='firstJumbo'>
            <h1 className="display-3">My name is Zoë Millard.</h1>
            <hr className="my-2" />
            <TypedJS
              strings={[
                'I am a skiier.',
                'I am a student.',
                'I am a developer.',
                'I am a traveler.',
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
                <p>I'm originally from Tappan, NY, a river town about 40 minutes up the Hudson from NYC.</p>
                <p>For the past four years, I've been attending Stevens Institute of Technology, in Hoboken, NJ. </p>
                <p>I am now in my final year of classes at Stevens Institute of Technology I'll be graduating in the Spring with a BS in Computer Science, and a Graduate Certificate in Software Engineering.</p>
                <p>My interests include skiing and traveling. Scroll down to see some of what I've done!</p>
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
              <p className="lead">At my school, I am a member of a cooperative education program. This means that roughly every other semester for five years, I alternate between semesters of work and semesters of study.</p>
              <p className='lead'>Due to this program, I have had 5 seperate internships at 4 companies in a variety of industries. I have really been able to supplement the knowledge I have gained from the classroom and been able to be a contributing member of a team.</p>
              <p className="lead">In addition to the experience listed below, I have also been a TA for a graduate class in the Computer Science Department, and am a student tour guide.</p>
            </div>
          </Container>
        </Jumbotron>
        < Resume />
        <Jumbotron fluid>
          <Container fluid>
            <div>
              <h1 className="display-3">Contact Me:</h1>
              <p className="lead">If you would like to get in touch, my email is zmillard@stevens.edu.</p>
              <p className='lead'>Click this <a target="_blank" href="https://drive.google.com/file/d/0BwB_0mp2DHyFXzlaWEplQ1VQdkIzQnh4UVc0a1J3cmVSWURZ/view?usp=sharing" download>link</a> to view my detailed resume.</p>
            </div>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}
export default HomePage;
