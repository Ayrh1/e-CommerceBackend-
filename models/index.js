// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

/* Products belongsTo Category:
This means each instance of 
Product is associated with one instance of Category.
*/
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
/* Categories have many Products:
This indicates that a single Category can be associated 
with multiple Product instances.*/
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
/* Products belongToMany Tags (through ProductTag):
A single Product can have multiple Tag instances 
associated with it.*/
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  otherKey: 'tag_id'
});
/* Tags belongToMany Products (through ProductTag):
A single Tag can be associated with multiple Product 
instances. */
Tag.belongsToMany(Product, {
  through: ProductTag, // through option in Sequelize's many-to-many associations is crucial for defining how two models relate to each other through a third "join" or "junction" table.
  foreignKey: 'tag_id',
  otherKey: 'product_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


/* notes - Product and Category Association (One-to-Many) -
belongsTo Association: 
When you define that Product belongs to Category using Product.
belongsTo(Category), you are specifying that each Product can be associated with only 
one Category. This is because the belongsTo association adds a foreign key to the Product
 model, pointing to a primary key in the Category model. In database terms, this creates 
 a one-to-many relationship from Category to Product.

hasMany Association: 
Conversely, Category.hasMany(Product) specifies that a single 
Category can have multiple Products. This doesn't change the fact that each Product is 
linked to only one Category.

hasOne Association: 
The hasOne() association is generally used in a one-to-one 
relationship, where one instance of the source model is associated with one instance of 
the target model. For example, if each product had only one specific product detail, 
you might use Product.hasOne(ProductDetail).
*/

/* Notes -  Product and Tag Association (Many-to-Many)
This is a many-to-many relationship and is managed in Sequelize using a join table. In your case, 
the join table is ProductTag.
The ProductTag table contains at least two foreign keys: one pointing to a Product (product_id) 
and one pointing to a Tag (tag_id).
When you associate a Product with a Tag, an entry is made in the ProductTag table with the 
respective product_id and tag_id. This way, a product can be associated with multiple tags, and a tag 
can be associated with multiple products.
This type of relationship is useful for scenarios like an e-commerce site where a product might 
have multiple tags like "sale", "popular", or "new", and a tag can apply to many different products.
*/