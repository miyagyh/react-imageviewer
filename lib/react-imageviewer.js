'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _viewerjs = require('viewerjs');

var _viewerjs2 = _interopRequireDefault(_viewerjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactImageViewer = function (_Component) {
    _inherits(ReactImageViewer, _Component);

    function ReactImageViewer(props) {
        _classCallCheck(this, ReactImageViewer);

        return _possibleConstructorReturn(this, (ReactImageViewer.__proto__ || Object.getPrototypeOf(ReactImageViewer)).call(this, props));
    }

    _createClass(ReactImageViewer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dom = this.renderViewerDom();
            this.viewer = new _viewerjs2.default(dom, this.getOptions());
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.viewer) {
                this.viewer.update();
            } else {
                var dom = this.renderViewerDom();
                this.viewer = new _viewerjs2.default(dom, this.getOptions());
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.viewer && this.viewer.destroy();
        }
    }, {
        key: 'getOptions',
        value: function getOptions() {
            return {};
        }
    }, {
        key: 'renderViewerDom',
        value: function renderViewerDom() {
            return this.refs.viewer;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'react-imageviewer-container', ref: 'viewer' },
                this.props.items.map(function (item) {
                    return _react2.default.createElement('img', { src: item.url, key: item.url });
                })
            );
        }
    }]);

    return ReactImageViewer;
}(_react.Component);

exports.default = ReactImageViewer;
