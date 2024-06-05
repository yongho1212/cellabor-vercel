/**
 * 생년월일을 입력받아 나이를 계산하는 함수
 * @param {string|Date} birthDate - 생년월일 (문자열 또는 Date 객체)
 * @returns {number} - 나이 (정수)
 */
export function calculateAge(birthDate: any) {
    if (!birthDate) return null;
    const today = new Date();
    const birthDateObj = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    return age;
}
