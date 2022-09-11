import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import api from '../../../../services/api';
import React, { useState } from 'react';
import { APIRoute } from '../../../../const';

type BookingModalProps = {
  onCloseButtonClick:() => void
}

const BookingModal = ({ onCloseButtonClick }: BookingModalProps) => {

  const [formData, setFormData] = useState({
    'booking-name': '',
    'booking-phone': '',
    'booking-people': '',
    'booking-legal': false
  })

  const postQuestBooking = async () => {
    const payload = {
      name: formData['booking-name'],
      phone: formData['booking-phone'],
      peopleCount: Number(formData['booking-people']),
      isLegal: formData['booking-legal']
    };
    console.log(formData);
    console.log(payload);
    await api.post(APIRoute.Order, payload)
    .then(() => console.log(formData))
  };

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  }

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    postQuestBooking();
  }

  const onCheckboxClick = () => {
    formData['booking-legal']
    ? setFormData({...formData, 'booking-legal': false})
    : setFormData({...formData, 'booking-legal': true})
  }

  return (
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn
      onClick={onCloseButtonClick}
      >
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        action="https://echo.htmlacademy.ru"
        method="post"
        id="booking-form"
        onSubmit={onSubmit}
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            onChange={onChange}
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            onChange={onChange}
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            onChange={onChange}
            required
          />
        </S.BookingField>
        <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            onChange={onCheckboxClick}
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
);
}

export default BookingModal;
