var body_width=$("body").css("width");
            var body_height=$("body").css("height");
    		var mask = $(".mask");
    		var kuang = $(".kuang");
    		var wrap_items = $(".wrap_item");
    		var i_m = wrap_items.length;
    		var m = 100 * i_m;//避免下面频繁赋值
    		//向右转
    		function right() {
        		m++;
        		//暂时把所有的item的class去除掉
        		for (var i = 0; i < i_m; i++) {
        		    $(wrap_items[i]).removeClass();
        		}
        		//每一个都赋予新的class
        		$(wrap_items[m % i_m]).attr("class", "wrap_item out");
        		$(wrap_items[(m + 1) % i_m]).attr("class", "wrap_item middle_left");
        		$(wrap_items[(m + 2) % i_m]).attr("class", "wrap_item show");
        		$(wrap_items[(m + 3) % i_m]).attr("class", "wrap_item middle_right");
        		for (var x = 4; x < i_m; x++) {
            		$(wrap_items[(m + x) % i_m]).attr("class", "wrap_item out");
        		}
    		}
    		//向左转同上
    		function left() {
        		m--;
        		if (m == -1) {
        		    m = 100 * i_m;
        		}
        		for (var i = 0; i < i_m; i++) {
        		    $(wrap_items[i]).removeClass();
        		}
        		$(wrap_items[m % i_m]).attr("class", "wrap_item out");
        		$(wrap_items[(m + 1) % i_m]).attr("class", "wrap_item middle_left");
        		$(wrap_items[(m + 2) % i_m]).attr("class", "wrap_item show");
        		$(wrap_items[(m + 3) % i_m]).attr("class", "wrap_item middle_right");
        		for (var x = 4; x < i_m; x++) {
        		    $(wrap_items[(m + x) % i_m]).attr("class", "wrap_item out");
        		}
    		};
    		//中间那个出来
            function center(e){
                var img=$(e).children("img");
                var mask_img=$("#mask");
                var src="";
                var link="";
                src=img.attr("src");
                link=img.attr("data_link");
                mask_img.attr("src",src);
                mask_img.animate({
                    width:"1348px",
                    height:"718px",
                    top:"-80px"
                },500,function(){
                    location.href=link;
                });
            }
    		//左右图片分开的动画（分配图片位置）
    		function kaishi() {
            	wrap_items.each(function (i) {
            	    if (i == 1) {
            	        $(this).addClass("middle_left");
            	    } else if (i == 2) {
            	    } else if (i == 3) {
            	        $(this).addClass("middle_right");
            	    } else {
            	        $(this).addClass("out");
            	    }
            	});
    		}
    		//展示图片
    		function showPicture() {
                console.log(777);
    			kaishi();
    			setTimeout(function(){
        			wrap_items.each(function (i) {
            		//绑定左右click事件
            		$(this).click(function () {
            		    if ($(this).attr("class") == "wrap_item middle_right") {
            		        right();
            		    } else if ($(this).attr("class") == "wrap_item middle_left") {
            		        left();
            		    }else if($(this).attr("class")=="wrap_item show"){
                            center(this);
                        }
            		});
        			});
        		},100)
    		}