/**
 * NProgress是一个轻量级的进度条库，主要用于在页面加载和Ajax请求时显示进度条，提升用户体验‌。它提供了一个细长、优雅的进度条
 */
import NProgress from 'nprogress'

/** Setup plugin NProgress */
export function setupNProgress() {
	NProgress.configure({ easing: 'ease', speed: 500 })

	// mount on window
	window.NProgress = NProgress
}
