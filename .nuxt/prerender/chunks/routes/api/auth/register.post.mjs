import { defineEventHandler, readBody, createError } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/h3/dist/index.mjs';
import { d as db, u as users } from '../../../_/index.mjs';
import { eq } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/drizzle-orm/index.js';
import { h as hashPassword, g as generateToken } from '../../../_/nitro.mjs';
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

const register_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.email || !body.password || !body.name) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Email, password and name are required"
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Invalid email format"
      });
    }
    if (body.password.length < 6) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Password must be at least 6 characters long"
      });
    }
    const existingUser = await db.select().from(users).where(eq(users.email, body.email)).limit(1);
    if (existingUser.length) {
      throw createError({
        statusCode: 409,
        statusMessage: "Conflict",
        message: "User with this email already exists"
      });
    }
    const hashedPassword = await hashPassword(body.password);
    await db.insert(users).values({
      email: body.email,
      password: hashedPassword,
      name: body.name,
      role: "customer"
      // Default role
    });
    const newUser = await db.select({
      id: users.id,
      email: users.email,
      name: users.name,
      role: users.role,
      createdAt: users.createdAt
    }).from(users).where(eq(users.email, body.email)).limit(1);
    if (!newUser.length) {
      throw new Error("Failed to retrieve created user");
    }
    const user = newUser[0];
    const token = generateToken(user);
    return {
      user,
      token
    };
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    console.error("Error registering user:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Server Error",
      message: "Failed to register user"
    });
  }
});

export { register_post as default };
//# sourceMappingURL=register.post.mjs.map
