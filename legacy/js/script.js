(function () {
  "use strict";

  var header = document.querySelector(".site-header");

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var toggle = document.querySelector(".nav-toggle");
  var panel = document.getElementById("menu-mobile");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Fechar" : "Menu";
    panel.hidden = !open;
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      setMenu(panel.hidden);
    });

    panel.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setMenu(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !panel.hidden) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var works = Array.prototype.slice.call(document.querySelectorAll(".work"));

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");

      filterButtons.forEach(function (other) {
        var active = other === button;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-pressed", String(active));
      });

      works.forEach(function (card) {
        card.hidden = !(filter === "todos" || card.getAttribute("data-cat") === filter);
      });
    });
  });

  var carousel = document.querySelector("[data-carousel]");
  var prevButton = document.querySelector("[data-carousel-prev]");
  var nextButton = document.querySelector("[data-carousel-next]");

  if (carousel && prevButton && nextButton) {
    function step() {
      var item = carousel.querySelector(".carousel__item");
      return item ? item.getBoundingClientRect().width + 14 : 300;
    }

    function updateButtons() {
      var max = carousel.scrollWidth - carousel.clientWidth - 2;
      prevButton.disabled = carousel.scrollLeft <= 2;
      nextButton.disabled = carousel.scrollLeft >= max;
    }

    prevButton.addEventListener("click", function () {
      carousel.scrollBy({ left: -step(), behavior: "smooth" });
    });

    nextButton.addEventListener("click", function () {
      carousel.scrollBy({ left: step(), behavior: "smooth" });
    });

    carousel.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    updateButtons();
  }

  var serviceLinks = document.querySelectorAll("[data-service]");
  var typeSelect = document.getElementById("tipo");

  serviceLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (typeSelect) {
        typeSelect.value = link.getAttribute("data-service");
      }
    });
  });

  var form = document.getElementById("form-contato");

  if (form) {
    var status = form.querySelector(".form__status");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        status.textContent = "Confira os campos destacados para enviar.";
        form.reportValidity();
        return;
      }

      var name = form.elements.nome.value.trim();
      var email = form.elements.email.value.trim();
      var type = form.elements.tipo.value;
      var message = form.elements.mensagem.value.trim();
      var subject = "Pedido de orçamento — " + type + " (" + name + ")";
      var body = "Olá, Marina!\n\nNome: " + name + "\nE-mail: " + email + "\nTipo de ensaio: " + type + "\n\n" + message + "\n";

      status.textContent = "Abrindo seu aplicativo de e-mail com a mensagem pronta…";
      window.location.href = "mailto:contato@marinaduarte.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
})();
