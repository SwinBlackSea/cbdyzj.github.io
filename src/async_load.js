/**
 * github pages of Cbdy
 * http://jianzhao.org
 */

const navigator = {
    getContainer: () => document.querySelector('.markdown-body'),
    async navigate() {
        const path = location.hash.substring(2) || '/index'
        const title = path.split('/').pop()
        document.title = title ? decodeURI(title) : '无可奉告'

        const response = await fetch(`${path}.md`)
        if (response.status !== 200) {
            this.getContainer().innerHTML = '<p>无可奉告<p>'
            return
        }
        const content = await response.text()
        this.getContainer().innerHTML = marked(content)
    }
}

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        addEventListener('popstate', () => navigator.navigate())
        navigator.navigate()
    }
}