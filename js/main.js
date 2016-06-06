var loaded1 = false;
var loaded2 = false;
var loaded3 = false;
var loaded4 = false;
var loaded5 = false;
var preload;
var preloaderTimeout = 500;
var vid, videoType;
var windowHeight, windowWidth, halfWindowWidth, halfWindowHeight;
var currentPage;

var options = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix : '', 
    suffix : '' 
}
var digitsScrolled = false;

// PROJECTS
var projects = ['','','','','','','','','','','','','','','','','','','','',''];
var project1, project2, project3, project4, project5, project6, project7, project8, project9, project10, project11, project12, project13, project14, project15, project16, project17, project18, project19, project20, project21;
var projectSet1, projectSet2, projectSet3, projectSet4, projectSet5, projectSet6, projectSet7;

var newProjectNo1;
var newProjectNo2;
var newProjectNo3;

var newProject1;
var newProject2;
var newProject3;

var totalProjectsCalculated = false;
var totalProjects;
var totalProjectSets;

// DIRECTORS
var directors = ['','','','','','','','','','','','','','','','','','','',''];
var director1, director2, director3, director4, director5, director6, director7, director8, director9, director10, director11, director12, director13, director14, director15, director16, director17, director18, director19, director20;
var directorSet1, directorSet2, directorSet3, directorSet4, directorSet5, directorSet6, directorSet7, directorSet8, directorSet9, directorSet10, directorSet11, directorSet12, directorSet13, directorSet14, directorSet15, directorSet16, directorSet17, directorSet18, directorSet19, directorSet20;;

var newDirectorNo1;
var newDirectorNo2;

var newDirector1;
var newDirector2;
var newDirector3;

var totalDirectorsCalculated = false;
var totalDirectors;
var totalDirectorSets;

var scrollActive = true;

var closeMoving;

var panoSizeX;
var panoSizeY;
var panoAngleIntensity

var panoramaMouseX;
var panoramaMouseY;
var panoramaAngleY;
var panoramaAngleX;
var panoMouseXBase;
var panoHalf;
var panoHalfHeight;

var panoFallback = false;
var panoFallbackVar = 1;

var videoSweepBrowser;
var preloaderVidUnmask = true;

var mouseInactive = false;

// ELEMENT VARIABLE DECLARATION
var wrapper = $('.wrapper');
var mainTitle = $('.js-main-title');
var pageTitle = $('.page-title');
var listNav = $('.list-nav');
var body = $('body');
var indicatorNavWrap = $('.indicator-nav');
var indicatorNav = $('.indicator-nav .indicator');
var protector = $('.protector');
var workLetterOneHitArea = $('.letter-list .letter-wrap:nth-child(1) .hit-area, .letter-list .letter-wrap:nth-child(1) .work-content');
var workLetterTwoHitArea = $('.letter-list .letter-wrap:nth-child(2) .hit-area, .letter-list .letter-wrap:nth-child(2) .work-content');
var workLetterThreeHitArea = $('.letter-list .letter-wrap:nth-child(3) .hit-area, .letter-list .letter-wrap:nth-child(3) .work-content');
var fullSizeDiv = $('.js-full-size');
var littlStar = $('.littlstar-player');
var fillScreenVid = document.getElementById("js-vid-fill-screen");
var fillScreenVidJQ = $('#js-vid-fill-screen');
var mainContent = $('main');
var bodyElement = $('body');
var ThreeDPanoParent = $('.threed-panorama');
var mountainsBG = $('.mountains-bg');
var mountainsBgIMG = $('.mountains-bg-img');
var homePanoTitle = $('.threed-panorama .main-title');
var vidClickContainer = $('.vid-click-transition');
var vidClickContainerVideo = $('.vid-click-transition video');
var vidClickFallback = $('.vid-click-fallback');
var openMap = $('.js-open-map');
var mobRemove = $('.mob-remove');

var youTubePlaying = true;
var project_YouTube = $('.hero .youtube-embed');
var project_PositionChecker = $('.position-checker');
var project_PositionCheckerLow = $('.position-checker-low');
var project_ParallaxHero = $('.parallax-hero');
var turnedOff = $('*[data-turned-off="off"]');

var mobListBtn = $('.mob-list-btn');

var thisNodeLink
var allHomeNodes=['', '', '', '', '', '', '', '', '', ''];
var homeNode=['', '', '', '', '', ''];
var overlayNodes = $('.overlay-nodes .pano-icon');
// IN ORDER THESE MEAN:
// NODE X POS, NODE Y POS, TITLE 1, TITLE 2, CONTENT H@
var closeCursor = $('.close-cursor');

var pageChangeVeil = $('.js-page-change-veil');
var panoramaObject = $('.panorama-object');
var innerPanoramaObject = $('.inner-panorama-object');
var radarSpin = $('.js-radar-spin');
var externalLink = $('.js-external-link');
var openPanoContent = $('.js-open-pano-content');
var closePanoContent = $('.js-close-pano-content');
var panoContent = $('.pano-overlay-content');
var movieBars = $('.movie-bars');
var projectNav = $('nav.project-nav');
var nextPrevNav = $('nav.left-nextprev');

var openContact = $('.js-open-contact');
var closeContact = $('.js-close-contact');
var contactWrap = $('.contact-wrap');
// var openPanoContent = $('.js-open-pano-content');

