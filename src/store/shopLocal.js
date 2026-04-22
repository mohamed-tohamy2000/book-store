const LOCAL_CART_KEY = "local-cart-items";
const LOCAL_WISHLIST_KEY = "local-wishlist-items";

function readJson(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeBook(book = {}) {
  const price = toNumber(book.price ?? book.final_price ?? 0, 0);
  const quantity = toNumber(book.quantity ?? book.qty ?? 1, 1);
  const sourceId = book.id ?? book.book_id ?? book.localId ?? Date.now();
  const localId = `book-${sourceId}`;

  return {
    id: `local-${localId}`,
    localId,
    fallbackBookId: book.id ?? book.book_id ?? null,
    isLocal: true,
    title: book.title || book.name || "Rich Dad And Poor Dad",
    author: book.author || book.author_name || "Robert T. Kiyosaki",
    description:
      book.description ||
      book.summary ||
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
    image: book.image || book.cover || book.thumbnail || "",
    asin: book.asin || book.code || "-",
    quantity,
    price,
    total: toNumber(book.total ?? quantity * price, quantity * price),
  };
}

export function getLocalCartItems() {
  return readJson(LOCAL_CART_KEY);
}

export function getLocalWishlistItems() {
  return readJson(LOCAL_WISHLIST_KEY);
}

export function addLocalCartItem(book, quantity = 1) {
  const items = getLocalCartItems();
  const normalized = normalizeBook({ ...book, quantity });
  const index = items.findIndex((item) => item.localId === normalized.localId);

  if (index >= 0) {
    const oldQty = toNumber(items[index].quantity, 1);
    const nextQty = oldQty + toNumber(quantity, 1);
    items[index].quantity = nextQty;
    items[index].total = nextQty * toNumber(items[index].price, 0);
  } else {
    items.push(normalized);
  }

  writeJson(LOCAL_CART_KEY, items);
  return items;
}

export function addLocalWishlistItem(book, quantity = 1) {
  const items = getLocalWishlistItems();
  const normalized = normalizeBook({ ...book, quantity });
  const index = items.findIndex((item) => item.localId === normalized.localId);

  if (index >= 0) {
    const oldQty = toNumber(items[index].quantity, 1);
    const nextQty = oldQty + toNumber(quantity, 1);
    items[index].quantity = nextQty;
    items[index].total = nextQty * toNumber(items[index].price, 0);
  } else {
    items.push(normalized);
  }

  writeJson(LOCAL_WISHLIST_KEY, items);
  return items;
}

export function updateLocalCartQuantity(localId, quantity) {
  const items = getLocalCartItems();
  const next = items.map((item) =>
    item.localId === localId
      ? {
          ...item,
          quantity,
          total: toNumber(item.price, 0) * toNumber(quantity, 1),
        }
      : item,
  );
  writeJson(LOCAL_CART_KEY, next);
  return next;
}

export function updateLocalWishlistQuantity(localId, quantity) {
  const items = getLocalWishlistItems();
  const next = items.map((item) =>
    item.localId === localId
      ? {
          ...item,
          quantity,
          total: toNumber(item.price, 0) * toNumber(quantity, 1),
        }
      : item,
  );
  writeJson(LOCAL_WISHLIST_KEY, next);
  return next;
}

export function removeLocalCartItem(localId) {
  const items = getLocalCartItems().filter((item) => item.localId !== localId);
  writeJson(LOCAL_CART_KEY, items);
  return items;
}

export function removeLocalWishlistItem(localId) {
  const items = getLocalWishlistItems().filter((item) => item.localId !== localId);
  writeJson(LOCAL_WISHLIST_KEY, items);
  return items;
}
