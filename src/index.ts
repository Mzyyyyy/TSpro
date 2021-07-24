// 注释测试
let a:String = 'index.ts'

function fun(a:number):string{
    return a.toString()
}
console.log(fun(5))
console.log(123)
document.getElementById('123')

function fun2(this:any){
    console.log(this)
}
fun(2)
fun2()