import { render, screen } from "@testing-library/react";

import FileUpload from "./FileUpload";

describe("FileUpload component", () => {
	test("renders Upload file text", () => {
		render(<FileUpload />);
		const uploadFileText = screen.getByText("Upload a csv file");
		expect(uploadFileText).toBeInTheDocument();
	});

	test("renders upload button", () => {
		render(<FileUpload />);
		const uploadButton = screen.getByTestId("file_upload");
		expect(uploadButton).toBeInTheDocument();
	});

	test("renders submit button", () => {
		render(<FileUpload />);
		const submitButton = screen.getByDisplayValue("Upload");
		expect(submitButton).toBeInTheDocument();
	})

});
