// app.constants.ts
export class AppConstants {
    private constructor() {}

  static readonly EMPTY_STRING = ''

  // add contacts component
  static readonly ID = 'id'
  static readonly STATIC = 'static'

  //auth Guard
  static readonly ROLE = 'role'
  //admin guard
  static readonly NOT_AUTHORIZED ='You are not authorized to access this page'

  // contact form component
  static readonly DUPLICATE_NAME_ALERT = 'Contact with same name already exists'

  //contact display component
  static readonly WIDTH = '250px'

}
