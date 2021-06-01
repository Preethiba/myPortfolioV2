$(document).ready(function(){

	document.querySelector("#mobileNav").addEventListener("click",function(){
		if($("#navList").is(":visible")){
			$("#navList").slideUp();
		}else{
			$("#navList").css("display","block");
			$("#navList li").css("display","block");
		}
	});
});
