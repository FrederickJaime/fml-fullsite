var _windowWidth_,
	proteinFullDocHeight;

TweenMax.set("#herobg",{force3D:true});

var heroAnimation = new TimelineMax({paused:true});
heroAnimation.to($("#herobg"), 2, {y:"+=50%",ease:Power2.easeOut}, 0 );

var handAnimation = new TimelineMax({paused:true});
handAnimation.from($(".hand"), 2, {y:"-=25%",ease:Power2.easeOut}, 0 );



$(window).scroll(function(){

		_windowWidth_ = $( window ).width();
		proteinFullDocHeight = $( document ).height();
		/* SCROLLING ANIMATION SYNC FUNCTION : BEGIN */
		var getVert = $(this).scrollTop();

		
		//console.log(getVert+"<-- SCROLL SPOT ");
		var getHor = $(this).scrollLeft();

		/* SCROLLING ANIMATION SYNC FUNCTION : BEGIN */
		var scrollTween = function(startPoint, endPoint, tweenName, type)	
		{
			var progressNumber;
			if(type == 'vertical')
			{
				progressNumber = (1 / (endPoint - startPoint)) * (getVert - startPoint);
			}
			else if (type == 'horizontal')
			{
				progressNumber = (1 / (endPoint - startPoint)) * (getHor - startPoint);
			}
			if (progressNumber >= 0 && progressNumber <= 1)
			{
				tweenName.progress(progressNumber);
			}
			else if(progressNumber < 0)
			{
				tweenName.progress(0);
			}
			else if(progressNumber > 1)
			{
				tweenName.progress(1);
			}
		}
		/*  INDIVIDUAL ANIMATIONS  CALLED */
		
		scrollTween(0, 2000, heroAnimation, 'vertical');
		scrollTween(000, 2000, handAnimation, 'vertical');
		
		/*
		if(_windowWidth_ > 768){
				scrollTween(0, 300, proteinHeroAnimation, 'vertical');
				scrollTween(0, proteinFullDocHeight, proteinSideNavRepo, 'vertical');
				scrollTween(700, 1100, proteinInMilk , 'vertical');
				scrollTween(1100, 2400, proteinRunner  , 'vertical');
				scrollTween(2300, 2400, proteinDpi  , 'vertical');
				scrollTween(3000, 3700, proteinPit  , 'vertical');
				scrollTween(3900, 4800, proteinMom  , 'vertical');
		}
		*/
		


		
});




