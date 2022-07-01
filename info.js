/*
{
        name: '',
        tag: [],
        link: '',
		img: '',
		date: '',
        txt: ''
    },
*/

const site = [
    {
        name: 'click-game',
        tag: [0],
        link: 'click-game/index.html',
		img: 'カーソル.jpeg',
		date: '2022.07.01',
        txt: 'クリックしていくだけのゲームです'
    },
]

const tag = [
    'ゲーム',
    'ツール'
];

function $(dom) {
    if (dom.startsWith('.')) {
        return document.getElementsByClassName(dom.replace('.'));
    } else {if (dom.startsWith('#')) {
        return document.getElementById(dom.replace('#',''));
    } else {
        return document.getElementsByTagName(dom);
    }}
}

const $doc = document;
let site_name = location.href.split('/').pop().replace('.html','');
if (site_name == '') {
    site_name = 'index';
}

var new_elm, text_box;
function create(tag) {
    new_elm = $doc.createElement(tag);
}

function apC() {
	text_box.appendChild(new_elm);
}

const loc = {
    href: location.href,
    hash: location.hash.replace('#',''),
    search: Number(location.search.replace('?','')),
}