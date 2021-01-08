
const deciToHex = (c) => {

  if(c > 0 && c < 16) {
  c =  c.toString(16);
    return '0' + c;
  } else {
  c =  c.toString(16);
    return c;
  }
// c = c.toString(16);

// return c;
} 
const rgbToHex = (r, g, b) => {

  return '#' + deciToHex(r) + deciToHex(g) + deciToHex(b)
}

export default rgbToHex;