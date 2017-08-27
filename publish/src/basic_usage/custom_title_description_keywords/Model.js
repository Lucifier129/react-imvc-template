'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Model of IMVC
 */

/**
 * state 的 html 字段可以影响 document 的 title，description 和 keywords
 */
var initialState = exports.initialState = {
  html: {
    title: 'custom title',
    description: 'custom description',
    keywords: 'custom keywords'
  }
};