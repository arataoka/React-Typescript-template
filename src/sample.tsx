import React from 'react';
import { read } from 'fs';

function Sample() {
  return <div className="App">This is React-TS-Template</div>;
}

export default Sample;

//typescript sample

/* 複数の型を複合化させる */
// type
type Engineer = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  follower: number;
};

type EngineerBlogger = Engineer & Blogger;
const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 100,
};

console.log(quill);

// interface
interface Engineer2 {
  name: string;
  role: string;
}

interface Blogger2 {
  name: string;
  follower: number;
}

interface EngineerBlogger2 extends Engineer2, Blogger2 {}
const quill2: EngineerBlogger2 = {
  name: 'Quill',
  role: 'front-end',
  follower: 100,
};
console.log(quill2);

//union型
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber; // number AかつB

//type guard

const toUpperCase = (x: string | number) => {
  if (typeof x === 'string') {
    x.toUpperCase();
  } else {
    return '';
  }
};

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.role); //nameのみ
  if ('role' in nomadWorker) {
    //プロパティが存在する時のみ
    console.log(nomadWorker.role);
  }
  if ('follower' in nomadWorker) {
    //プロパティが存在する時のみ
    console.log(nomadWorker.follower);
  }
}

class Bird {
  kind = 'bird'; //タグをつけてswitch文で分岐する方法もある
  speak() {
    console.log('bird');
  }
  fly() {
    console.log('birdFly');
  }
}

class Dog {
  kind = 'dog';
  speak() {
    console.log('dog');
  }
}

type Pet = Dog | Bird;

const havePet = (pet: Pet) => {
  pet.speak();
  //interfaceは消えてしまうため、instance of には使用できない。
  if (pet instanceof Bird) {
    pet.fly();
  }
};
havePet(new Bird());

//要素に型をつける。
// const input = <HTMLInputElement>document.querySelector('.input');
// const input = document.querySelector('.input') as HTMLInputElement;
const input = document.querySelector('.input')!;

/*インデックスシグネチャー*/
interface Designer {
  name: string;
  [index: string]: string; //これを加えると型をくわえることができるが・・・
}

const designer: Designer = {
  name: 'Quill',
  a: 'aa',
};

console.log(designer.bbb); // エラーにならない

/* オーバーロード */
function toUpperCase(x: number): number; //こいつのみ適応される
function toUpperCase(x: string | number): string | number {
  //関数自体に定義されるものは無視される
  return x;
}
const upperHello = toUpperCase('hello');

interface DownloadedData {
  id: number;
}

/*LookUp型*/
type id = DownloadedData['id'];

/*タプル型 とrest parameter*/
const advancedFn = (
  ...args: readonly [number, string, boolean, ...number[]]
) => {
  console.log(args);
};

advancedFn(1, 'a', true, 1, 12);

/* constアサーション */
const array = [10, 20] as const; //as const でreadonlyになる
const peter = {
  name: 'peter',
  age: 38,
} as const;

// typeofで型をいれる！
type PeterType = typeof peter;
