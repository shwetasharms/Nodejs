const cartFunc=require("./cart")
const item=[
    20,30,40,50
]
const totalPrice=cartFunc.calculateFunction(item)
console.log(totalPrice)