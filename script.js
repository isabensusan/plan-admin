// var selectMateria = document.getElementById('select-materia');
// var selected = selectMateria.options[selectMateria.selectedIndex].value;

var inputBox = document.getElementById('input-box');
var textoMateriasAp = document.getElementById('materias-aprobadas');
var inputContainer = document.getElementById('input-container');
var materiasAp = [];
var materiasContainer = document.getElementById('materias-ui-container');
//var uiMaterias = document.getElementsByClassName('ui-materias');
var uiMaterias = document.getElementsByClassName('checkbox-wrapper');
var tramosAp = document.getElementById('tramos');
var checkboxes = document.getElementsByClassName('checkbox-materia');

// 
// function dataSelect() {
//   if(selected == 'admin') {
//     materias = materiasAdmin;
//   }
//   else {
//     materias = materiasSis;
//   }
//   //checkbox();
// }
// dataSelect();

function drawBoxes() {
  for (i = 0; i < materias.length; i++) {
      nombreMateria = materias[i].materia;
      idMateria = materias[i].id;

      checkboxWrap= document.createElement("div");
      checkboxWrap.className = "checkbox-wrapper";
      checkboxWrap.id = materias[i].id;
      checkboxWrap.style.order = materias[i].orden;

      objetoInput = document.createElement("input");
      objetoInput.type = 'checkbox';
      objetoInput.className = 'checkbox-materia';
      objetoInput.value = idMateria;

      textoInput = document.createElement("h4");
      textoInput.innerHTML = nombreMateria;

      textoIdMateria = document.createElement("p");
      textoIdMateria.innerHTML = idMateria;

      inputContainer.appendChild(checkboxWrap);
      checkboxWrap.appendChild(objetoInput);
      checkboxWrap.appendChild(textoInput);
      checkboxWrap.appendChild(textoIdMateria);

      // divMaterias = document.createElement("div");
      // materiasContainer.appendChild(divMaterias);
      // divMaterias.innerHTML = nombreMateria;
      // divMaterias.className = "ui-materias";

  }
}
drawBoxes();

function checkbox(){
  materiasAp = ["0"];
  for (var i=0; i<checkboxes.length; i++) {
     if (checkboxes[i].checked) {
        materiasAp.push(checkboxes[i].value);
        materias[i].cursada = true;
     }
     else if (!this.checked) {
       materias[i].cursada = false;
     }

  }
  requisitosCheck();
}

function tramosF() {
  for (var i=0; i<12; i++) {
    if(tramosAp.checked) {
      materiasAp.push(materias[i].id);
      materias[i].cursada = true;
      checkboxes[i].checked = true;
    }
    else if (!tramosAp.checked) {
      materias[i].cursada = false;
      checkboxes[i].checked = false;
    }
  }
}

tramosAp.addEventListener('click', tramosF)
document.addEventListener('click', checkbox);

function requisitosCheck() {
  for(i=0; i < materias.length; i++) {
    for(j=0; j < materias[i].requisitos.length; j++) {
      if(materiasAp.indexOf(materias[i].requisitos[j]) < 0) {
       materias[i].cursable = false;
       break;
      }
      else {
        materias[i].cursable = true;
      }
    }
  }
    materiasCursables();
    materiasCursadas();
}


//si la materia es cursable, mostrar el bloque de materia

function materiasCursables() {
  for(i=0; i < materias.length; i++) {
    if(materias[i].cursable && !uiMaterias[i].classList.contains("cursable")) {
      console.log(materias[i].materia)
      uiMaterias[i].className += " cursable"
    }
    else if(!materias[i].cursable) {
      uiMaterias[i].classList.remove("cursable")
    }
  }
}

function materiasCursadas() {
  for(i=0; i < materias.length; i++) {
    if(materias[i].cursada && !uiMaterias[i].classList.contains("cursada")) {
      uiMaterias[i].className += " cursada"
    }
    else if(!materias[i].cursada) {
      uiMaterias[i].classList.remove("cursada")
    }
  }
}


checkbox();

