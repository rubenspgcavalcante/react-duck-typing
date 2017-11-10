import React from 'react';
import { string } from "prop-types";

const ExtLink = ({ url, children }) => (
  <a href={url} target="_blank">{children}<i className="fa fa-external-link icon"/></a>
);

ExtLink.propTypes = {
  url: string.isRequired
};
export default ExtLink;