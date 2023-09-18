// import { useState, useEffect } from 'react';

// export default function useValid(changeValue: IValidType) {
//   const [validText, setValidText] = useState('');
//   const [isValid, setIsValid] = useState({
//     isEmail: false,
//     isPassword: false,
//     isPasswordConfirm: false
//   });

//   useEffect(() => {
//     const exp = /^[A-Za-Z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]$/;
//     if (!exp.test(changeValue.email)) {
//       setValidText('이메일을 확인해주세요');
//       setIsValid({ ...isValid, isEmail: false });
//     } else {
//       setValidText('');
//       setIsValid({ ...isValid, isEmail: true });
//     }
//   }, [changeValue.email]);
// }
