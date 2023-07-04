import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";
import ValidationTextInput from "../components/validate.js";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <ValidationTextInput
              style={globalStyles.input}
              multiline
              placeholder="Your full name (John Doe)"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              validationMessage="Please enter a full name."
            />

            <ValidationTextInput
              style={globalStyles.input}
              multiline
              placeholder="Your flight number (DL 2468)"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              validationMessage="Please enter two capital letters followed by a space and 3-4 digits."
            />

            <ValidationTextInput
              style={globalStyles.input}
              multiline
              placeholder="How was your flight? Rate from 1 (worse) to 5 (best)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              validationMessage="Please enter a number from 1 to 5."
            />

            <Button
              color="teal"
              title="Submit feedback"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
