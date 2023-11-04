import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

/**
 *  Loaders to preprocess files
 */

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const cssLoader =  {
        test: /\.s[ac]ss$/i,    // saas, scss
        use: [                  // the order is important!
          // Creates `style` nodes from JS strings
         isDev ? "style-loader" : MiniCssExtractPlugin.loader,// MiniCssExtractPlugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                localIdentName: isDev 
                ? '[path][name]__[local]--[hash:base64:5]' 
                : '[hash:base64:8]'
              }
            }
          },
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