//Kpis
kpiAprobadas = document.getElementById('kpi-aprobadas');
kpiAvance = document.getElementById('kpi-avance');
kpiRestante = document.getElementById('kpi-restante');

function kpis() {
  kpiAprobadas.innerHTML = materiasAp.length - 1;
  restantes = (materias.length - (materiasAp.length - 1));
  avance = (materiasAp.length - 1) / materias.length * 100;
  kpiAvance.innerHTML = avance.toFixed(2) + "%" ;
  kpiRestante.innerHTML = restantes;
}

kpis();
document.addEventListener('click', kpis);

// function refreshData() {
//   dataSelect();
//   drawBoxes();
//   checkbox();
// }
// selectMateria.addEventListener('click', refreshData);

// function correlativasColor() {
//   for(k=0; k < materias.length; k++) {
//     for(j=0; j < materias[k].correlativa.length; j++) {
//       idCo = materias[k].correlativa[j];
//         if(idCo > 0 ) {
//           idTarget = document.getElementById(idCo);
//           idTarget.className += "correlativa"
//       }
//     }
//   }
// }
//
// function arbolCorrelativas() {
//   for(i=0; i < uiMaterias.length; i++) {
//       uiMaterias[i].addEventListener('click', correlativasColor)
//   }
// }
//
// arbolCorrelativas();
//
// // Funcion para determinar posicion
// function getPosition(el) {
//   var xPos = 0;
//   var yPos = 0;
//
//   while (el) {
//     if (el.tagName == "BODY") {
//       // deal with browser quirks with body/window/document and page scroll
//       var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
//       var yScroll = el.scrollTop || document.documentElement.scrollTop;
//
//       xPos += (el.offsetLeft - xScroll + el.clientLeft);
//       yPos += (el.offsetTop - yScroll + el.clientTop);
//     } else {
//       // for all other non-BODY elements
//       xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//       yPos += (el.offsetTop - el.scrollTop + el.clientTop);
//     }
//
//     el = el.offsetParent;
//   }
//   return {
//     x: xPos,
//     y: yPos
//   };
// }


//
// function getPosition(el) {
//   return {
//     x: el.offsetLeft,
//     y: el.offsetTop
//   }
// }

// // deal with the page getting resized or scrolled
// window.addEventListener("scroll", updatePosition, false);
// window.addEventListener("resize", updatePosition, false);
//
// function updatePosition() {
//   // add your code to update the position when your browser
//   // is resized or scrolled
// }
//
// function drawLines() {
//
//   svgObject = document.getElementById('relaciones');
//   for(i=0; i < uiMaterias.length; i++) {
//       position = getPosition(uiMaterias[i]);
//       uiMaterias[i].dataset.xPos = position.x;
//       uiMaterias[i].dataset.yPos = position.y;
//       uiMaterias[i].dataset.correlativa = materias[i].correlativa;
//   }
//
//   for(i=0; i < uiMaterias.length; i++) {
//     for(j=0; j < materias[i].correlativa.length; j++) {
//       colorRand = "#"+((1<<24)*Math.random()|0).toString(16);
//       idCorrelativa = materias[i].correlativa[j];
//       console.log(idCorrelativa);
//       lineTarget = document.getElementById(idCorrelativa);
//       console.log(lineTarget);
//
//       if(idCorrelativa > 0 ) {
//         var lineObject = document.createElementNS("http://www.w3.org/2000/svg","line");
//         lineObject.setAttributeNS(null, "stroke" , "black");
//         lineObject.setAttributeNS(null, "stroke-width", "2");
//         lineObject.setAttributeNS(null, "marker-end", "url(#arrow)");
//
//         lineObject.setAttributeNS(null, "x1" , uiMaterias[i].dataset.xPos);
//         lineObject.setAttributeNS(null, "y1" , uiMaterias[i].dataset.yPos);
//
//         lineObject.setAttributeNS(null, "x2" , lineTarget.dataset.xPos);
//         lineObject.setAttributeNS(null, "y2" , lineTarget.dataset.yPos);
//
//
//         svgObject.appendChild(lineObject);
//       }
//     }
//   }
// }
//
// drawLines();
