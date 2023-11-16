let SubTestFunction = function(){
    console.log("Привет я SubTestFunction, меня вызвала функиция TestFunction")
}

let TestFunction = ()=>{
    SubTestFunction()
}
TestFunction()