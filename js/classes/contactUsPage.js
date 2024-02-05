export class ContactUsPage {
  constructor(
    userName,
    email,
    phoneNumber,
    userAge,
    firstPassword,
    secondPassword
  ) {
    this.userName = userName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.userAge = userAge;
    this.firstPassword = firstPassword;
    this.secondPassword = secondPassword;
  }

  checkInputs() {
    validateName(this.userName);
    validatEmail(this.email);
    validatePhoneNumber(this.phoneNumber);
    validateUserAge(this.userAge);
    validateFirstPassword(this.firstPassword);
    validateSecondPassword(this.secondPassword);
  }
  validateName(userName) {}
  validateemail(email) {}
  validatephoneNumber(phoneNumber) {}
  validateuserAge(userAge) {}
  validatefirstPassword(firstPassword) {}
  validatesecondPassword(secondPassword) {}
}
