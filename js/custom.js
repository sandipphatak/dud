
$(document).ready(function(){
			$(".loginpanel").on("click",function(){
				$(".dropdownMenu").show().animate({top: "107px"});
			});
			$('body').ALightBox({
				showYoutubeThumbnails: true,
				});
			$("#alb_icon_close").click(function(){
				$("#alb_content").children('iframe').attr("src", "");
			});
			
			$("#signUp").on("click", function(){
				console.log("in");
				$(".showDiv").show();
				$(".signLink, .fgPass .openLink").hide();
				$(".registerContainer .headH5").text("JOIN TODAY WITH");
				$(".btnSign").val('sign up');
				$(".dividerBlock .divider").css({"height": 235, "transition": "all 0.5s ease"});
			});
			$("#login").click(function(){
				$(".showDiv").hide();
				$(".signLink, .fgPass .openLink").show();
				$(".registerContainer .headH5").text("log in with");
				$(".btnSign").val('sign in');
				$(".dividerBlock .divider").css({"height": 150, "transition": "all 0.5s ease"});
			});
			


});