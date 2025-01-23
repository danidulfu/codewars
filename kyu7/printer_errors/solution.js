function printerError(s) {
    let colors='abcdefghijklm'
    let errors=s.split('').filter(element=>colors.indexOf(element)==-1).length
  return `${errors}/${s.length}`
}