import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({    // simplifies creation of HTML files to serve your webpack bundles
            template: paths.html,
        }),
        new webpack.ProgressPlugin() // provides a way to customize how progress is reported during a compilation
    ]
}