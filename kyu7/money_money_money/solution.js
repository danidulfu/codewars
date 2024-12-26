function calculateYears(principal, interest, tax, desired) {
    if (principal==desired) return 0
  else {
    let years=0
    while (principal<=desired){
      principal=principal+(principal*interest*(1-tax))
      years++
    }
    return years
  }
}