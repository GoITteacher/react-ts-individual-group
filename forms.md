1. Форма оформлення замовлення — OrderForm

Створи форму для оформлення замовлення в інтернет-магазині (OrderForm).

Форма повинна містити такі поля:

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

⸻

2. Форма відгуку на вакансію — VacancyResponseForm

Створи форму для відгуку кандидата на вакансію (VacancyResponseForm).

Форма повинна містити такі поля:

- applicantFullName (текст) — ПІБ кандидата
- applicantBirthday (date) — дата народження
- candidateEmail (email) — контактна електронна пошта
- candidatePhone (телефон) — контактний номер
- targetPosition (select) — бажана посада
- workFormat (radio) — офіс, віддалено або гібридно
- seniorityLevel (select) — trainee, junior, middle або senior
- commercialExperience (число) — кількість років досвіду
- expectedSalary (число) — очікувана зарплата
- salaryCurrency (select) — UAH, EUR або USD
- availableStartMonth (month) — місяць початку роботи
- professionalSkills (checkbox) — HTML, CSS, JavaScript, React, Node.js
- languageKnowledge (checkbox) — українська, англійська, польська, чеська
- englishProficiency (select) — A1–C2
- relocationReadiness (radio) — готовий або не готовий до переїзду
- businessTripsAllowed (checkbox) — готовність до відряджень
- portfolioAddress (url) — посилання на портфоліо
- githubProfile (url) — посилання на GitHub
- candidateResume (file) — резюме
- coverLetterText (textarea) — супровідний лист
- interviewPreference (select) — телефонна розмова, відеодзвінок або зустріч
- personalDataPermission (checkbox) — згода на обробку персональних даних

⸻

3. Форма створення продукту — ProductCreationForm

Створи форму для додавання нового товару до інтернет-магазину (ProductCreationForm).

Форма повинна містити такі поля:

- productTitle (текст) — назва товару
- internalSKU (текст) — внутрішній код товару
- barcodeNumber (текст) — штрихкод
- mainCategory (select) — основна категорія
- subcategoryName (select) — підкатегорія
- manufacturerBrand (текст) — бренд
- productPrice (число) — ціна
- discountPercentage (число) — знижка у відсотках
- stockAmount (число) — кількість на складі
- measurementUnit (select) — штука, кілограм, літр або комплект
- availabilityStatus (radio) — у наявності, під замовлення або відсутній
- productCondition (radio) — новий, відновлений або вживаний
- productFeatures (checkbox) — гарантія, безкоштовна доставка, повернення
- manufactureDate (date) — дата виробництва
- warrantyPeriod (select) — термін гарантії
- packageWeight (number) — вага пакування
- packageDimensions (текст) — розміри пакування
- productDescription (textarea) — повний опис товару
- shortProductSummary (textarea) — короткий опис
- mainProductImage (file) — головне зображення
- productGallery (file, multiple) — додаткові фотографії
- instructionDocument (file) — інструкція
- seoKeywords (search) — ключові слова для пошуку
- publicationVisibility (radio) — опублікувати або зберегти як чернетку
- featuredProduct (checkbox) — показувати серед рекомендованих

⸻

4. Форма подання скарги — ComplaintForm

Створи форму для подання скарги на товар, послугу або співробітника (ComplaintForm).

Форма повинна містити такі поля:

- complaintSubject (текст) — тема скарги
- incidentCategory (select) — товар, доставка, обслуговування, оплата або інше
- incidentDate (date) — дата виникнення проблеми
- incidentTime (time) — приблизний час події
- relatedOrderNumber (текст) — номер замовлення
- serviceLocation (select) — магазин або відділення
- employeeDescription (текст) — ім’я або опис співробітника
- problemSeverity (radio) — низька, середня або висока
- issueTypes (checkbox) — пошкодження, затримка, неправильна сума, грубе ставлення
- complaintDetails (textarea) — детальний опис ситуації
- desiredResolution (select) — повернення коштів, заміна, вибачення або повторне надання послуги
- compensationAmount (число) — бажана сума компенсації
- proofFiles (file, multiple) — фото, відео або документи
- responseChannel (radio) — телефон, email або месенджер
- responseDeadline (date) — бажана дата отримання відповіді
- anonymousSubmission (checkbox) — подати скаргу анонімно
- publicReviewPermission (checkbox) — дозволити опублікувати скаргу
- complaintDeclaration (checkbox) — підтвердження правдивості інформації

⸻

5. Форма бронювання столика — RestaurantReservationForm

Створи форму для бронювання столика в ресторані (RestaurantReservationForm).

Форма повинна містити такі поля:

