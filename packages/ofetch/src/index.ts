/**
 * ‌介绍：ofetch是一个改进的Fetch API库，适用于Node.js、浏览器和Web Workers。‌ 它提供了更智能的JSON解析、
 * 错误处理、自动重试、超时设置等功能，使得网络请求更加便捷和高效‌
 * ‌1. 智能JSON解析‌：ofetch使用destr库智能解析JSON和原生值，自动处理二进制内容。
 ‌* 2. 错误处理‌：自动抛出错误并提供友好的错误消息和紧凑的堆栈跟踪。
 *‌ 3. 自动重试‌：在特定错误状态下自动重试请求。
 *‌ 4. 超时设置‌：支持设置请求超时时间。
 *‌ 5. 二进制响应支持‌：能够处理二进制响应数据。
 */
import { ofetch } from 'ofetch'
import type { FetchOptions } from 'ofetch'

export function createRequest(options: FetchOptions) {
	const request = ofetch.create(options)

	return request
}

export default createRequest
