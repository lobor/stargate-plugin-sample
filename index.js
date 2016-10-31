import { Plugin } from './../../core/';



class PluginSample extends Plugin {
  get props() {
    return {
      dependencies: [],
      conf: require('./config/config')
    };
  }

  onLoad(){

  }

  install(){

  }
}


export default PluginSample;
