
window.onload = function(){
   //滚动时添加样式
   window.onscroll = function(){
    if(window.scrollY>0){
        console.log("滚动");
        $("#nav").addClass("nav-active")
    }
    else{
         //console.log("到顶部");
        $("#nav").removeClass("nav-active")
    }
   }
   //收起二级菜单
   $(".navbar-nav a").click(function(){
    //console.log("点击");
    $(".navbar-toggler").click()
   })

}