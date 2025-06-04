$(document).ready(function() {
	$(function(){
		$('.footerBanner ul li:last-child').css('margin-right','0px');
	});
	
	$(function() {
		$('nav.pc ul li:nth-child(1)').addClass('active');
	});
	
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 708) {
			$(".fixedNaviCover").slideDown();
		} else {
			$(".fixedNaviCover").fadeOut("fast");
		}
	});
	

	// paralax bg
	function paraBgEdit(){
		
		var DisplayWidth = $(window).width();
		
		// 現在位置の取得
		/*
		var dElm = document.documentElement , dBody = document.body ;
		var nY = dElm.scrollTop || dBody.scrollTop ;		// 現在位置のY座標
		alert( "縦方向のスクロール量:" + nY ) ;
		*/
		
		$("div#paraChange").html('<div id="paraBg" data-0="background-position:0px 200px;" data-2200="background-position:0px -400px;"></div>');
		
		
		// ParaBG HTML EDIT
		/*
		if (DisplayWidth > 641) {
			$("div#paraChange").html('<div id="paraBg" data-4000="background-position:0px -200px;" data-5500="background-position:0px 200px;"></div>');
		}
		*/
		/*
		if (DisplayWidth > 641) {
			$("div#paraChange").html('<div id="paraBg" data-3500="background-position:0px -200px;" data-6500="background-position:0px 200px;"></div>');
		}else if((DisplayWidth > 0) &&(DisplayWidth < 640)){
			$("div#paraChange").html('<div id="paraBg" data-1300="background-position:0px 0px;" data-3000="background-position:0px 0px;"></div>');
		}
		*/
	}
	paraBgEdit();
	
	/* ParaBG */
	$(function(){
		var uac = navigator.userAgent;
		if(uac.indexOf('iPhone') > 0 || uac.indexOf('iPad') > 0 || uac.indexOf('Android') > 0){
			
		}else{
			var s = skrollr.init({forceHeight:false});	
		}
	});	
	
	$('.bxslider').bxSlider({
		auto:true, 　　//自動で動くか否か
		speed:1000,　　//スライド動作の速度。ミリ秒指定。デフォルトでは500です。
		pause:3000,  　//スライド動作するまでの時間。あんまり短いとせわしないです。
		mode: 'fade',　//スライドするときのエフェクト、フェードイン、フェードアウトで切り替わります。''ではさむ
		pager: true,　//1枚目～4枚目みたいな表記。trueで表示。falseで非表示
		controls: true　//次へ＞前へ＜の表示、非表示。trueで表示。falseで非表示。
	});
		
});


$(function() {
	$.ajax({
		   type: 'GET',
		   url: '/news/top_news_ajax.html',
		   dataType: 'html',
		   success: function(data) {
			   	var DisplayWidth = $(window).width();
				if (DisplayWidth > 641) {
					 $('.newsAjax').append(data);
				   $('.newsAjax .loading').css("display","none");
				   $(".columnEntry .columnSet:last").css("margin-right","0px");
				}else{
						 $('.newsAjax').append(data);
				   $('.newsAjax .loading').css("display","none");
					$(".columnEntry .columnSet:nth-child(4)").css("clear","both");
				}
		   },
		   error:function() {
			   //alert('フィードの読み込みに失敗しました');
		   }
	});
});