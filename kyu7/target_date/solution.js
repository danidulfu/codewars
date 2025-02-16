function dateNbDays(a0, a, p) {
	let count=1
  while (a0<a) {
    a0=a0+a0*p/36000
    count++
  }
  let date=new Date(2016,0,count)
  return date.toISOString().slice(0,10)
}