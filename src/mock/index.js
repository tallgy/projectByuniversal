import Mock from 'mockjs'
import listVersion from './mock.json.js'

Mock.mock('news/api','get',listVersion);