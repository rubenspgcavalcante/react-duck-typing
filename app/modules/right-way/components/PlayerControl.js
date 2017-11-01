import React, { cloneElement, PureComponent } from "react";
import { object, string } from "prop-types";
import { PAUSED, PLAYING, STOPPED } from "../constants/playerStatus";

export default class PlayerControl extends PureComponent {
  static propTypes = {
    title: string,
    icon: string,
    className: string,
    playable: object
  };

  state = { status: STOPPED };

  render() {
    const { title, icon, className = '', children } = this.props;
    const { status } = this.state;

    /**
     * It injects the expected properties to the element, causing then to react
     * the property changes.
     */
    const playable = cloneElement(children, {
      play: status === PLAYING,
      pause: status === PAUSED,
      stop: status === STOPPED
    });

    const controls = [
      { type: STOPPED, icon: 'stop' },
      { type: PAUSED, icon: 'pause' },
      { type: PLAYING, icon: 'play' }
    ];

    return (
      <div className={`player-control ${className}`}>
        <div className="card">
          {title ? <div className="card-header">
            <div className="card-header-title">{title}</div>
            {icon ? <div className="card-header-icon"><i className={`fa fa-${icon}`}/></div> : null}
          </div> : null}
          <div className="card-content">
            {playable}
          </div>
          <footer className="card-footer">
            {controls.map(({ type, icon }) =>
              <a key={type} href="#" className={`card-footer-item button ${status === type ? 'is-info' : ''}`}
                 onClick={(ev) => {
                   ev.preventDefault();
                   this.setState({ status: type });
                 }}><i className={`fa fa-${icon}`}/></a>
            )}
          </footer>
        </div>
      </div>
    );
  }
}