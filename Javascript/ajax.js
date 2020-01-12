$.get(url, (data) => {}).fail((xhr) => { alert(xhr.statusText)});	// fail handles the errors

$.getJSON(url, options,(data) => {})	// options might be useful when requesting an API