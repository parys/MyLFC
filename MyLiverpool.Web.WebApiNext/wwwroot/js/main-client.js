/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdate"];
/******/ 	this["webpackHotUpdate"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest() { // eslint-disable-line no-unused-vars
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if(typeof XMLHttpRequest === "undefined")
/******/ 				return reject(new Error("No browser support"));
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = 10000;
/******/ 				request.send(null);
/******/ 			} catch(err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if(request.readyState !== 4) return;
/******/ 				if(request.status === 0) {
/******/ 					// timeout
/******/ 					reject(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 				} else if(request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if(request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch(e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "c5b3e5abc740e6043768"; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotMainModule = true; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else hotCurrentParents = [moduleId];
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			hotMainModule = false;
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name)) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		Object.defineProperty(fn, "e", {
/******/ 			enumerable: true,
/******/ 			value: function(chunkId) {
/******/ 				if(hotStatus === "ready")
/******/ 					hotSetStatus("prepare");
/******/ 				hotChunksLoading++;
/******/ 				return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 					finishChunkLoading();
/******/ 					throw err;
/******/ 				});
/******/ 	
/******/ 				function finishChunkLoading() {
/******/ 					hotChunksLoading--;
/******/ 					if(hotStatus === "prepare") {
/******/ 						if(!hotWaitingFilesMap[chunkId]) {
/******/ 							hotEnsureUpdateChunk(chunkId);
/******/ 						}
/******/ 						if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 							hotUpdateDownloaded();
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		});
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotMainModule,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotMainModule = true;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest().then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 	
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate).then(function(result) {
/******/ 				deferred.resolve(result);
/******/ 			}, function(err) {
/******/ 				deferred.reject(err);
/******/ 			});
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				}
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					}
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						}
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					dependency = moduleOutdatedDependencies[i];
/******/ 					cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(i = 0; i < callbacks.length; i++) {
/******/ 					cb = callbacks[i];
/******/ 					try {
/******/ 						cb(moduleOutdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "accept-errored",
/******/ 								moduleId: moduleId,
/******/ 								dependencyId: moduleOutdatedDependencies[i],
/******/ 								error: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err;
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return Promise.resolve(outdatedModules);
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(216)(__webpack_require__.s = 216);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(0);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(199));
__export(__webpack_require__(7));
__export(__webpack_require__(28));
__export(__webpack_require__(55));
__export(__webpack_require__(197));
__export(__webpack_require__(198));
__export(__webpack_require__(217));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(715);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Configuration = (function () {
    function Configuration() {
        this.server = "http://localhost:1669/";
        this.apiUrl = "api/v1/";
        this.serverWithApiUrl = this.server + this.apiUrl;
        this.allowedImageTypes = [".jpeg", ".jpg", ".png", ".gif", ".bmp"];
    }
    return Configuration;
}());
Configuration = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Configuration);
exports.Configuration = Configuration;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(47);

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = vendor_605fa3c6b9c233875ff8;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(15));
__export(__webpack_require__(139));
__export(__webpack_require__(140));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(60);
var localStorage_service_1 = __webpack_require__(28);
var HttpWrapper = (function () {
    function HttpWrapper(http, localStorage) {
        this.http = http;
        this.localStorage = localStorage;
    }
    HttpWrapper.prototype.updateHeaders = function (withFiles) {
        if (withFiles === void 0) { withFiles = false; }
        var headers = new http_1.Headers();
        if (withFiles) {
            headers.append("Accept", "application/json");
        }
        else {
            headers.append("Content-type", "application/json");
        }
        if (this.localStorage.hasAccessToken()) {
            headers.append("Authorization", this.localStorage.getAccessTokenWithType());
        }
        return headers;
    };
    HttpWrapper.prototype.get = function (url) {
        return this.http.get(url, {
            headers: this.updateHeaders(),
            body: ""
        });
    };
    HttpWrapper.prototype.post = function (url, data, withFiles) {
        if (withFiles === void 0) { withFiles = false; }
        return this.http.post(url, data, {
            headers: this.updateHeaders(withFiles)
        });
    };
    HttpWrapper.prototype.put = function (url, data) {
        return this.http.put(url, data, {
            headers: this.updateHeaders()
        });
    };
    HttpWrapper.prototype.delete = function (url) {
        this.updateHeaders();
        return this.http.delete(url, {
            headers: this.updateHeaders(),
            body: ""
        });
    };
    return HttpWrapper;
}());
HttpWrapper = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        localStorage_service_1.LocalStorageService])
], HttpWrapper);
exports.HttpWrapper = HttpWrapper;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(24);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(74);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var index_1 = __webpack_require__(1);
var AccountService = (function () {
    function AccountService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.create = function (item) {
            return _this.http.post(_this.actionUrl + "register/", JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.confirmEmail = function (userId, code) {
            return _this.http.get(_this.actionUrl + ("confirmEmail?userId=" + userId + "&code=" + code)).map(function (res) { return res.json(); });
        };
        this.forgotPassword = function (email) {
            return _this.http.get(_this.actionUrl + ("forgotPassword?email=" + email)).map(function (res) { return res.json(); });
        };
        this.resendConfirmEmail = function (email) {
            return _this.http.get(_this.actionUrl + ("resendConfirmEmail?email=" + email)).map(function (res) { return res.json(); });
        };
        this.resetPassword = function (model) {
            return _this.http.put(_this.actionUrl + "resetPassword", model).map(function (res) { return res.json(); });
        };
        this.changePassword = function (model) {
            return _this.http.put(_this.actionUrl + "changePassword", model).map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "account/";
    }
    return AccountService;
}());
AccountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpWrapper, app_constants_1.Configuration])
], AccountService);
exports.AccountService = AccountService;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(724);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var httpWrapper_1 = __webpack_require__(7);
var PmService = (function () {
    function PmService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function () {
            return _this.http.get(_this.actionUrl).map(function (res) { return res.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "pm/";
    }
    return PmService;
}());
PmService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
], PmService);
exports.PmService = PmService;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var httpWrapper_1 = __webpack_require__(7);
var MaterialCommentService = (function () {
    function MaterialCommentService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function (page) {
            return _this.http.get(_this.actionUrl + "list/" + page).map(function (res) { return res.json(); });
        };
        this.getAllByMaterial = function (page, id) {
            return _this.http.get(_this.actionUrl + "material/" + id + "/list/" + page).map(function (res) { return res.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl + "News/", JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.verify = function (id) {
            return _this.http.get(_this.actionUrl + "verify/" + id).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "materialComment/";
    }
    return MaterialCommentService;
}());
MaterialCommentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
], MaterialCommentService);
exports.MaterialCommentService = MaterialCommentService;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var httpWrapper_1 = __webpack_require__(7);
var NewsService = (function () {
    function NewsService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function (filters) {
            return _this.http.get(_this.actionUrl + "list/" + encodeURIComponent(JSON.stringify(filters))).map(function (res) { return res.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl + "news/", JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.addView = function (id) {
            return _this.http.get(_this.actionUrl + "addView/" + id).map(function (res) { return res.json(); });
        };
        this.activate = function (id) {
            return _this.http.get(_this.actionUrl + "activate/" + id).map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "material/";
    }
    return NewsService;
}());
NewsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
], NewsService);
exports.NewsService = NewsService;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(60);
var router_1 = __webpack_require__(2);
var index_1 = __webpack_require__(1);
var app_constants_1 = __webpack_require__(3);
var AuthService = (function () {
    function AuthService(http, http1, localStorage, rolesCheckedService, router, configuration) {
        this.http = http;
        this.http1 = http1;
        this.localStorage = localStorage;
        this.rolesCheckedService = rolesCheckedService;
        this.router = router;
        this.configuration = configuration;
        this.roles = [];
        this.isUserLogined();
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8;");
        var perams = "grant_type=password&username=" + username + "&password=" + password + "&client_id=client_id3";
        this.http1.post(this.configuration.server + "connect/token", perams, {
            headers: headers
        })
            .subscribe(function (data) { return _this.parseLoginAnswer(data); }, function (error) {
            if (error._body === "unconfirmed_email") {
                _this.router.navigate(["/unconfirmedEmail"]);
                return;
            }
            console.log(error);
        }, function () { return _this.getUserId(); });
        return true;
    };
    AuthService.prototype.logout = function () {
        this.localStorage.removeAuthTokens();
        this.rolesCheckedService.checkRoles();
    };
    AuthService.prototype.isUserInRole = function (role) {
        if (this.roles.find(function (x) { return x.toLowerCase() === role.toLowerCase(); })) {
            return true;
        }
        return false;
    };
    AuthService.prototype.isUserLogined = function () {
        var _this = this;
        var result = false;
        this.http.get(this.configuration.serverWithApiUrl + "account/isSignedIn")
            .subscribe(function (data) { return result = true; }, function (error) { return _this.localStorage.removeAllData(); }, function () {
            if (result && _this.localStorage.hasAccessToken()) {
                _this.roles = _this.localStorage.getRoles();
                _this.id = _this.localStorage.getUserId();
            }
            else {
                _this.localStorage.removeAllData();
            }
        });
    };
    AuthService.prototype.parseLoginAnswer = function (item) {
        this.localStorage.setAuthTokens(item);
    };
    AuthService.prototype.parseRoles = function (item) {
        this.roles = item._body.split(", ");
        this.localStorage.setRoles(this.roles);
    };
    AuthService.prototype.getRoles = function () {
        var _this = this;
        this.http.get(this.configuration.serverWithApiUrl + "role")
            .subscribe(function (data) { return _this.parseRoles(data); }, function (error) { return console.log(error); }, function () { return _this.rolesCheckedService.checkRoles(); });
    };
    AuthService.prototype.getUserId = function () {
        var _this = this;
        this.http.get(this.configuration.serverWithApiUrl + "user/getId")
            .subscribe(function (data) { return _this.id = +JSON.parse(data.text()); }, function (error) { return console.log(error); }, function () {
            _this.localStorage.setUserId(_this.id);
            _this.getRoles();
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpWrapper,
        http_1.Http,
        index_1.LocalStorageService,
        index_1.RolesCheckedService,
        router_1.Router,
        app_constants_1.Configuration])
], AuthService);
exports.AuthService = AuthService;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var index_1 = __webpack_require__(1);
var ClubService = (function () {
    function ClubService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function (page) {
            return _this.http.get(_this.actionUrl + ("list/" + page)).map(function (res) { return res.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.getByName = function (typed) {
            return _this.http.get(_this.actionUrl + ("/getClubsByName/" + typed)).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "club/";
    }
    return ClubService;
}());
ClubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpWrapper, app_constants_1.Configuration])
], ClubService);
exports.ClubService = ClubService;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(16));
__export(__webpack_require__(145));
__export(__webpack_require__(144));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(151));
__export(__webpack_require__(38));
__export(__webpack_require__(150));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var index_1 = __webpack_require__(1);
var ForumSubsectionService = (function () {
    function ForumSubsectionService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function () {
            return _this.http.get(_this.actionUrl + "list/").map(function (res) { return res.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.getSingleWithThemes = function (id, page) {
            return _this.http.get("" + _this.actionUrl + id + "/" + page).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "forumSubsection/";
    }
    return ForumSubsectionService;
}());
ForumSubsectionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpWrapper, app_constants_1.Configuration])
], ForumSubsectionService);
exports.ForumSubsectionService = ForumSubsectionService;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(39));
__export(__webpack_require__(19));
__export(__webpack_require__(154));
__export(__webpack_require__(153));


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var index_1 = __webpack_require__(1);
var ForumThemeService = (function () {
    function ForumThemeService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function () {
            return _this.http.get(_this.actionUrl + "list/").map(function (res) { return res.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.getSingleWithMessages = function (id, page) {
            return _this.http.get("" + _this.actionUrl + id + "/" + page).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "forumTheme/";
    }
    return ForumThemeService;
}());
ForumThemeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpWrapper, app_constants_1.Configuration])
], ForumThemeService);
exports.ForumThemeService = ForumThemeService;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var httpWrapper_1 = __webpack_require__(7);
var ImageService = (function () {
    function ImageService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.get = function (path) {
            return _this.http.get(_this.actionUrl + "?path=" + path).map(function (response) { return response.json(); });
        };
        this.uploadImage = function (files) {
            var formData = new FormData();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploadFile", files[i], files[i].name);
            }
            ;
            return _this.http.post("" + _this.actionUrl, formData, true).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "image/";
    }
    return ImageService;
}());
ImageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
], ImageService);
exports.ImageService = ImageService;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(45));
__export(__webpack_require__(172));
__export(__webpack_require__(171));
__export(__webpack_require__(170));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var MaterialComment = (function () {
    function MaterialComment() {
    }
    return MaterialComment;
}());
exports.MaterialComment = MaterialComment;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var httpWrapper_1 = __webpack_require__(7);
var NewsCategoryService = (function () {
    function NewsCategoryService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function () {
            return _this.http.get(_this.actionUrl).map(function (res) { return res.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http.put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "newsCategory/";
    }
    return NewsCategoryService;
}());
NewsCategoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
], NewsCategoryService);
exports.NewsCategoryService = NewsCategoryService;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(181));
__export(__webpack_require__(183));
__export(__webpack_require__(182));
__export(__webpack_require__(50));
__export(__webpack_require__(14));


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Pm = (function () {
    function Pm() {
    }
    return Pm;
}());
exports.Pm = Pm;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var angular2_universal_1 = __webpack_require__(31);
var LocalStorageService = (function () {
    function LocalStorageService() {
        if (angular2_universal_1.isBrowser && !localStorage) {
            throw new Error("Current browser does not support Local Storage");
        }
        else if (angular2_universal_1.isNode) {
            this.localStorage = null;
        }
        else {
            this.localStorage = localStorage;
        }
    }
    LocalStorageService.prototype.hasAccessToken = function () {
        return this.get("access_token") !== null;
    };
    LocalStorageService.prototype.getAccessToken = function () {
        return this.get("access_token");
    };
    LocalStorageService.prototype.getAccessTokenWithType = function () {
        return this.get("token_type") + " " + this.get("access_token");
    };
    LocalStorageService.prototype.getRoles = function () {
        return this.getObject("roles");
    };
    LocalStorageService.prototype.getUserId = function () {
        return +this.get("userId");
    };
    LocalStorageService.prototype.removeRoles = function () {
        this.remove("roles");
    };
    LocalStorageService.prototype.removeAuthTokens = function () {
        this.remove("token_type");
        this.remove("access_token");
        this.remove("expires_in");
        this.remove("refresh_token");
        this.remove("roles");
        this.remove("userId");
    };
    LocalStorageService.prototype.setAuthTokens = function (item) {
        var response = JSON.parse(item._body);
        this.set("token_type", response.token_type);
        this.set("access_token", response.access_token);
        this.set("expires_in", response.expires_in);
        this.set("refresh_token", response.refresh_token);
        return true;
    };
    LocalStorageService.prototype.setRoles = function (roles) {
        if (!this.localStorage)
            return;
        this.setObject("roles", roles);
    };
    LocalStorageService.prototype.setUserId = function (id) {
        if (!this.localStorage)
            return;
        this.setObject("userId", id);
    };
    LocalStorageService.prototype.tryAddViewForNews = function (id) {
        if (!this.localStorage)
            return false;
        if (!this.get("material" + id)) {
            this.set("material" + id, "1");
            return true;
        }
        return false;
    };
    LocalStorageService.prototype.removeAllData = function () {
        this.removeAuthTokens();
        this.removeRoles();
    };
    LocalStorageService.prototype.set = function (key, value) {
        if (!this.localStorage)
            return;
        localStorage[key] = value;
    };
    LocalStorageService.prototype.get = function (key) {
        if (!this.localStorage)
            return "";
        return localStorage[key] || false;
    };
    LocalStorageService.prototype.setObject = function (key, value) {
        if (!this.localStorage)
            return;
        localStorage[key] = JSON.stringify(value);
    };
    LocalStorageService.prototype.getObject = function (key) {
        if (!this.localStorage)
            return null;
        if (localStorage[key]) {
            return JSON.parse(localStorage[key]);
        }
        return null;
    };
    LocalStorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], LocalStorageService);
