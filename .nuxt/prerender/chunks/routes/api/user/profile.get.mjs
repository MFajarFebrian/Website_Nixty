import { defineEventHandler, createError } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/h3/dist/index.mjs';
import { d as db, u as users } from '../../../_/index.mjs';
import { eq } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/drizzle-orm/index.js';
import { a as authenticate } from '../../../_/nitro.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/drizzle-orm/mysql-core/index.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/mysql2/promise.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/drizzle-orm/mysql2/index.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/bcrypt/bcrypt.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/jsonwebtoken/index.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/consola/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/ipx/dist/index.mjs';

const profile_get = defineEventHandler(async (event) => {
  try {
    const authUser = authenticate(event);
    const result = await db.select({
      id: users.id,
      email: users.email,
      name: users.name,
      role: users.role,
      createdAt: users.createdAt
    }).from(users).where(eq(users.id, authUser.id)).limit(1);
    if (!result.length) {
      throw createError({
        statusCode: 404,
        statusMessage: "Not Found",
        message: "User not found"
      });
    }
    return result[0];
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    console.error("Error fetching user profile:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Server Error",
      message: "Failed to fetch user profile"
    });
  }
});

export { profile_get as default };
//# sourceMappingURL=profile.get.mjs.map
