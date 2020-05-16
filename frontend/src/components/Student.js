import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';
import Account from './Students/Account';
import Courses from './Students/Courses';
import Dashboard from './Students/Dashboard';
import Sidebar from 'react-sidebar';

const Student = () => {

  const [activeKey, setActiveKey] = useState("account");

  const mql = window.matchMedia(`(min-width: 800px)`);

  const SidebarStyle = {
    root: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden"
    },
    sidebar: {
      zIndex: 2,
      position: "absolute",
      top: 0,
      bottom: 0,
      transition: "transform .3s ease-out",
      WebkitTransition: "-webkit-transform .3s ease-out",
      willChange: "transform",
      overflowY: "auto",
      backgroundColor: "black"
    },
    content: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: "auto",
      WebkitOverflowScrolling: "touch",
      transition: "left .3s ease-out, right .3s ease-out"
    },
    overlay: {
      zIndex: 1,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      visibility: "hidden",
      transition: "opacity .3s ease-out, visibility .3s ease-out",
      backgroundColor: "rgba(f,f,f,.3)"
    },
    dragHandle: {
      zIndex: 1,
      position: "fixed",
      top: 0,
      bottom: 0
    }
  };

  useEffect(() => {  }, [activeKey]);

  let { path, url } = useRouteMatch();

  return (
    <Router>
      <Sidebar
        sidebar={<>
          <Nav.Link as={Link} to={`${url}/account`} onClick={() => setActiveKey("account")}>Acccount</Nav.Link>
          <Nav.Link as={Link} to={`${url}/courses`} onClick={() => setActiveKey("courses")}>Courses</Nav.Link>
          <Nav.Link as={Link} to={`${url}/dashboard`} onClick={() => setActiveKey("dashboard")}>Dashboard</Nav.Link>
          <Nav.Link as={Link} disabled>Calender</Nav.Link>
          <Nav.Link as={Link} disabled>Inbox</Nav.Link>
          <Nav.Link as={Link} disabled>Help</Nav.Link></>}
        docked={mql.matches}
        open={false}
        styles={SidebarStyle}
        touch={true}>
      <Switch>
        <Route exact path={`${path}/account`} component={Account} />
        <Route exact path={`${path}/courses`} component={Courses} />
        <Route exact path={`${path}/dashboard`} component={Dashboard} />
      </Switch>
      </Sidebar>
    </Router>);
}

export default Student;