import React, { PureComponent } from "react";
import { array } from "prop-types";

export default class SlideShow extends PureComponent {

  static propTypes = {
    slides: array.isRequired
  };

  state = { current: 0, playing: false };
  displayTime = 2000;
  intervalId = null;

  play() {
    let { state: { current }, displayTime } = this;
    this.intervalId = setInterval(() => this.setState({ current: current++, playing: true }), displayTime);
  }

  pause() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.setState({ playing: false });
    }
  }

  load() {
    this.pause();
    this.setState({ current: 0 });
  }

  componentWillReceiveProps({ play, pause, stop }) {
    play && this.play();
    pause && this.pause();
    stop && this.load();
  }

  render() {
    const { current, playing } = this.state;
    const { slides } = this.props;
    const len = slides.length;

    return (
      <div className="slide-show">
        <div className="slide-show-container">
          <img src={slides[current % len]}/>
          <div className="loading-bar">
            <div style={{ animationDuration: `${this.displayTime / 1000}s` }}
                 className={`filling-bar ${playing ? 'playing' : ''}`}/>
          </div>
        </div>
      </div>

    )
  }
}