import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import HeaderH3 from "../../shared/Headers/HeaderH3";
import Alert from "../../shared/Alert/Alert";
import ButtonGreen from "../../ui/ButtonGreen/ButtonGreen";
import { useAlert, useFeedBack } from "../../store/useStore";
import c from "./FeedBackForm.module.css";
import { useForm } from "react-hook-form";
import { formOrderData } from "../../utils/utils";

const FeedBackForm = () => {
  const { setVisible } = useAlert((state) => state);
  const form = useRef();

  const {
    feedBackData,
    setFeedBackData,
    showNotification,
    setShowNotificationTrue,
    setShowNotificationFalse,
  } = useFeedBack((state) => state);

  //Сообщаем об отправке запроса
  let notification;

  if (showNotification == true) {
    notification = (
      <p className={c.form_send_notification}>
        Ваш запрос отправлен. Спасибо за вашу заявку!
      </p>
    );
  } else {
    notification = <p></p>;
  }

  const empty = {
    lastname: "",
    firstname: "",
    secondname: "",
    phone: "",
    email: "",
    text: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  //Обработка кнопки "Отправить"(submit)
  const onSubmit = (data) => {
    //Формируем данные(данные из Inputs + id и дата отправки,  cохраняем в store)
    setFeedBackData(data, formOrderData());

    //Отправляем данные на почту
    emailjs.sendForm('service_m94dyu8', 'template_6mrm7uu', form.current, 'xyDZZOaIRxrPdUxAv')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    //Сообщаем об отправке формы
    setShowNotificationTrue();

    //Отчищаем форму
    reset(empty);
    clearErrors();

    //закрываем форму, убираем уведомление об отправке
    setTimeout(() => {
      setVisible(false);
      setShowNotificationFalse();
    }, 4000);
  };

  //Смотрит за добавлением данных в инпуты формы
  React.useEffect(() => {
    const subscription = watch((value) => {
      setFeedBackData(value, formOrderData());
    });
  }, [watch]);

  return (
    <Alert>
      <HeaderH3>Заказать обратный звонок</HeaderH3>
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className={c.form}>
        <div className={c.from_item}>
          <input
            placeholder="Фамилия ★"
            {...register("lastname", {
              required: true,
              pattern: /[а-яА-ЯёЁa-zA-Z]/i,
            })}
          />
          {errors.lastname && <span className={c.error}>Введите фамилию</span>}
        </div>

        <div className={c.from_item}>
          <input
            placeholder="Имя ★"
            {...register("firstname", {
              required: true,
              pattern: /[а-яА-ЯёЁa-zA-Z]/i,
            })}
          />
          {errors.firstname && <span className={c.error}>Введите имя</span>}
        </div>

        <div className={c.from_item}>
          <input
            placeholder="Отчество"
            {...register("secondname", {
              required: false,
              pattern: /[а-яА-ЯёЁa-zA-Z]/i,
            })}
          />
          {errors.secondname && (
            <span className={c.error}>Введите отчество</span>
          )}
        </div>
        <div className={c.from_item}>
          <input
            placeholder="Телефон ★"
            {...register("phone", {
              required: true,
              pattern: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/i,
            })}
          />
          {errors.phone && (
            <span className={c.error}>Укажите номер телефона</span>
          )}
        </div>

        <div className={c.from_item}>
          <input
            placeholder="Эл.почта ★"
            {...register("email", {
              required: true,
              pattern:
                /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            })}
          />
          {errors.email && <span className={c.error}>Укажите email</span>}
        </div>
        <div className={c.from_item_text}>
          <textarea placeholder="Ваш вопрос" {...register("text")} />
        </div>
        {notification}
        <div className={c.close_btn}>
          <ButtonGreen type="submit">Отправить</ButtonGreen>
        </div>
      </form>
    </Alert>
  );
};

export default FeedBackForm;
