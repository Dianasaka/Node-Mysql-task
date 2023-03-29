import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Products } from "../Products";
import renderer from "react-test-renderer";
import { ProductsContext } from "../../ProductsContext";

describe("Products", () => {
    it("should render Products", () => {
        render(<Products />);
        expect(screen.getByRole("products-container")).toBeVisible(); //Jei nepasiekiamas naudoti toBeInTheDocument (antras pagal geruma)
    });