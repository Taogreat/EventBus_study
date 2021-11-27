/* 
自定义全局事件总线对象模块
*/
/* 
(function (window) {
    const eventBus = {}
  
    let listenerContainer = {}
  
    eventBus.on = function (eventName, listener) {
      const listeners = listenerContainer[eventName]
      if (listeners) {
        listeners.push(listener)
      } else {
        listenerContainer[eventName] = [listener]
      }
    }
  
    eventBus.emit = function (eventName, data) {
      const listeners = listenerContainer[eventName]
      if (listeners && listeners.length>0) {
        listeners.forEach(listener => listener(data))
      }
    }
  
    eventBus.off = function (eventName) {
      if (eventName===undefined) {
        listenerContainer = {}
      } else {
        delete listenerContainer[eventName]
      }
    }
  
    window.eventBus = eventBus
  })(window)*/

//   1). on(eventName, listener): 绑定事件监听
//   2). emit(eventName, data): 分发事件
//   3). off(eventName): 移除事件监听
  (function(window){

    const eventBus={}

    let listeners={
        // eventName:[listener,listener,...]
    }

    // 绑定事件监听
    eventBus.on=function(eventName, listener){
        
        if(!listeners[eventName]){
            listeners[eventName]=[]
        }
        listeners[eventName].push(listener)
        
        /*
        if(listeners[eventName]){
            listeners[eventName].push(listener)
        }else{
            listeners[eventName]=[listener]
        }*/
    }

    // 分发事件
    eventBus.emit=function(eventName, data){
        if(listeners[eventName]){
            listeners[eventName].forEach(listener => listener(data))
        }
    }

    // 移除事件监听
    eventBus.off=function(eventName){
        if(typeof eventName === 'string'){
            delete listeners[eventName]
        }else{
            listeners={}
        }
        
    }

    window.eventBus=eventBus


  })(window)