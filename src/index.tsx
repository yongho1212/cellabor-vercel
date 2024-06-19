import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/zh-cn';
import {RecoilRoot} from 'recoil';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme/theme';
// import GlobalStyle from './styles/GlobalStyle';
import {NavermapsProvider} from 'react-naver-maps';
import ErrorPage from './components/@pages/ErrorPage';
import Home from './components/@pages/Home';
import LandingPage from './components/@pages/LandingPage';
import SignInPage from './components/@pages/SignInPage';
import SignUpPage from './components/@pages/SignUpPage';
import LoginPage from './components/@pages/LoginPage';
import HeaderNav from './components/@organism/HeaderNav';
import NavLayout from './components/@layouts/NavLayout';
import PostCampaignPage from './components/@pages/PostCampaignPage';
import CampainListPage from './components/@pages/CampainListPage';
import CampainDetailPage from './components/@pages/CampainDetailPage';
import SearchCampaignPage from './components/@pages/SearchCampaignPage';
import AdCampaignGeneralDataPage from './components/@pages/AdCampaignGeneralDataPage';
import AdCampaignDetailInfoPage from './components/@pages/AdCampaignDetailInfoPage';
import CampaingLayout from './components/@pages/CampaingLayout';
import CampaignDetailMain from  './components/@pages/CampaignDetailMain';
import CampaignEditPage from './components/@pages/CampaignEditPage';

import ProfileLayout from './components/@pages/ProfileLayout';
import NewProfile from './components/@pages/NewUserPage';
import ProfileMain from './components/@pages/ProfileMain';
import EditProfilePage from './components/@pages/ProfileEditPage';

import Workspace from './components/@pages/Workspace';

import SearchInfluencerPage from './components/@pages/SearchInfluencerPage';

import ProtectedRoute from './ProtectedRoute';
import NewProfileRoute from './NewProfileRoute';
import {getUserInfo} from './apis/user/getProfile';
import GlobalStyle from './styles/GlobalStyle';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

const getLogin = () => {
    const isLoggedInLocal = localStorage.getItem('isLoggedIn');
    return JSON.parse(isLoggedInLocal!);
};
const getProfile = () => {
    const isProfileMadeLocal = localStorage.getItem('isProfileMade');
    return JSON.parse(isProfileMadeLocal!);
};

const isAuthenticated = () => {
    const login = getLogin();
    const profile = getProfile();
    return {login, profile};
};


const router = createBrowserRouter([

    {
        path: '/',
        element: <NavLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <LandingPage/>,
            },
            {
                path: '/signin',
                element: <SignInPage/>,
            },
            {
                path: '/signup',
                element: <SignUpPage/>,
            },
            {
                path: '/login',
                element: <LoginPage/>,
            },
            {
                path: '/new-profile',
                element: <NewProfile/>
            },
            {
                // element: <ProtectedRoute isAuthenticated={isAuthenticated()}/>,
                element: <ProtectedRoute />,
                path: '',
                children: [
                    {
                        path: '/campainList',
                        element: <CampainListPage/>,
                    },
                    // {
                    //     path: '/campainDetail',
                    //     element: <CampainDetailPage/>,
                    // },

                    {
                        path: '/ad/campaign/:id',
                        element: <CampaingLayout/>,
                        children: [
                            {
                                path: '/ad/campaign/:id',
                                element: <CampaignDetailMain/>,
                            },
                            {
                                path: '/ad/campaign/:id/edit',
                                element: <CampaignEditPage/>
                            }
                        ]
                    },
                    {
                        path: '/ad/campaign',
                        element: <CampaingLayout/>,
                        children: [
                            {
                                path: '/ad/campaign',
                                element: <CampaignDetailMain/>,
                            },
                            {
                                path: '/ad/campaign/edit',
                                element: <CampaignEditPage/>
                            }
                        ]
                    },
                    {
                        path: '/profile',
                        element: <ProfileLayout/>,
                        children: [
                            {
                                path: '/profile',
                                element: <ProfileMain/>,
                            },
                            {
                                path: '/profile/edit',
                                element: <EditProfilePage/>
                            }
                        ]
                    },
                    {
                        path: '/profile/:userId',
                        element: <ProfileLayout/>,
                        children: [
                            {
                                path: '/profile/:userId',
                                element: <ProfileMain/>,
                            },
                            {
                                path: '/profile/:userId/edit',
                                element: <EditProfilePage/>
                            }
                        ]
                    }
                ]
            },
            {
                path: '/search-influencer',
                element: <SearchInfluencerPage/>,
            },
            {
                path: '/search-campaign',
                element: <SearchCampaignPage/>,
            },
            {
                path: '/workspace',
                element: <Workspace />,
            },
        ],
    },
    {
        path: '/post-campaign',
        element: <PostCampaignPage/>,
    },


]);

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    {/*<GlobalStyle />*/}
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale="zh-cn"
                    >
                        <NavermapsProvider
                            ncpClientId={`${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`}
                            submodules={['geocoder']}
                        >
                            <GlobalStyle />
                            <RouterProvider router={router}/>
                        </NavermapsProvider>
                    </LocalizationProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </RecoilRoot>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
