window.onload = () => {
    keywords = /`(.*?)`/g

    specials = /\[(.*?)\](.*?)\[\/\1\]/g
    specials_dict = {
        'lang' : (this,lang)=>{
            langs = {
                'pl':"Polski :pl:",
                "en":"English :en:"
            }
            this.innerHTML = langs[lang]

        }
    }
    document.body.innerHTML = document.body.innerHTML.replace(keywords,"<span class='keywords'>$1</span>")

    document.body.innerHTML = document.body.innerHTML.replace(specials,"<span onload='specials_dict[\"$1\"](this,\"$2\")'>$2<span>")
}