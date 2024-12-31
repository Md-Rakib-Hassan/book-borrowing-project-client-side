import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../pages/AdminLayout";
import UploadBooks from "../pages/UploadBooks";
import Dashboard from "../pages/Dashboard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <AdminLayout></AdminLayout>,
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