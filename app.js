const LOGO_SRC = "./logo/466951488_465452966084623_3726361205865754691_n.jpg";
const WHATSAPP_BASE = "https://wa.me/77789599390";

const imageMap = {
  oreo: "./cake%20photos/oreo.jpg",
  caramel: "./cake%20photos/caramel.jpg",
  fistashka: "./cake%20photos/fistashka.jpg",
  rafaelo: "./cake%20photos/rafaelo.jpg",
  tiramisu: "./cake%20photos/tiramisu.jpg",
  nutella: "./cake%20photos/nutella.jpg",
};

const categories = [
  { id: "all", label: "Барлығы" },
  { id: "cakes", label: "Торттар" },
  { id: "wedding", label: "Үйлену торттары" },
  { id: "pancakes", label: "Панкейк" },
  { id: "pies", label: "Пирогтар" },
  { id: "snacks", label: "Тіскебасарлар" },
  { id: "drinks", label: "Ішетін сусындар" },
];

const pancakeVariants = [
  { id: "one", label: "1 құймақтан", price: 1390 },
  { id: "two", label: "2 құймақтан", price: 1990 },
];

const products = [
  {
    id: "oreo",
    category: "pancakes",
    title: "Орео",
    description: "Жұмсақ, былқылдақ панкейктер, нәзік крем, орео печеньесі.",
    image: imageMap.oreo,
    variants: pancakeVariants,
    ingredients: "Панкейк, нәзік крем, орео печеньесі, сүтті негіз.",
    hit: true,
  },
  {
    id: "caramel",
    category: "pancakes",
    title: "Карамельный",
    description: "Жұмсақ, былқылдақ панкейктер, карамельді крем, попкорн.",
    image: imageMap.caramel,
    variants: pancakeVariants,
    ingredients: "Панкейк, карамельді крем, попкорн, жұмсақ крем.",
    hit: true,
  },
  {
    id: "fistashka",
    category: "pancakes",
    title: "Фисташковый",
    description: "Жұмсақ, былқылдақ панкейктер, нәзік крем, фисташка, малина тосабы.",
    image: imageMap.fistashka,
    variants: pancakeVariants,
    ingredients: "Панкейк, фисташка, малина тосабы, нәзік крем.",
    hit: true,
  },
  {
    id: "rafaello",
    category: "pancakes",
    title: "Рафаэлло",
    description: "Жұмсақ, былқылдақ панкейктер, нәзік крем, кокос дәмі, Рафаэлло шоколады.",
    image: imageMap.rafaelo,
    variants: pancakeVariants,
    ingredients: "Панкейк, кокос, ақ крем, Рафаэлло шоколады.",
    hit: true,
  },
  {
    id: "tiramisu",
    category: "pancakes",
    title: "Тирамису",
    description: "Жұмсақ панкейктер, нәзік крем, кофе дәмі және какао.",
    image: imageMap.tiramisu,
    variants: pancakeVariants,
    ingredients: "Панкейк, кофе дәмі, какао, нәзік крем.",
    hit: true,
  },
  {
    id: "custom-cake",
    category: "cakes",
    title: "Тапсырысқа торт",
    description: "Мерекеңізге сай салмақ, дәм және дизайн жеке таңдалады.",
    agreementLabel: "Бағасы келісім бойынша",
    unitLabel: "1 дана",
    ingredients: "Дәмі мен салмасы тапсырысқа қарай таңдалады.",
    hit: true,
  },
  {
    id: "birthday-cake",
    category: "cakes",
    title: "Туған күн торты",
    description: "Жылы жазу, нәзік декор және туған күн иесіне арналған дизайн.",
    agreementLabel: "Бағасы келісім бойынша",
    unitLabel: "1 дана",
    ingredients: "Бисквит, крем, салма және декор келісім бойынша.",
  },
  {
    id: "kids-cake",
    category: "cakes",
    title: "Балаларға арналған торт",
    description: "Балалар мерекесіне арналған ашық, сүйкімді және қауіпсіз декор.",
    agreementLabel: "Бағасы келісім бойынша",
    unitLabel: "1 дана",
    ingredients: "Табиғи өнімдер, жұмсақ крем, балалар стиліндегі декор.",
  },
  {
    id: "bento-cake",
    category: "cakes",
    title: "Bento торт",
    description: "Кішкентай сыйлыққа немесе жылы құттықтауға арналған мини торт.",
    agreementLabel: "Бағасы келісім бойынша",
    unitLabel: "1 дана",
    ingredients: "Мини торт, крем, қысқа жазу немесе шағын декор.",
  },
  {
    id: "wedding-cake",
    category: "wedding",
    title: "Үйлену торты",
    description: "Тойға арналған нәзік, премиум көріністі торт.",
    agreementLabel: "Жеке есептеледі",
    unitLabel: "1 дана",
    ingredients: "Қабат, салмақ, дәм және декор жеке есептеледі.",
    hit: true,
  },
  {
    id: "tiered-cake",
    category: "wedding",
    title: "Көп қабатты торт",
    description: "Үлкен дастарханға арналған көп қабатты салтанатты торт.",
    agreementLabel: "Жеке есептеледі",
    unitLabel: "1 дана",
    ingredients: "Қабат саны, салмақ және декор келісім бойынша.",
  },
  {
    id: "fruit-pie",
    category: "pies",
    title: "Жемісті пирог",
    description: "Жеміс дәмі бар үй жылуын сездіретін пирог.",
    agreementLabel: "Бағасы келісім бойынша",
    unitLabel: "1 дана",
    ingredients: "Қамыр, жеміс салмасы, жұмсақ тәттілік.",
  },
  {
    id: "home-pie",
    category: "pies",
    title: "Үй пирогы",
    description: "Шайға жарасатын қарапайым әрі дәмді үй пирогы.",
    agreementLabel: "Бағасы келісім бойынша",
    unitLabel: "1 дана",
    ingredients: "Үй қамыры, салма және маусымдық дәм.",
  },
  {
    id: "snack-set",
    category: "snacks",
    title: "Тіскебасар сеті",
    description: "Мерекелік дастарханға ыңғайлы шағын тіскебасарлар.",
    agreementLabel: "Бағасы келісім бойынша",
    unitLabel: "1 сет",
    ingredients: "Құрамы тапсырыс форматына қарай таңдалады.",
  },
  {
    id: "tea",
    category: "drinks",
    title: "Шай",
    description: "Тәттілермен жақсы үйлесетін ыстық шай.",
    agreementLabel: "Бағасы келісім бойынша",
    unitLabel: "1 дана",
    ingredients: "Шай таңдауы филиалдағы бар мәзірге байланысты.",
  },
  {
    id: "coffee",
    category: "drinks",
    title: "Кофе",
    description: "Панкейк пен десертке жарасатын хош иісті кофе.",
    agreementLabel: "Бағасы келісім бойынша",
    unitLabel: "1 дана",
    ingredients: "Кофе таңдауы филиалдағы бар мәзірге байланысты.",
  },
  {
    id: "mors-lemonade",
    category: "drinks",
    title: "Морс / лимонад",
    description: "Жеңіл, сергітетін сусын.",
    agreementLabel: "Бағасы келісім бойынша",
    unitLabel: "1 дана",
    ingredients: "Дәмі мен көлемі қолжетімді мәзірге қарай нақтыланады.",
  },
];

