import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";

function addUser(userInfo, setWarnWords) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, userInfo.account.id, userInfo.account.pw)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user Added");
      setWarnWords(`${userInfo.name}님 회원가입을 환영합니다`);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      // ..
    });
}
export default addUser;
