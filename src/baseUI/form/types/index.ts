type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
}
export interface IForm {
  formItems: IFormItem[]
  lableWidth?: string
  colLayOut?: any
  itemStyle?: any
}
