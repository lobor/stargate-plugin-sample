import { Plugin } from './../../core/';


class PluginSample extends Plugin {
  get props() {
    return {
      dependencies: [],
      conf: require('./config/config')
    };
  }

  onConfig(){
  }

  onDependencies(){

  }

  onBack(){

  }

  onFront(){

  }
}


export default PluginSample;
