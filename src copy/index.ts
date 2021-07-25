// 注释测试



// const obj = {name1:23,age:666}
// obj.age = 456
// console.log(obj)

type mytype = {
    name:string,
    [pname:string]:string
}
let myObj:myInterface={
    name:'123',
    age:123
}

interface myInterface{
    name:string,
    age:number
}

class myClass implements myInterface{
    name:string
    age:number
    constructor(){
        this.name='123'
        this.age=13 
    }
    get Name(){
        console.log(444)
        return this.name+1
    }
    set Name(val){
        this.name+=val+1
    }
    
}
let o = new myClass()
console.log(o.name,999)

function fan<T>(a:T):T{
    return a
}

// console.log(Promise)
// import {hello} from './test'
// hello(333)

// let a:String = 'index.ts'

// function fun(a:number):string{
//     return a.toString()
// }
// console.log(fun(5))
// console.log(123)
// document.getElementById('123')

// function fun2(this:any){
//     console.log(this)
// }
// fun(2)
// fun2()