const galleryImages = [
  { src: imageMap.oreo, alt: "Орео панкейк" },
  { src: imageMap.caramel, alt: "Карамельді панкейк" },
  { src: imageMap.fistashka, alt: "Фисташкалы панкейк" },
  { src: imageMap.rafaelo, alt: "Рафаэлло панкейк" },
  { src: imageMap.tiramisu, alt: "Тирамису панкейк" },
  { src: imageMap.nutella, alt: "Nutella панкейк" },
];

const fillings = [
  {
    id: "red-velvet",
    name: "Қызыл бархат",
    short: "Жұмсақ әрі мерекелік",
    description: "Жұмсақ бисквит, нәзік крем және мерекелік қызғылт реңк.",
    bg: "linear-gradient(135deg, #fff1f4, #f9d4dc)",
  },
  {
    id: "pistachio",
    name: "Фисташка",
    short: "Жаңғақты нәзіктік",
    description: "Фисташка дәмі, жеңіл крем және табиғи жасыл реңк.",
    bg: "linear-gradient(135deg, #f7fff0, #dcebc9)",
  },
  {
    id: "chocolate",
    name: "Шоколад",
    short: "Жылы, қою дәм",
    description: "Қанық шоколад, жұмсақ крем және шаймен керемет үйлесім.",
    bg: "linear-gradient(135deg, #fff5ea, #e7c5a6)",
  },
  {
    id: "rafaello",
    name: "Рафаэлло",
    short: "Кокос пен ақ крем",
    description: "Ақ крем, кокос дәмі және жеңіл премиум тәттілік.",
    bg: "linear-gradient(135deg, #fffdf7, #f3e7d2)",
  },
  {
    id: "fruit",
    name: "Жемісті",
    short: "Жидек пен сергектік",
    description: "Жидек, жеміс салмасы және жеңіл қышқыл-тәтті баланс.",
    bg: "linear-gradient(135deg, #fff0f7, #f7c8d6)",
  },
];

