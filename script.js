const telefoneAcademia = "5511999999999";
const mensagemPromocao = encodeURIComponent(
  "Olá!\n\nTenho interesse na promoção do Plano Black.\n\nGostaria de mais informações."
);

function updateCountdown() {
  const countdownTarget = new Date();
  countdownTarget.setHours(countdownTarget.getHours() + 12);
  const countdownElement = document.getElementById("countdown");

  if (!countdownElement) return;

  const intervalId = setInterval(() => {
    const now = new Date();
    const diff = countdownTarget - now;

    if (diff <= 0) {
      clearInterval(intervalId);
      countdownElement.textContent = "00h 00m 00s";
      return;
    }

    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(
      Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");

    countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

function updateProgress() {
  const fill = document.querySelector(".progress-fill");
  const percentText = document.getElementById("progressPercent");
  const filledPercent = 75;
  if (!fill || !percentText) return;
  fill.style.width = `${filledPercent}%`;
  percentText.textContent = `${filledPercent}% das vagas preenchidas`;
}

function copyCoupon() {
  const couponElement = document.getElementById("couponCode");
  const coupon = couponElement ? couponElement.textContent.trim() : "POWERFIT20";
  navigator.clipboard.writeText(coupon).then(() => {
    const button = document.getElementById("copyCouponBtn");
    if (!button) return;
    button.textContent = "Copiado!";
    setTimeout(() => {
      button.textContent = "Copiar Cupom";
    }, 1800);
  });
}

function initFAQ() {
  const faqButtons = document.querySelectorAll(".faq-button");
  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const isActive = button.classList.toggle("active");
      if (!content) return;
      if (isActive) {
        content.classList.add("open");
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        content.classList.remove("open");
        content.style.maxHeight = "0";
      }
    });
  });
}

function initTestimonials() {
  const testimonials = Array.from(document.querySelectorAll(".testimonial"));
  const dots = Array.from(document.querySelectorAll(".carousel-dots button"));
  if (!testimonials.length || !dots.length) return;
  let activeIndex = 0;

  function showSlide(index) {
    testimonials.forEach((item, idx) => {
      item.classList.toggle("active", idx === index);
      dots[idx].classList.toggle("active", idx === index);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      activeIndex = index;
      showSlide(index);
    });
  });

  showSlide(activeIndex);
  setInterval(() => {
    activeIndex = (activeIndex + 1) % testimonials.length;
    showSlide(activeIndex);
  }, 5000);
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  revealItems.forEach((item) => observer.observe(item));
}

function setupWhatsAppButtons() {
  const promoButton = document.getElementById("promoWhatsApp");
  if (promoButton) {
    promoButton.addEventListener("click", () => {
      window.open(`https://wa.me/${telefoneAcademia}?text=${mensagemPromocao}`, "_blank");
    });
  }

  const promoCTAs = document.querySelectorAll(".promo-cta");
  promoCTAs.forEach((button) => {
    button.addEventListener("click", () => {
      const plan = button.dataset.plan || "promoção";
      const message = encodeURIComponent(
        `Olá!\n\nTenho interesse na ${plan}.\n\nGostaria de mais informações.`
      );
      window.open(`https://wa.me/${telefoneAcademia}?text=${message}`, "_blank");
    });
  });

  const couponBtn = document.getElementById("copyCouponBtn");
  if (couponBtn) {
    couponBtn.addEventListener("click", copyCoupon);
  }
}

function setupBookingForm() {
  const form = document.getElementById("form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const dia = document.getElementById("dia").value;
    const data = document.getElementById("data").value;
    const professor = document.getElementById("professor").value;
    const treino = document.getElementById("treino").value;

    const mensagem = encodeURIComponent(
      `Olá!\n\nTenho interesse em agendar um treino.\n\nNome: ${nome}\nDia: ${dia}\nData: ${data}\nProfessor: ${professor}\nTreino: ${treino}`
    );

    window.open(`https://wa.me/${telefoneAcademia}?text=${mensagem}`, "_blank");
  });
}

function initializePage() {
  updateCountdown();
  updateProgress();
  initFAQ();
  initTestimonials();
  initReveal();
  setupWhatsAppButtons();
  setupBookingForm();
}

window.addEventListener("DOMContentLoaded", initializePage);
