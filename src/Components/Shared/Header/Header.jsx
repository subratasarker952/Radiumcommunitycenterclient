import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOutUser } = useAuth();

  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="print:hidden">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="p-1">
            <h1 className="md:text-5xl text-xl text-pink-500">
              <Link to="/">RCC</Link>
            </h1>
          </div>
        </div>
        <div className="border w-full rounded-lg m-4 gap-2">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search Event in Radium Community Center"
              className="input input-bordered w-full"
            />
            <button className="text-2xl p-2">
              <FaSearch></FaSearch>
            </button>
          </div>
        </div>
        <div className="flex-1 gap-2 justify-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle text-3xl text-pink-500"
              >
                <FaUser />
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60"
              >
                <li>
                  <Link className="btn" to="/user/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="btn" to="/user/booking">
                    Booking
                  </Link>
                </li>
                <li>
                  <Link className="btn" to="/user/payment">
                    Payment
                  </Link>
                </li>
                <li>
                  <Link className="btn" to="/user/bookingHistory">
                   BookingHistory
                  </Link>
                </li>
                <li>
                  <Link className="btn" to="/user/payments">
                    Payments
                  </Link>
                </li>

                <li>
                  <button onClick={handleLogOutUser} className="btn">
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <NavLink className="px-3 btn" to="/login">
                Login
              </NavLink>
              <p>|</p>
              <NavLink className={"p-2 m-2 btn"} to="/register">
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