const locations = [
  {
    id: "panfilova",
    title: "Панфилова көшесі 26",
    short: "1 адрес · Қызылорда",
    query: "Қызылорда Панфилова көшесі 26",
  },
  {
    id: "esim",
    title: "Есім хан көшесі 15A",
    short: "2 адрес · Қызылорда",
    query: "Қызылорда Есім хан көшесі 15A",
  },
];

const reviews = [
  { text: "Торт өте дәмді болды!", name: "Айгүл", image: imageMap.rafaelo },
  { text: "Панкейктер жұмсақ әрі әдемі!", name: "Мадина", image: imageMap.oreo },
  { text: "Тапсырыс уақытында дайын болды!", name: "Әсел", image: imageMap.caramel },
  { text: "Дизайны да, дәмі де көңілімізден шықты.", name: "Динара", image: imageMap.fistashka },
];

const builderSteps = [
  {
    key: "event",
    question: "Қандай іс-шараға керек?",
    options: ["Туған күн", "Үйлену той", "Қыз ұзату", "Балалар мерекесі", "Басқа"],
  },
  {
    key: "people",
    question: "Қанша адамға?",
    options: ["5-10 адам", "10-20 адам", "20-40 адам", "40+ адам"],
  },
  {
    key: "taste",
    question: "Қандай дәм ұнайды?",
    options: ["Шоколад", "Ваниль", "Қызыл бархат", "Фисташка", "Рафаэлло", "Жемісті"],
  },
  {
    key: "style",
    question: "Дизайн стилі",
    options: ["Минимализм", "Люкс", "Балалар стилі", "Гүлдермен", "Фото/жазумен"],
  },
];

let activeCategory = "all";
let cart = {};
let builderIndex = 0;
const builderAnswers = {};
let toastTimer;

const dom = {
  nav: document.querySelector(".nav"),
  menuToggle: document.querySelector(".menu-toggle"),
  hitsTrack: document.querySelector("#hitsTrack"),
  categoryTabs: document.querySelector("#categoryTabs"),
  productsGrid: document.querySelector("#productsGrid"),
  cartCount: document.querySelector("[data-cart-count]"),
  cartDrawer: document.querySelector("[data-cart-drawer]"),
  cartBackdrop: document.querySelector("[data-cart-backdrop]"),
  cartItems: document.querySelector("[data-cart-items]"),
  cartEmpty: document.querySelector("[data-cart-empty]"),
  cartTotal: document.querySelector("[data-cart-total]"),
  orderForm: document.querySelector("[data-order-form]"),
  formWarning: document.querySelector("[data-form-warning]"),
  toast: document.querySelector("[data-toast]"),
  builderStepLabel: document.querySelector("[data-builder-step-label]"),
  builderProgress: document.querySelector("[data-builder-progress]"),
  builderQuestion: document.querySelector("[data-builder-question]"),
  builderOptions: document.querySelector("[data-builder-options]"),
  builderPrev: document.querySelector("[data-builder-prev]"),
  builderNext: document.querySelector("[data-builder-next]"),
  builderResult: document.querySelector("[data-builder-result]"),
  builderSummary: document.querySelector("[data-builder-summary]"),
  builderWhatsapp: document.querySelector("[data-builder-whatsapp]"),
  fillingsStage: document.querySelector("#fillingsStage"),
  fillingsList: document.querySelector("#fillingsList"),
  fillingName: document.querySelector("[data-filling-name]"),
  fillingDescription: document.querySelector("[data-filling-description]"),
  locationCards: document.querySelector("#locationCards"),
  mapFrame: document.querySelector("[data-map-frame]"),
  mapLink: document.querySelector("[data-map-link]"),
  locationTitle: document.querySelector("[data-location-title]"),
  reviewsTrack: document.querySelector("#reviewsTrack"),
  galleryGrid: document.querySelector("#galleryGrid"),
  lightbox: document.querySelector("[data-lightbox]"),
  lightboxImage: document.querySelector("[data-lightbox-image]"),
};

