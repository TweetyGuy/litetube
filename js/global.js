head.js(["https://www.googletagmanager.com/gtag/js?id=UA-111265614-2"], function() {
	/* Google Analytics */
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'UA-111265614-2');
	gtag('set', {'user_id': 'USER_ID'});
});

/* Quantcast */
var _qevents = _qevents || [];

/* Metrika */
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(55927615, "init", {
	clickmap:true,
	trackLinks:true,
	accurateTrackBounce:true
});

head.js(["/js/cookie.js"], function() {
	window.setlang = function(l) {
		Cookies('lang', l);
	}
});

function checktheme() {
	if (localStorage.getItem('darkmode') == true) {
		!function(d){d.head.appendChild(d.createElement("style")).innerText="html,img,video{-webkit-filter:invert(1)hue-rotate(180deg);filter:invert(1)hue-rotate(180deg)}body{background:#000}"}(document);
		document.getElementById("themebtn").outerHtml = "<a href='javascript:localStorage.setItem('darkmode',false);checktheme();' id='themebtn'>Light Mode</a>";
	}
}
