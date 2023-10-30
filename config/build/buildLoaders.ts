import webpack from "webpack";

/**
 *  Loaders to preprocess files
 */

export function buildLoaders(): webpack.RuleSetRule[] {

    const cssLoader =  {
        test: /\.s[ac]ss$/i,    // saas, scss
        use: [                  // the order is important!
          // Creates `style` nodes from JS strings
          "style-loader",
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