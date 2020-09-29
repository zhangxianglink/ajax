getCSS.onclick = () => {
     const request = new XMLHttpRequest();
     request.open('GET','/style.css');
     request.onreadystatechange = () => {
         if(request.status === 200 && request.readyState === 4){
             const res = request.response;
             const css = document.createElement('style');
             css.innerHTML = res;
             document.body.appendChild(css);
         }
     };
     request.send();
};
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/1.js');
    request.onreadystatechange = () => {
        if(request.status === 200 && request.readyState === 4){
            const res = request.response;
            const css = document.createElement('script');
            css.innerHTML = res;
            document.body.appendChild(css);
        }
    };
    request.send();
};
getXMl.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/1.xml');
    request.onreadystatechange = () => {
        if(request.status === 200 && request.readyState === 4){
           const xmlData = request.responseXML;
           console.log(xmlData)
           const str = xmlData.getElementsByTagName("warning")[0].textContent.trim();
           const div = document.createElement('div');
           div.innerHTML = `<h2>${str}</h2>`;
           msg.appendChild(div);
        }
    };
    request.send();
};
let n = 0;
getPage.onclick = () => {
	n += 1;
	const request = new XMLHttpRequest();
	request.open('GET',`/page${n}.json`);
	request.onreadystatechange = () => {
		if(request.readyState === 4 && request.status === 200){
			const jsonObj = JSON.parse(request.response);
			jsonObj.forEach(e => {
				const li = document.createElement('li');
				li.textContent = e.id;
				pageUl.appendChild(li);
			});
		}
	};
	request.send();
};