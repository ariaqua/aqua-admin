import request from '@/utils/request'

/**
 * bing wallpaper
 * @param param0 
 * @returns 
 */
interface BingWallpaperParams {
  n?: number // 1 - 8 请求数量
  format?: 'js' | 'xml' // 返回数据格式
  idx?: number // 0 - 15 请求图片截止天数
  mkt?: 'zh-CN' | 'en-US' | 'js-JP' // 地区
}

// interface BingWallpaper {
  
// }

export const getBingWallpapers = ({
  format = 'js',
  idx = 0,
  n = 1,
  mkt = 'zh-CN'
}: BingWallpaperParams = {}) => {
  return request({
    url: 'https://cn.bing.com/HPImageArchive.aspx',
    params: { format, idx, n, mkt },
    headers: {
      Location: 'https://cn.bing.com'
    }
  })
}

export const getRandomBingWallpaper = (d = 0) => {
  return Promise.resolve(`https//api.timecdn.cn/libs/wallpaper/v1?d=${d}`)
}
