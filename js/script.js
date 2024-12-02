// $(function() { // 보이기 | 숨기기 
// 	$(window).scroll(function() { 
// 		if ($(this).scrollTop() > 250) { //250 넘으면 버튼이 보여짐니다. 
// 			$('.top_btn').fadeIn(); 
// 			$('.top_btn').css('left', $('#sidebar').offset().left); // #sidebar left:0 죄표 
// 		} else { 
// 			$('.top_btn').fadeOut(); 
// 		} 
// 	}); 
// 	// 버튼 클릭시 
// 	$(".top_btn").click(function() {
// 		$('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동합니다. 
// 		}, 400); // 속도 400 return false; 
// 	}); 
// });

document.addEventListener(`DOMContentLoaded`, function () {
	const topBtn = document.querySelector(`.top_btn`);

	window.addEventListener(`scroll`, function () { 
		const scrollData = window.scrollY;
		// console.log(scrollTop);

		if (scrollData >= 300) {
			topBtn.classList.add(`scroll`);
		} else {
			topBtn.classList.remove(`scroll`);
		}
	});

	topBtn.addEventListener(`click`, function () { 
		window.scrollTo({
			top: 0,
			behavior:'smooth'
		})
	});
});
