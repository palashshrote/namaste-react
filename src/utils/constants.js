export const HeaderLogo = "https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018";
export const cloudinaryBaseApi = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const swiggyApi = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1520844&lng=79.0886514&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const swiggyApiLL = (lat,lng)=> {
    if(lat == "21.1520844" && lng == "79.0886514") {
        return `https://namastedev.com/api/v1/listRestaurants`;
    } else return `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
}

export const restaurantMenuApi = "https://namastedev.com/api/v1/listRestaurantMenu/";