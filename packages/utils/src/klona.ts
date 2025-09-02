/**
 * ‌Klona是一个轻量级的JavaScript库，主要用于深度克隆对象、数组、日期、正则表达式等复杂数据结构‌。
 * Klona通过递归复制所有层级，确保生成一个完全独立的副本，从而避免直接修改原始数据导致的意外更改‌
 */
import { klona as jsonClone } from 'klona/json'

export { jsonClone }