$(document).ready(function() {

	detectBrowser();
	sizeHandler();

	// RUNTIME DELETING
	turnedOff.each(function() {
      	$(this).remove();
    });

	typeFormatting();
	// fillScreenVid.playbackRate = 1.3;
	randomiseSmokeDirection();
	setTimeout(function(){
		loadSite();
	}, 250);
	setTimeout(function(){
		TweenMax.to(pageChangeVeil,
			0.3, {
				opacity: 0,
				ease: 'linear'
			}
		);
		setTimeout(function(){
			pageChangeVeil.remove();
			
		}, 400);
	}, 50);

	// BUTTON INTERACTIONS

	setTimeout(function(){

		var openPanoContent = $('.js-open-pano-content');
		var btnTransition = $('.js-button-transition');

		btnTransition.on('click', function(e){
			$(this).off();
			e.preventDefault();
			linkURL = $(this).attr('href');
			if (typeof linkURL == 'undefined') {
				linkURL = $(this).attr('data-transition-link');
			}
			
			if (videoSweepBrowser == 'true') {
				vidClickContainerVideo.addClass('active');
				setTimeout(function(){
					document.getElementById("js-click-vid").playbackRate = 2.2;
					document.getElementById("js-click-vid").play();
			   		TweenMax.to(vidClickContainer,
						0.2, {
							opacity: 1,
							ease: 'linear'
						}
					);
					setTimeout(function(){
						bodyElement.remove();
						setTimeout(function(){
							location.href=linkURL;
						},100);
						
					},1100);
				}, 20);
				return false;
			} else {
				// alert(vidClickFallback);
				vidClickFallback.show();
				setTimeout(function(){
					vidClickFallback.addClass('active');
				},20);
				setTimeout(function(){
					bodyElement.remove();
					setTimeout(function(){
						location.href=linkURL;
					},10);
				},580);
			}	
		});

		openPanoContent.on('click', function(e){
			thisNodeLink=$(this);
			openPanoContentOverlay();
		});

	}, 200);

	$('.js-pause-vid')
	.on('mouseover', function(e){
		fastVideoMask(document.getElementById("two-one"));
	});

	$('.js-pause-vid')
	.on('mouseout', function(e){
		slowVideoMask(document.getElementById("two-one"));
	});

	$('.js-next-aspect').on('click', function(e){
		nextAspect();
	});

	$('.js-prev-aspect').on('click', function(e){
		prevAspect();
	});

	$('.js-open-list-nav').on('click', function(e){
		activateListNav();
	});

	$('.js-close-list-nav').on('click', function(e){
		deactivateListNav();
	});

	mobListBtn.on('click', function(e){
		if ($('main.mob-nav-active').length) {
			mainContent.removeClass('mob-nav-active');
		} else {
			mainContent.addClass('mob-nav-active');
		}
	});

	openContact.on('click', function(e){
		openContactWrap();
	});

	closeContact.on('click', function(e){
		closeContactWrap();
	});

	closePanoContent.on('click', function(e){
		closePanoContentOverlay();
	});

	externalLink.on('click', function(e){
		linkURL = $(this).attr('data-external-link');
		window.open(linkURL,'_blank');
	});

	openMap.on('click', function(e){
		iframeCode='<iframe class="pos-a-t-l full-size google-map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCo7OXHH3sjuNoOWEarvpLGk_rFveWHKcg&q=Airmatek+-+Consultora+de+Marketing+Digital"  frameborder="0" style="border:0" allowfullscreen></iframe>"'
		$('.contact-image').append(iframeCode);
	});

	workLetterOneHitArea.on('mouseenter', function(e){
		$('.vertigo-bg .project-bg:nth-child(2), .letter-list .letter-wrap:nth-child(1) .work-content').addClass('active');
	});
	workLetterOneHitArea.on('mouseleave', function(e){
		$('.vertigo-bg .project-bg:nth-child(2), .letter-list .letter-wrap:nth-child(1) .work-content').removeClass('active');
	});

	workLetterTwoHitArea.on('mouseenter', function(e){
		$('.vertigo-bg .project-bg:nth-child(3), .letter-list .letter-wrap:nth-child(2) .work-content').addClass('active');
	});
	workLetterTwoHitArea.on('mouseleave', function(e){
		$('.vertigo-bg .project-bg:nth-child(3), .letter-list .letter-wrap:nth-child(2) .work-content').removeClass('active');
	});

	workLetterThreeHitArea.on('mouseenter', function(e){
		$('.vertigo-bg .project-bg:nth-child(4), .letter-list .letter-wrap:nth-child(3) .work-content').addClass('active');
	});
	workLetterThreeHitArea.on('mouseleave', function(e){
		$('.vertigo-bg .project-bg:nth-child(4), .letter-list .letter-wrap:nth-child(3) .work-content').removeClass('active');
	});

	$('.directors .js-hit-area').on('mouseover', function(e){
		$(this).closest('.director').addClass('hover');
	});
	$('.directors .js-hit-area').on('mouseout', function(e){
		$(this).closest('.director').removeClass('hover');
	});

	$('.director:nth-child(1) .js-hit-area').on('click', function(e){
		deactivateNavs();
		scrollActive = false;

		newDirectorVidContent = directors[newDirectorNo1];
		videoID = newDirectorVidContent[5];
		videoStartPoint = newDirectorVidContent[7];
		player.cueVideoById({
			videoId:videoID,
            startSeconds:videoStartPoint
        });
		$('.director-showcases .lockup h4').text(newDirectorVidContent[6]);
		$('.directors').addClass('showcase-active-left');
		
		setTimeout(function(){
			player.playVideo();
		   	setTimeout(function(){
		   		$('.youtube-embed').addClass('active');
			}, 500);
		}, 1000);
		$(this).closest('.director').removeClass('hover');
	});

	$('.director:nth-child(2) .js-hit-area').on('click', function(e){
		deactivateNavs();
		scrollActive = false;

		newDirectorVidContent = directors[newDirectorNo2];
		videoID = newDirectorVidContent[5];
		videoStartPoint = newDirectorVidContent[7];
		player.cueVideoById({
			videoId:videoID,
            startSeconds:videoStartPoint
        });
		$('.director-showcases .lockup h4').text(newDirectorVidContent[6]);
		$('.directors').addClass('showcase-active-right');
		
		setTimeout(function(){
			player.playVideo();
		   	setTimeout(function(){
		   		$('.youtube-embed').addClass('active');
			}, 500);
		}, 1000);
		$(this).closest('.director').removeClass('hover');
	});

	$('.js-close-director-showcase').on('click', function(e){
		activateNavs();
		scrollActive = true;
		setTimeout(function(){
		   	player.stopVideo();
		   	$('.youtube-embed').removeClass('active');
		}, 800);
		$('.directors').removeClass('showcase-active-left');
		$('.directors').removeClass('showcase-active-right');
		$('.director-showcases').removeClass('full-screen');
	});

	$('.director-showcases .js-hit-area').on('mouseover', function(e){
		activateCloseBtn();
	});

	$('.director-showcases .js-hit-area').on('mouseout', function(e){
		deactivateCloseBtn();
	});

	$('.js-expand-director-vid').on('click', function(e){
		$('.director-showcases').toggleClass('full-screen');
	});

});

$(window).resize(function() {

	sizeHandler();

}); // END OF RESIZE

function sizeHandler() {
	windowWidth = $(window).innerWidth();
	windowHeight = $(window).height(); 
	halfWindowWidth = windowWidth / 2;
	halfWindowHeight = windowHeight / 2;
	fullSizeDiv.css({ 
		width : windowWidth,
	    height : windowHeight
    });

	if( windowWidth <= 900) {
		body.addClass('touch-logic');
		videoSweepBrowser = 'false';
		mobRemove.remove();
	} else {
		body.removeClass('touch-logic');
	}
}