exports.LocalStorageService = LocalStorageService;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var httpWrapper_1 = __webpack_require__(7);
var app_constants_1 = __webpack_require__(3);
var UserService = (function () {
    function UserService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function (filters) {
            return _this.http.get(_this.actionUrl + "list/" + encodeURIComponent(JSON.stringify(filters)))
                .map(function (response) { return response.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.updateRoleGroup = function (id, roleGroupId) {
            return _this.http.put(_this.actionUrl + "updateRoleGroup/" + id + "/" + roleGroupId, "").map(function (response) { return response.json(); });
        };
        this.ban = function (id, banDaysCount) {
            return _this.http.put(_this.actionUrl + "ban/" + id + "/" + banDaysCount, "").map(function (response) { return response.json(); });
        };
        this.unban = function (id) {
            return _this.http.put(_this.actionUrl + "unban/" + id, "").map(function (response) { return response.json(); });
        };
        this.resetAvatar = function (id) {
            return _this.http.put(_this.actionUrl + "avatar/" + id + "/reset", "").map(function (response) { return response.text(); });
        };
        this.updateAvatar = function (file) {
            var formData = new FormData();
            formData.append("uploadFile", file, file.name);
            return _this.http.post(_this.actionUrl + "avatar/", formData, true).map(function (response) { return response.text(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "user/";
    }
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
], UserService);
exports.UserService = UserService;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var httpWrapper_1 = __webpack_require__(7);
var WishService = (function () {
    function WishService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function () {
            return _this.http.get(_this.actionUrl + "list/").map(function (res) { return res.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.getTypes = function () {
            return _this.http.get(_this.actionUrl + "types/").map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "wish/";
    }
    return WishService;
}());
WishService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
], WishService);
exports.WishService = WishService;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(717);

/***/ },
/* 32 */
/***/ function(module, exports) {

var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['CloseCurlyDoubleQuote', [8221]], ['CloseCurlyQuote', [8217]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];

var alphaIndex = {};
var charIndex = {};

createIndexes(alphaIndex, charIndex);

/**
 * @constructor
 */
function Html5Entities() {}

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.decode = function(str) {
    if (str.length === 0) {
        return '';
    }
    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
        var chr;
        if (entity.charAt(0) === "#") {
            var code = entity.charAt(1) === 'x' ?
                parseInt(entity.substr(2).toLowerCase(), 16) :
                parseInt(entity.substr(1));

            if (!(isNaN(code) || code < -32768 || code > 65535)) {
                chr = String.fromCharCode(code);
            }
        } else {
            chr = alphaIndex[entity];
        }
        return chr || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.decode = function(str) {
    return new Html5Entities().decode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encode = function(str) {
    var strLength = str.length;
    if (strLength === 0) {
        return '';
    }
    var result = '';
    var i = 0;
    while (i < strLength) {
        var charInfo = charIndex[str.charCodeAt(i)];
        if (charInfo) {
            var alpha = charInfo[str.charCodeAt(i + 1)];
            if (alpha) {
                i++;
            } else {
                alpha = charInfo[''];
            }
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
        }
        result += str.charAt(i);
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encode = function(str) {
    return new Html5Entities().encode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encodeNonUTF = function(str) {
    var strLength = str.length;
    if (strLength === 0) {
        return '';
    }
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        var charInfo = charIndex[c];
        if (charInfo) {
            var alpha = charInfo[str.charCodeAt(i + 1)];
            if (alpha) {
                i++;
            } else {
                alpha = charInfo[''];
            }
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
        }
        if (c < 32 || c > 126) {
            result += '&#' + c + ';';
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encodeNonUTF = function(str) {
    return new Html5Entities().encodeNonUTF(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
Html5Entities.prototype.encodeNonASCII = function(str) {
    var strLength = str.length;
    if (strLength === 0) {
        return '';
    }
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 Html5Entities.encodeNonASCII = function(str) {
    return new Html5Entities().encodeNonASCII(str);
 };

/**
 * @param {Object} alphaIndex Passed by reference.
 * @param {Object} charIndex Passed by reference.
 */
function createIndexes(alphaIndex, charIndex) {
    var i = ENTITIES.length;
    var _results = [];
    while (i--) {
        var e = ENTITIES[i];
        var alpha = e[0];
        var chars = e[1];
        var chr = chars[0];
        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
        var charInfo;
        if (addChar) {
            charInfo = charIndex[chr] = charIndex[chr] || {};
        }
        if (chars[1]) {
            var chr2 = chars[1];
            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
            _results.push(addChar && (charInfo[chr2] = alpha));
        } else {
            alphaIndex[alpha] = String.fromCharCode(chr);
            _results.push(addChar && (charInfo[''] = alpha));
        }
    }
}

module.exports = Html5Entities;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(123));
__export(__webpack_require__(124));
__export(__webpack_require__(128));
__export(__webpack_require__(129));
__export(__webpack_require__(130));
__export(__webpack_require__(126));
__export(__webpack_require__(133));
__export(__webpack_require__(10));


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var index_1 = __webpack_require__(1);
var AdminService = (function () {
    function AdminService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.updateEplTable = function () {
            return _this.http.get(_this.actionUrl + "updateTable/").map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "admin/";
    }
    return AdminService;
}());
AdminService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpWrapper, app_constants_1.Configuration])
], AdminService);
exports.AdminService = AdminService;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var index_1 = __webpack_require__(1);
var ChatMessageService = (function () {
    function ChatMessageService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function () {
            return _this.http.get(_this.actionUrl + "list/").map(function (res) { return res.json(); });
        };
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "chatMessage/";
    }
    return ChatMessageService;
}());
ChatMessageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpWrapper, app_constants_1.Configuration])
], ChatMessageService);
exports.ChatMessageService = ChatMessageService;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ForumMessage = (function () {
    function ForumMessage() {
    }
    return ForumMessage;
}());
exports.ForumMessage = ForumMessage;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var index_1 = __webpack_require__(1);
var ForumMessageService = (function () {
    function ForumMessageService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "forumMessage/";
    }
    return ForumMessageService;
}());
ForumMessageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpWrapper, app_constants_1.Configuration])
], ForumMessageService);
exports.ForumMessageService = ForumMessageService;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var index_1 = __webpack_require__(1);
var ForumSectionService = (function () {
    function ForumSectionService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function () {
            return _this.http.get(_this.actionUrl + "list/").map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "forumSection/";
    }
    return ForumSectionService;
}());
ForumSectionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpWrapper, app_constants_1.Configuration])
], ForumSectionService);
exports.ForumSectionService = ForumSectionService;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ForumSubsection = (function () {
    function ForumSubsection() {
    }
    return ForumSubsection;
}());
exports.ForumSubsection = ForumSubsection;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ForumTheme = (function () {
    function ForumTheme() {
    }
    return ForumTheme;
}());
exports.ForumTheme = ForumTheme;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(40));
__export(__webpack_require__(21));
__export(__webpack_require__(157));
__export(__webpack_require__(156));


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(160));
__export(__webpack_require__(164));
__export(__webpack_require__(163));
__export(__webpack_require__(159));
__export(__webpack_require__(161));
__export(__webpack_require__(165));


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Image = (function () {
    function Image() {
    }
    return Image;
}());
exports.Image = Image;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(43));
__export(__webpack_require__(22));
__export(__webpack_require__(168));
__export(__webpack_require__(167));
__export(__webpack_require__(166));


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var httpWrapper_1 = __webpack_require__(7);
var MatchService = (function () {
    function MatchService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getSingle = function (id) {
            return _this.http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
        };
        this.create = function (item) {
            return _this.http.post(_this.actionUrl, JSON.stringify(item)).map(function (res) { return res.json(); });
        };
        this.update = function (id, itemToUpdate) {
            return _this.http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate))
                .map(function (res) { return res.json(); });
        };
        this.getTypes = function () {
            return _this.http.get(_this.actionUrl + "/getTypes")
                .map(function (res) { return res.json(); });
        };
        this.delete = function (id) {
            return _this.http.delete(_this.actionUrl + id).map(function (response) { return response.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "match/";
    }
    return MatchService;
}());
MatchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
], MatchService);
exports.MatchService = MatchService;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(24));
__export(__webpack_require__(176));
__export(__webpack_require__(13));
__export(__webpack_require__(177));
__export(__webpack_require__(175));


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(25));
__export(__webpack_require__(48));
__export(__webpack_require__(49));


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var router_1 = __webpack_require__(2);
var newsCategory_model_1 = __webpack_require__(179);
var newsCategory_service_1 = __webpack_require__(25);
var NewsCategoryEditComponent = (function () {
    function NewsCategoryEditComponent(service, formBuilder, route) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.id = 0;
    }
    NewsCategoryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            'name': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            'description': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ]
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params["id"];
            if (_this.id > 0) {
                _this.service
                    .getSingle(_this.id)
                    .subscribe(function (data) { return _this.editForm.patchValue(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
    };
    NewsCategoryEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewsCategoryEditComponent.prototype.onSubmit = function () {
        var model = new newsCategory_model_1.NewsCategory();
        model.id = this.id;
        model.name = this.editForm.controls["name"].value;
        model.description = this.editForm.controls["description"].value;
        var res;
        if (this.id > 0) {
            var result = this.service.update(this.id, model).subscribe(function (data) { return res = data; });
        }
        else {
            var result = this.service.create(model).subscribe(function (data) { return res = data; });
        }
        if (res !== null) {
        }
    };
    return NewsCategoryEditComponent;
}());
NewsCategoryEditComponent = __decorate([
    core_1.Component({
        selector: "newsCategory-edit",
        template: __webpack_require__(103)
    }),
    __metadata("design:paramtypes", [newsCategory_service_1.NewsCategoryService, forms_1.FormBuilder, router_1.ActivatedRoute])
], NewsCategoryEditComponent);
exports.NewsCategoryEditComponent = NewsCategoryEditComponent;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(9);
var newsCategory_service_1 = __webpack_require__(25);
var index_1 = __webpack_require__(1);
var NewsCategoryListComponent = (function () {
    function NewsCategoryListComponent(newsCategoryService, titleService, rolesChecked) {
        this.newsCategoryService = newsCategoryService;
        this.titleService = titleService;
        this.rolesChecked = rolesChecked;
    }
    NewsCategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.titleService.setTitle("Категории");
        this.newsCategoryService
            .getAll()
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    NewsCategoryListComponent.prototype.parsePageable = function (model) {
        this.items = model;
    };
    NewsCategoryListComponent.prototype.delete = function (index) {
        this.newsCategoryService.delete(this.items[index].id).subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { });
        this.items.splice(index, 1);
    };
    return NewsCategoryListComponent;
}());
NewsCategoryListComponent = __decorate([
    core_1.Component({
        selector: "newsCategory-list",
        template: __webpack_require__(104)
    }),
    __metadata("design:paramtypes", [newsCategory_service_1.NewsCategoryService,
        platform_browser_1.Title,
        index_1.RolesCheckedService])
], NewsCategoryListComponent);
exports.NewsCategoryListComponent = NewsCategoryListComponent;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var News = (function () {
    function News() {
    }
    return News;
}());
exports.News = News;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(186));


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(27));
__export(__webpack_require__(190));
__export(__webpack_require__(188));
__export(__webpack_require__(189));
__export(__webpack_require__(191));
__export(__webpack_require__(12));


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(193));
__export(__webpack_require__(194));


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(195));


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var localStorage_service_1 = __webpack_require__(28);
var RolesCheckedService = (function () {
    function RolesCheckedService(localStorage) {
        var _this = this;
        this.localStorage = localStorage;
        this.checkedRoles = {
            isLogined: false,
            isEditor: false,
            isNewsmaker: false,
            isModerator: false,
            isMainModerator: false,
            isAdminAssistant: false,
            isSelf: function (userId) { return _this.isSelf(userId); }
        };
        this.checkRoles();
    }
    RolesCheckedService.prototype.checkRoles = function () {
        this.roles = this.localStorage.getRoles();
        this.checkedRoles.isLogined = false;
        if (!this.roles) {
            return this.checkedRoles;
        }
        ;
        this.checkedRoles.isLogined = true;
        this.checkEditor();
        this.checkNewsmaker();
        this.checkModerator();
        this.checkMainModerator();
        this.checkAdminAssistant();
        return this.checkedRoles;
    };
    RolesCheckedService.prototype.isUserInRole = function (role) {
        return this.checkRole(role);
    };
    RolesCheckedService.prototype.isSelf = function (authorId) {
        var userId = this.localStorage.getUserId();
        return (userId === authorId);
    };
    RolesCheckedService.prototype.checkEditor = function () {
        if (this.checkRole("NewsFull")) {
            this.checkedRoles.isEditor = true;
        }
    };
    RolesCheckedService.prototype.checkNewsmaker = function () {
        if (this.checkRole("NewsStart")) {
            this.checkedRoles.isNewsmaker = true;
        }
    };
    RolesCheckedService.prototype.checkModerator = function () {
        if (this.checkRole("UserStart")) {
            this.checkedRoles.isModerator = true;
        }
    };
    RolesCheckedService.prototype.checkMainModerator = function () {
        if (this.checkRole("UserFull")) {
            this.checkedRoles.isMainModerator = true;
        }
    };
    RolesCheckedService.prototype.checkAdminAssistant = function () {
        if (this.checkRole("AdminStart")) {
            this.checkedRoles.isAdminAssistant = true;
        }
    };
    RolesCheckedService.prototype.checkRole = function (role) {
        if (this.roles.find(function (x) { return x.toLowerCase() === role.toLowerCase(); })) {
            return true;
        }
        return false;
    };
    return RolesCheckedService;
}());
RolesCheckedService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [localStorage_service_1.LocalStorageService])
], RolesCheckedService);
exports.RolesCheckedService = RolesCheckedService;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(4);
var app_constants_1 = __webpack_require__(3);
var user_service_1 = __webpack_require__(29);
var index_1 = __webpack_require__(1);
var index_2 = __webpack_require__(53);
var index_3 = __webpack_require__(1);
var UserDetailComponent = (function () {
    function UserDetailComponent(configuration, storage, service, route, rolesChecked, roleGroupService, formBuilder, router) {
        this.configuration = configuration;
        this.storage = storage;
        this.service = service;
        this.route = route;
        this.rolesChecked = rolesChecked;
        this.roleGroupService = roleGroupService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.banDaysCount = 0;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.initRoleForm();
        this.initBanForm();
        this.sub = this.route.params.subscribe(function (params) {
            if (+params["id"]) {
                _this.service.getSingle(+params["id"])
                    .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
            }
            else {
                _this.router.navigate(["/user/list/1"]);
            }
        });
        if (this.roles.isAdminAssistant) {
            this.loadRoleGroups();
        }
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        var roleGroupId = this.roleForm.controls["roleGroupId"].value;
        this.service.updateRoleGroup(this.item.id, roleGroupId)
            .subscribe(function (data) {
            if (data) {
                _this.roleForm.patchValue(roleGroupId);
            }
        });
    };
    UserDetailComponent.prototype.onSubmitBan = function () {
        var _this = this;
        var banDaysCount = this.banForm.controls["banDaysCount"].value;
        this.service.ban(this.item.id, banDaysCount)
            .subscribe(function (data) {
            if (data) {
                var time = new Date();
                _this.item.lockoutEnd = new Date(time.setHours(time.getHours() + banDaysCount * 24 * 60 * 60));
                _this.banForm.controls["banDaysCount"].patchValue(null);
            }
        });
    };
    UserDetailComponent.prototype.onChangeAvatar = function (event) {
        var _this = this;
        var file = event.srcElement.files[0];
        if (file) {
            this.service.updateAvatar(file)
                .subscribe(function (result) { return _this.item.photo = result + "#" + Math.random(); }, function (error) { return console.log(error); }, function () { });
        }
    };
    UserDetailComponent.prototype.resetAvatar = function () {
        var _this = this;
        this.service.resetAvatar(this.item.id)
            .subscribe(function (result) { return _this.item.photo = result + "#" + Math.random(); }, function (error) { return console.log(error); }, function () { });
    };
    UserDetailComponent.prototype.unban = function () {
        var _this = this;
        this.service.unban(this.item.id)
            .subscribe(function (data) {
            if (data) {
                _this.item.lockoutEnd = null;
            }
        });
    };
    UserDetailComponent.prototype.writePm = function () {
        this.selectedUserId = this.item.id;
    };
    UserDetailComponent.prototype.closePmWindow = function (event) {
        this.selectedUserId = null;
    };
    UserDetailComponent.prototype.parse = function (item) {
        this.item = item;
        this.roleForm.patchValue(item);
    };
    UserDetailComponent.prototype.loadRoleGroups = function () {
        var _this = this;
        this.roleGroupService.getAll()
            .subscribe(function (data) { return _this.roleGroups = data; }, function (error) { return console.log(error); }, function () { });
    };
    UserDetailComponent.prototype.initRoleForm = function () {
        this.roleForm = this.formBuilder.group({
            'roleGroupId': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ]
        });
    };
    UserDetailComponent.prototype.initBanForm = function () {
        this.banForm = this.formBuilder.group({
            'banDaysCount': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    index_3.GlobalValidators.mustBeGreaterThanZero
                ])
            ]
        });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    core_1.Component({
        selector: "user-detail",
        template: __webpack_require__(114)
    }),
    __metadata("design:paramtypes", [app_constants_1.Configuration,
        index_1.LocalStorageService,
        user_service_1.UserService,
        router_1.ActivatedRoute,
        index_1.RolesCheckedService,
        index_2.RoleGroupService,
        forms_1.FormBuilder,
        router_1.Router])
], UserDetailComponent);
exports.UserDetailComponent = UserDetailComponent;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(8);
var router_1 = __webpack_require__(2);
var user_service_1 = __webpack_require__(29);
var userFilters_model_1 = __webpack_require__(203);
var index_1 = __webpack_require__(1);
var UserListComponent = (function () {
    function UserListComponent(userService, location, rolesChecked, route) {
        this.userService = userService;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.route = route;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.route.params.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
            _this.update();
        });
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserListComponent.prototype.writePm = function (index) {
        this.selectedUserId = index;
    };
    UserListComponent.prototype.closePmWindow = function (event) {
        this.selectedUserId = null;
    };
    UserListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = "user/list/" + this.page + "?";
        this.location.replaceState(newUrl);
    };
    ;
    UserListComponent.prototype.update = function () {
        var _this = this;
        var filters = new userFilters_model_1.UserFilters();
        filters.userName = this.userName;
        filters.page = this.page;
        this.userService
            .getAll(filters)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    UserListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        selector: "user-list",
        template: __webpack_require__(115)
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        common_1.Location,
        index_1.RolesCheckedService,
        router_1.ActivatedRoute])
], UserListComponent);
exports.UserListComponent = UserListComponent;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(59));
__export(__webpack_require__(207));
__export(__webpack_require__(205));
__export(__webpack_require__(204));
__export(__webpack_require__(30));


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Wish = (function () {
    function Wish() {
    }
    return Wish;
}());
exports.Wish = Wish;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(239);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(88);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(122);
__webpack_require__(212);
var angular2_universal_1 = __webpack_require__(31);
var core_1 = __webpack_require__(0);
var app_module_1 = __webpack_require__(137);
__webpack_require__(213);
if (true) {
    module["hot"].accept();
    module["hot"].dispose(function () { platform.destroy(); });
}
else {
    core_1.enableProdMode();
}
var platform = angular2_universal_1.platformUniversalDynamic();
var bootApplication = function () { platform.bootstrapModule(app_module_1.AppModule); };
if (document.readyState === "complete") {
    bootApplication();
}
else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery, module) {/*eslint-env browser*/
/*global __resourceQuery __webpack_public_path__*/

var options = {
  path: "/__webpack_hmr",
  timeout: 20 * 1000,
  overlay: true,
  reload: false,
  log: true,
  warn: true
};
if (true) {
  var querystring = __webpack_require__(120);
  var overrides = querystring.parse(__resourceQuery.slice(1));
  if (overrides.path) options.path = overrides.path;
  if (overrides.timeout) options.timeout = overrides.timeout;
  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
  if (overrides.reload) options.reload = overrides.reload !== 'false';
  if (overrides.noInfo && overrides.noInfo !== 'false') {
    options.log = false;
  }
  if (overrides.quiet && overrides.quiet !== 'false') {
    options.log = false;
    options.warn = false;
  }
  if (overrides.dynamicPublicPath) {
    options.path = __webpack_require__.p + options.path;
  }
}

if (typeof window === 'undefined') {
  // do nothing
} else if (typeof window.EventSource === 'undefined') {
  console.warn(
    "webpack-hot-middleware's client requires EventSource to work. " +
    "You should include a polyfill if you want to support this browser: " +
    "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools"
  );
} else {
  connect(window.EventSource);
}

function connect(EventSource) {
  var source = new EventSource(options.path);
  var lastActivity = new Date();

  source.onopen = handleOnline;
  source.onmessage = handleMessage;
  source.onerror = handleDisconnect;

  var timer = setInterval(function() {
    if ((new Date() - lastActivity) > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function handleOnline() {
    if (options.log) console.log("[HMR] connected");
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();
    if (event.data == "\uD83D\uDC93") {
      return;
    }
    try {
      processMessage(JSON.parse(event.data));
    } catch (ex) {
      if (options.warn) {
        console.warn("Invalid HMR message: " + event.data + "\n" + ex);
      }
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(function() { connect(EventSource); }, options.timeout);
  }

}

var reporter;
// the reporter needs to be a singleton on the page
// in case the client is being used by mutliple bundles
// we only want to report once.
// all the errors will go to all clients
var singletonKey = '__webpack_hot_middleware_reporter__';
if (typeof window !== 'undefined' && !window[singletonKey]) {
  reporter = window[singletonKey] = createReporter();
}

function createReporter() {
  var strip = __webpack_require__(121);

  var overlay;
  if (typeof document !== 'undefined' && options.overlay) {
    overlay = __webpack_require__(208);
  }


  var previousProblems = null;

  return {
    cleanProblemsCache: function () {
      previousProblems = null;
    },
    problems: function(type, obj) {
      if (options.warn) {
        var newProblems = obj[type].map(function(msg) { return strip(msg); }).join('\n');

        if (previousProblems !== newProblems) {
          previousProblems = newProblems;
          console.warn("[HMR] bundle has " + type + ":\n" + newProblems);
        }
      }
      if (overlay && type !== 'warnings') overlay.showProblems(type, obj[type]);
    },
    success: function() {
      if (overlay) overlay.clear();
    },
    useCustomOverlay: function(customOverlay) {
      overlay = customOverlay;
    }
  };
}

var processUpdate = __webpack_require__(209);

var customHandler;
var subscribeAllHandler;
function processMessage(obj) {
  switch(obj.action) {
    case "building":
      if (options.log) console.log("[HMR] bundle rebuilding");
      break;
    case "built":
      if (options.log) {
        console.log(
          "[HMR] bundle " + (obj.name ? obj.name + " " : "") +
          "rebuilt in " + obj.time + "ms"
        );
      }
      // fall through
    case "sync":
      if (obj.errors.length > 0) {
        if (reporter) reporter.problems('errors', obj);
      } else {
        if (reporter) {
          if (obj.warnings.length > 0) {
            reporter.problems('warnings', obj);
          } else {
            reporter.cleanProblemsCache();
          }
          reporter.success();
        }
        processUpdate(obj.hash, obj.modules, options);
      }
      break;
    default:
      if (customHandler) {
        customHandler(obj);
      }
  }

  if (subscribeAllHandler) {
    subscribeAllHandler(obj);
  }
}

if (module) {
  module.exports = {
    subscribeAll: function subscribeAll(handler) {
      subscribeAllHandler = handler;
    },
    subscribe: function subscribe(handler) {
      customHandler = handler;
    },
    useCustomOverlay: function useCustomOverlay(customOverlay) {
      if (reporter) reporter.useCustomOverlay(customOverlay);
    }
  };
}

/* WEBPACK VAR INJECTION */}.call(exports, "?path=%2F__webpack_hmr", __webpack_require__(211)(module)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(721);

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_1 = __webpack_require__(9);
var core_1 = __webpack_require__(0);
var compiler_1 = __webpack_require__(61);
exports.BROWSER_SANITIZATION_PROVIDERS = platform_browser_1.__platform_browser_private__.BROWSER_SANITIZATION_PROVIDERS;
exports.SharedStylesHost = platform_browser_1.__platform_browser_private__.SharedStylesHost;
exports.DomSharedStylesHost = platform_browser_1.__platform_browser_private__.DomSharedStylesHost;
exports.DomRootRenderer = platform_browser_1.__platform_browser_private__.DomRootRenderer;
exports.DomEventsPlugin = platform_browser_1.__platform_browser_private__.DomEventsPlugin;
exports.KeyEventsPlugin = platform_browser_1.__platform_browser_private__.KeyEventsPlugin;
exports.DomAdapter = platform_browser_1.__platform_browser_private__.DomAdapter;
exports.setRootDomAdapter = platform_browser_1.__platform_browser_private__.setRootDomAdapter;
exports.HammerGesturesPlugin = platform_browser_1.__platform_browser_private__.HammerGesturesPlugin;
exports.ViewUtils = core_1.__core_private__.ViewUtils;
exports.AnimationKeyframe = core_1.__core_private__.AnimationKeyframe;
exports.AnimationPlayer = core_1.__core_private__.AnimationPlayer;
exports.AnimationStyles = core_1.__core_private__.AnimationStyles;
exports.RenderDebugInfo = core_1.__core_private__.RenderDebugInfo;
exports.SelectorMatcher = compiler_1.__compiler_private__.SelectorMatcher;
exports.CssSelector = compiler_1.__compiler_private__.CssSelector;
var __empty = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = __empty;
//# sourceMappingURL=__private_imports__.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.8', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)*m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {
  XmlEntities: __webpack_require__(70),
  Html4Entities: __webpack_require__(69),
  Html5Entities: __webpack_require__(32),
  AllHtmlEntities: __webpack_require__(32)
};


/***/ },
/* 69 */
/***/ function(module, exports) {

var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'Aelig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'Oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'oelig', 'oelig', 'scaron', 'scaron', 'yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];

var alphaIndex = {};
var numIndex = {};

var i = 0;
var length = HTML_ALPHA.length;
while (i < length) {
    var a = HTML_ALPHA[i];
    var c = HTML_CODES[i];
    alphaIndex[a] = String.fromCharCode(c);
    numIndex[c] = a;
    i++;
}

/**
 * @constructor
 */
function Html4Entities() {}

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.decode = function(str) {
    if (str.length === 0) {
        return '';
    }
    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
        var chr;
        if (entity.charAt(0) === "#") {
            var code = entity.charAt(1).toLowerCase() === 'x' ?
                parseInt(entity.substr(2), 16) :
                parseInt(entity.substr(1));

            if (!(isNaN(code) || code < -32768 || code > 65535)) {
                chr = String.fromCharCode(code);
            }
        } else {
            chr = alphaIndex[entity];
        }
        return chr || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.decode = function(str) {
    return new Html4Entities().decode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encode = function(str) {
    var strLength = str.length;
    if (strLength === 0) {
        return '';
    }
    var result = '';
    var i = 0;
    while (i < strLength) {
        var alpha = numIndex[str.charCodeAt(i)];
        result += alpha ? "&" + alpha + ";" : str.charAt(i);
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encode = function(str) {
    return new Html4Entities().encode(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encodeNonUTF = function(str) {
    var strLength = str.length;
    if (strLength === 0) {
        return '';
    }
    var result = '';
    var i = 0;
    while (i < strLength) {
        var cc = str.charCodeAt(i);
        var alpha = numIndex[cc];
        if (alpha) {
            result += "&" + alpha + ";";
        } else if (cc < 32 || cc > 126) {
            result += "&#" + cc + ";";
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encodeNonUTF = function(str) {
    return new Html4Entities().encodeNonUTF(str);
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.prototype.encodeNonASCII = function(str) {
    var strLength = str.length;
    if (strLength === 0) {
        return '';
    }
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
Html4Entities.encodeNonASCII = function(str) {
    return new Html4Entities().encodeNonASCII(str);
};

module.exports = Html4Entities;


/***/ },
/* 70 */
/***/ function(module, exports) {

var ALPHA_INDEX = {
    '&lt': '<',
    '&gt': '>',
    '&quot': '"',
    '&apos': '\'',
    '&amp': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&'
};

var CHAR_INDEX = {
    60: 'lt',
    62: 'gt',
    34: 'quot',
    39: 'apos',
    38: 'amp'
};

var CHAR_S_INDEX = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
    '&': '&amp;'
};

/**
 * @constructor
 */
function XmlEntities() {}

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encode = function(str) {
    if (str.length === 0) {
        return '';
    }
    return str.replace(/<|>|"|'|&/g, function(s) {
        return CHAR_S_INDEX[s];
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encode = function(str) {
    return new XmlEntities().encode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.decode = function(str) {
    if (str.length === 0) {
        return '';
    }
    return str.replace(/&#?[0-9a-zA-Z]+;?/g, function(s) {
        if (s.charAt(1) === '#') {
            var code = s.charAt(2).toLowerCase() === 'x' ?
                parseInt(s.substr(3), 16) :
                parseInt(s.substr(2));

            if (isNaN(code) || code < -32768 || code > 65535) {
                return '';
            }
            return String.fromCharCode(code);
        }
        return ALPHA_INDEX[s] || s;
    });
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.decode = function(str) {
    return new XmlEntities().decode(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encodeNonUTF = function(str) {
    var strLength = str.length;
    if (strLength === 0) {
        return '';
    }
    var result = '';
    var i = 0;
    while (i < strLength) {
        var c = str.charCodeAt(i);
        var alpha = CHAR_INDEX[c];
        if (alpha) {
            result += "&" + alpha + ";";
            i++;
            continue;
        }
        if (c < 32 || c > 126) {
            result += '&#' + c + ';';
        } else {
            result += str.charAt(i);
        }
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encodeNonUTF = function(str) {
    return new XmlEntities().encodeNonUTF(str);
 };

/**
 * @param {String} str
 * @returns {String}
 */
XmlEntities.prototype.encodeNonASCII = function(str) {
    var strLenght = str.length;
    if (strLenght === 0) {
        return '';
    }
    var result = '';
    var i = 0;
    while (i < strLenght) {
        var c = str.charCodeAt(i);
        if (c <= 255) {
            result += str[i++];
            continue;
        }
        result += '&#' + c + ';';
        i++;
    }
    return result;
};

/**
 * @param {String} str
 * @returns {String}
 */
 XmlEntities.encodeNonASCII = function(str) {
    return new XmlEntities().encodeNonASCII(str);
 };

module.exports = XmlEntities;


/***/ },
/* 71 */
/***/ function(module, exports) {

module.exports = "<form name=\"loginForm1\" class=\"form-inline\" role=\"form\" style=\"margin-top: 8px;\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" [formControl]=\"loginForm.controls['userName']\" placeholder=\"Логин\" type=\"text\" />\r\n      </div>\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" [formControl]=\"loginForm.controls['password']\" placeholder=\"Пароль\" type=\"password\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <input type=\"submit\" [disabled]=\"!loginForm.valid\" value=\"Войти\" class=\"btn btn-default\" />\r\n    </div>\r\n</form>";

/***/ },
/* 72 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 top20\">\r\n    <form class=\"form-horizontal\" *ngIf=\"!result\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" role=\"form\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Логин</label>\r\n            <div class=\"col-md-10\">\r\n                <!--    <input type=\"text\" name=\"userName\" [(ngModel)]=\"item.username\" id=\"userName\" debounce=\"5000\" validation=\"remote:vm.userNameUnique():alt=Пользователь с таким логином уже существует|min_len:3|max_len:30|required\" />\r\n                -->  <input class=\"form-control\" formControlName=\"userName\" type=\"text\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Почтовый адрес</label>\r\n            <div class=\"col-md-10\">\r\n                <!-- <input type=\"email\" name=\"email\" [(ngModel)]=\"item.email\" id=\"email\" debounce=\"5000\" validation=\"remote:vm.emailUnique():alt=Пользователь с таким адресом уже существуетrequired|email|min_len:6\" />\r\n                -->  <input class=\"form-control\" formControlName=\"email\" type=\"email\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Пароль</label>\r\n            <div class=\"col-md-10\">\r\n                <input class=\"form-control\"  formControlName=\"password\" type=\"password\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Подтверждение пароля</label>\r\n            <div class=\"col-md-10\">\r\n                <input class=\"form-control\" formControlName=\"confirmPassword\" type=\"password\"/>\r\n            </div>\r\n        </div>\r\n        <!--div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Полное имя</label>\r\n            <div class=\"col-md-10\">\r\n                <input class=\"form-control\" [formControlName]=\"registerForm.controls['fullName']\" type=\"text\"/>\r\n            </div>\r\n        </!--div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Дата рождения</label>\r\n            <div class=\"col-md-10\">\r\n                <!-- <datepicker  class=\"form-control\" [formControlName]=\"registerForm.controls['birthday']\"></datepicker> \r\n                <!-- <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" validation=\"required\" name=\"birthday\"\r\n                           ng-readonly=\"true\" show-button-bar=\"false\"\r\n                           uib-datepicker-popup=\"dd/MMMM/yyyy\" [(ngModel)]=\"item.birthday\"\r\n                           is-open=\"vm.status.opened\" datepicker-options=\"vm.dateOptions\" close-text=\"Закрыть\"\r\n                           alt-input-formats=\"altInputFormats\"/>\r\n                    span class=\"input-group-btn va-top\">\r\n                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.open()\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r\n                    </span\r\n                </div> ->\r\n                <input class=\"form-control\" [formControlName]=\"registerForm.controls['birthday']\" type=\"text\"/>\r\n            </div>\r\n        </div-->\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-offset-2 col-md-10\">\r\n                <button class=\"btn btn-default\" [disabled]=\"!registerForm.valid\" type=\"submit\">Зарегистрироваться</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <span *ngIf=\"result\">Регистрация прошла успешно, пожалуйста, подтвердите регистрацию. Письмо отправлено на введенную вами почту.</span>\r\n</div>";

/***/ },
/* 73 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <h1 class=\"text-center\">Изменение пароля</h1>\r\n    <div class=\"col-md-12\">\r\n        <form class=\"form-horizontal\" [formGroup]=\"passwordForm\" (ngSubmit)=\"onSubmit(passwordForm.value)\" role=\"form\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Старый пароль</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" name=\"oldPassword\" [formControl]=\"passwordForm.controls['oldPassword']\" class=\"form-control\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Новый пароль</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" name=\"newPassword\" [formControl]=\"passwordForm.controls['newPassword']\" class=\"form-control\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Новый пароль</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" name=\"confirmPassword\" [formControl]=\"passwordForm.controls['confirmPassword']\" class=\"form-control\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                    <button class=\"btn btn-default\" [disabled]=\"!passwordForm.valid\" type=\"submit\">Изменить</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>";

/***/ },
/* 74 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <h1 class=\"text-center\">Забыли пароль?</h1>\r\n    <div class=\"col-md-12\">\r\n        <form class=\"form-horizontal\" name=\"forgotEmail\" role=\"form\" [formGroup]=\"forgotForm\" (ngSubmit)=\"onSubmit(forgotForm.value)\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"emailAddress\">Адрес электронной почты</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" id=\"emailAddress\" placeholder=\"\" [formControl]=\"forgotForm.controls['email']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                    <input type=\"submit\" class=\"btn btn-default\" [disabled]=\"!forgotForm.valid\" value=\"Отправить\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>";

/***/ },
/* 75 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <form class=\"form-horizontal\" name=\"resetForm\" role=\"form\" [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit(resetForm.value)\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n                <pre *ngIf=\"resetForm.errors\">{{resetForm.errors | json}}</pre>\r\n                <label class=\"col-md-2 control-label\">Адрес электронной почты</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" id=\"emailAddress\" placeholder=\"\" [formControl]=\"resetForm.controls['email']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Новый пароль</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"\" [formControl]=\"resetForm.controls['password']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">Подтверждение нового пароля</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" id=\"confirmPassword\" placeholder=\"\" [formControl]=\"resetForm.controls['confirmPassword']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                    <button class=\"btn btn-default\" [disabled]=\"!resetForm.valid\" type=\"submit\">Поменять пароль</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 76 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <h1 class=\"text-center\">Адрес электронной почты не подтвержден</h1>\r\n    <div class=\"col-md-12\">\r\n        <form class=\"form-horizontal\" name=\"unconfirmedForm\" role=\"form\" [formGroup]=\"unconfirmedForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"!finish\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"email\">Адрес электронной почты</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"\" [formControl]=\"unconfirmedForm.controls['email']\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                    <button type=\"submit\" [disabled]=\"!unconfirmedForm.valid\" class=\"btn btn-default\">Переслать</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div *ngIf=\"finish\">Письмо успешно отправлено</div>\r\n    </div>\r\n</div>";

/***/ },
/* 77 */
/***/ function(module, exports) {

module.exports = "<table class=\"table table-condensed table-striped table-responsive col-xs-12 overflowable\">\r\n    <thead>\r\n        <tr>\r\n            <th>#</th>\r\n            <th>Команда</th>\r\n            <th>И</th>\r\n            <th>В</th>\r\n            <th>Н</th>\r\n            <th>П</th>\r\n            <th>+/-</th>\r\n            <th>О</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody><tr><td>1</td><td>Ливерпуль\n</td><td>11</td><td>8</td><td>2</td><td>1</td><td>16</td><td>26</td></tr>\r\n<tr><td>2</td><td>Челси\n</td><td>11</td><td>8</td><td>1</td><td>2</td><td>17</td><td>25</td></tr>\r\n<tr><td>3</td><td>Манчестер Сити\n</td><td>11</td><td>7</td><td>3</td><td>1</td><td>15</td><td>24</td></tr>\r\n<tr><td>4</td><td>Арсенал\n</td><td>11</td><td>7</td><td>3</td><td>1</td><td>13</td><td>24</td></tr>\r\n<tr><td>5</td><td>Тоттенхэм\n</td><td>11</td><td>5</td><td>6</td><td>0</td><td>9</td><td>21</td></tr>\r\n<tr><td>6</td><td>Манчестер Юнайтед\n</td><td>11</td><td>5</td><td>3</td><td>3</td><td>3</td><td>18</td></tr>\r\n<tr><td>7</td><td>Эвертон\n</td><td>11</td><td>5</td><td>3</td><td>3</td><td>2</td><td>18</td></tr>\r\n<tr><td>8</td><td>Уотфорд\n</td><td>11</td><td>4</td><td>3</td><td>4</td><td>-4</td><td>15</td></tr>\r\n<tr><td>9</td><td>Бернли\n</td><td>11</td><td>4</td><td>2</td><td>5</td><td>-4</td><td>14</td></tr>\r\n<tr><td>10</td><td>Саутгемптон\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>0</td><td>13</td></tr>\r\n<tr><td>11</td><td>Вест Бромвич\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>-3</td><td>13</td></tr>\r\n<tr><td>12</td><td>Сток Сити\n</td><td>11</td><td>3</td><td>4</td><td>4</td><td>-5</td><td>13</td></tr>\r\n<tr><td>13</td><td>Борнмут\n</td><td>11</td><td>3</td><td>3</td><td>5</td><td>-3</td><td>12</td></tr>\r\n<tr><td>14</td><td>Лестер\n</td><td>11</td><td>3</td><td>3</td><td>5</td><td>-5</td><td>12</td></tr>\r\n<tr><td>15</td><td>Мидлсбро\n</td><td>11</td><td>2</td><td>5</td><td>4</td><td>-2</td><td>11</td></tr>\r\n<tr><td>16</td><td>Кристал Пэлас\n</td><td>11</td><td>3</td><td>2</td><td>6</td><td>-3</td><td>11</td></tr>\r\n<tr><td>17</td><td>Вест Хэм\n</td><td>11</td><td>3</td><td>2</td><td>6</td><td>-9</td><td>11</td></tr>\r\n<tr><td>18</td><td>Халл\n</td><td>11</td><td>3</td><td>1</td><td>7</td><td>-14</td><td>10</td></tr>\r\n<tr><td>19</td><td>Суонси\n</td><td>11</td><td>1</td><td>2</td><td>8</td><td>-11</td><td>5</td></tr>\r\n<tr><td>20</td><td>Сандерленд\n</td><td>11</td><td>1</td><td>2</td><td>8</td><td>-12</td><td>5</td></tr>\r\n</tbody></table>";

/***/ },
/* 78 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid navbar navbar-inverse navbar-fixed-top \">\r\n    <ul class=\"nav navbar-nav col-xs-3 col-sm-3 list-inline\">\r\n        <li><a id=\"back-top\" href=\"#\" style=\"display: none;\">Вверх</a></li>\r\n        <li class=\"divider\"></li>\r\n        <li *ngIf=\"roles.isLogined\">\r\n            <a [routerLink]=\"['/pm']\"><span class=\"glyphicon glyphicon-envelope\"></span> Читать л/с <!--(<span ng-bind=\"vm.unreadPmCount\"></span>)--></a>\r\n        </li>\r\n        <li class=\"divider\"></li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"!roles.isLogined\">\r\n            <account-signin></account-signin>\r\n        </li>\r\n        <li *ngIf=\"!roles.isLogined\">\r\n            <a [routerLink]=\"['/forgotPassword']\"><span class=\"glyphicon glyphicon-question-sign\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Забыли пароль?\"></span></a>\r\n        </li>\r\n        <li *ngIf=\"!roles.isLogined\">\r\n            <a [routerLink]=\"['/signup']\">Регистрация</a>\r\n        </li>\r\n        <li *ngIf=\"roles.isLogined\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <!--<li>\r\n                    <a ui-sref=\"userInfo({id: vm.userId()})\" class=\"padding0\">\r\n                        <img class=\"nav-avatar\" ng-src=\"{$root.userImage}}\"/>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a ui-sref=\"userInfo({id: vm.userId()})\">Мой профиль</a>\r\n                </li>-->\r\n                <li>\r\n                    <a (click)=\"logout()\">Выйти</a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"col-xs-12 col-sm-12 top50\">\r\n    <header class=\"navbar navbar-default navbar-static-top row\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a [routerLink]=\"['/']\" class=\"navbar-brand\">Название сайта</a>\r\n        </div>\r\n        <div class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a [routerLink]=\"['/']\">Главная</a></li>\r\n                <!-- @if (User.IsInRole(\"AdminFull\"))\r\n                {\r\n                <li> @Html.ActionLink(CommonMessages.Roles, \"Index\", \"Role\") </li>\r\n                }*@-->\r\n                <li> <a [routerLink]=\"['/forum']\">Форум</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a [routerLink]=\"['/news/list', 1]\" class=\"dropdown-toggle\" data-toggle=\"\">Новости<b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li *ngIf=\"roles.isNewsmaker\"><a [routerLink]=\"['/news', 0, 'edit']\">Добавить</a></li>\r\n                        <li><a [routerLink]=\"['/newsCategory']\">Категории</a></li>\r\n                    </ul>\r\n                </li>\r\n                <!--li class=\"dropdown\">\r\n                    <a ui-sref=\"blog()\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"\">Блоги<b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <!--<li ng-if=\"vm.isAuthor()\"><a ui-sref=\"blogEdit()\">Добавить</a></li>--\r\n                        <li><a ui-sref=\"blogCategories()\">Категории</a></li>\r\n                    </ul>\r\n                </li>-->\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"\">ФК Ливерпуль<b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a [routerLink]=\"['/clubHistory']\">История</a></li>\r\n                        <li><a [routerLink]=\"['/aboutClub']\">О Клубе</a></li>\r\n                        <li><a [routerLink]=\"['/coachTeam']\">Тренерский штаб</a></li>\r\n                        <li><a [routerLink]=\"['/squad']\">Cостав</a></li>\r\n                    </ul>\r\n                </li>          \r\n                      <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"\">Сезон<b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a [routerLink]=\"['/calendar']\">Календарь</a></li>\r\n                        <li><a [routerLink]=\"['/season/eplTable']\">Полная таблица АПЛ</a></li>\r\n                        <li><a [routerLink]=\"['/player/statistics']\">Статистика игроков</a></li>\r\n                    </ul>\r\n                </li>\r\n\r\n                <li class=\"dropdown\">\r\n                    <!-- <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"\">Пользователи <b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n\r\n                    <li-->\r\n                    <a [routerLink]=\"['/user/list', 1]\">Пользователи</a>\r\n                    <!--/li>\r\n                    </ul-->\r\n                </li>\r\n                <li> <a [routerLink]=\"['/materialComment']\">Комментарии</a></li>\r\n                <li> <a *ngIf=\"roles.isNewsmaker || roles.isAuthor\" [routerLink]=\"['/image']\">Изображения</a></li>\r\n                <li> <a [routerLink]=\"['/club']\">Клубы</a></li>\r\n                <li> <a [routerLink]=\"['/match']\">Матчи</a></li>\r\n                <li> <a [routerLink]=\"['/rules']\"><span class=\"text-danger\">Правила</span></a></li>\r\n                <li class=\"bg-success\"> <a [routerLink]=\"['/wish']\"><span class=\"text-info\">Пожелания</span></a></li>\r\n            </ul>\r\n        </div>\r\n        <!--<div class=\"col-xs-12 col-sm-12\">\r\n            temporary\r\n            <span ng-bind=\"$root.roles\"></span>\r\n        </div>-->\r\n    </header>\r\n    <div class=\"body-content row\">\r\n        <!--<breadcrumb></breadcrumb>-->\r\n        <div class=\"col-xs-12 col-sm-push-3 col-sm-6 container-fluid\" style=\"background-color: #f5deb3\">\r\n            <div class=\"\">\r\n                <!--<uib-alert class=\"row\" ng-repeat=\"alert in $root.alerts\" dismiss-on-timeout=\"5000\" type=\"{alert.type}}\" close=\"closeAlert($index)\" ng-bind=\"alert.msg\"></uib-alert>-->\r\n                <div class=\"\">\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-6 col-sm-pull-6 col-sm-3 container-fluid\">\r\n            <section class=\"col-md- alert-info row\">\r\n                <h2>Эксетер </h2>\r\n                <div class=\"col-md-6\">\r\n                    <img src=\"https://upload.wikimedia.org/wikipedia/ru/f/f7/Exeter_City_Logo.png\" />\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <span style=\"text-align: center; font-size: 45pt\">3:0</span>\r\n                </div>\r\n            </section>\r\n            <section class=\"col-md- alert-danger row\">\r\n                <div class=\"col-md-12\"> Лучший игрок матча с Эксетером </div>\r\n                <div styleclass=\"col-md-12\">\r\n                    <img src=\"http://www.myliverpool.ru/images/Players/Squad12-13/Joe_Allen.png\" />\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    Джо Аллен\r\n                </div>\r\n            </section>\r\n            <section class=\"row\">\r\n                <mini-chat></mini-chat>\r\n            </section>\r\n        </div>\r\n        <right-sidebar></right-sidebar>\r\n    </div>\r\n    <hr />\r\n    <footer class=\"bottom container-fluid\">\r\n        <p>&copy; @DateTime.Now.Year - @CommonMessages.SiteTitleAddress</p>\r\n    </footer>\r\n</div>";

/***/ },
/* 79 */
/***/ function(module, exports) {

module.exports = "<div class=\"block\">\r\n    <div class=\"block-top\">\r\n    </div>\r\n    <div class=\"blocktitle\">\r\n        Мини-чат\r\n    </div>\r\n    <div class=\"blockcontent alert-success\">\r\n        <div class=\"blockcontent-inside\">\r\n            <div class=\"chatMessage-block\" style=\"white-space: normal\">\r\n                <div  style=\"padding: 0 4px 5px 2px; margin-bottom: 3px;\" *ngFor=\"let message of items\">\r\n                    <div style=\"float: right; font-size: 8px;\" [textContent]=\"message.additionTime | date:'medium'\"></div>\r\n                    <div style=\"text-align: left;\">\r\n                        <a [routerLink]=\"['/user', message.authorId]\" [textContent]=\"message.authorUserName\"><img alt=\"\" src=\"http://s1.ucoz.net/img/icon/profile.png\" width=\"13\" border=\"0\" style=\"vertical-align: -2px\"></a>\r\n                    </div>\r\n                    <div class=\"cMessage\" style=\"text-align: left;\" [textContent]=\"message.message\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <form *ngIf=\"roles.isLogined\" class=\"form-horizontal\" name=\"messageForm\" role=\"form\" [formGroup]=\"messageForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                        <div class=\"checkbox\">\r\n                            <label class=\"control-label\">\r\n                                <input class=\"\" name=\"message\" formControlName=\"message\" type=\"text\" />\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-10\">\r\n                        <button type=\"submit\" [disabled]=\"!messageForm.valid\" class=\"btn btn-default\">Добавить</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n                <!--<script type=\"text/javascript\">\r\n        function sbtFrmMC991(f){$('#mchatBtn').css({display:'none'});$('#mchatAjax').css({display:''});_uPostForm('MCaddFrm',{type:'POST',url:'/mchat/?879107719.957613'});}\r\n        function countMessLength(){var rst = 500-$('#mchatMsgF').val().length;if (rst<0){rst=0;$('#mchatMsgF').val($('#mchatMsgF').val().substr(0,500));}$('#jeuwu28').html(rst);}\r\n        var tID7174=-1;var tAct7174=false;\r\n        function setT7174(s){var v=parseInt(s.options[s.selectedIndex].value);document.cookie=\"mcrtd=\"+s.selectedIndex+\"; path=/\";if(tAct7174){clearInterval(tID7174);tAct7174=false;}if(v>0){tID7174=setInterval(\"document.getElementById('mchatIfm2').src='/mchat/?'+Math.random();\",v*1000);tAct7174=true;}}\r\n        function initSel7174() {var res=document.cookie.match(/(\\W|^)mcrtd=([0-9]+)/);if(res){s=$(\"#mchatRSel\")[0];;s.selectedIndex=parseInt(res[2]);setT7174(s);}$(\"#mchatMsgF\").bind(\"keydown\",function(e){if(e.keyCode==13 && e.ctrlKey && !e.shiftKey){e.preventDefault();sbtFrmMC991();}})}\r\n                    </script>\r\n                    <form style=\"margin:0;padding:0;\" id=\"MCaddFrm\" onsubmit=\"sbtFrmMC991();return false;\">\r\n\r\n                        <table border=\"0\" cellpadding=\"1\" cellspacing=\"1\" width=\"100%\">\r\n                            <tbody>\r\n                            <tr>\r\n                                <td><select id=\"mchatRSel\" onchange=\"setT7174(this);\" class=\"mchat\" title=\"Автообновление\" style=\"font-size:7pt;\"><option value=\"0\">--</option><option value=\"15\">15 сек</option><option value=\"30\">30 сек</option><option value=\"60\">1 мин</option><option value=\"120\">2 мин</option></select></td>\r\n                                <td width=\"70%\" align=\"right\">\r\n                                    <a href=\"javascript://\" rel=\"nofollow\" onclick=\"document.getElementById('mchatIfm2').src='/mchat/?'+Math.random();return false;\" title=\"Обновить\"><img alt=\"\" border=\"0\" align=\"absmiddle\" src=\"http://s1.ucoz.net/img/fr/mcr.gif\" width=\"13\" height=\"15\"></a>\r\n                                    &nbsp;<a href=\"javascript://\" rel=\"nofollow\" onclick=\"new _uWnd('Sml',' ',-250,-350,{autosize:0,closeonesc:1,resize:0},{url:'/index/35-0-2'});return false;\" title=\"Вставить смайл\"><img alt=\"\" border=\"0\" align=\"absmiddle\" src=\"http://s1.ucoz.net/img/fr/mcs.gif\" width=\"13\" height=\"15\"></a>\r\n                                    &nbsp;<a href=\"javascript://\" rel=\"nofollow\" onclick=\"window.open('/index/17','cbbcodes','scrollbars=1,width=550,height=450,left=0,top=0');return false;\" title=\"BB-Коды\"><img alt=\"\" border=\"0\" align=\"absmiddle\" src=\"http://s1.ucoz.net/img/fr/mcb.gif\" width=\"13\" height=\"15\"></a>\r\n                                    &nbsp;<a href=\"javascript://\" rel=\"nofollow\" onclick=\"window.open('/mchat/0-1','mchatCtrl','scrollbars=1,width=550,height=550,left=0,top=0');return false;\" title=\"Управление сообщениями\"><img alt=\"\" border=\"0\" align=\"absmiddle\" src=\"http://s1.ucoz.net/img/fr/mcm.gif\" width=\"15\" height=\"15\"></a>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n                        <table border=\"0\" cellpadding=\"1\" cellspacing=\"1\" width=\"100%\">\r\n                            <tbody>\r\n                            <tr>\r\n                                <td width=\"95%\" rowspan=\"2\"><textarea name=\"mcmessage\" class=\"mchat\" id=\"mchatMsgF\" title=\"Сообщение\" onkeyup=\"countMessLength();\" onfocus=\"countMessLength();\" style=\"height:40px;width:100%;resize:none;\"></textarea></td>\r\n                                <td align=\"center\" valign=\"top\"><div style=\"font-size:10px;\"><b id=\"jeuwu28\">500</b></div></td>\r\n                            </tr>\r\n                            <tr><td align=\"center\" valign=\"bottom\"><div style=\"width:30px\"><input type=\"submit\" value=\"OK\" class=\"mchat\" id=\"mchatBtn\" style=\"width:30px;\"><img alt=\"\" style=\"display:none;\" id=\"mchatAjax\" src=\"/.s/img/fr/ajax3.gif\" border=\"0\" width=\"16\"></div></td></tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n                        <input type=\"hidden\" name=\"numa\" id=\"numa832\" value=\"0\"><input type=\"hidden\" name=\"a\" value=\"18\"><input type=\"hidden\" id=\"ajaxFlag\" name=\"ajax\" value=\"1\">\r\n                    </form>\r\n                    <script type=\"text/javascript\">initSel7174();</script>-->\r\n</div>\r\n    </div>\r\n    <div class=\"blockbottom\">\r\n    </div>\r\n</div>";

/***/ },
/* 80 */
/***/ function(module, exports) {

module.exports = "<form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm.value)\">\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Соперник</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" name=\"title\" formControlName=\"name\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 col-sm-2\">\r\n            <img class=\"avatar\" src=\"{{editForm?.controls['logo'].value}}\" />\r\n        </div><div class=\"col-xs-10 col-sm-10\">\r\n                  <input formControlName=\"logo\" novalidate readonly />\r\n       <!--     <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" [disabled]=\"!editForm.controls['englishName'].valid\"/>-->\r\n            <button type=\"button\" [hidden]=\"!this.uploader?.queue\" (click)=\"upload()\">Загрузить</button>\r\n        </div>\r\n</div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Название клуба на английском</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" name=\"title\" formControlName=\"englishName\"/>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Стадион</label>\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control\" name=\"title\" formControlName=\"stadium\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <button type=\"submit\" [disabled]=\"!editForm.valid\" class=\"btn btn-default\">Сохранить</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n";

/***/ },
/* 81 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <div class=\"btn-group\">\r\n        <form class=\"form-inline btn-block\">\r\n            <!--<div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.typeId\"\r\n                        ng-options=\"type.id as type.name for type in vm.types\" ng-change=\"vm.changeTypeId()\"></select>\r\n            </div>--\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" ng-model=\"vm.filterText\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByText()\" placeholder=\"Поиск в тексте пожеланий\" /> <!--todo magic number\r\n            </div>-->\r\n            <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/club', 0, 'edit']\">Добавить</button>\r\n        </form>\r\n    </div>\r\n    <div class=\"top20\" *ngFor=\"let item of items; let i = index;\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">\r\n                    <a [routerLink]=\"['/club', item.id, 'edit']\"><span [textContent]=\"item.name\"></span></a>\r\n                    <span class=\"col-xs-1 col-sm-1 pull-right\">\r\n                        <a (click)=\"showDeleteModal(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div [textContent]=\"item.englishName\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <img class=\"avatar\" src=\"{{item.logo}}\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <pagination *ngIf=\"items\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 82 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12\">\r\n    <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit(commentForm.value)\">\r\n        <div class=\"col-md-12\" *ngIf=\"roles.isLogined\">\r\n            <div class=\"col-md-12\">\r\n                <textarea mark-it-up class=\"col-md-offset-2 col-md-8\" rows=\"6\" name=\"message\" formControlName=\"message\"></textarea>\r\n            </div>\r\n            <div class=\"\">\r\n                <button class=\"btn btn-primary center-block\" [disabled]=\"!commentForm.valid\" type=\"submit\">Добавить</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ },
/* 83 */
/***/ function(module, exports) {

module.exports = "<table class=\"gTable\">\r\n    <tbody *ngFor=\"let section of items\">\r\n    <tr *ngIf=\"section.subsections.length > 0\"> <td class=\"gTableTop\" colspan=\"5\"><div style=\"float:right\" class=\"gTopCornerRight\"></div><a class=\"catLink\" href=\"/forum/1\" [textContent]=\"section.name\"></a></td></tr>\r\n    <tr *ngIf=\"section.subsections.length > 0\"><td width=\"5%\" class=\"gTableSubTop\">&nbsp;</td><td class=\"gTableSubTop\">Форум</td><td width=\"8%\" class=\"gTableSubTop\" align=\"center\">Темы</td><td width=\"8%\" class=\"gTableSubTop\" align=\"center\">Ответы</td><td width=\"30%\" class=\"gTableSubTop\">Обновления</td></tr>\r\n        \r\n    <tr *ngFor=\"let subsection of section.subsections\">  \r\n          <td class=\"forumIcoTd\" align=\"center\">\r\n                <img alt=\"\" style=\"margin:0;padding:0;vertical-align:middle;border:0;max-width:60px;max-height:60px;\" src=\"http://www.myliverpool.ru/images/ico/ava_ico.php.jpg\" title=\"Нет новых сообщений\">\r\n            </td>\r\n            <td class=\"forumNameTd\">\r\n                <a class=\"forum\" [routerLink]=\"['/forum', subsection.id]\">\r\n                    <span [textContent]=\"subsection.name\"></span></a>\r\n                <div class=\"forumDescr\" [textContent]=\"subsection.description\"></div>\r\n            </td>\r\n            <td class=\"forumThreadTd\" align=\"center\"[textContent]=\"subsection.themesCount\"></td>\r\n            <td class=\"forumPostTd\" align=\"center\">-</td>\r\n            <td class=\"forumLastPostTd\">\r\n\r\n                <script type=\"text/javascript\">document.write('<a title=\"К последнему сообщению\" class=\"forumLastPostLink\" hr'+'ef=\"/forum/5-1400-0-17\">Среда, 19.10.2016, 13:37:37</a>')</script><a title=\"К последнему сообщению\" class=\"forumLastPostLink\" href=\"/forum/5-1400-0-17\">Среда, 19.10.2016, 13:37:37</a>\r\n                <script type=\"text/javascript\">document.write('<a hr' + 'ef=\"/forum/5-1400-0-17-1\"><img alt=\"\" style=\"margin:0;padding:0;vertical-align:middle;border:0;max-width:60px;max-height:60px;\" title=\"К первому непрочитанному сообщению\" src=\"http://myliverpool.ru/.s/img/fr/ic/2/lastpost.gif\" /></a>')</script><a href=\"/forum/5-1400-0-17-1\"><img alt=\"\" style=\"margin:0;padding:0;vertical-align:middle;border:0;max-width:60px;max-height:60px;\" title=\"К первому непрочитанному сообщению\" src=\"http://myliverpool.ru/.s/img/fr/ic/2/lastpost.gif\"></a>\r\n                <br>Тема: <a class=\"forumLastPostLink\" href=\"/forum/5-1400-1\">Брендан Роджерс</a>\r\n                <br>Сообщение от: <span class=\"lastPostUser\"><a class=\"lastPostUserLink\" href=\"javascript://\" rel=\"nofollow\" onclick=\"window.open('/index/8-0-icebergstollikcs','up67','scrollbars=1,top=0,left=0,resizable=1,width=680,height=350');return false;\">icebergstollikcs</a></span>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<!--div class=\"col-md-12\">\r\n    <div class=\"container-fluid\" *ngFor=\"let section of items\">\r\n        <div class=\"panel panel-danger\" *ngIf=\"section.subsections.length > 0 || roles.isAdminAssistant\">\r\n            <div class=\"panel-heading\">\r\n                <span [textContent]=\"section.name\"></span>\r\n                <span *ngIf=\"roles.isAdminAssistant\">\r\n                    <a [routerLink]=\"['/forum', 0, 'edit']\">Добавить подсекцию</a>\r\n                    <a class=\"pull-right\" [hidden]=\"section.subsections.length != 0\" ng-click=\"vm.removeSection($index)\">\r\n                        <span class=\"glyphicon glyphicon-remove\">\r\n                        </span>\r\n                    </a>\r\n                </span>\r\n            </div>\r\n            <!--div class=\"panel-body\"></!--div>->\r\n            <ul class=\"list-group\" *ngFor=\"let subsection of section.subsections\">\r\n                <li class=\"list-group-item list\">\r\n                    <a [routerLink]=\"['/forum', subsection.id]\">\r\n                        <span [textContent]=\"subsection.name\"></span>\r\n                        <span class=\"small\" [textContent]=\"subsection.description\"></span>\r\n                    </a>\r\n                    <span class=\"pull-right\">\r\n                        <a [routerLink]=\"['/forum', subsection.id, 'edit']\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <a ng-click=\"vm.addSection()\">Добавить секцию</a>\r\n\r\n</!--div>\r\n\r\n<script type=\"text/ng-template\" id=\"addSection.html\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">@CommonMessages.AddSection</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form class=\"form-horizontal\" name=\"addSection\" role=\"form\">    \r\n            <div class=\"form-group\">\r\n                <label for=\"newSectionName\" class=\"col-md-2 control-label\">@ColonsMessages.SectionName</label>\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"text\" name=\"newSectionName\" ng-model=\"vm.sectionName\" validation=\"required\" class=\"form-control\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" ng-disabled=\"addSection.$invalid\" type=\"button\" ng-click=\"vm.ok()\">@CommonMessages.Add</button>\r\n        <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">@CommonMessages.Cancel</button>\r\n    </div>\r\n</script>\r\n\r\n<script type=\"text/ng-template\" id=\"modalDeleteConfirmation.html\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">@CommonMessages.DeleteConfirmation</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        @CommonMessages.Delete?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.ok()\">@CommonMessages.Delete</button>\r\n        <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">@CommonMessages.Cancel</button>\r\n    </div>\r\n</script>\r\n    -->";

/***/ },
/* 84 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12\">\r\n    <form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm.value)\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\">Секция:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <select class=\"form-control\" name=\"categoryId\" formControlName=\"sectionId\">\r\n                    <option *ngFor=\"let section of forumSections\" value=\"{{section.id}}\">{{section.name}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\">Имя:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"name\" formControlName=\"name\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\">Описание:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"description\" formControlName=\"description\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <button type=\"submit\" [disabled]=\"!editForm.valid\" class=\"btn btn-default\">Сохранить</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 85 */
/***/ function(module, exports) {

module.exports = "<table border=\"0\" width=\"100%\" bgcolor=\"#FFFFFF\" cellspacing=\"1\" cellpadding=\"0\" class=\"gTable\" *ngIf=\"item\">\r\n    <tbody>\r\n    <tr><td class=\"gTableTop\" colspan=\"7\" [textContent]=\"item.name\"><div style=\"float:right\" class=\"gTopCornerRight\"></div><div id=\"subscribe\">[ <a href=\"javascript://\" onclick=\"subscribe(this);return false;\" class=\"subscribe_forum\">Подписаться на форум</a> ]</div></td></tr>\r\n    <tr><td width=\"8%\" colspan=\"2\" class=\"gTableSubTop\">&nbsp;</td><td class=\"gTableSubTop\" align=\"left\"><a href=\"javascript://\" rel=\"nofollow\" onclick=\"window.location.href='/forum/5-0-1-0-1';return false;\" class=\"topSortLink\">Тема</a></td><td width=\"7%\" class=\"gTableSubTop\" align=\"center\"><a href=\"javascript://\" rel=\"nofollow\" onclick=\"window.location.href='/forum/5-0-1-0-4';return false;\" class=\"topSortLink\">Ответы</a></td><td width=\"6%\" class=\"gTableSubTop\" align=\"center\"><a href=\"javascript://\" rel=\"nofollow\" onclick=\"window.location.href='/forum/5-0-1-0-6';return false;\" class=\"topSortLink\">Просмотры</a></td><td width=\"14%\" class=\"gTableSubTop\" align=\"center\"><a href=\"javascript://\" rel=\"nofollow\" onclick=\"window.location.href='/forum/5-0-1-0-7';return false;\" class=\"topSortLink\">Автор темы</a></td><td width=\"21%\" class=\"gTableSubTop\" align=\"left\"><a href=\"javascript://\" rel=\"nofollow\" onclick=\"window.location.href='/forum/5-0-1-0-9';return false;\" class=\"topSortLink\">Обновления</a><span class=\"sortArrDown\">v</span></td></tr>\r\n    <tr><td class=\"threadsType\" colspan=\"7\">Важные темы</td></tr>\r\n    <!--tr >\r\n    <td class=\"threadIcoTd\" align=\"center\" width=\"4%\">\r\n        <img alt=\"\" style=\"margin:0;padding:0;vertical-align:middle;border:0;max-width:60px;max-height:60px;\" src=\"/.s/img/fr/ic/2/f_norm_nonew.gif\" title=\"Нет новых сообщений\">\r\n    </td>\r\n    <td class=\"threadIcoTd\" align=\"center\" width=\"4%\">\r\n        <img alt=\"\" style=\"margin:0;padding:0;vertical-align:middle;border:0;max-width:60px;max-height:60px;\" src=\"/.s/img/fr/ic1/poll.gif\" title=\"Тема - опрос\">\r\n    </td>\r\n    <td class=\"threadNametd\">\r\n        <a class=\"threadPinnedLink\" href=\"/forum/5-1991-1\">Рубин Казань - Ливеруль 5 ноября 2015</a>\r\n        <span class=\"postpSwithces\">[ <a class=\"postPSwithcesLink\" href=\"/forum/5-1991-1\">1</a>  <a class=\"postPSwithcesLink\" href=\"/forum/5-1991-2\">2</a> ]</span>\r\n        <a class=\"modBut\" href=\"javascript://\" rel=\"nofollow\" onclick=\"new _uWnd('Et','Изменить/переместить тему',-440,-150,{autosize:1,closeonesc:1,resize:1,align:'left'},{url:'/forum/5-1991-0-20-1'});return false;\" title=\"Изменить/переместить тему\"><img alt=\"\" border=\"0\" align=\"absmiddle\" src=\"/.s/img/fr/eb.gif\" width=\"12\" height=\"13\"></a>\r\n        <a class=\"modBut\" href=\"javascript://\" rel=\"nofollow\" onclick=\"thdel('5','1991');return false;\" title=\"Удалить тему\"><img alt=\"\" border=\"0\" id=\"dbth1991\" align=\"absmiddle\" src=\"/.s/img/fr/db.gif\" width=\"10\" height=\"13\"></a>\r\n    </td>\r\n\r\n    <td class=\"threadPostTd\" align=\"center\">24</td>\r\n    <td class=\"threadViewTd\" align=\"center\">8539</td>\r\n    <td class=\"threadAuthTd\" align=\"center\"><span class=\"threadAuthor\"><a class=\"threadAuthorLink\" href=\"javascript://\" rel=\"nofollow\" onclick=\"window.open('/index/8-1','up1','scrollbars=1,top=0,left=0,resizable=1,width=680,height=350');return false;\">XaNDeR</a></span></td>\r\n    <td class=\"threadLastPostTd\">\r\n        <script type=\"text/javascript\">document.write('<a title=\"К последнему сообщению\" class=\"forumLastPostLink\" hr'+'ef=\"/forum/5-1991-0-17\">09.02.2016, 17:45:15</a>')</script><a title=\"К последнему сообщению\" class=\"forumLastPostLink\" href=\"/forum/5-1991-0-17\">09.02.2016, 17:45:15</a>\r\n        <script type=\"text/javascript\">document.write('<a hr'+'ef=\"/forum/5-1991-0-17-1\"><img alt=\"\" style=\"margin:0;padding:0;vertical-align:middle;border:0;max-width:60px;max-height:60px;\" title=\"К первому непрочитанному сообщению\" src=\"/.s/img/fr/ic/2/lastpost.gif\" /></a>')</script><a href=\"/forum/5-1991-0-17-1\"><img alt=\"\" style=\"margin:0;padding:0;vertical-align:middle;border:0;max-width:60px;max-height:60px;\" title=\"К первому непрочитанному сообщению\" src=\"/.s/img/fr/ic/2/lastpost.gif\"></a>\r\n        <br>Сообщение от: <span class=\"lastPostGuest\"><a class=\"lastPostUserLink\" href=\"javascript://\" rel=\"nofollow\" onclick=\"window.open('/index/8-0-LSLiv52','up27','scrollbars=1,top=0,left=0,resizable=1,width=680,height=350');return false;\">LSLiv52</a></span>\r\n    </td>\r\n    </tr-->\r\n\r\n    <tr><td class=\"threadsType\" colspan=\"7\">Темы форума</td></tr>\r\n    <tr *ngFor=\"let theme of item.themes.list\">\r\n        <td class=\"threadIcoTd\" align=\"center\" width=\"4%\">\r\n            <img alt=\"\" style=\"margin:0;padding:0;vertical-align:middle;border:0;max-width:60px;max-height:60px;\" src=\"http://www.myliverpool.ru/.s/img/fr/ic/2/f_norm_nonew.gif\" title=\"Нет новых сообщений\">\r\n        </td>\r\n        <td class=\"threadIcoTd\" align=\"center\" width=\"4%\">\r\n            <img alt=\"\" style=\"margin:0;padding:0;vertical-align:middle;border:0;max-width:60px;max-height:60px;\" src=\"http://www.myliverpool.ru/.s/img/fr/ic1/hot.gif\" title=\"Горячая тема\">\r\n        </td>\r\n        <td class=\"threadNametd\">\r\n            <a class=\"threadLink\" [routerLink]=\"['/forum/theme', theme.id]\" [textContent]=\"theme.name\"></a>\r\n            <!--span class=\"postpSwithces\">[ <a class=\"postPSwithcesLink\" href=\"/forum/5-1400-1\">1</a>  \r\n            <a class=\"postPSwithcesLink\" href=\"/forum/5-1400-2\">2</a> \r\n             <a class=\"postPSwithcesLink\" href=\"/forum/5-1400-3\">3</a> \r\n             <a class=\"postPSwithcesLink\" href=\"/forum/5-1400-4\">4</a>  \r\n            <a class=\"postPSwithcesLink\" href=\"/forum/5-1400-5\">5</a> ]</!--span>-->\r\n            <a class=\"modBut\" [routerLink]=\"['/forum/theme', theme.id, 'edit']\" title=\"Изменить/переместить тему\"><span class=\"glyphicon glyphicon-pencil\" align=\"absmiddle\"></span></a>\r\n            <!--*ngIf=\"section.themes.length == 0\"-->   <a class=\"modBut\"  title=\"Удалить тему\"  ng-click=\"vm.removeSection($index)\"><span class=\"glyphicon glyphicon-remove\"></span></a>\r\n        </td>\r\n\r\n        <td class=\"threadPostTd\" align=\"center\" [textContent]=\"theme.answers\"></td>\r\n        <td class=\"threadViewTd\" align=\"center\">-</td>\r\n        <td class=\"threadAuthTd\" align=\"center\"><span class=\"threadAuthor\"><a class=\"threadAuthorLink\" [routerLink]=\"['/user', theme.authorId]\" [textContent]=\"theme.authorUserName\"></a></span></td>\r\n        <td class=\"threadLastPostTd\">\r\n            <script type=\"text/javascript\">document.write('<a title=\"К последнему сообщению\" class=\"forumLastPostLink\" hr'+'ef=\"/forum/5-1400-0-17\">19.10.2016, 13:37:37</a>')</script><a title=\"К последнему сообщению\" class=\"forumLastPostLink\" href=\"/forum/5-1400-0-17\">19.10.2016, 13:37:37</a>\r\n            <script type=\"text/javascript\">document.write('<a hr' + 'ef=\"/forum/5-1400-0-17-1\"><img alt=\"\" style=\"margin:0;padding:0;vertical-align:middle;border:0;max-width:60px;max-height:60px;\" title=\"К первому непрочитанному сообщению\" src=\"http://www.myliverpool.ru.s/img/fr/ic/2/lastpost.gif\" /></a>')</script><a href=\"/forum/5-1400-0-17-1\"><img alt=\"\" style=\"margin:0;padding:0;vertical-align:middle;border:0;max-width:60px;max-height:60px;\" title=\"К первому непрочитанному сообщению\" src=\"http://www.myliverpool.ru/.s/img/fr/ic/2/lastpost.gif\"></a>\r\n            <br>Сообщение от: <span class=\"lastPostGuest\"><a class=\"lastPostUserLink\" href=\"javascript://\" rel=\"nofollow\" onclick=\"window.open('/index/8-0-icebergstollikcs','up27','scrollbars=1,top=0,left=0,resizable=1,width=680,height=350');return false;\">icebergstollikcs</a></span>\r\n        </td>\r\n    </tr>\r\n\r\n\r\n    <tr><td class=\"threadsDetails\" colspan=\"7\">В этом форуме тем: <b [textContent]=\"totalItems\"></b>. На странице показано тем: <b [textContent]=\"items.length\"></b>.</td></tr>\r\n    <!--->tr><td class=\"forumOnlineBar\" colspan=\"7\">Форум просматривают: <a class=\"groupAdmin\" href=\"javascript://\" rel=\"nofollow\" onclick=\"window.open('/index/8-10147','up10147','scrollbars=1,top=0,left=0,resizable=1,width=680,height=350');return false;\">parys</a></td></tr-->\r\n    </tbody>\r\n</table>\r\n<!--div class=\"container-fluid\" *ngIf=\"item\">\r\n    <div class=\"panel panel-danger\">\r\n        <div class=\"panel-heading\">\r\n            <span [textContent]=\"item.name\"></span>\r\n            <span [textContent]=\"item.description\"></span>\r\n            <a [routerLink]=\"['/forum/theme', 0, 'edit']\">Добавить тему</a>\r\n        </div>\r\n        <!--  <div class=\"panel-body\"></div>->\r\n        <ul class=\"list-group\" *ngFor=\"let theme of item.themes.list\">\r\n            <li class=\"list-group-item list\">\r\n                <span><a [routerLink]=\"['/forum/theme', theme.id]\" [textContent]=\"theme.name\"></a></span>\r\n                <span [textContent]=\"theme.description\"></span>\r\n                <span class=\"pull-right\">\r\n                    <a [routerLink]=\"['/forum/theme', theme.id, 'edit']\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n                    <a class=\"pull-right\" ng-show=\"section.subsections.length == 0\" ng-click=\"vm.removeSection($index)\">\r\n                        <span class=\"glyphicon glyphicon-remove\"></span>\r\n                    </a>\r\n                </span>\r\n            </li>\r\n        </ul>\r\n\r\n    </div>\r\n    <div>Всего тем:<span [textContent]=\"item.themes.totalItems\"></span></div>\r\n    <div class=\"pagination\">\r\n        <pagination *ngIf=\"items\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n    </div>\r\n</!--div>-->\r\n";

/***/ },
/* 86 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-sx-12 col-sm-12\">\r\n    <form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm.value)\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\">Подсекция:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <select class=\"form-control\" name=\"subsectionId\" formControlName=\"subsectionId\">\r\n                    <option *ngFor=\"let subsection of forumSubsections\" value=\"{{subsection.id}}\">{{subsection.name}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\">Имя:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"name\" formControlName=\"name\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\">Описание:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"description\" formControlName=\"description\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <button type=\"submit\" [disabled]=\"!editForm.valid\" class=\"btn btn-default\">Сохранить</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ },
/* 87 */
/***/ function(module, exports) {

module.exports = "<table class=\"gTable\" *ngIf=\"item\">\r\n    <tbody>\r\n    <tr>\r\n        <td class=\"gTableTop\">\r\n            <div style=\"float:left\" class=\"gTopCornerRight\" [textContent]=\"item.name\"></div>\r\n            \r\n            <!--div id=\"subscribe\">[ <a href=\"javascript://\" onclick=\"subscribe(this);return false;\" class=\"thread_subscribe\">Подписаться на тему</a> ]</!--div>-->\r\n        </td>\r\n    </tr>\r\n    <tr *ngFor=\"let message of items\">\r\n        <td class=\"\">\r\n            <table class=\"postTable\">\r\n                <tbody>\r\n                <tr>\r\n                    <td width=\"23%\" class=\"postTdTop\" align=\"center\">\r\n                        <a class=\"postUser\" [routerLink]=\"['/user', message.authorId]\" [textContent]=\"message.authorUserName\"></a>\r\n                    </td>\r\n                    <td class=\"postTdTop\">\r\n                        <div class=\"h6\" style=\"float: right\">\r\n                            <a tooltip=\"Хороший пост\">\r\n                                <span class=\"glyphicon glyphicon-thumbs-up\"></span>\r\n                            </a> \r\n                            <a tooltip=\"Плохой пост\">\r\n                                <span class=\"glyphicon glyphicon-thumbs-down\"></span>\r\n                            </a>\r\n                        </div>Дата: <span [textContent]=\"message.additionTime | date:'medium'\"></span> | Сообщение # N/A\r\n                        <!--<a name=\"100821\" class=\"postNumberLink\" href=\"javascript://\" rel=\"nofollow\" onclick=\"prompt('Прямая ссылка к сообщению', 'http://www.myliverpool.ru/forum/44-1667-100821-16-1369831384');return false;\">1</a>-->\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"postTdInfo\" valign=\"top\">\r\n                        <img [title]=\"message.authorUserName\" class=\"userAvatar margin-auto\" [src]=\"message.photo\" [alt]=\"message.authorUserName\">\r\n                        <div class=\"postRankName\">Fields of Anfield Road</div>\r\n                        <div class=\"postRankIco\">\r\n                            <b>Знатоки</b>\r\n                        </div>\r\n                        <div class=\"numposts\">Сообщений: <span>N/A</span></div>\r\n\r\n\r\n                        <!--<div class=\"postUserGroup\">Страна: Российская Федерация</div>\r\n                        <div class=\"postUserGroup\">Город: Rostov on Don</div>\r\n                        <div class=\"reputation\">Подарки: <a href=\"javascript://\" rel=\"nofollow\" onclick=\"new _uWnd('AwL', 'Список наград', 380, 200, {autosize:1, closeonesc:1, maxh:300, minh:100},{url:'/index/54-2733'});return false;\" title=\"Список наград\"><span class=\"repNums\"><b>38</b></span></a> &nbsp;<a href=\"javascript://\" rel=\"nofollow\" onclick=\"new _uWnd('AwD','Вручить награду',380,200,{autosize:1,closeonesc:1,maxh:300,minh:100},{url:'/index/55-2733'});return false;\"><span style=\"font-size:10pt\" title=\"Вручить награду\"><b>+</b></span></a>\r\n                        <div class=\"reputation\">Репутация: <a title=\"Смотреть историю репутации\" class=\"repHistory\" href=\"javascript://\" rel=\"nofollow\" onclick=\"new _uWnd('Rh',' ',400,250,{autosize:1,closeonesc:1,maxh:300,minh:100},{url:'/index/9-2733'});return false;\"><b>824</b></a>  &nbsp;<a class=\"reputationDo\" title=\"Изменить репутацию\" href=\"javascript://\" rel=\"nofollow\" onclick=\"new _uWnd('Rd',' ',380,200,{autosize:1,closeonesc:1},{url:'/index/',type:'post',data:{a:'23',s:'2733',c:'/forum/44-1667-100821-16-1369831384'}});return false;\"><span style=\"font-size:10pt\"><b>&#177;</b></span></a></div>-->\r\n                        <div *ngIf=\"roles.isAdminAssist\" class=\"userBan\">Замечания:\r\n                            <a class=\"banPercent\" title=\"Смотреть историю замечаний\" href=\"javascript://\" rel=\"nofollow\" onclick=\"new _uWnd('Bh',' ',400,250,{autosize:1,closeonesc:1,maxh:300,minh:100},{url:'/index/21-2733'});return false;\">0%</a>  &nbsp;\r\n                            <a title=\"Изменить уровень замечаний\" class=\"banDo\" href=\"javascript://\" rel=\"nofollow\" onclick=\"new _uWnd('Bd',' ',400,250,{autosize:1,closeonesc:1,maxh:300,minh:100},{url:'/index/22-2733-1'});return false;\">±</a>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"posttdMessage\" valign=\"top\">\r\n                        <span class=\"ucoz-forum-post\" [innerHTML]=\"message.message\"></span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"postBottom\" align=\"center\">\r\n                        <div class=\"postip\"> \r\n                            <a *ngIf=\"roles.isAdminAssist\" class=\"postIpLink\" href=\"http://www.ripe.net/perl/whois?91.220.155.248\" target=\"_blank\">91.220.155.248</a>\r\n                            <!--   (<a href=\"javascript://\" onclick=\"prompt( & quot;&quot;,&quot;Российская Федерация & quot;);return false;\">RU</a>) ]--> \r\n                            <span class=\"statusOffline\">Оффлайн</span>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"postBottom\">\r\n                        <span>\r\n                                    <!--<a href=\"javascript://\" rel=\"nofollow\" onclick=\"window.open('/index/8-2733', 'up2733', 'scrollbars=1,top=0,left=0,resizable=1,width=680,height=350');return false;\">\r\n                                        <img class=\"inline\" alt=\"\" style=\"margin: 0; padding: 0; border: 0;\" src=\"http://myliverpool.ru/.s/img/fr/bt/16/p_profile.gif\" title=\"Профиль пользователя\">\r\n                                    </a>--> \r\n                                    <a href=\"javascript://\" rel=\"nofollow\" onclick=\"window.open('/index/14-2733-0-1', 'userpm', 'scrollbars=1,top=0,left=0,resizable=1,width=680,height=350');return false;\">\r\n                                        <img class=\"inline\" alt=\"\" style=\"margin: 0; padding: 0; border: 0;\" src=\"http://myliverpool.ru/.s/img/fr/bt/16/p_pm.gif\" title=\"Личное сообщение\">\r\n                                    </a>\r\n                            <a>\r\n                                    <img class=\"inline\" alt=\"\" style=\"cursor: pointer; margin: 0; padding: 0; border: 0;\" src=\"http://myliverpool.ru/.s/img/fr/bt/16/p_icq.gif\" title=\"ICQ: 575285688\" onclick=\"prompt('ICQ number', '575285688');\">\r\n                                    </a>\r\n                             <a href=\"\" target=\"_blank\">\r\n                                        <img class=\"inline\" src=\"http://myliverpool.ru/desighn/vk.jpg\" border=\"0\" alt=\"\">\r\n                                    </a>\r\n                                    <a onmouseover=\"get_selection()\" class=\"postQuote\">\r\n                                        <img class=\"inline\" alt=\"\" style=\"margin: 0; padding: 0; border: 0;\" src=\"http://myliverpool.ru/.s/img/fr/bt/16/p_quote.gif\" title=\"Цитировать\">\r\n                                    </a>\r\n                                    <a href=\"/forum/44-1667-100821-9-1\">\r\n                                        <img class=\"inline\" alt=\"\" style=\"margin: 0; padding: 0; border: 0;\" src=\"http://myliverpool.ru/.s/img/fr/bt/16/p_edit.gif\" title=\"Изменить сообщение\">\r\n                                    </a>\r\n                                    <a href=\"/forum/44-1667-0-21\">\r\n                                        <img class=\"inline\"alt=\"\" id=\"dbo100821\" style=\"margin: 0; padding: 0; border: 0;\" src=\"http://myliverpool.ru/.s/img/fr/bt/16/p_delete.gif\" title=\"Удалить тему\">\r\n                                    </a>\r\n                                    <a class=\"inline goOnTop\" href=\"javascript:scroll(0,0);\">\r\n                                        <img class=\"inline\" alt=\"\" style=\"margin: 0; padding: 0; border: 0;\" src=\"http://myliverpool.ru/.s/img/fr/bt/16/p_up.gif\" title=\"Вверх\">\r\n                                    </a>\r\n                                    <input class=\"inline\" type=\"checkbox\" title=\"Пометить на удаление\" disabled=\"\" style=\"display: none;\">\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td class=\"postSeparator\"></td>\r\n    </tr>\r\n    <tr id=\"delPtBut\" style=\"display:none;\"><td colspan=\"2\" class=\"gTableSubTop\" align=\"right\"><div align=\"right\" style=\"padding:1px;\"><form style=\"margin:0;padding:0;\" method=\"post\" name=\"delposts\" action=\"/forum/\" onsubmit=\"return chdel(this);\"><input class=\"delPostsSubmit\" id=\"delPsSbm\" type=\"submit\" value=\"Удалить отмеченные сообщения\" style=\"font-size:7pt;\"><input type=\"hidden\" name=\"fid\" value=\"44\"><input type=\"hidden\" name=\"tid\" value=\"1667\"><input type=\"hidden\" name=\"a\" value=\"8\"><input type=\"hidden\" name=\"ss\" value=\"gOKI9nKk\"><input type=\"hidden\" name=\"t\" value=\"1\"><input type=\"hidden\" name=\"pg\" value=\"1\"><input type=\"hidden\" id=\"pids\" name=\"pids\" value=\"0\"></form></div></td></tr>\r\n    </tbody>\r\n    <forumMessage-addition [themeId]=\"item.id\"></forumMessage-addition>\r\n</table>\r\n\r\n\r\n<!--<div *ngIf=\"item\">\r\n<h2 [textContent]=\"item.name\"></h2>\r\n<h3 [textContent]=\"item.description\"></h3>\r\n<div class=\"container-fluid forum-message col-sm-12\" *ngFor=\"let message of items\">\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading col-sm-12\">\r\n            <span class=\"col-sm-3\"><a [routerLink]=\"['/user', message.authorId]\" [textContent]=\"message.authorUserName\"></a></span>\r\n            <span class=\"col-sm-9 pull-right\" [textContent]=\"message.additionTime | date:'medium'\"></span>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            <div class=\"col-sm-3\"> <img class=\"flex-vertical-center width50p\" src=\"{{message.photo}}\" /></div>\r\n            <div class=\"col-sm-9\" [innerHTML]=\"message.message\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n        <forumMessage-addition [themeId]=\"item.id\"></forumMessage-addition>\r\n    <div class=\"pagination\">\r\n        <pagination *ngIf=\"items\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n    </div>\r\n</div>-->\r\n    <!--style>\r\n          .flex-container-row {\r\n              display: flex;\r\n              flex-direction: row;\r\n              flex-wrap: nowrap;\r\n              justify-content: flex-start;\r\n              align-content: flex-start;\r\n              align-items: flex-start;\r\n              background-color: #000080;\r\n               min-height: 100px;\r\n               margin-bottom: 10px;\r\n              }\r\n          .flex-container-column {\r\n              display: flex;\r\n              flex-direction: column;\r\n              flex-wrap: nowrap;\r\n              justify-content: flex-start;\r\n              align-content: stretch;\r\n              align-items: center;\r\n              background-color: #ffff00;\r\n              }\r\n\r\n\r\n          .flex-item-1 {\r\n              background-color: #2f4f4f;\r\n              order: 0;\r\n              flex: 3 0 auto;\r\n              flex-direction: column;\r\n              align-self: stretch;\r\n          }\r\n          .flex-item-2 {\r\n              background-color: #9400d3;\r\n              order: 0;\r\n              flex: 10 0 auto;\r\n              flex-direction: column;\r\n              align-self: stretch;\r\n          }\r\n          .flex-item {\r\n               order: 0;\r\n              flex: 0 1 auto;\r\n              flex-direction: column;\r\n          }\r\n          .flex-item.name {\r\n               order: 0;\r\n              flex: 1 1 auto;\r\n              flex-direction: column;\r\n          }\r\n          .flex-item.photo {\r\n               order: 0;\r\n              flex: 5 1 auto;\r\n              flex-direction: row;\r\n                background-color: #008080;\r\n            }\r\n          .flex-item.date {\r\n              order: 0;\r\n              flex: 1 1 auto;\r\n              flex-direction: row;\r\n           }\r\n          .flex-item.message {\r\n              order: 0;\r\n              flex: 5 1 auto;\r\n              flex-direction: row;\r\n                 align-self: flex-start;\r\n                 background-color: #00bfff;\r\n             }\r\n      </style>\r\n    <div class=\"flex-container-row message\" ng-repeat=\"message in vm.messages\">\r\n          <div class=\"flex-container-column flex-item-1\">\r\n              <div class=\"flex-item name\">\r\n                  <a ui-sref=\"userInfo({id: message.authorId})\" ng-bind=\"message.authorUserName\"></a>\r\n              </div>\r\n              <div class=\"flex-item photo\">\r\n                  <img ng-src=\"message.photo}}\"/>\r\n              </div>\r\n          </div>\r\n          <div class=\"flex-container-column flex-item-2 \">\r\n              <span class=\"flex-item date\" ng-bind=\"message.additionTime | date:'medium'\"></span>\r\n              <div class=\"flex-item message\" ng-bind-html=\"message.message | rawHtml\">\r\n              </div>\r\n          </div>\r\n      </div-->\r\n\r\n";

/***/ },
/* 88 */
/***/ function(module, exports) {

module.exports = "<table align=\"center\" celpadding=\"20px\" style=\"border: 2px double #EFF0F2; box-shadow: 0 0 10px rgba(0,0,0,0.5);\" >\r\n    <tbody>\r\n        <tr>\r\n            <td><img padding=\"20px\" src=\"http://www.myliverpool.ru/images/history/Liverpool_FC-n_logo.png\" td=\"\" /></td>\r\n            <td>\r\n                <table >\r\n                    <tbody>\r\n                        <tr class=\"CldrOdd\">\r\n                            <td class=\"TextStatTab\"><b>Название:</b></td>\r\n                            <td class=\"TextStatTab\">Футбольный Клуб &quot;Ливерпуль&quot;</td>\r\n                        </tr>\r\n                        <tr class=\"CldrEven\">\r\n                            <td class=\"TextStatTab\"><b>Прозвище:</b></td>\r\n                            <td class=\"TextStatTab\">&quot;Красные&quot; (The Reds)</td>\r\n                        </tr>\r\n                        <tr class=\"CldrOdd\">\r\n                            <td class=\"TextStatTab\"><b>Год основания:</b></td>\r\n                            <td class=\"TextStatTab\">1892</td>\r\n                        </tr>\r\n                        <tr class=\"CldrEven\">\r\n                            <td class=\"TextStatTab\"><b>Основатель:</b></td>\r\n                            <td class=\"TextStatTab\">Джон Холдинг</td>\r\n                        </tr>\r\n                        <tr class=\"CldrOdd\">\r\n                            <td class=\"TextStatTab\"><b>Домашний стадион:</b></td>\r\n                            <td class=\"TextStatTab\">&quot;Энфилд&quot;</td>\r\n                        </tr>\r\n                        <tr class=\"CldrEven\">\r\n                            <td class=\"TextStatTab\"><b>Владелец:</b></td>\r\n                            <td class=\"TextStatTab\">Fenway Sports Group</td>\r\n                        </tr>\r\n                        <tr class=\"CldrOdd\">\r\n                            <td class=\"TextStatTab\"><b>Директорский состав:</b></td>\r\n                            <td class=\"TextStatTab\">\r\n                                Дж. Генри (основной владелец),<br />\r\n                                Т. Вернер (президент),<br />\r\n                                Д. Гинзберг (вицепрезидент),<br />\r\n                                И. Эйр (управляющий директор),<br />\r\n                                М. Гордон\r\n                            </td>\r\n                        </tr>\r\n                        <tr class=\"CldrEven\">\r\n                            <td class=\"TextStatTab\"><b>Главный тренер:</b></td>\r\n                            <td class=\"TextStatTab\">Юрген Клопп</td>\r\n                        </tr>\r\n                        <tr class=\"CldrOdd\">\r\n                            <td class=\"TextStatTab\"><b>Официальный сайт:</b></td>\r\n                            <td class=\"TextStatTab\">liverpoolfc.com</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<div class=\"eMessage\">\r\n    Футбольный клуб &quot;Ливерпуль&quot; может похвастаться красочным и прославленным прошлым. Это одна из самых уважаемых и признанных команд английского спорта. Если вернуться к моменту возникновения клуба, окажется, что свою роль в этом событии сыграл главный соперник &quot;красных&quot; - &quot;Эвертон&quot;.<br />\r\n    <br />\r\n    В 1878 году у &quot;Эвертона&quot; возникли разногласия по арендной плате с Джоном Холдингом, владельцем поля. В 1892 году они окончательно покинули &quot;Энфилд&quot;, а Холдинг основал новый футбольный клуб - &quot;Ливерпуль&quot;.<br />\r\n    <br />\r\n    Холдинг назначил главным тренером своего друга Джона Маккену, который сразу отправился в Шотландию на поиски новых талантов. К сожалению, появление новой команды не впечатлило местных жителей, они продолжали поддерживать &quot;Эвертон&quot;. Это огорчало Холдинга, не никак не умерило его амбиции, и уже через год можно было наблюдать первые успехи новоиспеченного клуба. &quot;Ливерпуль&quot; был принят в Футбольную Лигу.<br />\r\n    <br />\r\n    Это стало началом настоящего &quot;Ливерпуля&quot;. Никто не мог предсказать, что после всех взлетов и падений, клуб превратится в один из самых престижных в английском футболе, что за время своего существования он выиграет восемь Кубков Лиги, семь Кубков Англии, три кубка УЕФА, пять Кубов Европейских чемпионов (Лиги Чемпионов) и восемнадцать раз станет чемпионом своей страны.\r\n</div>\r\n\r\n<hr />\r\n\r\n<div align=\"right\"><i>Источник: lfcnews.co.uk</i></div>";

/***/ },
/* 89 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"\">\r\n        <img alt=\"\" style=\"border: 3px solid #ccc;margin:0 15px 15px 0;\" src=\"http://pictures.footymad.net/upload/342/69050-1.jpg\" align=\"left\" width=\"250px\">Главный соперник \"Ливерпуля\", \"Эвертон\", был сформирован в 1878 году Джоном Холдингом, местным предпринимателем и будущим мэром Ливерпуля.\r\n\r\n        Они начали играть на \"Энфилд Роуд\" — поле, арендованном у пивовара по имени Джон Оррелл. Как только \"Эвертон\" встал на ноги Холдинг приступил к строительству футбольных трибун на \"Энфилде\". Однако после возникших в 1892 году разногласий клуб распался на две группы. Одна из групп приняла решение переехать на \"Гудисон Парк\", в то время как оставшиеся, во главе с Холдингом, основали на \"Энфилд Роуд\" новый футбольный клуб - \"Ливерпуль\". Холдинг назначил главным тренером своего друга, Джона Маккену, который сразу отправился в Шотландию набирать команду игроков. После года работы Маккена решил, что настало время подать заявку на вступление в Футбольную лигу.\r\n\r\n        Уже после первого сезона в лиге \"Ливерпуль\" поднялся в высший дивизион, однако он по-прежнему оставался в тени своих соседей из \"Эвертона\", а большинство местных жителей отказывались ходить на матчи команды, все игроки которой были шотландцами. Первый сезон прошел неудачно, и клуб выбыл во Второй дивизион. Маккена поклялся вернуться в высшую лигу через двенадцать месяцев, что и произошло благодаря его целеустремленности и настойчивости, \"Ливерпуль\" вновь становится чемпионом второго дивизиона и продвигается в первый. На этот раз они завершили сезон на надежном пятом месте, выше \"Эвертона\".\r\n\r\n        Первый чемпионский титул \"Ливерпуль\" выиграл в сезоне 1900/01. Через два года после этого \"красные\" выбыли из высшей лиги, но вернулись туда спустя год и в том сезоне вновь стали победителями чемпионата. В качестве награды руководство клуба приняло решение построить для болельщиков новую трибуну, \"Спион Коп\", позже ставшую легендарной. Такое название трибуна получила в честь холма, расположенного в южно-африканской провинции Натал, где во время второй англо-бурской войны мерсисайдский полк понес большие потери. В переводе с африкаанс \"спион коп\" означает \"место, дающее хороший обзор\". В 1928 году трибуна была расширена и обрела крышу, надежно защищавшую от непогоды 30 000 болельщиков.\r\n\r\n        После Первой мировой войны \"Ливерпуль\" стал обладателем еще двух чемпионских титулов, но после Второй мировой начался спад игровой формы, хотя в 1950 году \"красным\" все же удалось выйти в финал Кубка Англии, где они уступили \"Арсеналу\". Сезон 1953/54 \"Ливерпуль\" завершил на последнем месте и выбыл из первого дивизиона. После нескольких неудачных лет на помощь клубу пришел Билл Шенкли. Он был назначен главным тренером в 1959 году и за следующие четырнадцать лет своей работы превратил \"Ливерпуль\" в величайший клуб английского футбола. За первые двенадцать месяцев его руководства двадцать четыре игрока покинули команду. В сезоне 1963/64 \"Ливерпуль\" в шестой раз стал чемпионом высшей лиги, а в следующем году коллекция трофеев пополнилась кубком Англии, благодаря победе над \"Лидс\" в финале соревнования. Но победная серия на этом не закончилась, в сезоне 1965/66 \"красные\" вновь выиграли главный титул лиги.\r\n\r\n        Следующий трофей \"Ливерпуль\" получил лишь спустя семь лет, в сезоне 1972/73, на этот раз Кубок УЕФА, а спустя еще год \"красные\" вновь стали обладателями кубка Англии. После этого Шенкли неожиданно решил завершить карьеру и передал полномочия своей правой руке — Бобу Пейсли. Громких побед не пришлось долго ждать, уже на второй год работы нового тренера, в сезоне 1975/76, \"Ливерпуль\" выиграл чемпионат и Кубок УЕФА. Через год \"красные\" вновь стали чемпионами лиги, завоевали Кубок европейских чемпионов, обыграв в финале \"Боруссию Менхенгладбах\", но в финальном матче Кубка Англии уступили \"Манчестер Юнайтед\" со счетом 2:1. В сезоне 1977/78 \"Ливерпуль\" стал первым британским клубом, кому удалось подтвердить звание европейского чемпиона, одержав победу в финале соревнования над бельгийским клубом \"Брюгге\" со счетом 1:0.\r\n\r\n        Затем два года подряд, в сезонах 1978/79 и 1979/80, \"Ливерпуль\" становится чемпионом страны. 1981 год стал очередной яркой страницей в истории клуба, в третий раз в своей истории \"красные\" становятся обладателями Кубка европейских чемпионов, одержав победу над мадридским \"Реалом\" в финале турнира, а также выигрывают Кубок Лиги. В сезонах 1981/82 и 1982/83 \"Ливерпуль\" завоевывает еще два главных футбольных трофея страны, после чего Пейсли принимает решение уйти на пенсию. За девять лет его руководства клубом ему шесть раз присуждалось звание \"Лучший тренер года\".\r\n\r\n        На пост главного тренера заступил Джо Фэган, и в первый же год под его руководством клуб выиграл чемпионат Англии, Кубок Лиги и Кубок европейских чемпионов, обыграв \"Рому\" в Италии. Следующий сезон был омрачен страшной трагедией. Во время финала Кубка европейских чемпионов против \"Ювентуса\" на стадионе \"Эйзель\" возникли беспорядки. Перекрытие на стадионе рухнуло и унесло с собой жизни 38 болельщиков итальянского клуба. В конечном счете обладателем трофея стал \"Ювентус\", а английским клубам на неопределенный срок запретили участвовать в европейских соревнованиях.\r\n\r\n        В 1986 году Кенни Далглиш был назначен играющим тренером. В этом же сезоне \"Ливерпуль\" выиграл чемпионат и Кубок Англии. В сезоне 1987/88 \"красные\" вновь становятся чемпионами страны, однако в финале Кубка Англии уступают \"Уимблдону\". Сезон 1988/89 стал худшим в истории \"Ливерпуля\". Во время полуфинального матча Кубка Англии против \"Ноттингем Форест\" на стадионе \"Хиллсборо\" 96 болельщиков \"Ливерпуля\" погибли в результате переполнения трибуны \"Леппинг Лейн\". Позже \"Красные\" вышли в финал, где встретились с \"Эвертоном\". Перед началом матча болельщики обеих команд пели \"You will never walk alone\" и провели минуту молчания, в память о погибших на \"Хиллсборо\". \"Ливерпуль\" победил со счетом 3:2 благодаря двум голам, забитым вышедшим на замену Ианом Рашем. Главный трофей лиги также был практически в руках у \"красных\", чтобы этому помешать \"Арсеналу\" нужно было выиграть на \"Энфилде\" с преимуществом в два мяча. К концу решающего матча \"Арсенал\" вел в счете 1:0, но гол Майкла Томаса, забитый уже в добавленное время, похоронил надежды \"Ливерпуля\" на очередной трофейный дубль. После окончания сезона Кенни Далглиш оставил свой пост, объяснив это шокировавшее многих решение нервным перенапряжением.\r\n\r\n        Временно заменить Далглиша был призван Ронни Моран, прежде чем в апреле 1991 года на пост главного тренера не был назначен Грэм Сунесс. Он привел в команду множество новых игроков, но его строгий стиль работы не пользовался популярностью и не помог команде повторить успех прошлых лет. Начиная с эры Суннеса и до сих пор клуб преследует множество проблем.\r\n\r\n        Рой Эванс в свой первый полный сезон у руля клуба, в 1995 году, выиграл Кубок Лиги. Несмотря на то, что ему удалось построить интересную команду молодых игроков, многие из которых пришли из юношеской команды \"Ливерпуля\", никаких серьезных побед ему одержать не удалось. Болельщики и руководство требовали громких успехов, и в 1998 году в клуб был приглашен Жерар Улье, который должен был разделить тренерское кресло с Роем Эвансом. Опыт совместной работы оказался неудачным, и Эванс покинул клуб, положив тем самым конец 35 периоду преданной службы \"Ливерпулю\".\r\n\r\n        Улье начал развивать состав клманды, приглашая относительно неизвестных игроков, при этом его совершенно не пугали критические отзывы средств массовой информации. Ему удалось значительно улучшить игру команды в обороне, за что в 2001 году он был вознагражден пятью трофеями, а \"Ливерпуль\" не потерпел ни одного поражения в кубковых соревнованиях того сезона и квалифицировался в Лигу Чемпионов.\r\n\r\n        На следующий год \"Ливерпуль\" серьезно претендовал на победу в Премьер-лиге и в то же время неплохо себя проявил в Лиге чемпионов, добравшись до четвертьфинала соревнования, где уступил леверкузенскому \"Байеру\", вышедшему в итоге в финал турнира.\r\n\r\n        Из-за проблем со здоровьем Жерара Улье, большую часть следующего сезона командой фактически руководил Фил Томпсон, но благодаря своем бутрумовскому прошлому ему удалось успешно справиться с этой задачей. В Премьер-лиге \"Ливерпуль\" занял второе место, уступив лишь \"Арсеналу\", и вновь получил путевку в Лигу Чемпионов.\r\n\r\n        Сезон 2003/04 \"Ливерпуль\" завершил на четвертом месте, получив тем самым возможность принять участие в Лиге Чемпионов следующего сезона. Руководство клуба решило, что настала пора перемен. Новым главным тренером был назначен Рафаэль Бенитес, а Улье согласился покинуть клуб.\r\n\r\n        Бенитес не стал тратить время на поиски для себя новых помощников, а оставил на своих должностях Фила Томпсона, Сэмми Ли и Джо Корригана. Внезапно \"Ливерпуль\" вернулся к атакующему стилю игры с большим количеством передач, на радость болельщикам и критикам, и стал проявлять намеки на многообещающее будущее. В конце сезона \"Ливерпуль\" выиграл Лигу Чемпионов в одном из самых захватывающих финалов в истории турнира.\r\n\r\n        Руководство клуба, в лице американских владельцев Джоржа Жиллетта и Тома Хикса, давило на Бенитеса с требованием немедленного успеха в Премьер-лиге. Раскол произошел, когда тренеру было отказано в средствах на усиление состава.\r\n\r\n        Летом 2010 года Бенитеса сменил Рой Ходжсон, которому за то непродолжительное время, что он пробыл у руля клуба, так не удалось завоевать любовь болельщиков. Клуб, тем временем, пытался разорвать все связи с американскими хозяевами.\r\n\r\n        В конце концов, благодаря усилиям президента клуба, Мартина Бротона, появился новый покупатель, и сделка по продаже \"Ливерпуля\" состоялась, несмотря на все судебные иски, пытавшиеся помешать ее осуществлению. В октябре 2010 клуб попрощался с Хиксом и Жиллеттом и встретил нового владельца, Джона Генри, чья компания NEVS уже имела успешный опыт работы с бостонской бейсбольной командой \"Ред Сокс\".\r\n\r\n        Ходжсон не надолго задержался в клубе, после ужасного начала сезона 2010/11, в январе он согласился покинуть свой пост, и его место временно занял Кенни Далглтш, чье имя к тому времени все чаще стали вспоминать болельщики.\r\n\r\n        Далглиш быстро вселил уверенность в команду, избавился от ненужных игроков, включая и спорный переход Фернандо Торреса в \"Челси\", приобрел Луиса Суареса и Энди Кэрролла для построения новой линии атаки. Клуб словно заново родился и взлетел на крыльях. В конце сезона Далглиш подписал с \"Ливерпулем\" трехлетний контракт.\r\n\r\n        Основной целью клуба было возвращение в Лигу Чемпионов, за свой первый полный сезон в клубе Далгдишу достичь ее не удалось, из-за достаточно нестабильных выступлений команды в Премьер-лиге. В итоге клуб финишировал на восьмом месте в таблице, ниже своего основного конкурента, \"Эвертона\".\r\n\r\n        Тем не менее, \"Ливерпуль\" хорошо проявил себя в кубковых соревнованиях. В феврале 2012 года \"красные\" выиграли Кубок Лиги, обыграв \"Кардифф\" в серии пенальти, благодаря чему получил путевку в Лигу Европы. А в мае \"Ливерпуль\" и \"Челси\" встретились в финале Кубка Англии, однако удача оказалась на стороне лондонского клуба.\r\n\r\n        Несмотря на успехи в кубковых турнирах, в конце сезона Далглиш был уволен, а его место занял молодой североирландский тренер, Брендан Роджерс, покоривший к тому времени всех своей работой с достаточно скромным \"Суонси Сити\".\r\n\r\n        Роджерс пришел с решимостью установить в клубе новую философию, привить команде новый стиль игры, при этом не теряя, как он утверждал, связи с историей. С собой из \"Суонси\" он захватил своих ассистентов и полузащитника Джо Аллена. Однако, из-за проводившегося в то время чемпионата Европы, тренер впервые увидел всю свою команду в сборе только к началу сезона. В сезоне 2012/13 \"Ливерпуль\" выступал крайне нестабильно, показав худший за последние сто лет старт сезона. Крупные победы сменяли неожиданные безвольные поражения. Во время зимнего трансферного окна Роджерсу удалось усилить команду двумя приобретениями: английским нападающим Дэниелом Старриджем и блазильцем Филлиппе Коутиньо. В итоге команда завершила сезон на седьмом месте, вновь ниже \"Эвертона\".\r\n\r\n        Зимой 2013 ветеран клуба Джейми Каррагер объявил о завершении своей карьеры на \"Энфилде\". 19 мая он провел свой последний официальный матч в красной футболке в победном для \"Ливерпуля\" матче против \"Куинз Парк Рейнджерс\".\r\n    </div><hr /><i>\r\n        Источник: lfconline.com\r\n        Перевод: tas-n-r\r\n    </i>\r\n</div>\r\n";

/***/ },
/* 90 */
/***/ function(module, exports) {

module.exports = "<!-- FIRST TEAM -->\r\n<div align=\"left\">\r\n    <table align=\"left\" class=\"SquadList1\">\r\n        <tbody>\r\n            <tr class=\"squadEvenTab\">\r\n                <th class=\"StaffTab\" colspan=\"2\">Первая команда</th>\r\n            </tr>\r\n        </tbody>\r\n        <tbody>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Jurgen Klopp\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Jurgen_Klopp.jpg\" title=\"Jurgen Klopp\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Юрген Клопп</p>\r\n\r\n                    <p class=\"JobTitle\">Главный тренер</p>\r\n                </td>\r\n            </tr>\r\n            <!--tr class=\"squadEven\">\r\n            <td class=\"SquadPhoto\"><img alt=\"Sean O'Driscoll\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Sean_ODriscoll.jpg\" title=\"Sean O'Driscoll\" /></td>\r\n            <td class=\"StaffTable\">\r\n            <p class=\"StaffName\">Шон О&#39;Дрисколл</p>\r\n\r\n            <p class=\"JobTitle\">Ассистент главного тренера</p>\r\n            </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n            <td class=\"SquadPhoto\"><img alt=\"Gary McAllister\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Gary_McAllister.jpg\" title=\"Gary McAllister\" /></td>\r\n            <td class=\"StaffTable\">\r\n            <p class=\"StaffName\">Гари МакАллистер</p>\r\n\r\n            <p class=\"JobTitle\">Тренер первой команды</p>\r\n            </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n            <td class=\"SquadPhoto\"><img alt=\"Glen Driscoll\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Glen_Driscoll.png\" title=\"Glen Driscoll\" /></td>\r\n            <td class=\"StaffTable\">\r\n            <p class=\"StaffName\">Глен Дрисколл</p>\r\n\r\n            <p class=\"JobTitle\">Глава отдела спортивной медицины и науки</p>\r\n            </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n            <td class=\"SquadPhoto\"><img alt=\"Ryland Morgans\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Ryland_Morgans.png\" title=\"Ryland Morgans\" /></td>\r\n            <td class=\"StaffTable\">\r\n            <p class=\"StaffName\">Риланд Морганс</p>\r\n\r\n            <p class=\"JobTitle\">Глава отдела физической подготовки</p>\r\n            </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n            <td class=\"SquadPhoto\"><img alt=\"Chris Davies\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Chris_Davies.jpg\" title=\"Chris Davies\" /></td>\r\n            <td class=\"StaffTable\">\r\n            <p class=\"StaffName\">Крис Дэвис</p>\r\n\r\n            <p class=\"JobTitle\">Глава аналитического отдела</p>\r\n            </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n            <td class=\"SquadPhoto\"><img alt=\"John Achterberg\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/John_Achterberg.png\" title=\"John Achterberg\" /></td>\r\n            <td class=\"StaffTable\">\r\n            <p class=\"StaffName\">Джон Ахтерберг</p>\r\n\r\n            <p class=\"JobTitle\">Тренер вратарей</p>\r\n            </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n            <td class=\"SquadPhoto\"><img alt=\"Zafar Iqbal\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Dr-Zafar_Iqbal.jpg\" title=\"Zafar Iqbal\" /></td>\r\n            <td class=\"StaffTable\">\r\n            <p class=\"StaffName\">Заф Икбал</p>\r\n\r\n            <p class=\"JobTitle\">врач</p>\r\n            </td>\r\n            </tr-->\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Chris Morgan\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Chris_Morgan.png\" title=\"Chris Morgan\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Крис Морган</p>\r\n\r\n                    <p class=\"JobTitle\">Глава физиотерапии</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Jordan Milsom\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Jordan_Milsom.png\" title=\"Jordan Milsom\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Джордан Милсом</p>\r\n\r\n                    <p class=\"JobTitle\">Тренер по реабилитации</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Paul Small\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Paul_Small.png\" title=\"Paul Small\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Пол Смол</p>\r\n\r\n                    <p class=\"JobTitle\">Массажист</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Sylvan Richardson\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Sylvan_Richardson.jpg\" title=\"Sylvan Richardson\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Силван Ричардсон</p>\r\n\r\n                    <p class=\"JobTitle\">Массажист</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Lee Radcliffe\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Lee_Radcliffe.png\" title=\"Lee Radcliffe\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Ли Рэдклиф</p>\r\n\r\n                    <p class=\"JobTitle\">Администратор</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Graham Carter\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Graham_Carter.png\" title=\"Graham Carter\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Грэм Картер</p>\r\n\r\n                    <p class=\"JobTitle\">Администратор</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Barry Drust\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Barry_Drust.jpg\" title=\"Barry Drust\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Барри Драст</p>\r\n\r\n                    <p class=\"JobTitle\">Консультант отдела спортивной науки</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"James Morton\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/James_Morton.jpg\" title=\"James Morton\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Джеймс Мортон</p>\r\n\r\n                    <p class=\"JobTitle\">Диетолог</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Alec Scott\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Alec_Scott.png\" title=\"Alec Scott\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Алек Скотт</p>\r\n\r\n                    <p class=\"JobTitle\">Ассистент-аналитик</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"David Rydings\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/David_Rydings.png\" title=\"David Rydings\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Дэвид Ридингз</p>\r\n\r\n                    <p class=\"JobTitle\">Ассистент по реабилитации</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Paulo Barreira\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Paulo_Barreira.png\" title=\"Paulo Barreira\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Пауло Баррейра</p>\r\n\r\n                    <p class=\"JobTitle\">Физиотерапевт</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Matt Konopinski\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Matt_Konopinski.png\" title=\"Matt Konopinski\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Мэтт Конопински</p>\r\n\r\n                    <p class=\"JobTitle\">Физиотерапевт</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Pedro Philippou\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/firstteam/Pedro_Philippou.png\" title=\"Pedro Philippou\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Педро Филлиппо</p>\r\n\r\n                    <p class=\"JobTitle\">Спортивный терапевт</p>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<!-- ACADEMY -->\r\n\r\n<div align=\"right\">\r\n    <table align=\"right\" class=\"SquadList1\">\r\n        <tbody>\r\n            <tr class=\"squadEvenTab\">\r\n                <th class=\"StaffTab\" colspan=\"2\">Резерв и Академия</th>\r\n            </tr>\r\n        </tbody>\r\n        <tbody>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Frank McParland\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Frank_McParland.png\" title=\"Frank McParland\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Фрэнк Макпарлэнд</p>\r\n\r\n                    <p class=\"JobTitle\">Директор Академии</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Rodolfo Borrell\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Rodolfo_Borrell.png\" title=\"Rodolfo Borrell\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Родолфо Боррелл</p>\r\n\r\n                    <p class=\"JobTitle\">Технический директор Академии</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Alex Inglethorpe\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Alex_Inglethorpe.png\" title=\"Alex Inglethorpe\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Алекс Инглторп</p>\r\n\r\n                    <p class=\"JobTitle\">Тренер резервной команды</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Phil Roscoe\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Phil_Roscoe.png\" title=\"Phil Roscoe\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Фил Роско</p>\r\n\r\n                    <p class=\"JobTitle\">Глава отдела образования и социального обеспечения</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Andy O'Boyle\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Andy_O-Boyle.png\" title=\"Andy O'Boyle\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Энди О&#39;Бойл</p>\r\n\r\n                    <p class=\"JobTitle\">Глава отдела физической подготовки/ тренер по физподготовке команды U21</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Andy Renshaw\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Andy_Renshaw.png\" title=\"Andy Renshaw\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Энди Реншоу</p>\r\n\r\n                    <p class=\"JobTitle\">Глава отдела физиотерапии/ физиотерапевт команды U21</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Mark Morris\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Mark_Morris.png\" title=\"Mark Morris\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Марк Моррис</p>\r\n\r\n                    <p class=\"JobTitle\">Тренер вратарей команды U21</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Tim Jenkins\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Tim_Jenkins.png\" title=\"Tim Jenkins\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Тим Дженкинс</p>\r\n\r\n                    <p class=\"JobTitle\">Глава отдела анализа развития</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Richie Partridge \" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Richie_Partridge.png\" title=\"Richie Partridge \" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Ричи Партридж</p>\r\n\r\n                    <p class=\"JobTitle\">Физиотерапевт команды U21</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Dave Moss\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Dave_Moss.png\" title=\"Dave Moss\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Дэйв Мосс</p>\r\n\r\n                    <p class=\"JobTitle\">Главный скаут Академии</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Matthew Newberry\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Matthew_Newberry.png\" title=\"Matthew Newberry\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Мэтью Ньюберри</p>\r\n\r\n                    <p class=\"JobTitle\">Скаут</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Neil Critchley\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Neil_Critchley.png\" title=\"Neil Critchley\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Нил Критчли</p>\r\n\r\n                    <p class=\"JobTitle\">Тренер команды U18</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Remy Tang\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Remy_Tang.png\" title=\"Remy Tang\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Реми Тан</p>\r\n\r\n                    <p class=\"JobTitle\">Тренер по физической подготовке команды U18</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Liam Kershaw\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Liam_Kershaw.png\" title=\"Liam Kershaw\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Лиам Кершоу</p>\r\n\r\n                    <p class=\"JobTitle\">Физиотерапевт команды U18</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Mike Garrity\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Mike_Garrity.png\" title=\"Mike Garrity\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Майк Гаррити</p>\r\n\r\n                    <p class=\"JobTitle\">Тренер команд U6-U11</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Neil Edwards\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Neil_Edwards.png\" title=\"Neil Edwards\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Нил Эдвардс</p>\r\n\r\n                    <p class=\"JobTitle\">Тренер вратарей команды U18</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Gary Lewis\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Gary_Lewis.png\" title=\"Gary Lewis\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Гэри Льюис</p>\r\n\r\n                    <p class=\"JobTitle\">Тренер команд U12-U14</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Stephen Torpey\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Stephen_Torpey.png\" title=\"Stephen Torpey\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Стивен Торпи</p>\r\n\r\n                    <p class=\"JobTitle\">Тренер команды U9-11</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Michael Beale\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Michael_Beale.png\" title=\"Michael Beale\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Майкл Бил</p>\r\n\r\n                    <p class=\"JobTitle\">Тренер команд U15-U16</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Joe Lewis\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Joe_Lewis.png\" title=\"Joe Lewis\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Джо Льюис</p>\r\n\r\n                    <p class=\"JobTitle\">Спортивный терапевт</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Clive Cook\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Clive_Cook.png\" title=\"Clive Cook\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Клайв Кук</p>\r\n\r\n                    <p class=\"JobTitle\">Сотрудник отдела образования и соц. обеспечения</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Oliver Morgan\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Oliver_Morgan.png\" title=\"Oliver Morgan\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Оливер Морган</p>\r\n\r\n                    <p class=\"JobTitle\">Ассистент отдела спортивной науки</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Ian Barrigan\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Ian_Barrigan.png\" title=\"Ian Barrigan\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Иан Барригэн</p>\r\n\r\n                    <p class=\"JobTitle\">Глава местной скаутской службы</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Scott Redwood\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Scott_Redwood.png\" title=\"Scott Redwood\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Скотт Рэдвуд</p>\r\n\r\n                    <p class=\"JobTitle\">Администратор</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Kyle Wiffen\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Kyle_Wiffen.png\" title=\"Kyle Wiffen\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Кайл Уиффен</p>\r\n\r\n                    <p class=\"JobTitle\">Аналитик команды U18</p>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"SquadPhoto\"><img alt=\"Scott Mason\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/staff/academy/Scott_Mason.png\" title=\"Scott Mason\" /></td>\r\n                <td class=\"StaffTable\">\r\n                    <p class=\"StaffName\">Скотт Рэдвуд</p>\r\n\r\n                    <p class=\"JobTitle\">Аналитик команд U15-U16</p>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n";

/***/ },
/* 91 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-6 col-sm-3 container-fluid\" ui-view=\"rightContainer\">\r\n    <span class=\"col-sx-12\" *ngIf=\"roles.isAdminAssistant\"><a (click)=\"updateEplTable()\">Обновить таблицу</a></span>\r\n    <epl-table></epl-table>\r\n</div>";

/***/ },
/* 92 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <p><font color=\"red\"><b>Данные правила не подлежат обсуждению и обязательны для выполнения всеми без исключения пользователями портала рангом от простого пользователя до модератора (Администраторы - как лица, эти правила устанавливающие - поступают по своему усмотрению). Если вам не нравятся эти правила и вы хотите для себя другие правила - вы всегда можете создать свой собственный сайт и делать там все, что вам нравится.</b></font> </p>\r\n    <p>Правила вводятся для создания комфортной и конструктивной атмосферы общения. Если Вас не устраивает установленная форма общения, воздержитесь от участия в данной конференции.</p>\r\n    <p><b>I. Регистрация пользователей.</b></p>\r\n    <ol>\r\n        <li>Регистрируясь на форуме, пользователь соглашается выполнять данные Правила.</li>\r\n        <li>Для регистрации на форуме пользователь должен предоставить действующий адрес электронной почты. Мы гарантируем конфиденциальность указанной информации.</li>\r\n        <li>Выбор имени пользователя (nickname) является вашим исключительным правом. Администрация оставляет за собой право принять меры к прекращению использования nickname, если его использование нарушает общепринятые моральные и этические нормы или является оскорбительным для других пользователей форума. Запрещена регистрация nickname, схожих с уже существующими до степени, которые могут ввести в заблуждение других пользователей форума.</li>\r\n        <li>Запрещена неоднократная регистрация одним пользователем, вне зависимости от целей, с которыми такая регистрация проводится. Данное нарушение является крайне серьезным и ведет к блокированию всех учетных записей. Если вам не нравится ник, напишите в соответствующий раздел форума или администратору.</li>\r\n        <li>Если вы не проявляете активность на форуме в течение длительного времени, ваша учетная запись может быть удалена.</li>\r\n    </ol>\r\n    <p><b>II. На Форуме <font color=\"red\">запрещено</font>:</b></p>\r\n    <ol>\r\n        <li>Использовать ненормативную лексику в любых её проявлениях, в том числе сокращенную или замененную «звездочками» (или другими символами), на русском, английском языке, либо транслите. </li>\r\n        <li>Создавать темы, ранее обсуждавшиеся в Форуме. </li>\r\n        <li>Создавать сообщения, не имеющие отношения к обсуждаемой теме (оффтопик). </li>\r\n        <li>Создавать темы и сообщения, в которых более половины всей информации написано ЗАГЛАВНЫМИ БУКВАМИ. </li>\r\n        <li>Создавать темы, имеющие в названии украшения («===---Моя тема---===»), не отражающие суть вопроса («Посмотри сюда» или «fdgl;fjdgl;fdjglgfd»). </li>\r\n        <li>Создавать темы с обращением к конкретному участнику Форума. </li>\r\n        <li>Дублировать темы, то есть размещать одинаковые сообщения в разных разделах Форума. </li>\r\n        <li>Чрезмерное использование графических смайликов в сообщении (более трех подряд) или полностью состоящее только из смайлов. </li>\r\n        <li>Публикация постов, не несущих значительной смысловой нагрузки (флуд). Запрещается писать короткие бессмысленные посты типа \"ЖЖОШЬ\" или \"ПИШИ ЕЩО\", а также, состоящие из одних смайлов. </li>\r\n        <li>Использовать в сообщениях большое количество повторяющихся символов. </li>\r\n        <li>Использование в сообщениях красного цвета – это привилегия модераторов и администраторов. </li>\r\n        <li>Язык сайта-РУССКИЙ.Будьте добры,пишите на нем.Коверкание слов и преднамеренное извращение орфографии русского языка, а также использование латиницы (транслита). </li>\r\n        <li>Цитирование предыдущих сообщений, если в этом нет необходимости (флейм). </li>\r\n        <li>Использовать грубые, нецензурные выражения и оскорбления в любой форме. </li>\r\n        <li>Создавать темы и сообщения, содержащие рекламную, антирекламную или коммерческую информацию, а так же ссылки на сайты с целью повышения их посещаемости. </li>\r\n        <li>Продолжать обсуждать вопросы из тем, закрытых или удаленных администрацией. </li>\r\n        <li>Провоцировать конфликты с пользователями Форума. </li>\r\n        <li>Создавать темы и сообщения, противоречащие Конституции и законодательству РФ. </li>\r\n        <li>Использовать в качестве статуса или подписи нецензурные или ругательные слова, а так же заведомо недостоверную информацию. (Например, писать в статусе «Модератор», когда на самом деле Вы таковым не являетесь). </li>\r\n        <li>\r\n            Максимальный размер подписи должен быть не более 2-х строчек и не более 200 символов. Максимальный размер шрифта - \"2\". Подпись не должна содержать текста, выделенного красным цветом. Размер картинки в вашей подписи должен удовлетворять следующим требованиям:\r\n            - размер - не более 350х60 пикселей суммарно\r\n            - объем - не более 40 кб суммарно\r\n        </li>\r\n        <li>Использовать в качестве аватара, фотографии или в качестве вложение в сообщения картинки порнографического, экстремистского или оскорбительного характера. </li>\r\n        <li>Пропагандировать любые наркотические и психотропные вещества и образ жизни, связанный с употреблением данных веществ, а так же пропагандировать суицид, расовую и религиозную ненависть, фашизм и нацизм. </li>\r\n        <li>Использование заведомо похожих ников. </li>\r\n        <li>Выпрашивание прибавления репутации, а так же поднимать или снижать репутацию без причины. </li>\r\n        <li>Обсуждать действия администрации в разделах Форума. Если Вы недовольны действиями администрации, то высказывайте свои претензии в соответствии с п. 4.1-4.2 настоящих Правил. </li>\r\n        <li>Использовать ПС (Персональные Сообщения) для массовой рассылки информации любого рода (реклама, \"письма счастья\" и т.п.) </li>\r\n        <li>Нарушать авторские права (указывайте ссылки на АВТОРА (источник), откуда были взяты выложенные статьи) или хотя бы пишите, что авторство принадлежит не Вам. </li>\r\n        <li>Указание в имени пользователя, подписи, и других полях URL адресов коммерческих интернет-проектов, с целью рекламы и повышения индекса цитирования, за исключением особой договоренности с Администрацией портала. </li>\r\n        <li>Оскорбление игроков клуба,тренерского штаба,а также других клубов и их игроков.Выражение своей неприязни допустимо,но в рамках допустимого </li>\r\n\r\n        <li>Публично предъявлять претензии и обсуждать действия переводчиков и редакторов сайта. Пользователи ресурса, несогласные с публикациями переводов статей и материалов могут высказать своё несогласие в личном сообщении или в теме на форуме сайта - <b>Жалобы</b>. </li>\r\n    </ol>\r\n    <p><b>III. Общие рекомендации о советы. </b></p>\r\n    <ol>\r\n        <li>Не обращайте внимания на хулиганов. Не отвечайте им, даже если Вы считаете, что Вас оскорбили, не поддавайтесь на провокации. Достаточно сообщить администрации об оскорблении и виновные будут наказаны. </li>\r\n        <li>В том случае, если Вы считаете, что нарушены Правила Форума, постарайтесь сразу же сообщить об этом администрации Форума. </li>\r\n        <li>Старайтесь не использовать в сообщениях жаргон, т.к. некоторые пользователи могут не правильно его растолковать.</li>\r\n        <li>Постарайтесь не писать безосновательные утверждения, а так же сообщения типа «выкинь эту бяку, поставь хорошую вещь». Если это Ваше лично мнение, не забудьте сообщить об этом заранее – простого «ИМХО» (от англ. “imho”, что в переводе означает «по моему скромному мнению») будет достаточно. Помните, что после нескольких неаргументированных утверждений, пользователи просто перестанут Вам доверять. </li>\r\n        <li>Прежде чем создавать тему, убедитесь, что Вы создаете её в нужном Разделе Форума. Помните, что темы, не соответствующие тематике Раздела, будут либо удалены, либо перенесены в другой Раздел Форума. </li>\r\n        <li>Прочтите тему целиком! Посты в середине темы - \"А о чем это вы, а? \" или \"Так я не понял - откуда качать?\" запрещены. </li>\r\n        <li>Старайтесь не делать грамматических ошибок в сообщениях – это создаст негативное впечатление о вас.</li>\r\n    </ol>\r\n    <p><b>IV. Отношения между пользователями и администрацией.</b></p>\r\n    <ol>\r\n        <li>В своих действиях администрация форума руководствуется здравым смыслом и внутренними правилами управления форумом.</li>\r\n        <li>\r\n            Обсуждение действий администрации (администраторов и модераторов форума) категорически запрещается в любых форумах и темах, за исключением специализированного форума - <b>Жалобы</b>.<br>\r\n        </li>\r\n    </ol>\r\n    <p>Администрация оставляет за собой право изменять правила без уведомлением об этом пользователей форума. Все изменения и новации на форуме производятся с учетом мнений и интересов пользователей.</p>\r\n    <p align=\"right\"><b>С уважением, администрация сайта.</b></p>\r\n</div>";

/***/ },
/* 93 */
/***/ function(module, exports) {

module.exports = "<div align=\"center\">\r\n    &nbsp;\r\n    <table class=\"SquadList\">\r\n        <tbody>\r\n            <tr>\r\n                <th class=\"SquadFirst\">№</th>\r\n                <th class=\"SquadFirst\">Фото</th>\r\n                <th class=\"SquadFirst\">Имя</th>\r\n                <th class=\"SquadFirst\">Гражданство</th>\r\n                <th class=\"SquadFirst\">Аренда</th>\r\n                <th class=\"SquadFirst\">Дата рождения</th>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"playerPossition\" colspan=\"6\">Голкиперы:</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">1</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/24/88bd9693f8b41b25edff902642d34ac9d7c8ba6a.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Лорис Карриус&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Германия\" src=\"http://www.myliverpool.ru/Team/Germany.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Германия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">22.06.1993</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">13</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/87e90bac4a6cc490713aba58df7474d6f2cc9a23.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Алекс Маннингер&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Австрия\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/20px-Flag_of_Austria.svg.png\" title=\"Австрия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">04.06.1977</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">22</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/86b2c7ab6039e2b716a37168dbca51b2f3b2016f.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Симон Миньоле&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Бельгия\" src=\"http://www.myliverpool.ru/Team/Belgium-30.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Бельгия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">06.03.1988</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">34</td>\r\n                <td class=\"SquadPhoto\"><img alt=\"Adam Bogdan\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/Players/Squad/Adam_Bogdan.jpg\" style=\"height:90px\" title=\"Adam Bogdan\" /></td>\r\n                <td class=\"squadName\">Адам Богдан&nbsp;&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Венгрия\" src=\"http://www.myliverpool.ru/Team/Hungary.png\" title=\"Венгрия\" /></td>\r\n                <td class=\"bplPlayer\">Отдан в аренду &nbsp;&quot;Уиган&quot;&nbsp;</td>\r\n                <td class=\"PlayerDOB\">27.09.1987</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">39</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/default/0001/19/f87e94c7b91170f1f172815a60f543be05cfb217.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Райан Фултон&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">Отдан в аренду &quot;Честерфилд&quot;</td>\r\n                <td class=\"PlayerDOB\">23.05.1996</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">52</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcstage.com/symfony2/uploads/media/default/0001/10/85279f28ecf888652f0855e511bd9b2db117cf97.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Дэни Уорд&nbsp;&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Уэльс\" src=\"http://www.myliverpool.ru/Team/Wales.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Уэльс\" /></td>\r\n                <td class=\"bplPlayer\">Отдан в аренду &nbsp;&quot;Хаддерсфилд Таун&quot;</td>\r\n                <td class=\"PlayerDOB\">22.06.1993</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"playerPossition\" colspan=\"6\">Защитники:</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">2</td>\r\n                <td class=\"SquadPhoto\"><img alt=\"Nathaniel Clyne\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/Players/Squad/Nathaniel_Clyne.jpg\" style=\"height:90px\" title=\"Nathaniel Clyne\" /></td>\r\n                <td class=\"squadName\">Натаниэль Клайн&nbsp;&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">05.04.1991</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">3</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/default/0001/26/01121a0b101ced203c7c7041656c18e3ae769d7b.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Мамаду Сако&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Франция\" src=\"http://www.myliverpool.ru/Team/France-30.png\" title=\"Франция\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">13.02.1990</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">6</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/9248f114ab7be3f8678205fb7b8c37e959b16bbf.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Деян Ловрен&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Хорватия\" src=\"http://abali.ru/wp-content/uploads/2011/09/croatia_round_icon_512.png\" style=\"width:30px\" title=\"Хорватия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">05.07.1989</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">12</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/default/0001/26/5c3fd775b9f52d93c908ef7faa4d14366471ef0f.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Джо Гомез&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">23.05.1997</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">17</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/default/0001/26/6a78d3740fcbe2687784bb6bdd148714a9810089.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Рагнар Клаван&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Эстония\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/20px-Flag_of_Estonia.svg.png\" title=\"Эстония\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">30.10.1985</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">18</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/3fb69ebb21a3cb6771eb7d0c1eacd487854edf2f.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Альберто Морено&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Испания\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/20px-Flag_of_Spain.svg.png\" title=\"Испания\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">05.07.1992</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">26</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcstage.com/symfony2/uploads/media/default/0001/10/67bb9344583806a1013fa564bce9032d87146529.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Тиагу Илори&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Португалия\" src=\"http://www.myliverpool.ru/Team/portugal.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Португалия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">26.02.1993</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">32</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/f0071a2b740266e8391950a0001e19ab2d7432bc.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Жоэль Матип&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Камерун\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/20px-Flag_of_Cameroon.svg.png\" title=\"Камерун\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">08.08.1991</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">38</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/24/0ced040215067709125ff8c13b7719cafd6c4576.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Джон Флэнаган&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">Отдан в аренду &nbsp;&quot;Бернли&quot;</td>\r\n                <td class=\"PlayerDOB\">01.01.1993</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">47</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/25f745066101943a9d126ec4095f24e327dbffcb.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Андре Уиздом&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">Отдан в аренду &quot;Зальцбург&quot;</td>\r\n                <td class=\"PlayerDOB\">09.05.1993</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">51</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/eb1e9427f9248f306d2097c7bf94087f0f0f56a4.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Ллойд Джонс&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">Отдан в аренду &nbsp;&quot;Суиндон Таун&quot;</td>\r\n                <td class=\"PlayerDOB\">07.10.1995</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">56</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/e308134162726dfe5868954125aaea53c21e30cd.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Коннор Рэндалл&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">21.10.1995</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">57</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/90a68dbca0710f112b79ea3c69ca57bdb76cb183.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Джо Магуайр&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">18.01.1996</td>\r\n            </tr>\r\n            <!--tr class=\"squadEven\">\r\n            <td class=\"PlayerNum\">58</td>\r\n            <td class=\"squadName\">&nbsp;</td>\r\n            <td class=\"squadName\"><span style=\"color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\">Дэниел Клири&nbsp;</span></td>\r\n            <td class=\"countryName\"><img alt=\"Ирландия\" src=\"http://ncse.com/files/images/irish%20flag_0.thumbnail.png\" title=\"Ирландия\" /></td>\r\n            <td class=\"bplPlayer\">&nbsp;</td>\r\n            <td class=\"PlayerDOB\">09.03.1996</td>\r\n            </tr-->\r\n            <tr>\r\n                <td class=\"playerPossition\" colspan=\"6\">Полузащитники:</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">5</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/default/0001/26/b0150d2a1e5ec953e6fda3f83bb16aaa1b0aded0.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Джорджиньо Вейналдум&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Нидерланды\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/20px-Flag_of_the_Netherlands.svg.png\" title=\"Нидерланды\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">11.11.1990</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">7</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/fad573aa50c8cb36a6620018373f647d75a8c910.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Джеймс Милнер&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">04.01.1986</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">10</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/63e88372ffcfacf66c2608cd48b32ef91ccb064d.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Филиппе Коутиньо&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Бразилия\" src=\"http://www.myliverpool.ru/Team/brazil.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Бразилия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">12.06.1992</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">14</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/43562c981f4a157cea535c2c0e96dd7f824f0b3c.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Джордан Хендерсон&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">17.23.1990</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">16</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/b4a06b0b5b2e49adb97ad422b545c0c2343481b0.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Марко Груич&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Сербия\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/20px-Flag_of_Serbia.svg.png\" title=\"Сербия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">13.04.1996</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">20</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/97aebf125e7fc0fd5ee2ff017856cf18c9c776ac.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Адам Лаллана&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">10.05.1988</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">21</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/b2200276a740480ca610e4c9b00f99f79dc292d9.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Лукас Лейва&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Бразилия\" src=\"http://www.myliverpool.ru/Team/brazil.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Бразилия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">09.01.1987</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">23</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcstage.com/symfony2/uploads/media/default/0001/10/4fda272e97430aa4abdea7a449c5df3c97c68f39.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Эмре Джан&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Германия\" src=\"http://www.myliverpool.ru/Team/Germany.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Германия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">12.01.1994</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">32</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/f91e6358f9737e3ee520a892ad74c9a48714bf0f.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Кэмерон Брэннаган&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">09.05.1996</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">35</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/d67d9e510017fa0f35553073b4472effbb7f7004.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Кевин Стюарт&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">07.09.1993</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">40</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/24/cca9fae7db7d093998770c99161742bedd4c17bc.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Райан Кент&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">Отдан в аренду &quot;Барнсли&quot;</td>\r\n                <td class=\"PlayerDOB\">11.11.1996</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">41</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/67ddf6e407850f6d964cf2294e08f0e8e0c7b4bc.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Джек Данн&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">19.11.1994</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">49</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/647621fc6db3bd0c98f4aa3599a80af45ea69a4e.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Джордан Уильямс&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Уэльс\" src=\"http://www.myliverpool.ru/Team/Wales.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Уэльс\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">06.11.1995</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">50</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/70fe631537b8d346aa0f8299b84bcf85073a6066.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Лазар Маркович&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Сербия\" src=\"http://www.myliverpool.ru/Team/serbia.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Сербия\" /></td>\r\n                <td class=\"bplPlayer\">Отдан в аренду &quot;Спортинг&quot;</td>\r\n                <td class=\"PlayerDOB\">02.03.1994</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">54</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/default/0001/26/d9f75915be0bcaad011e588a59f503bd1ad6e91d.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Шейи Оджо</td>\r\n                <td class=\"countryName\">&nbsp;<img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">19.06.1997</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">68</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/a7f3ec8f87e0b32770837c930138b5bcdb121b4f.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Педро Чиривелла&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Испания\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/20px-Flag_of_Spain.svg.png\" title=\"Испания\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">23.05.1997</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">&nbsp;</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"https://pp.vk.me/c637117/v637117668/ad2c/JR0ncg4qDIM.jpg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Аллан де Соуза&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Бразилия\" src=\"http://www.myliverpool.ru/Team/brazil.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Бразилия\" /></td>\r\n                <td class=\"bplPlayer\">Отдан в аренду &nbsp;&quot;Герта&quot;</td>\r\n                <td class=\"PlayerDOB\">03.03.1997</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">&nbsp;</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/97613797e93937bd617a3e8d2303450ba1c14c40.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Харри Уилсон&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Уэльс\" src=\"http://www.myliverpool.ru/Team/Wales.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Уэльс\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">22.03.1997</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">&nbsp;</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/5547de4201197e0301ef4b2ae89d3a7f00fc5261.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Бобби Адеканье&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Нигерия\" src=\"http://cdn.modernghana.com/images/content/drapeau_nigeria1300x150.jpg\" style=\"width:30px\" title=\"Нигерия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">16.02.1999</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">&nbsp;</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/33a666bd19cc17d0d99e7d441782ba94cf18bd36.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Трент Александр-Арнольд&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">07.10.1998</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"playerPossition\" colspan=\"6\">Нападающие:</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">11</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/c01e344a5c6e6ff629d86142efa1fa5c8b6c1104.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Роберто Фирмино&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Бразилия\" src=\"http://www.myliverpool.ru/Team/brazil.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Бразилия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">02.10.1991</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">15</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/028b8e230d9de467d9251e3e582633344c1dd5b1.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Дэниел Старридж&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">01.09.1989</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">19</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/misc/0001/26/a9b8791397ba21c49fa02106f5ae2c9ca4c1d28e.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Садио Мане&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Сенегал\" src=\"http://www.worldstatesmen.org/sn.gif\" style=\"width:30px\" title=\"Сенегал\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">10.04.1992</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">27</td>\r\n                <td class=\"SquadPhoto\"><img alt=\"Divock Origi\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/Players/Squad/Divock_Origi.jpg\" style=\"height:90px\" title=\"Divock Origi\" /></td>\r\n                <td class=\"squadName\">Дивок Ориги&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Бельгия\" src=\"http://www.myliverpool.ru/Team/Belgium-30.png\" style=\"cursor: default; color: rgb(51, 51, 51); font-family: sans-serif, Arial, Verdana; font-size: 13px; line-height: 20.8px; background-color: rgb(255, 255, 255);\" title=\"Бельгия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">18.04.1995</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">28</td>\r\n                <td class=\"SquadPhoto\"><img alt=\"Danny Ings\" class=\"SquadPhoto\" src=\"http://www.myliverpool.ru/images/Players/Squad/Danny_Ings.jpg\" style=\"height:90px\" title=\"Danny Ings\" /></td>\r\n                <td class=\"squadName\">Дэнни Ингс&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Англия\" src=\"http://www.myliverpool.ru/Team/England.png\" title=\"Англия\" /></td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">23.07.1992</td>\r\n            </tr>\r\n            <tr class=\"squadEven\">\r\n                <td class=\"PlayerNum\">&nbsp;</td>\r\n                <td class=\"SquadPhoto\">&nbsp;</td>\r\n                <td class=\"squadName\">&nbsp;</td>\r\n                <td class=\"countryName\">&nbsp;</td>\r\n                <td class=\"bplPlayer\">&nbsp;</td>\r\n                <td class=\"PlayerDOB\">&nbsp;</td>\r\n            </tr>\r\n            <tr class=\"squadOdd\">\r\n                <td class=\"PlayerNum\">&nbsp;</td>\r\n                <td class=\"SquadPhoto\"><img class=\"SquadPhoto\" src=\"http://assets.lfcimages.com/v2/uploads/media/default/0001/19/1ff0ad889717c7243970122389a8666698eeffa5.jpeg\" style=\"height:90px\" title=\"\" /></td>\r\n                <td class=\"squadName\">Тайво Авонийи&nbsp;</td>\r\n                <td class=\"countryName\"><img alt=\"Нигерия\" src=\"http://cdn.modernghana.com/images/content/drapeau_nigeria1300x150.jpg\" style=\"width:30px\" title=\"Нигерия\" /></td>\r\n                <td class=\"bplPlayer\">Отдан в аренду &quot;НЕК&quot;</td>\r\n                <td class=\"PlayerDOB\">12.08.1997</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";

/***/ },
/* 94 */
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-10 col-sm-10\">\r\n            <label for=\"upload-image\"\r\n                   class=\"btn btn-info\">Загрузить изображениЯ</label>\r\n            <input type=\"file\"\r\n                   class=\"hidden\"\r\n                   accept=\"image/*\"\r\n                   [multiple]=\"isMultiple\"\r\n                   (change)=\"onUploadImage($event)\"\r\n                   id=\"upload-image\" />\r\n        <div *ngFor=\"let file of uploadedFiles\">\r\n            <img [src]=\"file\" alt=\"\" />\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 95 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <img class=\"center-block\" [src]=\"item.path\" [alt]=\"item.path\"/>\r\n    <br />\r\n    <input class=\"col-xs-offset-1 col-xs-10\" readonly value=\"{{item.path}}\" />\r\n</div>";

/***/ },
/* 96 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <a role=\"button\" *ngIf=\"defaultPath != path\" (click)=\"goUp()\">Вернуться назад</a>\r\n    <a class=\"btn btn-info\" [routerLink]=\"['/image/add']\">Добавить</a>\r\n    <a role=\"button\" class=\"pull-right\" *ngIf=\"selectedItem\" (click)=\"removeSelection()\">Отменить выбор</a>\r\n    <image-detail *ngIf=\"selectedItem\" [item]=\"selectedItem\"></image-detail>\r\n    <div *ngFor=\"let file of items\">\r\n        <a (click)=\"updateFolder(file.path)\">\r\n            <div role=\"button\" *ngIf=\"file.isFolder\" class=\"col-xs-2 bg-danger\" style=\"height: 50px; margin: 10px\" [textContent]=\"file.name\"></div>\r\n        </a>\r\n        <a>\r\n            <img role=\"button\" class=\"col-xs-2\" *ngIf=\"!file.isFolder\" [src]=\"file.path\" style=\"height: 50px; margin: 10px\" (click)=\"showDetails(file)\" [alt]=\"file.path\"/>\r\n        </a>\r\n    </div>\r\n</div>";

/***/ },
/* 97 */
/***/ function(module, exports) {

module.exports = "<p><img alt=\"\" src=\"http://www.myliverpool.ru/images/bplfacapone1.png\" style=\"height: 90px;\" /></p>\r\n\r\n<hr />\r\n<table class=\"table table-striped table-condensed\" align=\"center\" cellpadding=\"2\" cellspacing=\"2\" width=\"100%\">\r\n    <tbody>\r\n        <tr>\r\n            <td>П1</td>\r\n            <td>18.07.16</td>\r\n            <td>Транмир Роверс</td>\r\n            <td style=\"width: 38px;\">0 : 1</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Прентон Парк</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/tranmer_rovers_liverpul/2016-07-08-17797\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh/2016-07-09-17798\">Фото</a> <a href=\"http://vk.com/video-108388618_456239520\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>П2</td>\r\n            <td>13.07.16</td>\r\n            <td>Флитвуд Таун</td>\r\n            <td>0 : 5</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Хайбери</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/flitvud_taun_liverpul/2016-07-13-17822\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh/2016-07-14-17824\">Фото</a> <a href=\"http://vk.com/video-76470207_456244602\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>П3</td>\r\n            <td>17.07.16</td>\r\n            <td>Уиган Атлетик</td>\r\n            <td>0 : 2</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Ди-дабл-ю</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/uigan_atletik_liverpul/2016-07-17-17842\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh/2016-07-18-17844\">Фото</a> <a href=\"http://vk.com/video-28639294_456242179\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>П4</td>\r\n            <td>20.07.16</td>\r\n            <td>Хаддерсфилд Таун</td>\r\n            <td>0 : 2</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Гэлфарм</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/myliverpool_ru/2016-07-20-17862\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-07-20-17863\">Фото</a> <a href=\"https://vk.com/video-76470207_456244744\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>П5</td>\r\n            <td>28.07.16</td>\r\n            <td>Челси</td>\r\n            <td>1 : 0</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Пассадена</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/liverpul_chelsi/2016-07-27-17897\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh/2016-07-28-17901\">Фото</a> <a href=\"https://vk.com/video-104770729_456239578\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>П6</td>\r\n            <td>31.07.16</td>\r\n            <td>Милан</td>\r\n            <td>0 : 2</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Леви</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/liverpul_milan/2016-07-31-17908\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh/2016-07-31-17910\">Фото</a> <a href=\"https://vk.com/video-28639294_456242262\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>П7</td>\r\n            <td>02.08.16</td>\r\n            <td>Рома</td>\r\n            <td>2 : 1</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Стадион Буша</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/liverpul_roma/2016-08-01-17915\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh/2016-08-02-17916\">Фото</a> <a href=\"https://vk.com/video-120962911_456241005\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>П8</td>\r\n            <td>06.08.16</td>\r\n            <td>Барселона</td>\r\n            <td>0 : 4</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Уэмбли</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/barselona_liverpul/2016-08-06-17933\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh/2016-08-06-17934\">Фото</a> <a href=\"https://vk.com/video-28639294_456242350\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>П9</td>\r\n            <td>07.08.16</td>\r\n            <td>Майнц</td>\r\n            <td>4 : 0</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Кофас Арена</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/majnc_liverpul/2016-08-07-17937\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_majnc_4_0_liverpul/2016-08-07-17938\">Фото</a> <a href=\"https://vk.com/video-76470207_456245195\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ1</td>\r\n            <td>14.08.16</td>\r\n            <td>Арсенал</td>\r\n            <td>3 : 4</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Эмирейтс</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/arsenal_liverpul/2016-08-14-17964\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh/2016-08-14-17969\">Фото</a> <a href=\"https://vk.com/video-28639294_456242546\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ2</td>\r\n            <td>20.08.16</td>\r\n            <td>Бернли</td>\r\n            <td>2 : 0</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Терф Мур</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/bernli_liverpul/2016-08-20-18006\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-08-20-18007\">Фото</a> <a href=\"https://vk.com/video-28639294_456242678\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>КЛ</td>\r\n            <td>23.08.16</td>\r\n            <td>Бертон Альбион</td>\r\n            <td>0 : 5</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Пирелли Стэдиум</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/berton_albion_liverpul/2016-08-23-18022\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-08-23-18023\">Фото</a> <a href=\"https://vk.com/video-28639294_456242789\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ3</td>\r\n            <td>27.08.16</td>\r\n            <td>Тоттенхэм</td>\r\n            <td>1 : 1</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Уайт Харт Лейн</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/tottenkhehm_liverpul/2016-08-27-18041\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-08-27-18043\">Фото</a> <a href=\"https://vk.com/video359017891_456239493\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ4</td>\r\n            <td>10.09.16</td>\r\n            <td>Ливерпуль</td>\r\n            <td>4 : 1</td>\r\n            <td>Лестер</td>\r\n            <td>Энфилд</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/liverpul_lester_siti/2016-09-10-18103\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-09-10-18104\">Фото</a> <a href=\"https://vk.com/video-74938883_456239476\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ5</td>\r\n            <td>16.09.16</td>\r\n            <td>Челси</td>\r\n            <td>1 : 2</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Стэмфорд Бридж</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/chelsi_liverpul/2016-09-16-18126\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-09-17-18127\">Фото</a> <a href=\"https://vk.com/video-28639294_456243399\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>КЛ</td>\r\n            <td>20.09.16</td>\r\n            <td>Дерби</td>\r\n            <td>0 : 3</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Прайд Парк</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/derbi_kaunti_liverpul/2016-09-20-18142\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-09-20-18143\">Фото</a> <a href=\"https://vk.com/video-108388618_456239700\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ6</td>\r\n            <td>24.09.16</td>\r\n            <td><span>Ливерпуль</span></td>\r\n            <td>5 : 1</td>\r\n            <td>Халл Сити</td>\r\n            <td>Энфилд</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/liverpul_khall_siti/2016-09-24-18159\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-09-24-18160\">Фото</a> <a href=\"https://ok.ru/video/96957500017\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ7</td>\r\n            <td>01.10.16</td>\r\n            <td>Суонси</td>\r\n            <td>1 : 2</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Либерти</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/suonsi_liverpul/2016-10-01-18183\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-10-01-18185\">Фото</a> <a href=\"https://vk.com/video-22893032_456240266\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ8</td>\r\n            <td>17.10.16</td>\r\n            <td>Ливерпуль</td>\r\n            <td>0 : 0</td>\r\n            <td><span>Манчестер Юнайтед</span></td>\r\n            <td>Энфилд</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/liverpul_manchester_junajted/2016-10-17-18225\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-10-18-18226\">Фото</a> <a href=\"https://vk.com/video-128973102_456239954\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ9</td>\r\n            <td>22.10.16</td>\r\n            <td>Ливерпуль</td>\r\n            <td>2 : 1</td>\r\n            <td>Вест Бромвич Альбион</td>\r\n            <td>Энфилд</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/liverpul_vest_bromvich_albion/2016-10-22-18238\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-10-22-18239\">Фото</a> <a href=\"https://vk.com/video-128973102_456240157\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>КЛ</td>\r\n            <td>25.10.16</td>\r\n            <td>Ливерпуль</td>\r\n            <td>2 : 1</td>\r\n            <td>Тоттенхэм</td>\r\n            <td>Энфилд</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/liverpul_tottenkhehm_khotspur/2016-10-25-18251\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-10-25-18252\">Фото</a> <a href=\"https://vk.com/video-96235813_456239635\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ10</td>\r\n            <td>29.10.16</td>\r\n            <td>Кристал Пэлас</td>\r\n            <td>2 : 4</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Селхерст Парк</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/kristal_pehlas_liverpul/2016-10-29-18277\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh/2016-10-29-18278\">Фото</a> <a href=\"https://youtu.be/fNxtFgivvY4\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ11</td>\r\n            <td>06.11.16</td>\r\n            <td>Ливерпуль</td>\r\n            <td>6 : 1</td>\r\n            <td><span>Уотфорд</span></td>\r\n            <td>Энфилд</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/liverpul_0_0_uotford/2016-11-06-18316\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh/2016-11-06-18318\">Фото</a> <a href=\"https://www.youtube.com/watch?v=WVSRNjcwd4U\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ12</td>\r\n            <td>19.11.16</td>\r\n            <td>Саутгемптон</td>\r\n            <td>0 : 0</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Сент-Мэрис</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/sautgempton_liverpul/2016-11-19-18379\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha_sautgempton_vs_liverpul/2016-11-19-18380\">Фото</a> <a href=\"https://vk.com/video-132522472_456239041\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ13</td>\r\n            <td>26.11.16</td>\r\n            <td>Ливерпуль</td>\r\n            <td>2 : 0</td>\r\n            <td>Сандерленд</td>\r\n            <td>Энфилд</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/liverpul_sanderlend/2016-11-26-18401\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-11-26-18402\">Фото</a> <a href=\"https://vk.com/video-128021824_456239280\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>КЛ1/4</td>\r\n            <td>29.11.16</td>\r\n            <td>Ливерпуль</td>\r\n            <td>2 : 0</td>\r\n            <td>Лидс Юнайтед</td>\r\n            <td>Энфилд</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/liverpul_lids_junajted/2016-11-30-18416\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-11-30-18417\">Фото</a> <a href=\"https://vk.com/video-28639294_456245200\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ14</td>\r\n            <td>04.12.16</td>\r\n            <td>Борнмут</td>\r\n            <td>4 : 3</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Дин Корт</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/bornmut_4_3_liverpul/2016-12-04-18432\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh/2016-12-04-18433\">Фото</a> <a href=\"https://vk.com/video-1029342_456240282\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ15</td>\r\n            <td>11.12.16</td>\r\n            <td>Ливерпуль</td>\r\n            <td>2 : 2</td>\r\n            <td>Вест Хэм</td>\r\n            <td>Энфилд</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/liverpul_vest_khehm/2016-12-11-18461\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-12-11-18462\">Фото</a> <a href=\"https://vk.com/video-122493044_456240479\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ16</td>\r\n            <td>14.12.16</td>\r\n            <td>Миддлсбро</td>\r\n            <td>0 : 3</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Риверсайд</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/midlsbro_liverpul/2016-12-15-18472\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/foto_midlsbro_liverpul/2016-12-15-18473\">Фото</a> <a href=\"https://vk.com/video-117835363_456240480\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ17</td>\r\n            <td>19.12.16</td>\r\n            <td>Эвертон</td>\r\n            <td>0 : 1</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Гудиссон</td>\r\n            <td><a href=\"http://www.myliverpool.ru/news/ehverton_liverpul/2016-12-20-18488\">Отчет</a> <a href=\"http://www.myliverpool.ru/news/fotoreportazh_matcha/2016-12-20-18489\">Фото</a> <a href=\"https://vk.com/video-125580692_456239341\">Видео</a></td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ18</td>\r\n            <td>27.12.16</td>\r\n            <td>Ливерпуль</td>\r\n            <td>- : -</td>\r\n            <td>Сток Сити</td>\r\n            <td>Энфилд</td>\r\n            <td>20:15 МСК</td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ19</td>\r\n            <td>31.12.16</td>\r\n            <td>Ливерпуль</td>\r\n            <td>- : -</td>\r\n            <td>Манчестер Сити</td>\r\n            <td>Энфилд</td>\r\n            <td>20:30 МСК</td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ20</td>\r\n            <td>02.01.17</td>\r\n            <td>Сандерленд</td>\r\n            <td>- : -</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Стэдиум Оф Лайт</td>\r\n            <td>18:00 МСК</td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ21</td>\r\n            <td>15.01.17</td>\r\n            <td>Манчестер Юнайтед</td>\r\n            <td>- : -</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Олд Траффорд</td>\r\n            <td>19:00 МСК</td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ22</td>\r\n            <td>21.01.17</td>\r\n            <td>Ливерпуль</td>\r\n            <td>- : -</td>\r\n            <td>Суонси</td>\r\n            <td>Энфилд</td>\r\n            <td>22:45 МСК</td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ23</td>\r\n            <td>31.01.17</td>\r\n            <td>Ливерпуль</td>\r\n            <td>- : -</td>\r\n            <td>Челси</td>\r\n            <td>Энфилд</td>\r\n            <td>23:00 МСК</td>\r\n        </tr>\r\n        <tr>\r\n            <td>АПЛ24</td>\r\n            <td>04.02.17</td>\r\n            <td>Халл Сити</td>\r\n            <td>- : -</td>\r\n            <td>Ливерпуль</td>\r\n            <td>Кингстон</td>\r\n            <td>18:00 МСК</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<div style=\"padding: 20px;\">\r\n    <form action=\"../\">\r\n        <select onchange=\"window.open(this.options[this.selectedIndex].value, '_top')\">\r\n            <option selected=\"selected\" value=\"http://www.myliverpool.ru/index/kalendar_sezona_2016_2017/0-263\">Сезон 2016/17</option>\r\n            <option value=\"http://www.myliverpool.ru/index/kalendar_igry_2015_16/0-262\">Сезон 2015/16</option>\r\n            <option value=\"http://www.myliverpool.ru/index/kalendar_igr_2014_15/0-229\">Сезон 2014/15</option>\r\n            <option value=\"http://www.myliverpool.ru/index/kalendar_igr/0-56\">Сезон 2013/14</option>\r\n        </select>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 98 */
/***/ function(module, exports) {

module.exports = "<form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm.value)\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-md-2\">Cоперник</label>\r\n            <div class=\"col-md-10\">\r\n                <!--<autocomplete ng-model=\"vm.item.clubName\" name=\"clubName\" attr-placeholder=\"Введите клуб...\" click-activation=\"true\" data=\"vm.clubs\"\r\n                                  on-type=\"vm.updateClubs\" validation=\"max_len:30|required\"></autocomplete>-->\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Категория:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <select class=\"form-control\" name=\"categoryId\" ng-model=\"vm.item.typeId\" ng-options=\"type.id as type.name for type in vm.types\" validation=\"required\"></select>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <div class=\"checkbox\">\r\n                    <label class=\"control-label\">\r\n                        <input class=\"checkbox\" name=\"onTop\" formControlName=\"isHome\" type=\"checkbox\" /> Дома <!--todo add switcher--> \r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Дата</label>\r\n            <div class=\"col-md-5\">\r\n                <div class=\"input-group\">\r\n                    <!--<input type=\"text\" class=\"form-control\" validation=\"required\" name=\"date\"\r\n                           ng-readonly=\"true\" show-button-bar=\"false\"\r\n                           uib-datepicker-popup=\"dd/MMMM/yyyy\" ng-model=\"vm.item.date\"\r\n                           is-open=\"vm.status.opened\" datepicker-options=\"vm.dateOptions\" close-text=\"Закрыть\"\r\n                           alt-input-formats=\"altInputFormats\" ng-click=\"vm.open()\">-->\r\n                    <span class=\"input-group-btn va-top\">\r\n                        <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.open()\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <div class=\"input-group\">\r\n                    <!--<div uib-timepicker ng-model=\"vm.item.time\" ng-change=\"vm.timeChanged()\"\r\n                         hour-step=\"1\" minute-step=\"1\" show-meridian=\"false\" show-spinners=\"false\" ng-disabled=\"!vm.item.date\"></div>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-offset-2 col-md-10\">\r\n                <button type=\"submit\" [disabled]=\"!editForm.valid\" class=\"btn btn-default\">Сохранить</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n";

/***/ },
/* 99 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <div class=\"btn-group\">\r\n        <form class=\"form-inline btn-block\">\r\n            <!--<div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.typeId\"\r\n                        ng-options=\"type.id as type.name for type in vm.types\" ng-change=\"vm.changeTypeId()\"></select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" ng-model=\"vm.filterText\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByText()\" placeholder=\"Поиск в тексте пожеланий\" /> <!-todo magic number->\r\n            </div>-->\r\n            <button class=\"btn btn-success\" type=\"button\" [routerLink]=\"['/match', 0, 'edit' ]\">Добавить</button>\r\n        </form>\r\n    </div>\r\n    <div class=\"top20\" *ngFor=\"let item of items\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">\r\n                    <a ui-sref=\"clubEdit({id: item.id})\"><span [textContent]=\"item.name\"></span></a>\r\n                    <span class=\"col-xs-1 col-sm-1 pull-right\">\r\n                        <a ng-click=\"vm.delete($index)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div [textContent]=\"item.englishName\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <img src=\"{{item.logo}}\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <!--<uib-pagination ng-show=\"vm.totalItems > vm.itemPerPage\" total-items=\"vm.totalItems\" ng-model=\"vm.page\" ng-change=\"vm.goToPage()\"></uib-pagination>-->\r\n</div>";

/***/ },
/* 100 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-offset-{{deep}} col-sm-offset-{{deep}} comment container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-9 col-sm-9\">\r\n            <a [routerLink]=\"['/user', item.authorId]\" [textContent]=\"item.authorUserName\"></a>\r\n            <span class=\"small\" [textContent]=\"item.additionTime | date:'medium'\"></span>\r\n        </div>\r\n        <div class=\"col-xs-3 col-sm-3\">\r\n            <span class=\"pull-right\">\r\n                    <a *ngIf=\"roles.isModerator || roles.isSelf(item.authorId)\" (click)=\"showEditModal()\"><span class=\"glyphicon glyphicon-pencil\"> </span></a>\r\n                    <a *ngIf=\"roles.isModerator\" (click)=\"delete()\"><span class=\"glyphicon glyphicon-trash\"> </span></a>\r\n                </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 col-sm-2\">\r\n            <img class=\"avatar-medium\" [src]=\"item.photo\" [alt]=\"item.authorUserName\"/>\r\n        </div>\r\n        <div class=\"col-xs-10 col-sm-10\">\r\n            <p [textContent]=\"item.message\"></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"item.answer\">\r\n        <div class=\"col-xs-3 col-sm-3\">Ответ:</div>\r\n        <div class=\"col-xs-9 col-sm-9\">\r\n            <i [textContent]=\"item.answer\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-12\" *ngIf=\"!roles.isSelf(item.authorId) && canCommentary\">\r\n        <a (click)=\"showAddCommentModal()\">Ответить</a>\r\n    </div>\r\n</div>\r\n<div *ngFor=\"let child of item.children\">\r\n    <materialComment-detail [item]=\"child\" [deep]=\"deep > 6 ? 7 : deep+1\" [materialId]=\"materialId\" [canCommentary]=\"canCommentary\" [parent]=\"item\"></materialComment-detail>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #addCommentModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Добавить комментарий</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <textarea [formControl]=\"commentForm.controls['message']\"></textarea>\r\n            </div>    \r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"addComment()\">Добавить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #editCommentModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Редактировать комментарий</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div>\r\n                    <textarea [formControl]=\"commentForm.controls['message']\"></textarea>\r\n                </div>\r\n                <div *ngIf=\"roles.isEditor\">\r\n                    <textarea [formControl]=\"commentForm.controls['answer']\"></textarea>\r\n                </div>\r\n            </div>    \r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"edit()\">Обновить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 101 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <!--div class=\"btn-group\">\r\n        <form class=\"form-inline btn-block\">\r\n            <div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.typeId\"\r\n                        ng-options=\"type.id as type.name for type in vm.types\" ng-change=\"vm.changeTypeId()\"></select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" ng-model=\"vm.filterText\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByText()\" placeholder=\"Поиск в тексте пожеланий\" />\r\n            </div>\r\n            <button class=\"btn btn-success\" ui-sref=\"wishEdit()\">Добавить</button>\r\n        </form>\r\n    </div-->\r\n    <div class=\"top20\" *ngFor=\"let comment of items; let i = index;\">\r\n        <div class=\"panel\" ng-class=\"\">\r\n            <div class=\"panel-heading panel-default\">\r\n                <h3 class=\"panel-title\">\r\n                    <a [routerLink]=\"['/user', comment.authorId]\"><span [textContent]=\"comment.authorUserName\"></span></a>\r\n                    <span class=\"col-xs-1 col-sm-1 pull-right\" *ngIf=\"roles.isModerator\">\r\n                        <a [hidden]=\"comment.isVerified\" (click)=\"verify(i)\"><span class=\"glyphicon glyphicon-ok\"></span></a>\r\n                        <a (click)=\"showDeleteModal(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div [textContent]=\"comment.message\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <div [textContent]=\"comment.additionTime | date:'medium'\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <pagination *ngIf=\"items\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 102 */
/***/ function(module, exports) {

module.exports = "<div>Комментарии: <span [textContent]=\"totalItems\"></span></div>\r\n\r\n<div class=\"\" *ngFor=\"let comment of items\">\r\n    <materialComment-detail [item]=\"comment\" [deep]=\"0\" [materialId]=\"materialId\" [canCommentary]=\"canCommentary\"></materialComment-detail>\r\n</div>\r\n\r\n<form class=\"form-horizontal\" role=\"form\" [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit(commentForm.value)\">\r\n    <div class=\"col-md-12\" *ngIf=\"canCommentary && roles.isLogined\">\r\n        <div class=\"col-md-12\">\r\n            <textarea mark-it-up class=\"col-md-offset-2 col-md-8\" rows=\"6\" name=\"message\" formControlName=\"message\"></textarea>\r\n        </div>\r\n        <div class=\"\">\r\n            <button class=\"btn btn-primary center-block\" [disabled]=\"!commentForm.valid\" type=\"submit\">Добавить</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<div class=\"pagination\">\r\n    <pagination *ngIf=\"items && totalItems > itemsPerPage\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n</div>";

/***/ },
/* 103 */
/***/ function(module, exports) {

module.exports = "<div class=\"top20\">\r\n    <form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\">Название</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"title\" formControlName=\"name\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\">Описание</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <textarea mark-it-up class=\"form-control\" name=\"brief\" rows=\"4\" formControlName=\"description\"> </textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <input type=\"submit\" [disabled]=\"!editForm.valid\" value=\"Отправить\" class=\"btn btn-default\" />\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 104 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <a *ngIf=\"roles.isEditor\" [routerLink]=\"['/newsCategory', 0, 'edit']\">Создать категорию</a>\r\n    <ul *ngFor=\"let category of items; let i = index;\">\r\n        <li *ngIf=\"roles.isEditor || category.itemsCount != 0\">\r\n            <a [routerLink]=\"['/news/list', 1, category.id ]\">\r\n                <span [textContent]=\"category.name\"></span> [<span [textContent]=\"category.itemsCount\"></span>]\r\n            </a>\r\n            <span *ngIf=\"roles.isEditor\">\r\n                <a [routerLink]=\"['/newsCategory', category.id, 'edit']\"> <span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n                <a *ngIf=\"category.itemsCount == 0\" (click)=\"delete(i)\"> <span class=\"glyphicon glyphicon-trash\"></span></a>\r\n            </span>\r\n        </li>\r\n    </ul>\r\n</div>";

/***/ },
/* 105 */
/***/ function(module, exports) {

module.exports = "<div class=\"\" *ngIf=\"item\">\r\n    <div class=\"alert-danger flex-vertical-center\">\r\n        <h3 class=\"col-xs-12 col-sm-12\">\r\n            <span class=\"col-xs-9 col-sm-9\" [textContent]=\"item.title\"></span>\r\n            <span class=\"col-xs-3 col-sm-3 pull-right\" *ngIf=\"roles.isEditor || roles.isSelf(item.userId)\">\r\n                <a [hidden]=\"!item.pending || !roles.isEditor\" (click)=\"showActivateModal(i)\"><span class=\"glyphicon glyphicon-ok\"></span></a>\r\n                <a [routerLink]=\"['/news', item.id, 'edit']\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n                <a (click)=\"showDeleteModal(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n            </span>\r\n        </h3>\r\n    </div>\r\n    <div class=\"\">\r\n        <article [innerHTML]=\"item.message\"></article>\r\n        <div class=\"alert-warning\">\r\n            <ul class=\"list-inline\">\r\n                <li><label>Просмотры:</label> <span [textContent]=\"item.reads\"></span></li>\r\n                <li><label>Источник:</label> <span [textContent]=\"item.source\"></span></li>\r\n                <li><label>Дата добавления:</label> <span [textContent]=\"item.additionTime | date:'medium'\"></span></li>\r\n                <li><label>Категория:</label> <a [routerLink]=\"['/news/list', 1, item.categoryId ]\"> <span [textContent]=\"item.categoryName\"></span> </a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <comments [materialId]=\"item.id\" [canCommentary]=\"item.canCommentary\"></comments>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #activateModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Активировать?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"activate()\">Активировать</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 106 */
/***/ function(module, exports) {

module.exports = "<div class=\"top20\">\r\n    <form class=\"form-horizontal\" name=\"editForm\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm.value)\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Категория:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <select class=\"form-control\" name=\"categoryId\" formControlName=\"categoryId\">\r\n                    <option *ngFor=\"let category of categories\" [value]=\"category.id\" [textContent]=\"category.name\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Название:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"title\" formControlName=\"title\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Краткое описание:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <textarea class=\"form-control\" name=\"brief\" rows=\"4\" formControlName=\"brief\"> </textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Текст новости:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <textarea class=\"form-control\" tinymce name=\"message\" rows=\"6\" formControlName=\"message\"> </textarea>\r\n                <tinymce [initVal]=\"123\" (change)=\"changeMessage($event)\"></tinymce>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Источник:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"source\" formControlName=\"source\"/>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-xs-2 col-sm-2\"> Главное фото:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <input class=\"form-control\" name=\"photoPath\" formControlName=\"photo\" />\r\n            </div>\r\n            <image-addition [isMultiple]=\"false\" (loadedImage)=\"updateImage($event)\"></image-addition>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <div class=\"checkbox\">\r\n                    <label class=\"control-label\">\r\n                        <input class=\"checkbox\" name=\"canCommentary\" formControlName=\"canCommentary\" type=\"checkbox\" checked /> Разрешить комментарии\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <div class=\"checkbox\">\r\n                    <label class=\"control-label\">\r\n                        <input class=\"checkbox\" name=\"onTop\" formControlName=\"onTop\" type=\"checkbox\" /> Наверху\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"roles.isEditor\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <div class=\"checkbox\">\r\n                    <label class=\"control-label\">\r\n                        <input class=\"checkbox\" name=\"pending\" formControlName=\"pending\" type=\"checkbox\" /> Отложена\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-offset-2 col-sm-offset-2 col-xs-10 col-sm-10\">\r\n                <button type=\"submit\" [disabled]=\"!editForm.valid\" class=\"btn btn-default\">Сохранить</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 107 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div>\r\n        <!--ng-if=\"vm.page > 0\">-->\r\n        <!--form class=\"form-inline\">\r\n        <div class=\"form-group\">\r\n            <select class=\"form-control\"\r\n                    ng-model=\"vm.categoryId\"\r\n                    ng-options=\"category.id as category.name for category in vm.categories\" ng-change=\"vm.changeCategoryId()\"></select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <input class=\"form-control\" ng-model=\"vm.userName\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByUserName()\" placeholder=\"Логин\"/>\r\n        </div>\r\n        </form-->\r\n    </div>\r\n    <div class=\"row\" *ngFor=\"let item of items; let i = index;\">\r\n        <div class=\"\" *ngIf=\"!item.pending || roles.isEditor\">\r\n            <div class=\"flex-vertical-center\">\r\n                <a [routerLink]=\"['/news', item.id]\" class=\"col-xs-9 col-sm-9\"><h4 [textContent]=\"item.title\"></h4></a>\r\n                <span class=\"col-xs-3 col-sm-3 pull-right\" *ngIf=\"roles.isEditor || roles.isSelf(item.userId)\">\r\n                    <a [hidden]=\"!item.pending || !roles.isEditor\" (click)=\"showActivateModal(i)\"><span class=\"glyphicon glyphicon-ok\"></span></a>\r\n                    <a [routerLink]=\"['/news', item.id, 'edit']\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n                    <a (click)=\"showDeleteModal(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                </span>\r\n            </div>\r\n            <div class=\"\">\r\n                <img class=\"img-thumbnail news-mini center-block\" alt=\"\" [src]=\"item.photoPath\" />\r\n            </div>\r\n            <div class=\"\">\r\n                <i> <span [innerHTML]=\"item.brief\"></span></i>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-12\">\r\n                <ul class=\"list-inline small small-offset\">\r\n                    <li class=\"\">Категория:</li>\r\n                    <li class=\"\"><a [routerLink]=\"['/news/list', page]\" [queryParams]=\"{categoryId: item.categoryId, userName: userName}\" [textContent]=\"item.categoryName\"></a></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Время добавления:</li> \r\n                    <li class=\"\" [textContent]=\"item.additionTime | date:'medium'\"></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Просмотры</li>\r\n                    <li class=\"\" [textContent]=\"item.reads\"></li>\r\n                    <li class=\"\">|</li>\r\n                    <li class=\"\">Автор:</li>\r\n                    <li class=\"\"><a [routerLink]=\"['/user', item.userId ]\" [textContent]=\"item.userName\"></a></li>\r\n                    <li *ngIf=\"item.canCommentary\" class=\"\">| Комментарии: <span [textContent]=\"item.commentsCount\"></span></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"pagination\">\r\n        <pagination *ngIf=\"items\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #activateModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Активировать?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"activate()\">Активировать</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Удалить?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideModal()\" type=\"button\">Отмена</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"delete()\">Удалить</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 108 */
/***/ function(module, exports) {

module.exports = "<table class=\"table table-condensed table-bordered table-striped\">\r\n    <tbody>\r\n        <tr>\r\n            <th colspan=\"7\" class=\"StaffTab\">ТАБЛИЦА БОМБАРДИРОВ 2016/17</th>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"SquadFirst\" width=\"10%\">№</td>\r\n            <td class=\"SquadFirst\" width=\"26%\">Имя игрока</td>\r\n            <td class=\"SquadFirst\" width=\"10%\"><abbr title=\"Английская Премьер-Лига\">АПЛ</abbr></td>\r\n            <td class=\"SquadFirst\" width=\"10%\"><abbr title=\"Лига Чемпионов\">ЛЧ</abbr></td>\r\n            <td class=\"SquadFirst\" width=\"10%\"><abbr title=\"Кубок Англии\">КА</abbr></td>\r\n            <td class=\"SquadFirst\" width=\"10%\"><abbr title=\"Кубок английской лиги\">КЛ</abbr></td>\r\n            <td class=\"SquadFirst\" width=\"14%\">Всего</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>19</td>\r\n            <td class=\"TextStatTab\">Садио Мане</td>\r\n            <td>8</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>8</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>27</td>\r\n            <td class=\"TextStatTab\">Дивок Ориги</td>\r\n            <td>4</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>3</td>\r\n            <td>7</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>11</td>\r\n            <td class=\"TextStatTab\">Роберто Фирмино</td>\r\n            <td>5</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>6</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>10</td>\r\n            <td class=\"TextStatTab\">Филиппе Коутиньо</td>\r\n            <td>5</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>6</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>20</td>\r\n            <td class=\"TextStatTab\">Адам Лаллана</td>\r\n            <td>6</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>6</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>7</td>\r\n            <td class=\"TextStatTab\">Джеймс Милнер</td>\r\n            <td>5</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>5</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>15</td>\r\n            <td class=\"TextStatTab\">Дэниел Старридж</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>4</td>\r\n            <td>4</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>23</td>\r\n            <td class=\"TextStatTab\"><span style=\"line-height: 20.8px;\">Эмре Джан</span></td>\r\n            <td>3</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>3</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>6</td>\r\n            <td class=\"TextStatTab\">Деян Ловрен</td>\r\n            <td>2</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>2</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>17</td>\r\n            <td class=\"TextStatTab\"><span style=\"line-height: 20.8px;\">Рагнар Клаван</span></td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>1</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>14</td>\r\n            <td class=\"TextStatTab\">Джордан Хендерсон</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>32</td>\r\n            <td class=\"TextStatTab\"><span style=\"line-height: 20.8px;\">Жоэль Матип</span></td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>5</td>\r\n            <td class=\"TextStatTab\">Джорджиньо Вейналдум</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>58</td>\r\n            <td class=\"TextStatTab\">Бенджамин Вудберн</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>1</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<table class=\"table table-condensed table-bordered table-striped\">\r\n    <tbody>\r\n        <tr>\r\n            <th colspan=\"7\" class=\"StaffTab\">ТАБЛИЦА АССИСТЕНТОВ 2016/17</th>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"SquadFirst\" width=\"10%\">№</td>\r\n            <td class=\"SquadFirst\" width=\"26%\">Имя игрока</td>\r\n            <td class=\"SquadFirst\" width=\"10%\"><abbr title=\"Английская Премьер-Лига\">АПЛ</abbr></td>\r\n            <td class=\"SquadFirst\" width=\"10%\"><abbr title=\"Лига Чемпионов\">ЛЧ</abbr></td>\r\n            <td class=\"SquadFirst\" width=\"10%\"><abbr title=\"Кубок Англии\">КА</abbr></td>\r\n            <td class=\"SquadFirst\" width=\"10%\"><abbr title=\"Кубок английской лиги\">КЛ</abbr></td>\r\n            <td class=\"SquadFirst\" width=\"14%\">Всего</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>10</td>\r\n            <td class=\"TextStatTab\">Филиппе Коутиньо</td>\r\n            <td>5</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>6</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>20</td>\r\n            <td class=\"TextStatTab\">Адам Лаллана</td>\r\n            <td>6</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>6</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>19</td>\r\n            <td class=\"TextStatTab\">Садио Мане</td>\r\n            <td>4</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>2</td>\r\n            <td>6</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>11</td>\r\n            <td class=\"TextStatTab\">Роберто Фирмино</td>\r\n            <td>3</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>4</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>5</td>\r\n            <td class=\"TextStatTab\">Джорджиньо Вейналдум</td>\r\n            <td>2</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>2</td>\r\n            <td>4</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>14</td>\r\n            <td class=\"TextStatTab\">Джордан Хендерсон</td>\r\n            <td>4</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>4</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>7</td>\r\n            <td class=\"TextStatTab\">Джеймс Милнер</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>2</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>2</td>\r\n            <td class=\"TextStatTab\">Натаниэль Клайн</td>\r\n            <td>2</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>3</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>15</td>\r\n            <td class=\"TextStatTab\">Дэниел Старридж</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>18</td>\r\n            <td class=\"TextStatTab\">Альберто Морено</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>66</td>\r\n            <td class=\"TextStatTab\">Трент Александр- Арнольд</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>1</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>23</td>\r\n            <td class=\"TextStatTab\">Эмре Джан</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>27</td>\r\n            <td class=\"TextStatTab\">Дивок Ориги</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<table class=\"table table-condensed table-bordered table-striped\">\r\n    <tbody>\r\n        <tr>\r\n            <th colspan=\"12\" class=\"StaffTab\"><span style=\"font-weight: normal;\">КАРТОЧКИ ИГРОКОВ 2016/17</span></th>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"SquadFirst\" width=\"10%\">№</td>\r\n            <td class=\"SquadFirst\" width=\"26%\">Имя игрока</td>\r\n            <td class=\"SquadFirst\" colspan=\"2\" width=\"10%\"><abbr title=\"Английская Премьер-Лига\">АПЛ</abbr></td>\r\n            <td class=\"SquadFirst\" colspan=\"2\" width=\"10%\"><abbr title=\"Лига Чемпионов\">ЛЧ</abbr></td>\r\n            <td class=\"SquadFirst\" colspan=\"2\" width=\"10%\"><abbr title=\"Кубок Англии\">КА</abbr></td>\r\n            <td class=\"SquadFirst\" colspan=\"2\" width=\"10%\"><abbr title=\"Кубок английской лиги\">КЛ</abbr></td>\r\n            <td class=\"SquadFirst\" colspan=\"2\" width=\"14%\">Всего</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>&nbsp;</td>\r\n            <td class=\"TextStatTab\">&nbsp;</td>\r\n            <td>\r\n                <p style=\"font-size: 120%; color: yellow; text-shadow: 1px 1px 2px black\"><span style=\"color:#FFFF00;\"><span style=\"font-size: 13px;\">▊</span></span></p>\r\n            </td>\r\n            <td>\r\n                <p style=\"font-size: 120%; color: red; text-shadow: 1px 1px 2px black\"><span style=\"color:#FF0000;\"><span style=\"font-size: 13px;\">▊</span></span></p>\r\n            </td>\r\n            <td>\r\n                <p style=\"font-size: 120%; color: yellow; text-shadow: 1px 1px 2px black\"><span style=\"color:#FFFF00;\"><span style=\"font-size: 13px;\">▊</span></span></p>\r\n            </td>\r\n            <td>\r\n                <p style=\"font-size: 120%; color: red; text-shadow: 1px 1px 2px black\"><span style=\"color:#FF0000;\"><span style=\"font-size: 13px;\">▊</span></span></p>\r\n            </td>\r\n            <td>\r\n                <p style=\"font-size: 120%; color: yellow; text-shadow: 1px 1px 2px black\"><span style=\"color:#FFFF00;\"><span style=\"font-size: 13px;\">▊</span></span></p>\r\n            </td>\r\n            <td>\r\n                <p style=\"font-size: 120%; color: red; text-shadow: 1px 1px 2px black\"><span style=\"color:#FF0000;\"><span style=\"font-size: 13px;\">▊</span></span></p>\r\n            </td>\r\n            <td>\r\n                <p style=\"font-size: 120%; color: yellow; text-shadow: 1px 1px 2px black\"><span style=\"color:#FFFF00;\"><span style=\"font-size: 13px;\">▊</span></span></p>\r\n            </td>\r\n            <td>\r\n                <p style=\"font-size: 120%; color: red; text-shadow: 1px 1px 2px black\"><span style=\"color:#FF0000;\"><span style=\"font-size: 13px;\">▊</span></span></p>\r\n            </td>\r\n            <td>\r\n                <p style=\"font-size: 120%; color: yellow; text-shadow: 1px 1px 2px black\"><span style=\"color:#FFFF00;\"><span style=\"font-size: 13px;\">▊</span></span></p>\r\n            </td>\r\n            <td>\r\n                <p style=\"font-size: 120%; color: red; text-shadow: 1px 1px 2px black\"><span style=\"color:#FF0000;\"><span style=\"font-size: 13px;\">▊</span></span></p>\r\n            </td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>14</td>\r\n            <td class=\"TextStatTab\">Джордан Хендерсон</td>\r\n            <td>6</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>6</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>6</td>\r\n            <td class=\"TextStatTab\">Деян Ловрен</td>\r\n            <td>4</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>4</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>32</td>\r\n            <td class=\"TextStatTab\">Жоэль Матип</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>10</td>\r\n            <td class=\"TextStatTab\"><span style=\"line-height: 20.8px;\">Филиппе Коутиньо</span></td>\r\n            <td>2</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>2</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>19</td>\r\n            <td class=\"TextStatTab\"><span style=\"line-height: 20.8px;\">Садио Мане</span></td>\r\n            <td>2</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>2</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>21</td>\r\n            <td class=\"TextStatTab\">Лукас Лейва</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>18</td>\r\n            <td class=\"TextStatTab\">Альберто Морено</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrOdd\">\r\n            <td>16</td>\r\n            <td class=\"TextStatTab\">Марко Груич</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>2</td>\r\n            <td>-</td>\r\n            <td>2</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>7</td>\r\n            <td class=\"TextStatTab\">Джеймс Милнер</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>15</td>\r\n            <td class=\"TextStatTab\">Дэниел Старридж</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>28</td>\r\n            <td class=\"TextStatTab\">Дэнни Ингс</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>66</td>\r\n            <td class=\"TextStatTab\">Трент Александр- Арнольд</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>23</td>\r\n            <td class=\"TextStatTab\">Эмре Джан</td>\r\n            <td>2</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>2</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>11</td>\r\n            <td class=\"TextStatTab\">Роберто Фирмино</td>\r\n            <td>2</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>2</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>5</td>\r\n            <td class=\"TextStatTab\">Джорджиньо Вейналдум</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n        </tr>\r\n        <tr class=\"CldrEven\">\r\n            <td>27</td>\r\n            <td class=\"TextStatTab\">Дивок Ориги</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n            <td>1</td>\r\n            <td>-</td>\r\n        </tr>\r\n    </tbody>\r\n</table>";

/***/ },
/* 109 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 form-horizontal margin-top-middle\" *ngIf=\"item\">\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Получатель</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" disabled [value]=\"item.receiver\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Заголовок</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" disabled [value]=\"item.title\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Сообщение</label>\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control\" disabled rows=\"4\" [textContent]=\"item.message\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <!--a [routerLink]=\"['/pm', 0, 'edit', {username: item.receiver, userId: item.id}]\" >Ответить</!a-->\r\n            <!--<a *ngIf=\"roles.isSelf(item.receiverId)\" [routerLink]=\"['/pm', 0, 'edit']\" >Ответить</a>-->\r\n            <a *ngIf=\"roles.isSelf(item.receiverId)\" (click)=\"writePm()\">Ответить</a>\r\n        </div>\r\n    </div>\r\n    <pm-reply *ngIf=\"selectedUserId\" [userId]=\"item.receiverId\" (close)=\"closePmWindow($event);\" [userName]=\"item.receiver\" [title]=\"item.title\"></pm-reply>\r\n</div>";

/***/ },
/* 110 */
/***/ function(module, exports) {

module.exports = "<form class=\"form-horizontal col-md-12\" role=\"form\" name=\"writePm\"  [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h2>Написать сообщение</h2>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Получатель</label>\r\n        <div class=\"col-md-10\">\r\n            <!--p class=\"text-danger col-md-offset-2\" ng-if=\"vm.errorMessage\">\r\n            <i ng-bind=\"vm.errorMessage\"></i>\r\n            </!p-->\r\n            <input\r\n                (valueChanged)=\"updateUsername($event)\"\r\n                attr-placeholder=\"Введите логин...\"\r\n                auto-complete class=\"form-control\"\r\n                display-property-name=\"username\"\r\n                formControlName=\"receiver\"\r\n                loading-text=\"Загрузочка\"\r\n                min-chars=\"2\"\r\n                name=\"receiver\"\r\n                type=\"text\"\r\n                [source]=\"users\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Заголовок</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" name=\"title\" formControlName=\"title\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Сообщение</label>\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control\" name=\"message\" rows=\"4\" formControlName=\"message\"> </textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <button [disabled]=\"!editForm.valid\" type=\"submit\" class=\"btn btn-default\">Отправить</button>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ },
/* 111 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <tabset>\r\n        <tab heading=\"Полученные\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <td>#</td>\r\n                    <td>Заголовок</td>\r\n                    <td>Отправитель</td>\r\n                    <td>Дата получения</td>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let message of received; let i = index\">\r\n                <tr>\r\n                    <td [textContent]=\"i + 1\"></td>\r\n                    <td>\r\n                        <a [routerLink]=\"['/pm', message.id]\">\r\n                            <b *ngIf=\"!message.isRead\" [textContent]=\"message.title\"></b>\r\n                            <span *ngIf=\"message.isRead\" [textContent]=\"message.title\"></span>\r\n                        </a>\r\n                    </td>\r\n                    <td><a [routerLink]=\"['/user', message.senderId]\" [textContent]=\"message.sender\"></a></td>\r\n                    <td [textContent]=\"message.sentTime | date:'medium'\"></td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </tab>\r\n        <tab heading=\"Отправленные\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <td>#</td>\r\n                    <td>Заголовок</td>\r\n                    <td>Получатель</td>\r\n                    <td>Дата отправки</td>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let message of sent; let i = index\">\r\n                <tr>\r\n                    <td [textContent]=\"i + 1\"></td>\r\n                    <td>\r\n                        <a [routerLink]=\"['/pm', message.id]\">\r\n                            <b *ngIf=\"!message.isRead\" [textContent]=\"message.title\"></b>\r\n                            <span *ngIf=\"message.isRead\" [textContent]=\"message.title\"></span>\r\n                        </a>\r\n                    </td>\r\n                    <td><a [routerLink]=\"['/user', message.receiverId]\" [textContent]=\"message.receiver\"></a></td>\r\n                    <td [textContent]=\"message.sentTime | date:'medium'\"></td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </tab>\r\n        <tab heading=\"Написать сообщеньку\">\r\n            <pm-edit></pm-edit>\r\n        </tab> <!--(select)=\"writePm()\"-->\r\n    </tabset>\r\n</div>";

/***/ },
/* 112 */
/***/ function(module, exports) {

module.exports = "<form class=\"form-horizontal col-md-12\" role=\"form\" name=\"writePm\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h2>Написать сообщение</h2>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Получатель</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" readonly\r\n                   [value]=\"userName\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Заголовок</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" name=\"title\" formControlName=\"title\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Сообщение</label>\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control\" name=\"message\" rows=\"4\" formControlName=\"message\"> </textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <button [disabled]=\"!editForm.valid\" type=\"submit\" class=\"btn btn-default\">Отправить</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeWindow()\">Отмена</button>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ },
/* 113 */
/***/ function(module, exports) {

module.exports = "<!-- BEGIN of Soccerway widget HTML fragment --><!-- Personal code for this widget: 0fssvo76bgEyX1ifo -->\r\n<iframe frameborder=\"0\"\r\n        height=\"520\"\r\n        marginheight=\"0\"\r\n        marginwidth=\"0\"\r\n        scrolling=\"no\" \r\n        src=\"http://widgets.soccerway.com/widget/free/classic/competition/8/#d=650x600&amp;f=table,table_colmp,table_colmw,table_colmd,table_colml,table_colgf,table_colga,table_colgd,results,fixtures,scroll&amp;cbackground=FFFFFF&amp;ctext=000000&amp;ctitle=F81900&amp;cshadow=E8E8E8&amp;cbutton=C0C0C0&amp;cbuttontext=000000&amp;chighlight=FF0000&amp;tbody_family=Tahoma,sans-serif&amp;tbody_size=12&amp;tbody_weight=normal&amp;tbody_style=normal&amp;tbody_decoration=none&amp;tbody_transform=none&amp;ttitle_family=Impact,sans-serif&amp;ttitle_size=13&amp;ttitle_weight=normal&amp;ttitle_style=normal&amp;ttitle_decoration=none&amp;ttitle_transform=none&amp;ttab_family=Tahoma,sans-serif&amp;ttab_size=12&amp;ttab_weight=normal&amp;ttab_style=normal&amp;ttab_decoration=none&amp;ttab_transform=none\"\r\n         width=\"650\">\r\n    \r\n</iframe><!-- END of Soccerway widget HTML fragment -->\r\n<!--<br/><br/>\r\n[b]<a href=\"http://www.myliverpool.ru/index/barclays_premier_league/0-7\">Сезон 12/13</a>[/b]\r\n<br/><br/>\r\n[b]<a href=\"http://www.myliverpool.ru/index/turnirnaja_tablica_sezona_09_10/0-60\">Сезон 09/10</a>[/b]-->\r\n\r\n<div style=\"padding: 20px;\">\r\n    <form action=\"../\"><select onchange=\"window.open(this.options[this.selectedIndex].value, '_top')\">\r\n        <option selected=\"selected\" value=\"http://www.myliverpool.ru/index/premer_liga_2013_2014_polozhenie_komand/0-153\">Сезон 2013/14</option>\r\n        <option value=\"http://www.myliverpool.ru/index/barclays_premier_league/0-7\">Сезон 2012/13</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_2011_2012_polozhenie_komand/0-189\">Сезон 2011/12</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_2010_2011_polozhenie_komand/0-190\">Сезон 2010/11</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_2009_2010_polozhenie_komand/0-193\">Сезон 2009/10</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_2008_2008_polozhenie_komand/0-194\">Сезон 2008/09</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_2007_2008_polozhenie_komand/0-209\">Сезон 2007/08</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_2006_2007_polozhenie_komand/0-210\">Сезон 2006/07</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_2005_2006_polozhenie_komand/0-213\">Сезон 2005/06</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_2004_2005_polozhenie_komand/0-214\">Сезон 2004/05</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_2003_2004_polozhenie_komand/0-215\">Сезон 2003/04</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_2002_2003_polozhenie_komand/0-216\">Сезон 2002/03</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_2001_2002_polozhenie_komand/0-217\">Сезон 2001/02</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_2000_2001_polozhenie_komand/0-218\">Сезон 2000/01</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_1999_2000_polozhenie_komand/0-219\">Сезон 1999/00</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_1998_1999_polozhenie_komand/0-220\">Сезон 1998/99</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_1997_1998_polozhenie_komand/0-221\">Сезон 1997/98</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_1996_1997_polozhenie_komand/0-222\">Сезон 1996/97</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_1995_1996_polozhenie_komand/0-223\">Сезон 1995/96</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_1994_1995_polozhenie_komand/0-224\">Сезон 1994/95</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_1993_1994_polozhenie_komand/0-225\">Сезон 1993/94</option>\r\n        <option value=\"http://www.myliverpool.ru/index/premer_liga_1992_1993_polozhenie_komand/0-226\">Сезон 1992/93</option>\r\n    </select></form>\r\n</div>";

/***/ },
/* 114 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"item\">\r\n    <h2>\r\n        <span [textContent]=\"item.userName\"></span>\r\n        <span *ngIf=\"roles.isLogined && !roles.isSelf(item.id)\">\r\n            <a role=\"button\" (click)=\"writePm()\"><span class=\"glyphicon glyphicon-envelope\"></span></a>\r\n        </span>\r\n    </h2>\r\n    <pm-reply *ngIf=\"selectedUserId\" [userId]=\"selectedUserId\" (close)=\"closePmWindow($event);\" [userName]=\"item.userName\"></pm-reply>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 col-sm-2\">\r\n            <img class=\"avatar\" [src]=\"item.photo\" [alt]=\"item.userName\"/>\r\n        </div>\r\n        <div class=\"col-xs-10 col-sm-10\">\r\n            <div *ngIf=\"roles.isSelf(item.id) || roles.isModerator\">\r\n                <label for=\"update-avatar-input\" \r\n                       *ngIf=\"roles.isSelf(item.id)\"\r\n                       class=\"btn btn-info\">Обновить аватар</label>\r\n                <input type=\"file\"\r\n                       class=\"hidden\"\r\n                       accept=\"image/*\" \r\n                       (change)=\"onChangeAvatar($event)\"\r\n                       id=\"update-avatar-input\"/>\r\n                <button class=\"btn btn-warning\" (click)=\"resetAvatar()\">\r\n                    Сбросить аватар\r\n                </button>\r\n                <button *ngIf=\"roles.isSelf(item.id)\" class=\"btn btn-danger\" [routerLink]=\"['/changePassword']\">Изменить пароль</button>\r\n                <br><br>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-horizontal\" role=\"form\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">Логин</label>\r\n            <div class=\"col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.userName\"></span>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"roles.isModerator && !roles.isSelf(item.id)\" class=\"form-group\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Блокировка</label>\r\n            <div class=\"col-xs-10 col-sm-10\" >\r\n                <form *ngIf=\"!item.lockoutEnd\" class=\"form-inline\" name=\"banForm\" role=\"form\" [formGroup]=\"banForm\" (ngSubmit)=\"onSubmitBan()\">                    \r\n                        <input min=\"0\" type=\"number\" placeholder=\"Количество дней\" class=\"form-control\" formControlName=\"banDaysCount\" />\r\n                        <button class=\"btn btn-danger\" type=\"submit\" [disabled]=\"!banForm.valid\">Забанить</button>\r\n                </form>\r\n                <div class=\"col-xs-12 col-sm-12 flex-container\" *ngIf=\"item.lockoutEnd\">\r\n                    <span class=\"col-xs-10 col-sm-10 flex-vertical-center\">Активность заблокирована до &nbsp;<b [textContent]=\"item.lockoutEnd | date:'medium'\"></b></span>\r\n                    <button class=\"btn btn-success\" *ngIf=\"roles.isMainModerator\" (click)=\"unban()\">Снять бан</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Группа:</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span *ngIf=\"!roles.isAdminAssistant || roles.isSelf(item.id)\" class=\"form-control\" [textContent]=\"item.roleGroupName\"></span>\r\n \r\n                <form *ngIf=\"roles.isAdminAssistant && !roles.isSelf(item.id)\" class=\"form-inline\" name=\"roleForm\" role=\"form\" [formGroup]=\"roleForm\" (ngSubmit)=\"onSubmit(roleForm.value)\">\r\n                    <select class=\"form-control\" name=\"roleGroup\" formControlName=\"roleGroupId\">\r\n                        <option *ngFor=\"let roleGroup of roleGroups\" [value]=\"roleGroup.id\" [textContent]=\"roleGroup.name\"></option>\r\n                    </select>\r\n                    <button type=\"submit\" [disabled]=\"!roleForm.valid\" class=\"btn btn-default\">Сохранить</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"roles.isSelf || roles.isAdminAssistant\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\" [hidden]=\"!item.emailConfirmed\">Почта</label>\r\n            <label class=\"col-xs-2 col-sm-2 control-label text-danger\" uib-tooltip=\"Почта не подтверждена\" *ngIf=\"!item.emailConfirmed\">Почта</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.email\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Последний вход </label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.lastModifiedOn | date:'medium'\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Дата регистрации</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.registrationDate | date:'medium'\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"item.fullName\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Полное имя</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.fullName\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"item.birthday\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">День рождения</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" [textContent]=\"item.birthday | date:'longDate'\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"item.gender\">\r\n            <label class=\"col-xs-2 col-sm-2 control-label\">Пол</label>\r\n            <div class=\"col-xs-10 col-sm-10\">\r\n                <span class=\"form-control\" *ngIf=\"item.gender\">Девушка</span>\r\n                <span class=\"form-control\" *ngIf=\"!item.gender\">Парень</span>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <ul class=\"list-inline\">\r\n                <li *ngIf=\"item.newsCount > 0\"><a [routerLink]=\"['/news/list', 1]\" [queryParams]=\"{userName: item.userName}\">Новости(<span [textContent]=\"item.newsCount\"></span>)</a></li>\r\n                <li>|</li>\r\n                <li *ngIf=\"item.blogsCount > 0\"><a ui-sref=\"blog({page: 1, userName: item.userName})\">Блоги(<span [textContent]=\"item.blogsCount\"></span>)</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--script type=\"text/ng-template\" id=\"changeRoleConfirmation.html\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Редактирование роли</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        Изменить?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.ok()\">Изменить</button>\r\n        <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">Отмена</button>\r\n    </div>\r\n</!--script>\r\n\r\n<script type=\"text/ng-template\" id=\"banConfirmation.html\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\"></h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        Забанить?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.ok()\">Забанить</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.cancel()\">Отмена</button>\r\n    </div>\r\n</script>-->";

/***/ },
/* 115 */
/***/ function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n    <pm-reply *ngIf=\"selectedUserId\" [userId]=\"items[selectedUserId].id\" (close)=\"closePmWindow($event);\" [userName]=\"items[selectedUserId].userName\"></pm-reply>\r\n    <table class=\"table table-striped table-condensed\">\r\n        <thead>\r\n            <tr>\r\n                <th>Последний вход</th>\r\n                <th>Логин</th>\r\n                <th>Дата регистрации</th>\r\n                <th>Группа</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let user of items; let i = index;\">\r\n            <tr>\r\n                <td class=\"\" [textContent]=\"user.lastModified | date:'medium'\"></td>\r\n                <td class=\"\">\r\n                    <a [routerLink]=\"['/user', user.id ]\">\r\n                        <div class=\"col-md-3\">\r\n                            <img class=\"mini-avatar\" [src]=\"user.photo\" [alt]=\"user.userName\"/>\r\n                        </div>\r\n                        <span [textContent]=\"user.userName\"></span>\r\n                    </a>\r\n                    <span class=\"text-danger\" tooltip=\"Почта не подтверждена\" *ngIf=\"!user.emailConfirmed && (roles.isAdminAssist || roles.isSelf(user.id))\"> *</span>\r\n                    <a role=\"button\" *ngIf=\"roles.isLogined && !roles.isSelf(user.id)\" (click)=\"writePm(i)\"><span class=\"glyphicon glyphicon-envelope\"></span></a>\r\n                </td>\r\n                <td class=\"\" [textContent]=\"user.registrationDate | date:'medium'\"></td>\r\n                <td class=\"\" [textContent]=\"user.roleGroupName\"></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div>\r\n        <!--form class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.chosenRoleGroupId\"\r\n                        ng-options=\"roleGroup.id as roleGroup.name for roleGroup in vm.roleGroups\" ng-change=\"vm.changeRoleId()\"></select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" ng-model=\"vm.filterUserName\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByUserName()\" placeholder=\"Логин\" />\r\n            </div>\r\n        </form-->\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <pagination *ngIf=\"items\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"page\" [maxSize]=\"7\" (pageChanged)=\"pageChanged($event)\"\r\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"1\" lastText=\"totalItems/itemsPerPage\"></pagination>\r\n</div>";

/***/ },
/* 116 */
/***/ function(module, exports) {

module.exports = "<form class=\"form-horizontal col-md-12\" role=\"form\" name=\"editWish\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Заголовок</label>\r\n        <div class=\"col-md-10\">\r\n            <input class=\"form-control\" name=\"title\" [formControl]=\"editForm.controls['title']\"/>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-2\">Сообщение</label>\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control\" name=\"title\" [formControl]=\"editForm.controls['message']\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-xs-2 col-sm-2\">Тип:</label>\r\n        <div class=\"col-xs-10 col-sm-10\">\r\n            <!--<select class=\"form-control\" name=\"newsCategoryId\" [formControl]=\"editForm.controls['type']\"></select>-->\r\n            <select [formControl]=\"editForm.controls['type']\">\r\n                <option [value]=\"type.id\" *ngFor=\"let type of types\" [textContent]=\"type.name\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <button [disabled]=\"!editForm.valid\" type=\"submit\" class=\"btn btn-default\">Создать</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n";

/***/ },
/* 117 */
/***/ function(module, exports) {

module.exports = "<div>\r\n    <div class=\"btn-group\">\r\n        <form class=\"form-inline btn-block\">\r\n            <!--<div class=\"form-group\">\r\n                <select class=\"form-control\"\r\n                        ng-model=\"vm.typeId\"\r\n                        ng-options=\"type.id as type.name for type in vm.types\" ng-change=\"vm.changeTypeId()\"></select>\r\n            </div>-->\r\n            <div class=\"form-group\">\r\n                <!--<input class=\"form-control\" ng-model=\"vm.filterText\" ng-model-options=\"{debounce: 1000}\" ng-change=\"vm.filterByText()\" placeholder=\"Поиск в тексте пожеланий\" />-->\r\n            </div>\r\n            <button class=\"btn btn-success\" [routerLink]=\"['/wish', 0, 'edit']\">Добавить</button>\r\n        </form>\r\n    </div>\r\n    <div class=\"top20\" *ngFor=\"let wish of items; let i = index;\">\r\n        <div class=\"panel\" [ngClass]=\"getTypeClass(wish.type)\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">\r\n                    <a [routerLink]=\"['/wish', wish.id, 'edit']\">\r\n                        <span [textContent]=\"wish.title\"></span>\r\n                    </a>\r\n                    <span class=\"col-xs-1 col-sm-1 pull-right\" secured=\"AdminFull\">\r\n                        <a ng-click=\"vm.delete(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div [textContent]=\"wish.message\"></div>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <div [textContent]=\"wish.typeName\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"pagination\">\r\n    <!--uib-pagination ng-show=\"vm.totalItems > vm.itemPerPage\" total-items=\"vm.totalItems\" ng-model=\"vm.page\" ng-change=\"vm.goToPage()\"></!--uib-pagination-->\r\n</div>";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(118);
exports.encode = exports.stringify = __webpack_require__(119);


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ansiRegex = __webpack_require__(67)();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __compiler__ = __webpack_require__(61);
var core_1 = __webpack_require__(0);
var patch = false;
if (!core_1.__core_private__['ViewUtils']) {
    patch = true;
    core_1.__core_private__['ViewUtils'] = core_1.__core_private__['view_utils'];
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(65);
if (patch) {
    __universal__.ViewUtils = core_1.__core_private__['view_utils'];
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var auth_service_1 = __webpack_require__(15);
var AccountSigninComponent = (function () {
    function AccountSigninComponent(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    AccountSigninComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            'userName': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'password': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])]
        });
    };
    AccountSigninComponent.prototype.onSubmit = function (ra) {
        this.userName = this.loginForm.controls["userName"].value;
        this.password = this.loginForm.controls["password"].value;
        var result = this.authService.login(this.userName, this.password);
    };
    return AccountSigninComponent;
}());
AccountSigninComponent = __decorate([
    core_1.Component({
        selector: "account-signin",
        template: __webpack_require__(71)
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, forms_1.FormBuilder])
], AccountSigninComponent);
exports.AccountSigninComponent = AccountSigninComponent;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var signup_model_1 = __webpack_require__(132);
var account_service_1 = __webpack_require__(10);
var index_1 = __webpack_require__(1);
var AccountSignupComponent = (function () {
    function AccountSignupComponent(accountService, formBuilder) {
        this.accountService = accountService;
        this.formBuilder = formBuilder;
        this.result = false;
    }
    AccountSignupComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            'userName': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(3)
                ])],
            'email': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6), index_1.GlobalValidators.mailFormat
                ])],
            'password': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)
                ])],
            'confirmPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)
                ])],
        });
    };
    AccountSignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var signup = new signup_model_1.Signup();
        signup.userName = this.registerForm.controls["userName"].value;
        signup.email = this.registerForm.controls["email"].value;
        signup.password = this.registerForm.controls["password"].value;
        signup.confirmPassword = this.registerForm.controls["confirmPassword"].value;
        this.accountService
            .create(signup)
            .subscribe(function (data) {
            if (data) {
                _this.result = true;
            }
        }, function (error) { return console.log(error); }, function () { });
    };
    return AccountSignupComponent;
}());
AccountSignupComponent = __decorate([
    core_1.Component({
        selector: "account-signup",
        template: __webpack_require__(72)
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService, forms_1.FormBuilder])
], AccountSignupComponent);
exports.AccountSignupComponent = AccountSignupComponent;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(33);
var index_2 = __webpack_require__(6);
exports.accountRoutes = [
    {
        path: "signup",
        component: index_1.AccountSignupComponent,
        data: { title: "Регистрация" },
        canActivate: [index_2.UnSignedGuard]
    },
    {
        path: "confirmEmail",
        component: index_1.ConfirmEmailComponent,
        data: { title: "Подтверждение пароля" }
    },
    {
        path: "forgotPassword",
        component: index_1.ForgotPasswordComponent,
        data: { title: "Восстановление забытого пароля" },
        canActivate: [index_2.UnSignedGuard]
    },
    {
        path: "unconfirmedEmail",
        component: index_1.UnconfirmedEmailComponent,
        data: { title: "Ваша почта не подтверждена" }
    },
    {
        path: "resetPassword",
        component: index_1.ResetPasswordComponent,
        data: { title: "Сброс пароля" },
        canActivate: [index_2.UnSignedGuard]
    },
    {
        path: "changePassword",
        component: index_1.ChangePasswordComponent,
        data: { title: "Изменение пароля" },
        canActivate: [index_2.RoleGuard]
    }
];


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var account_service_1 = __webpack_require__(10);
var index_1 = __webpack_require__(1);
var changePassword_model_1 = __webpack_require__(127);
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(service, formBuilder) {
        this.service = service;
        this.formBuilder = formBuilder;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.passwordForm = this.formBuilder.group({
            'oldPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)
                ])],
            'newPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)
                ])],
            'confirmPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)
                ])]
        }, { validator: index_1.GlobalValidators.matchingPasswords("newPassword", "confirmPassword") });
    };
    ChangePasswordComponent.prototype.onSubmit = function (ra) {
        var model = new changePassword_model_1.ChangePassword();
        model.oldPassword = this.passwordForm.controls["oldPassword"].value;
        model.newPassword = this.passwordForm.controls["newPassword"].value;
        model.confirmPassword = this.passwordForm.controls["confirmPassword"].value;
        this.service.changePassword(model).subscribe(function (data) {
            if (data) {
                console.log("password changed");
            }
        }, function (error) { return console.log(error); }, function () { });
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    core_1.Component({
        selector: "change-password",
        template: __webpack_require__(73)
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService, forms_1.FormBuilder])
], ChangePasswordComponent);
exports.ChangePasswordComponent = ChangePasswordComponent;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ChangePassword = (function () {
    function ChangePassword() {
    }
    return ChangePassword;
}());
exports.ChangePassword = ChangePassword;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var account_service_1 = __webpack_require__(10);
var ConfirmEmailComponent = (function () {
    function ConfirmEmailComponent(accountService, route, router) {
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.result = false;
    }
    ConfirmEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            var id = +params["userId"];
            var code = params["code"];
            _this.accountService.confirmEmail(id, code)
                .subscribe(function (data) { return _this.result = data; }, function (error) { return console.log(error); }, function () {
                if (_this.result) {
                }
            });
        });
    };
    ConfirmEmailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ConfirmEmailComponent;
}());
ConfirmEmailComponent = __decorate([
    core_1.Component({
        selector: "email-confirmation",
        template: "<span [hidden]='!result'>Ваш адрес электронной почты успешно подтвержден. Можете войти и быть как дома.</span>"
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService, router_1.ActivatedRoute, router_1.Router])
], ConfirmEmailComponent);
exports.ConfirmEmailComponent = ConfirmEmailComponent;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var account_service_1 = __webpack_require__(10);
var index_1 = __webpack_require__(1);
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(service, formBuilder) {
        this.service = service;
        this.formBuilder = formBuilder;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotForm = this.formBuilder.group({
            'email': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, index_1.GlobalValidators.mailFormat
                ])]
        });
    };
    ForgotPasswordComponent.prototype.onSubmit = function (ra) {
        this.email = this.forgotForm.controls["email"].value;
        this.service.forgotPassword(this.email).subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { });
        this.finish = true;
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    core_1.Component({
        selector: "forgot-password",
        template: __webpack_require__(74)
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService, forms_1.FormBuilder])
], ForgotPasswordComponent);
exports.ForgotPasswordComponent = ForgotPasswordComponent;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var router_1 = __webpack_require__(2);
var account_service_1 = __webpack_require__(10);
var index_1 = __webpack_require__(1);
var resetPassword_model_1 = __webpack_require__(131);
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(service, route, router, formBuilder) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            _this.code = params["code"];
        });
        this.resetForm = this.formBuilder.group({
            'email': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, index_1.GlobalValidators.mailFormat
                ])],
            'password': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)
                ])],
            'confirmPassword': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(6)
                ])],
        }, { validator: index_1.GlobalValidators.matchingPasswords("password", "confirmPassword") });
    };
    ResetPasswordComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ResetPasswordComponent.prototype.onSubmit = function (ra) {
        var resetPassword = new resetPassword_model_1.ResetPassword();
        resetPassword.code = this.code;
        resetPassword.email = this.resetForm.controls["email"].value;
        resetPassword.password = this.resetForm.controls["password"].value;
        resetPassword.confirmPassword = this.resetForm.controls["confirmPassword"].value;
        this.service.resetPassword(resetPassword).subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { });
        this.finish = true;
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    core_1.Component({
        selector: "reset-password",
        template: __webpack_require__(75)
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService, router_1.ActivatedRoute, router_1.Router, forms_1.FormBuilder])
], ResetPasswordComponent);
exports.ResetPasswordComponent = ResetPasswordComponent;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ResetPassword = (function () {
    function ResetPassword() {
    }
    return ResetPassword;
}());
exports.ResetPassword = ResetPassword;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Signup = (function () {
    function Signup() {
    }
    return Signup;
}());
exports.Signup = Signup;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var account_service_1 = __webpack_require__(10);
var index_1 = __webpack_require__(1);
var UnconfirmedEmailComponent = (function () {
    function UnconfirmedEmailComponent(service, formBuilder) {
        this.service = service;
        this.formBuilder = formBuilder;
    }
    UnconfirmedEmailComponent.prototype.ngOnInit = function () {
        this.unconfirmedForm = this.formBuilder.group({
            'email': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, index_1.GlobalValidators.mailFormat
                ])]
        });
    };
    UnconfirmedEmailComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(1211);
        var email = this.unconfirmedForm.controls["email"].value;
        this.service.resendConfirmEmail(email).subscribe(function (data) {
            if (data) {
                _this.finish = true;
            }
        }, function (error) { return console.log(error); }, function () { });
    };
    return UnconfirmedEmailComponent;
}());
UnconfirmedEmailComponent = __decorate([
    core_1.Component({
        selector: "unconfirmedEmail",
        template: __webpack_require__(76)
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService, forms_1.FormBuilder])
], UnconfirmedEmailComponent);
exports.UnconfirmedEmailComponent = UnconfirmedEmailComponent;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var EplTableComponent = (function () {
    function EplTableComponent() {
    }
    EplTableComponent.prototype.ngOnInit = function () {
    };
    return EplTableComponent;
}());
EplTableComponent = __decorate([
    core_1.Component({
        selector: "epl-table",
        template: __webpack_require__(77)
    }),
    __metadata("design:paramtypes", [])
], EplTableComponent);
exports.EplTableComponent = EplTableComponent;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(34));
__export(__webpack_require__(134));


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(9);
var auth_service_1 = __webpack_require__(15);
var roles_checked_service_1 = __webpack_require__(55);
var AppComponent = (function () {
    function AppComponent(router, auth, rolesChecked, viewContainerRef, activatedRoute, titleService) {
        this.router = router;
        this.auth = auth;
        this.rolesChecked = rolesChecked;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.roles = this.rolesChecked.checkRoles();
        this.viewContainerRef = viewContainerRef;
        this.initTitleSubscriber();
    }
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
        this.roles = this.rolesChecked.checkRoles();
    };
    AppComponent.prototype.initTitleSubscriber = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === "primary"; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) { return _this.titleService.setTitle(event["title"]); });
    };
    AppComponent.prototype.setUpBreadcrumbs = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "app",
        template: __webpack_require__(78)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        auth_service_1.AuthService,
        roles_checked_service_1.RolesCheckedService,
        core_1.ViewContainerRef,
        router_1.ActivatedRoute,
        platform_browser_1.Title])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var platform_browser_1 = __webpack_require__(9);
