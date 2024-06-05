import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
    isMadeProfile: boolean;
}

const NewProfileRoute:React.FC<Props> = ({isMadeProfile} ) => {
    if (!isMadeProfile) {
        return <Navigate to="/new-profile" replace />;
    }
    return <Outlet />;
};

export default NewProfileRoute;
