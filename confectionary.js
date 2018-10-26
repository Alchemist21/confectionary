var sugarCount = 0

$("#add-sugar").on('click', function(){
  sugarCount++
  Cookies.set("sugarCookie", sugarCount, {expire: 7})
  getSugar = Cookies.get("sugarCookie")
  $("#sugar-count").html(getSugar)
})

getSugar = Cookies.get("sugarCookie")
$("#sugar-count").html(getSugar)

var chocoCount = 0

$("#add-choco").on('click', function(){
  chocoCount++
  Cookies.set("chocoCookie", chocoCount)
  getChoco = Cookies.get("chocoCookie")
  $("#choco-count").html(getChoco)
})

var lemonCount = 0

$("#add-lemon").on('click', function(){
  lemonCount++
  Cookies.set("lemonCookie", lemonCount)
  getLemon = Cookies.get("lemonCookie")
  $("#lemon-count").html(getLemon)
})

$("#feel-guilty").on('click', function () {
    sugarCount = 0
    chocoCount = 0
    lemonCount = 0
    Cookies.set("sugarCookie", sugarCount)
    Cookies.set("chocoCookie", chocoCount)
    Cookies.set("lemonCookie", lemonCount)
    getChoco = Cookies.get("chocoCookie")
    getSugar = Cookies.get("sugarCookie")
    getLemon = Cookies.get("lemonCookie")
    $("#sugar-count").html(getSugar)
    $("#choco-count").html(getChoco)
    $("#lemon-count").html(getLemon)
})
