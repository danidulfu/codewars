function countSmileys(arr) {
    const eyes=[':',';']
    const nose=['-','~']
    const smile=[')','D']
    let smiles=0;
    function isNose(char) {
      return nose.indexOf(char)!=-1
    }
    function isEye(char) {
      return eyes.indexOf(char)!=-1
    }
    function isSmile(char){
      return smile.indexOf(char)!=-1
    }
    arr.map(element => {
      if (element.length==2) {
        if (isEye(element[0])&&isSmile(element[1])) {
          smiles+=1
        }
      } else
        if (isEye(element[0])&&isSmile(element[2])&&isNose(element[1])) {
          smiles+=1}
    })
    return smiles
  }