export function loadData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                data: {
                    cartItems: [
                        {
                            image: 'http://vn-live-01.slatic.net/p/xe-tay-ga-honda-vision-do-tuoi-0258-4544121-1-catalog.jpg',
                            link: '/xe-tay-ga-honda-vision-o-tuoi-1214454.html?mp=1',
                            name: 'Xe tay ga Honda VISION (Đỏ tươi)',
                            branch: 'Honda',
                            stockStatus: 'Only 3 items in stock',
                            price: '33.899.000 VND',
                            oldPrice: '34.900.000 VND',
                            sale: 3,
                            availableQuanities: [ 1, 2, 3 ],
                            quantity: 2,
                            sku: 'HO282OTBA12UVNAMZ-823872'
                        },
                        {
                            image: 'http://vn-live-03.slatic.net/p/may-tap-bung-da-nang-new-six-pack-care-elip-den-9968-353789-1-catalog.jpg',
                            link: '/may-tap-bung-a-nang-new-six-pack-care-elip-en-1108777.html?mp=1',
                            name: 'Máy tập bụng đa năng New Six Pack Care Elip (Đen)',
                            branch: 'New Six Pack Care',
                            stockStatus: '✓ In stock',
                            price: '959.000 VND',
                            oldPrice: '1.590.000 VND',
                            sale: 40,
                            availableQuanities: [ 1, 2, 3 ],
                            quantity: 2,
                            sku: 'NE506SPAXRJDVNAMZ-675891'
                        },
                        {
                            link: '/cycling-bag-hiking-climbing-backpack-black-2l-mouth-hydration-water-bladder-bag-for-sports-bike-camping-hiking-climbing-intl-2490510.html?mp=1',
                            image: 'http://vn-live-03.slatic.net/p/cycling-bag-hiking-climbing-backpack-black-2l-mouth-hydration-water-bladder-bag-for-sports-bike-camping-hiking-climbing-intl-1738-0150942-886db6194722c3ff9a7ef87d5f879bf7-webp-catalog.jpg',
                            name: 'Cycling Bag Hiking Climbing Backpack Black + 2L Mouth Hydration Water Bladder Bag For Sports Bike Camping Hiking Climbing (Intl)',
                            branch: 'Not Specified',
                            stockStatus: '✓ In stock',
                            price: '368.000 VND',
                            oldPrice: '736.000 VND',
                            sale: 50,
                            availableQuanities: [ 1, 2, 3, 4, 5 ],
                            quantity: 2,
                            sku: 'NO128SPAA1HDOUVNAMZ-2371569'
                        }
                    ],
                    shippingFee: 20000,
                    priceConfigs: {
                        currency: 'VND',
                        decimalPoint: ',',
                        precision: 0,
                        thoudsandsDep: '.',
                        currencyPosition: 'right'
                    },
                    wishlist: [
                        {
                            image: 'http://vn-live-01.slatic.net/p/may-quay-the-nho-omijia-tdv-5162j-den-6724-7319311-1-catalog.jpg',
                            link: 'http://www.lazada.vn/may-quay-the-nho-omijia-tdv-5162j-den-1139137.html',
                            name: 'OMIJIA Full HD Digital Video Camera TDV-5162J',
                            price: '429.000 VND',
                            oldPrice: '849.000 VND',
                            sale: 49,
                            stockStatus: 'Only 3 items in stock',
                            inStock: true,
                            availableQuanities: [ 1, 2, 3, 5 ],
                            quantity: 1,
                            sku: 'OM927ELAYEYPVNAMZ-727763'
                        },
                        {
                            image: 'http://vn-live-02.slatic.net/p/mat-day-chuyen-14k-dinh-da-cz-sacombank-sbj-plcd104-vang-hai-mau-7222-898703-1-catalog.jpg',
                            link: 'http://www.lazada.vn/mat-day-chuyen-14k-dinh-da-cz-sacombank-sbj-plcd104-vang-hai-mau-307898.html',
                            name: 'Mặt dây chuyền 14K đính đá Cz Sacombank-SBJ PLCD104 (Vàng hai màu)',
                            stockStatus: '✓ In stock',
                            price: '1.229.000 VND',
                            oldPrice: '1.298.850 VND',
                            sale: 5,
                            availableQuanities: [ 1, 2, 3 ],
                            inStock: false,
                            quantity: 2,
                            sku: 'SA625FAAGLKQVNAMZ-342139'
                        }
                    ]
                }
            });
        }, Math.floor(Math.random() * (1 + 1000 - 500)) + 500);
    });
}

export function loadWishlistData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                data: {
                    wishlist: [
                        {
                            image: 'http://vn-live-01.slatic.net/p/may-quay-the-nho-omijia-tdv-5162j-den-6724-7319311-1-catalog.jpg',
                            link: 'http://www.lazada.vn/may-quay-the-nho-omijia-tdv-5162j-den-1139137.html',
                            name: 'OMIJIA Full HD Digital Video Camera TDV-5162J',
                            price: '429.000 VND',
                            oldPrice: '849.000 VND',
                            sale: 49,
                            stockStatus: 'Only 3 items in stock',
                            inStock: true,
                            availableQuanities: [ 1, 2, 3, 5 ],
                            quantity: 1,
                            sku: 'OM927ELAYEYPVNAMZ-727763'
                        },
                        {
                            image: 'http://vn-live-02.slatic.net/p/mat-day-chuyen-14k-dinh-da-cz-sacombank-sbj-plcd104-vang-hai-mau-7222-898703-1-catalog.jpg',
                            link: 'http://www.lazada.vn/mat-day-chuyen-14k-dinh-da-cz-sacombank-sbj-plcd104-vang-hai-mau-307898.html',
                            name: 'Mặt dây chuyền 14K đính đá Cz Sacombank-SBJ PLCD104 (Vàng hai màu)',
                            stockStatus: '✓ In stock',
                            price: '1.229.000 VND',
                            oldPrice: '1.298.850 VND',
                            sale: 5,
                            availableQuanities: [ 1, 2, 3 ],
                            inStock: false,
                            quantity: 2,
                            sku: 'SA625FAAGLKQVNAMZ-342139'
                        }
                    ]
                }
            });
        }, Math.floor(Math.random() * (1 + 1000 - 500)) + 500);
    });
}
