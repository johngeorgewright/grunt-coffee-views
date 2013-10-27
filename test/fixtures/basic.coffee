{Html} = require 'coffee-views'
util = require 'util'

class Basic extends Html
  render: ->
    @html lang:'en', ->
      @head()
      @body ->
        @h1 'yay'

module.exports = Basic

