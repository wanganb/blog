var txt;
$.get('data/1.MarkDown',function(result){
    $("#div_preload").hide();
    txt=result;
    $("xmp").text(result);
    jQuery.getScript("http://strapdownjs.com/v/0.2/strapdown.js").done(function() {
        console.log("ok");
    });
});
