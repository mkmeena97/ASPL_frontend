const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img
            src="/to-do-list.gif"
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="navbar-brand mb-0 h1 text-white">TezTodo</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
