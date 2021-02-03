window.addEventListener('load', function () {
	let page2 = document.getElementById("page2");
	let style = document.getElementById("changestyle");
	page2.addEventListener('click', function (){
		window.location.href = "https://itproger.com/course/javascript";
		});
	 changestyle.addEventListener('click', function (){
		document.body.style.backgroundColor = prompt('Change color:', 'green');
	});
});