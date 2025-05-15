import { defineEventHandler, getQuery, createError } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/h3/dist/index.mjs';
import { d as db, p as products } from '../../_/index.mjs';
import { eq, sql } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/drizzle-orm/index.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/drizzle-orm/mysql-core/index.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/mysql2/promise.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/drizzle-orm/mysql2/index.js';

const index_get = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const category = query.category;
    const search = query.search;
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const offset = (page - 1) * limit;
    let query_builder = db.select().from(products);
    if (category) {
      query_builder = query_builder.where(eq(products.category, category));
    }
    if (search) {
      query_builder = query_builder.where(
        sql`${products.name} LIKE ${`%${search}%`} OR ${products.description} LIKE ${`%${search}%`}`
      );
    }
    query_builder = query_builder.limit(limit).offset(offset);
    const result = await query_builder;
    const countQuery = db.select({ count: sql`count(*)` }).from(products);
    if (category) {
      countQuery.where(eq(products.category, category));
    }
    if (search) {
      countQuery.where(
        sql`${products.name} LIKE ${`%${search}%`} OR ${products.description} LIKE ${`%${search}%`}`
      );
    }
    const [{ count }] = await countQuery;
    return {
      products: result,
      pagination: {
        total: count,
        page,
        limit,
        pages: Math.ceil(count / limit)
      }
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Server error",
      message: "Failed to fetch products"
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
