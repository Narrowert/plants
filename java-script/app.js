$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('collapse');

        
        $(this).toggleClass("active");
        
});

console.log("120/120")