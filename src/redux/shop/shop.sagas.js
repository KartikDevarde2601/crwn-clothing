import { takeLatest ,call,put,all} from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import { convertCollectionsSnapshotToMap,firestore } from "../../firebase/firebase.utils";
import { fetchCollectionsFailure,fetchCollectionsSuccess } from "./shop.action";

export function* fetchCollectionsAsync() {
  try{
    const collectionRef = firestore.collection('collections');
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
      );
    yield  put(fetchCollectionsSuccess(collectionsMap));
  }catch(error){
 yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,  fetchCollectionsAsync);
}

export function* shopsagas(){
  yield (all([
    call(fetchCollectionStart())
  ]))
}