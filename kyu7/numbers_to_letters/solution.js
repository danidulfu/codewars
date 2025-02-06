function switcher(x){
    let alphabet='zyxwvutsrqponmlkjihgfedcba!? '
    return x.map(letter=>letter=alphabet[Number(letter)-1]).join('')
   }