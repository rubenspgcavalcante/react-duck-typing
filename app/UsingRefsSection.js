import React from "react";
import myLove from "./assets/my-love-piano-loop.mp3";
import bigBuckBunny from "./assets/big-buck-bunny.mp4";

import quack1 from "./assets/quack-1.jpg";
import quack2 from "./assets/quack-2.jpg";
import quack3 from "./assets/quack-3.jpg";

import Message from './commons/ui/components/Message';
import RefPlayerControl from './modules/using-refs/components/RefPlayerControl';

import SlideShow from "./SlideShow";
import { REACT_DOCS_REFS_URL, REF_PLAYER_CONTROL_URL } from "./commons/constants/urls";
import ExtLink from "./commons/ui/components/ExtLink";

const slides = [quack1, quack2, quack3];
export default () =>
  <section className="section">
    <h1 className="title">Player Control Component </h1>
    <Message title="Using refs">
      <p>This part shows the duck typing example using the "common way" of the pattern,
        with <b>inversion of control in runtime</b> and doing the <ExtLink
          url={REF_PLAYER_CONTROL_URL}>PlayerControl</ExtLink> component call the elements
        methods.</p>
      <p>But React don't work well in this way, as we need to use <ExtLink url={REACT_DOCS_REFS_URL}>refs</ExtLink> to
        access the component "methods". But not all elements are going to be
        audio or video, leading use to a <b>anti-pattern</b> when using React</p>
    </Message>

    <div className="container">
      <div className="columns">
        <div className="column">
          <RefPlayerControl title="Audio track" icon="music" className="player-audio">
            <audio src={myLove}/>
          </RefPlayerControl>
        </div>
        <div className="column">
          <RefPlayerControl title="Video track" icon="video-camera" className="player-video">
            <video src={bigBuckBunny}/>
          </RefPlayerControl>
        </div>
        <div className="column">
          <RefPlayerControl title="Slides" icon="caret-square-o-right" className="player-slides">
            <SlideShow slides={slides}/>
          </RefPlayerControl>
        </div>
      </div>
    </div>
  </section>