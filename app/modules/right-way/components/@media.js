import React, { cloneElement, PureComponent } from "react";

export default function media(mediaElement) {

  function mediaCaller(el, { play, pause, stop }) {
    if (el) {
      if (play) {
        el.play();
      }
      else if (pause) {
        el.pause();
      }
      else if (stop) {
        el.load();
      }
    }
  }

  return class MediaHoc extends PureComponent {
    render() {
      return cloneElement(mediaElement, { ref: (el) => mediaCaller(el, this.props) });
    }
  }

}