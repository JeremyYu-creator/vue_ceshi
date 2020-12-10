import Mock from 'mockjs'
Mock.setup({

  timeout: 500 // 延迟效果

})

// 拦截请求并返回数据

Mock.mock('login/', 'post', {

  code: 200, // 状态码

  userid: '@id()', // 随机生成用户id

  username: '@cname()', // 随机生成中文名字

  date: '@date()', // 随机生成日期

  avatar: "@image('200x200','red','#fff','avatar')", // 生成图片

  description: '@paragraph()', // 描述

  ip: '@ip()', // IP地址

  email: '@email()'// email

})
