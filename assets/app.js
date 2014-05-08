/** @jsx React.DOM */
var Main = React.createClass({
  render: function() {
    return (
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
    );
  }
});
var EmailItem = React.createClass({

  render: function() {
    var classes = 'email-item pure-g';
    if(this.props.selected) {
      classes += ' email-item-selected';
    }
    if(this.props.unread) {
      classes += ' email-item-unread';
    }
    return (
      <div className={classes}>
          <div className="pure-u">
              <img className="email-avatar" alt={this.props.name + '\' avatar'} height="64" width="64" src={this.props.avatar} />
          </div>

          <div className="pure-u-3-4">
              <h5 className="email-name">{this.props.name}</h5>
              <h4 className="email-subject">{this.props.subject}</h4>
              <p className="email-desc">
                  {this.props.children}
              </p>
          </div>
      </div>
    );

  }
});
var List = React.createClass({
  render: function() {
    emailItems = this.props.mails.map(function(mail, i) {
      return (
        <EmailItem
          name={mail.name}
          subject={mail.subject}
          selected={this.props.selected === i}
          unread={mail.unread}
          avatar={mail.avatar}
          >
          {mail.desc}
        </EmailItem>
      );
    }.bind(this));

    return (
      <div id="list" className="pure-u-1">
        {emailItems}
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
          <List
            mails={this.props.mails}
            selected={0} />
          <Main mail={this.props.mails[0]}/>
      </div>
    );
  }
});

var SAMPLE_DATA = [
  {"unread": false, "desc": "Hey, I just wanted to check in with you from Toronto. I got here earlier today.", "name": "Tilo Mitra", "avatar": "img/common/tilo-avatar.png", "subject": "Hello from Toronto"},
  {"unread": true, "desc": "Hey, I had some feedback for pull request #51. We should center the menu so it looks better on mobile.", "name": "Eric Ferraiuolo", "avatar": "img/common/ericf-avatar.png", "subject": "Re: Pull Requests"},
  {"unread": true, "desc": "Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla.", "name": "YUI Library", "avatar": "img/common/yui-avatar.png", "subject": "You have 5 bugs assigned to you"},
  {"unread": false, "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa.", "name": "Reid Burke", "avatar": "img/common/reid-avatar.png", "subject": "Re: Design Language"},
  {"unread": false, "desc": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.", "name": "Andrew Wooldridge", "avatar": "img/common/andrew-avatar.png", "subject": "YUI Blog Updates?"},
  {"unread": false, "desc": "Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris.", "name": "Yahoo! Finance", "avatar": "img/common/yfinance-avatar.png", "subject": "How to protect your finances from winter storms"}
];

React.renderComponent(<App mails={SAMPLE_DATA} />, document.body);

