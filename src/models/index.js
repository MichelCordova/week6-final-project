const Cart = require('./Cart')
const Category = require('./Category')
const Product = require('./Product')
const Purchase = require('./Purchase')
const User = require('./User')
const ProductImg = require('./ProductImg')

//!PRODUCT AND CATEGORY
Product.belongsTo(Category)
Category.hasMany(Product)

//!CART AND USER
Cart.belongsTo(User)
User.hasMany(Cart)

//!Cart 

Cart.belongsTo(Product)
Product.hasMany(Cart)


//!USER ID

Purchase.belongsTo(User)
User.hasMany(Purchase)


//!PURCHASE -> FOR PRODUCTID

Purchase.belongsTo(Product)
Product.hasMany(Purchase)

//!ProductImg
ProductImg.belongsTo(Product)
Product.hasMany(ProductImg)