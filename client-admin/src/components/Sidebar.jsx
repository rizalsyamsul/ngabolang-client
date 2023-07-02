import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/ngabolang-long.png";
export default function Sidebar() {
  const navigate = useNavigate();
  async function handlingLogout(e) {
    e.preventDefault();
    localStorage.clear();
    await Swal.fire({
      text: "Logout Success",
      icon: "success",
      confirmButtonText: "Okay",
    });
    navigate("/login");
  }

  return (
    <section className=" col-md-3 col-lg-2 shadow bg-sidebar text-white ">
      <div className="sidebar d-flex align-items-start flex-column">
        <div className="mb-2">
          <img src={logo} className="logo" />
          <h4 className="text-center text-black">Management System</h4>
        </div>

        <div>
          <div className="sidebar-item fw-bold">
            <i className="bi bi-umbrella p-3"></i>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Trips
            </NavLink>
          </div>
          <div className="sidebar-item fw-bold">
            <i className="bi bi-umbrella-fill p-3"></i>
            <NavLink
              to="/tripClose"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Closed Trips
            </NavLink>
          </div>
          <div className="sidebar-item fw-bold">
            <i className="bi bi-list-task p-3"></i>
            <NavLink
              to="/categories"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Categories
            </NavLink>
          </div>
          <div className="sidebar-item fw-bold">
            <i className="bi bi-person-add p-3"></i>
            <NavLink
              to="/newAdmin"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Register Admin
            </NavLink>
          </div>
          <div className="sidebar-item fw-bold">
            <i className="bi bi-chat-dots p-3"></i>
            <NavLink
              to="/chats"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Chats
            </NavLink>
          </div>
        </div>

        <div className="sidebar-item mt-auto p-2 fw-bold">
          <div>
            <i className="bi bi-box-arrow-left p-3"></i>
            <a onClick={handlingLogout}>Logout</a>
          </div>
          <div className="profile-section mx-auto mt-3">
            <div className="profile-section d-flex align-items-center">
              <img
                src="https://avatars.githubusercontent.com/u/50189632?v=4"
                alt="Profile"
                className="profile-picture mr-3"
              />
              <div className="m-2">
                <h5 className="username text-black">Syamsul</h5>
                <p className="role text-black">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
