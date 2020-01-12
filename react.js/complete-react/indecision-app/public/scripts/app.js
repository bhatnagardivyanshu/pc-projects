'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		// console.log(props);
		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.state = {
			options: [] //	allowing us to get options as props or otherwise take data from defaultProps set.
			// console.log(this.state);
		};_this.handlePick = _this.handlePick.bind(_this);
		_this.handleRemoveOne = _this.handleRemoveOne.bind(_this);
		_this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
		_this.handleAction = _this.handleAction.bind(_this);
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			try {
				var json = localStorage.getItem('options');
				var options = JSON.parse(json);

				if (options) {
					this.setState(function () {
						return {
							options: options
						};
					});
				}
			} catch (e) {
				console.log('Exception caught!');
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.options.length !== this.state.options.length) {
				var json = JSON.stringify(this.state.options);
				localStorage.setItem('options', json);
			}
		}
	}, {
		key: 'handlePick',
		value: function handlePick(e) {

			e.preventDefault();
			var element = e.target.elements.option;
			var newOption = element.value;
			element.value = "";
			if (this.state.options.indexOf(newOption) === -1) {
				this.setState(function (prevState) {
					var newOptionsArray = prevState.options.concat(newOption);
					return {
						options: newOptionsArray
					};
				});
			}
		}
	}, {
		key: 'handleRemoveOne',
		value: function handleRemoveOne(option) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (val) {
						return val !== option;
					})
				};
			});
			console.log(this.state);
		}
	}, {
		key: 'handleRemoveAll',
		value: function handleRemoveAll() {
			this.setState(function () {
				return { options: [] };
			});
		}
	}, {
		key: 'handleAction',
		value: function handleAction() {
			if (this.state.options.length) {
				var rand = Math.floor(Math.random() * this.state.options.length);
				alert(this.state.options[rand]);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var title = "Indecision";
			var subtitle = "A to do app";

			return React.createElement(
				'div',
				null,
				React.createElement(Header, { subtitle: subtitle }),
				React.createElement(Action, { onClick: this.handleAction }),
				React.createElement(Options, { options: this.state.options, onClick: this.handleRemoveAll, removeOne: this.handleRemoveOne }),
				React.createElement(AddOption, { onSubmit: this.handlePick })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

// allowing Component to receive values as props or otherwise set default
// IndecisionApp.defaultProps = {
// 	options: []
// }

var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		props.subtitle && React.createElement(
			'h2',
			null,
			props.subtitle
		)
	);
};

Header.defaultProps = {
	title: "Some default!"
};

function Action(props) {

	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.onClick },
			'What should I do?'
		)
	);
}

var Options = function (_React$Component2) {
	_inherits(Options, _React$Component2);

	function Options() {
		_classCallCheck(this, Options);

		return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
	}

	_createClass(Options, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			console.log(this.props);
			return React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{ onClick: this.props.onClick },
					'Remove All'
				),
				this.props.options.length === 0 && React.createElement(
					'p',
					null,
					' No Options found! '
				),
				this.props.options.map(function (option) {
					return React.createElement(Option, { optionText: option, key: option, onClick: _this3.props.removeOne });
				})
			);
		}
	}]);

	return Options;
}(React.Component);

function Option(props) {
	return React.createElement(
		'p',
		{
			className: 'option',
			onClick: function onClick() {
				props.onClick(props.optionText);
			} },
		props.optionText,
		React.createElement(
			'span',
			{ className: 'cross' },
			'x'
		)
	);
}

var AddOption = function (_React$Component3) {
	_inherits(AddOption, _React$Component3);

	function AddOption() {
		_classCallCheck(this, AddOption);

		return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
	}

	_createClass(AddOption, [{
		key: 'render',
		value: function render() {
			var _this5 = this;

			// console.log(this);
			return React.createElement(
				'div',
				null,
				React.createElement(
					'form',
					{ onSubmit: function onSubmit(e) {
							_this5.props.onSubmit(e);
						} },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						{ type: 'submit' },
						'Submit'
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, { options: [1, 2, 3, 4, 5] }), document.getElementById('app'));
