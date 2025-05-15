import { db, products } from '~/server/database';
import { eq, sql } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
  try {
    // Get query parameters
    const query = getQuery(event);
    const category = query.category;
    const search = query.search;
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const offset = (page - 1) * limit;
    
    // Build the query
    let query_builder = db.select().from(products);
    
    // Add category filter if provided
    if (category) {
      query_builder = query_builder.where(eq(products.category, category));
    }
    
    // Add search filter if provided
    if (search) {
      query_builder = query_builder.where(
        sql`${products.name} LIKE ${`%${search}%`} OR ${products.description} LIKE ${`%${search}%`}`
      );
    }
    
    // Add pagination
    query_builder = query_builder.limit(limit).offset(offset);
    
    // Execute the query
    const result = await query_builder;
    
    // Count total products for pagination
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
    console.error('Error fetching products:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Server error',
      message: 'Failed to fetch products'
    });
  }
}); 