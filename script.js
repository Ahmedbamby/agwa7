"use strict";

const CONTACT_EVENTS = {
  whatsapp: {
    content_name: "whatsapp_contact",
    content_category: "lead"
  },
  phone: {
    content_name: "direct_phone_call",
    content_category: "lead"
  }
};

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const whatsappButton = event.target.closest(".whatsapp-button");
  const phoneButton = event.target.closest(".phone-button");

  if (whatsappButton && window.ttq) {
    window.ttq.track("ClickButton", CONTACT_EVENTS.whatsapp);
  } else if (phoneButton && window.ttq) {
    window.ttq.track("ClickButton", CONTACT_EVENTS.phone);
  }
});

const yearNode = document.querySelector("#current-year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
