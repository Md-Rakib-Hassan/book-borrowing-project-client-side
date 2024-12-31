import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import UploadBooks from "./pages/UploadBooks";

const App = () => {
    return (
        <div>
            <Nav></Nav>
            <Sidebar></Sidebar>
            {/* <UploadBooks></UploadBooks> */}
        </div>
    );
};

export default App;