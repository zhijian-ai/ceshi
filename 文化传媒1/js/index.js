$('#slider li').eq(0).show().siblings().hide()
var i=0;
var li=$('#slider li').length;
var t=0;

function aq(){
     t=setInterval(function(){
		i++;
		if(i>li-1){
			i=0;
		}
		$('#slider li').eq(i).show().siblings().hide();
		$('#slider .p2 span').eq(i).addClass('cur1').siblings().removeClass('cur1');
	},1000)
}
aq();

$('#slider').hover(function(){
	clearInterval(t)
	
},function(){
	aq()
})

$('#slider span').click(function(){
	$(this).addClass('cur1').siblings().removeClass('cur1');
	var i=$(this).index();
	$('#slider li').eq(i).show().siblings().hide();
})

$('#pre').click(function(){
	i--;
	if(i<0){
		i=2;
	}
	$('#slider li').eq(i).show().siblings().hide();
	$('#slider .p2 span').eq(i).addClass('cur1').siblings().removeClass('cur1');
})
$('#next').click(function(){
	i++;
	if(i>2){
		i=0;
	}
	$('#slider li').eq(i).show().siblings().hide();
	$('#slider .p2 span').eq(i).addClass('cur1').siblings().removeClass('cur1');
})












