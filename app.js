const state = {
  lang: "ar",
  route: "crm",
  category: "signature",
  branch: "newCairo",
  dispatchMode: "smart",
  dashboardFilter: "now",
  crmSegment: "all",
  reportPeriod: "month",
  selectedDriver: 0,
  selectedCustomer: 0,
  cart: []
};

const dictionary = {
  ar: {
    brand: "كنافة وبسبوسة", brandSub: "نظام تشغيل الحلويات", opsPulse: "نبض التشغيل الآن", opsHint: "التزام الفروع بالتحضير والتسليم",
    search: "ابحث عن عميل، طلب، فرع...", theme: "الوضع الفاتح", openCart: "السلة", heroEyebrow: "دفء مصري فاخر، يعمل كمنصة تقنية حية",
    heroTitle: "الكنافة التي تتحول إلى عادة لا تُقاوم.", heroText: "تجربة شهية تتحرك من الشاشة إلى الفرع إلى السائق بلحظة واحدة: ضوء عسل، قرمشة ساخنة، وطلب يعرف طريقه قبل أن تسأل.",
    orderNow: "اطلب الآن", trackOrder: "تتبع طلب حي", heroBadge: "الأكثر طلبا", cravingLabel: "قائمة مصممة للجوع", cravingTitle: "اختيارات تلمع في الشاشة قبل الملعقة.",
    loyalty: "نظام الولاء", loyaltyTitle: "Syrup Club Gold", points: "نقطة", loyaltyText: "عرض شخصي: خصم 18% على باكدج التجمع عند الطلب قبل 8 مساء.",
    investorEyebrow: "قصة المستثمر", investorTitle: "من علامة عاطفية إلى بنية تشغيل قابلة للتوسع.", investorText: "كل شاشة تربط الرغبة بالقرار: طلب أسرع، فرع أذكى، سائق أوضح، وعميل يعود لأن التجربة تتذكره.",
    menuEyebrow: "واجهة الطلب", menuTitle: "منيو ذكي بعروض وفلاتر حية", checkout: "إتمام الطلب", cart: "السلة", total: "الإجمالي",
    checkoutEyebrow: "تجربة الدفع", checkoutTitle: "طلب سريع، واضح، ومطمئن", name: "الاسم", phone: "الموبايل", address: "العنوان", orderSummary: "ملخص الطلب",
    eta: "وقت الوصول", placeOrder: "تأكيد الطلب", orderSuccess: "تم إرسال الطلب إلى فرع التجمع.", trackingEyebrow: "تتبع حي", trackingTitle: "طلب #KB-20491 في الطريق", live: "مباشر",
    adminEyebrow: "لوحة القيادة", adminTitle: "تشغيل حي للفروع والطلبات والإيراد", export: "تصدير التقرير", revenue: "الإيراد والذروة", liveOrders: "الطلبات الحية",
    productPerformance: "أداء المنتجات", inventory: "المخزون", lifecycleTitle: "دورة حياة الطلبات", slaTitle: "مخاطر التشغيل",
    deliveryEyebrow: "إدارة التوصيل", deliveryTitle: "Dispatch ذكي للسائقين والمناطق", drivers: "السائقون", dispatchQueue: "طابور التخصيص", batchingTitle: "التجميع الذكي", zoneHealth: "صحة المناطق",
    talabatEyebrow: "تكامل المنصات", talabatTitle: "صندوق موحد لطلبات Talabat والمنصة", talabatText: "مزامنة منيو، حالة الطلب، الأسعار، وتوافر المنتجات من لوحة واحدة.",
    syncNow: "مزامنة الآن", unifiedInbox: "صندوق الطلبات الموحد", crmEyebrow: "ذكاء العملاء", crmTitle: "شرائح، ولاء، وسلوك شراء قابل للتفعيل",
    branchesEyebrow: "الفروع", branchesTitle: "مقارنة تشغيلية بين المناطق", reportsEyebrow: "تقارير تنفيذية", reportsTitle: "نمو، احتفاظ، طلب، وربحية",
    downloadPdf: "PDF / Excel", areaDemand: "طلب المناطق", forecast: "توقعات المبيعات", nextWeek: "الأسبوع القادم", retention: "احتفاظ العملاء",
    marketingEyebrow: "التسويق والولاء", marketingTitle: "حملات شهية مرتبطة بالسلوك", add: "إضافة", emptyCart: "ابدأ بإضافة صندوق دافئ من المنيو.",
    branch: "الفرع", allBranches: "كل الفروع", active: "نشط", pressure: "ضغط", normal: "مستقر", risk: "مخاطر", action: "إجراء", assign: "تخصيص", nudge: "حملة", profile: "ملف العميل"
  },
  en: {
    brand: "Konafa & Basbosa", brandSub: "Dessert operating system", opsPulse: "Operational pulse", opsHint: "Branch prep and delivery compliance",
    search: "Search customer, order, branch...", theme: "Light mode", openCart: "Cart", heroEyebrow: "Premium Egyptian warmth, operated like live technology",
    heroTitle: "The nightly dessert ritual customers crave.", heroText: "A craving-first ordering experience that moves from screen to branch to driver in one fluid moment: honey light, hot crunch, and a journey that already knows the way.",
    orderNow: "Order now", trackOrder: "Track live order", heroBadge: "Top craving", cravingLabel: "Craving-led menu", cravingTitle: "Choices that shine before the first spoon.",
    loyalty: "Loyalty system", loyaltyTitle: "Syrup Club Gold", points: "points", loyaltyText: "Personal offer: 18% off the Tagamoa bundle when ordered before 8 PM.",
    investorEyebrow: "Investor story", investorTitle: "From emotional brand to scalable operating infrastructure.", investorText: "Every surface connects desire to action: faster orders, smarter branches, clearer dispatch, and customers who return because the experience remembers them.",
    menuEyebrow: "Ordering platform", menuTitle: "Smart menu with live filters and bundles", checkout: "Checkout", cart: "Cart", total: "Total",
    checkoutEyebrow: "Payment experience", checkoutTitle: "Fast, clear, confidence-building checkout", name: "Name", phone: "Phone", address: "Address", orderSummary: "Order summary",
    eta: "ETA", placeOrder: "Place order", orderSuccess: "Order sent to New Cairo branch.", trackingEyebrow: "Live tracking", trackingTitle: "Order #KB-20491 is on the way", live: "Live",
    adminEyebrow: "Command center", adminTitle: "Live branch, order, and revenue operations", export: "Export report", revenue: "Revenue and peaks", liveOrders: "Live orders",
    productPerformance: "Product performance", inventory: "Inventory", lifecycleTitle: "Order lifecycle", slaTitle: "Operational risk",
    deliveryEyebrow: "Delivery management", deliveryTitle: "Smart dispatch for drivers and zones", drivers: "Drivers", dispatchQueue: "Assignment queue", batchingTitle: "Smart batching", zoneHealth: "Zone health",
    talabatEyebrow: "Platform integration", talabatTitle: "Unified Talabat and direct order inbox", talabatText: "Sync menu, order state, pricing, and availability from one command surface.",
    syncNow: "Sync now", unifiedInbox: "Unified inbox", crmEyebrow: "Customer intelligence", crmTitle: "Segments, loyalty, and purchase behavior you can activate",
    branchesEyebrow: "Branches", branchesTitle: "Operational comparison across areas", reportsEyebrow: "Executive reports", reportsTitle: "Growth, retention, demand, and profitability",
    downloadPdf: "PDF / Excel", areaDemand: "Area demand", forecast: "Sales forecast", nextWeek: "next week", retention: "Customer retention",
    marketingEyebrow: "Marketing and loyalty", marketingTitle: "Behavior-linked campaigns that create cravings", add: "Add", emptyCart: "Start by adding a warm box from the menu.",
    branch: "Branch", allBranches: "All branches", active: "Active", pressure: "Pressure", normal: "Stable", risk: "Risk", action: "Action", assign: "Assign", nudge: "Campaign", profile: "Customer profile"
  }
};

const navItems = [
  ["customer", "المنصة", "Customer"], ["menu", "المنيو", "Menu"], ["tracking", "التتبع", "Tracking"], ["dashboard", "العمليات", "Ops"],
  ["delivery", "التوصيل", "Delivery"], ["talabat", "Talabat", "Talabat"], ["crm", "CRM", "CRM"], ["branches", "الفروع", "Branches"], ["reports", "التقارير", "Reports"], ["marketing", "التسويق", "Marketing"]
];

const categories = [
  ["signature", "توقيعات", "Signature"], ["konafa", "كنافة", "Konafa"], ["basbosa", "بسبوسة", "Basbosa"], ["bundles", "بوكسات", "Bundles"]
];

