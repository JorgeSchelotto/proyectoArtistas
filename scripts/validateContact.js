var infancias = document.getElementById("textoInfancias");
var niño = document.getElementById("niño");
var todas = document.getElementById("todas");
infancias.setAttribute("hidden", true);
niño.addEventListener("click", () => {
  infancias.removeAttribute("hidden");
});

todas.addEventListener("click", () => {
  infancias.setAttribute("hidden", true);
});

$(document).ready(function() {
  $("body").fadeIn(2000);
  $("img").fadeIn(2000);
  $(".filter-button").click(function() {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });
  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
  $(".ir-arriba").click(function() {
    $("body, html").animate(
      {
        scrollTop: "0px"
      },
      300
    );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(300);
    } else {
      $(".ir-arriba").slideUp(300);
    }
  });
});

$(function() {
  var foo = $("#gallery");
  foo.poptrox({
    usePopupCaption: true
  });
});

function validateForm() {
  var name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("status").innerHTML =
      "¡Quiero conocerte, dime tu nombre!.";
    return false;
  }
  var email = document.getElementById("email").value;
  if (email == "") {
    document.getElementById("status").innerHTML =
      "Dime tu email para que pueda contarte mas sobre mi y mi obra.";
    return false;
  } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.getElementById("status").innerHTML =
        "¡Ups! hay algo raro con tu Email. Revisa si esta bien escrito.";
      return false;
    }
  }
  var message = document.getElementById("message").value;
  if (message == "") {
    document.getElementById("status").innerHTML =
      "Por favor enviame un mensaje. Cuentame ¿de donde eres? ¿te gustó lo que viste? ¿te gustaría tener información sobre proximas muestras?";
    return false;
  }
  document.getElementById("status").innerHTML = "Enviando...";
  document.getElementById("contact-form").submit();
}

$(function() {
  var selectedClass = "";
  $(".filter").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div")
      .not("." + selectedClass)
      .fadeOut()
      .removeClass("animation");
    setTimeout(function() {
      $("." + selectedClass)
        .fadeIn()
        .addClass("animation");
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});
filterSelection("all"); // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(window).load(function() {
  var $container = $(".portfolioContainer");
  $container.isotope({
    filter: "*",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: false
    }
  });

  $(".portfolioFilter a").click(function() {
    $(".portfolioFilter .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false
      }
    });
    return false;
  });
});
