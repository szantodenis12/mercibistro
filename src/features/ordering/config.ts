/**
 * Feature flag: set NEXT_PUBLIC_ORDERING_ENABLED=true (in .env.local / hosting env) once the
 * backend described in docs/ORDERING.md is live. While false, the cart works for browsing
 * but checkout is blocked with a "coming soon — call us" notice.
 */
export const ORDERING_ENABLED = process.env.NEXT_PUBLIC_ORDERING_ENABLED === "true";

export const CART_STORAGE_KEY = "merci-cart-v1";
export const MAX_QTY_PER_LINE = 20;
