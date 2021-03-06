module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/


    /***************************************************************************
     *                                                                          *
     * Custom routes here...                                                    *
     *                                                                          *
     *  If a request to a URL doesn't match any of the custom routes above, it  *
     * is matched against Sails route blueprints. See `config/blueprints.js`    *
     * for configuration options and examples.                                  *
     *                                                                          *
     ***************************************************************************/

    // ADMIN
    // old with menu toogle 'GET    /admin'               : 'back/AdminController.index',

    'GET    /admin': 'back/AdminController.menu',
    'GET    /admin/menu': 'back/AdminController.menu',

    // create the new product in db 
    '/admin/product/create/validation': 'back/productController.productNewValidation',
    'GET    /admin/product/create': 'back/productController.create',
    'GET    /admin/product/list': 'back/productController.list',// display all the product available
    'GET    /admin/product/preview/:id': 'back/productController.detail',// display the detail about one product
    'GET    /admin/product/edit/:id': 'back/productController.edit',// edit the product

    // url to use the profile of the admin user
    'GET    /admin/profile': 'back/userController.profile',

    //'admin/AdminController.productCreate',

    'GET    /admin/category/list': 'back/CategoryController.list',
    'GET    /admin/category/create': 'back/CategoryController.create',
    'POST    /admin/category/create/validation': 'back/CategoryController.createValidation',

    'GET    /admin/order/manage': 'back/OrderController.manage',
    'GET    /admin/customer/list': 'back/AdminController.user',

    // page of admin preference
    'GET    /admin/preference': {view: 'back/preference'},


    // install page
    'GET    /admin/install': {view: 'back/install/index'},

    // page to manage the modules
    'GET    /admin/module': {view: 'back/module/index'},
    'GET    /admin/module/create': 'back/moduleController.create',
    'GET    /admin/module/list': 'back/moduleController.list',
    'GET    /admin/module/search': 'back/moduleController.search', // return the list of module to be added
    'GET    /admin/module/install': 'back/moduleController.install' // install one module as a service



};
