/**
 * localForage 是一个 JavaScript 库，通过简单类似 localStorage API 的异步存储来改进你的 Web 应用程序的离线体验。
 * 它能存储多种类型的数据，而不仅仅是字符串。localForage 有一个优雅降级策略，若浏览器不支持 IndexedDB 或 WebSQL，
 * 则使用 localStorage。在所有主流浏览器中都可用：Chrome，Firefox，IE 和 Safari（包括 Safari Mobile）。
 * https://localforage.docschina.org/
 */
import localforage from 'localforage'

/** storage类型 */
export type StorageType = 'local' | 'session'

export function createStorage<T extends object>(type: StorageType, storagePrefix: string) {
	const stg = type === 'session' ? window.sessionStorage : window.localStorage
	const storage = {
		/**
		 * 写入数据
		 *
		 * @param key Session key
		 * @param value Session value
		 */
		set<K extends keyof T>(key: K, value: T[K]) {
			const json = JSON.stringify(value)

			stg.setItem(`${storagePrefix}${key as string}`, json)
		},
		/**
		 * 获取数据
		 *
		 * @param key Session key
		 */
		get<K extends keyof T>(key: K): T[K] | null {
			const json = stg.getItem(`${storagePrefix}${key as string}`)
			if (json) {
				let storageData: T[K] | null = null

				try {
					storageData = JSON.parse(json)
				} catch {}

				if (storageData) {
					return storageData as T[K]
				}
			}
			// 如果获取到的数据无效（例如，解析失败），则从本地存储中删除该键。
			stg.removeItem(`${storagePrefix}${key as string}`)
			return null
		},
		/**
		 * 删除数据
		 *
		 * @param key Session key
		 */
		remove(key: keyof T) {
			stg.removeItem(`${storagePrefix}${key as string}`)
		},
		/**
		 * 清空所有数据
		 */
		clear() {
			stg.clear()
		}
	}
	return storage
}

type LocalForage<T extends object> = Omit<typeof localforage, 'getItem' | 'setItem' | 'removeItem'> & {
	getItem<K extends keyof T>(key: K, callback?: (err: any, value: T[K] | null) => void): Promise<T[K] | null>

	setItem<K extends keyof T>(key: K, value: T[K], callback?: (err: any, value: T[K]) => void): Promise<T[K]>

	removeItem(key: keyof T, callback?: (err: any) => void): Promise<void>
}

type LocalforageDriver = 'local' | 'indexedDB' | 'webSQL'

/**
 * 创建localforage实例
 *
 * @param driver 驱动
 * @returns Localforage实例
 */
export function createLocalforage<T extends object>(driver: LocalforageDriver) {
	// 定义一个驱动映射，将驱动类型映射到Localforage的驱动字符串
	const driverMap: Record<LocalforageDriver, string> = {
		local: localforage.LOCALSTORAGE,
		indexedDB: localforage.INDEXEDDB,
		webSQL: localforage.WEBSQL
	}

	// 配置Localforage实例，设置驱动类型
	localforage.config({
		driver: driverMap[driver]
	})

	return localforage as LocalForage<T>
}
