$(function() {
  $("p").addClass("text-body");
  $("header").find("a").addClass("text-dark");
  $("main").find("a").addClass("text-primary");
  $("i").addClass("text-dark");
  $("table").addClass("table table-striped text-left");
  $("a").click(function() {
    var a = new RegExp("/" + window.location.host + "/");
    if (!a.test(this.href)) {
      $(this).attr("target", "_blank");
    }
  });
});
