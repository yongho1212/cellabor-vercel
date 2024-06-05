// @flow
import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword, sendEmailVerification, getAuth} from 'firebase/auth';
import {noTokenInstance} from '../../apis/axiosInstance';
import {useRecoilState} from 'recoil';
import {loginState, profileState} from '../../states/user/atoms/loginState';
import {SnsButtons} from '../@molecule';
import {checkProfile} from '../../utils/checkProfile';
import {getUserInfo} from '../../apis/user/getProfile';


type Props = {

};
const SignInPage = (props: Props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [_, setLoggedIn] = useRecoilState(loginState);
    const [profile, setProfile] = useRecoilState(profileState);
    const auth = getAuth();

    // console.log(auth.currentUser?.providerData[0].providerId);
    // console.log(profile);

    // !!TODO 로그인 성공 이후 로직 추상화 할 필요있음
    const handleSignIn = async (e:any) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const tkn = await userCredential.user.getIdToken();
            const profile  = await getUserInfo();
            const isFilled = checkProfile(profile.data);
            console.log(isFilled);
            setProfile(isFilled);
            localStorage.setItem('accessToken', JSON.stringify(tkn));
            localStorage.setItem('uid', JSON.stringify(userCredential.user.uid));
            setLoggedIn(true);
            navigate('/workspace');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
            <div className="flex flex-col min-h-[90dvh]">
                <section className="flex-1 flex items-center justify-center px-4 md:px-6">
                    <div className="max-w-md w-full space-y-6">
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-bold">Sign In</h1>
                            <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account.</p>
                        </div>
                        <form className="space-y-4">
                            <div className="grid gap-2">
                                <label htmlFor="email">Email</label>
                                <input id="email" placeholder="m@example.com" type="email" value={email}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="password">Password</label>
                                <input id="password" type="password" value={password}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                            </div>
                            <button className="w-full" type="submit" onClick={handleSignIn}>
                                Sign In
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
    );
};

export default SignInPage;
