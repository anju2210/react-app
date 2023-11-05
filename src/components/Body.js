import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    //local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    //normal js variable
    // let listOfRestaurants = [{
    //     "info": {
    //       "id": "99142",
    //       "name": "Arjun Da Dhaba - Pure Veg",
    //       "cloudinaryImageId": "de96dyjxve1hpceq4ay7",
    //       "locality": "Kohka",
    //       "areaName": "Junwani Road",
    //       "costForTwo": "₹200 for two",
    //       "cuisines": [
    //         "North Indian",
    //         "Chinese",
    //         "Biryani",
    //         "Indian",
    //         "Snacks",
    //         "Fast Food"
    //       ],
    //       "avgRating": 3.7,
    //       "veg": true,
    //       "feeDetails": {
    //         "restaurantId": "99142",
    //         "fees": [
    //           {
    //             "name": "BASE_DISTANCE",
    //             "fee": 2200
    //           },
    //           {
    //             "name": "BASE_TIME"
    //           },
    //           {
    //             "name": "ANCILLARY_SURGE_FEE"
    //           }
    //         ],
    //         "totalFee": 2200
    //       },
    //       "parentId": "35927",
    //       "avgRatingString": "3.7",
    //       "totalRatingsString": "5K+",
    //       "sla": {
    //         "deliveryTime": 27,
    //         "lastMileTravel": 4.9,
    //         "serviceability": "SERVICEABLE",
    //         "slaString": "27 mins",
    //         "lastMileTravelString": "4.9 km",
    //         "iconType": "ICON_TYPE_EMPTY"
    //       },
    //       "availability": {
    //         "nextCloseTime": "2023-11-03 23:59:00",
    //         "opened": true
    //       },
    //       "badges": {
    //         "imageBadges": [
    //           {
    //             "imageId": "v1695133679/badges/Pure_Veg111.png",
    //             "description": "pureveg"
    //           }
    //         ]
    //       },
    //       "isOpen": true,
    //       "type": "F",
    //       "badgesV2": {
    //         "entityBadges": {
    //           "imageBased": {
    //             "badgeObject": [
    //               {
    //                 "attributes": {
    //                   "description": "pureveg",
    //                   "imageId": "v1695133679/badges/Pure_Veg111.png"
    //                 }
    //               }
    //             ]
    //           },
    //           "textBased": {
                
    //           },
    //           "textExtendedBadges": {
                
    //           }
    //         }
    //       },
    //       "aggregatedDiscountInfoV3": {
    //         "header": "₹150 OFF",
    //         "subHeader": "ABOVE ₹349",
    //         "discountTag": "FLAT DEAL"
    //       },
    //       "differentiatedUi": {
    //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         "differentiatedUiMediaDetails": {
    //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //           "lottie": {
                
    //           },
    //           "video": {
                
    //           }
    //         }
    //       },
    //       "reviewsSummary": {
            
    //       },
    //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //       "restaurantOfferPresentationInfo": {
            
    //       }
    //     }
    //   },
    //   {
    //     "info": {
    //       "id": "112831",
    //       "name": "Ramdev's Khana Khazana - Risali",
    //       "cloudinaryImageId": "pgvlzt2ah1ndqdw0uujn",
    //       "locality": "Risali",
    //       "areaName": "Maitrinagar",
    //       "costForTwo": "₹300 for two",
    //       "cuisines": [
    //         "Thalis",
    //         "North Indian",
    //         "Chinese",
    //         "Biryani",
    //         "Snacks",
    //         "Salads",
    //         "North Eastern",
    //         "Hyderabadi"
    //       ],
    //       "avgRating": 4.1,
    //       "veg": true,
    //       "feeDetails": {
    //         "restaurantId": "112831",
    //         "fees": [
    //           {
    //             "name": "BASE_DISTANCE",
    //             "fee": 3700
    //           },
    //           {
    //             "name": "BASE_TIME"
    //           },
    //           {
    //             "name": "ANCILLARY_SURGE_FEE"
    //           }
    //         ],
    //         "totalFee": 3700
    //       },
    //       "parentId": "166556",
    //       "avgRatingString": "4.1",
    //       "totalRatingsString": "1K+",
    //       "sla": {
    //         "deliveryTime": 36,
    //         "lastMileTravel": 9.4,
    //         "serviceability": "SERVICEABLE",
    //         "slaString": "36 mins",
    //         "lastMileTravelString": "9.4 km",
    //         "iconType": "ICON_TYPE_EMPTY"
    //       },
    //       "availability": {
    //         "nextCloseTime": "2023-11-03 22:40:00",
    //         "opened": true
    //       },
    //       "badges": {
    //         "imageBadges": [
    //           {
    //             "imageId": "v1695133679/badges/Pure_Veg111.png",
    //             "description": "pureveg"
    //           }
    //         ]
    //       },
    //       "isOpen": true,
    //       "type": "F",
    //       "badgesV2": {
    //         "entityBadges": {
    //           "imageBased": {
    //             "badgeObject": [
    //               {
    //                 "attributes": {
    //                   "description": "pureveg",
    //                   "imageId": "v1695133679/badges/Pure_Veg111.png"
    //                 }
    //               }
    //             ]
    //           },
    //           "textBased": {
                
    //           },
    //           "textExtendedBadges": {
                
    //           }
    //         }
    //       },
    //       "aggregatedDiscountInfoV3": {
    //         "header": "₹150 OFF",
    //         "subHeader": "ABOVE ₹349",
    //         "discountTag": "FLAT DEAL"
    //       },
    //       "differentiatedUi": {
    //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         "differentiatedUiMediaDetails": {
    //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //           "lottie": {
                
    //           },
    //           "video": {
                
    //           }
    //         }
    //       },
    //       "reviewsSummary": {
            
    //       },
    //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //       "restaurantOfferPresentationInfo": {
            
    //       }
    //     },
    //     "analytics": {
          
    //     },
    //     "cta": {
    //       "link": "https://www.swiggy.com/restaurants/ramdevs-khana-khazana-risali-risali-maitrinagar-bhilai-112831",
    //       "type": "WEBLINK"
    //     }
    //   }
    // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            

            let filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >4
            );
            setListOfRestaurants(filteredList);
          }}
        
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
