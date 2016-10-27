import { Plugin } from './../../core/';


class PluginSample extends Plugin {
  get props() {
    return {
      dependencies: [],
      conf: require('./config/config')
    };
  }

  onLoad(){
    console.log('onload');
  }

  install(){
    console.log(5);
  }
}


export default PluginSample;
