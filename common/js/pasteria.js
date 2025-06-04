// JavaScript Document
$(document).ready(function() {
	

	// 画像置換
	$(function(){
		var wid = $(window).width();
		if( wid < 641 ){
			$('.switch').each(function(){
				$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
			});
		}
	});

	
	
	
	$(function(){
	var wids = $(window).width();
		if( wids > 641 ){
			
			$("section.bannerArea .banner ul li:last").css("margin-right","0px");
			
			// Smooth Schroll
			$(function(){
				$('a[href^=#]').click(function(){
					var speed = 500;
					var href= $(this).attr("href");
					var target = $(href == "#" || href == "" ? 'html' : href);
					var position = target.offset().top - 65; // -90 = ページ内アンカー位置調整
					$("html, body").animate({scrollTop:position}, speed, "swing");
					return false;
				});
			});
		}else{
			
			$("section.bannerArea .banner ul li:nth-child(2)").css("margin","0px 2%");
			
			// Smooth Schroll
			$(function(){
				$('a[href^=#]').click(function(){
					var speed = 500;
					var href= $(this).attr("href");
					var target = $(href == "#" || href == "" ? 'html' : href);
					var position = target.offset().top; // -90 = ページ内アンカー位置調整
					$("html, body").animate({scrollTop:position}, speed, "swing");
					return false;
				});
			});
		}
	});
	
	


	
	
	

	// 背景を変更
	$("nav ul li a").hover(function() {
	$(this).stop().animate({ backgroundColor: "#115536", color:"#fff" }, 200);　// ホバーで変わる色
	},function() {
	$(this).stop().animate({ backgroundColor: "#204c37", color:"#fff" }, 400);
	});
	
	// 背景を変更
	$(".sideNavi ul li").hover(function() {
	$(this).stop().animate({ backgroundColor: "#ececec", color:"#333333" }, 200);　// ホバーで変わる色
	},function() {
	$(this).stop().animate({ backgroundColor: "#fff", color:"#333333" }, 400);
	});
	


	// Footer Banner Margin除去
	$(function(){
		$('.bannerSet:last-child').css('border-bottom','0px');
	});
	
	
	
	// Sp Navigation
	$(function(){
        $(".headerSp ul li.menu a").on("click", function() {
            $("nav#spNavi").slideToggle();
			return false;
        });
		return false;
    });
	


	
	
	
	
	
	
});


/* Page Top
------------------------------------------ */
$(function() {
	var topBtn = $('#page-top');
	topBtn.hide();
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	

});