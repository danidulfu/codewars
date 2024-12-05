function factorial(n)
{
  if ((n<0)||(n>12)) {
    throw new RangeError('number has to be betwen 1 and 11')
  }
  let product=1
  for (let i=1;i<=n;i++){
    product*=i
  }
  return product
}