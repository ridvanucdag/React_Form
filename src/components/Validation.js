import * as yup from "yup"

const Validation = yup.object().shape({
    name: yup.string()
    .required("Lütfen bu alanı boş geçmeyin"),
    surname: yup.string()
    .required("Lütfen bu alanı boş geçmeyin"),
    email: yup.string()
    .email("Doğru bir mail adresi giriniz")
    .required("Lütfen bu alanı boş geçmeyin"),
    phone: yup.string()
    .min(10,"En az 10 karekter olmalıdır")
    .max(11,"En fazla 11 karekter olmalıdır")
    .required("Lütfen bu alanı boş geçmeyin"),
    password: yup.string()
    .min(5,"En az 5 karekter olmalıdır")
    .max(20,"En fazla 20 karekter olmalıdır")
    .required("Lütfen bu alanı boş geçmeyin"),
    passwordConfirm: yup.string()
    .min(5,"En az 5 karekter olmalıdır")
    .max(20,"En fazla 20 karekter olmalıdır")
    .oneOf([yup.ref('password')],"Parola uyuşmuyor")
    .required("Lütfen bu alanı boş geçmeyin"),
    gender: yup.string()
    .required("Lütfen bu alanı boş geçmeyin"),
}
)

export default Validation