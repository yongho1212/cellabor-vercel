// @flow
import React, {useState, useEffect} from 'react';
import Layout from '../@layouts/Layout';
import Login from '../@organism/Login';

type Props = {

};
const LoginPage = (props: Props) => {
    return (
        <Layout>
            <Login />
        </Layout>
    );
};

export default LoginPage;
