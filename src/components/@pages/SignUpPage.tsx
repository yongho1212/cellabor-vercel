// @flow
import React, {useState, useEffect} from 'react';
import SignUp from '../@organism/SignUp';
import Layout from '../@layouts/Layout';
import {Link} from 'react-router-dom';
import {getAuth,createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import {noTokenInstance} from '../../apis/axiosInstance';
import {SnsButtons} from '../@molecule';

type Props = {

};
const SignUpPage = (props: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const handleSignUp = async (e:any) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const tkn = await userCredential.user.getIdToken();
            localStorage.setItem('accessToken', JSON.stringify(tkn));
            localStorage.setItem('uid', JSON.stringify(userCredential.user.uid));
            let data = {} as any;
            data = {...userCredential.user};
            data.providerId = userCredential.user.providerData[0].providerId;
            console.log(userCredential.user.providerData[0].providerId);
            const response = await noTokenInstance.post('/user/signIn', data);
            const user = auth.currentUser;
            console.log(user);
            const sendMail = await sendEmailVerification(user!);
            console.log(sendMail);
        } catch (error) {
            console.error('Error signing up:', error);
            // 에러 처리
        }
    };



    return (
        <Layout>
            {/*<SignUp />*/}
            <div className="flex flex-col min-h-[90dvh]">
                <section className="flex-1 flex items-center justify-center px-4 md:px-6">
                    <div className="max-w-md w-full space-y-6">
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                            <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account.</p>
                        </div>
                        <form className="space-y-4">
                            <div className="grid gap-2">
                                <label htmlFor="email">Email</label>
                                <input id="email" placeholder="m@example.com" type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="password">Password</label>
                                <input id="password" type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                            </div>
                            <button className="w-full" type="submit" onClick={handleSignUp}>
                                Sign Up
                            </button>
                        </form>
                        <div className="text-center text-sm">
                            Don't have an account?
                            <Link className="underline" to="#">
                                Register
                            </Link>
                            <SnsButtons />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default SignUpPage;
