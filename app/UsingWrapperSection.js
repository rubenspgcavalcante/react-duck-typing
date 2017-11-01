import React from "react";
import myLove from "./assets/my-love-piano-loop.mp3";
import bigBuckBunny from "./assets/big-buck-bunny.mp4";
import quack1 from "./assets/quack-1.jpg";
import quack2 from "./assets/quack-2.jpg";
import quack3 from "./assets/quack-3.jpg";

import Message from './commons/ui/components/Message';
import PlayerControl from "./modules/using-wrapper/components/PlayerControl";
import media from "./modules/using-wrapper/components/media";
import SlideShow from "./SlideShow";

const slides = [quack1, quack2, quack3];
const playables = [
  {
    Component: media(<audio src={myLove}/>),
    title: "Audio track", icon: "music", type: "audio"
  },
  {
    Component: media(<video src={bigBuckBunny}/>),
    title: "Video track", icon: "video-camera ", type: "video"
  },
  {
    Component: (props) => <SlideShow {...props} slides={slides}/>,
    title: "Slides", icon: "caret-square-o-right", type: "slides"
  }
];

export default () =>
  <section className="section">
    <h1 className="title">The Proper React Way</h1>
    <Message title="Using Wrappers">
      <p>Instead of using ref's for everything we can just encapsulate the <b>audio</b> and <b>video</b> elements
        inside a wrapper which listens to <b>property</b> changes and then call these element methods</p>
      <p>For everyone else (React components), we're going to work passing always the same properties
        (<b>play</b>, <b>pause</b> and <b>stop</b>), expecting the same behaviour of everyone.</p>
    </Message>
    <div className="container">
      <div className="columns">
        {playables.map(({ Component, title, icon, type }, idx) =>
          <div className="column" key={idx}>
            <PlayerControl title={title} icon={icon} className={`player-${type}`}>
              <Component/>
            </PlayerControl>
          </div>
        )}
      </div>
    </div>
  </section>