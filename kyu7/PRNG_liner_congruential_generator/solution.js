class LCG {
    constructor(x){
      this.a=2;
      this.c=3;
      this.m=10;
      this.x=x;
    }
    random() {
      let result=(this.a*this.x+this.c)%this.m
      this.x=result
      return result/10
    }
  }