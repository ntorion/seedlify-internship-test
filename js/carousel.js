$( document ).ready(function() {

  var selected = "#item1";

  description = $("#description-item1").html();
  $('.inside').html(description);

  update(selected);

  function update(selected) {
    var w = $(selected).outerWidth();
    var h = $(selected).outerHeight();
    var pos2 = $(selected).position();

    $("#selection").css({width: w + 'px', height: h + 'px'});
    $("#selection").css({'top': pos2.top + 'px', 'left': pos2.left + 'px'});
  }

  $('.product-selection').click(function() {
    selected = "#" + $(this).attr("id");

    srcImg = $(selected + " img").attr("src");
    $('.product-image img').attr("src", srcImg);

    descriptionID = "#description-" + $(this).attr("id");
    description = $(descriptionID).html();
    $('.inside').html(description);

    $("#selection").css({'top': $(selected).position().top + 'px'});
    $("#selection").animate({'left': $(selected).position().left + 'px'}, 200, function(){});

  });

  $( window ).resize(function() {
    update(selected);
  });

});
