import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

class Resume extends React.Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" className='tile' src="https://www.underconsideration.com/brandnew/archives/american_express_logo.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Software Engineering Intern</CardTitle>
                            <CardSubtitle>June 2018 - August 2018</CardSubtitle>
                            <CardText>Worked with JavaScript, ReactJS, Sass, Webpack, Jest, Rewire, Mocha, and Chai </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" className='tile' src="https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Technology Intern</CardTitle>
                            <CardSubtitle>January 2018 - May 2018</CardSubtitle>
                            <CardText>Worked with JavaScript, HTML, and CSS</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" className='tile' src='https://web.stevens.edu/news/newspoints/brand-logos/Stevens-Apparel-Color-R.png' alt='Card image cap' />
                        <CardBody>
                            <CardTitle>Teaching Assistant for two Graduate level Web Programming classes</CardTitle>
                            <CardSubtitle>August 2017 - May 2019</CardSubtitle>
                            <CardText>Worked with JavaScript, React, Sass and Asynchronous Functions</CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" className='tile' src="https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Product and Technology Intern</CardTitle>
                            <CardSubtitle>June 2017 - August 2017</CardSubtitle>
                            <CardText>Developed Skeleton Search API</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" className='tile' src="https://www.schindler.com/com/internet/en/about-schindler/schindler-history/the-schindler-logo-over-the-years/_jcr_content/contentPar/textimage_3/image.1522080076456.transform/image_480/1522080076456.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Computer Science Intern</CardTitle>
                            <CardSubtitle>August 2016 - December 2016</CardSubtitle>
                            <CardText>Worked with Python, Unity, and single board Computers</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" className='tile' src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Abglobal-logo.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Web Development Consultant</CardTitle>
                            <CardSubtitle>January 2016 - May 2016</CardSubtitle>
                            <CardText>Worked with HTML, CSS, and XML</CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
            </div>
        );
    }
};

export default Resume;