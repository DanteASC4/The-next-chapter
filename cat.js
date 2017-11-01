class Cat {
  constructor(a, b, c, d, e, num){
    this.furType = a;
    this.earType = c;
    this.size = d;
    this.eyeColor = e;
    this.meow = function(num){
      console.log("success")
      if (num <= 0){
        num = 1
      }
      for(var i = 0; i < num; i++){
        console.log("Meow!")
         }
      }
      this.furColor = function(){
        var clr = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        if (clr == 1){
          clr = "red"
          console.log("Seems like your cat is " + clr + "!");
        }
        else if (clr == 2) {
          clr = "black"
          console.log("Seems like your cat is " + clr + "!");
        }
        else if (clr == 3) {
          clr = "green"
          console.log("Seems like your cat is " + clr + "!");
        }
        else {
          clr = "yellow"
          console.log("Seems like your cat is " + clr + "!");
        }
      }
    }
  }


var bob = new Cat("good", "red", "bar", "dog", "red")
