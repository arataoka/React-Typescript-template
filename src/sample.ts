/* ⭐️ジェネリクス⭐️ */

const copy = <T extends { name: string }, U extends keyof T>(
  val: T,
  key: U
): T => {
  //extendsで制約をする
  return val;
};
//型も引数にする
// console.log(copy({ name: 'Quill' }) as { name: string });
// console.log(copy<string>('hello'));
console.log(copy({ name: 'aaaa', age: 111 }, 'name')); //型推論をしてくれるため省略できる

type K = keyof { name: string; age: number };

/*Utility*/
const fetchData: Promise<string> = new Promise((resolve) => {
  //返り値をジェネリクスで指定できる
  //promiseの
  setTimeout(() => {
    resolve('hello');
  }, 3000);
});

//どちらも同じ
const vegetables: string[] = ['a', 'b'];
const vegetables2: Array<string> = ['a', 'b'];

/*非同期など、デフォルトを指定したい時*/
interface ResponseData<T extends { message: string } = any> {
  //=でdefaultの型を指定することができる
  data: T;
  status: number;
}

let tmp2: ResponseData;

/*Mapped Type*/
type MappedTypes = {
  [P in 'tomato' | 'pumpkin']: string;
};

interface Vegetables {
  tomato: string;
  pumpkin: string;
}

type MappedTypes2 = {
  [P in keyof Vegetables]: string;
};
