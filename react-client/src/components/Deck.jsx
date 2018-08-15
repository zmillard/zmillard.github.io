import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://lh3.googleusercontent.com/6UkxweEL3NzxbuSLtOvRKNN-F-iLQh0b818_dAxhAVjIMnioTWbqw5k2_fx2ZH1rrLZtcVw-F8EzztQPnqj5qFIXcT_QuDM-sbZwSo_tF4S6y2XGNxs2Kn4Xwlg74Ws7FAagJmemrA=w2400',
    altText: 'Slide_1',
    caption: 'Profile of the capital building.',
    header: 'Havana, Cuba'
  },
  {
    src: 'https://lh3.googleusercontent.com/KkeCRyClj3UaEr6nvNoBIU0LKmiC8y24wX-7jnN-JXAf9DG5d5AElmBY0bnGvhgOxEmrJav4A-onkEjgfxXNU7Lvjx60pebTy9V6SOpDeFcAKd22xImXiIH8dzLwMOqH-JH0oIBm0Q=w2400',
    altText: 'Slide_2',
    caption: 'Street near the capital building in the rain.',
    header: 'Havana, Cuba'
  },
  {
    src: 'https://lh3.googleusercontent.com/XimpSQNeFy5d4OP_qEgYUMC5yj3THqQIhvmGALpRw0dspF_ATsmyjnicVUdYdTFnwI_H1Ug9gUgpZ4zthW-__NcjV4HC11TdrqM5bU-KZkkPyBnc5ZVztf0CjzJQy0ctt9I_QINYPA=w2400',
    altText: 'Slide_3',
    caption: 'Valley during the daytime.',
    header: 'Viñales, Cuba'
  },
  {
    src: 'https://lh3.googleusercontent.com/9d8_V6d1p48r23ou6r4QR15KzoEOWEykADoDN0CqoF60U6rFIoHCArXS2EXJvNJrngs1sc2DkjPy7Hk1JKlKGeFZppD2EDABKQ7M7GhwrwdR_VVUBKDg9sa9I7fHQ4G6RAtOhqU_aQ=w2400',
    altText: 'Slide_3',
    caption: 'Valley at sunset.',
    header: 'Viñales, Cuba'
  },
  {
    src: 'https://lh3.googleusercontent.com/x9FyrqN66KazF29SJYzf49NupouUFhRQdv6h0_4oebAg-QEuStcotJsXm_t0qux4h3Vxo1HDm-Qx4b4bCdmBzqaiXaSU3JFXKY0TgOqazDfCl5d4F1jV4MJg4DGgtnGsxbFuPQ3TWQ=w2400',
    altText: 'Slide_3',
    caption: 'Car in the village street.',
    header: 'Trinidad, Cuba'
  },
  {
    src: 'https://lh3.googleusercontent.com/Uo6JUXQjaFAd8aw_kucUowRmCrodpjRwP1boXU9u6djnuJ5HFeWP1BOlWi1KDeA3a7tbuHl-Znyt0AA8mC8Gf1gKwQZY_Or6HcJExAREDAUorZYdsl0OK6JAOXapGmyu5tFf6A8U0g=w2400',
    altText: 'Slide_3',
    caption: 'Street off the Royal Mile.',
    header: 'Edinburgh, Scotland'
  },
  {
    src: 'https://lh3.googleusercontent.com/ILL-zp1Nnz49bsSiFfdQB6r4VtnyxsT2SUGm1NcP-EjVHeOXODHrl5NEj567K1kNo214faIeQzpKigZWyRva0Dy6YpAitevCA1HK5OTd-JOlJw8cXxG7q9pkhr57XC8woS3VZQQk4Q=w2400',
    altText: 'Slide_3',
    caption: 'Heathers at sunrise.',
    header: 'Isle of Skye, Scotland'
  },
  {
    src: 'https://lh3.googleusercontent.com/lKTsQZdkJ0QwU6Vm8yAniEDv2n550qP1FwCKiChiNpx0ACQtF4MS3Irz6sRki7PHRIcnJSEJVRfJYSgl3-ISVoVDU3PT0judkC_rA-PU3w8FxfrM9Trrtxb9E9DkXN0PipIjG-gkUw=w2400',
    altText: 'Slide_3',
    caption: 'Hike to the top of Old Man of Stoor.',
    header: 'Isle of Skye, Scotland'
  }
];

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} class='slide'/>
          <CarouselCaption captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Deck;