var router_1 = __webpack_require__(2);
var angular2_universal_1 = __webpack_require__(31);
var app_component_1 = __webpack_require__(136);
var app_routes_1 = __webpack_require__(138);
var app_constants_1 = __webpack_require__(3);
var index_1 = __webpack_require__(26);
var newsCategory = __webpack_require__(47);
var auth = __webpack_require__(6);
var index_2 = __webpack_require__(18);
var account = __webpack_require__(33);
var chat = __webpack_require__(142);
var club = __webpack_require__(17);
var forumSubsection = __webpack_require__(20);
var forumMessage = __webpack_require__(149);
var forumTheme = __webpack_require__(41);
var home = __webpack_require__(42);
var image = __webpack_require__(44);
var match = __webpack_require__(23);
var player = __webpack_require__(51);
var roleGroup = __webpack_require__(53);
var season = __webpack_require__(54);
var shared = __webpack_require__(1);
var user_detail_component_1 = __webpack_require__(56);
var user_service_1 = __webpack_require__(29);
var user_list_component_1 = __webpack_require__(57);
var pm = __webpack_require__(52);
var wish = __webpack_require__(58);
var materialComment = __webpack_require__(46);
var ng2_auto_complete_1 = __webpack_require__(214);
var index_3 = __webpack_require__(135);
var ng2_bootstrap_1 = __webpack_require__(11);
var index_4 = __webpack_require__(201);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            angular2_universal_1.UniversalModule,
            ng2_bootstrap_1.DatepickerModule.forRoot(),
            forms_1.FormsModule,
            ng2_bootstrap_1.ModalModule.forRoot(),
            ng2_auto_complete_1.Ng2AutoCompleteModule,
            ng2_bootstrap_1.PaginationModule.forRoot(),
            forms_1.ReactiveFormsModule,
            ng2_bootstrap_1.TabsModule.forRoot(),
            router_1.RouterModule.forRoot(app_routes_1.routes)
        ],
        declarations: [
            shared.TinymceComponent,
            account.AccountSigninComponent,
            account.AccountSignupComponent,
            account.ChangePasswordComponent,
            account.ConfirmEmailComponent,
            account.ForgotPasswordComponent,
            account.ResetPasswordComponent,
            account.UnconfirmedEmailComponent,
            chat.MiniChatComponent,
            club.ClubEditComponent,
            club.ClubListComponent,
            forumMessage.ForumMessageAdditionComponent,
            forumSubsection.ForumSubsectionEditComponent,
            forumSubsection.ForumSubsectionListComponent,
            forumTheme.ForumThemeEditComponent,
            forumTheme.ForumThemeListComponent,
            home.AboutClubComponent,
            home.CoachTeamComponent,
            home.ClubHistoryComponent,
            home.RightSidebarComponent,
            home.RulesComponent,
            home.SquadComponent,
            image.ImageAdditionComponent,
            image.ImageDetailComponent,
            image.ImageListComponent,
            match.MatchCalendarComponent,
            match.MatchEditComponent,
            match.MatchListComponent,
            materialComment.MaterialCommentDetailComponent,
            materialComment.MaterialCommentListComponent,
            materialComment.MaterialCommentSectionComponent,
            newsCategory.NewsCategoryEditComponent,
            newsCategory.NewsCategoryListComponent,
            player.PlayerStatisticsComponent,
            pm.PmDetailComponent,
            pm.PmEditComponent,
            pm.PmListComponent,
            pm.PmReplyComponent,
            season.SeasonEplTableComponent,
            wish.WishEditComponent,
            wish.WishListComponent,
            app_component_1.AppComponent,
            index_4.BreadcrumbComponent,
            index_3.EplTableComponent,
            index_2.ForumSectionListComponent,
            index_1.NewsListComponent,
            index_1.NewsDetailComponent,
            index_1.NewsEditComponent,
            user_detail_component_1.UserDetailComponent,
            user_list_component_1.UserListComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            auth.AuthService,
            auth.RoleGuard,
            auth.UnSignedGuard,
            account.AccountService,
            chat.ChatMessageService,
            club.ClubService,
            forumMessage.ForumMessageService,
            forumSubsection.ForumSubsectionService,
            forumTheme.ForumThemeService,
            image.ImageService,
            match.MatchService,
            materialComment.MaterialCommentService,
            newsCategory.NewsCategoryService,
            pm.PmService,
            roleGroup.RoleGroupService,
            shared.HttpWrapper,
            shared.GlobalValidators,
            shared.LocalStorageService,
            shared.RolesCheckedService,
            wish.WishService,
            index_3.AdminService,
            { provide: core_1.LOCALE_ID, useValue: "ru-RU" },
            app_constants_1.Configuration,
            index_2.ForumSectionService,
            { provide: shared.LocalStorage, useFactory: function () { return (window) ? window.localStorage : {}; } },
            index_1.NewsService,
            platform_browser_1.Title,
            user_service_1.UserService
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(26);
var account_routing_1 = __webpack_require__(125);
var club_routing_1 = __webpack_require__(147);
var newsCategory_routing_1 = __webpack_require__(180);
var news_routing_1 = __webpack_require__(184);
var user_routing_1 = __webpack_require__(202);
var player_routing_1 = __webpack_require__(187);
var pm_routing_1 = __webpack_require__(192);
var home_routing_1 = __webpack_require__(162);
var image_routing_1 = __webpack_require__(169);
var forumSection_routing_1 = __webpack_require__(152);
var forumSubsection_routing_1 = __webpack_require__(155);
var forumTheme_routing_1 = __webpack_require__(158);
var wish_routing_1 = __webpack_require__(206);
var materialComment_routing_1 = __webpack_require__(178);
var match_routing_1 = __webpack_require__(174);
var season_routing_1 = __webpack_require__(196);
exports.routes = account_routing_1.accountRoutes.concat(club_routing_1.clubRoutes, forumSection_routing_1.forumSectionRoutes, forumSubsection_routing_1.forumSubsectionRoutes, forumTheme_routing_1.forumThemeRoutes, home_routing_1.homeRoutes, image_routing_1.imageRoutes, match_routing_1.matchRoutes, materialComment_routing_1.materialCommentRoutes, newsCategory_routing_1.newsCategoryRoutes, news_routing_1.newsRoutes, player_routing_1.playerRoutes, pm_routing_1.pmRoutes, season_routing_1.seasonRoutes, user_routing_1.userRoutes, wish_routing_1.wishRoutes, [
    { path: "", component: index_1.NewsListComponent, data: { title: "Главная", breadcrumb: "Главная" } }
]);


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(8);
var router_1 = __webpack_require__(2);
var index_1 = __webpack_require__(1);
var RoleGuard = (function () {
    function RoleGuard(rolesService, router, location) {
        this.rolesService = rolesService;
        this.router = router;
        this.location = location;
    }
    RoleGuard.prototype.canActivate = function (route, state) {
        if (!this.rolesService.checkRoles().isLogined) {
            this.location.replaceState("/");
            this.router.navigate(["/"]);
            return false;
        }
        var roles = route.data["role"];
        if (roles == null || roles.length === 0) {
            return true;
        }
        for (var i = 0; i < roles.length; i++) {
            if (this.rolesService.isUserInRole(roles[i])) {
                return true;
            }
        }
        this.location.replaceState("/");
        this.router.navigate(["/"]);
        return false;
    };
    return RoleGuard;
}());
RoleGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.RolesCheckedService,
        router_1.Router,
        common_1.Location])
], RoleGuard);
exports.RoleGuard = RoleGuard;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var index_1 = __webpack_require__(1);
var UnSignedGuard = (function () {
    function UnSignedGuard(rolesService, router) {
        this.rolesService = rolesService;
        this.router = router;
    }
    UnSignedGuard.prototype.canActivate = function (route, state) {
        if (this.rolesService.checkRoles().isLogined) {
            this.router.navigate(["/news"]);
            return false;
        }
        return true;
    };
    return UnSignedGuard;
}());
UnSignedGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.RolesCheckedService, router_1.Router])
], UnSignedGuard);
exports.UnSignedGuard = UnSignedGuard;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ChatMessage = (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());
exports.ChatMessage = ChatMessage;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(141));
__export(__webpack_require__(35));
__export(__webpack_require__(143));


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var router_1 = __webpack_require__(2);
var chatMessage_service_1 = __webpack_require__(35);
var index_1 = __webpack_require__(1);
var MiniChatComponent = (function () {
    function MiniChatComponent(service, route, formBuilder, rolesChecked) {
        this.service = service;
        this.route = route;
        this.formBuilder = formBuilder;
        this.rolesChecked = rolesChecked;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    MiniChatComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkRoles();
        this.initForm();
        this.update();
    };
    MiniChatComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MiniChatComponent.prototype.update = function () {
        var _this = this;
        this.service
            .getAll()
            .subscribe(function (data) { return _this.items = data; }, function (error) { return console.log(error); }, function () { });
    };
    MiniChatComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sub = this.service.create(this.messageForm.value)
            .subscribe(function (data) { return _this.items.unshift(data); }, function (error) { return console.log(error); }, function () { });
    };
    MiniChatComponent.prototype.initForm = function () {
        this.messageForm = this.formBuilder.group({
            'message': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ]
        });
    };
    return MiniChatComponent;
}());
MiniChatComponent = __decorate([
    core_1.Component({
        selector: "mini-chat",
        template: __webpack_require__(79)
    }),
    __metadata("design:paramtypes", [chatMessage_service_1.ChatMessageService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        index_1.RolesCheckedService])
], MiniChatComponent);
exports.MiniChatComponent = MiniChatComponent;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var router_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(9);
var club_service_1 = __webpack_require__(16);
var club_model_1 = __webpack_require__(146);
var index_1 = __webpack_require__(1);
var ClubEditComponent = (function () {
    function ClubEditComponent(clubService, route, router, localStorage, formBuilder, titleService) {
        this.clubService = clubService;
        this.route = route;
        this.router = router;
        this.localStorage = localStorage;
        this.formBuilder = formBuilder;
        this.item = new club_model_1.Club();
        titleService.setTitle("Редактирование клуба");
    }
    ClubEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            if (id > 0) {
                _this.clubService.getSingle(id)
                    .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
        this.editForm.controls["englishName"].valueChanges.subscribe(function (data) {
        });
    };
    ClubEditComponent.prototype.upload = function () {
    };
    ClubEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClubEditComponent.prototype.onSubmit = function () {
        var newsItem = this.parseForm();
        if (this.id > 0) {
            this.clubService.update(this.id, newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.clubService.create(newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
    };
    ClubEditComponent.prototype.getRandomNumber = function () {
        return Math.random();
    };
    ClubEditComponent.prototype.parse = function (data) {
        this.id = data.id;
        this.editForm.patchValue(data);
    };
    ClubEditComponent.prototype.parseForm = function () {
        var item = new club_model_1.Club();
        item.id = this.id;
        item.englishName = this.editForm.controls["englishName"].value;
        item.logo = this.editForm.controls["logo"].value;
        item.name = this.editForm.controls["name"].value;
        item.stadium = this.editForm.controls["stadium"].value;
        return item;
    };
    ClubEditComponent.prototype.initForm = function () {
        this.editForm = this.formBuilder.group({
            'englishName': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.maxLength(30)
                ])],
            'logo': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'name': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.maxLength(30)
                ])],
            'stadium': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.maxLength(30)
                ])]
        });
    };
    return ClubEditComponent;
}());
ClubEditComponent = __decorate([
    core_1.Component({
        selector: "club-edit",
        template: __webpack_require__(80)
    }),
    __metadata("design:paramtypes", [club_service_1.ClubService,
        router_1.ActivatedRoute,
        router_1.Router,
        index_1.LocalStorageService,
        forms_1.FormBuilder,
        platform_browser_1.Title])
], ClubEditComponent);
exports.ClubEditComponent = ClubEditComponent;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(8);
var platform_browser_1 = __webpack_require__(9);
var router_1 = __webpack_require__(2);
var club_service_1 = __webpack_require__(16);
var ng2_bootstrap_1 = __webpack_require__(11);
var ClubListComponent = (function () {
    function ClubListComponent(clubService, route, location, titleService) {
        this.clubService = clubService;
        this.route = route;
        this.location = location;
        this.page = 1;
        this.itemsPerPage = 15;
        this.selectedItemIndex = null;
        titleService.setTitle("Клубы");
    }
    ClubListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
            _this.update();
        });
    };
    ClubListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClubListComponent.prototype.showDeleteModal = function (index) {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    };
    ClubListComponent.prototype.hideModal = function () {
        this.selectedItemIndex = null;
        this.deleteModal.hide();
    };
    ClubListComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.clubService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.items.splice(_this.selectedItemIndex, 1);
                _this.hideModal();
            }
        });
    };
    ClubListComponent.prototype.update = function () {
        var _this = this;
        this.clubService
            .getAll(this.page)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    ClubListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = "club/list/" + this.page;
        this.location.replaceState(newUrl);
    };
    ;
    ClubListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    return ClubListComponent;
}());
__decorate([
    core_1.ViewChild("deleteModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ClubListComponent.prototype, "deleteModal", void 0);
ClubListComponent = __decorate([
    core_1.Component({
        selector: "club-list",
        template: __webpack_require__(81)
    }),
    __metadata("design:paramtypes", [club_service_1.ClubService, router_1.ActivatedRoute, common_1.Location,
        platform_browser_1.Title])
], ClubListComponent);
exports.ClubListComponent = ClubListComponent;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Club = (function () {
    function Club() {
    }
    return Club;
}());
exports.Club = Club;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(17);
var index_2 = __webpack_require__(6);
exports.clubRoutes = [
    {
        path: "club/:id/edit",
        component: index_1.ClubEditComponent,
        data: { title: "Создание клуба", roles: ["adminStart"] },
        canActivate: [index_2.RoleGuard]
    },
    {
        path: "club",
        component: index_1.ClubListComponent,
        data: { title: "Клубы", roles: ["adminStart"] },
        canActivate: [index_2.RoleGuard]
    }
];


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var forumMessage_model_1 = __webpack_require__(36);
var forumMessage_service_1 = __webpack_require__(37);
var index_1 = __webpack_require__(1);
var ForumMessageAdditionComponent = (function () {
    function ForumMessageAdditionComponent(service, rolesChecked, formBuilder) {
        this.service = service;
        this.rolesChecked = rolesChecked;
        this.formBuilder = formBuilder;
    }
    ForumMessageAdditionComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkRoles();
        this.commentForm = this.formBuilder.group({
            'message': ["", forms_1.Validators.compose([forms_1.Validators.required,
                    forms_1.Validators.minLength(3)])]
        });
    };
    ForumMessageAdditionComponent.prototype.onSubmit = function (value) {
        var _this = this;
        var comment = new forumMessage_model_1.ForumMessage();
        comment.message = this.commentForm.controls["message"].value;
        comment.themeId = this.themeId;
        this.service.create(comment)
            .subscribe(function (data) {
            _this.commentForm.controls["message"].patchValue("");
        }, function (error) { return console.log(error); }, function () { });
    };
    return ForumMessageAdditionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ForumMessageAdditionComponent.prototype, "themeId", void 0);
ForumMessageAdditionComponent = __decorate([
    core_1.Component({
        selector: "forumMessage-addition",
        template: __webpack_require__(82)
    }),
    __metadata("design:paramtypes", [forumMessage_service_1.ForumMessageService, index_1.RolesCheckedService,
        forms_1.FormBuilder])
], ForumMessageAdditionComponent);
exports.ForumMessageAdditionComponent = ForumMessageAdditionComponent;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(36));
__export(__webpack_require__(37));
__export(__webpack_require__(148));


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forumSection_service_1 = __webpack_require__(38);
var index_1 = __webpack_require__(1);
var ForumSectionListComponent = (function () {
    function ForumSectionListComponent(service, rolesChecked) {
        this.service = service;
        this.rolesChecked = rolesChecked;
    }
    ForumSectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.service
            .getAll()
            .subscribe(function (data) { return _this.items = data; }, function (error) { return console.log(error); }, function () { });
    };
    return ForumSectionListComponent;
}());
ForumSectionListComponent = __decorate([
    core_1.Component({
        selector: "forumSection-list",
        template: __webpack_require__(83)
    }),
    __metadata("design:paramtypes", [forumSection_service_1.ForumSectionService, index_1.RolesCheckedService])
], ForumSectionListComponent);
exports.ForumSectionListComponent = ForumSectionListComponent;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ForumSection = (function () {
    function ForumSection() {
    }
    return ForumSection;
}());
exports.ForumSection = ForumSection;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(18);
exports.forumSectionRoutes = [
    { path: "forum", component: index_1.ForumSectionListComponent, data: { title: "Форум" } }
];


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var router_1 = __webpack_require__(2);
var forumSubsection_model_1 = __webpack_require__(39);
var forumSubsection_service_1 = __webpack_require__(19);
var index_1 = __webpack_require__(18);
var ForumSubsectionEditComponent = (function () {
    function ForumSubsectionEditComponent(service, formBuilder, route, sectionService) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.sectionService = sectionService;
        this.id = 0;
    }
    ForumSubsectionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            'sectionId': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            'name': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            'description': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ]
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params["id"];
            if (_this.id > 0) {
                _this.service
                    .getSingle(_this.id)
                    .subscribe(function (data) { return _this.editForm.patchValue(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
        this.sectionService.getAll()
            .subscribe(function (data) { return _this.forumSections = data; }, function (error) { return console.log(error); }, function () { });
    };
    ForumSubsectionEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ForumSubsectionEditComponent.prototype.onSubmit = function () {
        var model = new forumSubsection_model_1.ForumSubsection();
        model.id = this.id;
        model.sectionId = this.editForm.controls["sectionId"].value;
        model.name = this.editForm.controls["name"].value;
        model.description = this.editForm.controls["description"].value;
        var res;
        if (this.id > 0) {
            var result = this.service.update(this.id, model).subscribe(function (data) { return res = data; });
        }
        else {
            var result = this.service.create(model).subscribe(function (data) { return res = data; });
        }
        if (res !== null) {
        }
    };
    return ForumSubsectionEditComponent;
}());
ForumSubsectionEditComponent = __decorate([
    core_1.Component({
        selector: "forumSubsection-edit",
        template: __webpack_require__(84)
    }),
    __metadata("design:paramtypes", [forumSubsection_service_1.ForumSubsectionService, forms_1.FormBuilder, router_1.ActivatedRoute, index_1.ForumSectionService])
], ForumSubsectionEditComponent);
exports.ForumSubsectionEditComponent = ForumSubsectionEditComponent;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var common_1 = __webpack_require__(8);
var forumSubsection_service_1 = __webpack_require__(19);
var index_1 = __webpack_require__(1);
var ForumSubsectionListComponent = (function () {
    function ForumSubsectionListComponent(service, rolesChecked, route, location) {
        this.service = service;
        this.rolesChecked = rolesChecked;
        this.route = route;
        this.location = location;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    ForumSubsectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.sub2 = this.route.queryParams.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
        });
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.update(id);
        });
    };
    ;
    ForumSubsectionListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub2.unsubscribe();
    };
    ForumSubsectionListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update(this.item.id);
        var newUrl = "forum/" + this.item.id + "?page=" + this.page;
        this.location.replaceState(newUrl);
    };
    ;
    ForumSubsectionListComponent.prototype.update = function (id) {
        var _this = this;
        this.service.getSingleWithThemes(id, this.page)
            .subscribe(function (data) {
            _this.item = data;
            _this.itemsPerPage = data.themes.itemPerPage;
            _this.items = data.themes.list;
            _this.totalItems = data.themes.totalItems;
        }, function (error) { return console.log(error); }, function () { });
    };
    return ForumSubsectionListComponent;
}());
ForumSubsectionListComponent = __decorate([
    core_1.Component({
        selector: "forumSubsection-list",
        template: __webpack_require__(85)
    }),
    __metadata("design:paramtypes", [forumSubsection_service_1.ForumSubsectionService,
        index_1.RolesCheckedService,
        router_1.ActivatedRoute, common_1.Location])
], ForumSubsectionListComponent);
exports.ForumSubsectionListComponent = ForumSubsectionListComponent;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(20);
var index_2 = __webpack_require__(6);
exports.forumSubsectionRoutes = [
    { path: "forum/:id", component: index_1.ForumSubsectionListComponent, data: { title: "Раздел форума" } },
    { path: "forum/:id/edit", component: index_1.ForumSubsectionEditComponent, data: {
            title: "Создание подраздела",
            roles: ["newsStart"]
        }, canActivate: [index_2.RoleGuard] }
];


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var router_1 = __webpack_require__(2);
var forumTheme_model_1 = __webpack_require__(40);
var index_1 = __webpack_require__(20);
var forumTheme_service_1 = __webpack_require__(21);
var ForumThemeEditComponent = (function () {
    function ForumThemeEditComponent(service, formBuilder, route, subsectionService) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.subsectionService = subsectionService;
        this.id = 0;
    }
    ForumThemeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            'subsectionId': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            'name': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            'description': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ]
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params["id"];
            if (_this.id > 0) {
                _this.service
                    .getSingle(_this.id)
                    .subscribe(function (data) { return _this.editForm.patchValue(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
        this.subsectionService.getAll()
            .subscribe(function (data) { return _this.forumSubsections = data; }, function (error) { return console.log(error); }, function () { });
    };
    ForumThemeEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ForumThemeEditComponent.prototype.onSubmit = function () {
        var model = new forumTheme_model_1.ForumTheme();
        model.id = this.id;
        model.subsectionId = this.editForm.controls["subsectionId"].value;
        model.name = this.editForm.controls["name"].value;
        model.description = this.editForm.controls["description"].value;
        var res;
        if (this.id > 0) {
            var result = this.service.update(this.id, model).subscribe(function (data) { return res = data; });
        }
        else {
            var result = this.service.create(model).subscribe(function (data) { return res = data; });
        }
        if (res !== null) {
        }
    };
    return ForumThemeEditComponent;
}());
ForumThemeEditComponent = __decorate([
    core_1.Component({
        selector: "forumTheme-edit",
        template: __webpack_require__(86)
    }),
    __metadata("design:paramtypes", [forumTheme_service_1.ForumThemeService, forms_1.FormBuilder, router_1.ActivatedRoute, index_1.ForumSubsectionService])
], ForumThemeEditComponent);
exports.ForumThemeEditComponent = ForumThemeEditComponent;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var common_1 = __webpack_require__(8);
var forumTheme_service_1 = __webpack_require__(21);
var index_1 = __webpack_require__(1);
var ForumThemeListComponent = (function () {
    function ForumThemeListComponent(service, rolesChecked, route, location) {
        this.service = service;
        this.rolesChecked = rolesChecked;
        this.route = route;
        this.location = location;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    ForumThemeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.sub2 = this.route.queryParams.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
        });
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.update(id);
        });
    };
    ;
    ForumThemeListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub2.unsubscribe();
    };
    ForumThemeListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update(this.item.id);
        var newUrl = "forum/theme/" + this.item.id + "?page=" + this.page;
        this.location.replaceState(newUrl);
    };
    ;
    ForumThemeListComponent.prototype.update = function (id) {
        var _this = this;
        this.service.getSingleWithMessages(id, this.page)
            .subscribe(function (data) {
            _this.item = data;
            _this.itemsPerPage = data.messages.itemPerPage;
            _this.items = data.messages.list;
            _this.totalItems = data.messages.totalItems;
        }, function (error) { return console.log(error); }, function () { });
    };
    return ForumThemeListComponent;
}());
ForumThemeListComponent = __decorate([
    core_1.Component({
        selector: "forumTheme-list",
        template: __webpack_require__(87)
    }),
    __metadata("design:paramtypes", [forumTheme_service_1.ForumThemeService,
        index_1.RolesCheckedService,
        router_1.ActivatedRoute, common_1.Location])
], ForumThemeListComponent);
exports.ForumThemeListComponent = ForumThemeListComponent;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(41);
var index_2 = __webpack_require__(6);
exports.forumThemeRoutes = [
    { path: "forum/theme/:id", component: index_1.ForumThemeListComponent, data: { title: "Тема форума" } },
    {
        path: "forum/theme/:id/edit",
        component: index_1.ForumThemeEditComponent,
        data: { title: "Создание темы", roles: ["newsStart"] },
        canActivate: [index_2.RoleGuard]
    }
];


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var AboutClubComponent = (function () {
    function AboutClubComponent() {
    }
    return AboutClubComponent;
}());
AboutClubComponent = __decorate([
    core_1.Component({
        selector: "<about-club>",
        template: __webpack_require__(88)
    }),
    __metadata("design:paramtypes", [])
], AboutClubComponent);
exports.AboutClubComponent = AboutClubComponent;


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ClubHistoryComponent = (function () {
    function ClubHistoryComponent() {
    }
    return ClubHistoryComponent;
}());
ClubHistoryComponent = __decorate([
    core_1.Component({
        selector: "<club-history>",
        template: __webpack_require__(89)
    }),
    __metadata("design:paramtypes", [])
], ClubHistoryComponent);
exports.ClubHistoryComponent = ClubHistoryComponent;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var CoachTeamComponent = (function () {
    function CoachTeamComponent() {
    }
    return CoachTeamComponent;
}());
CoachTeamComponent = __decorate([
    core_1.Component({
        selector: "<coach-team>",
        template: __webpack_require__(90)
    }),
    __metadata("design:paramtypes", [])
], CoachTeamComponent);
exports.CoachTeamComponent = CoachTeamComponent;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(42);
exports.homeRoutes = [
    { path: "clubHistory", component: index_1.ClubHistoryComponent, data: { title: "История клуба" } },
    { path: "coachTeam", component: index_1.CoachTeamComponent, data: { title: "Тренерский состав" } },
    { path: "rules", component: index_1.RulesComponent, data: { title: "Правила" } },
    { path: "aboutClub", component: index_1.AboutClubComponent, data: { title: "О клубе" } },
    { path: "squad", component: index_1.SquadComponent, data: { title: "Состав команды" } }
];


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var admin_service_1 = __webpack_require__(34);
var index_1 = __webpack_require__(1);
var RightSidebarComponent = (function () {
    function RightSidebarComponent(service, rolesChecked) {
        this.service = service;
        this.rolesChecked = rolesChecked;
    }
    RightSidebarComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkRoles();
    };
    RightSidebarComponent.prototype.updateEplTable = function () {
        this.service
            .updateEplTable()
            .subscribe(function (data) {
            if (data) {
            }
        }, function (error) { return console.log(error); }, function () { return console.log(""); });
    };
    return RightSidebarComponent;
}());
RightSidebarComponent = __decorate([
    core_1.Component({
        selector: "right-sidebar",
        template: __webpack_require__(91)
    }),
    __metadata("design:paramtypes", [admin_service_1.AdminService, index_1.RolesCheckedService])
], RightSidebarComponent);
exports.RightSidebarComponent = RightSidebarComponent;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var RulesComponent = (function () {
    function RulesComponent() {
    }
    return RulesComponent;
}());
RulesComponent = __decorate([
    core_1.Component({
        selector: "<rules>",
        template: __webpack_require__(92)
    }),
    __metadata("design:paramtypes", [])
], RulesComponent);
exports.RulesComponent = RulesComponent;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var SquadComponent = (function () {
    function SquadComponent() {
    }
    return SquadComponent;
}());
SquadComponent = __decorate([
    core_1.Component({
        selector: "<squad>",
        template: __webpack_require__(93)
    }),
    __metadata("design:paramtypes", [])
], SquadComponent);
exports.SquadComponent = SquadComponent;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var image_service_1 = __webpack_require__(22);
var index_1 = __webpack_require__(1);
var ImageAdditionComponent = (function () {
    function ImageAdditionComponent(configuration, storage, service) {
        this.configuration = configuration;
        this.storage = storage;
        this.service = service;
        this.isMultiple = true;
        this.loadedImage = new core_1.EventEmitter();
    }
    ImageAdditionComponent.prototype.ngOnInit = function () {
    };
    ImageAdditionComponent.prototype.ngOnDestroy = function () { };
    ImageAdditionComponent.prototype.onUploadImage = function (event) {
        var _this = this;
        if (event.srcElement.files.length > 0) {
            this.service.uploadImage(event.srcElement.files)
                .subscribe(function (result) {
                if (_this.isMultiple) {
                    _this.uploadedFiles = result;
                }
                else {
                    _this.loadedImage.emit(result[0]);
                }
            }, function (error) { return console.log(error); }, function () { });
        }
    };
    return ImageAdditionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ImageAdditionComponent.prototype, "isMultiple", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ImageAdditionComponent.prototype, "loadedImage", void 0);
ImageAdditionComponent = __decorate([
    core_1.Component({
        selector: "image-addition",
        template: __webpack_require__(94)
    }),
    __metadata("design:paramtypes", [app_constants_1.Configuration,
        index_1.LocalStorageService,
        image_service_1.ImageService])
], ImageAdditionComponent);
exports.ImageAdditionComponent = ImageAdditionComponent;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var image_model_1 = __webpack_require__(43);
var ImageDetailComponent = (function () {
    function ImageDetailComponent() {
    }
    ImageDetailComponent.prototype.ngOnInit = function () {
    };
    ImageDetailComponent.prototype.ngOnDestroy = function () {
    };
    return ImageDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", image_model_1.Image)
], ImageDetailComponent.prototype, "item", void 0);
ImageDetailComponent = __decorate([
    core_1.Component({
        selector: "image-detail",
        template: __webpack_require__(95)
    }),
    __metadata("design:paramtypes", [])
], ImageDetailComponent);
exports.ImageDetailComponent = ImageDetailComponent;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(8);
var router_1 = __webpack_require__(2);
var image_service_1 = __webpack_require__(22);
var ImageListComponent = (function () {
    function ImageListComponent(service, location, route) {
        this.service = service;
        this.location = location;
        this.route = route;
        this.defaultPath = "content\\images";
        this.path = this.defaultPath;
    }
    ImageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            if (params["path"]) {
                _this.path = params["path"];
            }
            _this.updateFolder(_this.path);
        });
    };
    ImageListComponent.prototype.ngOnDestroy = function () {
    };
    ImageListComponent.prototype.showDetails = function (file) {
        this.selectedItem = file;
    };
    ImageListComponent.prototype.removeSelection = function () {
        this.selectedItem = null;
    };
    ImageListComponent.prototype.goUp = function () {
        this.path = this.path.substring(0, this.path.lastIndexOf("\\"));
        this.updateFolder(this.path);
    };
    ImageListComponent.prototype.updateFolder = function (path) {
        var _this = this;
        this.service
            .get(path)
            .subscribe(function (data) { return _this.items = data; }, function (error) { return console.log(error); }, function () { });
        this.path = path;
        var newUrl = "image?path=" + path;
        this.location.replaceState(newUrl);
    };
    return ImageListComponent;
}());
ImageListComponent = __decorate([
    core_1.Component({
        selector: "image-list",
        template: __webpack_require__(96)
    }),
    __metadata("design:paramtypes", [image_service_1.ImageService, common_1.Location, router_1.ActivatedRoute])
], ImageListComponent);
exports.ImageListComponent = ImageListComponent;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(44);
var index_2 = __webpack_require__(6);
exports.imageRoutes = [
    {
        path: "image/add",
        component: index_1.ImageAdditionComponent,
        data: { title: "Загрузка изображений", roles: ["newsStart", "blogStart"] },
        canActivate: [index_2.RoleGuard]
    },
    {
        path: "image",
        component: index_1.ImageListComponent,
        data: { title: "Изображения", roles: ["newsStart", "blogStart"] },
        canActivate: [index_2.RoleGuard]
    }
];


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var MatchCalendarComponent = (function () {
    function MatchCalendarComponent() {
    }
    return MatchCalendarComponent;
}());
MatchCalendarComponent = __decorate([
    core_1.Component({
        selector: "<match-calendar>",
        template: __webpack_require__(97)
    }),
    __metadata("design:paramtypes", [])
], MatchCalendarComponent);
exports.MatchCalendarComponent = MatchCalendarComponent;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var router_1 = __webpack_require__(2);
var index_1 = __webpack_require__(23);
var index_2 = __webpack_require__(17);
var match_model_1 = __webpack_require__(173);
var MatchEditComponent = (function () {
    function MatchEditComponent(matchService, clubService, route, router, formBuilder) {
        this.matchService = matchService;
        this.clubService = clubService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    MatchEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            if (id > 0) {
                _this.matchService.getSingle(id)
                    .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
        this.clubService.getByName("")
            .subscribe(function (data) { return _this.parseClubs(data); }, function (error) { return console.log(error); }, function () { });
    };
    MatchEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MatchEditComponent.prototype.onSubmit = function () {
        var newsItem = this.parseForm();
        if (this.id > 0) {
            this.matchService.update(this.id, newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.matchService.create(newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
    };
    MatchEditComponent.prototype.parse = function (data) {
        this.id = data.id;
        this.editForm.patchValue(data);
    };
    MatchEditComponent.prototype.parseForm = function () {
        var item = new match_model_1.Match();
        item.id = this.id;
        item.clubId = this.editForm.controls["clubId"].value;
        item.isHome = this.editForm.controls["isHome"].value;
        item.dateTime = this.editForm.controls["dateTime"].value;
        item.typeId = this.editForm.controls["typeId"].value;
        return item;
    };
    MatchEditComponent.prototype.initForm = function () {
        this.editForm = this.formBuilder.group({
            'clubId': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'isHome': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'dateTime': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'typeId': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])]
        });
    };
    MatchEditComponent.prototype.parseClubs = function (items) {
        this.clubs = items;
    };
    return MatchEditComponent;
}());
MatchEditComponent = __decorate([
    core_1.Component({
        selector: "match-edit",
        template: __webpack_require__(98)
    }),
    __metadata("design:paramtypes", [index_1.MatchService,
        index_2.ClubService,
        router_1.ActivatedRoute,
        router_1.Router,
        forms_1.FormBuilder])
], MatchEditComponent);
exports.MatchEditComponent = MatchEditComponent;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var match_service_1 = __webpack_require__(45);
var MatchListComponent = (function () {
    function MatchListComponent(matchService, route) {
        this.matchService = matchService;
        this.route = route;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    MatchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
            _this.update();
        });
    };
    MatchListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MatchListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    MatchListComponent.prototype.update = function () {
    };
    return MatchListComponent;
}());
MatchListComponent = __decorate([
    core_1.Component({
        selector: "match-list",
        template: __webpack_require__(99)
    }),
    __metadata("design:paramtypes", [match_service_1.MatchService, router_1.ActivatedRoute])
], MatchListComponent);
exports.MatchListComponent = MatchListComponent;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Match = (function () {
    function Match() {
    }
    return Match;
}());
exports.Match = Match;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(23);
var index_2 = __webpack_require__(6);
exports.matchRoutes = [
    {
        path: "match/:id/edit",
        component: index_1.MatchEditComponent,
        data: { title: "Создание матча", roles: ["adminStart"] },
        canActivate: [index_2.RoleGuard]
    },
    {
        path: "match",
        component: index_1.MatchListComponent,
        data: { title: "Матчи", roles: ["adminStart"] },
        canActivate: [index_2.RoleGuard]
    },
    { path: "calendar", component: index_1.MatchCalendarComponent, data: { title: "Календарь" } }
];


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var common_1 = __webpack_require__(8);
var materialComment_model_1 = __webpack_require__(24);
var materialComment_service_1 = __webpack_require__(13);
var index_1 = __webpack_require__(1);
var ng2_bootstrap_1 = __webpack_require__(11);
var MaterialCommentDetailComponent = (function () {
    function MaterialCommentDetailComponent(materialCommentService, location, rolesChecked, formBuilder) {
        this.materialCommentService = materialCommentService;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.formBuilder = formBuilder;
    }
    MaterialCommentDetailComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkRoles();
        this.commentForm = this.formBuilder.group({
            'message': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'answer': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])]
        });
    };
    MaterialCommentDetailComponent.prototype.showAddCommentModal = function (index) {
        this.addCommentModal.show();
    };
    MaterialCommentDetailComponent.prototype.hideModal = function () {
        this.addCommentModal.hide();
        this.hideEditModal();
        this.deleteModal.hide();
    };
    MaterialCommentDetailComponent.prototype.showDeleteModal = function (index) {
        this.deleteModal.show();
    };
    MaterialCommentDetailComponent.prototype.hideEditModal = function () {
        this.editCommentModal.hide();
        this.cleanControls();
    };
    MaterialCommentDetailComponent.prototype.addComment = function (value) {
        var _this = this;
        var comment = this.getComment();
        this.materialCommentService.create(comment)
            .subscribe(function (data) {
            _this.item.children.push(data);
            _this.cleanControls();
            _this.addCommentModal.hide();
        }, function (error) { return console.log(error); }, function () { });
    };
    MaterialCommentDetailComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.materialCommentService.delete(this.item.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.item.children.forEach(function (x) {
                    if (_this.parent) {
                        x.parentId = _this.parent.id;
                        _this.parent.children.push(x);
                    }
                    else {
                        x.parentId = undefined;
                    }
                });
                _this.item = undefined;
                _this.hideModal();
            }
        });
    };
    MaterialCommentDetailComponent.prototype.showEditModal = function () {
        this.commentForm.patchValue(this.item);
        this.editCommentModal.show();
    };
    MaterialCommentDetailComponent.prototype.edit = function () {
        var _this = this;
        var comment = this.getComment();
        comment.answer = this.commentForm.controls["answer"].value;
        this.materialCommentService.update(this.item.id, comment)
            .subscribe(function (data) {
            _this.item = comment;
            _this.hideEditModal();
        }, function (error) { return console.log(error); }, function () { });
    };
    MaterialCommentDetailComponent.prototype.getComment = function () {
        var comment = this.item;
        comment.message = this.commentForm.controls["message"].value;
        return comment;
    };
    MaterialCommentDetailComponent.prototype.cleanControls = function () {
        this.commentForm.controls["message"].patchValue("");
        this.commentForm.controls["message"].updateValueAndValidity();
        this.commentForm.controls["answer"].patchValue("");
        this.commentForm.controls["answer"].updateValueAndValidity();
    };
    return MaterialCommentDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", materialComment_model_1.MaterialComment)
], MaterialCommentDetailComponent.prototype, "item", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MaterialCommentDetailComponent.prototype, "deep", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MaterialCommentDetailComponent.prototype, "canCommentary", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MaterialCommentDetailComponent.prototype, "materialId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", materialComment_model_1.MaterialComment)
], MaterialCommentDetailComponent.prototype, "parent", void 0);
__decorate([
    core_1.ViewChild("addCommentModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], MaterialCommentDetailComponent.prototype, "addCommentModal", void 0);
__decorate([
    core_1.ViewChild("editCommentModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], MaterialCommentDetailComponent.prototype, "editCommentModal", void 0);
__decorate([
    core_1.ViewChild("deleteModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], MaterialCommentDetailComponent.prototype, "deleteModal", void 0);
MaterialCommentDetailComponent = __decorate([
    core_1.Component({
        selector: "materialComment-detail",
        template: __webpack_require__(100)
    }),
    __metadata("design:paramtypes", [materialComment_service_1.MaterialCommentService,
        common_1.Location,
        index_1.RolesCheckedService,
        forms_1.FormBuilder])
], MaterialCommentDetailComponent);
exports.MaterialCommentDetailComponent = MaterialCommentDetailComponent;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var materialComment_service_1 = __webpack_require__(13);
var common_1 = __webpack_require__(8);
var index_1 = __webpack_require__(1);
var ng2_bootstrap_1 = __webpack_require__(11);
var MaterialCommentListComponent = (function () {
    function MaterialCommentListComponent(materialCommentService, location, rolesChecked) {
        this.materialCommentService = materialCommentService;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.page = 1;
        this.itemsPerPage = 15;
        this.selectedItemIndex = undefined;
    }
    MaterialCommentListComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkRoles();
        this.update();
    };
    MaterialCommentListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = "materialComment/list/" + this.page;
        this.location.replaceState(newUrl);
    };
    ;
    MaterialCommentListComponent.prototype.update = function () {
        var _this = this;
        this.materialCommentService
            .getAll(this.page)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    MaterialCommentListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    MaterialCommentListComponent.prototype.hideModal = function () {
        this.selectedItemIndex = undefined;
        this.deleteModal.hide();
    };
    MaterialCommentListComponent.prototype.verify = function (index) {
        var _this = this;
        var result;
        this.materialCommentService
            .verify(this.items[index].id)
            .subscribe(function (data) { return result = data; }, function (error) { return console.log(error); }, function () {
            if (result) {
                _this.items[index].isVerified = true;
            }
        });
    };
    MaterialCommentListComponent.prototype.showDeleteModal = function (index) {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    };
    MaterialCommentListComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.materialCommentService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.items.splice(_this.selectedItemIndex, 1);
                _this.hideModal();
            }
        });
    };
    return MaterialCommentListComponent;
}());
__decorate([
    core_1.ViewChild("deleteModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], MaterialCommentListComponent.prototype, "deleteModal", void 0);
MaterialCommentListComponent = __decorate([
    core_1.Component({
        selector: "materialComment-list",
        template: __webpack_require__(101)
    }),
    __metadata("design:paramtypes", [materialComment_service_1.MaterialCommentService, common_1.Location, index_1.RolesCheckedService])
], MaterialCommentListComponent);
exports.MaterialCommentListComponent = MaterialCommentListComponent;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var materialComment_model_1 = __webpack_require__(24);
var materialComment_service_1 = __webpack_require__(13);
var common_1 = __webpack_require__(8);
var index_1 = __webpack_require__(1);
var MaterialCommentSectionComponent = (function () {
    function MaterialCommentSectionComponent(materialCommentService, location, rolesChecked, formBuilder) {
        this.materialCommentService = materialCommentService;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.formBuilder = formBuilder;
        this.items = [];
        this.page = 1;
        this.itemsPerPage = 15;
        this.canCommentary = false;
    }
    MaterialCommentSectionComponent.prototype.ngOnInit = function () {
        this.roles = this.rolesChecked.checkRoles();
        this.update();
        this.commentForm = this.formBuilder.group({
            'message': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(3)
                ])]
        });
    };
    MaterialCommentSectionComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
    };
    ;
    MaterialCommentSectionComponent.prototype.update = function () {
        var _this = this;
        this.materialCommentService
            .getAllByMaterial(this.page, this.materialId)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    MaterialCommentSectionComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    MaterialCommentSectionComponent.prototype.onSubmit = function (value) {
        var _this = this;
        var comment = new materialComment_model_1.MaterialComment();
        comment.message = this.commentForm.controls["message"].value;
        comment.materialId = this.materialId;
        this.materialCommentService.create(comment)
            .subscribe(function (data) {
            _this.items.push(data);
            _this.commentForm.controls["message"].patchValue("");
        }, function (error) { return console.log(error); }, function () { });
    };
    return MaterialCommentSectionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MaterialCommentSectionComponent.prototype, "materialId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MaterialCommentSectionComponent.prototype, "canCommentary", void 0);
MaterialCommentSectionComponent = __decorate([
    core_1.Component({
        selector: "comments",
        template: __webpack_require__(102)
    }),
    __metadata("design:paramtypes", [materialComment_service_1.MaterialCommentService, common_1.Location, index_1.RolesCheckedService,
        forms_1.FormBuilder])
], MaterialCommentSectionComponent);
exports.MaterialCommentSectionComponent = MaterialCommentSectionComponent;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(46);
exports.materialCommentRoutes = [
    { path: "materialComment", component: index_1.MaterialCommentListComponent, data: { title: "Комментарии" } },
    { path: "materialComment/list", component: index_1.MaterialCommentListComponent, data: { title: "Комментарии" } },
    { path: "materialComment/list/:page", component: index_1.MaterialCommentListComponent, data: { title: "Комментарии" } },
    { path: "materialComment/list/:page/:categoryId", component: index_1.MaterialCommentListComponent, data: { title: "Комментарии" } },
];


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var NewsCategory = (function () {
    function NewsCategory() {
    }
    return NewsCategory;
}());
exports.NewsCategory = NewsCategory;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var newsCategory_list_component_1 = __webpack_require__(49);
var newsCategory_edit_component_1 = __webpack_require__(48);
var index_1 = __webpack_require__(6);
exports.newsCategoryRoutes = [
    { path: "newsCategory", component: newsCategory_list_component_1.NewsCategoryListComponent, data: { title: "Категории новостей" } },
    {
        path: "newsCategory/:id/edit",
        component: newsCategory_edit_component_1.NewsCategoryEditComponent,
        data: { title: "Создание категории", roles: ["newsFull"] },
        canActivate: [index_1.RoleGuard]
    }
];


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(9);
var news_service_1 = __webpack_require__(14);
var router_1 = __webpack_require__(2);
var index_1 = __webpack_require__(1);
var ng2_bootstrap_1 = __webpack_require__(11);
var NewsDetailComponent = (function () {
    function NewsDetailComponent(newsService, route, localStorage, rolesChecked, router, titleService) {
        this.newsService = newsService;
        this.route = route;
        this.localStorage = localStorage;
        this.rolesChecked = rolesChecked;
        this.router = router;
        this.titleService = titleService;
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.newsService.getSingle(id)
                .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
        });
    };
    NewsDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewsDetailComponent.prototype.showActivateModal = function (index) {
        this.activateModal.show();
    };
    NewsDetailComponent.prototype.showDeleteModal = function (index) {
        this.deleteModal.show();
    };
    NewsDetailComponent.prototype.hideModal = function () {
        this.activateModal.hide();
        this.deleteModal.hide();
    };
    NewsDetailComponent.prototype.activate = function () {
        var _this = this;
        var result;
        this.newsService.activate(this.item.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.item.pending = false;
                _this.hideModal();
            }
        });
    };
    NewsDetailComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.newsService.delete(this.item.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.hideModal();
                _this.router.navigate(["/news"]);
            }
        });
    };
    NewsDetailComponent.prototype.parse = function (item) {
        this.item = item;
        this.titleService.setTitle(item.title);
        this.addView();
    };
    NewsDetailComponent.prototype.addView = function () {
        var id = this.item.id;
        if (!this.localStorage.tryAddViewForNews(id)) {
            this.newsService.addView(id).subscribe(function (data) { return data; });
        }
    };
    return NewsDetailComponent;
}());
__decorate([
    core_1.ViewChild("activateModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], NewsDetailComponent.prototype, "activateModal", void 0);
__decorate([
    core_1.ViewChild("deleteModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], NewsDetailComponent.prototype, "deleteModal", void 0);
NewsDetailComponent = __decorate([
    core_1.Component({
        selector: "news-detail",
        template: __webpack_require__(105)
    }),
    __metadata("design:paramtypes", [news_service_1.NewsService,
        router_1.ActivatedRoute,
        index_1.LocalStorageService,
        index_1.RolesCheckedService,
        router_1.Router,
        platform_browser_1.Title])
], NewsDetailComponent);
exports.NewsDetailComponent = NewsDetailComponent;


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var router_1 = __webpack_require__(2);
var news_service_1 = __webpack_require__(14);
var news_model_1 = __webpack_require__(50);
var index_1 = __webpack_require__(47);
var index_2 = __webpack_require__(1);
var NewsEditComponent = (function () {
    function NewsEditComponent(newsService, newsCategoryService, route, router, rolesChecked, formBuilder) {
        this.newsService = newsService;
        this.newsCategoryService = newsCategoryService;
        this.route = route;
        this.router = router;
        this.rolesChecked = rolesChecked;
        this.formBuilder = formBuilder;
    }
    NewsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.initForm();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            if (id > 0) {
                _this.newsService.getSingle(id)
                    .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
        this.newsCategoryService.getAll()
            .subscribe(function (data) { return _this.parseCategories(data); }, function (error) { return console.log(error); }, function () { });
    };
    NewsEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NewsEditComponent.prototype.changeMessage = function (event) {
        console.log(event);
    };
    NewsEditComponent.prototype.onSubmit = function () {
        var newsItem = this.parseForm();
        if (this.id > 0) {
            this.newsService.update(this.id, newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.newsService.create(newsItem)
                .subscribe(function (data) { return console.log(data.id); }, function (error) { return console.log(error); }, function () { });
        }
    };
    NewsEditComponent.prototype.updateImage = function (path) {
        this.editForm.patchValue({ photo: path });
    };
    NewsEditComponent.prototype.parse = function (data) {
        this.id = data.id;
        this.editForm.patchValue(data);
    };
    NewsEditComponent.prototype.parseForm = function () {
        var item = new news_model_1.News();
        item.id = this.id;
        item.categoryId = this.editForm.controls["categoryId"].value;
        item.title = this.editForm.controls["title"].value;
        item.brief = this.editForm.controls["brief"].value;
        item.message = this.editForm.controls["message"].value;
        item.source = this.editForm.controls["source"].value;
        item.photo = this.editForm.controls["photo"].value;
        item.pending = this.editForm.controls["pending"].value;
        item.canCommentary = this.editForm.controls["canCommentary"].value;
        item.onTop = this.editForm.controls["onTop"].value;
        return item;
    };
    NewsEditComponent.prototype.initForm = function () {
        this.editForm = this.formBuilder.group({
            'categoryId': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'title': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'brief': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'message': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'source': ["", forms_1.Validators.compose([])],
            'photo': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'canCommentary': ["true", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'onTop': ["false", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'pending': ["true", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])]
        });
    };
    NewsEditComponent.prototype.parseCategories = function (items) {
        this.categories = items;
    };
    return NewsEditComponent;
}());
NewsEditComponent = __decorate([
    core_1.Component({
        selector: "news-edit",
        template: __webpack_require__(106)
    }),
    __metadata("design:paramtypes", [news_service_1.NewsService,
        index_1.NewsCategoryService,
        router_1.ActivatedRoute,
        router_1.Router,
        index_2.RolesCheckedService,
        forms_1.FormBuilder])
], NewsEditComponent);
exports.NewsEditComponent = NewsEditComponent;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(8);
var news_service_1 = __webpack_require__(14);
var newsFilters_model_1 = __webpack_require__(185);
var router_1 = __webpack_require__(2);
var index_1 = __webpack_require__(1);
var ng2_bootstrap_1 = __webpack_require__(11);
var NewsListComponent = (function () {
    function NewsListComponent(router, newsService, route, location, rolesChecked) {
        this.router = router;
        this.newsService = newsService;
        this.route = route;
        this.location = location;
        this.rolesChecked = rolesChecked;
        this.page = 1;
        this.itemsPerPage = 15;
        this.selectedItemIndex = null;
    }
    NewsListComponent.prototype.showActivateModal = function (index) {
        this.selectedItemIndex = index;
        this.activateModal.show();
    };
    NewsListComponent.prototype.showDeleteModal = function (index) {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    };
    NewsListComponent.prototype.hideModal = function () {
        this.selectedItemIndex = null;
        this.activateModal.hide();
        this.deleteModal.hide();
    };
    NewsListComponent.prototype.activate = function () {
        var _this = this;
        var result;
        var news = this.items[this.selectedItemIndex];
        this.newsService.activate(news.id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                news.pending = false;
                _this.hideModal();
            }
        });
    };
    NewsListComponent.prototype.delete = function () {
        var _this = this;
        var result;
        this.newsService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(function (res) { return result = res; }, function (e) { return console.log(e); }, function () {
            if (result) {
                _this.items.splice(_this.selectedItemIndex, 1);
                _this.hideModal();
            }
        });
    };
    NewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.route.params.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
        });
        this.parseQueryParamsAndUpdate();
    };
    NewsListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub2.unsubscribe();
    };
    NewsListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.update();
        var newUrl = "news/list/" + this.page + "?";
        if (this.categoryId) {
            newUrl = newUrl + "?categoryId=" + this.categoryId;
        }
        if (this.userName) {
            newUrl = "" + newUrl + (this.categoryId ? "&" : "?") + "userName=" + this.userName;
        }
        this.location.replaceState(newUrl);
    };
    ;
    NewsListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    NewsListComponent.prototype.update = function () {
        var _this = this;
        var filters = new newsFilters_model_1.MaterialFilters();
        filters.categoryId = this.categoryId || null;
        filters.materialType = "News";
        filters.userName = this.userName || null;
        filters.page = this.page;
        this.newsService
            .getAll(filters)
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { });
    };
    NewsListComponent.prototype.parseQueryParamsAndUpdate = function () {
        var _this = this;
        this.sub2 = this.route.queryParams.subscribe(function (qParams) {
            _this.categoryId = qParams["categoryId"] || "";
            _this.userName = qParams["userName"] || "";
            _this.update();
        });
    };
    return NewsListComponent;
}());
__decorate([
    core_1.ViewChild("activateModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], NewsListComponent.prototype, "activateModal", void 0);
__decorate([
    core_1.ViewChild("deleteModal"),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], NewsListComponent.prototype, "deleteModal", void 0);
NewsListComponent = __decorate([
    core_1.Component({
        selector: "news-list",
        template: __webpack_require__(107)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        news_service_1.NewsService,
        router_1.ActivatedRoute,
        common_1.Location,
        index_1.RolesCheckedService])
], NewsListComponent);
exports.NewsListComponent = NewsListComponent;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(26);
var index_2 = __webpack_require__(6);
exports.newsRoutes = [
    { path: "news", component: index_1.NewsListComponent, data: { title: "Новости", breadcrumb: "Новости" } },
    { path: "news/list", component: index_1.NewsListComponent, data: { title: "Новости", breadcrumb: "Новости" } },
    { path: "news/list/:page", component: index_1.NewsListComponent, data: { title: "Новости", breadcrumb: "Новости" } },
    { path: "news/:id", component: index_1.NewsDetailComponent, data: { title: "Новость", breadcrumb: "Новость" } },
    {
        path: "news/:id/edit",
        component: index_1.NewsEditComponent,
        data: { title: "Создание новости", breadcrumb: "Создание новости", roles: ["newsStart", "blogStart"] },
        canActivate: [index_2.RoleGuard]
    }
];


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var MaterialFilters = (function () {
    function MaterialFilters() {
        this.page = 1;
    }
    return MaterialFilters;
}());
exports.MaterialFilters = MaterialFilters;


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var PlayerStatisticsComponent = (function () {
    function PlayerStatisticsComponent() {
    }
    return PlayerStatisticsComponent;
}());
PlayerStatisticsComponent = __decorate([
    core_1.Component({
        selector: "<player-statistics>",
        template: __webpack_require__(108)
    }),
    __metadata("design:paramtypes", [])
], PlayerStatisticsComponent);
exports.PlayerStatisticsComponent = PlayerStatisticsComponent;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(51);
exports.playerRoutes = [
    { path: "player/statistics", component: index_1.PlayerStatisticsComponent, data: { title: "Статистика игроков" } },
];


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var pm_service_1 = __webpack_require__(12);
var index_1 = __webpack_require__(1);
var PmDetailComponent = (function () {
    function PmDetailComponent(pmService, rolesChecked, route) {
        this.pmService = pmService;
        this.rolesChecked = rolesChecked;
        this.route = route;
    }
    PmDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.pmService.getSingle(id)
                .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
        });
    };
    PmDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PmDetailComponent.prototype.writePm = function () {
        this.selectedUserId = this.item.receiverId;
    };
    PmDetailComponent.prototype.closePmWindow = function (event) {
        this.selectedUserId = null;
    };
    PmDetailComponent.prototype.parse = function (item) {
        this.item = item;
    };
    return PmDetailComponent;
}());
PmDetailComponent = __decorate([
    core_1.Component({
        selector: "pm-detail",
        template: __webpack_require__(109)
    }),
    __metadata("design:paramtypes", [pm_service_1.PmService,
        index_1.RolesCheckedService,
        router_1.ActivatedRoute])
], PmDetailComponent);
exports.PmDetailComponent = PmDetailComponent;


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var router_1 = __webpack_require__(2);
var pm_model_1 = __webpack_require__(27);
var pm_service_1 = __webpack_require__(12);
var PmEditComponent = (function () {
    function PmEditComponent(service, formBuilder, route, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.id = 0;
        this.users = "/api/v1/user/GetUserNames?typed=:keyword";
    }
    PmEditComponent.prototype.ngOnInit = function () {
        this.editForm = this.formBuilder.group({
            'receiver': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            'title': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(30)
                ])
            ],
            'message': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(500)
                ])
            ]
        });
    };
    PmEditComponent.prototype.ngOnDestroy = function () {
    };
    PmEditComponent.prototype.updateUsername = function (user) {
        if (user) {
            this.editForm.patchValue({ receiver: user.id });
        }
    };
    PmEditComponent.prototype.onSubmit = function () {
        var model = new pm_model_1.Pm();
        model.receiverId = this.editForm.controls["receiver"].value;
        model.title = this.editForm.controls["title"].value;
        model.message = this.editForm.controls["message"].value;
        var res = this.service.create(model).subscribe(function (data) { return data; });
        this.router.navigate(["/pm"]);
    };
    return PmEditComponent;
}());
PmEditComponent = __decorate([
    core_1.Component({
        selector: "pm-edit",
        template: __webpack_require__(110)
    }),
    __metadata("design:paramtypes", [pm_service_1.PmService,
        forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router])
], PmEditComponent);
exports.PmEditComponent = PmEditComponent;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var pm_service_1 = __webpack_require__(12);
var PmListComponent = (function () {
    function PmListComponent(pmService, router) {
        this.pmService = pmService;
        this.router = router;
    }
    PmListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pmService
            .getAll()
            .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
    };
    PmListComponent.prototype.parse = function (model) {
        this.received = model.received;
        this.sent = model.sent;
    };
    PmListComponent.prototype.delete = function (index) {
    };
    PmListComponent.prototype.writePm = function () {
        this.router.navigate(["/pm", 0, "edit"]);
    };
    return PmListComponent;
}());
PmListComponent = __decorate([
    core_1.Component({
        selector: "pm-list",
        template: __webpack_require__(111)
    }),
    __metadata("design:paramtypes", [pm_service_1.PmService, router_1.Router])
], PmListComponent);
exports.PmListComponent = PmListComponent;


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var router_1 = __webpack_require__(2);
var pm_model_1 = __webpack_require__(27);
var pm_service_1 = __webpack_require__(12);
var PmReplyComponent = (function () {
    function PmReplyComponent(service, formBuilder, route, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.id = 0;
        this.close = new core_1.EventEmitter();
    }
    PmReplyComponent.prototype.ngOnInit = function () {
        this.editForm = this.formBuilder.group({
            'title': [
                this.getTitle(), forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(30)
                ])
            ],
            'message': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(500)
                ])
            ]
        });
    };
    PmReplyComponent.prototype.ngOnDestroy = function () {
    };
    PmReplyComponent.prototype.onSubmit = function () {
        var _this = this;
        var model = new pm_model_1.Pm();
        model.receiverId = this.userId;
        model.title = this.editForm.controls["title"].value;
        model.message = this.editForm.controls["message"].value;
        var res = this.service.create(model).subscribe(function (data) {
            if (data) {
                _this.closeWindow();
            }
        }, function (error) { return console.log(error); }, function () {
        });
    };
    PmReplyComponent.prototype.closeWindow = function () {
        this.close.emit({});
    };
    PmReplyComponent.prototype.getTitle = function () {
        if (!this.title) {
            return "";
        }
        var match = this.title.match(/\[.*]/);
        if (match) {
            var newValue = parseInt(match[0].substring(1, match[0].length - 1));
            return this.title.replace(/\[.*]/, "[" + ++newValue + "]");
        }
        else {
            return "Re[1]: " + this.title;
        }
    };
    return PmReplyComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PmReplyComponent.prototype, "userName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PmReplyComponent.prototype, "userId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PmReplyComponent.prototype, "title", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PmReplyComponent.prototype, "close", void 0);
