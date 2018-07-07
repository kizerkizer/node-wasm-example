import fs from 'fs';

(async () => {
  const binary = new Uint8Array(fs.readFileSync(`./add.wasm`));
  const module = await WebAssembly.instantiate(binary);
  const program = module.instance.exports;
  console.log(program.add(4, 5));
})();
