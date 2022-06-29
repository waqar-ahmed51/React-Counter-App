const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar bg-info">
        <h1>Total Counters : {props.totalCounters}</h1>
      </nav>
    </div>
  );
};

export default Navbar;
