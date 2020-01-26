export interface IArticle {
  dir: string,
  base: string
}

export function makeUrl(article: IArticle) {
  return `${article.dir.split('content').join('')}/${article.base.split('.json').join('')}`
}

export function filterPosts(summaryJson: any) {
  return summaryJson && summaryJson.fileMap && Object.keys(summaryJson.fileMap)
    // @ts-ignore
    .filter((file) => {
      if (file.indexOf('content/posts') === 0) {
        return true
      }
    }).map((file) => {
      return summaryJson.fileMap[file]
    }).sort((a, b) => {
      const aDate = Date.parse(a.date)
      const bDate = Date.parse(b.date)
      return (bDate > aDate) ? 1 : (bDate < aDate) ? -1 : 0
    })
}
