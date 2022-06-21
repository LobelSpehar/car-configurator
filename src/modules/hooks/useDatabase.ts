import 'firebase/firestore';
import { db, auth } from '../../firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import { useRecoilState } from 'recoil';
import { baseState, configCarAtom } from '../atoms/Index';
import { DbInterface } from '../atoms/FirebaseAtom';
import { ConfigInterface } from '../atoms/ConfiguratorAtom';

export function useDatabase() {
  let UID: string = auth.currentUser?.uid || '';
  const carList = collection(db, UID);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [database, setDatabase] = useRecoilState(baseState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [config, setConfig] = useRecoilState(configCarAtom);

  const dayOrdinal = function (d: number) {
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

  const getCarList = async (setLoading?: Function) => {
    let res = await getDocs(carList);
    let array = res.docs.map((item) => ({
      data: item.data(),
      id: item.id,
    }));

    let result: Array<DbInterface> = array.map((item) => ({
      id: item.id,
      name: item.data.name,
      model: item.data.model,
      color: { type: item.data.color.type, price: item.data.color.price },
      wheel: {
        type: item.data.wheel.type,
        price: item.data.wheel.price,
        name: item.data.wheel.name,
      },
      interior: {
        type: item.data.interior.type,
        price: item.data.interior.price,
      },
      year: item.data.year,
      date: item.data.date,
      base: item.data.base,
      total: item.data.total,
    }));
    setDatabase(result);
    setLoading && setLoading(false);
  };
  const getNewCarList = async (setLoading: Function) => {
    let res = await getDocs(collection(db, 'newCars'));
    let array = res.docs.map((item) => ({
      data: item.data(),
      id: item.id,
    }));

    let result: Array<DbInterface> = array.map((item) => ({
      id: item.id,
      name: item.data.name,
      model: item.data.model,
      color: { type: item.data.color.type, price: item.data.color.price },
      wheel: {
        type: item.data.wheel.type,
        price: item.data.wheel.price,
        name: item.data.wheel.name,
      },
      interior: {
        type: item.data.interior.type,
        price: item.data.interior.price,
      },
      year: item.data.year,
      date: item.data.date,
      base: item.data.base,
      total: item.data.total,
    }));

    setDatabase(result);
    setLoading(false);
  };
  const getCarById = async (id: string, setLoading: Function) => {
    if (id === 'rs5' || id === 'rs6' || id === 'e-tron') {
      let res = (await getDoc(doc(db, 'newCars', id))).data();

      let newDate = new Date();

      let date =
        newDate.toLocaleString('default', { month: 'long' }) +
        ' ' +
        newDate.getDate() +
        dayOrdinal(newDate.getDate()) +
        ' ' +
        newDate.getFullYear();

      setConfig({
        id: 'newCar',
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
      });
    } else {
      let res = (await getDoc(doc(db, UID, id))).data();

      let result: ConfigInterface = {
        id: id,
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
      };

      setConfig(result);
    }

    setLoading(false);
  };
  const deleteCar = async (id: string) => {
    let res = await getDocs(carList);

    let refId = res.docs.filter((item) => item.id === id);

    await deleteDoc(doc(carList, refId[0].id)).then(() => {
      getCarList();
    });
  };
  const addCar = async (data: {
    id: string;
    name: string;
    year: string;
    total: number;
    color: {
      type: string;
      price: number;
    };
    model: string;
    wheel: {
      type: string;
      name: string;
      price: number;
    };
    interior: {
      type: string;
      price: number;
    };
  }) => {
    if (data.id === 'newCar') {
      await addDoc(carList, data)
        .then((result) => {})
        .catch((error) => {
          alert(error.message);
        });
    } else {
      await setDoc(doc(db, UID, data.id), data);
    }
  };
  return { addCar, getCarList, deleteCar, getCarById, getNewCarList };
}
