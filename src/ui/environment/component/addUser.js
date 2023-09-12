import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";

function addUser(userInfo, setIsAddFinished) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, userInfo.account.id, userInfo.account.pw)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return true;
      // ...
    })
    .then((result) => {
      setIsAddFinished(result);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        `###회원가입 과정에서 에러가 발생했습니다###\n${errorMessage}`
      );
      setIsAddFinished(false);
    });
}
export default addUser;
