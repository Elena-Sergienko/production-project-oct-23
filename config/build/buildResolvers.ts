import { ResolveOptions } from "webpack";

/**
 * resolve
 * helps webpack find the module code that needs 
 * to be included in the bundle for every such require / import statement
 * 
 * no need extensions in import statement
 */

export function buildResolvers(): ResolveOptions  {

    return {
            extensions: ['.tsx', '.ts', '.js'], 
          }
}