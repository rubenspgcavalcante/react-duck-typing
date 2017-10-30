import React, { PureComponent } from 'react';

export default class AppTemplate extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="app-template">
        <section className="hero is-light is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">React and Duck Typing example</h1>
              <h2 className="subtitle">A generic player control component</h2>
            </div>
          </div>
        </section>
        <main className="app-content">
          {children}
        </main>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Example</strong> by <a href="http://github.com/rubenspgcavalcante">Rubens Pinheiro</a>.
                The source code is licensed under <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
};