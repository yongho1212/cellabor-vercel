import {FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, AuthProvider} from 'firebase/auth';
import {auth} from '../../firebase';

import { noTokenInstance} from '../axiosInstance';

const providers: Record<string, AuthProvider> = {
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
};

export const SignInWithSns = async (providerName: string) => {
    const provider = providers[providerName];
    const data = await signInWithPopup(auth, provider);
    const tkn = await data.user.getIdToken();
    localStorage.setItem('accessToken', JSON.stringify(tkn));
    localStorage.setItem('uid', JSON.stringify(data.user.uid));

    let fbdata = {} as any;
    fbdata = {...data.user};
    data.providerId = data.user.providerData[0].providerId;

    const response = await noTokenInstance.post('/user/signIn', fbdata);
    return response;
};

