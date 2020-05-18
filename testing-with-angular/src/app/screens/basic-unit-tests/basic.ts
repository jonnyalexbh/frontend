export function message(name: string) {
  return `Hello ${name}`;
}

export function increase(pNumber: number) {
  if (pNumber > 100) {
    return 100;
  } else {
    return pNumber + 1;
  }
}

export function userLogged() {
  return true;
}

export function getRobots() {
  return ['Megaman', 'Jarvis', 'Robocop'];
}
