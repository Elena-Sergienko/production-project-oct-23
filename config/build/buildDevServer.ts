import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true, // automatically open our page in browser
        historyApiFallback: true // Allows to proxy requests through a specified index page https://github.com/webpack/webpack-dev-server#:~:text=for%20everything%20served.%0A%20%20%2D%2D-,history%2Dapi%2Dfallback,-Allows%20to%20proxy
    }
}