/**
 * Created by colin on 2017/7/8.
 */

/**
 * 将classname混合起来
 * @param input
 * @constructor
 */
export default function MixClasses(prop) {
  let conjunction = '';

  if(typeof prop === 'object'){
    if(prop.className && prop.className.length > 0) {
      conjunction += prop.className;
    }

    if(prop.myClass && prop.myClass.length > 0) {
      conjunction += ' ' + prop.myClass;
    }
  }

  return conjunction;
}