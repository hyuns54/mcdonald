$(".food").hide();
$(".delivery").hide();
$(".fd_btn").click(function () {
  $(".food").show();
  $(".qs").hide();
  $(".delivery").hide();
})
$(".rd_btn").click(function () {
  $(".food").hide();
  $(".qs").hide();
  $(".delivery").show();
})
$(".rt_btn").click(function () {
  $(".food").hide();
  $(".qs").show();
  $(".delivery").hide();
})

$(".mgnb_wrap").hide();

$(".menu").click(function () {
  $(".mgnb_wrap").fadeIn();
});
$(".mgnb_close").click(function () {
  $(".mgnb_wrap").fadeOut();
});