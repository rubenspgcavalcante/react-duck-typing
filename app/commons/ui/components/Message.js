import React from "react";

export default ({ title, children }) =>
  <article className="message">
    {title ? <div className="message-header">
      {title}
    </div> : null}
    <div className="message-body">
      {children}
    </div>
  </article>