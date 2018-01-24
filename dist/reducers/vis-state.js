'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

// updater functions


var _actionTypes = require('../constants/action-types');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _reduxActions = require('redux-actions');

var _visStateUpdaters = require('./vis-state-updaters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// construct vis-state reducer
var rootReducer = (0, _reduxActions.handleActions)((_handleActions = {}, _handleActions[_actionTypes2.default.ADD_FILTER] = _visStateUpdaters.addFilterUpdater, _handleActions[_actionTypes2.default.ADD_LAYER] = _visStateUpdaters.addLayerUpdater, _handleActions[_actionTypes2.default.ENLARGE_FILTER] = _visStateUpdaters.enlargeFilterUpdater, _handleActions[_actionTypes2.default.INTERACTION_CONFIG_CHANGE] = _visStateUpdaters.interactionConfigChangeUpdater, _handleActions[_actionTypes2.default.LAYER_CLICK] = _visStateUpdaters.layerClickUpdater, _handleActions[_actionTypes2.default.LAYER_CONFIG_CHANGE] = _visStateUpdaters.layerConfigChangeUpdater, _handleActions[_actionTypes2.default.LAYER_HOVER] = _visStateUpdaters.layerHoverUpdater, _handleActions[_actionTypes2.default.LAYER_TYPE_CHANGE] = _visStateUpdaters.layerTypeChangeUpdater, _handleActions[_actionTypes2.default.LAYER_VIS_CONFIG_CHANGE] = _visStateUpdaters.layerVisConfigChangeUpdater, _handleActions[_actionTypes2.default.LAYER_VISUAL_CHANNEL_CHANGE] = _visStateUpdaters.layerVisualChannelChangeUpdater, _handleActions[_actionTypes2.default.LOAD_FILES] = _visStateUpdaters.loadFilesUpdater, _handleActions[_actionTypes2.default.LOAD_FILES_ERR] = _visStateUpdaters.loadFilesErrUpdater, _handleActions[_actionTypes2.default.MAP_CLICK] = _visStateUpdaters.mapClickUpdater, _handleActions[_actionTypes2.default.RECEIVE_MAP_CONFIG] = _visStateUpdaters.receiveMapConfigUpdater, _handleActions[_actionTypes2.default.REMOVE_DATASET] = _visStateUpdaters.removeDatasetUpdater, _handleActions[_actionTypes2.default.REMOVE_FILTER] = _visStateUpdaters.removeFilterUpdater, _handleActions[_actionTypes2.default.REMOVE_LAYER] = _visStateUpdaters.removeLayerUpdater, _handleActions[_actionTypes2.default.REORDER_LAYER] = _visStateUpdaters.reorderLayerUpdater, _handleActions[_actionTypes2.default.RESET_MAP_CONFIG] = _visStateUpdaters.resetMapConfigUpdater, _handleActions[_actionTypes2.default.SET_FILTER] = _visStateUpdaters.setFilterUpdater, _handleActions[_actionTypes2.default.SET_FILTER_PLOT] = _visStateUpdaters.setFilterPlotUpdater, _handleActions[_actionTypes2.default.SET_VISIBLE_LAYERS_FOR_MAP] = _visStateUpdaters.setVisibleLayersForMapUpdater, _handleActions[_actionTypes2.default.SHOW_DATASET_TABLE] = _visStateUpdaters.showDatasetTableUpdater, _handleActions[_actionTypes2.default.TOGGLE_FILTER_ANIMATION] = _visStateUpdaters.toggleFilterAnimationUpdater, _handleActions[_actionTypes2.default.TOGGLE_LAYER_FOR_MAP] = _visStateUpdaters.toggleLayerForMapUpdater, _handleActions[_actionTypes2.default.TOGGLE_SPLIT_MAP] = _visStateUpdaters.toggleSplitMapUpdater, _handleActions[_actionTypes2.default.UPDATE_LAYER_BLENDING] = _visStateUpdaters.updateLayerBlendingUpdater, _handleActions[_actionTypes2.default.UPDATE_VIS_DATA] = _visStateUpdaters.updateVisDataUpdater, _handleActions), _visStateUpdaters.INITIAL_VIS_STATE);

exports.default = rootReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUuanMiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJBRERfRklMVEVSIiwiQUREX0xBWUVSIiwiRU5MQVJHRV9GSUxURVIiLCJJTlRFUkFDVElPTl9DT05GSUdfQ0hBTkdFIiwiTEFZRVJfQ0xJQ0siLCJMQVlFUl9DT05GSUdfQ0hBTkdFIiwiTEFZRVJfSE9WRVIiLCJMQVlFUl9UWVBFX0NIQU5HRSIsIkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFIiwiTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFIiwiTE9BRF9GSUxFUyIsIkxPQURfRklMRVNfRVJSIiwiTUFQX0NMSUNLIiwiUkVDRUlWRV9NQVBfQ09ORklHIiwiUkVNT1ZFX0RBVEFTRVQiLCJSRU1PVkVfRklMVEVSIiwiUkVNT1ZFX0xBWUVSIiwiUkVPUkRFUl9MQVlFUiIsIlJFU0VUX01BUF9DT05GSUciLCJTRVRfRklMVEVSIiwiU0VUX0ZJTFRFUl9QTE9UIiwiU0VUX1ZJU0lCTEVfTEFZRVJTX0ZPUl9NQVAiLCJTSE9XX0RBVEFTRVRfVEFCTEUiLCJUT0dHTEVfRklMVEVSX0FOSU1BVElPTiIsIlRPR0dMRV9MQVlFUl9GT1JfTUFQIiwiVE9HR0xFX1NQTElUX01BUCIsIlVQREFURV9MQVlFUl9CTEVORElORyIsIlVQREFURV9WSVNfREFUQSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQTs7O0FBSEE7Ozs7QUFDQTs7QUFHQTs7OztBQWdDQTtBQUNBLElBQU1BLGNBQWMsc0VBRWYsc0JBQVlDLFVBRkcsdURBSWYsc0JBQVlDLFNBSkcsc0RBTWYsc0JBQVlDLGNBTkcsMkRBUWYsc0JBQVlDLHlCQVJHLHFFQVVmLHNCQUFZQyxXQVZHLHdEQVlmLHNCQUFZQyxtQkFaRywrREFjZixzQkFBWUMsV0FkRyx3REFnQmYsc0JBQVlDLGlCQWhCRyw2REFrQmYsc0JBQVlDLHVCQWxCRyxrRUFvQmYsc0JBQVlDLDJCQXBCRyxzRUFzQmYsc0JBQVlDLFVBdEJHLHVEQXdCZixzQkFBWUMsY0F4QkcsMERBMEJmLHNCQUFZQyxTQTFCRyxzREE0QmYsc0JBQVlDLGtCQTVCRyw4REE4QmYsc0JBQVlDLGNBOUJHLDJEQWdDZixzQkFBWUMsYUFoQ0csMERBa0NmLHNCQUFZQyxZQWxDRyx5REFvQ2Ysc0JBQVlDLGFBcENHLDBEQXNDZixzQkFBWUMsZ0JBdENHLDREQXdDZixzQkFBWUMsVUF4Q0csdURBMENmLHNCQUFZQyxlQTFDRywyREE0Q2Ysc0JBQVlDLDBCQTVDRyxvRUE4Q2Ysc0JBQVlDLGtCQTlDRyw4REFnRGYsc0JBQVlDLHVCQWhERyxtRUFrRGYsc0JBQVlDLG9CQWxERywrREFvRGYsc0JBQVlDLGdCQXBERyw0REFzRGYsc0JBQVlDLHFCQXRERyxpRUF3RGYsc0JBQVlDLGVBeERHLGlHQUFwQjs7a0JBNkRlNUIsVyIsImZpbGUiOiJ2aXMtc3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQge2hhbmRsZUFjdGlvbnN9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG4vLyB1cGRhdGVyIGZ1bmN0aW9uc1xuaW1wb3J0IHtcbiAgSU5JVElBTF9WSVNfU1RBVEUsXG4gIGFkZEZpbHRlclVwZGF0ZXIsXG4gIGFkZExheWVyVXBkYXRlcixcbiAgZW5sYXJnZUZpbHRlclVwZGF0ZXIsXG4gIGxheWVyQ2xpY2tVcGRhdGVyLFxuICBsYXllckhvdmVyVXBkYXRlcixcbiAgbWFwQ2xpY2tVcGRhdGVyLFxuICB0b2dnbGVGaWx0ZXJBbmltYXRpb25VcGRhdGVyLFxuICByZWNlaXZlTWFwQ29uZmlnVXBkYXRlcixcbiAgcmVzZXRNYXBDb25maWdVcGRhdGVyLFxuICBsb2FkRmlsZXNVcGRhdGVyLFxuICBsb2FkRmlsZXNFcnJVcGRhdGVyLFxuICB1cGRhdGVWaXNEYXRhVXBkYXRlcixcbiAgcmVtb3ZlRGF0YXNldFVwZGF0ZXIsXG4gIHJlbW92ZUZpbHRlclVwZGF0ZXIsXG4gIHJlbW92ZUxheWVyVXBkYXRlcixcbiAgcmVvcmRlckxheWVyVXBkYXRlcixcbiAgc2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIsXG4gIHNldEZpbHRlclVwZGF0ZXIsXG4gIHNldEZpbHRlclBsb3RVcGRhdGVyLFxuICBpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZVVwZGF0ZXIsXG4gIHVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyLFxuICBsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIsXG4gIGxheWVyVHlwZUNoYW5nZVVwZGF0ZXIsXG4gIHRvZ2dsZVNwbGl0TWFwVXBkYXRlcixcbiAgc2V0VmlzaWJsZUxheWVyc0Zvck1hcFVwZGF0ZXIsXG4gIHRvZ2dsZUxheWVyRm9yTWFwVXBkYXRlcixcbiAgbGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyLFxuICBsYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyXG59IGZyb20gJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJztcblxuLy8gY29uc3RydWN0IHZpcy1zdGF0ZSByZWR1Y2VyXG5jb25zdCByb290UmVkdWNlciA9IGhhbmRsZUFjdGlvbnMoXG4gIHtcbiAgICBbQWN0aW9uVHlwZXMuQUREX0ZJTFRFUl06IGFkZEZpbHRlclVwZGF0ZXIsXG5cbiAgICBbQWN0aW9uVHlwZXMuQUREX0xBWUVSXTogYWRkTGF5ZXJVcGRhdGVyLFxuXG4gICAgW0FjdGlvblR5cGVzLkVOTEFSR0VfRklMVEVSXTogZW5sYXJnZUZpbHRlclVwZGF0ZXIsXG5cbiAgICBbQWN0aW9uVHlwZXMuSU5URVJBQ1RJT05fQ09ORklHX0NIQU5HRV06IGludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlcixcblxuICAgIFtBY3Rpb25UeXBlcy5MQVlFUl9DTElDS106IGxheWVyQ2xpY2tVcGRhdGVyLFxuXG4gICAgW0FjdGlvblR5cGVzLkxBWUVSX0NPTkZJR19DSEFOR0VdOiBsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIsXG5cbiAgICBbQWN0aW9uVHlwZXMuTEFZRVJfSE9WRVJdOiBsYXllckhvdmVyVXBkYXRlcixcblxuICAgIFtBY3Rpb25UeXBlcy5MQVlFUl9UWVBFX0NIQU5HRV06IGxheWVyVHlwZUNoYW5nZVVwZGF0ZXIsXG5cbiAgICBbQWN0aW9uVHlwZXMuTEFZRVJfVklTX0NPTkZJR19DSEFOR0VdOiBsYXllclZpc0NvbmZpZ0NoYW5nZVVwZGF0ZXIsXG5cbiAgICBbQWN0aW9uVHlwZXMuTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFXTogbGF5ZXJWaXN1YWxDaGFubmVsQ2hhbmdlVXBkYXRlcixcblxuICAgIFtBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTXTogbG9hZEZpbGVzVXBkYXRlcixcblxuICAgIFtBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTX0VSUl06IGxvYWRGaWxlc0VyclVwZGF0ZXIsXG5cbiAgICBbQWN0aW9uVHlwZXMuTUFQX0NMSUNLXTogbWFwQ2xpY2tVcGRhdGVyLFxuXG4gICAgW0FjdGlvblR5cGVzLlJFQ0VJVkVfTUFQX0NPTkZJR106IHJlY2VpdmVNYXBDb25maWdVcGRhdGVyLFxuXG4gICAgW0FjdGlvblR5cGVzLlJFTU9WRV9EQVRBU0VUXTogcmVtb3ZlRGF0YXNldFVwZGF0ZXIsXG5cbiAgICBbQWN0aW9uVHlwZXMuUkVNT1ZFX0ZJTFRFUl06IHJlbW92ZUZpbHRlclVwZGF0ZXIsXG5cbiAgICBbQWN0aW9uVHlwZXMuUkVNT1ZFX0xBWUVSXTogcmVtb3ZlTGF5ZXJVcGRhdGVyLFxuXG4gICAgW0FjdGlvblR5cGVzLlJFT1JERVJfTEFZRVJdOiByZW9yZGVyTGF5ZXJVcGRhdGVyLFxuXG4gICAgW0FjdGlvblR5cGVzLlJFU0VUX01BUF9DT05GSUddOiByZXNldE1hcENvbmZpZ1VwZGF0ZXIsXG5cbiAgICBbQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl06IHNldEZpbHRlclVwZGF0ZXIsXG5cbiAgICBbQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9QTE9UXTogc2V0RmlsdGVyUGxvdFVwZGF0ZXIsXG5cbiAgICBbQWN0aW9uVHlwZXMuU0VUX1ZJU0lCTEVfTEFZRVJTX0ZPUl9NQVBdOiBzZXRWaXNpYmxlTGF5ZXJzRm9yTWFwVXBkYXRlcixcblxuICAgIFtBY3Rpb25UeXBlcy5TSE9XX0RBVEFTRVRfVEFCTEVdOiBzaG93RGF0YXNldFRhYmxlVXBkYXRlcixcblxuICAgIFtBY3Rpb25UeXBlcy5UT0dHTEVfRklMVEVSX0FOSU1BVElPTl06IHRvZ2dsZUZpbHRlckFuaW1hdGlvblVwZGF0ZXIsXG5cbiAgICBbQWN0aW9uVHlwZXMuVE9HR0xFX0xBWUVSX0ZPUl9NQVBdOiB0b2dnbGVMYXllckZvck1hcFVwZGF0ZXIsXG5cbiAgICBbQWN0aW9uVHlwZXMuVE9HR0xFX1NQTElUX01BUF06IHRvZ2dsZVNwbGl0TWFwVXBkYXRlcixcblxuICAgIFtBY3Rpb25UeXBlcy5VUERBVEVfTEFZRVJfQkxFTkRJTkddOiB1cGRhdGVMYXllckJsZW5kaW5nVXBkYXRlcixcblxuICAgIFtBY3Rpb25UeXBlcy5VUERBVEVfVklTX0RBVEFdOiB1cGRhdGVWaXNEYXRhVXBkYXRlclxuICB9LFxuICBJTklUSUFMX1ZJU19TVEFURVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iXX0=