PmReplyComponent = __decorate([
    core_1.Component({
        selector: "pm-reply",
        template: __webpack_require__(112)
    }),
    __metadata("design:paramtypes", [pm_service_1.PmService,
        forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router])
], PmReplyComponent);
exports.PmReplyComponent = PmReplyComponent;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(52);
var index_2 = __webpack_require__(6);
exports.pmRoutes = [
    { path: "pm/:id/edit", component: index_1.PmEditComponent, data: { title: "Написание личного сообщения" }, canActivate: [index_2.RoleGuard] },
    { path: "pm/:id", component: index_1.PmDetailComponent, data: { title: "Личное сообщение" }, canActivate: [index_2.RoleGuard] },
    { path: "pm", component: index_1.PmListComponent, data: { title: "Личные сообщения" }, canActivate: [index_2.RoleGuard] }
];


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var RoleGroup = (function () {
    function RoleGroup() {
    }
    return RoleGroup;
}());
exports.RoleGroup = RoleGroup;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__(3);
var httpWrapper_1 = __webpack_require__(7);
var RoleGroupService = (function () {
    function RoleGroupService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getAll = function () {
            return _this.http.get(_this.actionUrl).map(function (res) { return res.json(); });
        };
        this.actionUrl = configuration.serverWithApiUrl + "roleGroup/";
    }
    return RoleGroupService;
}());
RoleGroupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpWrapper_1.HttpWrapper, app_constants_1.Configuration])
], RoleGroupService);
exports.RoleGroupService = RoleGroupService;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var SeasonEplTableComponent = (function () {
    function SeasonEplTableComponent() {
    }
    return SeasonEplTableComponent;
}());
SeasonEplTableComponent = __decorate([
    core_1.Component({
        selector: "<season-epltable>",
        template: __webpack_require__(113)
    }),
    __metadata("design:paramtypes", [])
], SeasonEplTableComponent);
exports.SeasonEplTableComponent = SeasonEplTableComponent;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(54);
exports.seasonRoutes = [
    { path: "season/eplTable", component: index_1.SeasonEplTableComponent, data: { title: "Таблица АПЛ" } }
];


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var GlobalValidators = (function () {
    function GlobalValidators() {
    }
    GlobalValidators.mailFormat = function (control) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (control.value !== "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    GlobalValidators.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    GlobalValidators.mustBeGreaterThanZero = function (control) {
        if (control.value !== "" && +control.value > 0) {
            return null;
        }
        return { "ValueMustBeGreaterThanZero": true };
    };
    return GlobalValidators;
}());
GlobalValidators = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], GlobalValidators);
exports.GlobalValidators = GlobalValidators;


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
exports.LocalStorage = new core_1.OpaqueToken("localStorage");


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Pageable = (function () {
    function Pageable() {
    }
    return Pageable;
}());
exports.Pageable = Pageable;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(9);
__webpack_require__(210);
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(activatedRoute, router, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
        this.breadcrumbs = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === "primary"; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            _this.titleService.setTitle(event["title"]);
        });
    };
    BreadcrumbComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ""; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        var children = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            if (child.outlet !== router_1.PRIMARY_OUTLET) {
                continue;
            }
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                continue;
            }
            var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join("/");
            url += "/" + routeURL;
            var breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url
            };
            breadcrumbs.push(breadcrumb);
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
    };
    return BreadcrumbComponent;
}());
BreadcrumbComponent = __decorate([
    core_1.Component({
        selector: "breadcrumb",
        template: "\n    <ol class=\"breadcrumb\">\n      <li><a routerLink=\"\" class=\"breadcrumb\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a></li>\n      <li *ngFor=\"let breadcrumb of breadcrumbs\">\n        <a [routerLink]=\"[breadcrumb.url, breadcrumb.params]\"></a>\n      </li>\n    </ol>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        platform_browser_1.Title])
], BreadcrumbComponent);
exports.BreadcrumbComponent = BreadcrumbComponent;


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(200));


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var user_detail_component_1 = __webpack_require__(56);
var user_list_component_1 = __webpack_require__(57);
exports.userRoutes = [
    { path: "user", component: user_list_component_1.UserListComponent, data: { title: "Пользователи" } },
    { path: "user/list", component: user_list_component_1.UserListComponent, data: { title: "Пользователи" } },
    { path: "user/list/:page", component: user_list_component_1.UserListComponent, data: { title: "Пользователи" } },
    { path: "user/list/:page/:userName", component: user_list_component_1.UserListComponent, data: { title: "Пользователи" } },
    { path: "user/:id", component: user_detail_component_1.UserDetailComponent, data: { title: "Пользователь" } }
];


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var UserFilters = (function () {
    function UserFilters() {
        this.page = 1;
    }
    return UserFilters;
}());
exports.UserFilters = UserFilters;


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var wish_model_1 = __webpack_require__(59);
var wish_service_1 = __webpack_require__(30);
var router_1 = __webpack_require__(2);
var WishEditComponent = (function () {
    function WishEditComponent(service, formBuilder, route, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.id = 0;
    }
    WishEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            'message': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(30)
                ])
            ],
            'title': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(300)
                ])
            ],
            'type': [
                "", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ]
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params["id"];
            if (_this.id > 0) {
                _this.service
                    .getSingle(_this.id)
                    .subscribe(function (data) { return _this.editForm.patchValue(data); }, function (error) { return console.log(error); }, function () { });
            }
        });
        this.updateTypes();
    };
    WishEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WishEditComponent.prototype.onSubmit = function () {
        var model = new wish_model_1.Wish();
        model.id = this.id;
        model.message = this.editForm.controls["message"].value;
        model.title = this.editForm.controls["title"].value;
        model.type = this.editForm.controls["type"].value;
        var res;
        if (this.id > 0) {
            var result = this.service.update(this.id, model).subscribe(function (data) { return res = data; });
        }
        else {
            var result = this.service.create(model).subscribe(function (data) { return res = data; });
        }
        this.router.navigate(["/wish"]);
    };
    WishEditComponent.prototype.updateTypes = function () {
        var _this = this;
        this.service
            .getTypes()
            .subscribe(function (data) { return _this.types = data; });
    };
    return WishEditComponent;
}());
WishEditComponent = __decorate([
    core_1.Component({
        selector: "wish-edit",
        template: __webpack_require__(116)
    }),
    __metadata("design:paramtypes", [wish_service_1.WishService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
], WishEditComponent);
exports.WishEditComponent = WishEditComponent;


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var wish_service_1 = __webpack_require__(30);
var router_1 = __webpack_require__(2);
var WishListComponent = (function () {
    function WishListComponent(service, route) {
        this.service = service;
        this.route = route;
        this.page = 1;
        this.itemsPerPage = 15;
    }
    WishListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params["page"]) {
                _this.page = +params["page"];
            }
            _this.categoryId = +params["categoryId"];
            _this.update();
        });
    };
    WishListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WishListComponent.prototype.parsePageable = function (pageable) {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    };
    WishListComponent.prototype.update = function () {
        var _this = this;
        this.service
            .getAll()
            .subscribe(function (data) { return _this.parsePageable(data); }, function (error) { return console.log(error); }, function () { return console.log("success load list wish"); });
    };
    WishListComponent.prototype.getTypeClass = function (i) {
        switch (i) {
            case 1:
                return "panel-danger";
            case 2:
                return "panel-warning";
            case 3:
                return "panel-info";
            case 4:
                return "panel-primary";
            default:
                return "";
        }
    };
    ;
    return WishListComponent;
}());
WishListComponent = __decorate([
    core_1.Component({
        selector: "wish-list",
        template: __webpack_require__(117)
    }),
    __metadata("design:paramtypes", [wish_service_1.WishService, router_1.ActivatedRoute])
], WishListComponent);
exports.WishListComponent = WishListComponent;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(58);
exports.wishRoutes = [
    { path: "wish", component: index_1.WishListComponent, data: { title: "Пожелания" } },
    { path: "wish/:id/edit", component: index_1.WishEditComponent, data: { title: "Создание пожелания" } }
];


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var WishType = (function () {
    function WishType() {
    }
    return WishType;
}());
exports.WishType = WishType;


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