const branches = [
  { id: "newCairo", ar: "التجمع الخامس", en: "New Cairo", sales: 184, orders: 126, eta: 21, sla: 98, pressure: 74, status: "normal", staff: 32, stock: 84 },
  { id: "nasr", ar: "مدينة نصر", en: "Nasr City", sales: 139, orders: 104, eta: 27, sla: 94, pressure: 88, status: "pressure", staff: 25, stock: 61 },
  { id: "maadi", ar: "المعادي", en: "Maadi", sales: 121, orders: 91, eta: 24, sla: 92, pressure: 69, status: "normal", staff: 21, stock: 72 },
  { id: "zayed", ar: "الشيخ زايد", en: "Sheikh Zayed", sales: 167, orders: 118, eta: 29, sla: 96, pressure: 82, status: "pressure", staff: 29, stock: 58 },
  { id: "mansoura", ar: "المنصورة", en: "Mansoura", sales: 88, orders: 67, eta: 33, sla: 89, pressure: 56, status: "risk", staff: 17, stock: 45 },
  { id: "alex", ar: "الإسكندرية", en: "Alexandria", sales: 112, orders: 78, eta: 31, sla: 91, pressure: 62, status: "normal", staff: 19, stock: 66 }
];

const productImages = {
  1: "https://images.pexels.com/photos/36691304/pexels-photo-36691304.jpeg?auto=compress&cs=tinysrgb&w=900",
  2: "https://images.pexels.com/photos/29114972/pexels-photo-29114972.jpeg?auto=compress&cs=tinysrgb&w=900",
  3: "https://images.pexels.com/photos/37140467/pexels-photo-37140467.jpeg?auto=compress&cs=tinysrgb&w=900",
  4: "https://images.pexels.com/photos/36183209/pexels-photo-36183209.jpeg?auto=compress&cs=tinysrgb&w=900",
  5: "https://images.pexels.com/photos/10865942/pexels-photo-10865942.jpeg?auto=compress&cs=tinysrgb&w=900",
  6: "https://images.pexels.com/photos/34598827/pexels-photo-34598827.jpeg?auto=compress&cs=tinysrgb&w=900",
  7: "https://images.pexels.com/photos/9057011/pexels-photo-9057011.jpeg?auto=compress&cs=tinysrgb&w=900",
  8: "https://images.pexels.com/photos/8753568/pexels-photo-8753568.jpeg?auto=compress&cs=tinysrgb&w=900"
};

const products = [
  { id: 1, cat: "signature", ar: "بوكس لوتس كنافة", en: "Lotus Konafa Box", descAr: "طبقات كنافة مقرمشة وكريمة لوتس وسيرب دافئ.", descEn: "Crunchy konafa, lotus cream, and warm syrup glow.", price: 185, score: 94 },
  { id: 2, cat: "signature", ar: "بسبوسة فستق كريمي", en: "Creamy Pistachio Basbosa", descAr: "بسبوسة طرية محشوة بكريمة الفستق.", descEn: "Tender basbosa filled with pistachio cream.", price: 155, score: 91 },
  { id: 3, cat: "konafa", ar: "كنافة مانجو بريميوم", en: "Premium Mango Konafa", descAr: "مانجو طازة، كريمة خفيفة، وقرمشة ذهبية.", descEn: "Fresh mango, light cream, and golden crunch.", price: 170, score: 88 },
  { id: 4, cat: "konafa", ar: "كنافة شوكولاتة دوبل", en: "Double Chocolate Konafa", descAr: "كاكاو غني مع خيوط كنافة محمصة.", descEn: "Rich cocoa with toasted konafa strands.", price: 165, score: 87 },
  { id: 5, cat: "basbosa", ar: "بسبوسة قشطة وعسل", en: "Cream and Honey Basbosa", descAr: "قشطة طازة ولمعة عسل كراميل.", descEn: "Fresh cream with caramel honey shine.", price: 135, score: 92 },
  { id: 6, cat: "bundles", ar: "باكدج التجمع العائلي", en: "Tagamoa Family Bundle", descAr: "ثلاثة أحجام للحفلات والزيارات المفاجئة.", descEn: "Three party-ready sizes for warm gatherings.", price: 420, score: 96 },
  { id: 7, cat: "bundles", ar: "ميكس نص الليل", en: "Midnight Mix", descAr: "أفضل خمس قطع للطلبات المتأخرة.", descEn: "Five best sellers tuned for late cravings.", price: 240, score: 90 },
  { id: 8, cat: "signature", ar: "كاسات سيرب كراميل", en: "Caramel Syrup Cups", descAr: "كاسات فردية بتوازن كريمة وقرمشة.", descEn: "Single cups balanced with cream and crunch.", price: 95, score: 89 }
];

const liveOrders = [
  { id: "KB-20491", source: "Direct", state: "dispatch", branch: "newCairo", customerAr: "مريم حسن", customerEn: "Mariam Hassan", item: 1, eta: 12, value: 455 },
  { id: "KB-20492", source: "Direct", state: "kitchen", branch: "nasr", customerAr: "عمر عادل", customerEn: "Omar Adel", item: 6, eta: 18, value: 420 },
  { id: "TLB-88219", source: "Talabat", state: "accepted", branch: "maadi", customerAr: "ندى كريم", customerEn: "Nada Karim", item: 3, eta: 22, value: 170 },
  { id: "KB-20493", source: "Direct", state: "handoff", branch: "zayed", customerAr: "شركة نور", customerEn: "Noor Co.", item: 7, eta: 24, value: 960 },
  { id: "TLB-88220", source: "Talabat", state: "delayed", branch: "mansoura", customerAr: "هنا سامي", customerEn: "Hana Samy", item: 2, eta: 36, value: 310 },
  { id: "KB-20494", source: "Direct", state: "packing", branch: "alex", customerAr: "ليلى مراد", customerEn: "Laila Mourad", item: 5, eta: 19, value: 270 }
];

const drivers = [
  { ar: "أحمد صبري", en: "Ahmed Sabry", score: 4.9, zone: "New Cairo", load: 2, eta: 8, status: "active", account: "DRV-1042", vehicle: "Bike", earnings: 840, acceptance: 96, completed: 18 },
  { ar: "كريم فتحي", en: "Karim Fathy", score: 4.7, zone: "Nasr City", load: 3, eta: 14, status: "active", account: "DRV-1188", vehicle: "Scooter", earnings: 720, acceptance: 91, completed: 15 },
  { ar: "سارة علي", en: "Sara Ali", score: 4.8, zone: "Maadi", load: 1, eta: 6, status: "active", account: "DRV-1217", vehicle: "Bike", earnings: 690, acceptance: 94, completed: 13 },
  { ar: "يوسف عادل", en: "Youssef Adel", score: 4.6, zone: "Sheikh Zayed", load: 0, eta: 18, status: "break", account: "DRV-1095", vehicle: "Car", earnings: 510, acceptance: 87, completed: 9 },
  { ar: "منى سالم", en: "Mona Salem", score: 4.8, zone: "Alexandria", load: 2, eta: 11, status: "active", account: "DRV-1331", vehicle: "Bike", earnings: 605, acceptance: 93, completed: 12 }
];

const deliveryZones = [
  { ar: "التجمع الخامس", en: "New Cairo", demand: 88, couriers: 7, restricted: false, eta: 21, issueAr: "طبيعي", issueEn: "Clear" },
  { ar: "مدينة نصر", en: "Nasr City", demand: 94, couriers: 5, restricted: false, eta: 27, issueAr: "ضغط مرتفع", issueEn: "High pressure" },
  { ar: "المعادي", en: "Maadi", demand: 72, couriers: 4, restricted: true, eta: 24, issueAr: "تحويل كوبري", issueEn: "Bridge detour" },
  { ar: "الشيخ زايد", en: "Sheikh Zayed", demand: 81, couriers: 4, restricted: true, eta: 29, issueAr: "منطقة مغلقة", issueEn: "Closed block" },
  { ar: "المنصورة", en: "Mansoura", demand: 61, couriers: 3, restricted: false, eta: 33, issueAr: "سعة محدودة", issueEn: "Limited capacity" },
  { ar: "الإسكندرية", en: "Alexandria", demand: 68, couriers: 4, restricted: false, eta: 31, issueAr: "رياح على الكورنيش", issueEn: "Corniche wind" }
];

const customers = [
  { ar: "ندى", en: "Nada", tier: "Gold", spend: "EGP 12.4K", segment: "Lotus nights", orders: 32, last: "2d", next: "Pistachio Payday", affinity: 92, points: 7840, ltv: 12400, channel: "Direct", branch: "newCairo" },
  { ar: "مروان", en: "Marwan", tier: "VIP", spend: "EGP 22.1K", segment: "Office bundles", orders: 47, last: "6h", next: "B2B catering", affinity: 88, points: 12100, ltv: 22100, channel: "Direct", branch: "zayed" },
  { ar: "هنا", en: "Hana", tier: "Silver", spend: "EGP 7.8K", segment: "Mango konafa", orders: 18, last: "9d", next: "Summer mango", affinity: 74, points: 3180, ltv: 7800, channel: "Talabat", branch: "maadi" },
  { ar: "عمر", en: "Omar", tier: "At risk", spend: "EGP 5.1K", segment: "Winback 15%", orders: 12, last: "37d", next: "Warm Bite", affinity: 61, points: 1260, ltv: 5100, channel: "Direct", branch: "nasr" },
  { ar: "ليلى", en: "Laila", tier: "Gold", spend: "EGP 15.7K", segment: "Pistachio", orders: 36, last: "1d", next: "Gold early access", affinity: 95, points: 9220, ltv: 15700, channel: "Direct", branch: "alex" },
  { ar: "شركة نور", en: "Noor Co.", tier: "B2B", spend: "EGP 58K", segment: "Catering", orders: 19, last: "3d", next: "Office Box", affinity: 83, points: 18800, ltv: 58000, channel: "Direct", branch: "newCairo" }
];

