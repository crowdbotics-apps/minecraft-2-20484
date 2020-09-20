import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth104488Saga from '../features/EmailAuth104488/redux/sagas';
import CalendarView104486Saga from '../features/CalendarView104486/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth104488Saga,
CalendarView104486Saga,
    
  ]);
}