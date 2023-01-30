// 验证规则
export const rules = {
  account: [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号必须是5-10个字符或者数字',
      teigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,12}$/,
      message: '密码必须是6-12个字符或者数字',
      teigger: 'blur'
    }
  ]
}