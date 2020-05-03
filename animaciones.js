        function transicion_color(idElemento,colorViejo,colorNuevo,paso){
          //constantes
          var PASOS=6;
          var TIEMPO=1;

          if(paso<PASOS){
            var colorViejoRGB=hexToRgb(colorViejo);
            var colorNuevoRGB=hexToRgb(colorNuevo);
            var colorActualRGB={r:0,g:0,b:0};

            colorActualRGB.r=Math.round( colorViejoRGB.r+paso*(colorNuevoRGB.r-colorViejoRGB.r)/PASOS);
            colorActualRGB.g=Math.round(colorViejoRGB.g+paso*(colorNuevoRGB.g-colorViejoRGB.g)/PASOS);
            colorActualRGB.b=Math.round(colorViejoRGB.b+paso*(colorNuevoRGB.b-colorViejoRGB.b)/PASOS);

            console.log("pruebas:RGB("+colorActualRGB.r+","+colorActualRGB.g+","+colorActualRGB.b+")");
            if(paso>0){
              document.getElementById(idElemento).style.backgroundColor="rgb("+colorActualRGB.r+","+colorActualRGB.g+","+colorActualRGB.b+")";
            }
            setTimeout(function(){transicion_color(idElemento,colorViejo,colorNuevo,paso+1)},Math.round(TIEMPO*1000/PASOS));

          }

        }

        function pruebas(){
          transicion_color("buttPruebas","#352080","#802065",0);
        }

        //cogida de internet
        function hexToRgb(hex) {
          var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          } : null;
        }