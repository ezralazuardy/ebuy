type Product = {
  id: string;
  image_url: string;
  image_blur_data_url: string | undefined;
  name: string;
  price: number;
  unit: string;
  short_description: string;
  description: string;
  statement_description: string;
  marketing_feature: string;
};

export default Product;