const customerHistory = [
  { customer: "Nada", id: "KB-20381", item: "Lotus Konafa Box", value: 455, branch: "newCairo", date: "2026-05-16", status: "Delivered" },
  { customer: "Nada", id: "KB-20220", item: "Caramel Syrup Cups", value: 285, branch: "newCairo", date: "2026-05-09", status: "Delivered" },
  { customer: "Marwan", id: "KB-20442", item: "Tagamoa Family Bundle", value: 1260, branch: "zayed", date: "2026-05-18", status: "Delivered" },
  { customer: "Hana", id: "TLB-88112", item: "Premium Mango Konafa", value: 340, branch: "maadi", date: "2026-05-11", status: "Delivered" },
  { customer: "Omar", id: "KB-19872", item: "Cream and Honey Basbosa", value: 270, branch: "nasr", date: "2026-04-11", status: "Winback" },
  { customer: "Laila", id: "KB-20477", item: "Creamy Pistachio Basbosa", value: 465, branch: "alex", date: "2026-05-17", status: "Delivered" },
  { customer: "Noor Co.", id: "KB-20493", item: "Midnight Mix", value: 960, branch: "newCairo", date: "2026-05-15", status: "B2B" }
];

function t(key) { return dictionary[state.lang][key] || key; }
function local(ar, en) { return state.lang === "ar" ? ar : en; }
function byId(id) { return document.getElementById(id); }
function setHTML(id, html) { byId(id).innerHTML = html; }
function setText(id, text) { byId(id).textContent = text; }
function branchName(id) {
  const branch = branches.find(item => item.id === id) || branches[0];
  return local(branch.ar, branch.en);
}
function activeBranch() { return branches.find(branch => branch.id === state.branch) || branches[0]; }

function showToast(title, detail) {
  let toast = byId("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<b>${title}</b><span>${detail}</span>`;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function exportLabel(scope) {
  return state.lang === "ar" ? `تم تجهيز ${scope}` : `${scope} export prepared`;
}

function renderI18n() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.body.dir = document.documentElement.dir;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  setText("langToggle", state.lang === "ar" ? "EN" : "عربي");
}

function renderNav() {
  document.getElementById("nav").innerHTML = navItems.map(([id, ar, en]) =>
    `<button class="nav-item ${state.route === id ? "active" : ""}" data-route="${id}"><span>${local(ar, en)}</span><small>${sectionBadge(id)}</small></button>`
  ).join("");
}

function sectionBadge(id) {
  const map = { dashboard: "426", delivery: "18", talabat: "42", crm: "6", branches: branches.length };
  return map[id] || "";
}

function renderBranchSwitcher() {
  document.getElementById("branchSwitcher").innerHTML = `
    <span>${t("branch")}</span>
    <button class="branch-pill active" data-branch="${state.branch}">${branchName(state.branch)}</button>
    <div class="branch-menu">
      ${branches.map(branch => `<button class="${branch.id === state.branch ? "active" : ""}" data-branch="${branch.id}">${local(branch.ar, branch.en)} <small>${branch.orders} ${state.lang === "ar" ? "طلب" : "orders"}</small></button>`).join("")}
    </div>
  `;
}

function routeTo(id) {
  state.route = id;
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === id));
  renderNav();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function productCard(product) {
  return `<article class="product-card">
    <div class="product-art art-${product.id}">
      <img src="${productImages[product.id]}" alt="${local(product.ar, product.en)}" loading="lazy" decoding="async">
      <span class="photo-label">${product.cat === "konafa" ? "Konafa" : product.cat === "basbosa" ? "Basbosa" : product.id === 4 ? "Molten" : product.id === 2 ? "Pistachio" : product.id === 6 || product.id === 7 ? "Arabic sweets" : "Signature"}</span>
    </div>
    <h3>${local(product.ar, product.en)}</h3>
    <p>${local(product.descAr, product.descEn)}</p>
    <div class="product-foot"><strong>EGP ${product.price}</strong><button class="add-btn" data-add="${product.id}">${t("add")}</button></div>
    <span class="tag">${product.score}% ${state.lang === "ar" ? "رضا" : "love score"}</span>
  </article>`;
}

function renderMenu() {
  const categoryMarkup = categories.map(([id, ar, en]) => `<button class="chip ${state.category === id ? "active" : ""}" data-cat="${id}">${local(ar, en)}</button>`).join("");
  document.getElementById("categoryTabs").innerHTML = categoryMarkup;
  document.getElementById("filters").innerHTML = categoryMarkup.replaceAll("chip", "filter");
  const current = products.filter(product => product.cat === state.category || state.category === "signature");
  document.getElementById("menuGrid").innerHTML = current.slice(0, 3).map(productCard).join("");
  document.getElementById("productWall").innerHTML = current.map(productCard).join("");
}

function addToCart(id) {
  const product = products.find(item => item.id === Number(id));
  const line = state.cart.find(item => item.id === product.id);
  if (line) line.qty += 1; else state.cart.push({ ...product, qty: 1 });
  renderCart();
}

function renderCart() {
  const lines = state.cart.map(item => `<div class="cart-line"><span>${local(item.ar, item.en)} x${item.qty}</span><strong>EGP ${item.price * item.qty}</strong></div>`).join("");
  const total = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById("cartItems").innerHTML = lines || `<p>${t("emptyCart")}</p>`;
  document.getElementById("checkoutItems").innerHTML = lines || `<p>${t("emptyCart")}</p>`;
  document.getElementById("cartTotal").textContent = `EGP ${total}`;
}

function renderStory() {
  const branch = activeBranch();
  document.getElementById("unitEconomics").innerHTML = `
    <span>${state.lang === "ar" ? "اقتصاديات الوحدة" : "Unit economics"}</span>
    <div class="unit-stack">
      <div><b>EGP ${branch.sales}K</b><small>${state.lang === "ar" ? "مبيعات اليوم" : "today sales"}</small></div>
      <div><b>${branch.sla}%</b><small>${state.lang === "ar" ? "التزام SLA" : "SLA compliance"}</small></div>
      <div><b>${branch.eta}m</b><small>${state.lang === "ar" ? "متوسط الوصول" : "average ETA"}</small></div>
    </div>
  `;
}

function renderHeroSignals() {
  const branch = activeBranch();
  const ordersLabel = document.getElementById("heroOrdersLabel");
  const etaLabel = document.getElementById("heroEtaLabel");
  const slaLabel = document.getElementById("heroSlaLabel");
  const ticketLabel = document.getElementById("heroTicketLabel");
  if (!ordersLabel || !etaLabel || !slaLabel || !ticketLabel) return;
  document.getElementById("heroOrders").textContent = branch.orders;
  ordersLabel.textContent = state.lang === "ar" ? "طلب حي الآن" : "live orders now";
  etaLabel.textContent = state.lang === "ar" ? "متوسط الوصول" : "average arrival";
  slaLabel.textContent = state.lang === "ar" ? "التزام الفروع" : "branch SLA";
  ticketLabel.textContent = state.lang === "ar" ? `خرج للتوصيل · ${branchName(branch.id)}` : `out for delivery · ${branchName(branch.id)}`;
}

function renderCommandStrip() {
  const branch = activeBranch();
  const commands = [
    [state.lang === "ar" ? "فرع نشط" : "Active branch", branchName(branch.id), branch.status],
    [state.lang === "ar" ? "ضغط المطبخ" : "Kitchen pressure", `${branch.pressure}%`, branch.pressure > 82 ? "risk" : "normal"],
    [state.lang === "ar" ? "طلبات Talabat" : "Talabat orders", liveOrders.filter(order => order.source === "Talabat").length, "normal"],
    [state.lang === "ar" ? "سعة السائقين" : "Driver capacity", `${drivers.reduce((sum, driver) => sum + driver.load, 0)}/12`, "normal"]
  ];
  document.getElementById("commandStrip").innerHTML = commands.map(([label, value, status]) =>
    `<article class="command-card ${status}"><span>${label}</span><strong>${value}</strong><small>${status === "risk" ? t("risk") : t("normal")}</small></article>`
  ).join("");
}

