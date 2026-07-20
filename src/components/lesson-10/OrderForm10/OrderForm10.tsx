import { useId } from "react";
import css from "./OrderForm10.module.css";

/* 

- customerName (текст) — ім’я покупця
- contactNumber (телефон) — номер телефону
- orderEmail (email) — електронна пошта для підтвердження
- productCode (текст) — артикул товару
- itemQuantity (число) — кількість товарів
- packageColor (color) — бажаний колір пакування
- deliveryRegion (select) — область доставки
- deliveryCity (текст) — населений пункт
- pickupOffice (select) — відділення пошти
- shippingMethod (radio) — кур’єр, поштомат або відділення
- paymentOption (radio) — картка, післяплата або банківський переказ
- extraServices (checkbox) — подарункове пакування, перевірка товару, термінова відправка
- promoCode (текст) — промокод
- requestedDeliveryDate (date) — бажана дата доставки
- orderComment (textarea) — коментар до замовлення
- purchaseReceipt (file) — файл із підтвердженням оплати
- newsletterConsent (checkbox) — згода отримувати новини
- termsAccepted (checkbox) — згода з умовами покупки
*/

const OrderForm10 = () => {
  const prefix = useId();
  const handleSubmit = (formData: FormData) => {
    const data = {
      customerName: formData.get("customerName") as string,
      contactNumber: formData.get("contactNumber") as string,
      orderEmail: formData.get("orderEmail") as string,
      productCode: formData.get("productCode") as string,
      itemQuantity: Number(formData.get("itemQuantity")),
      packageColor: formData.get("packageColor") as string,
      deliveryRegion: formData.get("deliveryRegion") as string,
      deliveryCity: formData.get("deliveryCity") as string,
      pickupOffice: formData.get("pickupOffice") as string,
      shippingMethod: formData.get("shippingMethod") as string,
    };
  };
  return (
    <div className={css["orderForm10"]}>
      <form action={handleSubmit}>
        <fieldset>
          <label htmlFor={`${prefix}-customerName`}>Customer name</label>
          <input
            type="text"
            name="customerName"
            placeholder="Ivan"
            id={`${prefix}-customerName`}
          />

          <label htmlFor={`${prefix}-contactNumber`}>Contact number</label>
          <input
            type="tel"
            name="contactNumber"
            placeholder="+380"
            id={`${prefix}-contactNumber`}
          />

          <label htmlFor={`${prefix}-orderEmail`}>Order email</label>
          <input
            type="email"
            name="orderEmail"
            placeholder="Test@email"
            id={`${prefix}-orderEmail`}
          />

          <label htmlFor={`${prefix}-productCode`}>Product code</label>
          <input
            type="text"
            name="productCode"
            placeholder="Test"
            id={`${prefix}-productCode`}
          />
        </fieldset>

        <fieldset>
          <label htmlFor={`${prefix}-itemQuantity`}>Item Quantity</label>
          <input
            type="number"
            name="itemQuantity"
            id={`${prefix}-itemQuantity`}
            placeholder="ItemQuantity"
          />
          <label>
            Colors
            <input type="color" name="packageColor" defaultValue={"#FF00FF"} />
          </label>

          <label htmlFor={`${prefix}-deliveryRegion`}>Delivery Region</label>
          <select name="deliveryRegion" id={`${prefix}-deliveryRegion`}>
            <option value="Kyiv">Kyiv</option>
            <option value="Odesa">Odesa</option>
            <option value="Kharkiv">Kharkiv</option>
            <option value="Ternopil">Ternopil</option>
            <option value="Lviv">Lviv</option>
          </select>
          <label htmlFor={`${prefix}-deliveryCity`}>Delivery City </label>
          <input
            type="text"
            name="deliveryCity"
            id={`${prefix}-deliveryCity`}
            placeholder="Ternopil"
          />

          <label htmlFor={`${prefix}-pickupOffice`}>Pickup Office</label>
          <select name="pickupOffice" id={`${prefix}-pickupOffice`}>
            <option value="PostOfice1">Post Ofice 1</option>
            <option value="PostOfice2">Post Ofice 2</option>
            <option value="PostOfice3">Post Ofice 3</option>
            <option value="PostOfice4">Post Ofice 4</option>
            <option value="PostOfice5">Post Ofice 5</option>
            <option value="PostOfice6">Post Ofice 6</option>
          </select>
          <div>
            <label>
              <input
                defaultChecked
                type="radio"
                name="shippingMethod"
                value={"Кур’єр"}
              />
              Кур’єр
            </label>
            <label>
              <input type="radio" name="shippingMethod" value={"Пошта"} />
              Пошта{" "}
            </label>
            <label>
              <input type="radio" name="shippingMethod" value={"Самовині"} />
              Самовині
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default OrderForm10;
