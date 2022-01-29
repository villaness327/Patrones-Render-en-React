"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStorageListener = useStorageListener;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//High Order Component (HOC)
function useStorageListener(sincronize) {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      storageChange = _React$useState2[0],
      setStorageChange = _React$useState2[1]; //Estado que guarda un valor booleano, si hubo o no cambios en el storage


  window.addEventListener('storage', function (change) {
    if (change.key === 'TODOS_V1') {
      console.log('Hubo cambios en TODOS_V1');
      setStorageChange(true); //Si hubo un cambio en el Storage el estado cambia a true         
    }
  });

  var toogleShow = function toogleShow() {
    sincronize(); //funcion que hace un loading, y hace que se ejecute nuevamente el
    //React.useEffect de carga de todos

    setStorageChange(false); //Estado falso, desaparece mensaje de cambios
  };

  return {
    //se devuelve un objeto
    show: storageChange,
    toogleShow: toogleShow
  };
}