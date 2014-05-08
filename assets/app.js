/** @jsx React.DOM */
var List = React.createClass({
  render: function() {
    return (
      <div id="list" className="pure-u-1">
          <div className="email-item email-item-selected pure-g">
              <div className="pure-u">
                  <img className="email-avatar" alt="Tilo Mitra&#x27;s avatar" height="64" width="64" src="img/common/tilo-avatar.png" />
              </div>

              <div className="pure-u-3-4">
                  <h5 className="email-name">Tilo Mitra</h5>
                  <h4 className="email-subject">Hello from Toronto</h4>
                  <p className="email-desc">
                      Hey, I just wanted to check in with you from Toronto. I got here earlier today.
                  </p>
              </div>
          </div>

          <div className="email-item email-item-unread pure-g">
              <div className="pure-u">
                  <img className="email-avatar" alt="Eric Ferraiuolo&#x27;s avatar" height="64" width="64" src="img/common/ericf-avatar.png" />
              </div>

              <div className="pure-u-3-4">
                  <h5 className="email-name">Eric Ferraiuolo</h5>
                  <h4 className="email-subject">Re: Pull Requests</h4>
                  <p className="email-desc">
                      Hey, I had some feedback for pull request #51. We should center the menu so it looks better on mobile.
                  </p>
              </div>
          </div>

          <div className="email-item email-item-unread pure-g">
              <div className="pure-u">
                  <img className="email-avatar" alt="YUI&#x27;s avatar" height="64" width="64" src="img/common/yui-avatar.png" />
              </div>

              <div className="pure-u-3-4">
                  <h5 className="email-name">YUI Library</h5>
                  <h4 className="email-subject">You have 5 bugs assigned to you</h4>
                  <p className="email-desc">
                      Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla.
                  </p>
              </div>
          </div>

          <div className="email-item pure-g">
              <div className="pure-u">
                  <img className="email-avatar" alt="Reid Burke&#x27;s avatar" height="64" width="64" src="img/common/reid-avatar.png" />
              </div>

              <div className="pure-u-3-4">
                  <h5 className="email-name">Reid Burke</h5>
                  <h4 className="email-subject">Re: Design Language</h4>
                  <p className="email-desc">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                  </p>
              </div>
          </div>

          <div className="email-item pure-g">
              <div className="pure-u">
                  <img className="email-avatar" alt="Andrew Wooldridge&#x27;s avatar" height="64" width="64" src="img/common/andrew-avatar.png" />
              </div>

              <div className="pure-u-3-4">
                  <h5 className="email-name">Andrew Wooldridge</h5>
                  <h4 className="email-subject">YUI Blog Updates?</h4>
                  <p className="email-desc">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </p>
              </div>
          </div>

          <div className="email-item pure-g">
              <div className="pure-u">
                  <img className="email-avatar" alt="Yahoo! Finance&#x27;s Avatar" height="64" width="64" src="img/common/yfinance-avatar.png" />
              </div>

              <div className="pure-u-3-4">
                  <h5 className="email-name">Yahoo! Finance</h5>
                  <h4 className="email-subject">How to protect your finances from winter storms</h4>
                  <p className="email-desc">
                      Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris.
                  </p>
              </div>
          </div>

          <div className="email-item pure-g">
              <div className="pure-u">
                  <img className="email-avatar" alt="Yahoo! News&#x27; avatar" height="64" width="64" src="img/common/ynews-avatar.png" />

              </div>

              <div className="pure-u-3-4">
                  <h5 className="email-name">Yahoo! News</h5>
                  <h4 className="email-subject">Summary for April 3rd, 2012</h4>
                  <p className="email-desc">
                      We found 10 news articles that you may like.
                  </p>
              </div>
          </div>
      </div>
    );
  }
});

var Nav = React.createClass({
  render: function() {
    return (
      <div id="nav" className="pure-u">
          <a href="#" className="nav-menu-button">Menu</a>

          <div className="nav-inner">
              <button className="primary-button pure-button">Compose</button>

              <div className="pure-menu pure-menu-open">
                  <ul>
                      <li><a href="#">Inbox <span className="email-count">(2)</span></a></li>
                      <li><a href="#">Important</a></li>
                      <li><a href="#">Sent</a></li>
                      <li><a href="#">Drafts</a></li>
                      <li><a href="#">Trash</a></li>
                      <li className="pure-menu-heading">Labels</li>
                      <li><a href="#"><span className="email-label-personal"></span>Personal</a></li>
                      <li><a href="#"><span className="email-label-work"></span>Work</a></li>
                      <li><a href="#"><span className="email-label-travel"></span>Travel</a></li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
<div id="layout" className="content pure-g">
    <Nav />
    <List />

    <div id="main" className="pure-u-1">
        <div className="email-content">
            <div className="email-content-header pure-g">
                <div className="pure-u-1-2">
                    <h1 className="email-content-title">Hello from Toronto</h1>
                    <p className="email-content-subtitle">
                        From <a>Tilo Mitra</a> at <span>3:56pm, April 3, 2012</span>
                    </p>
                </div>

                <div className="email-content-controls pure-u-1-2">
                    <button className="secondary-button pure-button">Reply</button>
                    <button className="secondary-button pure-button">Forward</button>
                    <button className="secondary-button pure-button">Move to</button>
                </div>
            </div>

            <div className="email-content-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis tincidunt. Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris. Curabitur ornare arcu quis mi blandit laoreet. Vivamus imperdiet fermentum mauris, ac posuere urna tempor at. Duis pellentesque justo ac sapien aliquet egestas. Morbi enim mi, porta eget ullamcorper at, pharetra id lorem.
                </p>
                <p>
                    Donec sagittis dolor ut quam pharetra pretium varius in nibh. Suspendisse potenti. Donec imperdiet, velit vel adipiscing bibendum, leo eros tristique augue, eu rutrum lacus sapien vel quam. Nam orci arcu, luctus quis vestibulum ut, ullamcorper ut enim. Morbi semper erat quis orci aliquet condimentum. Nam interdum mauris sed massa dignissim rhoncus.
                </p>
                <p>
                    Regards,<br />
                    Tilo
                </p>
            </div>
        </div>
    </div>
</div>
    );
  }
});

React.renderComponent(<App />, document.body);

