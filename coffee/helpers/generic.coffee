window.prettyJson = (json) ->
  json = JSON.stringify(json, undefined, 2) 
  json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  json.replace /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) ->
    cls = "number"
    if /^"/.test(match)
      if /:$/.test(match)
        cls = "key"
      else
        cls = "string"
    else if /true|false/.test(match)
      cls = "boolean"
    else cls = "null"  if /null/.test(match)
    "<span class=\"" + cls + "\">" + match + "</span>"

window.cl = (crap) ->
  console.debug(crap)

window.nop = (e) ->
  e.preventDefault()
