function remove (string) {
  if (string.lastIndexOf('!')==string.length-1) {
    return string.substring(0,string.length-1)
  }
  else
    return string
}