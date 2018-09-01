/**
 * github pages of Cbdy
 * http://jianzhao.org
 */

const $ = document.querySelector.bind(document)

class PageLoader {

    constructor() {
        this.container = $('div.markdown-body')
    }

    async load() {
        if (location.hash === '') {
            return await this.loadPage(`/blogs/目录`)
        }
        const path = location.hash.substring(2)
        return await this.loadPage(path)
    }

    async loadPage(path) {
        const title = path.split('/').pop()
        this.setTitle(title)
        const response = await fetch(`${path}.md`)
        if (response.status !== 200) {
            this.container.innerHTML = '<p>无可奉告！<p>'
            return
        }
        const content = await response.text()
        this.container.innerHTML = marked(content)
    }

    setTitle(title) {
        document.title = title ? `复读机 - ${decodeURI(title)}` : '复读机'
    }
}

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        const loader = new PageLoader
        addEventListener('popstate', () => loader.load())
        loader.load()
    }
}