function projectScrollHandler() { 
	scrolledY = wrapper.scrollTop();
	if (scrolledY >= 70 && youTubePlaying == true) {
		youTubePlaying = false;
		// project_YouTube.hide();
		player.pauseVideo();
	} else if (scrolledY <= 70 && youTubePlaying == false) {
		// project_YouTube.show();
		player.playVideo();
		youTubePlaying = true;
	}

	$('.kill-out-of-window').each(function() {
      	killOutOfWindow($(this));
    });
	
	project_PositionChecker.each(function() {
      	positionChecker($(this));
    });
    project_PositionCheckerLow.each(function() {
      	positionChecker($(this), 'low');
    });
    project_ParallaxHero.each(function() {
      	parallax($(this), 'low');
    });
    // $('.parallax-content').each(function() {
    //   	parallaxContentVert($(this));
    // });
    // $('.parallax-content-horiz').each(function() {
    //   	parallaxContentHoriz($(this));
    // });
    // $('.parallax-content-full').each(function() {
    //   	parallaxContentFull($(this));
    // });
    $('.letter-split-scroll').each(function() {
      	letteringScroll($(this));
    });

    if ($('section.numbers').length) {
    	dataOffset = $('section.numbers').offset();
	    if((dataOffset.top - (windowHeight/1.7) <= 0) && digitsScrolled == false) {
	    	projectDigitCounter();
	    }
    }

}

function projectDigitCounter(e) {

		digitsScrolled = true;
		digit1 = $('.perch-digit-1-result').text();
		digit2 = $('.perch-digit-2-result').text();
		digit3 = $('.perch-digit-3-result').text();
		var dataCount1 = new CountUp("digit-1", 0, digit1, 0, 2, options);
		var dataCount2 = new CountUp("digit-2", 0, digit2, 0, 3, options);
		var dataCount3 = new CountUp("digit-3", 0, digit3, 0, 4, options);
		dataCount1.start();
		dataCount2.start();
		dataCount3.start();
	
}

function killOutOfWindow(e) {
	thisOffset = e.offset().top;
	thisStart = thisOffset - windowHeight;
	thisEnd = thisOffset + windowHeight;
	if (thisStart <= 0 && thisEnd >= 0) {
		e.removeClass('hidden');
	} else {
		e.addClass('hidden');
	}
}

function positionChecker(e, l) {
	tempOffset = e.offset();

	if (l == 'low') {
		scrollTrigger = 1;
	} else {
		scrollTrigger = 1.18;
	}
	if(tempOffset.top - (windowHeight/scrollTrigger) <= 0) {
		e.addClass('visible');
	} else {
		e.removeClass('visible');
	}
}

function letteringScroll(e) {
	tempOffset = e.offset();
	if(tempOffset.top - (windowHeight/scrollTrigger) <= 0) {
		e.addClass('visible');
	} else {
		e.removeClass('visible');
	}
}

function parallax(e) {
	parallaxY = scrolledY * 0.8;
	e.css({ 
	    'transform' : 'translateY('+parallaxY+'px)'
    });
}

function parallaxContentHoriz(e) {
	tempOffset = e.offset().top;
	speed = e.attr('data-speed');
	parallaxX = ((windowHeight/2) - tempOffset ) * -speed;
	e.css({ 
	    'transform' : 'translateX('+parallaxX+'px)'
    });
}

function parallaxContentVert(e) {
	tempOffset = e.offset().top;
	speed = e.attr('data-speed');
	parallaxY = ((windowHeight/2) - tempOffset ) * -speed;
	e.css({ 
	    'transform' : 'translateY('+parallaxY+'px)'
    });
}

function parallaxContentFull(e) {
	tempOffset = e.offset().top;
	parallaxY = (tempOffset / windowHeight)*-200;
	e.css({ 
	    'transform' : 'translateY('+parallaxY+'px)'
    });
}

if ($('.work-list-nav').length) {
	$('.work-list-nav li.project-list-item').each(function() {
		projLetter = $(this).find('.project-name').text();
		projLetter = projLetter.charAt(0);
		projLetter = projLetter.toLowerCase();
		$(this).find('.list-img-wrap').attr('data-mask-letter', projLetter);
    });
}

if ($('.work').length) {
	$('.main-nav li:nth-child(3)').addClass('active');
	currentPage = 'work';
	currentProjects = 1;
	registerProject(0);

	setTimeout(function(){
	   	changeWorkContent(currentProjects); // NUMBER IS NEW SET - so 1-6 of the sets of three.
	   	changeProjectContent(1); changeProjectContent(2); changeProjectContent(3);
	}, 100);

	moveIndicatorNav(totalProjectSets, currentProjects);
}

if ($('.project').length) {

	setTimeout(function(){
	   	if ($('body.touch-logic').length) {
	   		projectDigitCounter();
			project_PositionChecker.removeClass('position-checker');
			project_PositionCheckerLow.removeClass('position-checker-low');
			$('.letter-split-scroll').removeClass('letter-split-scroll');
		} else {
			$('.wrapper').scroll(function() {
				projectScrollHandler();
			});  // END OF SCROLL
		}

	}, 1000);

	$('.project-nav li:nth-child(1) h4').text($('.perch-project-title').text());
	$('.project-nav li:nth-child(2) h4').text($('.perch-project-client').text());

	projLetter = $('.perch-project-title').text();	   	
	projLetter = projLetter.charAt(0);
	projLetter = projLetter.toLowerCase();
	$('.mask-letter').attr('data-mask-letter', projLetter);
	
}