- reservationHolder (текст) — ім’я людини, яка бронює
- guestCount (число) — кількість гостей
- reservationDay (date) — дата відвідування
- arrivalSlot (select) — час прибуття
- seatingZone (radio) — зал, тераса або VIP-кімната
- tablePosition (select) — біля вікна, у центрі або в тихій зоні
- occasionType (select) — звичайна вечеря, день народження, побачення або ділова зустріч
- menuPreferences (checkbox) — звичайне, вегетаріанське, дитяче або безглютенове меню
- allergyWarnings (textarea) — інформація про алергії
- celebrationDecor (checkbox) — кульки, свічки, квіти або святковий напис
- cakeRequired (radio) — потрібен або не потрібен торт
- cakeFlavor (select) — смак торта
- musicianRequest (checkbox) — замовлення живої музики
- reservationNote (textarea) — додаткові побажання
- depositProof (file) — підтвердження передоплати
- reminderMethod (radio) — SMS, email або дзвінок
- restaurantRulesAgreement (checkbox) — погодження з правилами бронювання

⸻

6. Форма реєстрації домашньої тварини — PetRegistrationForm

Створи форму для реєстрації домашньої тварини у ветеринарній клініці (PetRegistrationForm).

Форма повинна містити такі поля:

- animalName (текст) — кличка тварини
- animalSpecies (select) — кіт, собака, птах, гризун або інше
- breedName (текст) — порода
- petBirthMonth (month) — місяць і рік народження
- animalSex (radio) — самець або самка
- animalWeight (number) — вага
- furColor (текст) — забарвлення
- microchipCode (текст) — номер чипа
- sterilizationStatus (radio) — стерилізована або не стерилізована
- vaccinationList (checkbox) — сказ, комплексна вакцина, чума, лептоспіроз
- lastVaccinationDate (date) — дата останньої вакцинації
- feedingType (select) — сухий корм, вологий корм, натуральне харчування
- behaviorTraits (checkbox) — агресивна, полохлива, дружня, активна
- existingConditions (textarea) — наявні захворювання
- currentTreatment (textarea) — препарати, які зараз приймає тварина
- petPassportScan (file) — ветеринарний паспорт
- animalPhoto (file) — фотографія тварини
- clinicNotificationChoice (checkbox) — нагадування про вакцинації
- treatmentAuthorization (checkbox) — дозвіл на проведення лікування

⸻

7. Форма оренди квартири — ApartmentRentalApplicationForm

Створи форму для подання заявки на оренду квартири (ApartmentRentalApplicationForm).

Форма повинна містити такі поля:

- listingIdentifier (hidden) — ідентифікатор оголошення
- moveInDate (date) — бажана дата заселення
- rentalDuration (select) — 3 місяці, 6 місяців, 1 рік або довше
- occupantNumber (number) — кількість мешканців
- householdType (radio) — одна людина, пара, сім’я або студенти
- employmentSituation (select) — працевлаштований, підприємець, студент або інше
- monthlyNetIncome (number) — місячний дохід
- employerCompany (текст) — назва роботодавця
- employmentContractType (select) — постійний, тимчасовий або контракт
- petsToMoveIn (checkbox) — кіт, собака, інша тварина
- smokingHabits (radio) — курить або не курить
- parkingSpaceNeeded (checkbox) — потреба в паркомісці
- furnitureRequirement (radio) — мебльована або немебльована квартира
- utilityPreferences (checkbox) — інтернет, телебачення, кондиціонер
- previousLandlordContact (текст) — контакт попереднього орендодавця
- tenantMessage (textarea) — коротко про майбутніх мешканців
- incomeConfirmation (file) — підтвердження доходу
- identityCopy (file) — копія документа
- viewingDateTime (datetime-local) — бажаний час перегляду
- creditCheckConsent (checkbox) — згода на перевірку платоспроможності

⸻

8. Форма повернення товару — ProductReturnForm

Створи форму для повернення або обміну придбаного товару (ProductReturnForm).

Форма повинна містити такі поля:

- returnRequestCode (текст) — номер заявки
- purchaseReference (текст) — номер покупки
- purchaseDay (date) — дата покупки
- returnedItemName (текст) — назва товару
- returnedItemCount (число) — кількість
- returnReason (select) — брак, не підійшов розмір, неправильний товар або інше
- itemUsageStatus (radio) — не використовувався, використовувався один раз або використовувався регулярно
- packageState (radio) — ціла, пошкоджена або відсутня упаковка
- includedParts (checkbox) — коробка, інструкція, кабель, гарантійний талон
- defectExplanation (textarea) — опис дефекту
- defectDiscoveryDate (date) — дата виявлення проблеми
- resolutionChoice (radio) — повернення коштів, обмін або ремонт
- refundDestination (select) — банківська картка або рахунок
- bankAccountIBAN (текст) — IBAN для повернення коштів
- returnShippingType (select) — кур’єр, пошта або особисто
- damagePhotos (file, multiple) — фотографії дефекту
- receiptImage (file) — фотографія чека
- returnAdditionalNotes (textarea) — додаткова інформація
- returnPolicyAccepted (checkbox) — згода з правилами повернення

Практичне ускладнення: у кожній формі додай мінімум один <fieldset> із <legend>, зв’яжи всі поля з <label> через for та id, а також використай required, min, max, maxlength, accept, multiple і pattern там, де це доречно.