function renderDashboardFilters() {
  const filters = [
    ["now", state.lang === "ar" ? "الآن" : "Now"],
    ["rush", state.lang === "ar" ? "ذروة العشاء" : "Dinner rush"],
    ["marketplace", state.lang === "ar" ? "منصات" : "Marketplace"],
    ["risk", state.lang === "ar" ? "مخاطر" : "Risk"]
  ];
  document.getElementById("dashboardFilters").innerHTML = `
    <div class="filter-group">
      ${filters.map(([id, label]) => `<button class="filter ${state.dashboardFilter === id ? "active" : ""}" data-dashboard-filter="${id}">${label}</button>`).join("")}
    </div>
    <div class="filter-meta"><span class="pulse"></span><span>${state.lang === "ar" ? "تحديث تلقائي كل 2.6 ثانية · كل الفروع متصلة" : "Auto-refresh every 2.6s · all branches connected"}</span></div>
  `;
}

function filteredOrders() {
  const branchOrders = liveOrders.filter(order => order.branch === state.branch || state.branch === "all");
  if (state.dashboardFilter === "marketplace") return liveOrders.filter(order => order.source === "Talabat");
  if (state.dashboardFilter === "risk") return liveOrders.filter(order => order.state === "delayed" || order.eta > 28);
  if (state.dashboardFilter === "rush") return liveOrders.filter(order => order.value >= 300 || ["kitchen", "packing", "handoff"].includes(order.state));
  return branchOrders.length ? branchOrders : liveOrders;
}

function renderSalesOverview() {
  const branch = activeBranch();
  const orders = filteredOrders();
  const totalValue = orders.reduce((sum, order) => sum + order.value, 0);
  const avgTicket = Math.round(totalValue / Math.max(1, orders.length));
  const directShare = Math.round((orders.filter(order => order.source === "Direct").length / Math.max(1, orders.length)) * 100);
  const spark = values => `<div class="mini-spark">${values.map((value, index) => `<i style="height:${value}%; animation-delay:${index * 45}ms"></i>`).join("")}</div>`;
  const cards = [
    [state.lang === "ar" ? "مبيعات النظرة الحالية" : "Current lens sales", `EGP ${Math.round(branch.sales * 4.2 + totalValue / 1000)}K`, state.lang === "ar" ? `${orders.length} طلب داخل الفلتر` : `${orders.length} orders in filter`, [36, 58, 49, 72, 84, 68, 92]],
    [state.lang === "ar" ? "متوسط الفاتورة" : "Average ticket", `EGP ${avgTicket}`, state.lang === "ar" ? "الخلطات العائلية تقود الزيادة" : "Family bundles are lifting value", [42, 46, 61, 55, 73, 80, 76]],
    [state.lang === "ar" ? "نسبة الطلب المباشر" : "Direct order share", `${directShare}%`, state.lang === "ar" ? "أقل عمولة وأكثر بيانات عملاء" : "Lower commission and richer customer data", [64, 59, 66, 70, 74, 78, 82]]
  ];
  document.getElementById("salesOverview").innerHTML = cards.map(([label, value, note, values]) => `
    <article class="sales-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <p>${note}</p>
      ${spark(values)}
    </article>
  `).join("");
}

