import webpack from "webpack";

/**
 *  Loaders to preprocess files
 */

export function buildLoaders(): webpack.RuleSetRule[] {
const typescriptLoader = {
    test: /\.tsx?$/, // ? - x optional; so, not only for .tsx but also .ts  
    use: 'ts-loader',
    exclude: /node_modules/,
  }

    return [
        typescriptLoader
      ]
}