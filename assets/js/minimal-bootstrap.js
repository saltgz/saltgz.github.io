$(function () {
  $("table").wrap("<div class=\"table-responsive\" />");
  $("table").addClass("table table-striped text-left");
  $("a").click(function () {
    var a = new RegExp("/" + window.location.host + "/");
    if (!a.test(this.href)) {
      $(this).attr("target", "_blank");
    }
  });
});