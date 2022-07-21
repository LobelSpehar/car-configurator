import { NavigateFunction, useNavigate } from 'react-router-dom';

import 'firebase/firestore';
import { db, auth } from '../../firebase';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  onSnapshot,
  CollectionReference,
  DocumentData,
  QuerySnapshot,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import { baseState, configCarAtom } from 'modules/atoms/Index';
import { DbInterface } from 'modules/atoms/Index';
import { Unsubscribe } from 'firebase/auth';

export function useDatabase() {
  const navigate: NavigateFunction = useNavigate();
  let UID: string = auth.currentUser?.uid || '';
  const carList: CollectionReference<DocumentData> = collection(db, UID);
  const setDatabase: SetterOrUpdater<DbInterface[]> =
    useSetRecoilState(baseState);
  const setConfig: SetterOrUpdater<DbInterface> =
    useSetRecoilState(configCarAtom);

  const dayOrdinal: Function = function (d: number) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  function typeGuard(obj: any): obj is DbInterface {
    return (
      'id' in obj &&
      'data' in obj &&
      'name' in obj.data &&
      'model' in obj.data &&
      'color' in obj.data &&
      'type' in obj.data.color &&
      'price' in obj.data.color &&
      'wheel' in obj.data &&
      'type' in obj.data.wheel &&
      'price' in obj.data.wheel &&
      'name' in obj.data.wheel &&
      'interior' in obj.data &&
      'type' in obj.data.interior &&
      'price' in obj.data.interior &&
      'year' in obj.data &&
      'date' in obj.data &&
      'base' in obj.data &&
      'total' in obj.data
    );
  }

  const getCarList: Function = async (setLoading: Function) => {
    const unsub: Unsubscribe = onSnapshot(
      carList,
      (res: QuerySnapshot<DocumentData>) => {
        let result: Array<DbInterface> = res.docs.map(
          (item: QueryDocumentSnapshot<DocumentData>) => ({
            data: {
              name: item.data().name,
              model: item.data().model,
              color: {
                type: item.data().color.type,
                price: item.data().color.price,
              },
              wheel: {
                type: item.data().wheel.type,
                price: item.data().wheel.price,
                name: item.data().wheel.name,
              },
              interior: {
                type: item.data().interior.type,
                price: item.data().interior.price,
              },
              year: item.data().year,
              date: item.data().date,
              base: item.data().base,
              total: item.data().total,
            },
            id: item.id,
          })
        );
        if (result instanceof Array<DbInterface>) {
          setDatabase(result);
        } else {
          alert('Something went wrong.');
          navigate('/');
        }
        setLoading && setLoading(false);
      }
    );
  };

  const getNewCarList: Function = async (setLoading: Function) => {
    let res: QuerySnapshot<DocumentData> = await getDocs(
      collection(db, 'newCars')
    );
    let result: Array<DbInterface> = res.docs.map(
      (item: QueryDocumentSnapshot<DocumentData>) => ({
        data: {
          name: item.data().name,
          model: item.data().model,
          color: item.data().color,
          wheel: item.data().wheel,
          interior: item.data().interior,
          year: item.data().year,
          date: item.data().date,
          base: item.data().base,
          total: item.data().total,
        },
        id: item.id,
      })
    );
    if (result instanceof Array<DbInterface>) {
      setDatabase(result);
    } else {
      alert('Something went wrong.');
      navigate('/');
    }
    setLoading(false);
  };
  const getCarById: Function = async (id: string, setLoading: Function) => {
    if (id === 'rs5' || id === 'rs6' || id === 'e-tron') {
      let res: DocumentData | undefined = (
        await getDoc(doc(db, 'newCars', id))
      ).data();

      let newDate: Date = new Date();

      let date: string =
        newDate.toLocaleString('default', { month: 'long' }) +
        ' ' +
        newDate.getDate() +
        dayOrdinal(newDate.getDate()) +
        ' ' +
        newDate.getFullYear();
      let result: DbInterface = {
        id: '',
        data: {
          date: date,
          name: res?.name,
          model: res?.model,
          color: { type: res?.color.type, price: res?.color.price },
          wheel: {
            type: res?.wheel.type,
            price: res?.wheel.price,
            name: res?.wheel.name,
          },
          interior: { type: res?.interior.type, price: res?.interior.price },
          year: res?.year,
          base: res?.base,
          total: res?.total,
        },
      };
      if (typeGuard(result)) {
        setConfig(result);
      } else {
        alert('Something went wrong.');
        navigate('/');
      }
    } else {
      let res: DocumentData | undefined = (
        await getDoc(doc(db, UID, id))
      ).data();

      let result: DbInterface = {
        id: id,
        data: {
          name: res?.name,
          model: res?.model,
          color: { type: res?.color.type, price: res?.color.price },
          wheel: {
            type: res?.wheel.type,
            price: res?.wheel.price,
            name: res?.wheel.name,
          },
          interior: { type: res?.interior.type, price: res?.interior.price },
          year: res?.year,
          date: res?.date,
          base: res?.base,
          total: res?.total,
        },
      };
      if (typeGuard(result)) {
        setConfig(result);
      } else {
        alert('Something went wrong.');
        navigate('/');
      }
    }
    setLoading(false);
  };
  const deleteCar: Function = async (id: string) => {
    let res: QuerySnapshot<DocumentData> = await getDocs(carList);

    let refId: QueryDocumentSnapshot<DocumentData>[] = res.docs.filter(
      (item: QueryDocumentSnapshot<DocumentData>) => item.id === id
    );

    await deleteDoc(doc(carList, refId[0].id));
  };
  const addCar: Function = async (data: DbInterface) => {
    if (data.id) {
      await setDoc(doc(carList, data.id), data.data).catch(
        (error: { message: string }) => {
          alert(error.message);
        }
      );
    } else {
      await setDoc(doc(carList), data.data).catch(
        (error: { message: string }) => {
          alert(error.message);
        }
      );
    }
  };
  return { addCar, getCarList, deleteCar, getCarById, getNewCarList };
}
