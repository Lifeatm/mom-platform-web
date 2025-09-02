import { createApp } from 'vue'
import './plugins/assets'
import { setupAppVersionNotification, setupDayjs, setupIconifyOffline, setupLoading, setupNProgress, setupNSetting } from './plugins'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupI18n } from './locales'
import App from './App.vue'

async function setupApp() {
	// 加载状态
	setupLoading()

	// 加载进度条
	setupNProgress()

	// 加载图标
	setupIconifyOffline()

	// 加载时间
	setupDayjs()

	// 加载设置
	setupNSetting()

	const app = createApp(App)

	// 加载状态管理
	setupStore(app)

	// 加载路由
	await setupRouter(app)

	// 加载国际化
	setupI18n(app)

	// 加载版本更新
	setupAppVersionNotification()

	app.mount('#app')
}
setupApp()
