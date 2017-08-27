var $tabList = $(".js-tab-list");
var $tabContent = $(".js-tab-content");
$tabList.on("click", function(e){
	var $this = $(e.target);
	$tabList.find(" > div").removeClass("active");
	$this.addClass("active");
	$tabContent.find(" > div").addClass("hide").removeClass("show");
	$("#" + $this.data("target")).addClass("show").removeClass("hide");
})