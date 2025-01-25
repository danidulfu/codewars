function high(x){
    let interim=x.split(' ')
    let score=interim[0].split('').reduce((sum,letter)=>sum+letter.charCodeAt(0)-96,0);
    let scoringString=interim[0]
    for (let i=0;i<interim.length;i++) {
      if (score<interim[i].split('').reduce((sum,letter)=>sum+letter.charCodeAt(0)-96,0))
        {scoringString=interim[i]
        score=interim[i].split('').reduce((sum,letter)=>sum+letter.charCodeAt(0)-96,0)}
    }
    return interim[interim.indexOf(scoringString)]
  }