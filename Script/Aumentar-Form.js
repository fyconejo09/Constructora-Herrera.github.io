if(screen.width > 768 ) {
    window.onload = function aumentarform() {
      if (document.getElementById("modificable1").style.width == '90%') {
      document.getElementById("modificable1").style.width = '100% ';
      document.getElementById("modificable1").style.height = '100% ';
      document.getElementById("modificable").style.margin = '0px';
      document.getElementById("modificable1").style.marginTop = '-19%';
      } else {
      document.getElementById("modificable1").style.width = '100% ';
      document.getElementById("modificable1").style.height = '100% ';
      document.getElementById("modificable").style.margin = '0px';
      document.getElementById("modificable1").style.marginTop = '-19%';
      }
    }
}
