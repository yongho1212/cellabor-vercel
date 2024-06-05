import {atom} from 'recoil';

const localStorageEffect =
    (key: string) =>
        ({ setSelf, onSet }: any) => {
            const savedValue = localStorage.getItem(key);
            // setSelf -> Callbacks to set or reset the value of the atom.
            if (savedValue != null) {
                setSelf(JSON.parse(savedValue));
            }

            // onSet -> Subscribe to changes in the atom value.
            onSet((newValue: any, _: any, isReset: boolean) => {
                isReset
                    ? localStorage.removeItem(key)
                    : localStorage.setItem(key, JSON.stringify(newValue));
            });

            if (key === 'isProfileMade' && savedValue === null) {
                localStorage.setItem(key, JSON.stringify(false)); // 기본값으로 false 설정
            }
        };

export const loginState = atom({
    key: 'loginState',
    default: false,
    effects: [localStorageEffect('isLoggedIn')],
});

export const profileState = atom({
    key: 'profileState',
    default: false,
    effects: [localStorageEffect('isProfileMade')],
});
