{/* <div id="contents">
            <h1>すべてのコンテンツ</h1>
            <div class="page">
                <span class="page_tag">#a</span><br>
                <span class="page_image"><img src="favicon.jpeg" alt="favicon" align="left" width="50px" height="50px"></span>
                <a href="#" class="page_name">aaaa</a>
                <span class="page_date">最終更新日. 2022.6.30</span>
            </div>
        </div> */}

//未来の私へ　if文の中、全部tabやってぇ(伝われ)

//---------------page---------------
for (i=0; i<site.length; i++) {
	if (site_name == 'index' || site[i].tag.includes(loc.search)) {
	 //div.page
	text_box = $('#contents');
    create('div');
    new_elm.className = 'page';
    new_elm.id = 'page' + i;
    apC();
	
	 //a.page_tag
    for (i2=0; i2<site[i].tag.length; i2++) {
		text_box = $('#page'+i);

        create('a');
        new_elm.href = 'tag.html?' + site[i].tag[i2];
        new_elm.innerText = '#' + tag[site[i].tag[i2]];
        new_elm.className = 'page_tag';
        apC();

        create('span');
        new_elm.innerText = ' ';
        apC();
    }
	
	 //br
	create('br');
	apC();
	
	//img.page_img
	create('img');
	new_elm.className = 'page_img';
	new_elm.src = 'img/' + site[i].img;
	new_elm.alt = 'img';
	apC();
	
	//a.page_name
	create('a');
	new_elm.className = 'page_name';
	new_elm.innerText = site[i].name;
	new_elm.href = site[i].link;
	apC();
	
	//span.page_date
	create('span');
	new_elm.className = 'page_date';
	new_elm.innerText = '最終更新日. ' + site[i].date;
	apC();
	
	//hr.page_hr
	create('hr');
	new_elm.className = 'page_hr';
	apC();
	
	//div.page_txt
	create('div');
	new_elm.className = 'page_txt';
	new_elm.innerHTML = site[i].txt;
	apC();
	}
}

//---------------tag---------------
for (i=0; i<tag.length; i++) {
	text_box = $('#tag_ul');
	
	//li#tag_li+i
	create('li');
	new_elm.id = 'tag_li' + i;
	apC();
	text_box = $('#tag_li' + i);
	
	create('a');
	new_elm.href = 'tag.html?' + i;
	new_elm.innerText = '#' + tag[i];
	apC();
}

if (site_name != 'index') {
	$('#contents_h1').innerText = '#' + tag[loc.search];
}