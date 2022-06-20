import 'firebase/firestore';
import { db, auth } from '../../firebase';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc
} from 'firebase/firestore';
import { useRecoilState } from 'recoil';
import { baseState, configCarAtom } from '../atoms/Index';

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
        let array = res.docs.map((item, index) => ({
            data: item.data(),
            id: item.id
        }));

        let result: Array<any> = array.map(item => ({ ...item.data, id: item.id }))

        setDatabase(result);
        setLoading && setLoading(false);

        // fetch test
        // await fetch('https://firestore.googleapis.com/v1/projects/car-config-1648a/databases/(default)/newCars.json', { mode: 'no-cors' })
        //     .then(response => response.json())
        //     .then(
        //         (result) => {
        //             console.log(result);
        //         },

        //         (error) => {
        //             console.log(error);
        //         }
        //     );

    }
    const getNewCarList = async (setLoading: Function) => {
        let res = await getDocs(collection(db, "newCars"));
        let array = res.docs.map((item, index) => ({
            data: item.data(),
            id: item.id
        }));

        let result: Array<any> = array.map(item => ({ ...item.data, id: item.id }))

        setDatabase(result);
        setLoading(false)
    }
    const getCarById = async (id: string, setLoading: Function) => {
        if (id === 'rs5' || id === 'rs6' || id === 'e-tron') {
            let res = await getDoc(doc(db, "newCars", id));
            let result: any = { ...res.data(), id: id }
            let newDate = new Date();

            let date =
                newDate.toLocaleString('default', { month: 'long' }) +
                ' ' +
                newDate.getDate() +
                dayOrdinal(newDate.getDate()) +
                ' ' +
                newDate.getFullYear();

            setConfig({ ...result, id: 'newCar', date: date });
        } else {
            let res = await getDoc(doc(db, UID, id));

            let result: any = { ...res.data(), id: id }

            setConfig(result);
        }


        setLoading(false)
    }
    const deleteCar = async (id: string) => {
        let res = await getDocs(carList);

        let refId = res.docs.filter((item => item.id === id));

        await deleteDoc(doc(carList, refId[0].id)).then(() => {
            getCarList();
        });

    }
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


        if (data.id === "newCar") {
            await addDoc(carList, data).then((result) => {

            }).catch((error) => {

                alert(error.message)

            });
        } else {
            await setDoc(doc(db, UID, data.id), data)
        }


    }
    return { addCar, getCarList, deleteCar, getCarById, getNewCarList };
}
