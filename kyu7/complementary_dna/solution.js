function dnaStrand(dna){
    let result=''
    for (let i=0;i<dna.length;i++) {
      console.log(dna[i])
     if (dna[i]=='T') {result+='A'}
      else if (dna[i]=='A') {result+='T'}
      else if (dna[i]=='C') {result+='G'}
      else if (dna[i]=='G') {result+='C'}
    }
    return result
  }

  function dnaStrand(dna){
    let complements={'A':'T', 'T':'A', 'G':'C','C':'G'}
    return dna.split('').map(nucl=>complements[nucl]).join('')
  }