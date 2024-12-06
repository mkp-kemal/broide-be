import ProductsData from "../models/products.models.js";

const getProducts = async (req, res) => {
    try {
        const blogs = await ProductsData.find().sort({ createdAt: -1 });

        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Gagal mendapatkan data blog', error: error.message });
    }
};

export { getProducts };