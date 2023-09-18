const Router = require('express');
const { salesController } = require('../src/controllers');
const { validateSales } = require('../src/middlewares/validateSales');
const quantityValidation = require('../src/middlewares/quantityValidation');

const router = Router();

router.get('/', salesController.listSales);

router.get('/:id', salesController.getSalesById);

router.post('/', validateSales, salesController.createSale);

router.put('/:id', validateSales, salesController.updateSale);

router.delete('/:id', salesController.deleteSale);

router.put('/:saleId/products/:productId/quantity',
  quantityValidation.quantityIsRequired,
  salesController.updateQuantity
);

module.exports = router;