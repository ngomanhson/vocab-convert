export const GET = () => {
    const data = [
        {
            "id": 1,
            "name": "Laptop Dell XPS 13",
            "description": "Laptop mỏng nhẹ, hiệu năng cao cho công việc và học tập.",
            "price": 1299.99,
            "currency": "USD",
            "inStock": true,
            "category": "Electronics"
        },
        {
            "id": 2,
            "name": "iPhone 15",
            "description": "Điện thoại thông minh với camera 48MP và chip A17 Bionic.",
            "price": 999.00,
            "currency": "USD",
            "inStock": true,
            "category": "Mobile"
        },
        {
            "id": 3,
            "name": "Tai nghe Sony WH-1000XM5",
            "description": "Tai nghe chống ồn cao cấp với pin lên tới 30 giờ.",
            "price": 349.99,
            "currency": "USD",
            "inStock": false,
            "category": "Accessories"
        },
        {
            "id": 4,
            "name": "Samsung 4K Smart TV 55\"",
            "description": "Smart TV màn hình 4K UHD, hỗ trợ HDR10+.",
            "price": 699.50,
            "currency": "USD",
            "inStock": true,
            "category": "Electronics"
        },
        {
            "id": 5,
            "name": "Bàn phím cơ Keychron K6",
            "description": "Bàn phím cơ không dây nhỏ gọn, hot-swappable.",
            "price": 89.99,
            "currency": "USD",
            "inStock": true,
            "category": "Accessories"
        },
        {
            "id": 6,
            "name": "Nike Air Max 270",
            "description": "Giày thể thao phong cách, đệm khí êm ái.",
            "price": 150.00,
            "currency": "USD",
            "inStock": true,
            "category": "Fashion"
        },
        {
            "id": 7,
            "name": "Áo thun Uniqlo",
            "description": "Áo thun cotton thoáng mát, phù hợp mặc hàng ngày.",
            "price": 19.90,
            "currency": "USD",
            "inStock": false,
            "category": "Fashion"
        },
        {
            "id": 8,
            "name": "Balo Herschel Classic",
            "description": "Balo thời trang, dung tích lớn, tiện lợi cho học sinh và nhân viên văn phòng.",
            "price": 59.99,
            "currency": "USD",
            "inStock": true,
            "category": "Bags"
        },
        {
            "id": 9,
            "name": "Máy pha cà phê Philips",
            "description": "Máy pha cà phê tự động với chế độ tạo bọt sữa.",
            "price": 249.00,
            "currency": "USD",
            "inStock": true,
            "category": "Home Appliances"
        },
        {
            "id": 10,
            "name": "Sách Atomic Habits",
            "description": "Cuốn sách phát triển bản thân bán chạy của James Clear.",
            "price": 16.99,
            "currency": "USD",
            "inStock": true,
            "category": "Books"
        }
    ]


    return Response.json(data)
}