import React, { useState } from "react";
import  "../../styles/componentStyles/layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd"
import '../../styles/componentStyles/Admin/layoutAdmin.css'
import logoz from "../../Images/MedXpertsLogo.png";

function LayoutAdmin(props) {

  const [collapsed, setCollapsed] = useState(false);
  const userlogin = useSelector((state) => state.userlogin);
  const {userInfo}=userlogin

  console.log("xxx",userInfo)

 
  const navigate = useNavigate();
  const location = useLocation();
  


  const adminMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Users",
      path: "/admin/userslist",
      icon: "ri-user-line",
    },
    {
      name: "Doctors",
      path: "/admin/doctorslist",
      icon: "ri-user-star-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-user-line",
    },
  ];

  const menuToBeRendered = userInfo?.isAdmin
    && adminMenu
    
  const role = userInfo?.isAdmin
    && "Admin"
    




  return (


    <div className="main">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-header">
            <img src={logoz}></img> 
            <h1 className="role">{role}</h1>
          </div>

          <div className="menu">
            {menuToBeRendered?.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  className={`d-flex menu-item ${
                    isActive && "active-menu-item"
                  }`}
                >
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
            <div
              className={`d-flex menu-item `}
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              <i className="ri-logout-circle-line"></i>
              {!collapsed && <Link to="/login">Logout</Link>}
            </div>
          </div>
        </div>

        <div className="content">
          <div className="header">
            {collapsed ? (
              <i
                className="ri-menu-2-fill header-action-icon"
                onClick={() => setCollapsed(false)}
              ></i>
            ) : (
              <i
                className="ri-close-fill header-action-icon"
                onClick={() => setCollapsed(true)}
              ></i>
            )}

            <div className="d-flex align-items-center px-4">
              <Badge
                count={userInfo?.unseenNotifications?.length}
                onClick={() => navigate("/notifications")}
              >
                <i className="ri-notification-line header-action-icon px-3"></i>
              </Badge>

              <Link className="anchor mx-2 ms-5" to="/profile">
                {userInfo?.username}
              </Link>
            </div>
          </div>

          <div className="body">{props.children}</div>
        </div>u
      </div>
    </div>
  );
   
  
}

export default LayoutAdmin



;