/*eslint-env browser*/

var clientOverlay = document.createElement('div');
var styles = {
  background: 'rgba(0,0,0,0.85)',
  color: '#E8E8E8',
  lineHeight: '1.2',
  whiteSpace: 'pre',
  fontFamily: 'Menlo, Consolas, monospace',
  fontSize: '13px',
  position: 'fixed',
  zIndex: 9999,
  padding: '10px',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'auto',
  dir: 'ltr'
};
for (var key in styles) {
  clientOverlay.style[key] = styles[key];
}

var ansiHTML = __webpack_require__(66);
var colors = {
  reset: ['transparent', 'transparent'],
  black: '181818',
  red: 'E36049',
  green: 'B3CB74',
  yellow: 'FFD080',
  blue: '7CAFC2',
  magenta: '7FACCA',
  cyan: 'C3C2EF',
  lightgrey: 'EBE7E3',
  darkgrey: '6D7891'
};
ansiHTML.setColors(colors);

var Entities = __webpack_require__(68).AllHtmlEntities;
var entities = new Entities();

exports.showProblems =
function showProblems(type, lines) {
  clientOverlay.innerHTML = '';
  lines.forEach(function(msg) {
    msg = ansiHTML(entities.encode(msg));
    var div = document.createElement('div');
    div.style.marginBottom = '26px';
    div.innerHTML = problemType(type) + ' in ' + msg;
    clientOverlay.appendChild(div);
  });
  if (document.body) {
    document.body.appendChild(clientOverlay);
  }
};

