const Product = require('../models/Product');
const Category = require('../models/Category');
const ProductImage = require('../models/ProductImage');

// Configurar as relações
Product.belongsTo(Category, { foreignKey: 'category_id' });
Product.hasMany(ProductImage, { foreignKey: 'product_id' });
ProductImage.belongsTo(Product, { foreignKey: 'product_id' });

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ['name', 'slug']
        },
        {
          model: ProductImage,
          attributes: ['url', 'is_primary']
        }
      ]
    });

    const formattedProducts = products.map(product => ({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      category: product.Category.name,
      images: product.ProductImages.map(img => img.url),
      discount: product.discount_percent
    }));

    res.json(formattedProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { slug: req.params.slug },
      include: [
        {
          model: Category,
          attributes: ['name', 'slug']
        },
        {
          model: ProductImage,
          attributes: ['url', 'is_primary']
        }
      ]
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const formattedProduct = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: Number(product.price),
      stock: product.stock,
      category: product.Category.name,
      images: product.ProductImages.map(img => img.url),
      discount: product.discount_percent
    };

    res.json(formattedProduct);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { featured: true },
      include: [
        {
          model: Category,
          attributes: ['name', 'slug']
        },
        {
          model: ProductImage,
          attributes: ['url', 'is_primary']
        }
      ],
      limit: 4
    });

    const formattedProducts = products.map(product => ({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      category: product.Category.name,
      images: product.ProductImages.map(img => img.url),
      discount: product.discount_percent
    }));

    res.json(formattedProducts);
  } catch (error) {
    console.error('Error fetching featured products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
