// @flow
import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {
    signInWithEmailAndPassword,
    sendEmailVerification,
    getAuth,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import {noTokenInstance} from '../../apis/axiosInstance';
import {useRecoilState} from 'recoil';
import {loginState, profileState} from '../../states/user/atoms/loginState';
import {SnsButtons} from '../@molecule';
import {checkProfile} from '../../utils/checkProfile';
import {getUserInfo} from '../../apis/user/getProfile';
import {checkUser} from '../../apis/auth';


type Props = {};
const SignInPage = (props: Props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [credentialStatus, setCredentialStatus] = useState(0);
    const [_, setLoggedIn] = useRecoilState(loginState);
    const [profile, setProfile] = useRecoilState(profileState);
    const auth = getAuth();


    // !!TODO 로그인 성공 이후 로직 추상화 할 필요있음

    const checkCredential = async (e, email: string) => {
        e.preventDefault();
        try {
            const status = await checkUser(email);
            console.log(status.msg);
            // 신규 프로필
            if (status.msg === false) setCredentialStatus(1);
            // 기존 프로필 로그인 진행
            if (status.msg === true) setCredentialStatus(2);
            console.log(credentialStatus);
        } catch (err) {
            console.log(err);
        }
    };

    const moveBack = () => {
        setCredentialStatus(0);
    };

    const handleSignUp = async (e:any) => {
        e.preventDefault();
        const newCredential = await createUserWithEmailAndPassword(auth, email, password);

        let userdata = {} as any;
        userdata = {...newCredential.user};
        console.log(userdata);

        const response = await noTokenInstance.post('/user/signIn', userdata);
         if (response.status === 200 && response?.data.msg === 'new') {
            // setLoggedIn(true);
            // setProfile(false);
            // navigate('/new-profile');
        }
    };

    const handleSignIn = async (e: any) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential, 'userCredential');
            const tkn = await userCredential.user.getIdToken();
            localStorage.setItem('accessToken', JSON.stringify(tkn));
            localStorage.setItem('uid', JSON.stringify(userCredential.user.uid));

            const profile = await getUserInfo();
            const isFilled = await checkProfile(profile.data);
            console.log(isFilled);
            if (isFilled === false) {
                console.log(isFilled);
                setLoggedIn(true);
                setProfile(false);
                navigate('/new-profile');
            } else {
                setProfile(isFilled);
                setLoggedIn(true);
                navigate('/profile');
            }


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
                        <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your
                            account.</p>
                    </div>
                    <form className="space-y-4 w-11/12">
                        {credentialStatus === 0 &&
                            <div className="grid gap-2 ">
                                <label htmlFor="email">Email</label>
                                <input id="email" placeholder="Email@example.com" type="email" value={email}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                       className={'h-12 px-3'}
                                />
                            </div>
                        }
                        {credentialStatus === 1 &&
                            <div className="grid gap-2">
                                <label htmlFor="password">Password</label>
                                <input id="password" type="password" value={password}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                       className={'h-12 px-3'}
                                />
                                <button onClick={moveBack}>back</button>
                            </div>
                        }
                        {credentialStatus === 2 &&
                            <div className="grid gap-2">
                                <label htmlFor="password">Password</label>
                                <input id="password" type="password" value={password}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                       className={'h-12 px-3'}
                                />
                                <button onClick={moveBack}>back</button>
                            </div>
                        }

                        <div>
                            {credentialStatus === 0 ?
                                <button className="w-full border-2 h-12" onClick={(e) => checkCredential(e, email)}>
                                    다음
                                </button>
                            : credentialStatus === 1 ?
                                <button className="w-full border-2 h-12" type="submit" onClick={e => handleSignUp(e)}>
                                    회원가입
                                </button>
                            :
                                <button className="w-full border-2 h-12" type="submit" onClick={handleSignIn}>
                                    로그인
                                </button>
                            }
                        </div>
                    </form>
                    <div className="text-center text-sm">
                        Don't have an account?
                        <Link className="underline" to="#">
                            Register
                        </Link>
                        <SnsButtons/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignInPage;
