'use strict'

class UpdateTodo {
  get rules () {
    return {
      title: 'required',
      description: 'required'
    }
  }

  get messages () {
    return {
      'title.required': 'Title tidak boleh kosong',
      'description.required': 'Description tidak boleh kosong'
    }
  }
}

module.exports = UpdateTodo