exports.clear =
function clear() {
  if (document.body && clientOverlay.parentNode) {
    document.body.removeChild(clientOverlay);
  }
};

var problemColors = {
  errors: colors.red,
  warnings: colors.yellow
};

function problemType (type) {
  var color = problemColors[type] || colors.red;
  return (
    '<span style="background-color:#' + color + '; color:#fff; padding:2px 4px; border-radius: 2px">' +
      type.slice(0, -1).toUpperCase() +
    '</span>'
  );
}


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

/**
 * Based heavily on https://github.com/webpack/webpack/blob/
 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
 * Original copyright Tobias Koppers @sokra (MIT license)
 */

/* global window __webpack_hash__ */

if (false) {
  throw new Error("[HMR] Hot Module Replacement is disabled.");
}

var hmrDocsUrl = "http://webpack.github.io/docs/hot-module-replacement-with-webpack.html"; // eslint-disable-line max-len

var lastHash;
var failureStatuses = { abort: 1, fail: 1 };
var applyOptions = { ignoreUnaccepted: true };

function upToDate(hash) {
  if (hash) lastHash = hash;
  return lastHash == __webpack_require__.h();
}

module.exports = function(hash, moduleMap, options) {
  var reload = options.reload;
  if (!upToDate(hash) && module.hot.status() == "idle") {
    if (options.log) console.log("[HMR] Checking for updates on the server...");
    check();
  }

  function check() {
    var cb = function(err, updatedModules) {
      if (err) return handleError(err);

      if(!updatedModules) {
        if (options.warn) {
          console.warn("[HMR] Cannot find update (Full reload needed)");
          console.warn("[HMR] (Probably because of restarting the server)");
        }
        performReload();
        return null;
      }

      var applyCallback = function(applyErr, renewedModules) {
        if (applyErr) return handleError(applyErr);

        if (!upToDate()) check();

        logUpdates(updatedModules, renewedModules);
      };

      var applyResult = module.hot.apply(applyOptions, applyCallback);
      // webpack 2 promise
      if (applyResult && applyResult.then) {
        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
        applyResult.then(function(outdatedModules) {
          applyCallback(null, outdatedModules);
        });
        applyResult.catch(applyCallback);
      }

    };

    var result = module.hot.check(false, cb);
    // webpack 2 promise
    if (result && result.then) {
        result.then(function(updatedModules) {
            cb(null, updatedModules);
        });
        result.catch(cb);
    }
  }

  function logUpdates(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function(moduleId) {
      return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });

    if(unacceptedModules.length > 0) {
      if (options.warn) {
        console.warn(
          "[HMR] The following modules couldn't be hot updated: " +
          "(Full reload needed)\n" +
          "This is usually because the modules which have changed " +
          "(and their parents) do not know how to hot reload themselves. " +
          "See " + hmrDocsUrl + " for more details."
        );
        unacceptedModules.forEach(function(moduleId) {
          console.warn("[HMR]  - " + moduleMap[moduleId]);
        });
      }
      performReload();
      return;
    }

    if (options.log) {
      if(!renewedModules || renewedModules.length === 0) {
        console.log("[HMR] Nothing hot updated.");
      } else {
        console.log("[HMR] Updated modules:");
        renewedModules.forEach(function(moduleId) {
          console.log("[HMR]  - " + moduleMap[moduleId]);
        });
      }

      if (upToDate()) {
        console.log("[HMR] App is up to date.");
      }
    }
  }

  function handleError(err) {
    if (module.hot.status() in failureStatuses) {
      if (options.warn) {
        console.warn("[HMR] Cannot check for update (Full reload needed)");
        console.warn("[HMR] " + err.stack || err.message);
      }
      performReload();
      return;
    }
    if (options.warn) {
      console.warn("[HMR] Update check failed: " + err.stack || err.message);
    }
  }

  function performReload() {
    if (reload) {
      if (options.warn) console.warn("[HMR] Reloading page");
      window.location.reload();
    }
  }
};


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(683);

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(713);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(716);

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(718);

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(723);

