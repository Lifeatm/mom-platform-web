import { request } from '@/service/request'

// =============== DataTable Begin ===============

/** get data table list */
export function fetchGetAllDataTable() {
	return request<Api.Tools.DataTable[]>({
		url: '/data_table/all_tables',
		method: 'GET'
	})
}

/**
 * 获取所有可以生成代码表管理列表(用于代码生成器)
 */
export function queryAllTablePage(params?: Api.Tools.GeneratorTableSearchParams) {
	return request<Api.Tools.GeneratorTableList>({
		url: '/data_table/all-gen-tables',
		method: 'GET',
		params
	})
}

// =============== DataTable End ===============
