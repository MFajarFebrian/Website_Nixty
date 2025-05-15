import { db, products } from '~/server/database';
import { eq } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
  try {
    const id = parseInt(event.context.params.id);
    
    if (isNaN(id) || id <= 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'Invalid product ID'
      });
    }
    
    const result = await db.select().from(products).where(eq(products.id, id)).limit(1);
    
    if (!result.length) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Not Found',
        message: 'Product not found'
      });
    }
    
    return result[0];
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    
    console.error('Error fetching product:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Server Error',
      message: 'Failed to fetch product'
    });
  }
}); 