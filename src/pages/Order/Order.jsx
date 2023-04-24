import React, { useRef } from "react";
import uuid from "react-uuid";
import emailjs from "@emailjs/browser";
import HeaderH1 from "../../shared/Headers/HeaderH1";
import Container from "../../shared/Container/Container";
import ButtonGreen from "../../ui/ButtonGreen/ButtonGreen";
import { useForm } from "react-hook-form";
import { useItems, useThankyouAlert } from "../../store/useStore";
import { formOrderData, formOrderJSON } from "../../utils/utils";
import c from "./Order.module.css";

const Order = () => {
  const { cartItems, totalPrice } = useItems(
    (state) => state
  );
  const { setVisible } = useThankyouAlert((state) => state);

  const form = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: uuid(),
      date: formOrderData(),
      orderList: formOrderJSON(cartItems),
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setVisible(true);
    emailjs.sendForm(
      "service_m94dyu8",
      "template_rz6l1c7",
      form.current,
      "xyDZZOaIRxrPdUxAv"
    );
  };

  //Вывод списка товаров
  const finalOrder = cartItems.map((item, n) => {
    n++;
    return (
      <p key={item.id}>
        {n}. {item.name}({item.size}): {item.amount} шт.;
      </p>
    );
  });

  //Смотрит за добавлением формы
  React.useEffect(() => {
    const subscription = watch((value) => {
      // console.log(value);
    });
  }, [watch]);

  return (
    <Container>
      <HeaderH1>Оформление заказа</HeaderH1>
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className={c.form}>
        <div className={c.clientData}>
          <p className={c.form_text}>Заполните ваши данные:</p>
          {/* Данные, заполняемые пользователем - data*/}
          <div className={c.input_container}>
            <input
              placeholder="Фамилия ★"
              {...register("familyname", { required: true })}
              className={c.clientData_textInput}
            />
            {errors.familyname && (
              <span className={c.errors}>Укажите фамилию</span>
            )}
          </div>

          <div className={c.input_container}>
            <input
              placeholder="Имя ★"
              {...register("firstname", {
                required: true,
                pattern: /[а-яА-ЯёЁa-zA-Z]/i,
              })}
              className={c.clientData_textInput}
            />
            {errors.firstname && <span className={c.errors}>Укажите имя</span>}
          </div>
          <div className={c.input_container}>
            <input
              placeholder="Отчество"
              {...register("secondname", {
                required: false,
                pattern: /[а-яА-ЯёЁa-zA-Z]/i,
              })}
              className={c.clientData_textInput}
            />
            {errors.secondname && (
              <span className={c.errors}>Отчество указано неверно</span>
            )}
          </div>
          <div className={c.input_container}>
            <input
              placeholder="Телефон ★"
              {...register("phone", {
                required: true,
                pattern: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/i,
              })}
              className={c.clientData_textInput}
            />
            {errors.phone && (
              <span className={c.errors}>Укажите номер телефона</span>
            )}
          </div>

          <div className={c.input_container}>
            <input
              placeholder="Эл.почта ★"
              {...register("email", {
                required: true,
                pattern:
                  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
              })}
              className={c.clientData_textInput}
            />
            {errors.email && <span className={c.errors}>Укажите email</span>}
          </div>

          <div className={c.input_container}>
            <input
              placeholder="Страна ★"
              {...register("country", {
                required: true,
                pattern: /[а-яА-ЯёЁa-zA-Z]/i,
              })}
              className={c.clientData_textInput}
            />
            {errors.country && <span className={c.errors}>Укажите страну</span>}
          </div>
          <div className={c.input_container}>
            <input
              placeholder="Город ★"
              {...register("city", {
                required: true,
                pattern: /[а-яА-ЯёЁa-zA-Z]/i,
              })}
              className={c.clientData_textInput}
            />
            {errors.city && <span className={c.errors}>Укажите город</span>}
          </div>
          <div className={c.input_container}>
            <input
              placeholder="Улица ★"
              {...register("street", {
                required: true,
                pattern: /[а-яА-ЯёЁa-zA-Z]/i,
              })}
              className={c.clientData_textInput}
            />
            {errors.street && <span className={c.errors}>Укажите улицу</span>}
          </div>
          <div className={c.clientData_numberInputs}>
            <div className={c.input_container}>
              <input
                placeholder="№ дома ★"
                {...register("house", { required: true })}
                className={c.clientData_numberInputs_input}
              />
              {errors.house && <span className={c.errors}>Укажите дом</span>}
            </div>
            <div className={c.input_container}>
              <input
                placeholder="№ кв./оф."
                {...register("flat")}
                className={c.clientData_numberInputs_input}
              />
            </div>
          </div>
          <p className={c.clientData_warning}>
            ★ - <i>обязательные поля</i>
          </p>
        </div>
        <div className={c.cartData}>
          <p className={c.form_text}>Проверьте заказ:</p>
          {cartItems.map((item) => {
            return (
              <p key={item.id} className={c.cartData_details}>
                {item.index} {item.name} {item.size}: {item.amount} шт;
              </p>
            );
          })}
          <p className={c.totalPrice}>Итого: {totalPrice}$</p>
          <span className={c.blockedInfo}>
            <input placeholder="" {...register("date")} readOnly="readOnly" />
            <input placeholder="" {...register("id")} readOnly="readOnly" />
            <input
              placeholder={formOrderJSON(cartItems)}
              {...register("orderList")}
              readOnly="readOnly"
            />
          </span>
        </div>
        <ButtonGreen type="submit">Оформить</ButtonGreen>
      </form>
    </Container>
  );
};

export default Order;