if ($('.home').length) {
	// $('.main-nav li:nth-child(2)').addClass('active');
	$('.main-nav li:nth-child(2) a').removeClass('js-button-transition');
	$('.main-nav li:nth-child(2) a').addClass('js-open-pano-content');
	$('.main-nav li:nth-child(2) a').attr('data-n', '2');
	$('.main-nav li:nth-child(2) a').attr('href', '#');

	$('.main-nav li:nth-child(3) a').removeClass('js-button-transition');
	$('.main-nav li:nth-child(3) a').addClass('js-open-pano-content');
	$('.main-nav li:nth-child(3) a').attr('data-n', '3');
	$('.main-nav li:nth-child(3) a').attr('href', '#');

	$('.main-nav li:nth-child(4) a').removeClass('js-button-transition');
	$('.main-nav li:nth-child(4) a').addClass('js-open-pano-content');
	$('.main-nav li:nth-child(4) a').attr('data-n', '4');
	$('.main-nav li:nth-child(4) a').attr('href', '#');
	$(document).ready(function() {

		sizeHandler();
		panoSizeHandler();
		startMouseX = halfWindowWidth;
		startMouseY = halfWindowHeight;
		registerHomeNodes(1);

		$(".project-nav li:nth-child(1) h5").text(' ');
		$(".project-nav li:nth-child(2) h5").text(' ');

		setTimeout(function(){
		   	typeFormatting();

		   	homeProj1Letter = $('.home-proj-1-info h4').text();
		   	
			homeProj1Letter = homeProj1Letter.charAt(0);
			homeProj1Letter = homeProj1Letter.toLowerCase();
			$('.home-proj-1-mask .mask-letter').attr('data-mask-letter', homeProj1Letter);
			$('.home-proj-1-mask .hit-area, .home-proj-1-info').attr('data-transition-link', $('.home-proj-1-info .cta').attr('href'));

			homeProj2Letter = $('.home-proj-2-info h4').text();
			homeProj2Letter = homeProj2Letter.charAt(0);
			homeProj2Letter = homeProj2Letter.toLowerCase();
			$('.home-proj-2-mask .mask-letter').attr('data-mask-letter', homeProj2Letter);
			$('.home-proj-2-mask .hit-area, .home-proj-2-info').attr('data-transition-link', $('.home-proj-2-info .cta').attr('href'));

		   	if ($('body.touch-logic').length) {
			} else {
				panoramaCalcs(startMouseX, startMouseY, 0.2);
			}
		}, 100);

		$(window).resize(function() {
			panoSizeHandler();
		}); // END OF RESIZE

	});
}

function registerHomeNodes(n) {
	// // CREATE ONE PROJECT VARIABLE SET
	// homeNodeID = $('.perch-info-nodes li:nth-child('+n+')').attr('data-home-node-id');
	homeNodeX = $('.perch-info-nodes li:nth-child('+n+')').attr('data-position-x');
	homeNodeY = $('.perch-info-nodes li:nth-child('+n+')').attr('data-position-y');
	
	homeNodeTitleOne = $('.perch-info-nodes li:nth-child('+n+') h4.perch-info-overlay-main-title').html();
	homeNodeTitleTwo = $('.perch-info-nodes li:nth-child('+n+') h4.perch-info-overlay-secondary-title').html();
	homeNodeContent =  $('.perch-info-nodes li:nth-child('+n+') h2.perch-info-overlay-text').html();
	homeNodeContentP =  $('.perch-info-nodes li:nth-child('+n+') p.perch-info-overlay-p').html();
	allHomeNodes[n] = [n, homeNodeX, homeNodeY, homeNodeTitleOne, homeNodeTitleTwo, homeNodeContent, homeNodeContentP, n];

	if (n != 10) {
		// REPEAT FILLING PROJECT VARS UNTIL ALL ARE DONE
		repeatn = n + 1;
		registerHomeNodes(repeatn);
	} else {
		populateNodes(1);
		populateHomeList(1);
	}
}

function populateNodes(n) {
	thisNodeInfo = allHomeNodes[n];
	$('.overlay-nodes .pano-icon:nth-child('+n+')').attr('data-pano-x', thisNodeInfo[1]);
	$('.overlay-nodes .pano-icon:nth-child('+n+')').attr('data-pano-y', thisNodeInfo[2]);
	$('.overlay-nodes .pano-icon:nth-child('+n+') h5').text(thisNodeInfo[4]);
	$('.overlay-nodes .pano-icon:nth-child('+n+') h4').text(thisNodeInfo[3]);
	nextNode = n+1;
	if (nextNode == 7) {

	} else {
		populateNodes(nextNode);
	}
}

function populateHomeList(n) {
	thisListInfo = allHomeNodes[n];
	$('.list-nav ul li:nth-child('+(n)+') h4').html(thisListInfo[4]);
	$('.list-nav ul li:nth-child('+(n)+') h2').html(thisListInfo[5]);
	$('.list-nav ul li:nth-child('+(n)+') p').html(thisListInfo[6]);
	nextList = n+1;
	if (nextList == 7) {
	} else {
		populateHomeList(nextList);
	}
}

function openPanoContentOverlay() {

	panoContent.show();
	$('.mountains-vid').hide();
	projectNav.show();
	swapOverlayContent();

	setTimeout(function(){
	   	ThreeDPanoParent.addClass('content-active');
	   	projectNav.addClass('active');
	}, 50);
}

function swapOverlayContent() {
	thisNodeN = thisNodeLink.attr('data-n');
	thisNode = allHomeNodes[thisNodeN];

	$('.pano-overlay-content h4').text(thisNode[3]);
	$('.pano-overlay-content h2').html(thisNode[5]);
	$('.pano-overlay-content p').html(thisNode[6]);
	$('.project-nav li:nth-child(1) h4').html(thisNode[3]);
	$('.project-nav li:nth-child(2) h4').html(thisNode[4]);
	$('.pano-overlay-content .article-icon').attr('data-icon-id', thisNode[7]);
}

function closePanoContentOverlay() {
	$('.mountains-vid').show();
	ThreeDPanoParent.removeClass('content-active');
	projectNav.removeClass('active');
	setTimeout(function(){
	   	panoContent.hide();
	   	projectNav.hide();
	}, 1200);
}

function panoSizeHandler() {
	panoSizeX = windowWidth * 0.3;
	panoSizeY = windowWidth * 0.07;
	panoHalf = windowWidth/2;
	panoHalfHeight = windowHeight/2;
	panoAngleIntensity = 1300 / windowWidth;
}

function panorama(e) {
	$( "body" ).mousemove(function(e) {
		var mouseX = e.pageX;
		var mouseY = e.pageY;
	  	panoramaCalcs(mouseX, mouseY, 2.5);
	});
}

function panoramaCalcs(mX, mY, objectsSpeed) {
	
	panoMouseXBase = (mX-panoHalf)/panoHalf;
	panoMouseYBase = (mY-panoHalfHeight)/panoHalfHeight;

	panoramaMouseX = panoMouseXBase * -panoSizeX;
	panoramaMouseY = ((mY - panoHalf) / panoHalf) * -panoSizeY;
	
	panoramaAngleX = panoramaMouseX / -4;
	panoramaAngleY = panoramaMouseY / 8;

	TweenMax.to(radarSpin,
		1, {
			rotation: panoMouseXBase*60
		}
	);

   	TweenMax.to(mountainsBG,
		1.7, {
			x: panoramaMouseX,
			y: panoramaMouseY
		}
	);

	panoramaObject.each(function() {
		panoramaObjectMovement($(this), objectsSpeed);
    });
}

