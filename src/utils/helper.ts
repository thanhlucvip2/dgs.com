import { forEach } from 'lodash';
import { FAILED, MAIL_SPAM } from './constants';

export const handleMakeKey = (length: number): string => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const checkEmailSpam = (email: string) => {
  let count = 0;
  forEach(MAIL_SPAM, (value) => {
    count = email.indexOf(value) === FAILED ? count : count + 1;
  });
  return count;
};

export const pascalToKebabCase = (input) => {
  return input
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Thêm dấu "-" giữa chữ thường/số và chữ hoa
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') // Xử lý các trường hợp chữ hoa liền nhau
    .toLowerCase(); // Chuyển toàn bộ thành chữ thường
}