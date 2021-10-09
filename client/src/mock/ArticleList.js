import Mock from 'mockjs';

Mock.mock('/api/article/list', 'get', {
  code: 0,
  msg: 'success',
  'data|5-10': [
    {
      id: '@id',
      title: '@csentence',
      createTime: '@date',
      'tags|1-3': [{
        id: '@id',
        tagName: '@csentence(3, 5)',
      }]
    }
  ]
})