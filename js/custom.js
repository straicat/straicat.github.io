(function(){   
    const tocContainer = document.getElementById('post-toc');
    if (tocContainer !== null) {
        const toc = document.getElementById('TableOfContents');
        if (!toc.hasChildNodes()) {
            tocContainer.parentNode.removeChild(tocContainer);
        }
    }
    
    const editUrlMeta = document.head.querySelector('meta[property="editUrl"]');
    const postMeta = document.querySelector('.post-meta');
    if (editUrlMeta !== null && postMeta != null) {
        let editUrlSpan = document.createElement("span");
        editUrlSpan.setAttribute("class", "more-meta");
        editUrlSpan.innerHTML = '<a href="' + editUrlMeta.content + '" target="_blank" style="color: #8a8a8a;">编辑</a>';
        postMeta.appendChild(editUrlSpan);
    }
})();

function genFrontMatter(title) {
    title = title || "";
    let t = new Date(),_;
    let dt = `${t.getFullYear()}-${(_=t.getMonth()+1)<10?'0'+_:_}-${(_=t.getDate())<10?'0'+_:_}`;
    console.log(`${dt}-${title}
---
title: "${title}"
date: ${dt}T${(_=t.getHours())<10?'0'+_:_}:${(_=t.getMinutes())<10?'0'+_:_}:${(_=t.getSeconds())<10?'0'+_:_}+08:00
tags: []
slug: "${parseInt((t.getTime()/1000-765648000)/60).toString(36)}"
---`)
}