function panoramaObjectMovement(e, objectsSpeed) {
	thisX = e.attr('data-pano-x');
	thisY = e.attr('data-pano-y');
	panoObjectX = (((thisX - panoMouseXBase)*panoHalf)*1.2);
	panoObjectY = (((thisY - panoMouseYBase)*panoHalfHeight)/1.5);
	angleObjectX = ((panoObjectX/-12)*panoFallbackVar)*panoAngleIntensity;
	angleObjectY = ((panoObjectY/20)*panoFallbackVar)*panoAngleIntensity;
	TweenMax.to(e,
		objectsSpeed, {
			x: panoObjectX,
			y: panoObjectY,
			rotationY: angleObjectX,
			rotationX: angleObjectY,
			ease: 'circ.easeInOut'
			// MAKE SURE ROTATIONS ARE HANDLED SEPARATELY FOR NON-SAFARI!
		}
	);
}

if ($('.directors').length) { 
	$('.main-nav li:nth-child(4)').addClass('active');
	
	currentPage = 'directors';
	currentDirectors = 1;
	document.getElementById("director-video-one").playbackRate = 1.2;
	registerDirector(0);

	setTimeout(function(){
		populateDirectorList(0);
	   	changeDirectorsContent(currentDirectors); // NUMBER IS NEW SET - so 1-6 of the sets of two.
	   	changeDirectorContent(1); changeDirectorContent(2);
	   	typeFormatting();
	}, 100);

	setTimeout(function(){
		showRemoveMainTitle('true');
	}, 1600);
	moveIndicatorNav(totalDirectorSets, currentDirectors);	

	$("li.js-prev-aspect h5:nth-child(2)", nextPrevNav).text('directors');
	$("li.js-prev-aspect h4", nextPrevNav).text('Previous Directors');
	$("li.js-next-aspect h5:nth-child(2)", nextPrevNav).text('directors');
	$("li.js-next-aspect h4", nextPrevNav).text('Next Directors');
}

if ($('.project').length) { 
	// showRemoveMainTitle('false');
}

if ($('.js-vertigo').length) { 
	bgMouse();
}

// PROJECT PORTFOLIO FUNCTIONS

function registerProject(n) {
	// CREATE ONE PROJECT VARIABLE SET
	projectName = $('.perch-projects ul li:nth-child('+n+') h4.perch-project-name').text();
	projectFor = $('.perch-projects ul li:nth-child('+n+') h4.perch-project-for').text();
	
	projectLetter = projectName.charAt(0);
	projectLetter = projectLetter.toLowerCase();
	projectLink = $('.perch-projects ul li:nth-child('+n+') a.perch-project-link').attr('href');
	projectImg = $('.perch-projects ul li:nth-child('+n+') .case-hero-img').css('background-image');

	projects[n] = [projectName, projectFor, projectLetter, projectLink, projectImg];
	// SPACE HERE FOR REGISTERING THE MENU LIST ITEMS FROM BEGINNING
	if (totalProjectsCalculated == false && projectName == "" && n > 0) {
		totalProjects = n - 1;
		totalProjectSets = Math.ceil(totalProjects / 3);
		totalProjectsCalculated = true;
	}
	if (n != 20) {
		// REPEAT FILLING PROJECT VARS UNTIL ALL ARE DONE
		repeatn = n + 1;
		registerProject(repeatn);
	}
	
}

function changeWorkContent(n) {
	newProjectNo1 = (n*3)-2;
	newProjectNo2 = newProjectNo1 + 1;
	newProjectNo3 = newProjectNo1 + 2;
}

function changeProjectContent(n) {
	if (n == 1) {
		newProject = projects[newProjectNo1];
	} else if (n == 2) {
		newProject = projects[newProjectNo2];
	} else if (n == 3) {
		newProject = projects[newProjectNo3];
	}

	if (newProject[0] == "") {
		$('.work .letter-list .letter-wrap:nth-child('+n+')').hide();
	} else {
		$('.work .letter-list .letter-wrap:nth-child('+n+')').show();
	}
	
	$('.work .letter-list .letter-wrap:nth-child('+n+') .work-content h4.project-name').text(newProject[0]);
	$('.work .letter-list .letter-wrap:nth-child('+n+') .work-content h4.project-for').text(newProject[1]);
	$('.work .letter-list .letter-wrap:nth-child('+n+') .mask-letter').attr('data-letter', newProject[2]);
	$('.work .letter-list .letter-wrap:nth-child('+n+') .hit-area, .work .letter-list .letter-wrap:nth-child('+n+') .work-content').attr('data-transition-link', newProject[3]);
	$('.work .letter-list .letter-wrap:nth-child('+n+') a.cta').attr('href', newProject[3]);
	$('.vertigo-bg .project-bg:nth-child('+(n+1)+')').css({ 
	    'background' : ''+newProject[4]+'no-repeat center center/cover'
    }); 
}

function workLettersOut(d) { 
	// d is DIRECTION
	
	changeWorkContent(currentProjects); // NUMBER IS NEW SET - so 1-6 of the sets of three.
	moveIndicatorNav(totalProjectSets, currentProjects);
	
	$('.letter-list .letter-wrap:nth-child(1) .work-content').addClass('inactive');
	setTimeout(function(){
		$('.letter-list .letter-wrap:nth-child(2) .work-content').addClass('inactive');
	}, 300);
	setTimeout(function(){
		$('.letter-list .letter-wrap:nth-child(3) .work-content').addClass('inactive');
	}, 600);
	yMotion = d*50;
	TweenMax.staggerTo(".letter-list .letter-wrap .js-mask-letter-wrap",
		0.85, {
			y: yMotion,
			opacity:0,
			ease:'Circ.easeInOut'
		}, 
	0.15);

	setTimeout(function(){
		// WHEN TO RESET ALL VIDEOS AFTER ALL ARE OUT OF VIEW
		
		setTimeout(function(){
			// TweenMax.set(".letter-list .letter-wrap .js-mask-letter-wrap", {clearProps:"all"});
			TweenMax.set(".letter-list .letter-wrap .js-mask-letter-wrap .letter-video", {clearProps:"all"});

			setTimeout(function(){
				TweenMax.staggerTo(".letter-list .letter-wrap .js-mask-letter-wrap",
					0.7, {
						y: 0,
						opacity:1,
						ease:'Quad.easeInOut'
					}, 
				0.3);
			}, 30);
		}, 30);
		
	}, 1400);

	setTimeout(function(){
		changeProjectContent(1); 
		setTimeout(function(){
			$('.letter-list .letter-wrap:nth-child(1) .work-content').removeClass('inactive');
		}, 50);
		
	}, 860);
	setTimeout(function(){
		changeProjectContent(2); 
		setTimeout(function(){
			$('.letter-list .letter-wrap:nth-child(2) .work-content').removeClass('inactive');
		}, 50);
	}, 1160);
	setTimeout(function(){
		changeProjectContent(3); 
		setTimeout(function(){
			$('.letter-list .letter-wrap:nth-child(3) .work-content').removeClass('inactive');
		}, 50);
	}, 1300);
}

