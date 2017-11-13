$(document).ready(function () {
	// Get buttons for the toolbar
	ajaxify({
		filename: 'buttons.json', // same of task: 'task.buttons.get'
		dataType: 'json',
		callback: 'fnInterfaceInitButtons(data)',
		useStore: false
	});

});

function fnInterfaceInitButtons(data) {

	var status = false;

	if (data.hasOwnProperty('status')) {
		status = (parseInt(data.status) === 1 ? true : false);
	}

	if (status) {

		if (data.buttons.hasOwnProperty('export')) {
			list = makeButtonLists(data.buttons.export);
			$("#control-sidebar-note-tab-export-list").html(list);
		} else {
			$("#control-sidebar-note-tab-export").remove();
		}

		if (data.buttons.hasOwnProperty('clipboard')) {
			list = makeButtonLists(data.buttons.clipboard);
			$("#control-sidebar-clipboard-tab-list").html(list);
		} else {
			$("#control-sidebar-clipboard-tab").remove();
		}

		if (data.buttons.hasOwnProperty('slideshow')) {
			list = makeButtonLists(data.buttons.slideshow);
			$("#control-sidebar-slideshow-tab-list").html(list);
		} else {
			$("#control-sidebar-slideshow-tab").remove();
		}

		if (data.buttons.hasOwnProperty('utility')) {
			list = makeButtonLists(data.buttons.utility);
			$("#control-sidebar-note-tab-utility-list").html(list);
		} else {
			$("#control-sidebar-note-tab-utility").remove();
		}

		if (data.buttons.hasOwnProperty('app')) {
			list = makeButtonLists(data.buttons.app);
			$("#control-sidebar-app-tab-list").html(list);
		} else {
			$("#control-sidebar-app-tab").remove();
		}

		initializeTasks();
	}
}

function makeButtonLists(obj) {

	list = '';

	//	try {
	$.each(obj, function (i, value) {
		content =
			'<i class="menu-icon fa ' + value.icon + ' bg-red"></i>' +
			'<div class="menu-info">' +
			'<h4 class="control-sidebar-subheading">' + value.title + '</h4>' +
			'</div>';

		anchor = value.anchor.replace('%1', content);

		list += '<li>' + anchor + '</li>';

		if (value.quickIcons == '1') {
			$('<li>' + value.button + '</li>').insertBefore('.control-sidebar-button');
		}
	});
	//} catch (e) {
	//	console.warn(err.message);
	//	list = '';
	//	}

	return list;
}