function formatPrice(value) {
  return `${new Intl.NumberFormat("ru-RU").format(value)} тг`;
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function getSelectedVariant(product, card) {
  if (!product.variants) return null;
  const checked = card.querySelector(`input[name="variant-${product.id}"]:checked`);
  return product.variants.find((variant) => variant.id === checked?.value) || product.variants[0];
}

function getCartKey(productId, variantId = "default") {
  return `${productId}::${variantId}`;
}

function getCartEntries() {
  return Object.entries(cart)
    .map(([key, item]) => {
      const product = getProduct(item.productId);
      if (!product) return null;
      const variant = product.variants?.find((entry) => entry.id === item.variantId) || null;
      const price = variant?.price ?? product.price ?? null;
      return {
        key,
        product,
        variant,
        quantity: item.quantity,
        price,
        agreementLabel: product.agreementLabel,
      };
    })
    .filter(Boolean)
    .filter((item) => item.quantity > 0);
}

function getCartSummary() {
  return getCartEntries().reduce(
    (summary, item) => {
      summary.count += item.quantity;
      if (typeof item.price === "number") {
        summary.total += item.price * item.quantity;
      } else {
        summary.agreementCount += item.quantity;
      }
      return summary;
    },
    { count: 0, total: 0, agreementCount: 0 },
  );
}

function setCartQuantity(productId, variantId, quantity) {
  const key = getCartKey(productId, variantId);
  if (quantity <= 0) {
    delete cart[key];
  } else {
    cart[key] = { productId, variantId, quantity };
  }
  renderCart();
  syncProductQuantities();
}

function changeCartQuantity(productId, variantId, delta) {
  const key = getCartKey(productId, variantId);
  const current = cart[key]?.quantity || 0;
  setCartQuantity(productId, variantId, Math.max(0, current + delta));
}

function getQuantity(productId, variantId = "default") {
  return cart[getCartKey(productId, variantId)]?.quantity || 0;
}

function productImageMarkup(product) {
  if (product.image) {
    return `<img src="${product.image}" alt="${product.title}" loading="lazy" />`;
  }
  return `<div class="placeholder-image"><img src="${LOGO_SRC}" alt="Zuhra Cakes" loading="lazy" /></div>`;
}

function priceMarkup(product) {
  if (product.variants) {
    return `
      <div class="price">
        ${product.variants.map((variant) => `<span>${variant.label} - ${formatPrice(variant.price)}</span>`).join("")}
      </div>
    `;
  }
  return `<div class="price"><span>${product.agreementLabel}</span></div>`;
}

function variantMarkup(product) {
  if (!product.variants) return "";
  return `
    <div class="variant-control">
      ${product.variants
        .map(
          (variant, index) => `
            <label>
              <span>${variant.label}</span>
              <input type="radio" name="variant-${product.id}" value="${variant.id}" ${index === 0 ? "checked" : ""} />
            </label>
          `,
        )
        .join("")}
    </div>
  `;
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card reveal";
  card.dataset.productId = product.id;
  card.innerHTML = `
    <div class="product-image">${productImageMarkup(product)}</div>
    <div class="product-body">
      <span class="product-kicker">${categories.find((category) => category.id === product.category)?.label || "Zuhra Cakes"}</span>
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      ${priceMarkup(product)}
      ${variantMarkup(product)}
      <div class="card-actions">
        <div class="qty-control" aria-label="${product.title} саны">
          <button type="button" data-qty-minus aria-label="Азайту">−</button>
          <span data-card-qty>0</span>
          <button type="button" data-qty-plus aria-label="Көбейту">+</button>
        </div>
        <button class="add-button" type="button" data-add-product>Қосу</button>
        <button class="ingredients-button" type="button" data-ingredients>Құрамы</button>
      </div>
    </div>
  `;

  card.addEventListener("change", (event) => {
    if (event.target.matches('input[type="radio"]')) syncCardQuantity(card, product);
  });

  card.querySelector("[data-qty-minus]").addEventListener("click", () => {
    const variant = getSelectedVariant(product, card);
    changeCartQuantity(product.id, variant?.id || "default", -1);
  });

  card.querySelector("[data-qty-plus]").addEventListener("click", () => {
    const variant = getSelectedVariant(product, card);
    changeCartQuantity(product.id, variant?.id || "default", 1);
  });

  card.querySelector("[data-add-product]").addEventListener("click", () => {
    const variant = getSelectedVariant(product, card);
    changeCartQuantity(product.id, variant?.id || "default", 1);
    showToast(`${product.title} себетке қосылды`);
  });

  card.querySelector("[data-ingredients]").addEventListener("click", () => {
    showToast(`${product.title}: ${product.ingredients}`);
  });

  syncCardQuantity(card, product);
  return card;
}

function syncCardQuantity(card, product) {
  const variant = getSelectedVariant(product, card);
  card.querySelector("[data-card-qty]").textContent = getQuantity(product.id, variant?.id || "default");
}

function syncProductQuantities() {
  document.querySelectorAll(".product-card").forEach((card) => {
    const product = getProduct(card.dataset.productId);
    if (product) syncCardQuantity(card, product);
  });
}

function renderProducts() {
  const visibleProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory);
  dom.productsGrid.innerHTML = "";
  visibleProducts.forEach((product) => dom.productsGrid.append(createProductCard(product)));
  observeRevealItems();
}

