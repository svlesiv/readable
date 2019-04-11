export function uuid () {
  return (Math.random()*16).toString(16).substring(2);
}
