export default function sum(...args) {
  return args.reduce((acc, current) => acc + current, 0);
}
