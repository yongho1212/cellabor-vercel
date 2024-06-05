
export interface LoginParamsType  {
    email: string;
    password: string;
};

export interface SignupParamsType extends LoginParamsType{
    birthday: string;
    id: string;
    name?: string;
    terms: {
        [key: string]: boolean;
    }
};
