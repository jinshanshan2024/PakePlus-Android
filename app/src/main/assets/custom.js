window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    if(!origin) return;

    // 如果a标签带download属性，是文件下载，直接放行，不跳转页面，防止白屏
    if(origin.hasAttribute('download')){
        return;
    }

    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    // 简单判断下载链接，不强行location.href
    if(url.includes('.zip')||url.includes('.rar')||url.includes('.7z')||url.includes('/download')){
        return;
    }
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })

// 域名调试代码
document.addEventListener('DOMContentLoaded', function(){
function repairLink(){
    const currentHost = window.location.host;
    const mainDomain = "elephant.animalobservation.com";
    console.log("当前域名："+currentHost);
}
repairLink();
setInterval(repairLink,1200);
});
