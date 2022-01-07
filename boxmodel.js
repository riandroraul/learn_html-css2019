const tombol = document.getElementById('tombol1');
const tombo2 = document.getElementById('tombol2');
const card = document.getElementsByClassName('card');




tombol1.addEventListener('click', function () {
	for (var i = 0; i< card.length; i++){
		card[i].style.display = 'inline-block';
	}
});
tombo2.addEventListener('click', function () {
	for (var i = 0; i< card.length; i++){
		card[i].style.display = 'block';
	}
});




// container.style.display = 'block';
// container.addEventListener('copy', function() {
// 	alert('Anda Menyalin Text Ini');
// 	console.log(e);
// });