export function times(count: number, cb: () => void) {
  Array.from(Array(count), () => cb());
}
