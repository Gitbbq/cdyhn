// JavaScript Document
$(function(){
		//DD_belatedPNG.fix('.header,.nav ul.menu li span a,.main_conter,.main_bottom,.pagination li a')
	chengdu.onLoad();
})

var chengdu = {};
chengdu.namespace = function(str){
	var arr = str.split('.'),o=chengdu;
	for(i=(arr[0]=='CITIC') ?　1 : 0; i<arr.length; i++){		
		o[arr[i]] = o[arr[i]] || {};
		o = o[arr[i]];
	}
}
chengdu.namespace('onLoad');
chengdu.namespace('Page.isIE6');

chengdu.Page.menu_hover = function(){
		$('ul.menu_ul li.subli').each(function(index) {
            $(this).hover(function(){
				$(this).find('a').addClass('onhover');
				$(this).find('div').show();
				},function(){
				$(this).find('a').removeClass('onhover');
				$(this).find('div').hide();
					})
        });
}

chengdu.Page.leader_map = function(){
		$('.leazder_map a').each(function(index) {
			$(this).css('left',$(this).attr('left')+'px');
			$(this).css('top',$(this).attr('top')+'px');
			$(this).mouseenter(function(){
				if($(this).attr('useclass')){
					$('.map_box').addClass($(this).attr('useclass'));
				}				
				if($('.map_box').hasClass('map_box1')){
					$('.map_box').css('top',(parseInt($(this).attr('top')))+'px');
					$('.map_box').css('left',parseInt($(this).attr('left'))-180+'px');
				}else if($('.map_box').hasClass('map_box2')){
					$('.map_box').css('top',(parseInt($(this).attr('top'))-200)+'px');
					$('.map_box').css('left',(parseInt($(this).attr('left'))-70)+'px');
				}else{
					$('.map_box').css('top',parseInt($(this).attr('top'))-200+'px');
					$('.map_box').css('left',parseInt($(this).attr('left'))-205+'px');
				}				
				$('.map_box').show(200);
			})
		})
		$('.map_box').mouseleave(function(){
			$('.map_box').stop(true,true);
			$(this).hide(100,function(){
				if($(this).hasClass('map_box1'))$(this).removeClass('map_box1');
				if($(this).hasClass('map_box2'))$(this).removeClass('map_box2');
			});
		})
}

chengdu.Page.notic_bgcolor = function(){
		$('.notic li:even').addClass('huibg');
}
chengdu.Page.news_bgcolor = function(){
		$('ul.news_list li:odd').addClass('bgto');
}

chengdu.Page.daiban_tabdeph = function(){
		$('.gr_tab li').each(function(index){
			var deph=100-parseInt(index)
			$(this).css('z-index',deph);
			})
}

chengdu.Page.geren_tab = function(){
		$('.gr_tab ul li').each(function(index){
			$(this).mouseover(function(){
				$('.gr_tab ul li').removeClass('visited');
				$(this).addClass('visited');
				$('.gr_tab_nr:visible').addClass('none');
				$('.gr_tab_nr:eq('+index+')').removeClass('none');						   
			})			
	})
}


chengdu.Page.menuCurrent = function(){
	var nm = chengdu.Page.get(window.location.href,'menu');
	if(nm){
		nm = parseInt(nm);
		$('#ny_nav ul li:eq('+nm+')').addClass('over');
		$('#ny_nav ul li:eq('+nm+')').find('div').show();
	}
}

chengdu.Page.get = function(url, key) {
	var escapeReg = function(source) {
		return String(source)
				.replace(new RegExp("([.*+?^=!:\x24{}()|[\\]\/\\\\])", "g"), '\\\x241');
	};
    var reg = new RegExp(
                        "(^|&|\\?|#)" 
                        + escapeReg(key) 
                        + "=([^&]*)(&|\x24)", 
                    "");
    var match = url.match(reg);
    if (match) {
		var result=match[2].substring(match[2].length-1,match[2].length);
        return result=='#'?match[2].substring(0,match[2].length-1):match[2];
    }
    
    return null;
}

chengdu.Page.leftMenuInit = function(){
	$('#leftMenu li.node').each(function(index, element) {
        $(this).hover(function(){
			$('#leftMenu div.menuNodeChecked').removeClass('menuNodeChecked');
			$(this).find('div.menuNode').addClass('menuNodeChecked');
			$(this).find('div.menuContent').show();
		},function(){
			$('#leftMenu div.menuNodeChecked').removeClass('menuNodeChecked');
			$(this).find('div.menuContent').hide();
		});
    });
	var lastitem = $('#leftMenu li.node:last').find('div.menuContent');
	//$('#leftMenu').css('height',(lastitem.parent().offset().top+lastitem.height())+'px');
	
}