/***/ },
/* 215 */,
/* 216 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(64);
__webpack_require__(63);
module.exports = __webpack_require__(62);


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var TinymceComponent = TinymceComponent_1 = (function () {
    function TinymceComponent(zone) {
        this.elementId = Math.random().toString(36).substring(2);
        this.change = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this._value = '';
        this.value = this.initVal;
        this.zone = zone;
    }
    TinymceComponent.prototype.ngAfterViewInit = function () {
        console.log(window.tinymce);
    };
    Object.defineProperty(TinymceComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    TinymceComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    TinymceComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    TinymceComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    TinymceComponent.prototype.onChange = function (_) { };
    TinymceComponent.prototype.onTouched = function () { };
    TinymceComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    TinymceComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    return TinymceComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TinymceComponent.prototype, "change", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TinymceComponent.prototype, "ready", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TinymceComponent.prototype, "blur", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TinymceComponent.prototype, "initVal", void 0);
TinymceComponent = TinymceComponent_1 = __decorate([
    core_1.Component({
        selector: "tinymce",
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return TinymceComponent_1; }),
                multi: true
            }
        ],
        template: "<textarea id=\"{{elementId}}\">{{initVal}}</textarea>"
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], TinymceComponent);
exports.TinymceComponent = TinymceComponent;
var TinymceComponent_1;


/***/ }
/******/ ]);
//# sourceMappingURL=main-client.js.map