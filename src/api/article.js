import request from '@/utils/request'
// 分类：获取文章分类
export const artGetChannelsService = () => request.get('/my/article/cates')
// 分类：添加文章分类
export const artAddChannelService = (data) =>
  request.post('/my/article/addcates', data, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
// 分类：编辑文章分类
export const artEditChannelService = (data) =>
  request.put('/my/article/updatecate', data, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
// 分类：删除文章分类
export const artDelChannelService = (id) =>
  request.delete('/my/article/deletecate/' + id)

// 文章：获取文章列表
export const artGetListService = (params) =>
  request.get(
    '/my/article/list',
    {
      params
    },
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  )

// 文章：添加文章
export const artPublishService = (data) =>
  request.post('/my/article/add', data, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })

// 文章：获取文章详情
export const artGetDetailService = (id) =>
  request.get(
    '/my/article/info',
    {
      params: { id }
    },
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  )

// 文章：编辑文章接口
export const artEditService = (data) =>
  request.post('/my/article/info', data, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })

// 文章：删除文章接口
export const artDelService = (id) =>
  request.delete(
    '/my/article/info',
    { params: { id } },
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  )
