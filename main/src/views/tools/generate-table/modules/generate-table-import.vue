<template>
	<NModal v-model:show="visible" title="导入表" preset="card" class="w-3/5 h-50vh">
		<NDataTable
			v-model:checked-row-keys="checkedRowKeys"
			remote
			striped
			size="small"
			class="sm:h-full"
			:data="data"
			:scroll-x="962"
			:columns="columns"
			:flex-height="!appStore.isMobile"
			:loading="loading"
			:single-line="false"
			:row-key="(row: TableColumn) => row.id"
			:pagination="mobilePagination" />
		<template #footer>
			<NFlex justify="end">
				<NButton size="small" type="primary" @click="handleImport">确认</NButton>
				<NButton size="small" @click="visible = false">取消</NButton>
			</NFlex>
		</template>
	</NModal>
</template>
<script lang="ts" setup>
	import { NButton, NFormItemGi, NInput, NSelect, NSpace, NSwitch, NDialogProvider, NDialog } from 'naive-ui'
	import { $t } from '@/locales'
	import { useAppStore } from '@/store/modules/app'
	import { ref, computed, watch } from 'vue'
	import { useTable, useTableOperate } from '@/hooks/common/table'
	import { queryAllTablePage, importGenTable } from '@/service/api'

	const appStore = useAppStore()

	type TableColumn = Api.Tools.GeneratorTableColumn

	defineOptions({
		name: 'GenerateTableImport'
	})

	const visible = defineModel<boolean>('visible', {
		default: false
	})

	watch(visible, () => {
		if (visible.value) {
			getData()
		}
	})

	const { columns, columnChecks, data, loading, getData, getDataByPage, mobilePagination, searchParams, resetSearchParams } = useTable({
		apiFn: queryAllTablePage,
		apiParams: {
			page: 1,
			pageSize: 20
		},
		columns: () => [
			{
				type: 'selection',
				align: 'center',
				fixed: 'left'
			},
			{
				key: 'index',
				title: $t('common.index'),
				width: 50,
				align: 'center'
			},
			{
				key: 'tableName',
				title: $t('page.tools.generateTable.tableName'),
				align: 'center',
				width: 200
			},
			{
				key: 'tableComment',
				title: $t('page.tools.generateTable.tableComment'),
				align: 'center',
				width: 200
			},
			{
				key: 'createTime',
				title: $t('common.createTime'),
				align: 'center',
				width: 200
			},
			{
				key: 'updateTime',
				title: $t('common.updateTime'),
				align: 'center',
				width: 200
			}
		]
	})

	const { checkedRowKeys, getCheckedFieldValues, editingData, operateType, onDeleted, onBatchDeleted } = useTableOperate(data, getData)

	/**
	 * 导入表
	 */
	async function handleImport() {
		console.log()
		const tableNames: string[] = getCheckedFieldValues('tableName').filter((name): name is string => !!name)
		if (tableNames.length === 0) {
			window.$message?.warning('请至少选择一张表')
			return
		}
		const { error, data: result } = await importGenTable(tableNames)
		if (!error && result) {
			window.$message?.success('导入成功')
			// visible.value = false
		}
	}
</script>
