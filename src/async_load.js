/**
 * github pages of Cbdy
 * http://jianzhao.org
 */

class PageLoader {

    constructor() {
        this.container = document.querySelector('.markdown-body')
    }

    async load() {
        const path = location.hash.substring(2) || '/blogs/目录'
        return await this.loadPage(path)
    }

    async loadPage(path) {
        const title = path.split('/').pop()
        document.title = title ? decodeURI(title) : '无可奉告'

        const response = await fetch(`${path}.md`)
        if (response.status !== 200) {
            this.container.innerHTML = '<p>无可奉告<p>'
            return
        }
        const content = await response.text()
        this.container.innerHTML = marked(content)
    }
}

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        const loader = new PageLoader
        addEventListener('popstate', () => loader.load())
        loader.load()
    }
}