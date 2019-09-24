$(function () {
  // $("#twitter-widget-0").height($("#center-column").clientHeight);
  $("p").addClass("text-body");
  $("header").find("a").addClass("text-dark");
  $("main").find("a").addClass("text-primary");
  $("i").addClass("text-warning");
  $("table").wrap("<div class=\"table-responsive\" />");
  $("table").addClass("table table-striped text-left");
  $("a").click(function () {
    var a = new RegExp("/" + window.location.host + "/");
    if (!a.test(this.href)) {
      $(this).attr("target", "_blank");
    }
  });
  $(".twitter-timeline").attr("data-height", $("#center-column").height())
});