function renderHits() {
  dom.hitsTrack.innerHTML = "";
  products.filter((product) => product.hit).forEach((product) => dom.hitsTrack.append(createProductCard(product)));
}

function renderCategories() {
  dom.categoryTabs.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category.label;
    button.className = category.id === activeCategory ? "is-active" : "";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(category.id === activeCategory));
    button.addEventListener("click", () => {
      activeCategory = category.id;
      renderCategories();
      renderProducts();
    });
    dom.categoryTabs.append(button);
  });
}

function renderCart() {
  const entries = getCartEntries();
  const summary = getCartSummary();
  dom.cartCount.textContent = summary.count;
  dom.cartEmpty.classList.toggle("is-hidden", entries.length > 0);
  dom.cartItems.innerHTML = "";

  entries.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-row";
    const unitLabel = item.variant?.label || item.product.unitLabel || "1 дана";
    const priceLabel = typeof item.price === "number" ? formatPrice(item.price) : item.product.agreementLabel;
    const totalLabel = typeof item.price === "number" ? formatPrice(item.price * item.quantity) : "келісім бойынша";
    row.innerHTML = `
      <div>
        <strong>${item.product.title}</strong>
        <small>${unitLabel} · ${priceLabel} x ${item.quantity}</small>
        <small>Итог: ${totalLabel}</small>
      </div>
      <div class="cart-row-actions">
        <div class="qty-control">
          <button type="button" data-cart-minus aria-label="Азайту">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-cart-plus aria-label="Көбейту">+</button>
        </div>
      </div>
    `;
    row.querySelector("[data-cart-minus]").addEventListener("click", () => {
      changeCartQuantity(item.product.id, item.variant?.id || "default", -1);
    });
    row.querySelector("[data-cart-plus]").addEventListener("click", () => {
      changeCartQuantity(item.product.id, item.variant?.id || "default", 1);
    });
    dom.cartItems.append(row);
  });

  const agreementText = summary.agreementCount ? ` + келісім бойынша тауарлар (${summary.agreementCount})` : "";
  dom.cartTotal.innerHTML = `
    <span>Жалпы сома: ${summary.total ? formatPrice(summary.total) : "0 тг"}${agreementText}</span>
    <small>Нақты уақыт пен дизайн WhatsApp-та нақтыланады.</small>
  `;
}

function buildWhatsAppMessage({ name = "", phone = "", address = "", comment = "" } = {}) {
  const entries = getCartEntries();
  const summary = getCartSummary();
  const lines = [
    "Сәлеметсіз бе! Мен сайт арқылы тапсырыс бергім келеді.",
    "",
    "Тапсырыс:",
  ];

  entries.forEach((item, index) => {
    const unitLabel = item.variant?.label || item.product.unitLabel || "1 дана";
    if (typeof item.price === "number") {
      lines.push(
        `${index + 1}) ${item.product.title} — ${unitLabel} — ${formatPrice(item.price)} x ${item.quantity} = ${formatPrice(
          item.price * item.quantity,
        )}`,
      );
    } else {
      lines.push(`${index + 1}) ${item.product.title} — ${unitLabel} — бағасы келісім бойынша`);
    }
  });

  const agreementText = summary.agreementCount ? " + келісім бойынша тауарлар" : "";
  lines.push("");
  lines.push(`Жалпы сома: ${summary.total ? formatPrice(summary.total) : "0 тг"}${agreementText}`);
  lines.push("");
  lines.push(`Атым: ${name || "-"}`);
  lines.push(`Телефон: ${phone || "-"}`);
  lines.push(`Мекенжай/алу орны: ${address || "-"}`);
  lines.push(`Қосымша пікір: ${comment || "-"}`);

  return lines.join("\n");
}

