export const getProductList = async () => {
    const response = await fetch('http://localhost:3000/products');
    const result = await response.json();
    return result
}

export const createProduct = async (data) => {
    const response = await fetch('http://localhost:3000/products', {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data) // vi la gui len dang object nen phai chuyen lai thanh dang json
            });
    const result = await response.json();
    return result;
}