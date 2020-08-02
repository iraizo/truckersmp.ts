import ts from "@wessberg/rollup-plugin-ts";
import typescript from 'rollup-plugin-typescript2'

export default {
    input: "src/client.ts",
    output: [
        { file: "dist/client.js", format: "cjs"},
    ],
    plugins: [
        ts()
    ]
}