function openWhatsApp(message) {
  window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

function openCart() {
  dom.cartDrawer.classList.add("is-open");
  dom.cartBackdrop.classList.add("is-open");
  dom.cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
}

function closeCart() {
  dom.cartDrawer.classList.remove("is-open");
  dom.cartBackdrop.classList.remove("is-open");
  dom.cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

function showToast(message) {
  clearTimeout(toastTimer);
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => dom.toast.classList.remove("is-visible"), 2800);
}

function renderBuilder() {
  const step = builderSteps[builderIndex];
  dom.builderStepLabel.textContent = `${builderIndex + 1} / ${builderSteps.length}`;
  dom.builderProgress.style.width = `${((builderIndex + 1) / builderSteps.length) * 100}%`;
  dom.builderQuestion.textContent = step.question;
  dom.builderPrev.disabled = builderIndex === 0;
  dom.builderNext.textContent = builderIndex === builderSteps.length - 1 ? "Нәтижені көру" : "Келесі";
  dom.builderOptions.innerHTML = "";

  step.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.className = builderAnswers[step.key] === option ? "is-selected" : "";
    button.addEventListener("click", () => {
      builderAnswers[step.key] = option;
      renderBuilder();
    });
    dom.builderOptions.append(button);
  });
}

function showBuilderResult() {
  const labels = ["Іс-шара", "Адам саны", "Дәм", "Дизайн"];
  dom.builderResult.classList.add("is-visible");
  dom.builderSummary.innerHTML = `
    <ul>
      ${builderSteps
        .map((step, index) => `<li>${labels[index]}: ${builderAnswers[step.key] || "таңдалмады"}</li>`)
        .join("")}
    </ul>
  `;
}

function buildQuizMessage() {
  return [
    "Сәлеметсіз бе! Торт дизайнын талқылағым келеді.",
    "",
    `Іс-шара: ${builderAnswers.event || "-"}`,
    `Адам саны: ${builderAnswers.people || "-"}`,
    `Дәм: ${builderAnswers.taste || "-"}`,
    `Дизайн стилі: ${builderAnswers.style || "-"}`,
  ].join("\n");
}

