/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * When file caching is enabled, the build and test actions save on-disk files to a cache and restore them from that cache in subsequent workflow runs.
 */
export interface FileCaching {
  /**
   * This interface was referenced by `FileCaching`'s JSON-Schema definition
   * via the `patternProperty` "^[A-Za-z0-9\-_.]+$".
   */
  [k: string]: {
    Path: string;
    /**
     * @minItems 1
     * @maxItems 5
     */
    RestoreKeys?: string[];
  };
}
