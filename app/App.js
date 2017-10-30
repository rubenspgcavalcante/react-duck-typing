import React from 'react';
import { render } from 'react-dom';
import "./style/app.scss";
import myLove from "./assets/my-love-piano-loop.mp3";
import bigBuckBunny from "./assets/big-buck-bunny.mp4";

import AppTemplate from './commons/ui/components/AppTemplate';
import PlayerControl from './PlayerControl';
import SlideShow from "./SlideShow";

import quack1 from "./assets/quack-1.jpg";
import quack2 from "./assets/quack-2.jpg";
import quack3 from "./assets/quack-3.jpg";

render(
  <AppTemplate>
    <div className="container">
      <div className="columns">
        <div className="column">
          <PlayerControl title="Audio track" icon="music" className="player-audio">
            <audio src={myLove}/>
          </PlayerControl>
        </div>
        <div className="column">
          <PlayerControl title="Video track" icon="video-camera" className="player-video">
            <video src={bigBuckBunny}/>
          </PlayerControl>
        </div>
        <div className="column">
          <PlayerControl title="Slides" icon="caret-square-o-right" className="player-slides">
            <SlideShow slides={[quack1, quack2, quack3]}/>
          </PlayerControl>
        </div>
      </div>
    </div>
  </AppTemplate>,
  document.getElementById("app")
);