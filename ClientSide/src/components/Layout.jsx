import SideBar from "./SdieBar/SideBar";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children }) => {
    return (
        <div className="app-container">
            {/* <Sidebar />
            <Navbar /> */}

            {/* Side bar */}
            <SideBar onSideClick={sideClick} classAdded={sideActive} />

            {/* nav bar */}
            <NavBar onSideClick={sideClick} />

            <main>{children}</main>
        </div>
    );
};

export default Layout;
