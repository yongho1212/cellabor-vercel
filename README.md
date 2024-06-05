# Cellabor

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## API rules
- Date는 string으로 통일 ex) '1995-12-12'


## Commit rules

- FEAT : 새로운 기능의 추가
- FIX: 버그 수정
- DOCS: 문서 수정
- STYLE: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
- REFACTOR: 코드 리펙토링
- TEST: 테스트 코트, 리펙토링 테스트 코드 추가
- CHORE: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)

## Libraries

- package_manager : `yarn`
- client_state : `recoil`
- server_state : `react-query`
- style : `styled-components`

## Design pattern

### Atomic design
![atomic](https://github.com/cellabor/cellabor-client/assets/61383329/49f72230-f193-40d9-9cf5-290a503a269a)
<img width="445" alt="스크린샷 2023-12-22 오후 1 07 52" src="https://github.com/cellabor/cellabor-client/assets/61383329/cef0e425-5ca0-4fff-a5c5-09068f57f3c0">

#### 도입 이유
- 컴포넌트의 재활용성을 극대화와 렌더링 최적화를 위해 atomic design을 사용했습니다. 
#### 단점 극복 방법 
- 불필요한 props가 많아지는것을 방지하기 위해 디자이너, 개발자 모두 atomic design에 대해 학습후 UI 설계를 진행했습니다.
