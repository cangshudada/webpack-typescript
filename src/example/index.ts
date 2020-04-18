// 布尔值
export const boo: boolean = true;

// 数字
const num: number = 122;

// 字符串
export const foo: string = '你好 ts';

// 数组
const arr: (string | number)[] = ['123'];

// 元组
const tuple: [number] = [123];

// 枚举
enum Roles {
  SUPER_ADMIN,
  ADMIN = 2,
  USER
}

console.log('SUPER_ADMIN', Roles.SUPER_ADMIN)

console.log('ADMIN', Roles.ADMIN)

// void 
const func: (info: string) => void = () => {

}

func('123')

// never类型
const errorFun: (message: string) => never = (message) => {
  throw new Error(message)
}

const infiniteFunc: () => never = () => {
  while (true) {

  }
}

errorFun('报错了')

// 类型断言
// as

// interface

interface IType {
  color?: string,
  type: string,
  [prop: string]: any
}

const type: IType = {
  color: 'red',
  type: 'tomota',
  price: 15
} 

