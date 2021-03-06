/////////////////////////////////////////////////
//this is pic gallery
//gallery([{}],0,);
/////////////////////////////////////////

(function(global,doc,factory){
	var gallery = factory(global,doc);
	global.gallery = global.factory || gallery;

	global.define && define(function(){
		return gallery;
	});
})(window,document,function(exports){
	var gallery_tpl = "<div class='lan_show'>\n\t<style>.lan_show{\r\n\tposition: fixed;\r\n\twidth:100%;\r\n\theight:100%;\r\n\tleft:0px;\r\n\ttop:0px;\r\n\ttext-align:center;\r\n\tz-index:6000;\r\n\toverflow:hidden;\r\n\tcursor:pointer;\r\n\tbackground:#4C4C4C;\r\n\tbackground:rgba(0,0,0,0.7);\r\n\t-moz-user-select: none;\r\n\t-webkit-user-select: none;\r\n\t-ms-user-select: none;\r\n\t-khtml-user-select: none;\r\n\tuser-select: none\r\n}\r\n.lan_img {\r\n\tposition:absolute;\r\n\tbackground:url(\"data:image/gif;base64,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\") no-repeat center center #fff;\r\n\tleft:35%;\r\n\ttop:40%;\r\n\twidth:30%;\r\n\theight:20%;\r\n}\r\n.lan_img img {\r\n\tdisplay:block;\r\n\twidth:100%;\r\n\theight:100%;\r\n\tbackground:#fff;\r\n}\r\n\r\n.lan_List{\r\n\tposition:absolute;\r\n\tz-index:0;\r\n\tleft:0px;\r\n\tbottom:0px;\r\n\twidth:100%;\r\n\theight:84px;\r\n\tpadding-top: 15px;\r\n\toverflow:hidden;\r\n\tcursor:default;\r\n\tbackground: #000;\r\n}\r\n.lan_List_cnt{\r\n\tposition:relative;\r\n\theight:84px;\r\n\tmargin:0px;\r\n}\r\n.lan_List_cnt a{\r\n\tposition:relative;\r\n\tdisplay:block;\r\n\tfloat:left;\r\n\twidth:80px;\r\n\theight:80px;\r\n\tbackground:#333;\r\n\tborder: 2px solid #000;\r\n\topacity: .5;\r\n}\r\n.lan_List_cnt a span{\r\n\twidth:80px;\r\n\theight:80px;\r\n\tborder:none;\r\n\tposition:absolute;\r\n\tleft:0px;\r\n\ttop:0px;\r\n\tbackground-color:#333;\r\n\tbackground-size:cover;\r\n\tbackground-repeat:no-repeat;\r\n\tbackground-position:center center;\r\n\ttransition: ease-in 0.08s;\r\n\t-moz-transition-duration: ease-in 0.08s;\r\n\t-webkit-transition-duration: ease-in 0.08s;\r\n\t-o-transition-duration: ease-in 0.08s;\r\n}\r\n.lan_List_cnt a:hover{\r\n\tborder-color:#fff;\r\n}\r\n.lan_List_cnt a span img{\r\n\tdisplay:block;\r\n\twidth:100%;\r\n\theight:100%\r\n}\r\n.lan_List_cnt a.cur{\r\n\tborder-color:#000;\r\n\tcursor:default;\r\n\tz-index:10;\r\n\topacity: 1;\r\n}\r\n.lan_List_cnt a.cur span{\r\n\twidth: 110%;\r\n\theight: 110%;\r\n\ttop: -10%;\r\n\tleft: -5%;\r\n\tbackground-color: #666;\r\n}\r\n.lan_exist {\r\n\tposition:absolute;\r\n\tright: 0;\r\n\ttop: 0;\r\n\tcursor:pointer;\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tbackground:#000;\r\n\topacity:.4;\r\n\tborder-radius: 0 0 0 50px;\r\n\tz-index: 100;\r\n\ttransition: .4s;\r\n\t-webkit-transition: .4s;\r\n\r\n\tline-height:35px;\r\n\tfont-family: sans-serif;\r\n\tfont-size:30px;\r\n\tcolor:#fff;\r\n\ttext-indent: 8px;\r\n\ttext-align:center;\r\n}\r\n.lan_exist:hover {\r\n\topacity:1;\r\n}\r\n.lan_next, .lan_prev{\r\n\tdisplay:block;\r\n\twidth:40px;\r\n\theight:60px;\r\n\tposition:absolute;\r\n\ttop:50%;\r\n\tmargin-top:-85px;\r\n\tbackground-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAB4CAYAAACAcLCaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA29pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxOWNhZTgyMi03YTIyLTQ2OGMtODVjYy0zMzY2ZWIzOWI1YzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJFMjIyRTc3RDU0MTFFNThGMjREOUU5Qjg5QzQyMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJFMjIyRTY3RDU0MTFFNThGMjREOUU5Qjg5QzQyMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDNlMDRmMzgtODg0NS00NWU2LWE1ZWQtODU1MzkzOGFkOWU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFDMEE1RjA0NzVBQTExRTVCMTQ5QTU3QkVCQ0I0MTlGIi8+IDwvcmRm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);\r\n\ttransition: .4s;\r\n\t-webkit-transition: .4s;\r\n\topacity: .2;\r\n}\r\n.lan_next{\r\n\tright: 20px;\r\n\tbackground-position: 0 -60px;\r\n}\r\n.lan_prev{\r\n\tleft: 20px;\r\n\tbackground-position: 0 0;\r\n}\r\n.lan_next.active,\r\n.lan_prev.active{\r\n\topacity: 1;\r\n}</style>\n\t<div class='lan_img'>\n\t\t<img src='' />\n\t</div>\n\t<div class='lan_List'>\n\t\t<div class='lan_List_cnt'>\n\t\t</div>\n\t</div>\n\t<div class='lan_prev' title='上一张'></div>\n\t<div class='lan_next' title='下一张'></div>\n\t<div class='lan_exist'>×</div>\n</div>",
		public_changeID = 0,
		public_win = $(window),
		public_winH = public_win.height(),
		public_winW = public_win.width();
	
	//load image
	function loadImg(src,parm){
		var parm = parm||{};
		var img = new Image();
		if(parm.errorFn){
			img.onerror = function(){		
				parm.errorFn();
			}
		}
		if(parm.loadFn){
			img.onload = function(){
				parm.loadFn(img.width,img.height);
			}
		}
		if(parm.sizeFn){
			var delay = setInterval(function(){
				if(img.width>1){
					clearInterval(delay);
					parm.sizeFn(img.width,img.height);
				}
			},2)
		}
		
		img.src=src;
	};
	
	//////////////////////////////////////////////////////
	function changePic(){
		var me = this,
			index = this.cur.index,
			$mainPic = this.dom.find('.lan_img img'),
			changeDelay,
			src = this._data[index]['cover'],
			this_changeID = ++public_changeID;

		if(this._data.length == 0){
			me.exist();
			return
		}	
		resetList.call(me);
		
		$mainPic.stop().fadeTo(70,0);
		clearTimeout(changeDelay);
		changeDelay = setTimeout(function(){
			loadImg(src,{
				loadFn: function(w,h){
					me.cur.width = w;
					me.cur.height = h;
					$mainPic.attr('src',src);
					if(this_changeID == public_changeID){
						me.fix_resize();
					}
				},
				errorFn: function(){
					console.log('gallery:','pic error !');
					me.cur.width = 40;
					me.cur.height = 40;
					if(this_changeID == public_changeID){
						me.fix_resize();
					}
				}
			});
		},100);
	};
	
	//////////////////////////////////////////////////
	function bindEvent(){
		var me = this,
			except = false;
		$(window).resize(me._resize_callback).on('keydown',me._key_callback);
		
		// bind this gallery event
		function check_mouse(event){
			var area = null;
			if(except || event.clientY > public_winH - 160){
				area = null;
				except = false;
			}else	if(event.clientX < public_winW/2){
				area = 'left';
			}else{
				area = 'right';
			}
			return area ;
		}
		
		me.dom.on('click',function(e){
			var this_area = check_mouse(e);
			if(this_area == 'left'){
				me.prev()
			}else if(this_area == 'right' ){
				me.next()
			}
		}).on('mousemove',function(e){
			var this_area = check_mouse(e);
			if(except){
				me.next_btn.removeClass('active');
				me.prev_btn.removeClass('active');
			}else if(this_area == 'left'){
				me.next_btn.removeClass('active');
				me.prev_btn.addClass('active');
			}else if(this_area == 'right' ){
				me.prev_btn.removeClass('active');
				me.next_btn.addClass('active');
			}else{
				me.prev_btn.removeClass('active');
				me.next_btn.removeClass('active');
			}
		}).on('mousemove','.lan_List,.lan_exist',function(){
			except = true ;
		}).on('click','.lan_exist',function(){
			me.exist();
			return false;
		}).on('click','.lan_List_cnt a',function(){
			me.cur.index = $(this).index();
			changePic.call(me);
		});
	
	}
	function resetList(){
		var me = this,
			index = me.cur.index,
			$items = this.$list.find('a'),
			thumb_width = $items.eq(0).outerWidth(),
			list_cntW = thumb_width * me._data.length,
			left;
		this.$list.width(list_cntW);
		
		$items.removeClass('cur').eq(index).addClass('cur');
		if(list_cntW > public_winW){
			left = public_winW/2 - thumb_width * (index + .5);
			if(left > 10){
				left = 10;
			}
			if(left < public_winW - list_cntW - 10){
				left = public_winW - list_cntW - 10;
			}
			this.$list.animate({
				left: left
			},100);
		}else{
			this.$list.css('left', public_winW/2 - list_cntW/2);
		}
	}
	function render_thumb(){
		var picList = '';
		for(var s = 0;s < me._data.length;s++){
			picList += "<a href='javascript:void(0)'><span style='background-image:url(" + me._data[s]['thumb'] + ")'></span></a>";
		}
		me.$list.html(picList);
	}
	//////////////////////////////////////////////////////
	function Gallery(data,index){
		if(!(this instanceof Gallery)){
			return new Gallery(data,index);
		}
		var me = this,
			winResizeDelay,
			private_bottomH = 100;
		
		this._data = data;
		this.dom = $(gallery_tpl);
		this.$list = this.dom.find('.lan_List_cnt');
		this.next_btn = this.dom.find('.lan_next');
		this.prev_btn = this.dom.find('.lan_prev');
		this.cur = {
			index : index || 0,
			width : null,
			height : null
		};
		
		me._resize_callback = function(){
			clearTimeout(winResizeDelay);
			winResizeDelay = setTimeout(function(){
				public_winH = public_win.height(),
				public_winW = public_win.width(),
				me.fix_resize();
			},200);
		};
		me._key_callback = function(e){
			var key = parseInt(e.keyCode);
			switch(key) {
				case 37:
					me.prev();
					break
				case 39:
					me.next();
					break
				case 27:
					me.exist();
					break
			}
		};
		
		// start ////////////////////////////////////
		if(me._data.length == 0){
			console.log('gallery:','stop list does not exist !');
			return
		}
		$('body').append(me.dom);
		bindEvent.call(me);
		render_thumb.call(me);
		changePic.call(me);
	};
	
	Gallery.prototype = {
		fix_resize: function(){
			var me = this,
				w = me.cur.width,
				h = me.cur.height,
				maxWidth = public_winW - 20,
				maxHeight = public_winH - private_bottomH - 20,
				mainPicCnt = me.dom.find('.lan_img'),
				mainPic = mainPicCnt.find('img');
			
			if(h > maxHeight){
				w = maxHeight*w/h;
				h = maxHeight;
			}
			if(w > maxWidth){
				h = maxWidth*h/w;
				w = maxWidth;
			}
		
			mainPicCnt.animate({
				width: w,
				height: h,
				top: (public_winH - private_bottomH - h)/2,
				left: (public_winW - w)/2
			},100,function(){
				mainPic.stop().fadeTo(80,1);
			});
			resetList.call(me);
		},
		next: function(){
			if(this._data.length == 1){
				return
			}
			if (this.cur.index >= this._data.length-1){
				this.cur.index = 0;
			}else{
				this.cur.index++;
			}
			changePic.call(this);
		},
		prev: function(){
			if(this._data.length == 1){
				return
			}
			if (this.cur.index <= 0){
				this.cur.index = this._data.length-1;
			}else{
				this.cur.index--
			}
			changePic.call(this);
		},
		exist: function(){
			this.dom.fadeOut(150,function(){
				$(this).remove();
			});
			$(window).unbind('resize',this._resize_callback).unbind('keydown',this._key_callback);
			//注销自己
			for(var i in this){
				delete(this[i]);
			}
		}
	};
	return Gallery;
});