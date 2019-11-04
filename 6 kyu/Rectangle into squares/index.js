function sqInRect(lng, wdth) {
  let squares = [];
  if (lng === wdth) return null;

  while (lng * wdth > 0) {
    if (lng > wdth) {
      squares.push(wdth);
      lng = lng - wdth;
    } else {
      squares.push(lng);
      wdth = wdth - lng;
    }
  }
  return squares;
}
