Array.prototype.even = function(){
    return this.filter(el=>el%2==0&&typeof el=='number'&&Number.isInteger(el))
  }
  
  Array.prototype.odd = function() {
    return this.filter(el=>el%2==1&&typeof el=='number'&&Number.isInteger(el))
  }
  
  Array.prototype.under = function (n){
    return this.filter(el=>el<n&&typeof el=='number'&&Number.isInteger(el))
  }
  
  Array.prototype.over = function (n){
    return this.filter(el => el > n&&typeof el=='number'&&Number.isInteger(el))
  }
  
  Array.prototype.inRange = function(m,n){
    return this.filter (el => el>=m&&el<=n&&typeof el=='number'&&Number.isInteger(el))
  }