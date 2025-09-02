/**
 * ‌crypto-js包是一个JavaScript加密库，主要用于在前端进行数据加密和解密操作。‌
 * 功能和用途:
 * crypto-js提供了多种加密算法，包括对称加密算法如AES、DES、Triple DES、RC4等，
 * 以及消息摘要算法如MD5、SHA-1、SHA-256、SHA-3等。此外，它还支持密钥派生函数如PBKDF2，
 * 以及其他工具如HMAC、Base64编码/解码等‌
 */
import CryptoJS from 'crypto-js'

export class Crypto<T extends object> {
	/** Secret */
	secret: string

	constructor(secret: string) {
		this.secret = secret
	}

	/**
	 * 使用AES算法加密数据
	 *
	 * @param data 要加密的数据对象
	 * @returns 加密后的字符串
	 */
	encrypt(data: T): string {
		const dataString = JSON.stringify(data)
		// 使用AES算法和指定的密钥加密JSON字符串
		const encrypted = CryptoJS.AES.encrypt(dataString, this.secret)
		return encrypted.toString()
	}

	/**
	 * 使用AES算法解密数据
	 *
	 * @param encrypted - 要解密的字符串
	 * @returns 解密后的数据对象，如果解密失败则返回null
	 */
	decrypt(encrypted: string) {
		// 使用AES算法和指定的密钥解密字符串
		const decrypted = CryptoJS.AES.decrypt(encrypted, this.secret)
		const dataString = decrypted.toString(CryptoJS.enc.Utf8)
		try {
			return JSON.parse(dataString) as T
		} catch (error) {
			console.error('解析失败:', error)
			return null
		}
	}

	/**
	 * sha256加密
	 *
	 * @param plaintext - 明文
	 */
	static sha256(plaintext: string) {
		return CryptoJS.SHA256(plaintext).toString()
	}
}
