
type ProfileType = {
    sex: string;
    birth: string;
    role: string;
}

export const checkProfile = (profile:ProfileType) => {
    const dataArr = [profile.sex, profile.birth, profile.role];
    const isFilled =  dataArr.every(item => item !== undefined);
    return isFilled;
};
