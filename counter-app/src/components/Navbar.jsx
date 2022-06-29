const Navbar = ({ totalCounters }) => {
  //Object Dustructing is used
  return (
    <div>
      <nav className="navbar bg-info">
        <h1>Total Counters : {totalCounters}</h1>
      </nav>
    </div>
  );
};

export default Navbar;