function renderFillings() {
  dom.fillingsList.innerHTML = "";
  fillings.forEach((filling, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filling-card ${index === 0 ? "is-active" : ""}`;
    button.innerHTML = `<strong>${filling.name}</strong><span>${filling.short}</span>`;
    button.addEventListener("click", () => setActiveFilling(filling.id));
    dom.fillingsList.append(button);
  });
  setActiveFilling(fillings[0].id);
}

function setActiveFilling(fillingId) {
  const filling = fillings.find((item) => item.id === fillingId) || fillings[0];
  dom.fillingsStage.style.background = filling.bg;
  dom.fillingName.textContent = filling.name;
  dom.fillingDescription.textContent = filling.description;
  [...dom.fillingsList.children].forEach((button, index) => {
    button.classList.toggle("is-active", fillings[index].id === filling.id);
  });
}

function mapUrls(location) {
  const query = encodeURIComponent(location.query);
  return {
    embed: `https://www.google.com/maps?q=${query}&output=embed`,
    open: `https://www.google.com/maps/search/?api=1&query=${query}`,
  };
}

function renderLocations() {
  dom.locationCards.innerHTML = "";
  locations.forEach((location, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `location-card ${index === 0 ? "is-active" : ""}`;
    button.innerHTML = `<strong>${location.title}</strong><span>${location.short}</span>`;
    button.addEventListener("click", () => setActiveLocation(location.id));
    dom.locationCards.append(button);
  });
  setActiveLocation(locations[0].id);
}

function setActiveLocation(locationId) {
  const location = locations.find((item) => item.id === locationId) || locations[0];
  const urls = mapUrls(location);
  dom.mapFrame.src = urls.embed;
  dom.mapLink.href = urls.open;
  dom.locationTitle.textContent = location.title;
  [...dom.locationCards.children].forEach((button, index) => {
    button.classList.toggle("is-active", locations[index].id === location.id);
  });
}

function renderReviews() {
  dom.reviewsTrack.innerHTML = "";
  reviews.forEach((review) => {
    const card = document.createElement("article");
    card.className = "story-card";
    card.innerHTML = `
      <div class="story-inner">
        <img src="${review.image}" alt="" loading="lazy" />
        <p>${review.text}</p>
        <span>@${review.name}</span>
      </div>
    `;
    dom.reviewsTrack.append(card);
  });
}

function renderGallery() {
  dom.galleryGrid.innerHTML = "";
  galleryImages.forEach((image) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-item reveal";
    button.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="lazy" />`;
    button.addEventListener("click", () => {
      dom.lightboxImage.src = image.src;
      dom.lightboxImage.alt = image.alt;
      dom.lightbox.classList.add("is-open");
      dom.lightbox.setAttribute("aria-hidden", "false");
    });
    dom.galleryGrid.append(button);
  });
  observeRevealItems();
}

let revealObserver;
function observeRevealItems() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
  }
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((item) => revealObserver.observe(item));
}

function initParallax() {
  const items = document.querySelectorAll("[data-parallax]");
  const update = () => {
    const y = window.scrollY;
    items.forEach((item) => {
      const speed = Number(item.dataset.parallax);
      item.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function validateOrderForm() {
  const formData = new FormData(dom.orderForm);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const nameInput = dom.orderForm.elements.name;
  const phoneInput = dom.orderForm.elements.phone;
  nameInput.classList.toggle("is-invalid", !name);
  phoneInput.classList.toggle("is-invalid", !phone);
  if (!name || !phone) {
    dom.formWarning.textContent = "Атыңыз бен телефон нөміріңізді жазып жіберіңіз.";
    return null;
  }
  dom.formWarning.textContent = "";
  return {
    name,
    phone,
    address: String(formData.get("address") || "").trim(),
    comment: String(formData.get("comment") || "").trim(),
  };
}

function bindEvents() {
  dom.menuToggle.addEventListener("click", () => {
    const isOpen = dom.nav.classList.toggle("is-open");
    dom.menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  dom.nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      dom.nav.classList.remove("is-open");
      dom.menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.querySelectorAll("[data-open-cart]").forEach((button) => button.addEventListener("click", openCart));
  document.querySelector("[data-close-cart]").addEventListener("click", closeCart);
  dom.cartBackdrop.addEventListener("click", closeCart);

  dom.orderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!getCartEntries().length) {
      showToast("Алдымен тәтті таңдаңыз");
      return;
    }
    const orderData = validateOrderForm();
    if (!orderData) return;
    openWhatsApp(buildWhatsAppMessage(orderData));
  });

  document.querySelector("[data-floating-whatsapp]").addEventListener("click", () => {
    if (!getCartEntries().length) {
      openWhatsApp("Сәлеметсіз бе! Тапсырыс бергім келеді.");
      return;
    }
    const formData = new FormData(dom.orderForm);
    openWhatsApp(
      buildWhatsAppMessage({
        name: String(formData.get("name") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        address: String(formData.get("address") || "Панфилова 26").trim(),
        comment: String(formData.get("comment") || "").trim(),
      }),
    );
  });

  dom.builderPrev.addEventListener("click", () => {
    builderIndex = Math.max(0, builderIndex - 1);
    renderBuilder();
  });

  dom.builderNext.addEventListener("click", () => {
    const step = builderSteps[builderIndex];
    if (!builderAnswers[step.key]) {
      showToast("Алдымен бір нұсқаны таңдаңыз");
      return;
    }
    if (builderIndex < builderSteps.length - 1) {
      builderIndex += 1;
      renderBuilder();
    } else {
      showBuilderResult();
    }
  });

  dom.builderWhatsapp.addEventListener("click", () => {
    showBuilderResult();
    openWhatsApp(buildQuizMessage());
  });

  document.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);
  dom.lightbox.addEventListener("click", (event) => {
    if (event.target === dom.lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCart();
      closeLightbox();
    }
  });
}

function closeLightbox() {
  dom.lightbox.classList.remove("is-open");
  dom.lightbox.setAttribute("aria-hidden", "true");
}

function init() {
  renderCategories();
  renderHits();
  renderProducts();
  renderCart();
  renderBuilder();
  renderFillings();
  renderLocations();
  renderReviews();
  renderGallery();
  bindEvents();
  observeRevealItems();
  initParallax();
}

init();