chengdu.Page.login_input=function(){
	$('.login_input input,.login_input_new input').focus(function(){		
			$(this).addClass('nobg');
		}).blur(function(){
			if(this.value.length<1){
				$(this).removeClass('nobg');
			}
		})
	$('.login_input input,.login_input_new input').each(function(index, element) {
        if($(this).val().length>0){
			$(this).addClass('nobg');
		}
    });
}

chengdu.Page.isIE6 = function(){
	var isIE = !+'\v1'; //IE浏览器
	var IE6 = isIE && /MSIE (\d)\./.test(navigator.userAgent) && parseInt(RegExp.$1) < 7;
	return IE6;	
}

chengdu.Page.bannerPlay = function(){	
	var c = $('#mainview .mainviewul');
	var w = $('#mainview').width();
	var t = c.find('li').length;
	var h = '';
	var o = null;
	var autohide = $('#mainview').attr('autoHideController');
	var easing='easeInOutExpo',speed=8000,is=false;
	var animate =  $('#mainview').attr('animate');	
	c.attr('index',0);
	if(t>1){
		for(var i=0; i<t; i++){
			h +='<a href="javascript:void(0)" index="'+i+'"';
			if(i==0)h += ' class="active"> </a>';
			else h+= '> </a>'	
		}
		$('#mainview .mainview_controler td:eq(0)').html(h);
		if(autohide && autohide == 'true'){
			$('#mainview .mainview_controler').delay(3000).animate({bottom:'-30px'},200);			
			$('#mainview').hover(function(){				
				$('#mainview .mainview_controler').stop(true,true);
				$('#mainview .mainview_controler').animate({bottom:'0px'},400);
			},function(){
				$('#mainview .mainview_controler').animate({bottom:'-30px'},200);
			});
		}
	}
	if(animate && animate=='hide'){
		c.css({'width':w+'px','position':'relative'}).find('li').each(function(index){
			$(this).css({'position':'absolute','left':'0px','top':'0px','z-index':(t-index)});			
		});
	}else{
		c.css('width',t * w+'px');
	}
	var play = function(p){
		is = true;
		c.attr('index',p);
		if(animate && animate=='hide'){			
			c.find('li:lt('+p+')').fadeOut(1000);
			c.find('li:gt('+p+')').fadeOut(1000);			
			c.find('li:eq('+p+')').fadeIn(2000,function(){is=false});
		}else{
			c.animate({left:-p*$('#mainview').width()+'px'},2000,easing,function(){
				is = false;	
			});
		}
		$('#mainview .mainview_controler td:eq(0) a').removeClass('active');
		$('#mainview .mainview_controler td:eq(0) a:eq('+p+')').addClass('active');	
	}
	var autoplay = function(){
		var p = parseInt(c.attr('index'));
		p++;
		if(p>=t)p=0;
		play(p);
	}
	if(t>1){
		o = setInterval(autoplay,speed);
		$('#mainview .mainview_controler td:eq(0) a').each(function(i){
			$(this).click(function(){
				if(!is){
					clearInterval(o);
					o = null;
					var p = parseInt($(this).attr('index'));
					c.find('li').stop(true,true);
					play(p);
					o = setInterval(autoplay,speed);
				}
			});
		});
		c.find('li').each(function(){
			$(this).hover(function(){
				clearInterval(o);
				o = null;
			},function(){
				o = setInterval(autoplay,speed);
			});
			
		});
	}
	setInterval(function(){
		if(!is){
			
			if(!(animate && animate=='hide')){
				var p = parseInt(c.attr('index'));
				c.css('left',-p*$('#mainview').width()+'px');
			}
			c.find('li').each(function(){
				var links = eval('('+$(this).attr('links')+')');
				var me = $(this);
				if(links){
					$(links).each(function(index){
						me.find('a.imglinks:eq('+index+')').css('left',($('#head .header').offset().left+this.x)+'px');
					})
				}
			});
		}	
	},100);
	
}

chengdu.onLoad = function(){
	chengdu.Page.notic_bgcolor();
	chengdu.Page.news_bgcolor();
	chengdu.Page.geren_tab();
	chengdu.Page.leftMenuInit();
	chengdu.Page.menu_hover();
	chengdu.Page.daiban_tabdeph();
	chengdu.Page.leader_map();
	chengdu.Page.login_input();
	chengdu.Page.bannerPlay();
}

