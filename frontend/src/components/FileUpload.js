import React from "react";

const FileUpload = () => {
	return (
		<div>
			<h1>Upload a csv file</h1>
			<form>
				<div>
					<input type="file" data-testid="file_upload" />
				</div>
				<div>
					<input type="submit" data-testid="submit_button" value='Upload' />
				</div>
			</form>
		</div>
	);
};

export default FileUpload;
