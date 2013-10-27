{Html} = require 'coffee-views'

class CustomOptions extends Html
  mung: (params) ->
    @html ->
      @body ->
        @p params.title

module.exports = CustomOptions

