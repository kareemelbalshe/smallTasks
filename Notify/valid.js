var notify = document.querySelector('.notify');
var btn = document.querySelector('.btn');
btn.addEventListener('click', active);

function active(){
	var add = Number(notify.getAttribute('data-count'));
	notify.setAttribute('data-count', add + 1);
	if (add === 0) {
		notify.classList.add('add-numb');
	}
}















// linear-gradient(#ff4d4d,#ff3333,#ff1a1a);