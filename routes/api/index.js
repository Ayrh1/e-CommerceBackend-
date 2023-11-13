const router = require('express').Router();
/*
These lines import routers from other modules in the application. 
Each of these modules (category-routes, product-routes, tag-routes)
define routes that are specific to categories, products, and tags.
*/
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

/*
These lines "mount" the imported routers to specific path prefixes. This means that:
Any route defined in categoryRoutes will be accessible under the /categories path. For example, if categoryRoutes has a route for /all, in the application, it will be accessible via /categories/all.
Similarly, routes in productRoutes and tagRoutes will be prefixed with /products and /tags, respectively.
*/
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
