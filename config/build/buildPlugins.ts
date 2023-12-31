import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({    // simplifies creation of HTML files to serve your webpack bundles
            template: paths.html,
        }),
        new webpack.ProgressPlugin(), // provides a way to customize how progress is reported during a compilation
        new MiniCssExtractPlugin({    // plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}