function renderOps() {
  const branch = activeBranch();
  const metrics = [
    [state.lang === "ar" ? "مبيعات اليوم" : "Today sales", `EGP ${branch.sales}K`, "+18.4%"],
    [state.lang === "ar" ? "طلبات حية" : "Live orders", branch.orders, "+64"],
    [state.lang === "ar" ? "متوسط التحضير" : "Avg prep", `${Math.max(9, Math.round(branch.eta * .48))}m`, "-2.1m"],
    [state.lang === "ar" ? "رضا العملاء" : "Customer NPS", `${Math.min(96, branch.sla - 1)}%`, "+4.8"]
  ];
  document.getElementById("metrics").innerHTML = metrics.map(item => `<article class="metric"><span>${item[0]}</span><strong>${item[1]}</strong><small>${item[2]}</small></article>`).join("");
  const revenueValues = [42, 58, 71, 64, 86, 94, 76, 88, 100, 73, 92, 81].map((value, index) => Math.max(20, value - index + branch.pressure / 10));
  document.getElementById("revenueChart").innerHTML = revenueValues.map((value, index) => `<i class="bar" style="height:${value}%; animation-delay:${index * 38}ms"></i>`).join("");
  const points = revenueValues.map((value, index) => {
    const x = (index / (revenueValues.length - 1)) * 620;
    const y = 170 - (value / 110) * 150;
    return [x, y];
  });
  const path = points.map(([x, y], index) => `${index ? "L" : "M"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  document.getElementById("revenueLine").innerHTML = `<path d="${path}"></path>${points.map(([x, y], index) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" style="animation-delay:${index * 50}ms"></circle>`).join("")}`;
  document.getElementById("productBars").innerHTML = products.slice(0, 5).map((product, i) => `<div class="inventory-line"><span>${local(product.ar, product.en)}</span><b>${96 - i * 5}%</b></div><div class="progress"><i style="width:${96 - i * 5}%"></i></div>`).join("");
  document.getElementById("inventoryList").innerHTML = [["كنافة خام", "Raw konafa", branch.stock], ["قشطة", "Cream", Math.max(35, branch.stock - 18)], ["فستق", "Pistachio", Math.max(28, branch.stock - 27)], ["علب بريميوم", "Premium boxes", Math.min(95, branch.stock + 10)]].map(([ar, en, value]) => `<div class="inventory-line"><span>${local(ar, en)}</span><b>${value}%</b></div><div class="progress"><i style="width:${value}%"></i></div>`).join("");
}

function renderDashboardAnalytics() {
  const branch = activeBranch();
  const direct = liveOrders.filter(order => order.source === "Direct").length;
  const talabat = liveOrders.length - direct;
  const talabatPct = Math.round((talabat / liveOrders.length) * 100);
  const directPct = 100 - talabatPct;
  document.getElementById("branchHealthTitle").textContent = state.lang === "ar" ? "صحة الفروع" : "Branch health";
  document.getElementById("branchHealthMeta").textContent = `${branchName(branch.id)} · SLA ${branch.sla}%`;
  document.getElementById("channelMixTitle").textContent = state.lang === "ar" ? "مزيج القنوات" : "Channel mix";
  document.getElementById("deliveryHeatTitle").textContent = state.lang === "ar" ? "خريطة ضغط التوصيل" : "Delivery pressure heatmap";
  document.getElementById("deliveryHeatMeta").textContent = state.lang === "ar" ? "آخر 45 دقيقة" : "Last 45 minutes";
  document.getElementById("opsEventsTitle").textContent = state.lang === "ar" ? "أحداث التشغيل" : "Ops events";

  document.getElementById("dashboardBranchHealth").innerHTML = branches.map(item => {
    const isActive = item.id === state.branch;
    return `<button class="health-row ${isActive ? "active" : ""}" data-branch="${item.id}">
      <span>${local(item.ar, item.en)}</span>
      <b>${item.sla}%</b>
      <small>${item.orders} ${state.lang === "ar" ? "طلب" : "orders"} · ${item.eta}m</small>
      <div class="progress"><i style="width:${item.pressure}%"></i></div>
    </button>`;
  }).join("");

  document.getElementById("channelDonut").style.setProperty("--direct", `${directPct}%`);
  document.getElementById("channelDonut").innerHTML = `<strong>${directPct}%</strong><span>Direct</span>`;
  document.getElementById("channelLegend").innerHTML = `
    <div class="legend-line"><span><i class="legend-direct"></i>Direct</span><b>${direct}</b></div>
    <div class="legend-line"><span><i class="legend-talabat"></i>Talabat</span><b>${talabat}</b></div>
    <div class="legend-line"><span><i class="legend-risk"></i>${state.lang === "ar" ? "مهدد" : "At risk"}</span><b>${liveOrders.filter(order => order.state === "delayed").length}</b></div>
  `;

  document.getElementById("deliveryHeatmap").innerHTML = branches.map((item, branchIndex) =>
    Array.from({ length: 6 }, (_, hourIndex) => {
      const value = Math.min(96, Math.max(18, item.pressure + ((hourIndex * 11 + branchIndex * 7) % 26) - 12));
      return `<button class="heat-tile ${item.id === state.branch ? "active" : ""}" data-branch="${item.id}" style="--heat:${value / 100}">
        <span>${local(item.ar, item.en)}</span><b>${value}%</b><small>${hourIndex * 7 + 5}m</small>
      </button>`;
    }).join("")
  ).join("");

  const events = [
    [state.lang === "ar" ? "تم إعادة توزيع 3 طلبات على التجمع" : "Rebalanced 3 New Cairo orders", "now", "good"],
    [state.lang === "ar" ? "ضغط مدينة نصر يحتاج سائق إضافي" : "Nasr City needs one extra driver", "2m", "warn"],
    [state.lang === "ar" ? "Talabat menu sync مكتمل" : "Talabat menu sync complete", "5m", "good"],
    [state.lang === "ar" ? "مخزون الفستق تحت حد الأمان" : "Pistachio stock below guardrail", "9m", "risk"]
  ];
  document.getElementById("opsEvents").innerHTML = events.map(([label, time, tone]) =>
    `<div class="event-line ${tone}"><span></span><div><b>${label}</b><small>${time}</small></div></div>`
  ).join("");
}

function renderCustomerInsights() {
  const highValue = customers.filter(customer => customer.tier === "Gold" || customer.tier === "VIP" || customer.tier === "B2B");
  const atRisk = customers.filter(customer => customer.tier === "At risk" || customer.affinity < 70);
  const repeatOrders = customers.reduce((sum, customer) => sum + customer.orders, 0);
  document.getElementById("customerInsightsTitle").textContent = state.lang === "ar" ? "رؤى العملاء" : "Customer insights";
  document.getElementById("customerInsightsMeta").textContent = state.lang === "ar" ? "شرائح قابلة للتفعيل الآن" : "Segments ready to activate";
  document.getElementById("analyticsTitle").textContent = state.lang === "ar" ? "تحليلات فورية" : "Realtime analytics";
  document.getElementById("customerInsights").innerHTML = [
    [state.lang === "ar" ? "عملاء قيمة عالية" : "High value customers", highValue.length, state.lang === "ar" ? "VIP وذهبي وطلبات شركات" : "VIP, Gold, and B2B buyers", 88],
    [state.lang === "ar" ? "قابلون للاسترجاع" : "Winback ready", atRisk.length, state.lang === "ar" ? "عرض دافئ قبل نهاية اليوم" : "Warm offer before day end", 61],
    [state.lang === "ar" ? "تكرار شراء" : "Repeat demand", `${repeatOrders}`, state.lang === "ar" ? "طلب تاريخي من قاعدة مصغرة" : "historic orders in sample base", 74]
  ].map(([label, value, note, width]) => `
    <article class="insight-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
      <div class="progress"><i style="width:${width}%"></i></div>
    </article>
  `).join("");

  document.getElementById("analyticsStack").innerHTML = [
    [state.lang === "ar" ? "توقع الذروة التالية" : "Next peak forecast", state.lang === "ar" ? "8:40 م" : "8:40 PM", 82],
    [state.lang === "ar" ? "احتمال نفاد الفستق" : "Pistachio stockout risk", "34%", 66],
    [state.lang === "ar" ? "تحسن التوصيل المتوقع" : "Expected dispatch gain", "11m", 58]
  ].map(([label, value, width]) => `
    <div class="analytics-row">
      <div><span>${label}</span><b>${value}</b></div>
      <div class="progress"><i style="width:${width}%"></i></div>
    </div>
  `).join("");
}

function renderDashboardTables() {
  const orders = filteredOrders();
  const stateLabel = orderState => state.lang === "ar"
    ? ({ accepted: "استلام", kitchen: "مطبخ", packing: "تغليف", dispatch: "توصيل", handoff: "تسليم", delayed: "مهدد" }[orderState] || orderState)
    : ({ accepted: "Accepted", kitchen: "Kitchen", packing: "Packing", dispatch: "Dispatch", handoff: "Handoff", delayed: "At risk" }[orderState] || orderState);

  document.getElementById("ordersTableTitle").textContent = state.lang === "ar" ? "جدول الطلبات الحية" : "Live orders table";
  document.getElementById("ordersTableMeta").textContent = state.lang === "ar" ? `${orders.length} طلب مطابق للفلتر` : `${orders.length} matching orders`;
  document.getElementById("inventoryTableTitle").textContent = state.lang === "ar" ? "حالة المخزون" : "Inventory status";
  document.getElementById("ordersTable").innerHTML = `
    <table>
      <thead>
        <tr>
          <th>${state.lang === "ar" ? "الطلب" : "Order"}</th>
          <th>${state.lang === "ar" ? "العميل" : "Customer"}</th>
          <th>${state.lang === "ar" ? "الفرع" : "Branch"}</th>
          <th>${state.lang === "ar" ? "القناة" : "Channel"}</th>
          <th>${state.lang === "ar" ? "الحالة" : "Status"}</th>
          <th>${state.lang === "ar" ? "القيمة" : "Value"}</th>
          <th>${state.lang === "ar" ? "الوصول" : "ETA"}</th>
        </tr>
      </thead>
      <tbody>
        ${orders.map(order => `<tr>
          <td><b>${order.id}</b></td>
          <td>${local(order.customerAr, order.customerEn)}</td>
          <td>${branchName(order.branch)}</td>
          <td>${order.source}</td>
          <td><span class="status-pill ${order.state === "delayed" || order.eta > 28 ? "risk" : ""}">${stateLabel(order.state)}</span></td>
          <td>EGP ${order.value}</td>
          <td>${order.eta}m</td>
        </tr>`).join("")}
      </tbody>
    </table>
  `;

  const branch = activeBranch();
  const inventory = [
    ["كنافة خام", "Raw konafa", branch.stock, "12h"],
    ["قشطة بلدي", "Baladi cream", Math.max(35, branch.stock - 18), "7h"],
    ["فستق", "Pistachio", Math.max(28, branch.stock - 27), "5h"],
    ["علب بريميوم", "Premium boxes", Math.min(95, branch.stock + 10), "18h"]
  ];
  document.getElementById("inventoryTable").innerHTML = `
    <table>
      <thead>
        <tr>
          <th>${state.lang === "ar" ? "الصنف" : "Item"}</th>
          <th>${state.lang === "ar" ? "التوفر" : "Stock"}</th>
          <th>${state.lang === "ar" ? "يغطي" : "Covers"}</th>
        </tr>
      </thead>
      <tbody>
        ${inventory.map(([ar, en, value, cover]) => `<tr>
          <td>${local(ar, en)}</td>
          <td><span class="status-pill ${value < 45 ? "risk" : ""}">${value}%</span></td>
          <td>${cover}</td>
        </tr>`).join("")}
      </tbody>
    </table>
  `;
}

function renderLifecycle() {
  const lanes = [
    ["accepted", state.lang === "ar" ? "استلام" : "Accepted"],
    ["kitchen", state.lang === "ar" ? "مطبخ" : "Kitchen"],
    ["packing", state.lang === "ar" ? "تغليف" : "Packing"],
    ["dispatch", state.lang === "ar" ? "توصيل" : "Dispatch"],
    ["delayed", state.lang === "ar" ? "مهدد" : "At risk"]
  ];
  document.getElementById("lifecycleBoard").innerHTML = lanes.map(([key, title]) => {
    const laneOrders = liveOrders.filter(order => order.state === key || (key === "dispatch" && order.state === "handoff"));
    return `<div class="lane"><h4>${title}<span>${laneOrders.length}</span></h4>${laneOrders.map(orderCard).join("") || `<p>${state.lang === "ar" ? "لا يوجد" : "Clear"}</p>`}</div>`;
  }).join("");
  document.getElementById("riskPanel").innerHTML = [
    [state.lang === "ar" ? "تأخير المنصورة" : "Mansoura delay", "36m", 82],
    [state.lang === "ar" ? "ضغط مدينة نصر" : "Nasr City pressure", "88%", 88],
    [state.lang === "ar" ? "نقص فستق" : "Pistachio stock", "34%", 66]
  ].map(([label, value, width]) => `<div class="risk-row"><div><b>${label}</b><span>${value}</span></div><div class="progress"><i style="width:${width}%"></i></div></div>`).join("");
}

function orderCard(order) {
  const product = products.find(item => item.id === order.item);
  return `<article class="mini-order"><b>${order.id}</b><span>${branchName(order.branch)} · ${local(product.ar, product.en)}</span><small>${order.eta}m · EGP ${order.value}</small></article>`;
}

function renderStreams() {
  const filtered = liveOrders.filter(order => order.branch === state.branch || state.route !== "dashboard").slice(0, 6);
  document.getElementById("orderStream").innerHTML = filtered.map(order => {
    const urgent = order.eta > 28 || order.state === "delayed";
    const label = state.lang === "ar"
      ? ({ accepted: "استلام", kitchen: "مطبخ", packing: "تغليف", dispatch: "توصيل", handoff: "تسليم", delayed: "مهدد" }[order.state] || order.state)
      : order.state;
    return `<button class="stream-line order-monitor ${urgent ? "urgent" : ""}" data-branch="${order.branch}">
      <div><b>${order.id}</b><span>${branchName(order.branch)} · ${order.source} · ${label}</span></div>
      <strong>${order.eta}m</strong>
    </button>`;
  }).join("");
  document.getElementById("inbox").innerHTML = liveOrders.map(order => `<div class="inbox-line"><div><b>${order.id}</b><span>${order.source} · ${branchName(order.branch)}</span></div><strong>${order.state}</strong></div>`).join("");
}

function renderLogistics() {
  const selected = drivers[state.selectedDriver] || drivers[0];
  const activeOrders = liveOrders.filter(order => ["dispatch", "handoff", "delayed", "packing"].includes(order.state));
  const riskyZones = deliveryZones.filter(zone => zone.restricted || zone.demand > 86);
  document.getElementById("logisticsClock").textContent = state.lang === "ar" ? "تشغيل مباشر" : "Live logistics";
  document.getElementById("dispatchTabs").innerHTML = [["smart", state.lang === "ar" ? "ذكي" : "Smart"], ["batch", state.lang === "ar" ? "تجميع" : "Batch"], ["risk", state.lang === "ar" ? "مخاطر" : "Risk"], ["earnings", state.lang === "ar" ? "أرباح" : "Earnings"]].map(([id, label]) =>
    `<button class="filter ${state.dispatchMode === id ? "active" : ""}" data-dispatch="${id}">${label}</button>`
  ).join("");
  document.getElementById("logisticsCommand").innerHTML = [
    [state.lang === "ar" ? "سائقون أونلاين" : "Online drivers", `${drivers.filter(driver => driver.status === "active").length}/${drivers.length}`, state.lang === "ar" ? "جاهزية عالية" : "healthy coverage"],
    [state.lang === "ar" ? "طلبات للتخصيص" : "Assignable orders", activeOrders.length, state.lang === "ar" ? "تتغير مباشرة" : "live queue"],
    [state.lang === "ar" ? "متوسط ETA" : "Avg ETA", `${Math.round(deliveryZones.reduce((sum, zone) => sum + zone.eta, 0) / deliveryZones.length)}m`, state.lang === "ar" ? "حسب الزحام والمناطق" : "traffic and zone aware"],
    [state.lang === "ar" ? "مناطق مقيدة" : "Restricted zones", riskyZones.length, state.lang === "ar" ? "تحويلات نشطة" : "active detours"]
  ].map(([label, value, note]) => `<article class="logistics-card"><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`).join("");
  document.getElementById("mapToolbar").innerHTML = [
    ["live", state.lang === "ar" ? "خريطة حية" : "Live map"],
    ["eta", "ETA"],
    ["restricted", state.lang === "ar" ? "ممنوعات" : "Restricted"],
    ["routes", state.lang === "ar" ? "مسارات" : "Routes"]
  ].map(([id, label]) => `<button class="map-tool ${id === "live" || (state.dispatchMode === "risk" && id === "restricted") || (state.dispatchMode === "batch" && id === "routes") ? "active" : ""}">${label}</button>`).join("");
  document.getElementById("mapOverlayCard").innerHTML = `
    <span>${state.lang === "ar" ? "السائق المحدد" : "Selected driver"}</span>
    <b>${local(selected.ar, selected.en)}</b>
    <small>${selected.account} · ${selected.vehicle} · ${selected.zone}</small>
    <div class="progress"><i style="width:${selected.acceptance}%"></i></div>
  `;
  document.getElementById("driverMeta").textContent = state.lang === "ar" ? `${drivers.length} حسابات نشطة` : `${drivers.length} active accounts`;
  document.getElementById("drivers").innerHTML = drivers.map((driver, index) => `
    <button class="driver-account ${index === state.selectedDriver ? "active" : ""}" data-driver="${index}">
      <header><div><b>${local(driver.ar, driver.en)}</b><span>${driver.account} · ${driver.vehicle}</span></div><strong>${driver.score}</strong></header>
      <footer><small>${driver.zone} · ${driver.load} ${state.lang === "ar" ? "طلبات" : "orders"}</small><b>EGP ${driver.earnings}</b></footer>
      <div class="progress"><i style="width:${driver.acceptance}%"></i></div>
    </button>
  `).join("");
  const steps = [["استلمنا الطلب", "Order received"], ["دخل المطبخ", "Kitchen accepted"], ["خرج مع السائق", "Out for delivery"], ["يوصل قريبا", "Arriving soon"]];
  document.getElementById("timeline").innerHTML = steps.map((step, i) => `<div class="timeline-step"><div><b>${local(step[0], step[1])}</b><span>${i < 3 ? "Done" : "ETA 8m"}</span></div><span class="pulse"></span></div>`).join("");
  document.getElementById("dispatchQueue").innerHTML = activeOrders.map((order, index) =>
    `<div class="queue-card"><div><b>${order.id}</b><span>${branchName(order.branch)} · ${order.eta}m · ${order.source}</span></div><button class="add-btn">${t("assign")} ${drivers[(index + state.selectedDriver) % drivers.length].account}</button></div>`
  ).join("");
  document.getElementById("batchingPanel").innerHTML = [
    ["New Cairo loop", "3 orders · 7.4 km", "EGP 42 saved"],
    ["Nasr City express", "2 orders · 4.1 km", "11m faster"],
    ["Maadi handoff", "1 VIP · detour", "low risk"]
  ].map(row => `<div class="driver-line"><div><b>${row[0]}</b><span>${row[1]}</span></div><strong>${row[2]}</strong></div>`).join("");
  document.getElementById("zoneHealth").innerHTML = deliveryZones.slice(0, 4).map(zone => `<div class="zone-row"><span>${local(zone.ar, zone.en)} · ${local(zone.issueAr, zone.issueEn)}</span><b>${zone.demand}%</b><div class="progress"><i style="width:${zone.demand}%"></i></div></div>`).join("");
  renderEtaAndRoutes();
  renderZonesAndEarnings();
}

function renderEtaAndRoutes() {
  const selected = drivers[state.selectedDriver] || drivers[0];
  const candidates = liveOrders.slice(0, 3);
  document.getElementById("etaSystemTitle").textContent = state.lang === "ar" ? "نظام ETA" : "ETA system";
  document.getElementById("etaSystemMeta").textContent = state.lang === "ar" ? "يتأثر بالضغط والممنوعات وسعة السائق" : "traffic, restrictions, and driver load aware";
  document.getElementById("routeOptimizationTitle").textContent = state.lang === "ar" ? "تحسين المسارات" : "Route optimization";
  document.getElementById("etaGrid").innerHTML = candidates.map((order, index) => {
    const confidence = Math.max(72, 96 - order.eta + index * 3);
    const optimized = Math.max(8, order.eta - selected.load * 2 - index);
    return `<article class="eta-card">
      <span>${order.id} · ${branchName(order.branch)}</span>
      <strong>${optimized}m</strong>
      <small>${state.lang === "ar" ? "ثقة ETA" : "ETA confidence"} ${confidence}% · ${local(selected.ar, selected.en)}</small>
      <div class="progress"><i style="width:${confidence}%"></i></div>
    </article>`;
  }).join("");
  document.getElementById("routeOptimization").innerHTML = [
    [state.lang === "ar" ? "تجنب منطقة مغلقة" : "Avoid closed block", state.lang === "ar" ? "زايد · +3 دقائق" : "Zayed · +3 min", 66],
    [state.lang === "ar" ? "دمج طلبين قريبين" : "Batch nearby orders", state.lang === "ar" ? "يوفر 11 دقيقة" : "saves 11 min", 84],
    [state.lang === "ar" ? "تبديل سائق" : "Driver swap", state.lang === "ar" ? "خفض ETA 6 دقائق" : "cuts ETA by 6 min", 72]
  ].map(([label, note, width]) => `<div class="route-row"><div><b>${label}</b><span>${note}</span></div><strong>${width}%</strong><div class="progress"><i style="width:${width}%"></i></div></div>`).join("");
}

function renderZonesAndEarnings() {
  document.getElementById("zoneMatrixTitle").textContent = state.lang === "ar" ? "المناطق والممنوعات" : "Zones and restrictions";
  document.getElementById("zoneMatrixMeta").textContent = state.lang === "ar" ? "تغطية فورية حسب الحي" : "live neighborhood coverage";
  document.getElementById("earningsTitle").textContent = state.lang === "ar" ? "أرباح السائقين" : "Driver earnings";
  document.getElementById("zoneMatrix").innerHTML = deliveryZones.map(zone => `<article class="zone-card ${zone.restricted ? "restricted" : ""}">
    <span>${local(zone.ar, zone.en)}</span>
    <strong>${zone.eta}m</strong>
    <small>${zone.couriers} ${state.lang === "ar" ? "سائقين" : "drivers"} · ${local(zone.issueAr, zone.issueEn)}</small>
    <div class="progress"><i style="width:${zone.demand}%"></i></div>
  </article>`).join("");
  document.getElementById("driverEarnings").innerHTML = drivers
    .slice()
    .sort((a, b) => b.earnings - a.earnings)
    .map(driver => `<div class="earning-row"><div><b>${local(driver.ar, driver.en)}</b><span>${driver.completed} ${state.lang === "ar" ? "توصيلة" : "drops"} · ${driver.acceptance}% ${state.lang === "ar" ? "قبول" : "acceptance"}</span></div><strong>EGP ${driver.earnings}</strong></div>`)
    .join("");
}

function renderCRM() {
  const filtered = state.crmSegment === "all" ? customers : customers.filter(customer => customer.tier.toLowerCase().replaceAll(" ", "-") === state.crmSegment);
  if (!filtered.includes(customers[state.selectedCustomer])) state.selectedCustomer = customers.indexOf(filtered[0] || customers[0]);
  const totalLtv = customers.reduce((sum, customer) => sum + customer.ltv, 0);
  const selectedIndex = Math.min(state.selectedCustomer, customers.length - 1);
  document.getElementById("crmFilters").innerHTML = `
    <div class="filter-group">
      ${[["all", state.lang === "ar" ? "كل العملاء" : "All"], ["vip", "VIP"], ["gold", state.lang === "ar" ? "ذهبي" : "Gold"], ["at-risk", state.lang === "ar" ? "مهدد" : "At risk"], ["b2b", "B2B"]].map(([id, label]) => `<button class="filter ${state.crmSegment === id ? "active" : ""}" data-crm-segment="${id}">${label}</button>`).join("")}
    </div>
    <div class="filter-meta"><span class="pulse"></span><span>${state.lang === "ar" ? "فلترة حسب الولاء والقيمة وآخر طلب" : "Filtered by loyalty, value, and last order"}</span></div>
  `;
  document.getElementById("crmKpis").innerHTML = [
    [state.lang === "ar" ? "إجمالي قيمة العملاء" : "Customer value", `EGP ${Math.round(totalLtv / 1000)}K`, "+18%"],
    [state.lang === "ar" ? "عملاء نشطون" : "Active customers", customers.filter(customer => customer.affinity > 75).length, "+9"],
    [state.lang === "ar" ? "مهددون" : "At risk", customers.filter(customer => customer.affinity < 70).length, "winback"],
    [state.lang === "ar" ? "نقاط ولاء" : "Loyalty points", `${Math.round(customers.reduce((sum, customer) => sum + customer.points, 0) / 1000)}K`, "redeemable"]
  ].map(([label, value, note]) => `<article class="crm-kpi"><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`).join("");
  document.getElementById("crmGrid").innerHTML = filtered.map(customer => {
    const index = customers.indexOf(customer);
    return `<article class="customer-card ${index === state.selectedCustomer ? "active" : ""}" data-customer="${index}"><span>${customer.tier} · ${customer.channel}</span><h3>${local(customer.ar, customer.en)}</h3><strong>${customer.spend}</strong><p>${customer.segment}</p><span class="tag">${t("nudge")}</span></article>`;
  }).join("");
  const customer = customers[selectedIndex];
  const history = customerHistory.filter(order => order.customer === customer.en || order.customer === customer.ar || (customer.en === "Noor Co." && order.customer === "Noor Co."));
  document.getElementById("customerDetail").innerHTML = `
    <span>${t("profile")}</span>
    <h2>${local(customer.ar, customer.en)}</h2>
    <span class="tag">${customer.tier}</span><span class="tag">${branchName(customer.branch)}</span>
    <div class="profile-stat"><b>${customer.orders}</b><span>${state.lang === "ar" ? "طلبات" : "orders"}</span></div>
    <div class="profile-stat"><b>${customer.last}</b><span>${state.lang === "ar" ? "آخر طلب" : "last order"}</span></div>
    <div class="profile-stat"><b>${customer.points}</b><span>${state.lang === "ar" ? "نقاط ولاء" : "loyalty points"}</span></div>
    <div class="progress affinity"><i style="width:${customer.affinity}%"></i></div>
    <p>${state.lang === "ar" ? "التوصية التالية" : "Next best action"}: <strong>${customer.next}</strong></p>
    <button class="primary full">${state.lang === "ar" ? "إرسال عرض شخصي" : "Send personal offer"}</button>
  `;
  document.getElementById("historyTitle").textContent = state.lang === "ar" ? "سجل الطلبات" : "Order history";
  document.getElementById("historyMeta").textContent = `${local(customer.ar, customer.en)} · ${history.length} ${state.lang === "ar" ? "طلبات" : "orders"}`;
  document.getElementById("orderHistory").innerHTML = `
    <table>
      <thead><tr><th>${state.lang === "ar" ? "الطلب" : "Order"}</th><th>${state.lang === "ar" ? "الصنف" : "Item"}</th><th>${state.lang === "ar" ? "الفرع" : "Branch"}</th><th>${state.lang === "ar" ? "التاريخ" : "Date"}</th><th>${state.lang === "ar" ? "القيمة" : "Value"}</th><th>${state.lang === "ar" ? "الحالة" : "Status"}</th></tr></thead>
      <tbody>${history.map(order => `<tr><td><b>${order.id}</b></td><td>${order.item}</td><td>${branchName(order.branch)}</td><td>${order.date}</td><td>EGP ${order.value}</td><td><span class="history-pill">${order.status}</span></td></tr>`).join("") || `<tr><td colspan="6">${state.lang === "ar" ? "لا يوجد سجل مطابق" : "No matching history"}</td></tr>`}</tbody>
    </table>
  `;
  document.getElementById("loyaltyTitle").textContent = state.lang === "ar" ? "نظام الولاء" : "Loyalty system";
  document.getElementById("loyaltySystem").innerHTML = `<div class="loyalty-tier"><div><strong>${customer.tier}</strong><span>${customer.points} ${state.lang === "ar" ? "نقطة" : "points"}</span></div></div><div class="profile-stat"><b>${customer.affinity}%</b><span>${state.lang === "ar" ? "احتمال العودة" : "return affinity"}</span></div><div class="profile-stat"><b>${customer.next}</b><span>${state.lang === "ar" ? "العرض التالي" : "next offer"}</span></div>`;
  renderSegmentsAndCampaigns();
}

function renderSegmentsAndCampaigns() {
  const segments = [
    [state.lang === "ar" ? "VIP" : "VIP", customers.filter(c => c.tier === "VIP").length, 78],
    [state.lang === "ar" ? "ذهبي" : "Gold", customers.filter(c => c.tier === "Gold").length, 88],
    [state.lang === "ar" ? "شركات" : "B2B", customers.filter(c => c.tier === "B2B").length, 64],
    [state.lang === "ar" ? "استرجاع" : "Winback", customers.filter(c => c.tier === "At risk").length, 52]
  ];
  document.getElementById("segmentTitle").textContent = state.lang === "ar" ? "التقسيم" : "Segmentation";
  document.getElementById("segmentMeta").textContent = state.lang === "ar" ? "RFM + ولاء + قناة الشراء" : "RFM + loyalty + channel";
  document.getElementById("segmentVisual").innerHTML = segments.map(([label, value, size]) => `<article class="segment-card" style="--size:${size}"><span>${label}</span><strong>${value}</strong><small>${state.lang === "ar" ? "جاهز للتفعيل" : "ready to activate"}</small></article>`).join("");
  document.getElementById("crmCampaignTitle").textContent = state.lang === "ar" ? "حملات مقترحة" : "Suggested campaigns";
  document.getElementById("crmCampaigns").innerHTML = [
    ["Pistachio Payday", "Gold", "+24%"],
    ["Warm Bite Winback", "At risk", "18% return"],
    ["Office Box Pro", "B2B", "EGP 92K"]
  ].map(([name, segment, lift]) => `<div class="queue-card"><div><b>${name}</b><span>${segment}</span></div><strong>${lift}</strong></div>`).join("");
}

function renderBranches() {
  document.getElementById("branchCommand").innerHTML = branches.map(branch => `<button class="branch-tile ${branch.id === state.branch ? "active" : ""}" data-branch="${branch.id}"><b>${local(branch.ar, branch.en)}</b><span>EGP ${branch.sales}K · ${branch.eta}m</span></button>`).join("");
  document.getElementById("branchCompareTitle").textContent = state.lang === "ar" ? "مقارنة الفروع" : "Branch comparison";
  document.getElementById("branchCompareMeta").textContent = state.lang === "ar" ? "مبيعات · SLA · ضغط" : "sales · SLA · pressure";
  document.getElementById("branchCompareChart").innerHTML = branches.map(branch => `<div class="compare-row"><span>${branchName(branch.id)}</span><div class="compare-track"><i style="--w:${branch.sales / 2}%"></i></div><b>EGP ${branch.sales}K · ${branch.sla}%</b></div>`).join("");
  document.getElementById("branchGrid").innerHTML = branches.map(branch => `<article class="branch-card ${branch.status}"><span>${local(branch.ar, branch.en)}</span><h3>EGP ${branch.sales}K</h3><strong>${branch.sla}%</strong><p>${state.lang === "ar" ? "متوسط الوصول" : "Avg ETA"} ${branch.eta}m · ${branch.staff} ${state.lang === "ar" ? "فريق" : "staff"}</p><div class="progress"><i style="width:${branch.pressure}%"></i></div></article>`).join("");
}

function renderReports() {
  const periodLabel = { week: state.lang === "ar" ? "أسبوع" : "Week", month: state.lang === "ar" ? "شهر" : "Month", quarter: state.lang === "ar" ? "ربع سنة" : "Quarter" };
  const revenue = branches.reduce((sum, branch) => sum + branch.sales, 0);
  const orders = branches.reduce((sum, branch) => sum + branch.orders, 0);
  document.getElementById("reportFilters").innerHTML = `
    <div class="filter-group">${[["week", periodLabel.week], ["month", periodLabel.month], ["quarter", periodLabel.quarter]].map(([id, label]) => `<button class="filter ${state.reportPeriod === id ? "active" : ""}" data-report-period="${id}">${label}</button>`).join("")}</div>
    <div class="filter-meta"><span class="pulse"></span><span>${state.lang === "ar" ? "تقارير مالية قابلة للتصدير" : "Export-ready financial reporting"}</span></div>
  `;
  document.getElementById("reportKpis").innerHTML = [
    [state.lang === "ar" ? "الإيراد" : "Revenue", `EGP ${revenue}K`, "+21%"],
    [state.lang === "ar" ? "الطلبات" : "Orders", orders, "+14%"],
    [state.lang === "ar" ? "هامش الربح" : "Gross margin", "42%", "+3.2"],
    [state.lang === "ar" ? "عمولة المنصات" : "Marketplace fees", "EGP 84K", "-5%"]
  ].map(([label, value, note]) => `<article class="report-kpi"><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`).join("");
  document.getElementById("heatmap").innerHTML = Array.from({ length: 35 }, (_, i) => `<i class="cell" style="--a:${.12 + ((i * 17 + activeBranch().pressure) % 80) / 100}"></i>`).join("");
  document.getElementById("retention").innerHTML = [["D7", 68], ["D30", 47], ["D90", 31], [state.lang === "ar" ? "ولاء ذهبي" : "Gold loyalty", 58]].map(([label, value]) => `<div><div class="inventory-line"><span>${label}</span><b>${value}%</b></div><div class="progress"><i style="width:${value}%"></i></div></div>`).join("");
  document.getElementById("profitTitle").textContent = state.lang === "ar" ? "الربحية" : "Profitability";
  document.getElementById("profitChart").innerHTML = `<div class="profit-ring" style="--profit:42%"><div><strong>42%</strong><span>${state.lang === "ar" ? "هامش إجمالي" : "gross margin"}</span></div></div>`;
  document.getElementById("financialTitle").textContent = state.lang === "ar" ? "التقرير المالي" : "Financial report";
  document.getElementById("financialMeta").textContent = periodLabel[state.reportPeriod];
  document.getElementById("financialTable").innerHTML = `
    <table>
      <thead><tr><th>${state.lang === "ar" ? "البند" : "Line item"}</th><th>${state.lang === "ar" ? "القيمة" : "Value"}</th><th>${state.lang === "ar" ? "التغير" : "Change"}</th><th>${state.lang === "ar" ? "ملاحظة" : "Note"}</th></tr></thead>
      <tbody>${[
        [state.lang === "ar" ? "مبيعات مباشرة" : "Direct sales", "EGP 1.92M", "+24%", state.lang === "ar" ? "أفضل هامش" : "best margin"],
        [state.lang === "ar" ? "منصات" : "Marketplaces", "EGP 740K", "+11%", state.lang === "ar" ? "عمولة أعلى" : "higher commission"],
        [state.lang === "ar" ? "تكلفة المكونات" : "Ingredient cost", "EGP 812K", "+7%", state.lang === "ar" ? "ضغط الفستق" : "pistachio pressure"],
        [state.lang === "ar" ? "صافي مساهمة" : "Contribution", "EGP 1.1M", "+18%", state.lang === "ar" ? "قابل للتوسع" : "scalable"]
      ].map(row => `<tr><td><b>${row[0]}</b></td><td>${row[1]}</td><td><span class="history-pill">${row[2]}</span></td><td>${row[3]}</td></tr>`).join("")}</tbody>
    </table>
  `;
}

function renderMarketing() {
  const campaigns = [
    ["Midnight Syrup Drop", "Push", "+31% CTR"], ["Tagamoa Office Box", "B2B", "EGP 94K"], ["Pistachio Payday", "Loyalty", "18K sends"],
    ["Winback Warm Bite", "CRM", "22% return"], ["Talabat Rank Boost", "Marketplace", "+12 slots"], ["Ramadan Preorder", "Seasonal", "2.4K leads"]
  ];
  document.getElementById("marketingBoard").innerHTML = [
    [state.lang === "ar" ? "حملات نشطة" : "Active campaigns", 6, "+2"],
    [state.lang === "ar" ? "العائد المتوقع" : "Expected ROAS", "5.8x", "+0.7"],
    [state.lang === "ar" ? "شرائح مستهدفة" : "Target segments", 4, "CRM"],
    [state.lang === "ar" ? "ميزانية اليوم" : "Today budget", "EGP 18K", "72% used"]
  ].map(([label, value, note]) => `<article class="marketing-card"><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`).join("");
  document.getElementById("campaigns").innerHTML = campaigns.map((item, index) => `<article class="campaign-card"><span>${item[1]}</span><h3>${item[0]}</h3><strong>${item[2]}</strong><p>${state.lang === "ar" ? "مرتبطة بالسلوك والفرع والوقت." : "Linked to behavior, branch, and timing."}</p><div class="progress"><i style="width:${62 + index * 5}%"></i></div><button class="secondary full">${state.lang === "ar" ? "تفعيل / تصدير" : "Activate / export"}</button></article>`).join("");
}

function renderAll() {
  renderI18n();
  renderBranchSwitcher();
  renderNav();
  renderMenu();
  renderCart();
  renderHeroSignals();
  renderStory();
  renderDashboardFilters();
  renderCommandStrip();
  renderOps();
  renderSalesOverview();
  renderDashboardAnalytics();
  renderCustomerInsights();
  renderDashboardTables();
  renderStreams();
  renderLifecycle();
  renderLogistics();
  renderCRM();
  renderBranches();
  renderReports();
  renderMarketing();
}

document.addEventListener("click", event => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) routeTo(routeButton.dataset.route);
  const catButton = event.target.closest("[data-cat]");
  if (catButton) { state.category = catButton.dataset.cat; renderMenu(); }
  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(addButton.dataset.add);
  const exportButton = event.target.closest("#crmExport, #branchExport, #campaignExport, [data-i18n='downloadPdf'], [data-i18n='export']");
  if (exportButton) {
    const scope = exportButton.id === "branchExport" ? (state.lang === "ar" ? "تقرير الفروع" : "Branches") : exportButton.id === "campaignExport" ? (state.lang === "ar" ? "الحملات" : "Campaigns") : exportButton.id === "crmExport" ? "CRM" : (state.lang === "ar" ? "التقرير" : "Report");
    showToast(exportLabel(scope), state.lang === "ar" ? "ملف تجريبي جاهز للمراجعة داخل النظام." : "Demo file is ready for review in the workspace.");
  }
  const branchButton = event.target.closest("[data-branch]");
  if (branchButton) { state.branch = branchButton.dataset.branch; renderAll(); }
  const dashboardFilterButton = event.target.closest("[data-dashboard-filter]");
  if (dashboardFilterButton) { state.dashboardFilter = dashboardFilterButton.dataset.dashboardFilter; renderAll(); }
  const crmSegmentButton = event.target.closest("[data-crm-segment]");
  if (crmSegmentButton) { state.crmSegment = crmSegmentButton.dataset.crmSegment; renderCRM(); }
  const reportPeriodButton = event.target.closest("[data-report-period]");
  if (reportPeriodButton) { state.reportPeriod = reportPeriodButton.dataset.reportPeriod; renderReports(); }
  const dispatchButton = event.target.closest("[data-dispatch]");
  if (dispatchButton) { state.dispatchMode = dispatchButton.dataset.dispatch; renderLogistics(); }
  const driverButton = event.target.closest("[data-driver]");
  if (driverButton) { state.selectedDriver = Number(driverButton.dataset.driver); renderLogistics(); }
  const customerButton = event.target.closest("[data-customer]");
  if (customerButton) { state.selectedCustomer = Number(customerButton.dataset.customer); renderCRM(); }
});

document.getElementById("langToggle").addEventListener("click", () => {
  state.lang = state.lang === "ar" ? "en" : "ar";
  renderAll();
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.add("theme-shift");
  document.body.classList.toggle("light");
  setTimeout(() => document.body.classList.remove("theme-shift"), 520);
});

document.getElementById("placeOrder").addEventListener("click", () => {
  document.getElementById("orderSuccess").classList.add("show");
  setTimeout(() => routeTo("tracking"), 900);
});

setInterval(() => {
  const pulse = 97.6 + Math.random() * 1.9;
  setText("pulseMetric", `${pulse.toFixed(1)}%`);
  const heroOrders = byId("heroOrders");
  if (heroOrders) heroOrders.textContent = activeBranch().orders + Math.round(Math.random() * 5);
  liveOrders.unshift(liveOrders.pop());
  if (state.route === "dashboard") setText("liveRevenue", `EGP ${Math.round(activeBranch().sales * 4.2 + Math.random() * 40)}K`);
  if (["dashboard", "delivery", "talabat"].includes(state.route)) renderStreams();
  if (state.route === "dashboard") {
    renderSalesOverview();
    renderOps();
    renderDashboardAnalytics();
    renderCustomerInsights();
    renderDashboardTables();
    renderLifecycle();
  }
  if (state.route === "delivery") renderLogistics();
}, 2600);

state.cart = [{ ...products[0], qty: 1 }, { ...products[4], qty: 2 }];
renderAll();
requestAnimationFrame(() => {
  document.body.classList.remove("app-loading");
  document.body.classList.add("app-ready");
});
