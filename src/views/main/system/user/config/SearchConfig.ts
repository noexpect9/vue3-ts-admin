import { IForm } from '@/baseUI/form'

export const SearchConfig: IForm = {
  lableWidth: '120px',
  itemStyle: {
    padding: '5px 30px'
  },
  colLayOut: {
    span: 8
  },
  formItems: [
    {
      type: 'input',
      label: 'ID',
      rules: [],
      placeholder: '请输入ID'
    },
    {
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        { title: '启用', value: 'enable' },
        { title: '禁用', value: 'disable' }
      ]
    },
    {
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
