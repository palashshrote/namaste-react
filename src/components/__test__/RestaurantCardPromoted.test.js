import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardPromotedMock.json";
import Header from "../Header";
import { BrowserRouter, Provider } from "react-router";
import store from "../../utils/appStore";
import UserContext from "../../utils/UserContext";
import useNetworkConnection from "../../utils/useNetworkConnection";

// const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
const geoPosition = "21.1520844,79.0886514";

// describe("Restaurant card", () => {
//     it("should render RestaurantCard with promoted label", () => {
//         render(<RestaurantCard resData={MOCK_DATA} geoPosition={geoPosition} />);
//         const restaurantName = screen.getByText("Chinese Wok");
//         expect(restaurantName).toBeInTheDocument();
//     });
// }
// );

describe("Checking header", () => {
    it("should render header", () => {
        // const { networkConnection } = useNet  workConnection();

        render(
            // <BrowserRouter>
            //         <UserContext.Provider value={{ userName: "Guest" }}>
                <Provider store={store}>
                    <Header networkConnection={true}/>
                    </Provider>
                    
        );
        const ContactElem = screen.getByText("Contact");
        expect(ContactElem).toBeInTheDocument();
    });
});