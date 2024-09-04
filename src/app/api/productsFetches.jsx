

export async function getAllProducts() {

    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      //setMockCart(mockData);
      console.log(data);

      return data; // return fetched data
    } catch (error) {
      console.error("Failed to fetch mockdata:", error);
      return []; // empty array if failed fetch
    }


}