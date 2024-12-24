import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import "./input.css";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/home';
import Trends from './routes/trends';
import Shop from './routes/shop';
import ErrorPage from './routes/error-page';
import Register from './routes/user/register';
import Login from './routes/user/login';
import Profile from './routes/user/profile/profile';
import ProfileEdit from './routes/user/profile/profile-edit'
import ProfileSettings from './routes/user/profile/profile-settings'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/trends/",
        element: <Trends />,
        errorElement: <ErrorPage />,
    },
    /* -- USER -- */
    {
        path: "/login/",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/register/",
        element: <Register />,
        errorElement: <ErrorPage />,
    },
    /* -- USER PROFILE -- */
    {
        path: "/profile/",
        element: <Profile />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "edit/",
                element: <ProfileEdit />,  // Route for editing profile
                errorElement: <ErrorPage />,
            },
            {
                path: "settings/",
                element: <ProfileSettings />,  // Route for settings
                errorElement: <ErrorPage />,
            },
        ],
    },
    /* -- USER SHOP -- */
    {
        path: "/shop/:name",
        element: <Shop />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/shop/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