// DIRECTOR FUNCTIONS

function registerDirector(n) {
	// CREATE ONE PROJECT VARIABLE SET
	var dirBg = $('.perch-directors ul li:nth-child('+n+') .perch-director-img-url').css('background-image');
	directorImg = dirBg;
	
	directorName = $('.perch-directors ul li:nth-child('+n+') .perch-director-name').html();
	directorAgency = $('.perch-directors ul li:nth-child('+n+') .perch-director-agency').text();
	directorIntro = $('.perch-directors ul li:nth-child('+n+') .perch-director-intro').text();
	directorCopy = $('.perch-directors ul li:nth-child('+n+') .perch-director-info').html();
	directorVideoID = $('.perch-directors ul li:nth-child('+n+') .perch-director-video-id').text();
	directorVideoStart = $('.perch-directors ul li:nth-child('+n+') .perch-director-video-id').attr('data-video-start');
	directorVideoName = $('.perch-directors ul li:nth-child('+n+') .perch-director-video-name').text();

	directorNameCheck = $('.perch-directors ul li:nth-child('+n+') .perch-director-name').attr('data-active');
	directors[n] = [directorImg, directorName, directorAgency, directorIntro, directorCopy, directorVideoID, directorVideoName, directorVideoStart];
	
	if (totalDirectorsCalculated == false && directorNameCheck == "off" && n > 0) {
		totalDirectors = n - 1;
		totalDirectorSets = Math.ceil(totalDirectors / 2);
		totalDirectorsCalculated = true;
	}

	if (n != 19) {
		// REPEAT FILLING PROJECT VARS UNTIL ALL ARE DONE
		repeatn = n + 1;
		registerDirector(repeatn);
	}
	
}

function populateDirectorList(n) {
	thisListInfo = directors[n];

		
	$('.list-nav ul li:nth-child('+(n+1)+') h4').html(thisListInfo[1]);
	$('.list-nav ul li:nth-child('+(n+1)+') h2').html(thisListInfo[3]);
	$('.list-nav ul li:nth-child('+(n+1)+') p').html(thisListInfo[4]);
	nextList = n+1;
	if (nextList == (totalDirectors+1) ) {
		$('.list-nav ul li:nth-child('+(n+2)+')').hide();
		$('.list-nav ul li:nth-child('+(n+3)+')').hide();
		$('.list-nav ul li:nth-child('+(n+4)+')').hide();
		$('.list-nav ul li:nth-child('+(n+5)+')').hide();
		$('.list-nav ul li:nth-child('+(n+6)+')').hide();
		$('.list-nav ul li:nth-child('+(n+7)+')').hide();
		$('.list-nav ul li:nth-child('+(n+8)+')').hide();
		$('.list-nav ul li:nth-child('+(n+9)+')').hide();
		$('.list-nav ul li:nth-child('+(n+10)+')').hide();
		$('.list-nav ul li:nth-child('+(n+11)+')').hide();
		$('.list-nav ul li:nth-child('+(n+12)+')').hide();
		$('.list-nav ul li:nth-child('+(n+13)+')').hide();
		$('.list-nav ul li:nth-child('+(n+14)+')').hide();
		$('.list-nav ul li:nth-child('+(n+15)+')').hide();
	} else {
		populateDirectorList(nextList);
	}
}

function changeDirectorsContent(n) {
	newDirectorNo1 = (n*2)-1;
	newDirectorNo2 = newDirectorNo1 + 1;
}

function changeDirectorContent(n) {
	if (n == 1) {
		newDirector = directors[newDirectorNo1];
	} else if (n == 2) {
		newDirector = directors[newDirectorNo2];
	}

	if (typeof newDirector[1] === 'undefined') {
		$('.director:nth-child('+n+')').hide();
	} else {
		$('.director:nth-child('+n+')').show();
	}
	$('.director:nth-child('+n+') .director-content.primary-content h1').html(newDirector[1]);
	$('.director:nth-child('+n+') .director-content.primary-content h4').text(newDirector[2]);
	$('.director:nth-child('+n+') .director-content.further-content h2').text(newDirector[3]);
	$('.director:nth-child('+n+') .director-content.further-content .dir-p-content').html(newDirector[4]);
	$('.director:nth-child('+n+') .profile-wrap .profile').css({ 
	    'background-image' : ''+newDirector[0]+''
    });

    if (newDirector[2] == "") {
		$('.director:nth-child('+n+')').attr('data-active', 'inactive');
	} else {
		$('.director:nth-child('+n+')').attr('data-active', 'active');
	}
}

function showElementWithTransition(e) {
	e.show();
	setTimeout(function(){
	   	e.addClass('active');
	}, 20);
}

function hideElementWithTransition(e) {
	e.removeClass('active');
	setTimeout(function(){
	   	e.hide();
	}, 1000);
}

function destroyElementWithTransition(e) {
	e.removeClass('active');
	setTimeout(function(){
	   	e.remove();
	}, 1000);
}

function loadSite() {

	preload = new createjs.LoadQueue();
	// preload.installPlugin(createjs.Video);
	preload.on("complete", siteLoaded); // ON ALL LOADED, RUN FUNCTION siteLoaded
	preload.on("progress", loadProgress); // ON ALL LOADED, RUN FUNCTION siteLoaded
	
	/*preload.loadFile("/img/ui/logo-black-full.svg");
	preload.loadFile("/img/bg/generic-pano.jpg");
	preload.loadFile("/img/ui/logo.svg");
	preload.loadFile("/img/ui/letter-masks/trainrobber.svg");*/
	
	if ($('.home').length) {
		homePreloaderFiles();
	}

	if ($('.directors').length) { 

	      	var imgDir1 = directors[1][0];
	      	var imgDir2 = directors[2][0];
	      	
	      	imgDir1 = imgDir1.replace('url(','').replace(')','').replace('"','').replace('"','');
	      	imgDir2 = imgDir2.replace('url(','').replace(')','').replace('"','').replace('"','');
	      	if (typeof imgDir1 != 'undefined') {
	      		preload.loadFile(imgDir1);
	      	}
	      	if (typeof imgDir2 != 'undefined' && imgDir2 != "") {
	      		preload.loadFile(imgDir2);
	      	} 
	}

	if ($('.work').length) {
		loadletter=(projects[1])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[2])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[3])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[4])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[5])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[6])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[7])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[8])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[9])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[10])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[11])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[12])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[13])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[14])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[15])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[16])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
		loadletter=(projects[17])[2];
		preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
	}

	if ($('html.touchevents').length || $('html.safaribrowser').length) {
		preload.loadFile("/img/bg/letter-smoke-opt.gif");
	}
	
}

