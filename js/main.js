navOpen = false;
function toggleNav()
{
    navOpen = !navOpen;
    console.log(this.navOpen);
    if (this.navOpen) {
        //transition to open
        
        document.getElementById("collapse").style.display = "block";
    } else {
        document.getElementById("collapse").style.display= "none";
    }

}