import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../pages/AdminLayout";
import UploadBooks from "../pages/UploadBooks";
import Dashboard from "../pages/Dashboard";
import NotFoundPage from "../pages/NotFoundPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <AdminLayout></AdminLayout>,
        errorElement:<NotFoundPage></NotFoundPage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/upload-books',
                element: <UploadBooks></UploadBooks>
            }
        ]
        
    },
])

export default router;