window.onload = () => {
    keywords = /`(.*?)`/g
    document.body.innerHTML = document.body.innerHTML.replace(keywords,"<span class='keywords'>$1</span>")
}