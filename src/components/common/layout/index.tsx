import { Outlet } from "react-router";
import Footer from "../Footer";
import Header from "../Header";
import Content from "../content";

const Layout = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  );
};

export default Layout;
