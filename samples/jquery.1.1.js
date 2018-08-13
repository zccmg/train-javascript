$(function  () {


	$("button").on({
		"click": function (e) {
			$("p").slideToggle()
		},
		"mouseenter": function() {
			this.textContent = "show more contents..."
		},
		"mouseleave": function() {
			this.textContent = "Show Content"
		}
	})

})