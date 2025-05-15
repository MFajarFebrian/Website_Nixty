import {
  int,
  timestamp,
  mysqlTable,
  primaryKey,
  varchar,
  text,
  decimal,
  boolean,
  mysqlEnum
} from 'drizzle-orm/mysql-core'

// Users table
export const users = mysqlTable('users', {
  id: int('id').autoincrement().primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  role: mysqlEnum('role', ['admin', 'customer']).default('customer').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
})

// Products table
export const products = mysqlTable('products', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  imageUrl: varchar('image_url', { length: 255 }),
  stock: int('stock').default(0).notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  category: varchar('category', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
})

// Orders table
export const orders = mysqlTable('orders', {
  id: int('id').autoincrement().primaryKey(),
  userId: int('user_id').notNull().references(() => users.id),
  status: mysqlEnum('status', ['pending', 'processing', 'completed', 'cancelled']).default('pending').notNull(),
  total: decimal('total', { precision: 10, scale: 2 }).notNull(),
  address: text('address'),
  paymentMethod: varchar('payment_method', { length: 50 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
})

// Order Items table (junction table between orders and products)
export const orderItems = mysqlTable('order_items', {
  id: int('id').autoincrement().primaryKey(),
  orderId: int('order_id').notNull().references(() => orders.id),
  productId: int('product_id').notNull().references(() => products.id),
  quantity: int('quantity').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
})

// Cart table
export const carts = mysqlTable('carts', {
  id: int('id').autoincrement().primaryKey(),
  userId: int('user_id').references(() => users.id),
  sessionId: varchar('session_id', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
})

// Cart Items table
export const cartItems = mysqlTable('cart_items', {
  id: int('id').autoincrement().primaryKey(),
  cartId: int('cart_id').notNull().references(() => carts.id),
  productId: int('product_id').notNull().references(() => products.id),
  quantity: int('quantity').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
})

// Product Categories
export const categories = mysqlTable('categories', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
}) 