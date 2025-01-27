function stockList(books, categories) {
    if ((books.length===0)||(categories.length===0)) return ''
    let list=[]
    for (let i=0;i<books.length;i++) {
      list.push(books[i].split(' '))
    }
    for (let i=0;i<categories.length;i++){
      let stock=0
      for (let j=0;j<list.length;j++){
        if (categories[i]==list[j][0][0])
         stock+=Number(list[j][1])
      }
      categories[i]=`(${categories[i]} : ${stock})`
    }
    return categories.join(' - ');
  }