import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import Logo from "../assets/images/logo.png";

const InsideAppHeader = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const [show, setShow] = useState(false);
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between">
          <a
            href="#"
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          >
            <img src={Logo} height={40} />
          </a>
          <div className="d-flex">
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-none d-lg-block"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setShow(!show)}
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width={32}
                  height={32}
                  className="rounded-circle"
                />
              </a>
              <ul
                className={`dropdown-menu text-small ${show && "show"}`}
                style={{
                  right: 0,
                  top: "40px",
                }}
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a onClick={handleLogout} className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default InsideAppHeader;
