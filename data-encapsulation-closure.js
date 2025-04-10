function counter(){
    var count = 0
    // return function () {
    //     count++
    //     console.log(count,"as");
    // }
    this.increase = function(){
        count++
        console.log(count);
    }
    this.decrease = function(){
        count--
        console.log(count);
    }
}

// let c1 = counter()
let c1 = new counter()
c1.increase()
c1.increase()
c1.decrease()