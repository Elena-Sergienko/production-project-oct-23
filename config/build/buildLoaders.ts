import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

/**
 *  Loaders to preprocess files
 */

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const cssLoader =  {
        test: /\.s[ac]ss$/i,    // saas, scss
        use: [                  // the order is important!
          // Creates `style` nodes from JS strings
         options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,// MiniCssExtractPlugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      } 
    
      const typescriptLoader = {
        test: /\.tsx?$/, // ? - x optional; so, not only for .tsx but also .ts  
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader
      ]
}