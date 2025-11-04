export function genId(): string {
  return Math.random().toString(36).substring(2, 10);
}

// OJO: solo para demo, NO usar en producción
export function hashPassword(pwd: string): string {
  return `hash:${pwd}`;
}

export function checkPassword(pwd: string, hash: string): boolean {
  return hash === hashPassword(pwd);
}
