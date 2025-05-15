import { defineEventHandler, createError } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/h3/dist/index.mjs';
import { d as db, p as products } from '../../../_/index.mjs';
import { eq } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/drizzle-orm/index.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/drizzle-orm/mysql-core/index.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/mysql2/promise.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/drizzle-orm/mysql2/index.js';

const _id__get = defineEventHandler(async (event) => {
  try {
    const id = parseInt(event.context.params.id);
    if (isNaN(id) || id <= 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Invalid product ID"
      });
    }
    const result = await db.select().from(products).where(eq(products.id, id)).limit(1);
    if (!result.length) {
      throw createError({
        statusCode: 404,
        statusMessage: "Not Found",
        message: "Product not found"
      });
    }
    return result[0];
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    console.error("Error fetching product:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Server Error",
      message: "Failed to fetch product"
    });
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