function homePreloaderFiles() {
	/*preload.loadFile("/img/bg/home-panorama.jpg");*/
	loadletter=$('.home-proj-1-mask .mask-letter').attr('data-mask-letter');
	preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
	loadletter=$('.home-proj-2-mask .mask-letter').attr('data-mask-letter');
	preload.loadFile("/img/ui/letter-masks/__"+loadletter+".svg");
}

function loadProgress() {
	// TweenMax.to(".preloader .bar-inner",
	// 	0.3, {
	// 		scaleX: preload.progress,
	// 		ease:'Power1.easeInOut'
	// 	}
	// );

	if (preload.progress > 0.9 && loaded5 == false) {
		loaded5 = true;
		$('.preloader .bar-inner').css({ 
		    'transform' : 'scaleX(1)'
	    });
	} else if (preload.progress > 0.75 && loaded4 == false) {
		loaded4 = true;
		$('.preloader .bar-inner').css({ 
		    'transform' : 'scaleX(0.75)'
	    });
	} else if (preload.progress > 0.5 && loaded3 == false) {
		loaded3 = true;
		$('.preloader .bar-inner').css({ 
		    'transform' : 'scaleX(0.5)'
	    });
	} else if (preload.progress > 0.25 && loaded2 == false) {
		loaded2 = true;
		$('.preloader .bar-inner').css({ 
		    'transform' : 'scaleX(0.25)'
	    });
	} else if (preload.progress > 0.1 && loaded1 == false) {
		loaded1 = true;
		$('.preloader .bar-inner').css({ 
		    'transform' : 'scaleX(0.12)'
	    });
	}
	
}

function siteLoaded(event) {
	bodyElement.removeClass('preloader-active');

	if ($('.home').length) {

		setTimeout(function(){
		mountainsBgIMG.attr('data-zoomed', 'off');
		}, 400);

		setTimeout(function(){
			showRemoveMainTitle('false');
			setTimeout(function(){
				if ($('body.touch-logic').length) {

				} else {
					panorama();
				}
				
				setTimeout(function(){
					TweenMax.to(".move-mouse",
						0.35, {
							opacity: 0
						}
					);
					
					setTimeout(function(){
						$('.move-mouse').remove();
					}, 500);
				}, 3200);
			}, 2400);
		}, 100);
		
		setTimeout(function(){
			movieBars.addClass('active');
		}, 1700);
	}

	if ($('.project').length) {
		setTimeout(function(){
			showRemoveMainTitle('false');
		}, 300);
		
	}

	if (preloaderVidUnmask == true) {
		$('.js-vid-fill-screen').addClass('blend-screen');
		setTimeout(function(){
			playVideoMask(fillScreenVid, 'true', 4500);
		}, 350);
	} else {
		$('.preloader').hide();
	}
	
}

function deactivateNavs() {
	$('.nav-wrap').addClass('inactive');
}

function activateNavs() {
	$('.nav-wrap').removeClass('inactive');
}

function activateListNav() {
	listNav.show();
	setTimeout(function(){
	    listNav.addClass('active');
	}, 5);	
}

function deactivateListNav() {
	listNav.removeClass('active');
	setTimeout(function(){
	    listNav.hide();
	}, 600);	
}

function activateCloseBtn() {
	closeCursor.addClass('active');
	closeMoving = true;
	closeMouse();
}

function deactivateCloseBtn() {
	closeCursor.removeClass('active');
	closeMoving = false;
}

function siteLoadedTrigger(event) {

	setTimeout(function(){
	    $('body').removeClass('preloading');
	}, preloaderTimeout);
}

function openContactWrap(e) {
	contactWrap.show();
	$('nav.contact').addClass('close-active');
	$('.main-nav').attr('data-active', 'off');
	
	setTimeout(function(){
	    contactWrap.addClass('active');
	}, 10);

	setTimeout(function(){
	    contdigit1 = $('.perch-contact-digit-1').text();
		contdigit2 = $('.perch-contact-digit-2').text();
		var contactCount1 = new CountUp("contact-digit-1", 0, contdigit1, 0, 2.4, options);
		var contactCount2 = new CountUp("contact-digit-2", 0, contdigit2, 0, 3, options);
		contactCount1.start();
		contactCount2.start();
	}, 900);
}

function closeContactWrap(e) {
	contactWrap.removeClass('active');	
	$('nav.contact').removeClass('close-active');
	$('.main-nav').attr('data-active', 'on');
	setTimeout(function(){
	    contactWrap.hide();
	}, 1100);
}

function changeToLetter(e, newLetter) {
	e.attr('data-letter', newLetter);
}

function playVideoMask(e, stop, time) {
	e.play();

	if (stop == "true") {
		setTimeout(function(){
			$('.js-vid-fill-screen').remove();
		}, time);
	}
	
}
function pauseVideoMask(e) {
	e.pause();
}
function fastVideoMask(e) {
	e.playbackRate = 2.5;
}
function slowVideoMask(e) {
	e.playbackRate = 1.2;
}

function prevAspect(e) {

	if (currentPage == 'work') {

		if (currentProjects == 1) {
		} else {
			currentProjects -= 1;
			workLettersOut(1);
		}
	}

	if (currentPage == 'directors') {
		
		if (currentDirectors == 1) {
		} else {
			currentDirectors -= 1;
			directorsSwap();
		}
	}	
}

function nextAspect(e) {

	if (currentPage == 'work') {

		if (currentProjects == totalProjectSets) {
		} else {
			
			currentProjects += 1;
			workLettersOut(-1);
		}
	}

	if (currentPage == 'directors') {
		if (currentDirectors == totalDirectorSets) {
			
		} else {
			$('.director').removeClass('hover');
			currentDirectors += 1;
			directorsSwap();
		}
	}
}

