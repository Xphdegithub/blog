import Mock from 'mockjs';

Mock.mock('/api/article/list', 'get', {
  code: 0,
  msg: 'success',
  'data|5-10': [
    {
      title: '@csentence',
      createTime: '@date',
      'tags|1-3': ['@csentence(3, 5)']
    }
  ]
})