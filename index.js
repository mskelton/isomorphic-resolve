import { createRequire } from "node:module"

const resolve = createRequire(import.meta.url).resolve

export default resolve
