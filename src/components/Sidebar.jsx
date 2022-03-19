const Sidebar = () => {
  return <nav className="side-bar">
    <div className="side-bar-feeds">
      <div className="side-bar-feeds-name">
        New Feeds
      </div>
      <div className="side-bar-feeds-items">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
      </div>
    </div>
    <div className="side-bar-account">
      <div className="side-bar-account-name">
        Account
      </div>
      <div className="side-bar-account-items">
        <div>
          <a>Settings</a>
        </div>
      </div>
    </div>
  </nav>
}

export default Sidebar