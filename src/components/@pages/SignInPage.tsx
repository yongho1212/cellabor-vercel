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
            <div className="flex flex-col min-h-[94dvh]">
                <section className="flex-1 flex items-center justify-center px-4 md:px-6">
                    <div className="max-w-md w-full space-y-6 flex items-center justify-center flex-col">
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-bold">Sign In</h1>
                            <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account.</p>
                        </div>
                        <form className="space-y-4 w-11/12">
                            <div className="grid gap-2 ">
                                <label htmlFor="email">Email</label>
                                <input id="email" placeholder="Email@example.com" type="email" value={email}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                       className={'h-12 px-3'}
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="password">Password</label>
                                <input id="password" type="password" value={password}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                       className={'h-12 px-3'}
                                />
                            </div>
                            <button className="w-full border-2 h-12" type="submit" onClick={handleSignIn}>
                                로그인
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
