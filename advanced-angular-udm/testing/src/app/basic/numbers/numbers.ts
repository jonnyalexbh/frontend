export function increase(pnumber: number) {
  if (pnumber > 100) {
    return 100;
  } else {
    return pnumber + 1;
  }
}
