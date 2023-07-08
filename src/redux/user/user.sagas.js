import { takeLatest, put, call, all } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpfailure,
  signUpsuccess
} from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth,additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth,additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* ongoogleSignStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const user = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const UserAuth = yield getCurrentUser();
    if (!UserAuth) return;
    yield getSnapshotFromUserAuth(UserAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* checkUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut(){
  try {
    yield auth.signOut();
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}


export function*signOutStart(){
  yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}

export function*signUp({payload:{email,displayName,password}}){
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(
      email,
      password
    );
    yield put(signUpsuccess({user, additionalData:{displayName}}));
} catch(error){
 yield put(signUpfailure());
}
}

export function*signInAfterSignUp({payload:{user,additionalData}}){
 yield getSnapshotFromUserAuth(user,additionalData)
}

export function*onSignUpSuccess(){
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function*signUpStart(){
  yield takeLatest(UserActionTypes.SIGN_UP_START,signUp)
}

export function* userSaga() {
  yield all([
    call(ongoogleSignStart),
    call(onEmailSignStart),
    call(checkUserSession),
    call(signOutStart),
    call(signUpStart),
    call(onSignUpSuccess)
  ]);
}

