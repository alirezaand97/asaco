import * as Yup from "yup";

import {
  email,
  password
} from "../rules";

 const LoginSchema = Yup.object().shape({
 email:email('email',true),
 password:password('password')
});

export default LoginSchema;