import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import { useEffect } from 'react';

export default function NavBar() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  useEffect(() => {
    userInfo;
  }, [userInfo]);
  return (
    <header className="row">
      <div>
        <Link className="brand" to="/">
          amazona
        </Link>
      </div>
      <div>
        <Link to="/cart">
          Cart
          {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
        </Link>
        {userInfo ? (
          <div className="dropdown">
            <Link to="#">
              {userInfo.name} <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/profile">User Profile</Link>
              </li>
              <li>
                <Link to="/orderhistory">Order History</Link>
              </li>
              <li>
                <Link to="/signin" onClick={signoutHandler}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
        {userInfo && userInfo.isAdmin && (
          <div className='dropdown'>
            <Link to='#admin'>
              Admin <i className='fa fa-caret-down'></i>
            </Link>
            <ul className='dropdown-content'>
              <li>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/productlist'>Products</Link>
                <Link to='/orderlist'>Orders</Link>
                <Link to='/userlist'>Users</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
