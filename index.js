var basePath = process.cwd();
import { Plugin } from './../../core/';

class PluginSample extends Plugin {
  get props() {
    return {
      dependencies: []
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
