;(function () {
  // Extract parameters from the script URL
  function getQueryParams(script) {
    const src = script.getAttribute('src')
    const queryString = src.split('?')[1]
    const params = {}
    queryString.split('&').forEach(function (param) {
      const pair = param.split('=')
      params[pair[0]] = pair[1]
    })
    return params
  }

  // Find the script tag that includes this script
  const scripts = document.getElementsByTagName('script')
  const currentScript = scripts[scripts.length - 1]
  const params = getQueryParams(currentScript)

  console.log('PARAMS: ', params)
  const iframe = document.createElement('iframe')
  iframe.src =
    'https://customerhearingsystem.netlify.app?account=' +
    params['account'] +
    '&project=' +
    params['project'] +
    '&author=' +
    params['author'] +
    '&tenant=' +
    params['tenant']
  iframe.width = '100%'
  iframe.height = '500px'
  iframe.style.border = 'none'

  // Append the iframe to the parent section
  currentScript.parentNode.appendChild(iframe)
})()

// +
// params['account'] +
// '&project=' +
// params['project'] +
// '&author=' +
// params[author] +
// '&tenant=' +
// params[tenant]