function directorsSwap() {
	$('.director .profile-wrap').addClass('inactive');
	moveIndicatorNav(totalDirectorSets, currentDirectors);
	setTimeout(function(){
		changeDirectorsContent(currentDirectors);
		changeDirectorContent(1);
		changeDirectorContent(2);
		typeFormatting();
		setTimeout(function(){
			$('.director .profile-wrap').removeClass('inactive');
			$('.director .profile-wrap .profile').hide();
			setTimeout(function(){
				$('.director .profile-wrap .profile').show();
			}, 15);
		}, 20);
	}, 800);
	
}

function moveIndicatorNav(totalItems, thisSet) {
	indicatorSizeY = (100 / totalItems); // GATHERS SIZE OF THE INDICATOR BASED ON TOTAL ITEMS
	indicatorPosY = (thisSet - 1) * 100; // GATHERS AS A % OF ITSELF, THE Y MOVEMENT NEEDED

	indicatorNav.css({ 
		height : indicatorSizeY +'%',
	    'transform' : 'translateY('+indicatorPosY+'%)'
    });
}

function bgMouse() {
	$( "body" ).mousemove(function( e) {
	  	var mouseX = e.pageX
    	var mouseY = e.pageY
    	var centralMouseX = (mouseX - (windowWidth/2))*-0.1;
    	var centralMouseY = (mouseY - (windowHeight/2))*-0.09;

       	TweenMax.to(".vertigo-bg",
			0.75, {
				x: centralMouseX,
				y: centralMouseY
			}
		);

	});
}

function closeMouse() {
	$( "body" ).mousemove(function( e) {
		if (closeMoving == true) {

		  	var closeX = e.pageX;
	    	var closeY = e.pageY;

	       	closeCursor.css({ 
			    'transform' : 'translate3d('+closeX+'px, '+closeY+'px, 0)'
		    });

		}

	});
}

function showRemoveMainTitle(hideE) {
	setTimeout(function(){
		mainTitle.addClass('active');
		setTimeout(function(){
			if (hideE == 'true') {
				mainTitle.removeClass('active');
				setTimeout(function(){
					pageTitle.removeClass('inactive');
					protector.remove();
					setTimeout(function(){
						mainTitle.remove();
					}, 1000);
				}, 1000);
			}
		}, 4500); // REMOVE CLASS ON MAIN TITLE
	}, 1000);
}

function detectBrowser() {

    // DETECT SAFARI FOR FALLBACK
    if (navigator.userAgent.indexOf('Safari') != -1 || navigator.userAgent.indexOf('Chrome') != -1) {
    	$('html').addClass('webkitbrowser');
    }

    // DETECT SAFARI FOR FALLBACK
    if (navigator.userAgent.indexOf('Chrome') != -1) {
    	videoSweepBrowser = 'true';
    	
    } else {
    	panoFallback = true;
    	panoFallbackVar = 0;
    	// DETECT SAFARI FOR FALLBACK
	    if (navigator.userAgent.indexOf('Safari') != -1) {
	    	$('html').addClass('safaribrowser');
	    	videoSweepBrowser = 'false';
	    	preloaderVidUnmask = false; 
	    }
    }

    // DETECT SAFARI FOR FALLBACK
    if (navigator.userAgent.indexOf('Firefox') != -1) {
    	videoSweepBrowser = 'true';
    	$('.main-lockup').addClass('no-trans');
    	$('main.project .mask-letter, main.home .mountains-bg-wrap .mask-letter').hide();
    }

    if ($('html.backgroundblendmode').length) {
    } else {
    	videoSweepBrowser = 'false';
    	preloaderVidUnmask = false; 
    }

    if (windowWidth < 900 || $('html.touchevents').length) {
    	videoSweepBrowser = 'false';
    	preloaderVidUnmask = false;
    }

}

function typeFormatting() {
	letteringJS($('.letter-split'));
	$('.arc').each(function() {
		arc($(this));
    });
    $('h1 span').each(function() {
		westernise($(this));
    });
}

function arc(o) {
	totalSpans = $("span", o).length;
	arcParentRotate = totalSpans*-1.95;
	arcParentMoveX = arcParentRotate*2.4;
	o.css({ 
	    'transform' : 'rotate('+arcParentRotate+'deg) translate3d('+arcParentMoveX+'px, '+arcParentRotate+'px, 0)'
    });
}

function westernise(o) {
	totalSpans = $("span", o).length;

	westernMiddle = totalSpans / 2;
	if (westernMiddle % 1 == 0) {
	    $("span", o).each(function() {
			evenWesternSpans($(this));
	    });
	} else {
	    $("span", o).each(function() {
			oddWesternSpans($(this));
	    });
	}
}


function oddWesternSpans(o) {
	spanIndex = o.index() + 1;
	spanWesternNo = (spanIndex - (totalSpans/2)) - 0.5;
	spanWesternClass = "western"+spanWesternNo;
	o.addClass(spanWesternClass);
}

function evenWesternSpans(o) {
	spanIndex = o.index() + 1;
	spanWesternNo = (spanIndex - (totalSpans/2));
	if (spanWesternNo > 0) {
		spanWesternNo -= 1;
	}
	spanWesternClass = "western"+spanWesternNo;
	o.addClass(spanWesternClass);
}

function letteringJS(e) {
	e.lettering();
}

$('body').bind('mousewheel', function(e){
	if (mouseInactive == false && scrollActive != false) {
		// if(e.originalEvent.wheelDelta / 1000 > 0) {
		if(e.originalEvent.wheelDelta >= 27) {
		  	prevAspect();
		  	scrolled();
		}
		else if(e.originalEvent.wheelDelta <= -27) {
		  	nextAspect();
		  	scrolled();
		}
	}
});

function scrolled() {
	mouseInactive = true;
	setTimeout(function(){
   		mouseInactive = false;
	}, 1200);
}

function randomiseSmokeDirection() {
	if (videoSweepBrowser == 'true') {
		randomDirection = Math.floor(Math.random() * 4) + 1;
	} else {
		randomDirection = Math.floor(Math.random() * 2) + 1;
	}
	if (randomDirection == 2) {
		vidClickContainer.css({ 
			'transform' : 'rotate(0deg)'
	    });
	    fillScreenVidJQ.css({ 
			'transform' : 'rotate(180deg)'
	    });
	} else if (randomDirection == 3) {
		vidClickContainer.css({ 
			'transform' : 'rotateX(180deg)'
	    });
	    fillScreenVidJQ.css({ 
			'transform' : 'rotateY(180deg)'
	    });
	} else if (randomDirection == 4) {
		vidClickContainer.css({ 
			'transform' : 'rotateY(180deg)'
	    });
	    fillScreenVidJQ.css({ 
			'transform' : 'rotateX(180deg)'
	    });
	}
}