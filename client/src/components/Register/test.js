import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Button, Form, Message, Card, Image, Grid } from "semantic-ui-react";

class SimpleForm extends React.Component {
  static propTypes = {
    previewLogoUrl: PropTypes.string,
    mimeType: PropTypes.string,
    maxWeight: PropTypes.number,
    maxWidth: PropTypes.number,
    maxHeight: PropTypes.number,
    // redux-form porps
    handleSubmit: PropTypes.func.isRequired
  };
  static defaultProps = {
    previewLogoUrl: "https://imgplaceholder.com/400x300",
    mimeType: "image/jpeg, image/png",
    maxWeight: 100,
    maxWidth: 100,
    maxHeight: 100
  };

  handlePreview = imageUrl => {
    const previewImageDom = document.querySelector(".preview-image");
    previewImageDom.src = imageUrl;
  };
  handleChange = (event, input) => {
    event.preventDefault();
    let imageFile = event.target.files[0];
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile);
      const imageObject = new window.Image();

      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        input.onChange(imageFile);
        URL.revokeObjectURL(imageFile);
      };
      imageObject.src = localImageUrl;
      this.handlePreview(localImageUrl);
    }
  };
  renderFileInput = ({ input, type, meta }) => {
    const { mimeType } = this.props;
    return (
      <div>
        <input
          name={input.name}
          type={type}
          accept={mimeType}
          onChange={event => this.handleChange(event, input)}
        />

        <Message negative header="Error:" content={meta.error} />
      </div>
    );
  };
  handleSubmitForm = values => {
    console.log("Form Values: ", values);
  };
  render() {
    const { previewLogoUrl, handleSubmit } = this.props;
    return (
      <Grid centered style={{ height: "100%" }} verticalAlign="middle" padded>
        <Grid.Column style={{ maxWidth: 400 }}>
          <Card fluid>
            <Image
              src={previewLogoUrl}
              alt="preview"
              className="preview-image"
              style={{ height: "300px", objectFit: "cover" }}
            />

            <Card.Content>
              <Form>
                <Field
                  name="image"
                  type="file"
                  component={this.renderFileInput}
                />

                <Button
                  primary
                  type="submit"
                  className="form-submit-button"
                  onClick={handleSubmit(this.handleSubmitForm)}
                >
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default reduxForm({
  form: "simple"
})(SimpleForm);
