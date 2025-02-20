const Category = require('../models/Category');
const Product = require('../models/Product');
const ProductImage = require('../models/ProductImage');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ['name', 'slug', 'description']
    });
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { slug: req.params.slug },
      include: [{
        model: Product,
        include: [{
          model: ProductImage,
          attributes: ['url', 'is_primary']
        }]
      }]
    });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const formattedProducts = category.Products.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      images: product.ProductImages.map(img => img.url),
      discount: product.discount_percent
    }));

    res.json({
      category: {
        name: category.name,
        description: category.description
      },
      products: formattedProducts
    });
  } catch (error) {
    console.error('Error fetching category products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
