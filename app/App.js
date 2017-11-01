import React from 'react';
import { render } from 'react-dom';
import "./style/app.scss";

import AppTemplate from "./commons/ui/components/AppTemplate";
import UsingRefsSection from "./UsingRefsSection";
import UsingWrapperSection from "./UsingWrapperSection";

render(
  <AppTemplate>
    <UsingRefsSection/>
    <UsingWrapperSection/>
  </AppTemplate>,
  document.getElementById("app")
);