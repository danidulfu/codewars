function howMuchILoveYou(nbPetals) {
    let text={0:"not at all",1:"I love you",2:"a little",3:"a lot",4:"passionately",5:"madly"}
    console.log(nbPetals)
    return text[nbPetals%6]
  }
  