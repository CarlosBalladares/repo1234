import { Formik } from "formik";
import { compose, withProps } from "recompact";

const withFormik = options =>
  compose(
    Formik(options),
    withProps(({ setFieldValue, setFieldTouched }) => ({
      handleChangeFor: field => ({ value }) => {
        setFieldValue(field, value);
      },
      handleBlurFor: field => () => {
        setFieldTouched(field, true);
      }
    }))
  );

export default withFormik;
