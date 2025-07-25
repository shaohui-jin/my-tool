
/**
 * @description 分片执行任务
 * @param data {number | any[]} 任务数据，可以是数字或数组
 * @param taskHandler {Function} 任务处理函数，接收当前任务数据和索引
 * @param scheduler {Function} 调度函数，用于控制任务执行的时机
 * @example
 * const taskHandler = (item: any, index: number) => {
 *   console.log(item, index)
 * }
 *
 * const scheduler = (task: Function) => {
 *   setTimeout(() => {
 *     const now = performance.now()
 *     task(() => performance.now() - now <= 10)
 *   }, 1000)
 * }
 * performChunk(100000, taskHandler, scheduler)
 */
export const performChunk = (data: number | any[], taskHandler: Function, scheduler: Function) =>  {
  let arr: any[] = []
  if (typeof data === 'number') {
    arr = new Array(data).fill(data)
  } else {
    arr = data
  }

  if (arr.length === 0) {
    return
  }

  let i = 0 // 目标应该取出的任务下标
  // 执行一块任务
  function _run() {
    if (i === arr.length) {
      return
    }
    // 一个渲染帧中，空闲时开启分片执行
    scheduler((goOn: Function) => {
      while (goOn() && i < arr.length) {
        taskHandler(arr[i], i)
        i++
      }
      // 此次分片完成
      _run()
    })
  }
  _run()
}

/**
 * 并发请求
 * @param urls 请求集合
 * @param maxNum 并发数量
 * @return {Promise<any[]>}
 * @example const res = concurRequest(["https://jsonplaceholder.typicode.com/posts"], 3)
 */
export const concurRequest = (urls: string[] = [], maxNum: number = 3): Promise<any[]> => {
  // @ts-ignore
  return new Promise((resolve: any, reject: any) => {
    let nextIndex = 0; // 下一个请求的索引
    let finishCount = 0 // 完成的请求数量
    const result: any[] = [] // 请求放置结果

    function _request() {
      if(nextIndex >= urls.length) {
        return
      }
      const i = nextIndex
      const url = urls[nextIndex++]
      fetch(url).then(resp => {
        result[i] = resp
        finishCount++
        if (finishCount === urls.length) {
          resolve(result)
        }
        _request() // 递归调用，下一个请求补位
      })
    }
    for (let i = 0; i < Math.min(maxNum, urls.length); i++) {
      _request()
    }
  })
}
