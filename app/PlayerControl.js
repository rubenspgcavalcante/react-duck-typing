import React, { cloneElement, PureComponent } from 'react';
import { object, string } from 'prop-types';

export default class PlayerControl extends PureComponent {
  static propTypes = {
    title: string,
    icon: string,
    className: string,
    playable: object
  };

  render() {
    const { title, icon, className = '', children } = this.props;
    const playable = cloneElement(children, { ref: "playable" });

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
            <a href="#" className="card-footer-item button" onClick={() => this.refs.playable.load()}><i
              className="fa fa-stop"/></a>

            <a href="#" className="card-footer-item button" onClick={() => this.refs.playable.pause()}><i
              className="fa fa-pause"/></a>

            <a href="#" className="card-footer-item button" onClick={() => this.refs.playable.play()}><i
              className="fa fa-play"/></a>
          </footer>
        </div>
      </div>
    );
  }
};